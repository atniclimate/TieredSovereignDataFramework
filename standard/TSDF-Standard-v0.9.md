# TSDF Indigenous Data Sovereignty Standard

**Version:** 0.9.0
**Author:** Patrick A. Freeland
**Organization:** Affiliated Tribes of Northwest Indians
**License:** CC-BY-NC-SA 4.0
**Effective Date:** 2025

---

## License and Usage

This document is released under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC-BY-NC-SA 4.0).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution**  You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial**  You may not use the material for commercial purposes.
- **ShareAlike**  If you remix, transform, or build upon the material, you must distribute your contributions under the same license.

Full license text: https://creativecommons.org/licenses/by-nc-sa/4.0/

### Indigenous Governance Notice

While this document is openly licensed, implementations of this framework that govern Indigenous community data should be developed in partnership with those communities and in accordance with applicable Indigenous data governance principles (CARE, OCAP, community-specific protocols).

Proposed amendments to this framework are welcomed through the maintaining organization. The framework evolution should reflect Indigenous community priorities.

### Suggested Citation

Freeland, P. A. (2025). Tiered Sovereignty Data Framework: Indigenous Data Sovereignty Standard, Version 0.9.0. Affiliated Tribes of Northwest Indians. Licensed under CC-BY-NC-SA 4.0.

---

## Part I: Theoretical Foundations

### 1.1 Introduction: Establishing a Sovereignty-Centered Framework

For centuries, Indigenous Peoples have experienced a dominant colonial paradigm in research characterized by extractive practices that treat Indigenous knowledge as a resource to be mined rather than a relationship to be honored (Kukutai & Taylor, 2016). This history of data colonialism has disrupted the intergenerational transmission of Indigenous Knowledge through the dispossession and removal of Indigenous Peoples from their ancestral lands, forced assimilation, and cultural suppression.

This Standard is a direct response to that history. It provides an actionable framework to operationalize the long-standing principles of Indigenous rights, self-determination, and resurgence. It is designed to restore balance, support Indigenous-led solutions to complex social-ecological issues, and ensure that data and knowledge serve the collective continuance of Indigenous Peoples for generations to come.

### 1.2 Defining Indigenous Data Sovereignty

Indigenous Data Sovereignty (IDS) is the inherent right of Indigenous Peoples to govern the collection, ownership, and application of their own data (Rainie et al., 2019). This principle recognizes that data pertaining to Indigenous Peoples, their lands, waters, and more-than-human relations are collective resources, generated across generations and belonging to the collective. IDS asserts the political status of Indigenous Peoples as **rights holders and sovereigns** and not stakeholders with the autonomous authority to control the collection, ownership, access, and use of their data.

IDS is operationalized through Indigenous Data Governance (IDGov), which establishes the autonomous authority for communities to decide the *what*, *how*, and *why* of data use, ensuring it reflects Indigenous priorities and values (Carroll et al., 2020).

### 1.3 The Colonial Data Paradigm

The core problem this Standard addresses is the colonial data paradigm, which has historically treated Indigenous Peoples and their knowledge as resources to be extracted. Dr. Maggie Walter's "5D Data" framework identifies how colonial statistics systematically emphasize **Disparity, Deprivation, Disadvantage, Dysfunction, and Difference**—framing Indigenous Peoples through deficit rather than strength (Walter et al., 2020).

This paradigm perpetuates a harmful distinction between:
- **"Data ABOUT Indigenous Peoples"** rooted in extraction, appropriation, and harmful impacts
- **"Data FOR Indigenous Peoples"** positioning data as a tool for empowerment and self-determination

When data systems fail to recognize Indigenous Nations as they see themselves, this constitutes a form of "statistical erasure" or "statistical genocide" (Walter & Andersen, 2013). This Standard rejects the colonial paradigm and enables a values-centered relational science model that restores right relations as the foundation for all data and knowledge exchange.

### 1.4 The Four Tier Classification Model

