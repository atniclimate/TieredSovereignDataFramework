# TSDF Indigenous Data Sovereignty Standard

**Version:** 0.9.2
**Author:** Patrick A. Freeland
**Organization:** Affiliated Tribes of Northwest Indians
**License:** CC-BY-NC-SA 4.0
**Effective Date:** 2025

---

## License and Usage

This document is released under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC-BY-NC-SA 4.0).

You are free to:
- **Share** copy, and redistribute the material in any medium or format
- **Adapt** remix, transform, and build upon the material

Under the following terms:
- **Attribution**  You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial**  You may not use the material for commercial purposes.
- **ShareAlike**  If you remix, transform, or build upon the material, you must distribute your contributions under the same license.

Full license text: https://creativecommons.org/licenses/by-nc-sa/4.0/

### Indigenous Governance Notice

The *Tired Sovereign Data Framework (TSDF)* is currently pre-release (V 0.9.2). Additional comment and feedback is being sought to improve depth and incorporate broadly current standards and guidence for work with Indigenous data ecosystems. An official 1.0 release will not occur wihtout full authorization by resolution of the Affiliated Tribes of Northwest Indians.

While this document is openly licensed, implementations of this framework that govern Indigenous community data must be developed in partnership with those communities and in accordance with applicable Indigenous data governance principles (CARE, OCAP, community-specific protocols).

Proposed amendments to this framework are welcomed through reaching out to climate@atnitribes.org.
The framework evolution should reflect Indigenous community priorities.

### Suggested Citation

Freeland, P. A. (2025). Tiered Sovereignty Data Framework: Indigenous Data Sovereignty Standard, Version 0.9.2. Affiliated Tribes of Northwest Indians. Licensed under CC-BY-NC-SA 4.0.

---

## Part 1: Theoretical Foundations

### 1.1 Introduction: Establishing a Sovereignty-Centered Framework

For centuries, Indigenous Peoples have experienced a dominant colonial paradigm in research characterized by extractive practices that treat Indigenous knowledge as a resource to be mined rather than a relationship to be honored (Kukutai & Taylor, 2016). This history of data colonialism has disrupted the intergenerational transmission of Indigenous Knowledge through the dispossession and removal of Indigenous Peoples from their ancestral lands, forced assimilation, and cultural suppression. The General Allotment Act of 1887 (Dawes Act) alone resulted in the loss of over 100 million acres of Tribal homelands, severing peoples from the primary source of their knowledge.

This Standard is a direct response to that history, while honoring the work of countless Indigenous leaders, scholars, and cultural practioners who have asserted the primacy of Indigneous Sovereignty. This framework provides an actionable set of standards to operationalize the long-standing principles of Indigenous rights, self-determination, and resurgence. It is designed to restore balance, support Indigenous-led solutions to complex social-ecological issues, and ensure that data and knowledge serve the collective continuance of Indigenous Peoples for generations to come.

### 1.2 Defining Indigenous Data Sovereignty

Indigenous Data Sovereignty (IDSov) is the inherent right of Indigenous Peoples to govern the collection, ownership, and application of their own data (Rainie et al., 2019). This principle recognizes that data pertaining to Indigenous Peoples, their lands, waters, and more-than-human relations are collective resources, generated across generations and belonging to the collective. IDS asserts the political status of Indigenous Peoples as **rights holders and sovereigns** with the autonomous authority to control the collection, ownership, access, and use of their data.

IDSov is operationalized through Indigenous Data Governance (IDGov), which establishes the autonomous authority for communities to decide the what, how, and why of data use, ensuring it reflects Indigenous priorities and values (Carroll et al., 2020).

### 1.3 The Colonial Data Paradigm

The core problem this Standard addresses is the colonial data paradigm, which has historically treated Indigenous Peoples and their knowledge as resources to be extracted. Dr. Maggie Walter's "5D Data" framework identifies how colonial statistics systematically emphasize Disparity, Deprivation, Disadvantage, Dysfunction, and Difference which frames Indigenous Peoples through deficit rather than strength (Walter et al., 2020).

This paradigm perpetuates a harmful distinction between:
- **"Data ABOUT Indigenous Peoples"** rooted in extraction, appropriation, and harmful impacts
- **"Data FOR Indigenous Peoples"** positioning data as a tool for empowerment and self-determination

When data systems fail to recognize Indigenous Nations as they see themselves, this constitutes a form of "statistical erasure" or "statistical genocide" (Walter & Andersen, 2013). This Standard rejects the colonial paradigm and enables a values-centered relational science model that restores right relations as the foundation for all data and knowledge exchange (David-Chavez, 2024).

### 1.4 The Four Tier Classification Model

To translate foundational principles into implementable policy, this document introduces the Four-Tier Classification System. This system is the core innovation of the Standard, providing a clear, enforceable mechanism for Indigenous Nations to govern their data relations, protect their knowledge, and exercise their sovereignty. It operationalizes CARE (Carroll et al., 2020), OCAP® (FNIGC, 2014), and UNDRIP into specific, enforceable classifications.

## Part 2: Foundational Principles and Distinctions

### 2.1 Affirming the Political Status of Indigenous Peoples

This Standard is built upon the foundational recognition of Indigenous Peoples as sovereign political entities with the inherent right to self-determination and self-governance. Tribes are sovereigns, not stakeholders. This political status, recognized in treaties and international law including the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP), grants them the authority to govern their peoples, lands, resources, and knowledge.

Any exchange of knowledge or data must occur through governance mechanisms that treat Indigenous Knowledge holders as representatives of sovereign governments engaged in government-to-government relations.

### 2.2 Differentiating Data Residency and Data Sovereignty

This Standard distinguishes between:

- **Data Residency:** The physical or geographic location where data is stored
- **Data Sovereignty:** The jurisdictional authority and legal control over data, regardless of where it is physically located

While residency has legal implications (particularly regarding laws like the U.S. CLOUD Act), this Standard asserts that ultimate authority remains with the Indigenous Nation. True sovereignty is enacted through governance and control, not merely through the location of a server. This distinction, articulated by Te Mana Raraunga (Māori Data Sovereignty Network), ensures that Traditional Owners hold the authority to decide how their data is collected, used, and managed across all jurisdictions and storage environments.

### 2.3 The Scope of Indigenous Data

This Standard applies to a comprehensive and holistic definition of Indigenous Data, recognizing that knowledge is interconnected and cannot be separated from its context. Following Carroll et al.'s framework, the scope includes:

**Collective & Cultural Data**: Information and knowledge generated collectively across generations, including oral histories, stories, ceremonies, language, and cultural heritage expressed in tangible and intangible forms. This data belongs to the collective and its stewardship is a shared responsibility.

**Individual & Administrative Data**: Information about individuals, including health records, educational data, and other administrative information collected by governments, organizations, or researchers. This includes identifiable private information and biospecimens gathered in the course of human subjects research.

**Biophysical & Relational Data**: Data derived from or relating to Indigenous lands, territories, waters, air, plants, animals, and other-than-human relations. Dr. Lydia Jennings' principle of Biophysical Data Sovereignty recognizes that the land acts as the original and traditional knowledge organization system and is a living archive (Jennings et al., 2023). Knowledge of the land and its relations is inextricably linked to Indigenous identity and governance, making data generated from it definitively Indigenous data.

This framework parallels the "Water Back" and "Land Back" movements; asserting that data generated from Indigenous territories carries the same sovereignty claims as the territories themselves.

## 2.4 The Convergence Systems Architecture

2.4.1 Four Sovereignty Domains

Dr. Marisa Elena Duarte's work on **Network Sovereignty** demonstrates that data sovereignty is precarious without infrastructure sovereignty (Duarte, 2017). Dr. Keolu Fox extends this to **Sovereign Compute**, asserting that sovereignty must encompass not just where data is stored but where and how it is processed. This Standard addresses four intersecting and interdependent domains:

|Domain|Definition|Governance Question|
|---|---|---|
|**Data Sovereignty**|Governance authority over information|What data is stored?|
|**Network Sovereignty**|Control over transmission infrastructure|How is data shared?|
|**Digital Sovereignty**|Governance of information service provision, spectrum, and storage|How is data accessed?|
|**Computational Sovereignty**|Authority over computational and algorithmic processes|How is data transformed?|

The TSDF framework traces the full data lifecycle: 

**Source → Collection → Transmission → Storage → Application**

**True Indigenous data sovereignty requires governance authority at each stage.**

**Data Sovereignty** addresses the foundational layer: the inherent right of Indigenous Peoples to govern: collection, ownership, classification, and application of data about their Peoples, lands, and relations. This is the domain of CARE and OCAP® principles, of tiered classification, of determining what information exists and under whose authority.

**Network Sovereignty** addresses the transmission layer: control over the physical and logical infrastructure through which data moves. Fiber optic cables, microwave towers, internet exchange points, mesh networks. Data may be legally held by a Tribe, but if it travels through infrastructure owned by entities that do not recognize Tribal jurisdiction, that sovereignty is precarious. Network sovereignty asks: **whose information transmission infrastructure(s) carry our information, and under whose terms?**

**Digital Sovereignty** addresses the service layer: governance over the platforms, storage systems, and spectrum through which data is accessed. Cloud providers, database services, application interfaces, electromagnetic frequencies. When data resides in an AWS data center, it may be subject to foreign law regardless of Tribal sovereignty assertions. Digital sovereignty asks: **whose services hold our data, whose spectrum carries our signals, and whose jurisdiction governs access?**

