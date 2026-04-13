import fs from 'fs/promises';
import path from 'path';

const GUIDE_FILENAME = 'TOEIC_STUDY_GUIDE.md';

export async function getToeicStudyGuideSource(): Promise<string> {
  const filePath = path.join(process.cwd(), 'docs', GUIDE_FILENAME);
  return fs.readFile(filePath, 'utf-8');
}