To translate foundational principles into implementable policy, this Standard introduces the **Four-Tier Classification System**. This system is the core innovation of the Standard, providing a clear, enforceable mechanism for Indigenous Nations to govern their data relations, protect their knowledge, and exercise their sovereignty. It operationalizes CARE (Carroll et al., 2020), OCAP (FNIGC, 2014), and UNDRIP into specific, enforceable classifications.

### 1.5 Affirming the Political Status of Indigenous Peoples

This Standard is built upon the foundational recognition of Indigenous Peoples as **sovereign political entities** with the inherent right to self-determination and self-governance. Tribes are sovereigns, not stakeholders. This political status, recognized in treaties and international law including the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP), grants them the authority to govern their peoples, lands, resources, and knowledge.

Any exchange of knowledge or data must occur through governance mechanisms that treat Indigenous Knowledge holders as representatives of sovereign governments engaged in government-to-government relations.

### 1.6 Differentiating Data Residency and Data Sovereignty

This Standard distinguishes between:

- **Data Residency:** The physical or geographic location where data is stored
- **Data Sovereignty:** The jurisdictional authority and legal control over data, regardless of where it is physically located

While residency has legal implications (particularly regarding laws like the U.S. CLOUD Act), this Standard asserts that ultimate authority remains with the Indigenous Nation. True sovereignty is enacted through **governance and control**, not merely through the location of a server. This ensures that Traditional Owners hold the authority to decide how their data is collected, used, and managed across all jurisdictions and storage environments.

### 1.7 The Scope of Indigenous Data

This Standard applies to a comprehensive and holistic definition of Indigenous Data:

**Collective and Cultural Data**
Information and knowledge generated collectively across generations, including oral histories, stories, ceremonies, language, and cultural heritage expressed in tangible and intangible forms. This data belongs to the collective and its stewardship is a shared responsibility.

**Individual and Administrative Data**
Information about individuals, including health records, educational data, and other administrative information collected by governments, organizations, or researchers. This includes identifiable private information and biospecimens gathered in the course of human subjects research.

**Biophysical and Relational Data**
Data derived from or relating to Indigenous lands, territories, waters, air, plants, animals, and other-than-human relations. Knowledge of the land and its relations is inextricably linked to Indigenous identity and governance, making data generated from it definitively Indigenous data. This principle, articulated as **Biophysical Data Sovereignty** (Jennings et al., 2023), recognizes that the land acts as the original and traditional knowledge organization system and is a living archive.

This framework parallels the "Water Back" and "Land Back" movements—asserting that data generated from Indigenous territories carries the same sovereignty claims as the territories themselves.

### 1.8 The Convergence Architecture

Data sovereignty is precarious without infrastructure sovereignty (Duarte, 2017). The Tiered Sovereignty Data Framework therefore addresses three intersecting domains:

1. **Data Sovereignty** Governance authority over information (what is stored)
2. **Network Sovereignty** Control over transmission infrastructure (how data moves)
3. **Digital Sovereignty / Sovereign Compute** Authority over computational processes (how data is processed)

This "Convergence Systems Architecture" framework traces the full data lifecycle: **Source → Collection → Transmission → Storage → Application**. True Indigenous data sovereignty requires governance authority at each stage.

---

## Part II: Data Classification Tiers

### 2.1 Overview of Tiered Sovereignty Model

The Four-Tier Data Classification system is the central innovation of the TSDF Standard. Its purpose is to provide clear, enforceable rules for data sharing, protection, and control. This system moves foundational principles from aspiration to practical implementation.

| Tier | Name | Definition |
|------|------|------------|
| **T0** | Open/Public | Data formally released for public benefit by sovereign Indigenous decision |
| **T1** | Network | Data shared among Indigenous network members via reciprocal protocols |
| **T2** | Negotiated | Data shared with external partners through formal agreements |
| **T3** | Sovereign | Data under complete Indigenous control; never leaves community systems |

#### Design Principles