**Computational Sovereignty** addresses the transformation layer: authority over what happens when data is processed, analyzed, or fed into algorithmic systems. Machine learning training, statistical inference, automated decision-making. When Indigenous data enters an AI model, it is transformed in ways that may escape governance entirely. Computational sovereignty asks: **who determines how our data is transformed, and toward what ends?**

### 2.4.2 Sovereignty as Indivisible

These four domains are not sequential stages but **convergent systems**. In mathematical terms, convergence describes movement where disparate entities grow closer toward a shared orientation while never fully intersecting. When different Peoples with different worldviews and Knowledge systems converge, they do not arrive at a single point of agreement but rather orient themselves around a shared problem or purpose. Each retains their identity, their methods, their ways of knowing; yet the distance between them narrows as they work toward what they mutually understand requires collective attention.

Applied to Sovereignty: **gaps in any layer create openings for extraction.**

- Data sovereignty without network sovereignty means information travels through infrastructure that does not recognize Tribal authority.
- Network sovereignty without digital sovereignty means Tribal-owned fiber connects to cloud services governed by foreign law.
- Digital sovereignty without computational sovereignty means Tribally-controlled storage feeds algorithms that transform data beyond governance reach.
- Computational sovereignty without data sovereignty means processing authority over information that was never rightfully collected.

**True sovereignty requires governance authority across all four domains.** The Tiered Sovereignty Data Framework provides the classification and governance layer (Data Sovereignty) while recognizing that implementation requires attention to infrastructure (Network), services and access (Digital), and processing (Computational).

### 2.4.3 Sharing as Relation, Not Extraction

The dominant paradigm of data sharing treats information as a commodity to be copied, transferred, and accumulated. This extraction logic mirrors the processes that transform land into resource: what belongs to a People becomes raw material for external benefit. Dr. Daniel Wildcat reminds us that Indigenous Peoples speak of "relatives not resources"; **to treat your relatives as resources is both disrespectful and harmful.**

This Standard implements an alternative architecture grounded in relational principles:

|Extraction Model|Relational Model|
|---|---|
|Sharing = copying files|Sharing = opening windows|
|Access = possession|Access = participation|
|Value = accumulation|Value = relationship depth|
|Quality = single authoritative source|Quality = density of triangulation|
|Knowledge = data transferred|Knowledge = understanding co-created|

When a Tribe shares data under this framework, they do not transfer assets. They **invite others to look through a window** that remains in their house. The recipient sees what is shared, may use what they observe to build their own knowledge, but the underlying data never leaves its origin.

### 2.4.4 The "Open Window" Architecture

The technical expression of relational sharing operates through **view-only federated access**, addressing all four sovereignty domains:

**Data Sovereignty: Tiered Classification at Source** All data remains classified and governed at its origin. The source Nation determines what can be seen through each window, to whom, and under what conditions. **Classification authority never transfers.**

**Network Sovereignty: Controlled Transmission Pathways** Data views travel through network infrastructure that respects Tribal jurisdiction. Tribal-owned or Tribally-governed network segments ensure that even rendered views move through accountable pathways.

**Digital Sovereignty: Rendered Views, Not Raw Files** When T1 or T2 data is shared across the network, recipients do not receive underlying datasets. They receive rendered views: tile servers streaming imagery to displays, APIs accepting requests and returning results, query interfaces that execute against source databases. The raw data never crosses jurisdictional boundaries. **Storage and service provision remain under source Nation control.**

**Computational Sovereignty: Compute at Source** When analysis requires sensitive data, the computation travels to the data rather than the data traveling to the analyst. A neighboring Tribe requesting to use T2 imagery for habitat modeling does not download files. Their analysis request executes within the data holder's infrastructure, and only results return. The source Nation maintains both data custody and computational authority over transformations.

**Provenance Inheritance Across All Domains** When derivative products are created from what was observed through the window, those products carry embedded provenance linking them to their source relationships:

- **Attribution** to the originating Nation (Data Sovereignty)
- **Documentation** of transmission pathway (Network Sovereignty)
- **Record** of access mechanism and service used (Digital Sovereignty)
- **Audit** trail of computational transformations applied (Computational Sovereignty)

A landcover classification derived from viewing T2 imagery carries a marker that says: "This exists because of a relationship with [Nation]. Their governance authority travels with it across all domains."

### 2.4.5 Federated Commons and Sovereign Overlays

The Convergence Systems Architecture enables a layered approach to shared infrastructure:

**The T0 Commons Layer** All network members share a synchronized base layer of open environmental data: temperature, precipitation, streamflow, elevation. This is the practical implementation of federation as a resilient system; each Tribe holds a local copy that syncs when connected and persists when the network fails. No single point of failure, no central authority that could be compromised or coerced. The T0 layer is the "commons" that everyone shares together and that no one owns.

**Sovereign Overlay Layers** Above the commons, each Nation maintains sovereign data that physically resides on their infrastructure. Higher-resolution imagery, culturally specific observations, TEK documentation. These overlays are visible to authorized network members through the window architecture, but they never leave their origin. The Nation controls what windows exist, who may look through them, and under what conditions.

**Knowledge Through Relationship** The network's analytical power emerges not from any single authoritative source but from the web of relationships among members. Multiple T1 data streams from across a watershed can triangulate answers that no single T2 dataset could provide alone. This creates a fundamentally different epistemology: **knowledge emerges from relationality**, and the richest understanding comes from the densest relationship networks.

### 2.4.6 Infrastructure as Territory

Physical networks, spectrum frequencies, and data centers constitute digital territories requiring Indigenous governance across all four sovereignty domains:

**Data:** Classification and governance authority physically instantiated in Tribally-controlled systems.

**Network:** Fiber, microwave, mesh networks, and spectrum under Tribal ownership or governance agreements that recognize Tribal jurisdiction.

**Digital:** Storage infrastructure and service platforms operating under Tribal law, whether on-Reservation facilities or "Trusted Cloud" arrangements with explicit jurisdictional recognition.

**Computational:** Processing infrastructure where algorithms execute under Tribal oversight, with audit capability and termination authority.

For T3 (Sovereign) data, this Standard envisions **geographic cryptographic binding**: encryption mechanisms where physical location within Tribal jurisdiction is part of the decryption ceremony itself. Not "we won't give you the key if you're off-Reservation" but "the key literally cannot be reconstructed without location verification." Geography becomes part of the cryptographic architecture, ensuring that the most sensitive data is bound to place in ways that transcend policy and reach into the technical substrate.

Data has material weight. Data centers consume land, water, and electricity at scales that register in the physical world. Sovereignty over data requires sovereignty over the infrastructure that holds it. The question shifts from where data is stored to whose law governs it, and whether that governance reflects the values and priorities of the Peoples from whom the data originates.

### 2.4.7 Principles of Convergence

The following principles guide implementation of the Convergence Architecture across all four sovereignty domains:

1. **Sovereignty is Indivisible.** Data, network, digital, and computational sovereignty are interdependent. Gaps in any layer create openings for extraction.
2. **Data is Relational.** Data describes Beings, emerges from relationships, and carries obligations. It is never neutral raw material.
3. **Infrastructure is Territory.** Physical networks, spectrum, storage facilities, and compute infrastructure constitute digital territories requiring Indigenous governance.
4. **Relatives, Not Resources.** Land, water, data, and all Beings hold inherent rights and responsibilities. To treat relatives as resources is harm.
5. **Human Accountability for Human Artifacts.** Technology does not act. Humans design, deploy, and benefit. Governance must assign responsibility accordingly.
6. **Self-Determination, Not Inclusion.** The question is not access to systems designed elsewhere but authority to design systems that reflect Indigenous values.
7. **Knowledge is Embodied.** Wisdom emerges through lived relationship with land, kin, and ceremony. Computation without relation is not knowledge.
8. **Convergence Without Homogenization.** Different Peoples orient around shared problems while retaining distinct identities, methods, and ways of knowing.
9. **Data for Governance, Not Governance of Data.** Indigenous Peoples require data reflecting their own priorities, not comparative statistics serving state administration.
10. **Living Systems, Not Archives.** Languages, cultures, and Knowledge evolve in relation. Digitization without sovereignty creates museum specimens, not preservation.
11. **The Question is Balance.** Who benefits? Who decides? Accountable to whom? Technical questions are governance questions.
12. **No Neutral Ground.** Every system either serves Indigenous self-determination or reproduces colonial logics. Architecture encodes values.

_These principles are adapted from the Convergence Systems Architecture framework (Freeland, 2025)._
---

## 3.0 The Four-Tier Data Classification System

The Four-Tier Data Classification system is the central innovation of the TSDF Standard. Its purpose is to provide clear, enforceable rules for data sharing, protection, and control across all four sovereignty domains (Data, Network, Digital, Computational). This system moves foundational principles from aspiration to practical implementation.

### 3.1 Tier Definitions

#### T0: Open/Public Access

**Definition:** Data that has been formally and publicly released by the sovereign Indigenous entity for the collective benefit of all.

**Purpose & Scope:** This tier is for information that an Indigenous Nation has explicitly decided to make available without restriction, such as public announcements, educational materials, or certain research findings intended for a broad audience.

**Critical Principle:** Classification as T0 is an **affirmative act of Indigenous governance**. **Public release is never a default**; it requires deliberate sovereign decision.

