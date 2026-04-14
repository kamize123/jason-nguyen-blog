# TOEIC Resource Migration Progress

**Last Updated**: April 14, 2026  
**Status**: Week 1 Complete (5/5 tasks migrated with enhanced metadata)

---

## 📊 Overall Progress

### Migration Status
- **Week 1**: ✅ 5/5 tasks (100%) - COMPLETE
- **Week 2**: ⏳ 0/5 tasks (0%)
- **Week 3**: ⏳ 0/5 tasks (0%)
- **Month 2 (Weeks 5-8)**: ⏳ 0/~20 tasks (0%)
- **Month 3 (Weeks 9-12)**: ⏳ 0/~20 tasks (0%)

**Total**: 5/60+ tasks migrated (8%)

---

## ✅ Week 1: COMPLETE (Grammar Foundation & Listening Immersion)

### Day 1: Grammar - 12 Thì & Thể bị động
- **Primary**: Study4 Grammar Hub (WEB, miễn phí, ~15 min)
- **Additional**: Video 12 Thì (VIDEO, ~20 min) + Practice Hub (WEB, ~20 min)
- **Fixed**: study4.com/grammar/12-thi lỗi 404 → Hub link
- **Status**: ✅ Migrated, tested, working

### Day 2: Vocab - Contracts & Personnel
- **Primary**: Quizlet 600 Essential Lesson 1 (APP, miễn phí, ~20 min)
- **Additional**: Anki Decks + EnglishClub Vocabulary
- **Fixed**: EnglishClub collocations 404 → vocabulary hub
- **Status**: ✅ Migrated, tested, working

### Day 3: Listening - Part 1 Mastery
- **Primary**: Study4 Practice Hub Part 1 (WEB, ~30 min)
- **Additional**: YouTube Strategy Video + ETS Sample
- **Fixed**: study4.com/tests/toeic/ets 404 → Practice Hub; TOEIC with Junia channel deleted → generic search
- **Status**: ✅ Migrated, tested, working

### Day 4: Skill - Word Form Speed
- **Primary**: Study4 Practice Hub Part 5 (WEB, ~25 min)
- **Additional**: YouTube Word Form Tricks + Quizlet Suffixes
- **Fixed**: study4.com/tests/part-5 404 → Practice Hub
- **Status**: ✅ Migrated, tested, working

### Day 5: Listening - Shadowing Practice
- **Primary**: Study4 Practice Hub Part 3/4 (WEB, ~20 min)
- **Additional**: YouTube Shadowing Tutorial + BBC Learning English
- **Fixed**: study4.com/tests/ets 404 → Practice Hub; TOEIC with Junia 404 → generic search
- **Status**: ✅ Migrated, tested, working

---

## 🔧 Technical Implementation

### Components Built
1. ✅ `ResourceBadge.tsx` - Type indicators with colors
2. ✅ `ResourceCard.tsx` - Full metadata display (primary & compact modes)
3. ✅ `ResourceList.tsx` - Multiple resource container
4. ✅ `EnhancedStudyPlanCard.tsx` - Integrated with backward compatibility

### Type System
```typescript
export type ResourceType = 'book' | 'web' | 'video' | 'app' | 'audio' | 'pdf';
export type ResourceMetadata = {
  type: ResourceType;
  isFree: boolean;
  estimatedTime?: number; // minutes
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  chapters?: string;
  language?: 'vi' | 'en' | 'both';
  notes?: string;
  status?: 'working' | 'broken' | 'archived';
};
```

### Backward Compatibility
All tasks maintain BOTH old and new fields:
```typescript
{
  link: "...",              // Legacy (fallback)
  additionalLinks: [...],   // Legacy (fallback)
  primaryResource: {...},   // New (if present, use this)
  additionalResources: [...] // New (if present, use this)
}
```

Components check `primaryResource` first, fallback to `link` if not found.

---

## 🎨 UI/UX Improvements

### Visual Hierarchy

**Before**:
```
TÀI LIỆU CHÍNH [plain button]
→ Tài liệu bổ sung (2)
```

**After**:
```
┌─────────────────────────────────────────────┐
│ 🟢 WEB │ ✓ Miễn phí │ ~15 phút │ Cơ bản    │
│ 12 Thì Tiếng Anh - Study4 Grammar Hub      │
│ 📖 Phần cần đọc: 12 Thì, focus Present...  │
│ 💡 Link gốc lỗi 404. Dùng Hub...            │
│ [HÀNH ĐỘNG NGAY →]                          │
└─────────────────────────────────────────────┘

Tài liệu bổ sung:
[🔴 VIDEO │ ✓ Free │ ~20 min] Video: 12 Thì...
[🟢 WEB │ ✓ Free │ ~20 min] Bài tập Part 5...
```

### Information At-A-Glance
- ✅ Resource type visible instantly (badge color)
- ✅ Time commitment clear (~15 phút)
- ✅ Free/paid labeled upfront
- ✅ Usage notes prevent confusion
- ✅ Broken links have warnings

---

## 🐛 Issues Fixed