1. **Sovereignty-First**: Classification authority rests with Indigenous governing bodies
2. **Default to Protection**: Uncertain classification defaults to T3
3. **Reversibility Asymmetry**: Over-classification is correctable; under-classification may cause irreversible harm
4. **Human Authority**: Only authorized humans can downgrade classifications

---

### 2.2 Tier 0: Open/Public Access

**Definition:** Data that has been formally and publicly released by the sovereign Indigenous entity for the collective benefit of all.

**Purpose and Scope:** This tier is for information that an Indigenous Nation has explicitly decided to make available without restriction, such as public announcements, educational materials, or certain research findings intended for a broad audience.

**Critical Principle:** Classification as T0 is an **affirmative act of Indigenous governance**. Public release is never a default; it requires deliberate sovereign decision.

#### Sovereignty Framing

T0 data represents Indigenous Nations exercising their sovereignty to contribute knowledge to the broader public. This is an act of generosity and self-determination, not an obligation or expectation.

#### CARE Principles Alignment

| Principle | T0 Implementation |
|-----------|-------------------|
| **Collective Benefit** | Maximized through intentional public release serving Indigenous and broader benefit |
| **Authority to Control** | Release decision IS the exercise of authority; attribution requirements maintained |
| **Responsibility** | Clear attribution ensures accountability chain |
| **Ethics** | Release decision reflects community values |

#### OCAP Alignment

- **Ownership**: Expressed through attribution requirements
- **Control**: Community controlled the release decision
- **Access**: Granted to all
- **Possession**: Attribution retained even when copies distributed

#### Local Contexts Labels

TK Labels that may apply to T0 data:
- TK Attribution (TK A)
- TK Verified (TK V)

#### Example Data Types

- Published Tribal government press releases
- Educational materials explicitly released for public use
- Research findings where the Nation has approved open publication
- Federal reports created through government-to-government consultation
- Public emergency alerts and community notifications

#### Classification Criteria

Data qualifies for T0 when ALL of the following apply:
- [ ] Explicit public release decision made by authorized Indigenous governance body
- [ ] Release serves identified community benefit
- [ ] Attribution requirements clearly established
- [ ] No cultural, privacy, or safety concerns with public access

#### Governance Requirements

- Formal release decision documented
- Attribution protocol established
- No external access approval required (already public)
- Periodic review to ensure continued appropriateness of public status

#### Handling Requirements

- Attribution to originating Indigenous Nation required in all uses
- May be freely shared and republished with attribution
- No access logging required (public)
- Local Contexts Labels displayed where applicable

---

### 2.3 Tier 1: Community Network Access

**Definition:** Data shared among members of a trusted Indigenous network under reciprocal protocols.

**Purpose and Scope:** This tier facilitates collaboration and knowledge sharing between and among Indigenous Nations and organizations that share common values and protocols. Access is governed by mutual agreements and a shared understanding of responsibility and respect, creating a secure space for InterTribal relations.

**Critical Principle:** T1 embodies **reciprocity** as the foundational Indigenous value that relationships are mutual and ongoing, not transactional. Network membership itself implies shared responsibilities.

#### Sovereignty Framing

Tier 1 implements the principle that Indigenous nations can establish their own terms for inter-nation information sharing, independent of external institutions. Network membership and reciprocal agreements (not external regulations) determine access.

#### CARE Principles Alignment

| Principle | T1 Implementation |
|-----------|-------------------|
| **Collective Benefit** | T1 sharing generates collective benefit across the network: regional pattern recognition, shared early warning, coordinated advocacy, and mutual learning |
| **Authority to Control** | Authority is shared among network members through reciprocal agreements; individual communities retain authority over their contributions |
| **Responsibility** | Network members bear mutual responsibility for protecting shared information; misuse affects all members |
| **Ethics** | Ethical obligations flow from network relationships, not external IRB or compliance requirements |

#### OCAP Alignment

- **Ownership**: Collective ownership by originating community; recognized by all network members
- **Control**: Shared control through network governance protocols
- **Access**: Access granted through network membership and reciprocal agreements
- **Possession**: Data may be replicated within network; copies must respect same protocols as originals