**Sovereignty Domain Implications:**
- **Data:** Open access; attribution requirements may apply
- **Network:** May traverse any transmission infrastructure
- **Digital:** May reside on public platforms and services
- **Computational:** Training and inference permitted without restriction

**Examples:**
- Published Tribal government press releases
- Educational materials explicitly released for public use
- Research findings where the Nation has approved open publication
- Federal reports created through government-to-government consultation
- Shared environmental baselines in federated commons layers

**Local Contexts Labels:** TK Attribution (TK A), TK Verified (TK V)

---

#### T1: Community Network Access

**Definition:** Data shared among members of a trusted Indigenous network under reciprocal protocols.

**Purpose & Scope:** This tier facilitates collaboration and knowledge sharing between and among Indigenous Nations and organizations that share common values and protocols. Access is governed by mutual agreements and a shared understanding of responsibility and respect, creating a secure space for InterTribal relations.

**Critical Principle:** T1 embodies **reciprocity**—the foundational Indigenous value that relationships are mutual and ongoing, not transactional. Network membership itself implies shared responsibilities.

**Sharing Architecture:** T1 data is shared through the **window architecture**: network members access rendered views of data rather than receiving copies. Technically, this operates through tile servers, query APIs, or federated computation endpoints where the source Nation's infrastructure serves views to authorized recipients without transferring underlying datasets.

**Sovereignty Domain Implications:**
- **Data:** Network membership required; governed by standing protocols
- **Network:** Tribally-owned or federated infrastructure preferred; transmission pathways should be accountable to network governance
- **Digital:** Network-controlled services and platforms; data remains on source Nation infrastructure with views rendered to authorized members
- **Computational:** Network approval required for training; inference restricted to network scope

