#!/usr/bin/env node
/**
 * TOEIC Link Audit Script
 * 
 * Extracts all links from study-plan-data-optimized.ts and tests their availability.
 * Outputs a CSV report with link status, response time, and location in the study plan.
 * 
 * Usage: npx tsx scripts/audit-toeic-links.ts
 */

import { studyPlanData } from '../src/lib/toeic-guild/study-plan-data-optimized';
import { StudyTask } from '../src/lib/toeic-guild/types';
import * as fs from 'fs';
import * as path from 'path';

type LinkAuditResult = {
  url: string;
  title: string;
  status: number | 'ERROR' | 'TIMEOUT';
  responseTime: number;
  location: string; // e.g., "Month 1, Week 1, Day 1 (Thứ 2)"
  linkType: 'primary' | 'additional';
  errorMessage?: string;
};

const TIMEOUT_MS = 10000; // 10 seconds
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

/**
 * Test a single URL and return its status
 */
async function testLink(url: string): Promise<{ status: number | 'ERROR' | 'TIMEOUT'; responseTime: number; errorMessage?: string }> {
  const startTime = Date.now();
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
    
    const response = await fetch(url, {
      method: 'HEAD', // Use HEAD to avoid downloading full content
      headers: {
        'User-Agent': USER_AGENT,
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    const responseTime = Date.now() - startTime;
    
    return {
      status: response.status,
      responseTime,
    };
  } catch (error: any) {
    const responseTime = Date.now() - startTime;
    
    if (error.name === 'AbortError') {
      return {
        status: 'TIMEOUT',
        responseTime: TIMEOUT_MS,
        errorMessage: 'Request timeout after 10s',
      };
    }
    
    return {
      status: 'ERROR',
      responseTime,
      errorMessage: error.message || 'Unknown error',
    };
  }
}

/**
 * Extract all links from the study plan
 */
function extractLinks(): LinkAuditResult[] {
  const results: LinkAuditResult[] = [];
  
  const months = [
    { name: 'Month 1', data: studyPlanData.month1 },
    { name: 'Month 2', data: studyPlanData.month2 },
    { name: 'Month 3', data: studyPlanData.month3 },
  ];
  
  for (const month of months) {
    month.data.forEach((week, weekIndex) => {
      week.days.forEach((task: StudyTask, dayIndex) => {
        const location = `${month.name}, ${week.week}, Day ${dayIndex + 1} (${task.day})`;
        
        // Add primary link
        if (task.link) {
          results.push({
            url: task.link,
            title: task.task,
            status: 0,
            responseTime: 0,
            location,
            linkType: 'primary',
          });
        }
        
        // Add additional links
        if (task.additionalLinks) {
          task.additionalLinks.forEach((link) => {
            results.push({
              url: link.url,
              title: link.title,
              status: 0,
              responseTime: 0,
              location,
              linkType: 'additional',
            });
          });
        }
      });
    });
  }
  
  return results;
}

/**
 * Main audit function
 */
async function auditLinks() {
  console.log('🔍 Starting TOEIC Link Audit...\n');
  
  // Extract all links
  const links = extractLinks();
  console.log(`📊 Found ${links.length} links to check\n`);
  
  // Test each link
  const results: LinkAuditResult[] = [];
  let processed = 0;
  
  for (const link of links) {
    processed++;
    process.stdout.write(`\r⏳ Testing links: ${processed}/${links.length} (${Math.round((processed / links.length) * 100)}%)`);
    
    const { status, responseTime, errorMessage } = await testLink(link.url);
    
    results.push({
      ...link,
      status,
      responseTime,
      errorMessage,
    });
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\n\n✅ Link testing complete!\n');
  
  // Generate report
  generateReport(results);
  
  // Print summary
  printSummary(results);
}

/**
 * Generate CSV report
 */
function generateReport(results: LinkAuditResult[]) {
  const reportDir = path.join(process.cwd(), 'audit-reports');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const reportPath = path.join(reportDir, `toeic-links-baseline-${timestamp}.csv`);
  
  // CSV header
  const header = 'URL,Title,Status,Response Time (ms),Location,Link Type,Error Message\n';
  
  // CSV rows
  const rows = results.map(r => {
    const url = `"${r.url}"`;
    const title = `"${r.title.replace(/"/g, '""')}"`;
    const status = r.status;
    const responseTime = r.responseTime;
    const location = `"${r.location}"`;
    const linkType = r.linkType;
    const errorMessage = r.errorMessage ? `"${r.errorMessage.replace(/"/g, '""')}"` : '';
    
    return `${url},${title},${status},${responseTime},${location},${linkType},${errorMessage}`;
  }).join('\n');
  
  fs.writeFileSync(reportPath, header + rows, 'utf-8');
  
  console.log(`📄 Report saved to: ${reportPath}`);
}

/**
 * Print summary statistics
 */
function printSummary(results: LinkAuditResult[]) {
  const total = results.length;
  const working = results.filter(r => typeof r.status === 'number' && r.status >= 200 && r.status < 400).length;
  const broken = results.filter(r => typeof r.status === 'number' && r.status >= 400).length;
  const errors = results.filter(r => r.status === 'ERROR' || r.status === 'TIMEOUT').length;
  
  console.log('\n📈 Summary:');
  console.log(`   Total links: ${total}`);
  console.log(`   ✅ Working (2xx-3xx): ${working} (${Math.round((working / total) * 100)}%)`);
  console.log(`   ❌ Broken (4xx-5xx): ${broken} (${Math.round((broken / total) * 100)}%)`);
  console.log(`   ⚠️  Errors/Timeouts: ${errors} (${Math.round((errors / total) * 100)}%)`);
  
  // List broken links
  if (broken > 0 || errors > 0) {
    console.log('\n🔴 Issues found:');
    results
      .filter(r => (typeof r.status === 'number' && r.status >= 400) || r.status === 'ERROR' || r.status === 'TIMEOUT')
      .slice(0, 10) // Show first 10
      .forEach(r => {
        console.log(`   ${r.status} - ${r.title}`);
        console.log(`          ${r.url}`);
        console.log(`          Location: ${r.location}`);
        if (r.errorMessage) {
          console.log(`          Error: ${r.errorMessage}`);
        }
        console.log('');
      });
    
    if (broken + errors > 10) {
      console.log(`   ... and ${broken + errors - 10} more. See CSV report for full list.\n`);
    }
  }
}

// Run the audit
auditLinks().catch(console.error);