#### Local Contexts Labels

TK Labels that may apply to T1 data:
- TK Attribution (TK A)
- TK Non-Commercial (TK NC)
- TK Verified (TK V)
- TK Multiple Communities (TK MC) — when data involves multiple communities
- BC Multiple Communities (BC MC)

#### Example Data Types

- Aggregated regional observations (e.g., salmon run timing across multiple watersheds)
- Anonymized traditional ecological indicators
- Emergency response coordination data
- Mutual aid resource inventories
- Best practices and lessons learned
- Contact information for coordination purposes
- Regional climate impact summaries

#### Classification Criteria

Data qualifies for T1 when ALL of the following apply:
- [ ] Sharing benefits multiple network members
- [ ] Data does not reveal community-specific sensitive information
- [ ] Aggregation or anonymization protects source communities
- [ ] Reciprocal data sharing agreements are in place
- [ ] Network governance has approved the sharing protocol

#### Governance Requirements

- Network membership verification required for access
- Reciprocal data sharing agreement must be executed
- Data custodian must approve T1 classification
- Access logged; annual audit of access patterns
- Reclassification to T2 or T3 if sensitivity increases

#### Handling Requirements

- Access restricted to verified network members
- May not be shared externally without reclassification review
- Attribution to originating community maintained
- Time-limited access tokens where appropriate
- Secure transmission required (TLS 1.3+)

---

### 2.4 Tier 2: Negotiated Partner Access

**Definition:** Data shared with specific external partners through explicit, documented agreements that define permitted uses, access conditions, and obligations.

**Purpose and Scope:** This tier governs collaboration with non-Indigenous entities such as universities, government agencies, or NGOs. Sharing requires a formal agreement (e.g., research permit, data sharing agreement, MOU) that explicitly defines the scope of use, data security requirements, benefit-sharing, and the primacy of Indigenous governance.

**Critical Principle:** T2 operationalizes **Free, Prior, and Informed Consent (FPIC)** as an ongoing relationship, not a one-time transaction. Consent can be withdrawn, and terms must be transparently documented.

#### Sovereignty Framing

Tier 2 operationalizes the nation-to-nation relationship. Access is granted through formal agreements that recognize tribal sovereignty, not through compliance with external data access policies. The originating community sets terms; partners accept or negotiate—they do not dictate.

#### CARE Principles Alignment

| Principle | T2 Implementation |
|-----------|-------------------|
| **Collective Benefit** | T2 sharing occurs when external partnership generates tangible benefit for the originating community; benefit must be specified in the data sharing agreement |
| **Authority to Control** | Full authority retained by originating community; partners receive limited, revocable access grants; community can modify or terminate access |
| **Responsibility** | Partners accept documented obligations: reporting requirements, use restrictions, capacity-building commitments, acknowledgment protocols |
| **Ethics** | Partnership must align with community values and priorities; community ethics review, not only external IRB, governs research access |

#### OCAP Alignment

- **Ownership**: Ownership retained by originating community; explicitly stated in agreement
- **Control**: Community controls all access decisions, including modification and revocation
- **Access**: Access is conditional, time-limited, and purpose-specific
- **Possession**: Partners receive access, not possession; data remains under community stewardship where possible; if copies must be transferred, return/deletion requirements apply

#### Local Contexts Labels

TK Labels that may apply to T2 data:
- TK Non-Commercial (TK NC)
- TK Community Voice (TK CV)
- TK Community Use Only (TK CO)
- TK Culturally Sensitive (TK CS)
- TK Outreach (TK O) — if shared for specific outreach purpose
- BC Research Use (BC R)

#### Partner Categories

| Partner Type | Typical Agreement Elements |
|--------------|----------------------------|
| Federal agencies | Government-to-government consultation protocols, FOIA considerations, trust responsibility acknowledgment |
| State agencies | Intergovernmental agreements, co-management protocols |
| Academic/research | Tribal research review board approval, community benefit requirements, publication review protocols |
| Other Tribes | Bilateral/multilateral data sharing agreements, reciprocity provisions |
| NGO/nonprofit | Purpose-specific agreements, reporting requirements |

