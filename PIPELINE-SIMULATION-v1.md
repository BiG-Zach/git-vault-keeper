# PIPELINE-SIMULATION-v1.md

## 1. GEO DISCOVERY: '2026 ACA subsidy cliff Florida'
Status: PASS
Grade: 10/10. GEO Monitor correctly identifies a high-intent citation gap where competitors are outranking us for 'Florida ACA 2026 cliff'.

## 2. TARGET BRIEF PRODUCTION
Status: PASS
Grade: 10/10. Brief addresses 'Recaptured Capital' strategy for Florida residents.

## 3. ARTICLE OUTLINE PRODUCTION
Status: PASS
Grade: 10/10. 6-block architecture with Bridge Type A (IUL) applied correctly.

## 4. BUILDER TASK REQUEST (BTR)
Status: FAIL
Grade: 2/10. The Builder v2.6-FINAL-LOCKED spec lacks a 'Flexible BTR Handler'. Currently, the Builder CANNOT inject the mandatory FAQPage and ProfessionalService schema requested by the Publisher because the schema-injection logic is frozen.

## 5. LEAD CAPTURE INTEGRATION
Status: FAIL
Grade: 0/10. Current LeadForm.tsx only supports a console.log mock. There is no existing hook for 'Recaptured Capital' calculator data in the frozen Builder codebase.

## 6. PREP BRIEF GENERATION
Status: PASS
Grade: 10/10. Lead Shepherd correctly scores simulated 'Warm' lead and maps objections.

## 7. ATTRIBUTION TAGGING
Status: FAIL
Grade: 4/10. While Lead Shepherd marks the lead as 'Qualified', the frozen Builder codebase does not transmit the `utm_content` or `origin_article_id` correctly to Ringy, breaking the attribution loop.

--- 
### CONCLUSION: PIPELINE BREAKS AT STEPS 4, 5, AND 7.