**Provenance Inheritance:** Derivative products created from T1 data carry embedded provenance metadata identifying the source Nation, the relationship that enabled access, and inherited obligations. Derivatives may be shared within the network (as T1) but external sharing requires source Nation authorization. This Standard anticipates alignment with IEEE P2890 (Recommended Practice for Provenance of Indigenous Peoples' Data) upon publication.

**Examples:**
- Climate adaptation data shared among ATNI member Tribes
- Traditional ecological knowledge shared between Nations with kinship ties
- Health outcome data aggregated across InterTribal health boards
- Emergency management coordination data during disaster response

**Distinction from T0:** Not publicly accessible—requires network membership  
**Distinction from T2:** Not negotiated per-instance—governed by standing network protocols

**Local Contexts Labels:** TK Community Voice (TK CV), BC Multiple Communities (BC MC)

---

#### T2: Negotiated Partner Access

**Definition:** Data shared with specific external partners through explicit, documented agreements that define permitted uses and obligations.

**Purpose & Scope:** This tier governs collaboration with non-Indigenous entities such as universities, government agencies, or NGOs. Sharing requires a formal agreement (e.g., research permit, data sharing agreement, MOU) that explicitly defines the scope of use, data security requirements, benefit-sharing, and the primacy of Indigenous governance.

**Critical Principle:** T2 operationalizes **Free, Prior, and Informed Consent (FPIC)** as an ongoing relationship, not a one-time transaction. Consent can be withdrawn, and terms must be transparently documented.

**Sharing Architecture:** T2 data is shared through the **window architecture**: external partners access rendered views or execute approved computations against source data without receiving copies. Technically, this may operate through secure API endpoints, view-only portals, or federated analysis environments where partner queries execute within Tribal infrastructure and only results return. Raw data transfer occurs only when explicitly authorized and documented in the governing agreement.

**Sovereignty Domain Implications:**
- **Data:** Access bound by explicit agreement terms; FPIC documented and revocable
- **Network:** Governed transmission pathways specified in agreement; may require encrypted channels or VPN access to Tribal infrastructure
- **Digital:** Platform and storage requirements specified in agreement; preference for data remaining on Tribal infrastructure with partner access via secure views
- **Computational:** Training and inference permitted only per explicit agreement terms; AI/ML applications require specific authorization

**Provenance Inheritance:** Derivative products created under T2 agreements carry embedded provenance metadata identifying the source Nation, the governing agreement, permitted uses, and inherited constraints. Derivatives inherit the authorization scope of their source data; uses beyond the original agreement require renegotiation. This Standard anticipates alignment with IEEE P2890 provenance specifications upon publication.

**Partner Categories:**
- Federal agencies (subject to FOIA considerations; see Section 7.4)
- State/provincial agencies
- Academic institutions (subject to Tribal IRB review; see Section 7.3)
- Non-governmental organizations
- Private sector entities (subject to enhanced requirements; see Section 7.2)
- Other Tribal Nations (when formal agreement preferred over T1 protocols)

**Examples:**
- Research data shared under university partnership agreement
- Environmental monitoring data shared with EPA under co-management MOU
- Health data shared with IHS under specific data use agreement
- Traditional knowledge documented with explicit benefit-sharing terms

**Local Contexts Labels:** TK Non-Commercial (TK NC), TK Outreach (TK O), BC Research Use (BC R)

---

#### T3: Sovereign Restricted

**Definition:** Data under complete Indigenous sovereign control that never leaves community-controlled systems.

**Purpose & Scope:** This tier protects sensitive, personal, and culturally restricted information. It includes data that is sacred, ceremonial, or simply not appropriate for external use. T3 data embodies the principle of **Possession** and ensures that Indigenous communities can maintain spaces of complete data autonomy.

**Critical Principle:** T3 implements **architectural guarantees**, making **external access technically impossible**, not just policy-prohibited. This is the technical manifestation of UNDRIP Article 31's protection of cultural heritage.

**The Role of Strategic Invisibility:** T3 also honors the concept of **strategic invisibility** or the conscious choice by communities to withhold information as an act of agency, resistance, and self-protection. **Not all knowledge should be visible** to outside systems, and the choice to remain unseen is itself an exercise of sovereignty.

**Sovereignty Domain Implications:**
- **Data:** Complete sovereign control; classification and access determined solely by Indigenous governance
- **Network:** Never traverses external networks; internal transmission only within community-controlled infrastructure
- **Digital:** On-nation infrastructure exclusively; no external cloud services, no third-party platforms
- **Computational:** External processing prohibited; internal computation under community governance only

**Suggested Technical Approaches:** The following approaches may assist communities in implementing T3 architectural guarantees. These are suggestions; ultimate determination of appropriate technical measures rests with each Indigenous community based on their governance structures, resources, and cultural protocols:

- **Air-gapped systems:** Physical isolation from external networks, ensuring no electronic pathway exists for data exfiltration
- **Geographic cryptographic binding:** Encryption mechanisms where physical location within Tribal jurisdiction is part of the decryption process; data literally cannot be decrypted outside designated boundaries
- **On-nation infrastructure:** Servers, storage, and compute resources physically located on Tribal lands under Tribal jurisdiction
- **Hardware security modules (HSMs):** Tamper-resistant devices that store encryption keys and perform cryptographic operations, with keys that cannot be extracted
- **Sovereign compute enclaves:** Isolated processing environments where sensitive computations occur without data exposure, using technologies such as trusted execution environments

Communities may implement some, all, or none of these approaches based on their specific needs and capacities. The defining characteristic of T3 is **Indigenous community determination** of what protections are appropriate, not adherence to any external technical specification.

**Examples:**
- Sacred and ceremonial knowledge
- Burial site locations and funerary objects documentation
- Clan-specific or gender-restricted knowledge
- Individual health records under Tribal jurisdiction
- Traditional knowledge that knowledge holders have designated restricted
- Language documentation designated for internal revitalization only

**Internal Protocols:** T3 does not mean all community members have access. Internal restrictions based on gender, clan, age, ceremonial role, or other cultural protocols operate within T3. The tier restricts external access; internal governance determines internal access.

**Local Contexts Labels:** TK Secret/Sacred (TK SS), TK Culturally Sensitive (TK CS), TK Clan (TK CL)

---

### 3.2 The Default Classification Principle

> **All data with an uncertain or unassigned classification must default to T3 (Sovereign).**

This principle is a foundational safeguard rooted in the **asymmetric harm argument:**

- **Under-classification harm:** The inappropriate release of sensitive or restricted data is profound and often **irreversible**. Once sacred knowledge is published, it cannot be unpublished. Once a burial site location is disclosed, it cannot be un-disclosed.

- **Over-classification consequence:** A delay that can be corrected through proper Indigenous-led governance and reclassification processes.

This "protect-first" approach prioritizes the safety and integrity of Indigenous knowledge systems. **Only authorized human decision-makers can downgrade classifications.** Automated systems may suggest upgrades (toward greater protection) but cannot execute downgrades.

---

### 3.3 Sovereignty Domain Requirements by Tier

This section specifies minimum requirements across all four sovereignty domains for each classification tier. These requirements ensure that tier classifications are meaningful across the full data lifecycle—from what is stored, through how it moves and is accessed, to how it may be transformed.

#### 3.3.1 Data Sovereignty Requirements

| Tier | Classification Authority | Access Determination | Reclassification |
|------|-------------------------|---------------------|------------------|
| T0 | Sovereign decision to release | Open to all | Upgrade: any time; Downgrade from T1+: sovereign decision |
| T1 | Source Nation governance | Network protocols | Upgrade: automatic on protocol violation; Downgrade: source Nation only |
| T2 | Source Nation governance | Per-agreement | Upgrade: automatic on agreement expiry/violation; Downgrade: source Nation only |
| T3 | Source Nation governance | Internal protocols only | Downgrade: sovereign decision with documented rationale |

#### 3.3.2 Network Sovereignty Requirements

| Tier | Transmission Infrastructure | Pathway Documentation | Jurisdictional Requirements |
|------|---------------------------|----------------------|---------------------------|
| T0 | Unrestricted | None required | None |
| T1 | Tribally-owned or federated preferred | Recommended | Network-accountable infrastructure preferred |
| T2 | Governed pathways per agreement | Required | Must be specified in agreement; encrypted channels recommended |
| T3 | Internal/community-controlled only | Internal audit only | Must remain within Tribal jurisdiction; no external network traversal |

#### 3.3.3 Digital Sovereignty Requirements

| Tier | Platform/Service Restrictions | Storage Location | Access Mechanism |
|------|------------------------------|------------------|------------------|
| T0 | None | Any | Direct access permitted |
| T1 | Network-controlled services | Source Nation infrastructure | Window architecture: rendered views via authorized endpoints |
| T2 | Per-agreement specification | Source Nation infrastructure preferred; alternatives per agreement | Window architecture: secure views or controlled data transfer per agreement |
| T3 | On-nation infrastructure only | Tribal jurisdiction exclusively | Internal systems only; no external access mechanisms |

#### 3.3.4 Computational Sovereignty Requirements

| Tier | Training Authorization | Inference Authorization | Derivative Governance |
|------|----------------------|------------------------|---------------------|
| T0 | Permitted | Permitted | Attribution required; no inherited restrictions |
| T1 | Network approval required | Network scope only | Provenance inheritance; network sharing permitted; external sharing requires source authorization |
| T2 | Per-agreement only | Per-agreement only | Provenance inheritance; uses bound by agreement scope; renegotiation required for expanded use |
| T3 | Prohibited externally | Prohibited externally | Internal governance only; no external derivatives permitted |

#### 3.3.5 IEEE 2890-2025 Provenance Requirements by Tier

IEEE 2890-2025 establishes provenance parameters that vary by classification tier:

|Tier|Provenance Visibility|Chain of Custody|AI/ML Logging|Benefit Sharing|
|---|---|---|---|---|
|T0|Public|Recommended|Optional|Not applicable|
|T1|Network members|Required|Required|Network-determined|
|T2|Agreement parties|Required (no gaps)|Required|Required in agreement|
|T3|Sovereign authority only|Mandatory (no gaps); all locations Indigenous-controlled|Required even if prohibited|Not applicable|

**T3 Specific Requirements:** For T3 data, IEEE 2890-2025 provenance tracking requires:

- Chain of custody is **mandatory** with no gaps permitted
- All custody locations must be Indigenous-controlled
- All derivations must be authorized and logged
- AI/ML processing events must be logged even when denied (for audit purposes)

---

### 3.4 Tier Visualization

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SOVEREIGNTY BOUNDARY                            │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                           T3: SOVEREIGN                           │  │
│  │         Never leaves community-controlled systems                 │  │
│  │    ┌─────────────────────────────────────────────────────────┐    │  │
│  │    │                    T2: NEGOTIATED                       │    │  │
│  │    │      External partners via explicit agreements          │    │  │
│  │    │    ┌───────────────────────────────────────────────┐    │    │  │
│  │    │    │               T1: NETWORK                     │    │    │  │
│  │    │    │    Indigenous network via reciprocal protocols│    │    │  │
│  │    │    │    ┌─────────────────────────────────────┐    │    │    │  │
│  │    │    │    │            T0: OPEN                 │    │    │    │  │
│  │    │    │    │   Public by sovereign decision      │    │    │    │  │
│  │    │    │    └─────────────────────────────────────┘    │    │    │  │
│  │    │    └───────────────────────────────────────────────┘    │    │  │
│  │    └─────────────────────────────────────────────────────────┘    │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘

Movement INWARD (toward T3): Protective upgrade
  - May be automated
  - Triggered by: agreement expiry, protocol violation, provenance break
  
Movement OUTWARD (toward T0): Sovereign decision
  - Requires authorized human decision-maker
  - Cannot be automated
  - Must be documented with rationale
```

---

## 4.0 Framework Alignment and Interoperability

The TSDF classification system is designed to align with and operationalize major existing frameworks for Indigenous rights and data governance while maintaining interoperability with emerging international standards.

### 4.1 Standards Integration Overview

|Standard|Organization|Status|TSDF Integration|
|---|---|---|---|
|IEEE 2890-2025|IEEE Standards Association|Active (Nov 2025)|Provenance schema, Data Actor Model|
|CARE Principles|Global Indigenous Data Alliance|Active|Tier-to-principle mapping|
|OCAP®|First Nations Information Governance Centre|Active|Governance requirements|
|FAIR Principles|GO FAIR|Active|Conditional alignment (sovereignty-first)|
|Local Contexts Labels|Local Contexts|Active|Metadata integration|
|UNDRIP|United Nations|Active|Rights foundation|

### 4.2 CARE Principles Alignment

The CARE Principles for Indigenous Data Governance (Carroll et al., 2020) provide the ethical foundation:

|Principle|T0|T1|T2|T3|
|---|---|---|---|---|
|**Collective Benefit**|Maximized through intentional public release|Mutual benefit across network|Specified in agreements|Protection IS the benefit|
|**Authority to Control**|Release is sovereign act|Network governance|Agreement-based control|Complete authority retained|
|**Responsibility**|Attribution obligations|Relational accountability|Partner obligations documented|Internal stewardship|
|**Ethics**|Ethical release decision|Shared cultural values|Ethical terms negotiated|Cultural protocols honored|

CARE principles apply across all four sovereignty domains. Authority to Control, for example, extends not only to data classification (Data Sovereignty) but to transmission pathways (Network Sovereignty), storage and access platforms (Digital Sovereignty), and algorithmic processing (Computational Sovereignty).

**Implementation Requirements:**

- **C - Collective Benefit:** T2 agreements MUST include benefit-sharing provisions; benefits tracked in IEEE 2890 provenance
- **A - Authority to Control:** Only Indigenous authorities can downgrade tier classification; consent revocable at any time
- **R - Responsibility:** Audit logging for all data access; clear accountability chains
- **E - Ethics:** Consent records linked to all non-T0 data; cultural protocols respected in system design

### 4.3 OCAP® Principles Alignment

The First Nations principles of Ownership, Control, Access, and Possession (FNIGC, 2014):

|Principle|T0|T1|T2|T3|
|---|---|---|---|---|
|**Ownership**|Expressed through attribution|Collective network ownership|Explicitly asserted in agreements|Complete ownership|
|**Control**|Terms of release controlled|Network protocols govern|Access conditional, revocable|Absolute control|
|**Access**|Granted to all|Network members only|Specific partners only|No external access|
|**Possession**|Attribution retained|Network custody via window architecture|View-only access; copies per agreement only|Physical + legal possession|

The window architecture operationalizes OCAP® Possession at T1 and T2: data remains in the custody of the source Nation while authorized parties access rendered views. This technical implementation ensures that sharing does not require relinquishing possession.

**Note:** OCAP® applies specifically to First Nations contexts. TSDF extends similar principles to all Indigenous Peoples. Where OCAP® requirements exceed TSDF minimums, OCAP® prevails for First Nations data.

### 4.4 UNDRIP Alignment

|Article|Relevance|Tier Implementation|Sovereignty Domain|
|---|---|---|---|
|**Article 18**|Right to participate in decision-making|T1 network governance|Data, Digital|
|**Article 19**|Free, Prior, and Informed Consent|T2 agreement mechanism|All domains|
|**Article 23**|Right to determine development priorities|T0 release decisions|Data|
|**Article 31**|Right to cultural heritage protection|T3 architectural guarantees|All domains|

UNDRIP Article 31 specifically requires protection of Indigenous cultural heritage, traditional knowledge, and traditional cultural expressions. T3's architectural guarantees—including geographic cryptographic binding and on-nation infrastructure requirements—provide technical implementation of these protections across all four sovereignty domains.

### 4.5 IEEE 2890-2025 Alignment

**IEEE 2890-2025: IEEE Recommended Practice for Provenance of Indigenous Peoples' Data** is the first international standard for Indigenous data provenance, published November 14, 2025. This Standard adopts IEEE 2890-2025 as the authoritative reference for provenance implementation.

#### 4.5.1 IEEE 2890-2025 Scope

IEEE 2890-2025 establishes:

- Common parameters for provenance of Indigenous Peoples' data
- Controlled vocabulary for metadata fields
- Data Actor Model (human and non-human entities)
- Interoperability requirements for ML/AI and biodiversity contexts
- Benefit-sharing documentation mechanisms

The provenance framework facilitates Indigenous Peoples' governance, decision-making, participation, collaboration, and engagement in current and future uses of Indigenous Peoples' data.

#### 4.5.2 Data Actor Model

IEEE 2890-2025 introduces the concept of "data actors" that includes non-human entities, with humans ultimately responsible for their actions:

**Human Actors:**

- Person
- Organization
- Nation

**Non-Human Actors** (require responsible human assignment):

- Device
- Application
- Algorithm
- AI System
- Database
- Repository

**TSDF Implementation Rule:** All non-human data actors MUST have a responsible human identified. This implements the IEEE 2890-2025 principle that humans are ultimately accountable for machine operations on Indigenous data, aligning with Convergence Principle 5: "Human Accountability for Human Artifacts."

#### 4.5.3 TSDF-IEEE 2890-2025 Component Alignment

|TSDF Component|IEEE 2890-2025 Alignment|
|---|---|
|Provenance metadata (Section 3.3.5)|Aligned with IEEE 2890-2025 provenance parameters|
|Provenance inheritance rules|Implements IEEE 2890-2025 data lineage specifications|
|Derivative tracking|Follows IEEE 2890-2025 relationship disclosure requirements|
|Source Nation attribution|Aligns with IEEE 2890-2025 governance facilitation goals|
|Benefit sharing tracking|Implements IEEE 2890-2025 benefit documentation|
|AI/ML audit logging|Follows IEEE 2890-2025 custody event actions|

#### 4.5.4 AI/ML Provenance Tracking

IEEE 2890-2025 recognizes that AI/ML systems increasingly process Indigenous data. TSDF tracks these operations through IEEE 2890-2025 custody event actions:

|Action|Description|
|---|---|
|`embedded`|Data converted to vector embedding|
|`trained_on`|Data used for model training|
|`inference_used`|Data used for model inference|
|`denied`|Operation attempted but prohibited|

**Enforcement Rule:** Even when AI/ML operations are **prohibited** (T3 data), attempted operations should be logged with action `denied` for audit purposes.

#### 4.5.5 Benefit Sharing Documentation

IEEE 2890-2025 supports benefit-sharing documentation. For T2 agreements, benefit tracking includes:

- Benefit types (capacity building, data return, co-authorship, etc.)
- Benefit recipients (Nation identifiers)
- Benefits delivered (with verification)
- Benefits pending (with expected dates)

#### 4.5.6 Implementation Status

This integration aligns with the published IEEE 2890-2025 standard. Implementations should:

- Adopt IEEE 2890-2025 compliant provenance tracking
- Recognize IEEE 2890-2025 compliance as evidence of meeting TSDF provenance requirements
- Update controlled vocabulary fields as IEEE 2890-2025 tooling becomes available

### 4.6 Relationship with FAIR and Open Science

A tension exists between the mandates of Open Science and FAIR Data Principles (Findability, Accessibility, Interoperability, Reusability) and the need to protect Indigenous data. The FAIR principles were designed to enhance machine-to-machine data sharing but were created without Indigenous input and often fail to recognize Indigenous Peoples as rights holders.

The TSDF Standard resolves this tension through the principle:

> **"As open as possible, as closed as necessary."**

**FAIR applies only where CARE is satisfied first.**

|FAIR Principle|T0|T1|T2|T3|
|---|---|---|---|---|
|**Findable**|Yes|Network scope|Agreement scope|No (intentionally)|
|**Accessible**|Yes|Network protocols|Agreement terms|No external access|
|**Interoperable**|Yes|Network standards|Partner standards|Internal only|
|**Reusable**|Yes (with attribution)|Network approval|Per agreement|No reuse|

The window architecture further reconciles this tension: data can be Findable (discoverable in network catalogs), Accessible (via authorized view endpoints), Interoperable (through standard APIs), and Reusable (for authorized purposes)—all without transferring possession. FAIR technical goals can be achieved while CARE governance principles take precedence.

### 4.7 Local Contexts Labels Integration

The Traditional Knowledge (TK) and Biocultural (BC) Labels developed by Local Contexts provide granular cultural protocols within tier classifications:

|Tier|Applicable Labels|Function|
|---|---|---|
|T0|TK Attribution, TK Verified|Attribution and verification|
|T1|TK Community Voice, BC Multiple Communities|Network protocol signaling|
|T2|TK Non-Commercial, TK Outreach, BC Research Use|Use restriction specification|
|T3|TK Secret/Sacred, TK Culturally Sensitive, TK Clan|Internal protocol markers|

Labels provide cultural specificity; Tiers provide governance enforcement. Both are necessary. Local Contexts Labels travel with data through provenance inheritance, ensuring that cultural protocols are communicated even when data moves through the window architecture.

**Interoperability:** TSDF provenance links to Local Contexts Hub via project identifiers, enabling cross-system label recognition.

### 4.8 Additional IEEE Standards Reference

This Standard maintains awareness of related IEEE standards that may inform implementation:

|IEEE Standard|Relevance|TSDF Application|
|---|---|---|
|**IEEE 7000-2021**|Addressing Ethical Concerns in System Design|Corporate partner prerequisites (Section 7.2)|
|**IEEE 7001-2021**|Transparency of Autonomous Systems|Audit logging transparency requirements|
|**IEEE 7003-2024**|Algorithmic Bias Considerations|AI/ML bias assessment for T1/T2 training|
|**IEEE P7018**|Generative AI Security Framework|LLM inference restriction guidance|

These standards address technical ethics; TSDF addresses sovereignty. Partners may demonstrate IEEE compliance as evidence of meeting T2 technical obligations, but IEEE compliance does not substitute for Indigenous governance approval.

## 5.0 Governance and Partnership Model

This Standard is designed to support flexible, Indigenous-led governance across all four sovereignty domains. It specifies **what must be governed**, not **how** specific Indigenous governance bodies must be structured—respecting the diversity of traditional and contemporary governance systems among Indigenous Nations.

### 5.1 Core Governance Functions

Any entity implementing this Standard must establish clear governance for:

**Classification Authority (Data Sovereignty)** The authority to classify data within the four-tier system rests exclusively with designated Indigenous governance bodies. This includes:

- Initial classification of new data
- Periodic review of existing classifications
- Reclassification decisions (with restrictions on downgrading per Section 3.2)

**Consent Mechanisms (All Domains)** Free, Prior, and Informed Consent (FPIC) must be treated as an **ongoing dialogue**, not a one-time transactional event. FPIC applies across all four sovereignty domains:

- **Data:** Consent for collection, classification, and use
- **Network:** Consent for transmission pathways and infrastructure
- **Digital:** Consent for storage platforms and access mechanisms
- **Computational:** Consent for algorithmic processing and AI/ML applications

Consent must be obtained from both the appropriate Indigenous governing body and individual knowledge holders. All grants of consent, including specific conditions or limitations, must be formally documented and linked to the associated data through IEEE 2890-2025 compliant provenance tracking.

**Authority to Reclassify (Data Sovereignty)** The authority to downgrade a data classification (e.g., from T3 to T2) rests **exclusively** with authorized Indigenous individuals or the designated governance body. This is a critical control point that:

- Requires deliberate human intervention
- Cannot be automated
- Must be documented with rationale
- Must be reflected in provenance metadata

Systems may automate protective upgrades (e.g., T2 → T3 upon agreement expiry) but never downgrades.

**Infrastructure Governance (Network, Digital, Computational Sovereignty)** Governance must extend beyond data classification to encompass:

- Approval of network transmission pathways for T1/T2 data
- Selection and oversight of digital platforms and storage services
- Authorization of computational processes, especially AI/ML applications
- Audit and accountability across all infrastructure layers

**Audit and Accountability (All Domains)** Clear mechanisms must be in place to audit data access and use across all four sovereignty domains, ensuring compliance with tier requirements and associated agreements. An auditable trail provides the accountability necessary to enforce the Standard and build trust with partners. Audit mechanisms should align with IEEE 2890-2025 provenance specifications.

### 5.2 The Partnership Spectrum

Following David-Chavez's (2024) scale of engagement, partnerships should progress toward Indigenous authority:

1. **Consultation** — External entities inform communities and solicit feedback. Power remains with external partner.
2. **Collaboration** — Partners work together, but framework/funding/governance may still be externally driven.
3. **Knowledge Co-production** — Indigenous knowledge systems treated with equity. Shared decision-making throughout research process.
4. **Indigenous-Determined** — Indigenous communities initiate and control the entire research and data lifecycle. External partners operate under Indigenous Nation's governance.

**T2 agreements should specify the partnership level** and include mechanisms for progression toward Indigenous determination. The window architecture supports this progression: as partnerships mature, access scope may expand while data custody remains with the source Nation.

### 5.3 The Legal Authority of Tribal Research Codes

This Standard affirms that **Tribal research codes, protocols, and data agreements are enforceable law** governing all data-related activities within a Tribe's jurisdiction. Researchers and external partners are legally and ethically bound to comply with:

- Tribal Institutional Review Boards (IRBs)
- Designated research oversight bodies
- Community-specific protocols and codes

These Indigenous laws form the primary legal basis for all T2 agreements and take precedence over external institutional requirements.

### 5.4 Federated Governance for Network Operations

For T1 (Network) tier operations, governance must address the federated nature of InterTribal data sharing:

**Network Membership Governance**

- Criteria for network membership
- Reciprocal obligations of members
- Dispute resolution mechanisms
- Member suspension or removal procedures

**Protocol Governance**

- Standing protocols for T1 data sharing
- Amendment procedures for network protocols
- Emergency procedures for time-sensitive data needs

**Commons Governance**

- Management of shared T0 infrastructure (federated environmental baselines, etc.)
- Contribution obligations and standards
- Synchronization and resilience protocols

---

## 6.0 AI/ML Governance

Artificial intelligence and machine learning technologies present unique risks and opportunities for Indigenous data governance. This section establishes clear boundaries for AI/ML applications across classification tiers and all four sovereignty domains.

### 6.1 AI/ML Restrictions by Tier

|Tier|Training|Inference|Rationale|
|---|---|---|---|
|T0|Permitted|Permitted|Public release implies broad use authorization|
|T1|Network approval required|Network scope only|AI benefits should remain within Indigenous network|
|T2|Per agreement only|Per agreement only|Explicit consent required for each AI application|
|T3|Prohibited|Prohibited|Sovereign data must never enter AI systems|

### 6.2 Computational Sovereignty for AI/ML

AI/ML applications implicate Computational Sovereignty directly. The following requirements apply:

**Training Data Restrictions**

- T1 data may only train models that remain under Indigenous network governance
- T2 training requires explicit, informed consent specifying model use cases, training methodology, and output restrictions
- No T3 data may be used for any AI/ML purpose, including "anonymized" derivatives
- Training on Indigenous data requires documentation of data lineage per IEEE 2890-2025

**Inference Restrictions**

- Models trained on T1 data may only generate outputs within network boundaries
- T2 inference must align with documented agreement terms
- Large language models (LLMs) trained on web data may have inadvertently incorporated T1 or higher materials; inference involving Indigenous contexts requires review

**Model Governance**

- Models trained on Indigenous data are themselves subject to tier classification
- A model trained on T1 data inherits T1 restrictions on its deployment and outputs
- Model provenance must document all Indigenous data sources per IEEE 2890-2025

**Compute Location Requirements**

- T1 AI/ML training should occur on network-controlled infrastructure where feasible
- T2 AI/ML training location must be specified in agreements
- T3 data may only be processed computationally within on-nation infrastructure

### 6.3 Addressing the "5D Data" Problem in AI

AI systems trained on colonial statistics risk perpetuating Dr. Walter's "5D Data" deficit framings (Disparity, Deprivation, Disadvantage, Dysfunction, Difference). T2 agreements involving AI/ML applications should require:

- Bias assessment criteria determined by Indigenous partners
- Review of training data for deficit framing
- Indigenous oversight of model outputs
- Right to require model modification or termination
- Documentation of bias assessment in provenance metadata

### 6.4 Generative AI Specific Provisions

Generative AI systems (large language models, image generators, etc.) present heightened risks:

**Training Concerns**

- Web-scraped training data may include Indigenous knowledge harvested without consent
- Sacred or restricted knowledge may have been inadvertently included in training corpora
- Training data provenance for large models is often opaque or undisclosed

**Inference Concerns**

- Generated outputs may reproduce or recombine Indigenous knowledge inappropriately
- Hallucinated content may misrepresent Indigenous cultures, histories, or practices
- Generated content may be mistaken for authoritative Indigenous sources

**Safeguards**

- T2 agreements involving generative AI must specify permitted output types
- Generated content derived from Indigenous data must carry provenance markers indicating AI generation
- Indigenous partners retain review rights over AI-generated content before external release

### 6.5 The Limits of Computation

This Standard recognizes the fundamental distinction between computation and knowledge articulated in the Convergence Systems Architecture:

> **"Knowledge is Embodied. Wisdom emerges through lived relationship with land, kin, and ceremony. Computation without relation is not knowledge."**

AI systems can process information, identify patterns, and generate predictions. They cannot know in the relational sense Indigenous epistemologies recognize. They cannot be accountable to kin. They cannot fulfill obligations to the Beings whose data they process. This limitation must inform all AI/ML governance decisions.

Digitization and algorithmic processing may serve Indigenous self-determination when governed appropriately. But treating AI outputs as equivalent to Indigenous knowledge, or treating digitization as preservation, obscures what is lost when knowledge is severed from relation.

---

## 7.0 External Partner Accountability Standards

This section establishes differentiated accountability requirements for external partners seeking T2 access. The framework recognizes that power asymmetry and extraction risk vary by partner type, requiring proportionate safeguards across all four sovereignty domains.

### 7.1 Differentiated Accountability Principle

Not all partners pose equivalent extraction risk. Entities with greater resources, data aggregation capacity, and commercial incentives require stricter accountability mechanisms. This differentiation:

- Concentrates compliance burden on entities with capacity to comply
- Preserves relational trust mechanisms for smaller partners
- Creates legal recourse pathways proportionate to potential harm
- Maintains usability for capacity-constrained Indigenous Nations

**Guiding Framework:** Tribes set the terms; partners must qualify. Indigenous Nations determine partnership readiness, not partner self-certification.

### 7.2 Legal Architecture Summary

|Partner Type|Primary Accountability|Secondary Accountability|Escalation Path|
|---|---|---|---|
|Corporate|Contract + IEEE attestation|Regulatory exposure|Litigation for damages|
|Federal|Trust responsibility|Consultation requirements|Administrative/judicial review|
|Academic|Institutional policy + IRB|Funding agency requirements|Institutional sanctions|
|Small Org/NGO|Relational/resolution-based|Community accountability|Resolution revocation|

### 7.3 Corporate Partner Requirements

For purposes of this section, **"Large Corporate Entity"** means any for-profit organization with annual revenues exceeding $50 million USD, or any subsidiary or affiliate of such organization, or any organization whose primary business involves data aggregation, artificial intelligence, or machine learning services.

Large Corporate Entities seeking T2 access must demonstrate compliance across all four sovereignty domains:

#### 7.3.1 Required Certifications

Partners must provide evidence of compliance with recognized AI ethics and data governance standards prior to agreement negotiation:

a) **IEEE 7000-2021 Compliance Documentation** demonstrating value-based engineering processes that explicitly identified and prioritized Indigenous data sovereignty as a core value, including documented stakeholder engagement with the Indigenous governing authority;

b) **IEEE 7003-2024 Bias Assessment** for all AI/ML systems that will process, analyze, or derive insights from Indigenous data, with specific attestation that systems have been audited for deficit-framing bias patterns;

c) **IEEE 7001-2021 Transparency Certification** for any autonomous or semi-autonomous systems, with commitment to provide explainability documentation upon request;

d) **IEEE 2890-2025 Provenance Implementation** demonstrating compliant provenance tracking from collection through application;

e) **Designated Compliance Officer** with authority to halt data processing upon notice of potential violation;

f) **Consent to Audit** granting the Indigenous governing authority or its designee right to audit compliance at reasonable intervals during the agreement term.

#### 7.3.2 Sovereignty Domain Compliance

**Data Sovereignty Compliance**

- Acknowledgment of Indigenous data governance authority
- Commitment to tier classification restrictions
- Agreement to Indigenous audit rights

**Network Sovereignty Compliance**

- Documentation of data transmission pathways
- Encrypted transmission requirements
- No unauthorized routing through third-party infrastructure

**Digital Sovereignty Compliance**

- Specification of storage platforms and jurisdictions
- Commitment to data residency requirements per agreement
- Platform security certifications

**Computational Sovereignty Compliance**

- Full IEEE standards compliance as specified above
- Bias audit documentation using Indigenous-determined criteria
- Measurable transparency levels for any automated systems processing Indigenous data

#### 7.3.3 Legal Accountability

- **Binding arbitration clauses** recognizing Tribal jurisdiction
- **Liquidated damages provisions** for tier violations
- **Indemnification** for downstream harms from data misuse
- **Annual compliance reporting** to Indigenous governance body

#### 7.3.4 Attestation and Liability

Corporate signatories must attest under penalty of contract that all compliance documentation is accurate and complete. Material misrepresentation of compliance status constitutes grounds for:

- Immediate agreement termination
- Data return or destruction
- Forfeiture of any license rights
- Liability for damages including consequential damages arising from data misuse

**No Waiver.** IEEE compliance prerequisites establish minimum partner readiness and do not limit, waive, or modify any other requirement of this Standard or applicable Tribal law.

**Rationale:** Corporate entities have resources to comply with formal standards AND pose the highest extraction threat due to data aggregation capacity, commercial incentives, and institutional power asymmetry. When a corporation signs a T2 agreement attesting to IEEE compliance, that attestation becomes a material term of the contract. Violations create grounds for contract termination, damages for misrepresentation, injunctive relief, and recovery of benefit-sharing owed.

---

### 7.4 Academic Partner Requirements

Universities and research institutions seeking T2 access operate under modified requirements recognizing the relational nature of academic partnerships while addressing the persistent friction point of institutional IP policies.

#### 7.4.1 The Core Tension

University IP policies are often written as blanket assertions that capture everything generated "in the course of research," and most Principal Investigators sign agreements without authority to carve out exceptions. This directly conflicts with TSDF's assertion that Indigenous data remains under Indigenous authority regardless of who collects or processes it.

**Resolution Framework:** The key legal argument is **jurisdictional**: Indigenous data originates under Tribal jurisdiction. University IP policies govern what happens within university systems, but cannot retroactively claim jurisdiction over data that was never theirs to begin with.

#### 7.4.2 Academic Institution Data Sovereignty Acknowledgment

Academic institutions seeking T2 access must provide **institutional-level acknowledgment** that Indigenous Data Sovereignty supersedes conflicting institutional intellectual property policies. This acknowledgment must be executed by an authorized institutional official (Provost, Vice President for Research, or equivalent) with authority to bind the institution, not solely by the Principal Investigator.

**Required Acknowledgments:**

a) **Jurisdictional Recognition.** The institution acknowledges that Indigenous data originates under the jurisdiction of the Indigenous governing authority and that institutional IP policies do not attach to data over which the institution never held original jurisdiction.

b) **Policy Subordination.** To the extent any institutional policy conflicts with the terms of this agreement regarding Indigenous data ownership, control, access, or possession, the institutional policy is subordinated to this agreement for all data within scope.

c) **Derived Products.** Analyses, datasets, visualizations, algorithms, models, or other products derived primarily from Indigenous data remain subject to Indigenous data governance. The institution may retain limited use rights as specified in the agreement but does not acquire ownership through the act of derivation.

d) **No Encumbrance.** The institution shall not pledge, license, transfer, or encumber Indigenous data or derived products to any third party without explicit written authorization from the Indigenous governing authority.

e) **Survival.** These acknowledgments survive termination of the research partnership and any subsequent change in institutional policy.

#### 7.4.3 Data Classification in Research Partnerships

Not everything generated in a research partnership is Indigenous data. Creating clear categories prevents overreach in both directions:

|Category|Definition|Ownership|Example|
|---|---|---|---|
|**Source Indigenous Data**|Data collected from, about, or within Indigenous peoples, lands, waters, or relations|Indigenous governing authority (non-negotiable)|Interview transcripts, environmental samples from Tribal lands, health records|
|**Derived Indigenous Data**|Products generated primarily through analysis of Source Indigenous Data|Indigenous governing authority with possible institutional use rights|Statistical analyses of Tribal health data, models trained on TEK|
|**Partnership Products**|Jointly developed methods, tools, or frameworks not specific to Indigenous data|Negotiated co-ownership or licensing|General analytical software, non-Indigenous-specific methodology|
|**Institutional Products**|Products developed independently by institutional researchers without Indigenous data input|Institution|Background IP brought to partnership, publications on general methods|

**Classification Authority.** In cases of uncertainty, the Indigenous governing authority holds classification authority. Disputes default to Indigenous data classification pending resolution.

#### 7.4.4 Institutional Exception Requirements

Prior to T2 agreement execution, the academic institution must:

a) **Identify** the specific institutional IP policy provisions that could conflict with Indigenous data sovereignty;

b) **Document** the institutional exception or waiver mechanism applicable to this partnership;

c) **Provide written confirmation** that the exception has been processed through appropriate institutional channels (Office of Research, General Counsel, Technology Transfer, etc.);

d) **Name the institutional official** with ongoing authority to resolve IP disputes in favor of agreement terms.

**Federally Funded Research.** Where federal funding is involved, the institution must document how Bayh-Dole Act obligations (35 U.S.C. § 200-212) will be satisfied without compromising Indigenous data sovereignty. This may include:

- Requesting agency approval for data sovereignty provisions
- Structuring Indigenous data as "background IP" excluded from federal rights
- Utilizing agency-specific Indigenous data policies (NSF, NIH, etc.)

#### 7.4.5 Publication and Dissemination Protocol

Publications are where IP conflicts often surface. Clear protocols protect against unauthorized disclosure:

a) **Review Right.** The Indigenous governing authority retains right to review all publications, presentations, and reports derived from T2 data prior to submission or presentation. Review period shall be 30-60 days unless otherwise specified.

b) **Consent Scope.** Consent to publish specific findings does not constitute consent to publish underlying data, extended analyses, or future publications without additional review.

c) **Attribution.** All publications must acknowledge Indigenous data sovereignty and the specific Nation(s) whose data informed the research, using language approved by the Indigenous governing authority.

d) **Withdrawal Right.** The Indigenous governing authority may withdraw consent for publication at any time prior to publication if circumstances change or concerns arise. Post-publication, the authority may request retraction if material misrepresentation is discovered.

e) **Repository Restrictions.** Data shall not be deposited in institutional or public repositories without explicit authorization. Where deposit is required by funding agencies, the Indigenous governing authority must approve repository selection and access controls.

#### 7.4.6 Required Documentation Summary

- Institutional Review Board (IRB) approval acknowledging Tribal IRB primacy
- Signed commitment to CARE Principles
- Data management plan aligned with TSDF tier requirements across all four sovereignty domains
- Evidence of prior Indigenous community research relationships (preferred)
- IEEE 2890-2025 compliant provenance tracking plan
- **Institutional Data Sovereignty Acknowledgment** (Section 7.4.2)
- **IP Exception Documentation** (Section 7.4.4)

#### 7.4.7 Technical Requirements

- Secure data handling protocols meeting T2 specifications
- Audit logging capability aligned with IEEE 2890-2025
- Data return/destruction procedures upon project completion
- Window architecture implementation for view-only access where feasible

#### 7.4.8 Accountability Mechanisms

- Research agreement enforceable under Tribal research code
- Publication review rights for Indigenous partners
- Benefit-sharing terms (co-authorship, capacity building, data return)

**IEEE Reference (Optional).** Academic partners may reference IEEE 7000/7001/7003 standards as supplementary evidence of ethical research capacity, but formal certification is not required. Relational trust and demonstrated research ethics take precedence.

#### 7.4.9 Enforcement and Remedies

a) **Breach.** Institutional assertion of IP rights over Indigenous data contrary to agreement terms constitutes material breach, entitling the Indigenous governing authority to immediate termination, data return, and pursuit of damages.

b) **Injunctive Relief.** The Indigenous governing authority may seek injunctive relief to prevent publication, licensing, or transfer of Indigenous data or derived products claimed under institutional IP policies.

c) **Indemnification.** The institution shall indemnify the Indigenous governing authority against any third-party claims arising from institutional misrepresentation of rights to Indigenous data.

d) **Reporting to Funding Agencies.** Material breach involving federally funded research may be reported to the relevant funding agency as a compliance matter.

**Practical Implementation Notes:**

- Get institutional sign-off early. Many partnerships fail because the PI commits to terms their institution won't honor.
- Model institutions exist. University of Arizona, University of Washington, and others have developed Indigenous research policies that can be referenced.
- Funding agency leverage. NSF and NIH increasingly recognize Indigenous data sovereignty. Framing provisions as consistent with federal policy helps institutional buy-in.
- Tribal IRB authority. Where Tribal IRBs exist, their authority to condition research approval on these terms strengthens the governance structure.

---

### 7.5 Federal and Governmental Partner Requirements

Federal agencies and government entities operate under existing government-to-government relationship frameworks with specific considerations:

#### 7.5.1 Recognized Equivalencies

Federal partners may demonstrate accountability through equivalent frameworks:

- NIST AI Risk Management Framework (AI RMF) compliance for AI/ML systems
- OMB Circular A-130 data governance requirements
- Tribal Consultation Documentation demonstrating meaningful consultation per Executive Order 13175 and agency-specific consultation policies
- Existing intergovernmental agreements

#### 7.5.2 FOIA Considerations

T2 agreements with federal partners must address Freedom of Information Act implications:

- Exemption 4 (trade secrets, confidential commercial/financial information) applicability
- Exemption 6 (personal privacy) protections
- Pre-submission notification requirements
- Segregation of releasable and protected data elements
- **FOIA Protection Commitment** specifying how T2 data will be protected from disclosure, including identification of applicable exemptions

#### 7.5.3 Sovereignty Domain Requirements

- **Data:** Government-to-government consultation protocols honored
- **Network:** Secure government transmission channels acceptable
- **Digital:** FedRAMP-authorized platforms acceptable with jurisdictional documentation
- **Computational:** AI/ML applications subject to agency AI governance plus TSDF requirements

#### 7.5.4 Trust Responsibility

Federal agencies are reminded that trust responsibility extends to protection of Tribal data assets. Agency failures to protect T2 data may constitute breach of trust responsibility actionable under applicable law.

**Sovereignty Recognition:**

- Government-to-government consultation protocols must be honored
- Tribal law recognized as governing data use within Tribal jurisdiction
- Annual reporting on data use and outcomes
- IEEE 2890-2025 compliant provenance tracking required for research applications
- **Data Return Protocol** ensuring data return or destruction upon project completion, with certification of destruction where applicable

---

### 7.6 Small Organization and NGO Requirements

Non-governmental organizations and small entities (annual budget under $5 million USD) may access T2 data through simplified trust mechanisms that honor Indigenous governance traditions.

#### 7.6.1 Resolution-Based Trust Determination

External partners not subject to Section 7.3 (Corporate) requirements may seek T2 access through **Tribal resolution-based trust determination**. This pathway recognizes that trust is relational and that Indigenous governance systems have long-standing mechanisms for evaluating community relationships.

**Eligible Partners:** Academic institutions (where institutional acknowledgment is not feasible), non-profit organizations, community-based organizations, Indigenous-serving organizations, and other entities not meeting the Large Corporate Entity definition.

**Process:**

a) Partner submits a **relationship statement** documenting prior engagement with the Indigenous community, proposed data use, and commitment to TSDF principles;

b) Designated governance body **evaluates the relationship** through culturally appropriate processes, which may include community input, Elder consultation, or other traditional deliberation;

c) If approved, the governing body **issues a Tribal resolution** authorizing T2 negotiation with the specific partner, specifying any conditions or limitations;

d) The resolution becomes an **exhibit to the T2 agreement** and establishes the trust basis for the relationship.

#### 7.6.2 Resolution Authority

The Tribal resolution may specify:

- Duration of trust authorization (subject to renewal)
- Specific data categories accessible under the authorization
- Conditions that would trigger automatic revocation
- Community accountability mechanisms (reporting, community presentations, etc.)
- Benefit-sharing expectations appropriate to partner capacity

#### 7.6.3 Required Documentation

- Signed TSDF Partnership Commitment (template provided in Appendix A)
- Basic data handling procedures appropriate to organizational capacity
- Named individual responsible for data stewardship
- Commitment to IEEE 2890-2025 provenance principles (formal implementation not required)

#### 7.6.4 Accountability

Partners authorized by resolution are accountable to the community through the relationship itself. Violation of resolution terms or community trust may result in:

- Revocation by subsequent resolution, with no requirement for formal legal process
- This reflects the Indigenous principle that **relationships, not contracts, are the primary governance mechanism**

Partnership subject to Tribal resolution review (annual or project-based). Right of Indigenous partner to terminate access without cause.

#### 7.6.5 Escalation

If a resolution-authorized partner subsequently meets the Large Corporate Entity definition (through growth, acquisition, or change in primary business), the trust authorization terminates and the partner must satisfy Section 7.3 requirements to continue T2 access.

**Rationale:** Small organizations often lack resources for formal certification but may have strong relational foundations with Indigenous communities. Localized trust mechanisms honor Indigenous governance traditions while maintaining accountability.

---

### 7.7 IEEE Standards Integration Summary

This Standard integrates IEEE standards for partner accountability without subordinating Indigenous governance to external compliance frameworks:

|IEEE Standard|TSDF Application|Partner Type|
|---|---|---|
|IEEE 2890-2025|Provenance tracking (required)|All T2 partners|
|IEEE 7000-2021|Ethical system design|Corporate (required)|
|IEEE 7001-2021|Transparency assessment|Corporate (required)|
|IEEE 7003-2024|Bias considerations|Corporate (required); Academic (optional)|
|IEEE P7018|Generative AI governance|All partners using generative AI|

**Critical Distinction:** IEEE standards address technical ethics and provenance; TSDF addresses sovereignty. Partners demonstrating IEEE compliance provide evidence of technical capacity, but **IEEE compliance does not substitute for Indigenous governance approval**.

---

## 8.0 Adoption and Implementation

### 8.1 For Indigenous Nations

1. **Review and assess** existing data holdings against tier definitions
2. **Map sovereignty domains**: Identify current governance capacity across Data, Network, Digital, and Computational sovereignty
3. **Establish or designate** governance body for classification decisions
4. **Default all unclassified data to T3** pending review
5. **Develop or update** Tribal Research Code to reference TSDF tiers
6. **Train staff** on classification criteria and procedures
7. **Determine partner accountability requirements** based on Section 7.0
8. **Assess infrastructure needs** for window architecture implementation
9. **Establish provenance tracking** aligned with IEEE 2890-2025

### 8.2 For Research Partners

1. **Recognize** this Standard as authoritative for partner Indigenous Nations
2. **Incorporate** tier requirements into IRB protocols
3. **Ensure** data systems can enforce tier-based access controls across all four sovereignty domains
4. **Implement** window architecture for view-only access where feasible
5. **Document** all data under tier classification in research data management plans
6. **Implement** IEEE 2890-2025 compliant provenance tracking
7. **Obtain institutional acknowledgment** of Indigenous data sovereignty (Section 7.4.2)
8. **Return or destroy** data per agreement terms upon project completion
9. **Review** Section 7.4 requirements and prepare appropriate documentation

### 8.3 For Technology Providers

1. **Implement** tier-based access control in system architecture
2. **Support** window architecture (rendered views, compute-at-source, API-based access)
3. **Provide** audit logging compliant with IEEE 2890-2025 provenance requirements
4. **Support** Local Contexts Labels in metadata schemas
5. **Ensure** encryption with Indigenous-controlled keys for T2/T3 data
6. **Implement** geographic controls for T3 data where requested
7. **Implement** Data Actor Model with responsible human tracking for all non-human actors
8. **Obtain** explicit approval before any AI/ML training on Indigenous data
9. **Review** Section 7.3 requirements for corporate partners; prepare IEEE compliance documentation

### 8.4 For Federal Partners

1. **Identify** equivalent compliance frameworks per Section 7.5
2. **Establish** government-to-government consultation protocols
3. **Address** FOIA considerations in T2 agreements
4. **Ensure** data systems honor Tribal jurisdiction assertions
5. **Implement** IEEE 2890-2025 compliant provenance tracking for research applications
6. **Document** sovereignty domain compliance across all four domains

### 8.5 For Network Operators (InterTribal Data Networks)

1. **Establish** federated governance structures per Section 5.4
2. **Implement** T0 commons infrastructure with appropriate resilience
3. **Deploy** window architecture for T1 data sharing across member Nations
4. **Maintain** network-wide provenance tracking aligned with IEEE 2890-2025
5. **Develop** trust and reputation mechanisms for network accountability
6. **Create** pre-flight authorization checking for derivative creation
7. **Support** graceful degradation when network connectivity fails

---

## 9.0 Compliance Checklists

### 9.1 IEEE 2890-2025 Compliance

- [ ]  Data Actor schema implemented
- [ ]  Extended provenance schema implemented
- [ ]  Non-human actors have responsible_human_id assigned
- [ ]  Chain of custody tracking operational
- [ ]  Derivation tracking for all transformations
- [ ]  Benefit sharing documentation for T2 data
- [ ]  AI/ML operations logged (including denied operations)
- [ ]  Controlled vocabulary fields aligned with IEEE 2890-2025

### 9.2 CARE Compliance

- [ ]  Benefit-sharing provisions in T2 agreements
- [ ]  Indigenous authority controls reclassification
- [ ]  Audit logging operational
- [ ]  Consent records linked to data

### 9.3 OCAP® Compliance (First Nations Data)

- [ ]  Ownership attribution maintained
- [ ]  Control mechanisms respect First Nations authority
- [ ]  Access controlled per classification
- [ ]  Possession tracking in custody chain

### 9.4 Local Contexts Compliance

- [ ]  TK/BC Label metadata schema implemented
- [ ]  Local Contexts Hub project linking enabled
- [ ]  Label display in user interfaces

### 9.5 Four Sovereignty Domains Compliance

**Data Sovereignty:**

- [ ]  Classification authority designated
- [ ]  Reclassification procedures documented
- [ ]  Consent mechanisms operational

**Network Sovereignty:**

- [ ]  Transmission pathways documented
- [ ]  T3 data never traverses external networks
- [ ]  Encrypted channels for T2 data

**Digital Sovereignty:**

- [ ]  Platform restrictions enforced by tier
- [ ]  T3 data on Indigenous-controlled infrastructure only
- [ ]  Storage location documented

**Computational Sovereignty:**

- [ ]  AI/ML restrictions enforced by tier
- [ ]  Model provenance tracked
- [ ]  Compute location documented for T2/T3

---

## References

Carroll, S.R., Garba, I., Figueroa-Rodríguez, O.L., Holbrook, J., Lovett, R., Materechera, S., Parsons, M., Raseroka, K., Rodriguez-Lonebear, D., Rowe, R., Sara, R., Walker, J.D., Anderson, J., & Hudson, M. (2020). The CARE Principles for Indigenous Data Governance. _Data Science Journal_, 19(1), 43.

Carroll, S.R., et al. (2021). Operationalizing the CARE and FAIR Principles for Indigenous data futures. _Scientific Data_, 8, 108.

David-Chavez, D.M. (2024). A Values-Centered Relational Science Model: Supporting Indigenous Rights and Reconciliation in Research. _Ecology and Society_.

Duarte, M.E. (2017). _Network Sovereignty: Building the Internet Across Indian Country_. University of Washington Press.

First Nations Information Governance Centre. (2014). _Ownership, Control, Access and Possession (OCAP®): The Path to First Nations Information Governance_. FNIGC.

Freeland, P.A. (2025). Convergence Systems Architecture: The Relationality of Indigenous, Network, and Digital Sovereignty. Affiliated Tribes of Northwest Indians.

IEEE. (2021). IEEE 7000-2021: IEEE Standard Model Process for Addressing Ethical Concerns during System Design. IEEE Standards Association.

IEEE. (2021). IEEE 7001-2021: IEEE Standard for Transparency of Autonomous Systems. IEEE Standards Association.

IEEE. (2024). IEEE 7003-2024: IEEE Standard for Algorithmic Bias Considerations. IEEE Standards Association.

IEEE. (2025). IEEE 2890-2025: IEEE Recommended Practice for Provenance of Indigenous Peoples' Data. IEEE Standards Association. [https://standards.ieee.org/ieee/2890/10318/](https://standards.ieee.org/ieee/2890/10318/)

Jennings, L.L., et al. (2023). Applying the 'CARE Principles for Indigenous Data Governance' to Ecology and Biodiversity Research. _Nature Ecology & Evolution_.

Kukutai, T., & Taylor, J. (Eds.). (2016). _Indigenous Data Sovereignty: Toward an Agenda_. ANU Press.

Rainie, S.C., Kukutai, T., Walter, M., Figueroa-Rodríguez, O.L., Walker, J., & Axelsson, P. (2019). Issues in Open Data: Indigenous Data Sovereignty. In T. Davies, S. Walker, M. Rubinstein, & F. Perini (Eds.), _The State of Open Data: Histories and Horizons_. African Minds and IDRC.

Walter, M., & Andersen, C. (2013). _Indigenous Statistics: A Quantitative Research Methodology_. Left Coast Press.

Walter, M., Kukutai, T., Carroll, S.R., & Rodriguez-Lonebear, D. (Eds.). (2020). _Indigenous Data Sovereignty and Policy_. Routledge.

---

*Copyright (c) 2025 Patrick A. Freeland, Affiliated Tribes of Northwest Indians. This Standard is released under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA 4.0).*