#### Example Data Types

- Detailed vulnerability assessments shared with emergency management agencies
- Specific harvest timing data shared with neighboring Tribes
- Infrastructure damage reports for federal disaster assistance
- Research data shared under Tribal research agreements
- Environmental monitoring data shared with state agencies
- Climate adaptation plans shared with funding agencies

#### Classification Criteria

Data qualifies for T2 when ALL of the following apply:
- [ ] External partnership serves identified community purpose
- [ ] Data sharing agreement has been executed
- [ ] Permitted uses are explicitly defined and limited
- [ ] Community benefit is specified
- [ ] Exit/termination provisions are established
- [ ] Appropriate governance body has approved sharing

#### Governance Requirements

- Formal data sharing agreement required before access granted
- Agreement must specify: permitted uses, prohibited uses, duration, termination conditions, benefit-sharing provisions
- Designated community authority must approve each agreement
- Regular review of agreement compliance (minimum annually)
- Incident response and breach notification procedures defined

#### Handling Requirements

- All access logged with user, timestamp, purpose, data accessed
- Secure transmission required (TLS 1.3+)
- Encryption at rest required for partner-held copies
- Access credentials are non-transferable
- Partners may not re-share without explicit written approval
- Regular audit of partner compliance with agreement terms

---

### 2.5 Tier 3: Sovereign Restricted

**Definition:** Data under complete Indigenous sovereign control that never leaves community-controlled systems.

**Purpose and Scope:** This tier protects sensitive, personal, and culturally restricted information. It includes data that is sacred, ceremonial, or simply not appropriate for external use. T3 data embodies the principle of **Possession** and ensures that Indigenous communities can maintain spaces of complete data autonomy.

**Critical Principle:** T3 implements **architectural guarantees** making external access technically impossible, not just policy-prohibited. This is the technical manifestation of UNDRIP Article 31's protection of cultural heritage.

#### Sovereignty Framing

Tier 3 is the architectural guarantee of sovereignty. The technical system must make it *impossible* (not merely prohibited) for T3 data to be accessed by external parties. This is not a policy choice that can be overridden; it is a structural feature of the system.

#### UNDRIP Alignment

Article 31 of the United Nations Declaration on the Rights of Indigenous Peoples:

> "Indigenous peoples have the right to maintain, control, protect and develop their cultural heritage, traditional knowledge and traditional cultural expressions... They also have the right to maintain, control, protect and develop their intellectual property over such cultural heritage, traditional knowledge, and traditional cultural expressions."

T3 implements Article 31 through technical enforcement.

#### CARE Principles Alignment

| Principle | T3 Implementation |
|-----------|-------------------|
| **Collective Benefit** | Collective benefit is served by *protecting* this data, not by sharing it; the benefit is preservation of cultural integrity, community safety, and sovereign knowledge systems |
| **Authority to Control** | Complete authority retained; no external party has any claim to access, regardless of stated purpose |
| **Responsibility** | Community bears sole responsibility for stewardship; no external data processors, no cloud storage outside community control |
| **Ethics** | T3 classification itself is an ethical act: recognizing that some knowledge carries obligations that transcend Western notions of information sharing |

#### OCAP Alignment

- **Ownership**: Complete collective ownership, non-transferable
- **Control**: Absolute control, non-negotiable
- **Access**: Internal community access only, governed by community protocols (which may include cultural, gender, clan, or ceremonial restrictions beyond this framework)
- **Possession**: Physical possession on community-controlled infrastructure is REQUIRED, not optional

#### The Role of Strategic Invisibility

T3 also honors the concept of **strategic invisibility** the conscious choice by communities to withhold information as an act of agency, resistance, and self-protection. Not all knowledge should be visible to outside systems, and the choice to remain unseen is itself an exercise of sovereignty.

