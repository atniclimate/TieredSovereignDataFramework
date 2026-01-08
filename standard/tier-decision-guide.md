# TSDF Tier Classification Decision Guide

Practical guidance for classifying Indigenous data using the Tiered Sovereignty Data Framework.

**Version:** 0.9.0
**Author:** Patrick A. Freeland
**Organization:** Affiliated Tribes of Northwest Indians
**License:** CC-BY-NC-SA 4.0

---

## Quick Decision Tree

```
START: Is this data about/from Indigenous Peoples, lands, waters, or relations?
│
├─ NO → TSDF does not apply; use standard data governance
│
└─ YES → Does it involve sacred, ceremonial, or restricted cultural knowledge?
    │
    ├─ YES → T3 (Sovereign)
    │
    └─ NO/UNSURE → Could disclosure endanger people, places, or resources?
        │
        ├─ YES → T3 (Sovereign)
        │
        └─ NO → Is this individual-level data (health, enrollment, personal)?
            │
            ├─ YES → T3 (Sovereign)
            │
            └─ NO → Has the Indigenous governing body explicitly released this?
                │
                ├─ YES, for public → T0 (Open)
                │
                ├─ YES, for network → T1 (Network)
                │
                ├─ YES, for specific partners → T2 (Negotiated)
                │
                └─ NO explicit release → T3 (Sovereign) [DEFAULT]
```

---

## The Default Rule

> **When in doubt, classify as T3.**

This is not conservative caution—it is the correct application of the Standard's asymmetric harm principle:

| Classification Error | Consequence | Reversible? |
|---------------------|-------------|-------------|
| T0 data → T3 | Access delayed until review | Yes |
| T3 data → T0 | Sacred/sensitive data exposed | Often No |

---

## Classification by Data Category

### Environmental and Climate Data

| Data Type | Likely Tier | Key Considerations |
|-----------|-------------|---------------------|
| General weather conditions | T0 | Already public; attribution required |
| Regional salmon run timing | T1 | Valuable for network coordination |
| Specific harvest locations | T3 | Could lead to resource depletion |
| TEK indicators | T2 or T3 | Depends on cultural sensitivity |
| Sacred site weather impacts | T3 | Location information must be protected |

### Emergency Management Data

| Data Type | Likely Tier | Key Considerations |
|-----------|-------------|---------------------|
| Public emergency alerts | T0 | Intended for public distribution |
| Regional hazard assessments | T1 | Network mutual benefit |
| Vulnerability assessments for FEMA | T2 | Requires formal agreement |
| Evacuation routes showing sacred sites | T3 | Protect site locations |

### Administrative Data

| Data Type | Likely Tier | Key Considerations |
|-----------|-------------|---------------------|
| Tribal government contact info | T0 or T1 | Public vs. internal directories |
| Program participation statistics | T2 | Requires agreement, anonymization |
| Individual enrollment records | T3 | Personal data, citizenship |
| Internal governance documents | T3 | Confidential deliberations |

### Cultural and Heritage Data

| Data Type | Likely Tier | Key Considerations |
|-----------|-------------|---------------------|
| Published educational materials | T0 | Explicitly released |
| Language learning resources | T0 or T1 | Check release authorization |
| Ceremonial information | T3 | Always restricted |
| Traditional stories with restrictions | T3 | Honor traditional protocols |
| Museum collection documentation | T2 | With repatriation agreements |

---

## Decision Scenarios

### Scenario 1: Climate Impact Report

**Context:** A Tribal environmental department has compiled a report on climate change impacts to traditional food sources.

**Questions to ask:**
1. Does it contain specific harvest location data? → If yes, likely T3
2. Does it contain TEK with cultural restrictions? → If yes, consult knowledge holders
3. Is it intended for network coordination? → If yes, T1
4. Will it be shared with federal agencies? → If yes, T2 with agreement
5. Is it for public education? → If yes, T0 with proper release

**Likely outcome:** Different sections may have different classifications. A public summary (T0) can reference restricted details (T3).

---

### Scenario 2: Research Partnership Request

**Context:** A university researcher wants access to Tribal health data for a climate-health study.

**Questions to ask:**
1. Has Tribal IRB reviewed and approved? → Required before any access
2. Is there a formal data sharing agreement? → Required for T2
3. What data elements are actually needed? → Minimum necessary principle
4. How will individuals be protected? → Anonymization requirements
5. What benefit returns to the community? → Must be specified

**Likely outcome:** T2 for approved, anonymized data elements with formal agreement. Individual-level data remains T3.

---

### Scenario 3: InterTribal Emergency Coordination

**Context:** Multiple Tribes need to share real-time flood monitoring data during an emergency.

**Questions to ask:**
1. Is network membership verified? → Required for T1
2. Are reciprocal protocols in place? → Required for T1
3. Does data reveal sensitive site information? → If yes, T3
4. Is coordination benefit clear? → Required for T1