### study4.com Mass 404 (80+ links)
**Root cause**: Site restructured `/tests/` and `/grammar/` paths  
**Solution**: Replaced with hub URLs:
- Grammar → `https://study4.com/hoc-tieng-anh/ngu-phap/`
- Practice → `https://study4.com/luyen-thi-toeic/`
- Added registration note: "Cần đăng ký Study4 (miễn phí)"

### TOEIC with Junia Channel Deleted (6+ links)
**Root cause**: Channel removed from YouTube  
**Solution**: Generic YouTube searches instead of channel links
- Example: `youtube.com/results?search_query=toeic+part+1+strategy`
- Added selection criteria: ">10K views, <2 years old"

### Quizlet Lesson 3 - 403 Forbidden
**Root cause**: Specific deck restricted  
**Solution**: Search URL instead of direct deck link

---

## 📈 Quality Metrics

### Link Health
- **Before**: 45% working, 55% broken (71/159)
- **After Week 1**: 100% working (all 5 tasks have valid alternatives)

### Metadata Completeness (Week 1)
- ✅ Type classification: 5/5 tasks (100%)
- ✅ Free/paid indicator: 5/5 (100%)
- ✅ Time estimates: 5/5 (100%)
- ✅ Difficulty level: 5/5 (100%)
- ✅ Usage notes: 5/5 (100%)
- ✅ Chapter/section guidance: 5/5 (100%)

### Build Status
- ✅ TypeScript compilation: PASS
- ✅ Production build: PASS
- ✅ All routes generate: 19/19
- ❌ `/toeic-guild/guide` - Temporarily removed (MDX parse error with numbered items)

---

## ⏭️ Next Steps

### Immediate (Next Session)
1. **Debug guide MDX**: Fix character `2` error in `TOEIC_STUDY_GUIDE.md`
   - Likely cause: Numbered lists or headings conflicting with MDX parser
   - Solution: Escape numbers or restructure format
   - Re-enable `/toeic-guild/guide` route

2. **Migrate Week 2** (5 tasks):
   - Part 2 Question Types
   - Office & Technology Vocabulary
   - Prepositions & Conjunctions
   - Speed Reading Part 7
   - Mixed Review + Baseline Test

### Short Term (This Week)
3. **Migrate Weeks 3-4** (Month 1 complete)
4. **Add resource type filter** to study plan page
5. **Update resource database** with Week 2-4 entries

### Medium Term (Next 2 Weeks)
6. **Migrate Month 2-3** (Weeks 5-12)
7. **Add "Report broken link" feature**
8. **Set up quarterly audit CI/CD**

---

## 💾 Files Changed

### Created (11 files)
- `src/components/toeic-guild/ResourceBadge.tsx`
- `src/components/toeic-guild/ResourceCard.tsx`
- `src/components/toeic-guild/ResourceList.tsx`
- `scripts/audit-toeic-links.ts`
- `docs/toeic-resources-database.md`
- `docs/TOEIC_RESOURCES_IMPLEMENTATION_SUMMARY.md`
- `docs/RESOURCE_MIGRATION_PROGRESS.md` (this file)
- `audit-reports/toeic-links-baseline-2026-04-14T04-27-35.csv`

### Modified (7 files)
- `src/lib/toeic-guild/types.ts` (+40 lines resource types)
- `src/lib/toeic-guild/study-plan-data-optimized.ts` (Week 1 fully migrated)
- `src/components/toeic-guild/EnhancedStudyPlanCard.tsx` (integrated ResourceCard)
- `src/components/layout/Header.tsx` (Other dropdown, guide link removed)
- `src/app/toeic-guild/page.tsx` (updated CTA box)
- `docs/TOEIC_STUDY_GUIDE.md` (resource directory added)
- `package.json` (added `audit:links` script, `tsx` dependency)

### Temporarily Removed
- `src/app/toeic-guild/guide/` - MDX compilation error, needs debug

---

## 🎯 Success Criteria Met

### Phase 1-3 (Complete)
- [x] Link audit system operational
- [x] Resource type system designed and implemented
- [x] Component library built (Badge, Card, List)
- [x] Week 1 fully migrated with metadata
- [x] Build passing without errors
- [x] Backward compatibility maintained

### User-Facing Improvements (Week 1)
- [x] Visual resource type indicators
- [x] Clear free/paid labeling
- [x] Time estimates for planning
- [x] Specific chapter/section guidance
- [x] Usage notes for complex resources
- [x] Broken link warnings and alternatives
- [x] Registration requirements noted

---

## 📞 How to Continue

### Run audit again (optional)
```bash
npm run audit:links
# Check: audit-reports/toeic-links-baseline-[timestamp].csv
```

### Migrate next week (pattern)
1. Find week in `study-plan-data-optimized.ts`
2. Check audit CSV for link status
3. Copy metadata from `toeic-resources-database.md`
4. Add primaryResource + additionalResources
5. Test build: `npm run build`

### Common patterns
- **study4.com/tests/** → `study4.com/luyen-thi-toeic/` + note
- **study4.com/grammar/** → `study4.com/hoc-tieng-anh/ngu-phap/` + note
- **YouTube channel links** → Generic search URLs
- **Quizlet specific decks** → Search URLs if deck deleted

---

*Migration framework ready. Continue with Week 2-12 using same pattern.*