#### Local Contexts Labels

TK Labels that may apply to T3 data:
- TK Secret/Sacred (TK SS) — REQUIRED for ceremonial content
- TK Culturally Sensitive (TK CS)
- TK Community Use Only (TK CO)
- TK Seasonal (TK S) — if access restrictions vary by season
- TK Women Restricted (TK WR) / TK Men Restricted (TK MR)
- TK Clan (TK CL)

Note: Some T3 data may have internal access restrictions beyond what this framework addresses. Communities may implement additional protocols for culturally-specific access within T3.

#### Example Data Types

- Sacred site locations and associated knowledge
- Ceremonial calendars and practices
- Detailed traditional ecological knowledge with cultural restrictions
- Individual health or social service records
- Financial and economic data
- Enrollment and citizenship records
- Cultural heritage items with access restrictions
- Detailed territorial resource inventories
- Governance deliberations and internal documents

#### Classification Criteria

Data is classified as T3 when ANY of the following apply:
- [ ] Data involves sacred, ceremonial, or spiritually significant knowledge
- [ ] Disclosure could endanger community members, resources, or cultural sites
- [ ] Data is subject to traditional protocols restricting external access
- [ ] Individual privacy would be compromised by external access
- [ ] Governance or internal decision-making confidentiality requires protection
- [ ] Community has determined data should remain internal for any reason

#### Governance Requirements