**Likely outcome:** T1 for coordination data among verified network members.

---

### Scenario 4: Traditional Ecological Knowledge

**Context:** Elders have shared knowledge about seasonal indicators for environmental planning.

**Questions to ask:**
1. Did knowledge holders consent to documentation? → Required at any tier
2. Are there traditional restrictions on who can access? → May require T3
3. Could sharing harm the resource or practice? → If yes, T3
4. What was the knowledge holder's intent? → Honor their wishes

**Likely outcome:** Highly variable—from T0 (explicitly shared for public education) to T3 (restricted by traditional protocols). **Always consult knowledge holders.**

---

## Metadata Requirements by Tier

### T0 Required Metadata

```yaml
record:
  tsdf_tier: "T0"
  release_decision:
    authorized_by: "[Governance body]"
    date: "[Release date]"
    purpose: "[Public benefit purpose]"
  attribution:
    nation: "[Originating Nation]"
    required_citation: "[How to cite]"
  local_contexts_labels: ["TK_A"]  # If applicable
```

### T1 Required Metadata

```yaml
record:
  tsdf_tier: "T1"
  network_sharing:
    network_id: "[Network identifier]"
    protocol_version: "[Protocol version]"
  consent:
    community_consent_id: "[Consent record]"
  sharing_restrictions:
    - "Network members only"
    - "No external sharing without review"
```

### T2 Required Metadata

```yaml
record:
  tsdf_tier: "T2"
  agreement:
    agreement_id: "[Agreement identifier]"
    partner_id: "[Partner organization]"
    permitted_uses: ["[List of permitted uses]"]
    prohibited_uses: ["[List of prohibited uses]"]
    expiration: "[Agreement end date]"
  consent:
    fpic_record_id: "[FPIC documentation]"
  benefit_sharing:
    description: "[How community benefits]"
```

### T3 Required Metadata

```yaml
record:
  tsdf_tier: "T3"
  classification:
    classified_by: "[Authorized person]"
    date: "[Classification date]"
    rationale: "[Why T3]"
  access_control:
    authorized_roles: ["[List of internal roles]"]
    cultural_restrictions: ["[Traditional protocols if any]"]
  storage:
    location: "[On-Nation system identifier]"
    encryption_key_holder: "[Nation]"
```

---

## Reclassification Guidance

### Upgrading Classification (More Restrictive)

**T0 → T1/T2/T3:** Can be automated based on:
- New sensitivity discovered
- Cultural protocols identified
- Security concerns raised

### Downgrading Classification (Less Restrictive)

**T3 → T2/T1/T0:** REQUIRES:
- [ ] Formal request documented
- [ ] Authorized governance body review
- [ ] Knowledge holder consultation (if applicable)
- [ ] Written approval with rationale
- [ ] Audit trail entry
- [ ] Receiving tier requirements verified

**Automated downgrade is PROHIBITED.**

---

## Red Flags: Automatic T3 Classification

The following data types should ALWAYS be classified T3 unless explicit governance approval exists for a lower tier:

- [ ] Sacred site locations or descriptions
- [ ] Ceremonial information of any kind
- [ ] Individual health records
- [ ] Enrollment/citizenship records
- [ ] Financial records
- [ ] Traditional knowledge with any access restrictions
- [ ] Burial sites or funerary objects
- [ ] Clan-specific or gender-restricted knowledge
- [ ] Internal governance deliberations
- [ ] Specific resource harvest locations
- [ ] Data where consent is unclear or undocumented

---

## Common Mistakes to Avoid

### Mistake 1: Assuming public = T0

**Wrong:** "This data is publicly available elsewhere, so it's T0."
**Correct:** The originating Nation decides classification, regardless of what others have done with similar data.

### Mistake 2: Partner request = automatic T2

**Wrong:** "A federal agency requested this, so classify as T2."
**Correct:** Classification based on data sensitivity, not requester. Agreement negotiation follows classification.

### Mistake 3: Aggregation = safe to share

**Wrong:** "This is aggregated/anonymized, so it's safe for T0."
**Correct:** Aggregation reduces individual privacy risk but may still reveal sensitive patterns. Governance approval required.

### Mistake 4: Research benefit justifies access

**Wrong:** "This research will benefit the Tribe, so data should be accessible."
**Correct:** Potential benefit is a governance consideration, not an automatic classification factor. Formal process required.

---

## Consultation Protocol

When classification is unclear:

1. **Check existing governance decisions** — Has this type of data been classified before?
2. **Consult data custodian** — The designated steward for this data type
3. **Consult knowledge holders** — Especially for TEK or cultural data
4. **Escalate to governance body** — For novel situations
5. **Document the decision** — For future reference
6. **Default to T3** — Until decision is made

---

*Copyright (c) 2025 Patrick A. Freeland, Affiliated Tribes of Northwest Indians. Licensed under CC-BY-NC-SA 4.0.*