- Classification decisions made by designated community authority
- Access granted only to community members with appropriate authorization (which may include cultural/traditional protocols beyond this framework's scope)
- All access logged with full audit trail
- Regular review of T3 data inventory (minimum annually)
- Incident response procedures for any suspected breach

#### Technical Requirements (Architectural Guarantees)

- Data stored ONLY on community-controlled infrastructure
- No external network access to T3 data stores
- Separate encryption keys held exclusively by community
- No cloud storage, no external backups, no third-party processing
- System architecture must make external access technically impossible, not merely policy-prohibited
- Audit logs stored separately, tamper-evident
- Air-gapped options for highest-sensitivity materials

#### Reclassification Procedures

T3 data may be reclassified to T2, T1, or T0 only when:
- [ ] Appropriate governance body approves reclassification
- [ ] Purpose and benefit of reclassification is documented
- [ ] Receiving tier's requirements are fully implemented
- [ ] Original T3 copy is either retained (with T3 protections) or securely deleted
- [ ] Reclassification is logged in permanent audit trail

---

### 2.6 The Default Classification Principle

> **All data with an uncertain or unassigned classification must default to T3 (Sovereign).**

This principle is a foundational safeguard rooted in the **asymmetric harm argument:**

| Error Type | Consequence |
|------------|-------------|
| **Over-classification** (T0 data → T3) | Data unnecessarily restricted; can be corrected by review and reclassification; minor inconvenience, fully reversible |
| **Under-classification** (T3 data → T0) | Sensitive data exposed; may cause cultural harm, safety risks, loss of sacred knowledge; potentially irreversible once disclosed |

Given this asymmetry, the rational default is T3.

This "protect-first" approach prioritizes the safety and integrity of Indigenous knowledge systems. **Only authorized human decision-makers can downgrade classifications.** Automated systems may suggest upgrades (toward greater protection) but cannot execute downgrades.

---

## Part III: Governance and Partnership Model

### 3.1 Core Governance Functions

This Standard is designed to support flexible, Indigenous-led governance. It specifies **what must be governed**, not **how** specific Indigenous governance bodies must be structured—respecting the diversity of traditional and contemporary governance systems among Indigenous Nations.

Any entity implementing this Standard must establish clear governance for:

#### Consent Mechanisms

Free, Prior, and Informed Consent (FPIC) must be treated as an **ongoing dialogue**, not a one-time transactional event. It is a process that can evolve, and includes the right for consent to be withdrawn at any time. Consent must be obtained from both:
- The appropriate Indigenous governing body
- Individual knowledge holders

All grants of consent, including specific conditions or limitations, must be formally documented and linked to the associated data.

#### Authority to Reclassify

The authority to downgrade a data classification (e.g., from T3 to T2) rests **exclusively** with authorized Indigenous individuals or the designated governance body. This is a critical control point that:
- Requires deliberate human intervention
- Cannot be automated
- Must be documented with rationale

Systems may automate protective upgrades (e.g., T2 → T3 upon agreement expiry) but never downgrades.

#### Audit and Accountability

Clear mechanisms must be in place to audit data access and use, ensuring compliance with tier requirements and associated agreements. An auditable trail provides the accountability necessary to enforce the Standard and build trust with partners.

### 3.2 The Partnership Spectrum

Partnerships should progress toward Indigenous authority:

1. **Consultation** External entities inform communities and solicit feedback. Power remains with external partner.

2. **Collaboration** Partners work together, but framework/funding/governance may still be externally driven.

3. **Knowledge Co-production** Indigenous knowledge systems treated with equity. Shared decision-making throughout research process.

4. **Indigenous-Determined** Indigenous communities initiate and control the entire research and data lifecycle. External partners operate under Indigenous Nation's governance.

**T2 agreements should specify the partnership level** and include mechanisms for progression toward Indigenous determination.

### 3.3 The Legal Authority of Tribal Research Codes

This Standard affirms that **Tribal research codes, protocols, and data agreements are enforceable law** governing all data-related activities within a Tribe's jurisdiction. Researchers and external partners are legally and ethically bound to comply with:
- Tribal Institutional Review Boards (IRBs)
- Designated research oversight bodies
- Community-specific protocols and codes

These Indigenous laws form the primary legal basis for all T2 agreements.

---

## Part IV: Framework Alignment and Interoperability

### 4.1 CARE Principles Alignment

The CARE Principles for Indigenous Data Governance (Carroll et al., 2020) provide the ethical foundation:

| Principle | T0 | T1 | T2 | T3 |
|-----------|----|----|----|----|
| **Collective Benefit** | Maximized through intentional public release | Mutual benefit across network | Specified in agreements | Protection IS the benefit |
| **Authority to Control** | Release is sovereign act | Network governance | Agreement-based control | Complete authority retained |
| **Responsibility** | Attribution obligations | Relational accountability | Partner obligations documented | Internal stewardship |
| **Ethics** | Ethical release decision | Shared cultural values | Ethical terms negotiated | Cultural protocols honored |

### 4.2 OCAP Principles Alignment

The First Nations principles of Ownership, Control, Access, and Possession (FNIGC, 2014):

| Principle | T0 | T1 | T2 | T3 |
|-----------|----|----|----|----|
| **Ownership** | Expressed through attribution | Collective network ownership | Explicitly asserted in agreements | Complete ownership |
| **Control** | Terms of release controlled | Network protocols govern | Access conditional, revocable | Absolute control |
| **Access** | Granted to all | Network members only | Specific partners only | No external access |
| **Possession** | Attribution retained | Network custody | Access-not-copies where possible | Physical + legal possession |

### 4.3 UNDRIP Alignment

| Article | Relevance | Tier Implementation |
|---------|-----------|---------------------|
| **Article 18** | Right to participate in decision-making | T1 network governance |
| **Article 19** | Free, Prior, and Informed Consent | T2 agreement mechanism |
| **Article 23** | Right to determine development priorities | T0 release decisions |
| **Article 31** | Right to cultural heritage protection | T3 architectural guarantees |

### 4.4 Relationship with FAIR and Open Science

A tension exists between the mandates of Open Science and FAIR Data Principles (Findability, Accessibility, Interoperability, Reusability) and the need to protect Indigenous data. The FAIR principles were designed to enhance machine-to-machine data sharing but were created without Indigenous input and often fail to recognize Indigenous Peoples as rights holders.

The TSDF Standard resolves this tension through the principle:

> **"As open as possible, as closed as necessary."**

TSDF does not reject data sharing goals but asserts that the **terms of sharing must be set by Indigenous Peoples themselves**. By defaulting to T3 and requiring explicit sovereign decisions to make data more accessible (T2, T1, or T0), the framework ensures that Indigenous data governance precedes data sharing.

FAIR addresses technical discoverability; CARE addresses rights. They are complementary when CARE takes precedence.

### 4.5 Local Contexts Labels Integration

The Traditional Knowledge (TK) and Biocultural (BC) Labels developed by Local Contexts provide granular cultural protocols within tier classifications:

| Tier | Applicable Labels | Function |
|------|-------------------|----------|
| T0 | TK Attribution, TK Verified | Attribution and verification |
| T1 | TK Community Voice, BC Multiple Communities | Network protocol signaling |
| T2 | TK Non-Commercial, TK Outreach, BC Research Use | Use restriction specification |
| T3 | TK Secret/Sacred, TK Culturally Sensitive, TK Clan | Internal protocol markers |

Labels provide cultural specificity; Tiers provide governance enforcement. Both are necessary.

---

## Part V: Implementation Guidance

### 5.1 For Indigenous Nations

1. Review existing data holdings against tier definitions
2. Establish or designate governance body for classification decisions
3. Default all unclassified data to T3
4. Develop or update Tribal Research Code to reference TSDF tiers
5. Train staff on classification criteria and procedures

### 5.2 For Research Partners

1. Recognize this Standard as authoritative for partner Indigenous Nations
2. Incorporate tier requirements into IRB protocols
3. Ensure data systems can enforce tier-based access controls
4. Document all data under tier classification in research data management plans
5. Return or destroy data per agreement terms upon project completion

### 5.3 For Technology Providers

1. Implement tier-based access control in system architecture
2. Provide audit logging compliant with accountability requirements
3. Support Local Contexts Labels in metadata schemas
4. Ensure encryption with Indigenous-controlled keys for T2/T3 data
5. Obtain explicit approval before any AI/ML training on Indigenous data

---

## References

Carroll, S.R., Garba, I., Figueroa-Rodriguez, O.L., Holbrook, J., Lovett, R., Materechera, S., Parsons, M., Raseroka, K., Rodriguez-Lonebear, D., Rowe, R., Sara, R., Walker, J.D., Anderson, J., & Hudson, M. (2020). The CARE Principles for Indigenous Data Governance. *Data Science Journal*, 19(1), 43.

David-Chavez, D.M. (2024). A Values-Centered Relational Science Model: Supporting Indigenous Rights and Reconciliation in Research. *Ecology and Society*.

Duarte, M.E. (2017). *Network Sovereignty: Building the Internet Across Indian Country*. University of Washington Press.

First Nations Information Governance Centre. (2014). *Ownership, Control, Access and Possession (OCAP): The Path to First Nations Information Governance*. FNIGC.

Jennings, L.L., et al. (2023). Applying the 'CARE Principles for Indigenous Data Governance' to Ecology and Biodiversity Research. *Nature Ecology & Evolution*.

Kukutai, T., & Taylor, J. (Eds.). (2016). *Indigenous Data Sovereignty: Toward an Agenda*. ANU Press.

Rainie, S.C., Kukutai, T., Walter, M., Figueroa-Rodriguez, O.L., Walker, J., & Axelsson, P. (2019). Issues in Open Data: Indigenous Data Sovereignty. In T. Davies, S. Walker, M. Rubinstein, & F. Perini (Eds.), *The State of Open Data: Histories and Horizons*. African Minds and IDRC.

Walter, M., & Andersen, C. (2013). *Indigenous Statistics: A Quantitative Research Methodology*. Left Coast Press.

Walter, M., Kukutai, T., Carroll, S.R., & Rodriguez-Lonebear, D. (Eds.). (2020). *Indigenous Data Sovereignty and Policy*. Routledge.

---

*Copyright (c) 2025 Patrick A. Freeland, Affiliated Tribes of Northwest Indians. This Standard is released under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA 4.0).*
