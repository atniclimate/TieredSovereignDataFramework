/* TSDF site — tabs, basin visualization, tier details, decision tool,
   glossary, evidence content, scroll reveals. No dependencies. */
(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================= TIER DATA (from TSDF-Standard v0.9) ================= */
  var TIERS = {
    t0: {
      code: "T0 · OPEN / PUBLIC",
      name: "Open / Public Access",
      color: "var(--t0)",
      def: "Data that has been formally and publicly released by the sovereign Indigenous entity for the collective benefit of all.",
      principle: "Classification as T0 is an affirmative act of Indigenous governance. Public release is never a default; it requires deliberate sovereign decision.",
      examples: [
        "Published Tribal government press releases",
        "Educational materials explicitly released for public use",
        "Research findings the Nation approved for open publication",
        "Federal reports created through government-to-government consultation",
        "Shared environmental baselines in federated commons layers"
      ],
      domains: {
        Data: "Open access; attribution requirements may apply",
        Network: "May traverse any transmission infrastructure",
        Digital: "May reside on public platforms and services",
        Computational: "AI/ML training and inference permitted"
      },
      labels: "Local Contexts: TK Attribution (TK A), TK Verified (TK V)"
    },
    t1: {
      code: "T1 · NETWORK",
      name: "Community Network Access",
      color: "var(--t1)",
      def: "Data shared among members of a trusted Indigenous network under standing reciprocal protocols.",
      principle: "T1 embodies reciprocity: relationships are mutual and ongoing, not transactional. Network membership itself implies shared responsibilities.",
      examples: [
        "Climate adaptation data shared among ATNI member Tribes",
        "TEK shared between Nations with kinship ties",
        "Health outcomes aggregated across InterTribal health boards",
        "Emergency coordination data during disaster response"
      ],
      domains: {
        Data: "Network membership required; standing protocols govern",
        Network: "Tribally-owned or federated infrastructure preferred",
        Digital: "Data stays on source-Nation infrastructure; members see rendered views",
        Computational: "Training needs network approval; inference stays in network scope"
      },
      labels: "Local Contexts: TK Community Voice (TK CV), BC Multiple Communities (BC MC)"
    },
    t2: {
      code: "T2 · NEGOTIATED",
      name: "Negotiated Partner Access",
      color: "var(--t2)",
      def: "Data shared with specific external partners through explicit, documented agreements that define permitted uses and obligations.",
      principle: "T2 operationalizes Free, Prior, and Informed Consent as an ongoing relationship, not a one-time transaction. Consent can be withdrawn.",
      examples: [
        "Research data under a university partnership agreement",
        "Environmental monitoring shared with EPA under co-management MOU",
        "Health data shared with IHS under a specific data-use agreement",
        "Traditional knowledge documented with explicit benefit-sharing terms"
      ],
      domains: {
        Data: "Access bound by agreement terms; FPIC documented and revocable",
        Network: "Transmission pathways specified in the agreement; encrypted channels",
        Digital: "Preference for Tribal infrastructure with partner access via secure views",
        Computational: "AI/ML only per explicit agreement terms"
      },
      labels: "Local Contexts: TK Non-Commercial (TK NC), TK Outreach (TK O), BC Research Use (BC R)"
    },
    t3: {
      code: "T3 · SOVEREIGN",
      name: "Sovereign Restricted",
      color: "var(--t3)",
      def: "Data under complete Indigenous sovereign control that never leaves community-controlled systems.",
      principle: "T3 implements architectural guarantees: external access is made technically impossible, not just policy-prohibited. The choice to remain unseen is itself an exercise of sovereignty.",
      examples: [
        "Sacred and ceremonial knowledge",
        "Burial site locations and funerary-object documentation",
        "Clan-specific or gender-restricted knowledge",
        "Individual health records under Tribal jurisdiction",
        "Language documentation designated for internal revitalization only"
      ],
      domains: {
        Data: "Complete sovereign control; internal protocols only",
        Network: "Never traverses external networks",
        Digital: "On-Nation infrastructure exclusively; no external cloud",
        Computational: "External processing prohibited; even denied AI/ML attempts are logged"
      },
      labels: "Local Contexts: TK Secret/Sacred (TK SS), TK Culturally Sensitive (TK CS), TK Clan (TK CL)"
    }
  };

  /* ================= GLOSSARY ================= */
  var GLOSSARY = {
    "dotted": { t: "Dotted terms", d: "Exactly like this: hover or tap a dotted term anywhere on this page to see its plain-language definition from the glossary." },
    "TSDF": { t: "TSDF", d: "The Tiered Sovereign Data Framework: four tiers (T0–T3) that let Indigenous Nations govern how their data is shared while protecting sensitive and culturally restricted information." },
    "T0 (Open)": { t: "T0 · Open", d: "Data explicitly released by the governing Indigenous body for unrestricted public use; requires attribution to the originating Nation." },
    "T1 (Network)": { t: "T1 · Network", d: "Data shared among verified members of a trusted network under standing reciprocal protocols, not released to the general public." },
    "T2 (Negotiated)": { t: "T2 · Negotiated", d: "Data shared with specific external partners under a formal, documented agreement specifying permitted uses, benefit-sharing, and expiration." },
    "T3 (Sovereign)": { t: "T3 · Sovereign", d: "The most protected tier: sacred, ceremonial, individual, or otherwise sensitive data kept under complete community control; the default when in doubt." },
    "CARE Principles": { t: "CARE Principles", d: "Collective Benefit, Authority to Control, Responsibility, Ethics: a governance framework from the Global Indigenous Data Alliance asking whether data should be shared, by whom, and under what conditions." },
    "FAIR Principles": { t: "FAIR Principles", d: "Findable, Accessible, Interoperable, Reusable: a technical data-management standard. It says whether data can be shared; it is silent on governance, power, and ethics." },
    "OCAP": { t: "OCAP®", d: "Ownership, Control, Access, Possession: principles from Canada's First Nations Information Governance Centre (est. 1998). Where OCAP® exceeds TSDF, OCAP® prevails for First Nations data." },
    "UNDRIP": { t: "UNDRIP", d: "The UN Declaration on the Rights of Indigenous Peoples (2007). TSDF maps Article 19 (FPIC) to T2, Article 23 to T0 release decisions, and Article 31 (cultural heritage) to T3's technical guarantees." },
    "FPIC": { t: "FPIC", d: "Free, Prior, and Informed Consent: consent given without coercion, ahead of time, with full understanding. TSDF treats it as an ongoing, revocable relationship, not a one-time signature." },
    "IDSov": { t: "Indigenous Data Sovereignty", d: "The inherent right of Indigenous Peoples to govern the collection, ownership, and application of data about their peoples, lands, and resources." },
    "IDGov": { t: "Indigenous Data Governance", d: "IDSov in operation: the practical authority for communities to decide the what, how, and why of data use so it reflects Indigenous priorities and values." },
    "Network Sovereignty": { t: "Network Sovereignty", d: "Control over the physical and logical infrastructure (fiber, spectrum, towers, mesh) that data travels through. Without it, data governance is “assertion without capacity.”" },
    "Digital Sovereignty": { t: "Digital Sovereignty", d: "The jurisdictional layer: control over cloud platforms, storage, and services so that whose law governs the data isn't decided by where a vendor put a server." },
    "Computational Sovereignty": { t: "Computational Sovereignty", d: "Authority over what happens when data is processed: analysis, statistical inference, AI/ML. Who determines how our data is transformed, and toward what ends?" },
    "Data Residency vs. Data Sovereignty": { t: "Residency vs. Sovereignty", d: "Residency is where data physically sits; sovereignty is whose law governs it. Data stored abroad can fall under foreign law (e.g., the U.S. CLOUD Act) regardless of a community's claims." },
    "TEK": { t: "TEK / Indigenous Knowledge", d: "Traditional Ecological Knowledge: knowledge systems built through sustained lived relationship with land and waters. In TSDF, typically T2 or T3, and always subject to knowledge-holder consent." },
    "Window Architecture": { t: "Window architecture", d: "TSDF's sharing model for T1/T2: partners see rendered views (tile servers, query APIs, federated computation) rather than receiving copies. The data never leaves its origin; sharing opens a window that stays in the Nation's house." },
    "Compute-at-Source": { t: "Compute-at-source", d: "When analysis requires sensitive data, the computation travels to the data, executing inside the data holder's infrastructure, and only results return." },
    "Provenance (Provenance Inheritance)": { t: "Provenance inheritance", d: "A documented chain of custody embedded in derivative products, so obligations (attribution, tier restrictions, consent terms) travel with the data as it moves or is transformed. Aligned with IEEE 2890-2025." },
    "Federated": { t: "Federated", d: "Each Nation holds its own local copy of shared commons data, syncing when connected and persisting when the network fails; no single point of failure, no central authority to compromise or coerce." },
    "Geographic Cryptographic Binding": { t: "Geographic cryptographic binding", d: "A T3 safeguard where the decryption key is tied to physical location; data literally cannot be decrypted outside a designated Tribal-jurisdiction boundary." },
    "Strategic Invisibility": { t: "Strategic invisibility", d: "The conscious choice to withhold information as an act of agency, resistance, and self-protection. Not all knowledge should be visible; remaining unseen is itself sovereignty." },
    "Data Actor Model": { t: "Data Actor Model", d: "TSDF's provenance rule, built on IEEE 2890-2025's treatment of data actors: both humans and non-humans (algorithms, databases, AI systems) act on data, and every non-human actor must have a responsible human identified." },
    "Rights Holders vs. Stakeholders": { t: "Rights holders, not stakeholders", d: "Indigenous Nations are sovereign political entities with government-to-government standing under treaties and UNDRIP, not one interest group among several. “Tribes are sovereigns, not stakeholders.”" },
    "Local Contexts Labels": { t: "Local Contexts TK/BC Labels", d: "Machine-embeddable metadata labels (TK Attribution, TK Secret/Sacred, BC Research Use…) that carry a community's protocols with the data. Labels give cultural specificity; tiers give governance enforcement." },
    "5D Data": { t: "5D Data", d: "Dr. Maggie Walter's critique: colonial statistics cluster on Disparity, Deprivation, Disadvantage, Dysfunction, and Difference, framing Peoples as problems rather than peoples." },
    "Data for Governance": { t: "Data for governance", d: "Nations need data reflecting their own priorities (language fluency, knowledge transmission, environmental health), not comparative statistics designed for state administration." },
    "Treatment as State": { t: "Treatment as State (TAS)", d: "A Clean Water Act provision letting federally recognized Tribes set their own water-quality standards; 44 Tribes have, sometimes stricter than neighboring states." },
    "Air-Gapped System": { t: "Air-gapped system", d: "A computer or network physically isolated from external networks; no electronic pathway exists by which data could leave. One T3 implementation option." },
    "IEEE 2890-2025": { t: "IEEE 2890-2025", d: "The first standard developed for Indigenous Peoples' data (IEEE Standards Association, published November 2025): common parameters for documenting the provenance of Indigenous Peoples' data. TSDF adopts it as its provenance reference; clause-level conformance verification is in progress." },
    "ATNI-GeoPackager": { t: "ATNI-GeoPackager", d: "A data wrapper in development at ATNI: an exchange profile around the open OGC GeoPackage format that carries TSDF classification, provenance designed to support IEEE 2890-2025, and an append-only audit trail inside the file itself." },
    "Ceremony Gate": { t: "Ceremony gate", d: "ATNI-GeoPackager's egress seam: no export leaves a governed node without a sovereign authorization record written to the audit trail, and T3 is refused unconditionally. Authorization is a recorded relationship, not a checkbox." }
  };

  /* ================= EVIDENCE: CLAIMS ================= */
  var CLAIMS_1 = [
    { txt: "A global assessment of climate research found that <strong>87% of studies engaged Indigenous communities extractively</strong>, with only 13% reaching genuinely collaborative levels of participation.", src: "David-Chavez & Gavin, 2018, Environmental Research Letters", url: "https://doi.org/10.1088/1748-9326/aaf300" },
    { txt: "In that same assessment, community-initiated studies returned findings to the community <strong>80–90% of the time versus just 15%</strong> for outside-initiated studies; a direct measure of who benefits.", src: "David-Chavez & Gavin, 2018, Environmental Research Letters", url: "https://doi.org/10.1088/1748-9326/aaf300" },
    { txt: "Mainstream statistics about Indigenous peoples cluster on five deficit themes (<strong>Difference, Disparity, Disadvantage, Dysfunction, Deprivation</strong>), framing communities as problems rather than peoples.", src: "Walter & Andersen, Indigenous Statistics, 2013", url: "https://www.routledge.com/9781611322934" },
    { txt: "When ~400 Havasupai tribal members gave blood for a diabetes study, their samples were <strong>reused without consent</strong> for unrelated research, ending in a 2010 settlement returning the samples and $700,000.", src: "Garrison et al.; Drabiak-Syed, AMA Journal of Ethics, 2011", url: "https://journalofethics.ama-assn.org/article/genetic-research-among-havasupai-cautionary-tale/2011-02" },
    { txt: "Publicly disclosing sacred-site locations exposes them to vandalism, looting, and desecration, and information shared with agencies can become a public record subject to disclosure laws: the <strong>“confidentiality catch-22.”</strong>", src: "Congressional Research Service R48452, 2025; American Bar Association, 2025", url: "https://www.congress.gov/crs-product/R48452" },
    { txt: "The founding text of decolonizing research opens by naming “research” as <strong>“probably one of the dirtiest words in the indigenous world's vocabulary”</strong>; the act of asking is not neutral.", src: "Tuhiwai Smith, Decolonizing Methodologies, 1999/2021", url: "https://www.bloomsbury.com/us/decolonizing-methodologies-9781786998132/" }
  ];

  var CLAIMS_2 = [
    { txt: "The <strong>CARE Principles</strong> give institutions a 12-element operational rubric (Collective Benefit, Authority to Control, Responsibility, Ethics) designed to complement FAIR.", src: "Carroll et al., 2020, Data Science Journal", url: "https://doi.org/10.5334/dsj-2020-043" },
    { txt: "CARE has been operationalized across the full data lifecycle under the maxim <strong>“Be FAIR and CARE”</strong>: machine-actionable metadata paired with Indigenous governance.", src: "Carroll et al., 2021, Scientific Data", url: "https://doi.org/10.1038/s41597-021-00892-0" },
    { txt: "In 2025 the IEEE ratified <strong>2890-2025, the world's first international standard for provenance of Indigenous Peoples' data</strong>; TSDF adopts it as its provenance reference.", src: "IEEE Standards Association, 2890-2025", url: "https://standards.ieee.org/ieee/2890/10318/" },
    { txt: "<strong>OCAP®</strong>, established 1998 and trademarked 2015, is a certified, teachable standard for First Nations data governance, with formal training and certification.", src: "First Nations Information Governance Centre", url: "https://fnigc.ca/ocap-training/" },
    { txt: "Discipline-specific CARE guidance now exists for <strong>ecology and biodiversity research</strong>, with live repository integration (GEOME, Local Contexts).", src: "Jennings et al., 2023, Nature Ecology & Evolution", url: "https://doi.org/10.1038/s41559-023-02161-2" },
    { txt: "<strong>Local Contexts TK and BC Labels</strong> let communities embed their own access-and-use protocols as machine-readable metadata in databases and collections worldwide.", src: "Anderson & Christen, Local Contexts; Liggins et al., 2021, Molecular Ecology", url: "https://doi.org/10.1111/mec.15918" },
    { txt: "Māori (Te Mana Raraunga, 2016) and Aboriginal/Torres Strait Islander (Maiam nayri Wingara, 2018) networks have published <strong>structured national IDSov principle sets</strong>; this is a global discipline, not a regional preference.", src: "Te Mana Raraunga; Maiam nayri Wingara", url: "https://www.temanararaunga.maori.nz/" },
    { txt: "Network sovereignty has a foundational scholarly text showing sovereignty is enacted in <strong>broadband and network design itself</strong>.", src: "Duarte, Network Sovereignty, Univ. of Washington Press, 2017", url: "https://uwapress.uw.edu/book/9780295741826/network-sovereignty/" },
    { txt: "Indigenous scientists have demonstrated <strong>blockchain-based genomic data governance</strong>: a Nation controlling collection, ownership, and application of its members' data in computation itself.", src: "Mackey, Calac, … Fox, 2022, Cell", url: "https://doi.org/10.1016/j.cell.2022.06.030" },
    { txt: "An explicit <strong>CARE Data Maturity Model</strong> now exists: an assessment rubric institutions can score themselves against.", src: "Collaboratory for Indigenous Data Governance", url: "https://indigenousdatalab.org/care-data-maturity-model/" }
  ];

  /* ================= EVIDENCE: POLICY ACCORDIONS ================= */
  var POLICY_FEDERAL = [
    { title: "Executive Order 13175 · Tribal consultation (2000)", tag: "IN EFFECT · 2026", body: "The cornerstone: every federal agency must have a process for “regular and meaningful consultation and collaboration with tribal officials” before actions with substantial direct effects on Tribes. Issued in 2000, never rescinded across four administrations, and still cited in 2026 Federal Register rulemakings. It binds agencies internally; it creates no private right of action Tribes can sue on.", link: "https://www.epa.gov/laws-regulations/summary-executive-order-13175-consultation-and-coordination-indian-tribal", linktext: "EO 13175, 65 Fed. Reg. 67249" },
    { title: "The federal trust responsibility", tag: "BEDROCK", body: "The U.S. holds a legally enforceable fiduciary duty toward Tribes and deals with them as sovereign governments: “domestic dependent nations” (Cherokee Nation v. Georgia, 1831) within whose territory state law “can have no force” (Worcester v. Georgia, 1832). The U.S. “has charged itself with moral obligations of the highest responsibility and trust” (Seminole Nation v. United States, 1942). This is why consultation is government-to-government, not public comment, and it does not change with administrations.", link: "https://www.bia.gov/faqs/what-federal-indian-trust-responsibility", linktext: "BIA: the trust responsibility" },
    { title: "Where consultation demands disclosure", tag: "THE MECHANISM", body: "NHPA Section 106 review (54 U.S.C. § 306108) requires identifying historic properties, including Traditional Cultural Properties of religious and cultural importance, so Tribes are asked to disclose the existence and location of sacred and cultural sites. NEPA review solicits cultural, subsistence, and TEK information. Infrastructure and energy permitting runs both processes inside fast-moving, high-stakes projects. The consultation the law requires is the same process that asks Nations to reveal what they most need to protect.", link: "https://www.achp.gov/digital-library-section-106-landing/frequently-asked-questions-protecting-sensitive-information", linktext: "ACHP: protecting sensitive information in §106" },
    { title: "Confidentiality protections: real, but discretionary and leaky", tag: "PARTIAL", body: "NHPA Section 304 (54 U.S.C. § 307103) and ARPA (16 U.S.C. § 470hh) let agencies withhold site-location information, but Section 304 covers only National Register-listed or -eligible properties, requires Secretary-level concurrence, and is applied unevenly. ARPA contains a statutory carve-out requiring disclosure to a requesting state Governor. And once data reaches a State Historic Preservation Office or state file, state open-records laws, which frequently lack any tribal exemption, can compel release. The ACHP's own analysis concludes no single federal statute comprehensively shields sensitive information Tribes provide during required consultation.", link: "https://www.achp.gov/sites/default/files/2019-10/FOIA%20tribal%20confidentiality%20paper%2010.21.19.pdf", linktext: "ACHP FOIA & tribal confidentiality analysis (2019)" },
    { title: "The 2025–2026 rollbacks", tag: "VERIFIED · 2026", body: "The Biden-era enhancements have largely been rescinded or orphaned. EO 14112 (tribal self-determination, 2023) was rescinded March 14, 2025 by EO 14236. CEQ's binding NEPA regulations (the vehicle carrying Indigenous Knowledge provisions) were rescinded (final rule January 8, 2026) after a court held CEQ lacked authority to issue them. The 2022 OSTP/CEQ Indigenous Knowledge guidance now lives only on the archived White House site; Indigenous Knowledge consideration survives only where agencies wrote it into their own manuals (e.g., DOI 301 DM 7). The durable floor in 2026: EO 13175, the trust doctrine, agency consultation policies, and the NHPA/ARPA confidentiality statutes.", link: "https://www.federalregister.gov/documents/2025/03/20/2025-04866/additional-rescissions-of-harmful-executive-orders-and-actions", linktext: "Fed. Reg. 2025-04866 (EO 14236)" },
    { title: "Indigenous Data Sovereignty in federal policy", tag: "PRINCIPLE, NOT LAW", body: "No binding U.S. statute establishes Indigenous Data Sovereignty. Recognition is soft: the CARE Principles are the de facto standard Tribes cite; the Congressional Research Service has briefed Congress on Indigenous Knowledge and data (R48317); IHS/CDC data-sharing terms remain contested. That gap (consultation compelled, disclosure under-protected, sovereignty unlegislated) is precisely the space a Tribally-authored standard like TSDF is built to fill.", link: "https://www.congress.gov/crs-product/R48317", linktext: "CRS R48317: Indigenous Knowledge and Data" }
  ];

  var POLICY_WA = [
    { title: "Centennial Accord (1989) & Millennium Agreement (1999)", tag: "ACTIVE", body: "Washington's foundation: a government-to-government compact between the State and each of the 29 federally recognized Tribes as separate sovereigns, with implementation guidelines added in 1999 and an annual Centennial Accord meeting that continues today.", link: "https://goia.wa.gov/state-tribal-relations-centennial-accord/centennial-accord", linktext: "Governor's Office of Indian Affairs" },
    { title: "RCW 43.376 · codified consultation duties (2012)", tag: "IN FORCE", body: "Every state agency must make reasonable efforts to collaborate with Tribes on policies that directly affect them, develop a consultation process, designate a tribal liaison reporting to the agency head, train staff, and report annually. Note the limit: the statute requires a process, not an outcome or consent.", link: "https://app.leg.wa.gov/rcw/default.aspx?cite=43.376.020", linktext: "RCW 43.376.020" },
    { title: "HEAL Act · proactive consultation (2021)", tag: "IN FORCE", body: "RCW 70A.02.100 requires covered agencies (Ecology, Health, DNR, Transportation, Agriculture, Commerce, Puget Sound Partnership) to offer Tribal consultation on significant actions affecting tribal rights and interests; proactively, independent of any public-comment process, whether or not a Tribe requests it.", link: "https://app.leg.wa.gov/rcw/default.aspx?cite=70A.02.100", linktext: "RCW 70A.02.100" },
    { title: "Climate Commitment Act · the strongest lever (2022)", tag: "STRONG · NOT A VETO", body: "RCW 70A.65.305 requires early, meaningful, individual consultation on all climate-funding decisions that may impact tribal resources, defined broadly to include cultural resources, sacred sites, fisheries, and treaty rights, on and off reservation. If a funded action proceeds without consultation, the affected Tribe may require that all further action cease until meaningful consultation is completed, with escalation to the Governor. Precision matters: this is a stop-work-until-consultation mechanism, not a consent veto; strong for consultation, short of FPIC.", link: "https://app.leg.wa.gov/RCW/default.aspx?cite=70A.65.305", linktext: "RCW 70A.65.305" },
    { title: "HB 1717 · Tribes in growth planning (2022)", tag: "IN FORCE", body: "Federally recognized Tribes may opt in (by resolution) to county Growth Management Act planning; counties must negotiate a memorandum of agreement in good faith, countywide policies must protect tribal cultural resources, and a Tribe can trigger a 60-day delay through a Commerce-facilitated dispute process.", link: "https://app.leg.wa.gov/billsummary?billnumber=1717&year=2022", linktext: "HB 1717 (2022 c 252)" },
    { title: "FPIC: in executive policy, not statute", tag: "POLICY ONLY", body: "“Free, prior, and informed consent” has entered Washington executive practice: the Attorney General's 2019 Tribal Consent Policy commits to written Tribal-resolution consent for certain AG actions, and Governor Ferguson's Executive Order 25-10 (October 2025) defines consultation using FPIC, requires agencies to incorporate Indigenous Knowledge, and directs statewide consultation guidelines before the 2026 Centennial Accord. But no Washington statute imposes a general tribal-consent requirement; executive policy is revocable and non-justiciable. (SSB 6034, codifying the Governor's Office of Indian Affairs as a cabinet agency, passed both chambers unanimously in early 2026.)", link: "https://governor.wa.gov/news/2025/governor-ferguson-sets-new-foundation-state-agencies-foster-partnerships-tribal-nations", linktext: "Executive Order 25-10" },
    { title: "Public Records Act · the exposure", tag: "THE GAP", body: "RCW 42.56 presumes disclosure: information a Tribe provides to a state agency becomes a public record, disclosable unless a specific, narrowly construed exemption applies. Archaeological and traditional-use site data is strongly shielded: RCW 42.56.300 and RCW 27.53 exempt site locations, site forms, and GIS layers, and preserve the exemption even when shared between governments. Health data is moderately protected (RCW 70.02 plus negotiated agreements). But there is no general Indigenous Knowledge or Tribal-information exemption: TEK, cultural context, and resource data outside the archaeological and health silos ride on the disclosure default.", link: "https://app.leg.wa.gov/rcw/default.aspx?cite=42.56.300", linktext: "RCW 42.56.300" },
    { title: "Data sovereignty by agreement · the live analog", tag: "EMERGING", body: "Washington's first Tribal-specific data-sharing agreement (Department of Health and the Tulalip Tribes, January 2025) recognizes the Tribe as a public health authority with the sovereign right to access data about its community, used only with the Tribe's consent. The American Indian Health Commission provides Tribal Data Sharing Agreement templates asserting sovereign authority over Tribal data wherever it is held. Recognition is arriving agreement by agreement; exactly the standardization gap a framework like TSDF addresses.", link: "https://doh.wa.gov/newsroom/doh-and-tulalip-tribe-sign-historic-tribal-specific-data-sharing-agreement", linktext: "DOH–Tulalip agreement (2025)" }
  ];

  /* ================= DECISION TOOL ================= */
  var DEC_TREE = [
    { q: "Is this data about or from Indigenous Peoples, lands, waters, or relations?",
      opts: [{ l: "Yes", next: 1 }, { l: "No", verdict: "na" }] },
    { q: "Does it involve sacred, ceremonial, or restricted cultural knowledge?",
      opts: [{ l: "Yes", verdict: "t3sacred" }, { l: "No / unsure", next: 2 }] },
    { q: "Could disclosure endanger people, places, or resources?",
      opts: [{ l: "Yes", verdict: "t3harm" }, { l: "No", next: 3 }] },
    { q: "Is this individual-level data (health, enrollment, personal)?",
      opts: [{ l: "Yes", verdict: "t3personal" }, { l: "No", next: 4 }] },
    { q: "Has the Indigenous governing body explicitly released this data?",
      opts: [
        { l: "Yes, for the public", verdict: "t0" },
        { l: "Yes, for the network", verdict: "t1" },
        { l: "Yes, for specific partners", verdict: "t2" },
        { l: "No explicit release", verdict: "t3default" }
      ] }
  ];
  var DEC_VERDICTS = {
    na: { chip: "", cls: "", h: "TSDF does not apply", p: "This data is not about or from Indigenous Peoples, lands, waters, or relations; use standard data governance. If you're unsure whether it qualifies, remember that biophysical data from Indigenous territories is Indigenous data." },
    t3sacred: { chip: "T3 · SOVEREIGN", cls: "t3", h: "Sovereign, always", p: "Sacred, ceremonial, and restricted cultural knowledge is always T3. Internal protocols (clan, gender, ceremonial role) govern access inside the community; external access is made architecturally impossible." },
    t3harm: { chip: "T3 · SOVEREIGN", cls: "t3", h: "Sovereign: protect first", p: "If disclosure could endanger people, places, or resources (site locations, harvest areas, vulnerable households), classify T3. Disclosure harm is often irreversible; delay is not." },
    t3personal: { chip: "T3 · SOVEREIGN", cls: "t3", h: "Sovereign: personal data", p: "Individual-level health, enrollment, and personal records stay under Tribal jurisdiction. Even under a T2 research agreement, individual-level data remains T3; only approved, anonymized elements are shared." },
    t3default: { chip: "T3 · SOVEREIGN", cls: "t3", h: "Sovereign, by default", p: "No explicit release means T3. This is the asymmetric-harm principle at work: over-classification delays access until review; under-classification can be irreversible. Only an authorized human decision-maker can move data outward from here." },
    t0: { chip: "T0 · OPEN", cls: "t0", h: "Open / Public", p: "Released by deliberate sovereign decision for collective benefit. Attribution to the originating Nation applies. Remember: public availability elsewhere never makes data T0; the originating Nation decides." },
    t1: { chip: "T1 · NETWORK", cls: "t1", h: "Network", p: "Shared among verified network members under standing reciprocal protocols, through rendered views, not copies. Derivatives stay in the network unless the source Nation authorizes external sharing." },
    t2: { chip: "T2 · NEGOTIATED", cls: "t2", h: "Negotiated", p: "Requires a formal agreement: permitted and prohibited uses, benefit-sharing, expiration, revocable FPIC. On expiry or violation, the data upgrades to T3 automatically. AI/ML use requires its own explicit authorization." }
  };

  /* ================= HELPERS ================= */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ================= TABS ================= */
  var TAB_NAMES = ["overview", "standard", "practice", "evidence", "literature", "compliance", "geopackage", "adopt"];

  function showTab(name, scrollTop) {
    if (TAB_NAMES.indexOf(name) < 0) name = "overview";
    document.querySelectorAll(".tab-panel").forEach(function (p) {
      p.classList.toggle("active", p.id === "panel-" + name);
    });
    document.querySelectorAll("nav.tabs a").forEach(function (a) {
      a.classList.toggle("active", a.dataset.tab === name);
    });
    if (scrollTop !== false) window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
    requestAnimationFrame(revealVisible);
  }

  function handleHash() {
    var h = (location.hash || "#overview").slice(1);
    if (TAB_NAMES.indexOf(h) >= 0) { showTab(h); return; }
    var target = document.getElementById(h);
    if (target) {
      var panel = target.closest(".tab-panel");
      if (panel) showTab(panel.id.replace("panel-", ""), false);
      setTimeout(function () {
        target.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
        var det = target.querySelector("details");
        if (det) det.open = true;
      }, 60);
    }
  }
  window.addEventListener("hashchange", handleHash);

  document.addEventListener("click", function (e) {
    var go = e.target.closest("[data-goto]");
    if (go) { location.hash = go.dataset.goto; }
  });

  /* ================= BASIN VISUALIZATION ================= */
  function seededRand(seed) {
    var s = seed;
    return function () {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  function ringPath(cx, cy, r, wobble, seed, pts) {
    var rand = seededRand(seed);
    var offs = [];
    for (var i = 0; i < pts; i++) offs.push((rand() - 0.5) * 2 * wobble);
    // smooth the offsets once so the wobble reads as contour, not noise
    var sm = offs.map(function (o, i) {
      return (offs[(i - 1 + pts) % pts] + o * 2 + offs[(i + 1) % pts]) / 4;
    });
    var d = "";
    var xs = [], ys = [];
    for (var j = 0; j < pts; j++) {
      var a = (j / pts) * Math.PI * 2;
      xs.push(cx + Math.cos(a) * (r + sm[j]));
      ys.push(cy + Math.sin(a) * (r + sm[j]));
    }
    // Catmull-Rom → bezier for a smooth closed curve
    for (var k = 0; k < pts; k++) {
      var p0x = xs[(k - 1 + pts) % pts], p0y = ys[(k - 1 + pts) % pts];
      var p1x = xs[k], p1y = ys[k];
      var p2x = xs[(k + 1) % pts], p2y = ys[(k + 1) % pts];
      var p3x = xs[(k + 2) % pts], p3y = ys[(k + 2) % pts];
      var c1x = p1x + (p2x - p0x) / 6, c1y = p1y + (p2y - p0y) / 6;
      var c2x = p2x - (p3x - p1x) / 6, c2y = p2y - (p3y - p1y) / 6;
      if (k === 0) d += "M" + p1x.toFixed(1) + " " + p1y.toFixed(1);
      d += "C" + c1x.toFixed(1) + " " + c1y.toFixed(1) + " " + c2x.toFixed(1) + " " + c2y.toFixed(1) + " " + p2x.toFixed(1) + " " + p2y.toFixed(1);
    }
    return d + "Z";
  }

  var TIER_COLORS = { t0: "#e6e6e6", t1: "#9aa0a7", t2: "#d98a91", t3: "#c9303c" };
  var TIER_FILL_OPACITY = { t0: 0.08, t1: 0.14, t2: 0.24, t3: 0.5 };

  function buildBasin() {
    var host = document.getElementById("basin");
    if (!host) return;
    var S = 540, cx = S / 2, cy = S / 2;
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 " + S + " " + S);
    svg.setAttribute("class", "basin-svg");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Concentric tier diagram: T0 Open outermost, then T1 Network, T2 Negotiated, and T3 Sovereign at the protected center.");

    var order = ["t0", "t1", "t2", "t3"];
    var radii = { t0: 250, t1: 192, t2: 136, t3: 80 };
    var labelY = { t0: cy - 222, t1: cy - 165, t2: cy - 109, t3: cy - 8 };
    var subLabel = { t0: "Open", t1: "Network", t2: "Negotiated", t3: "Sovereign" };

    // faint intermediate contour lines between tier boundaries
    var faint = [271, 222, 165, 109, 52];
    faint.forEach(function (r, i) {
      var p = document.createElementNS(NS, "path");
      p.setAttribute("d", ringPath(cx, cy, r, 5, 40 + i * 7, 26));
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", "rgba(255,255,255,0.08)");
      p.setAttribute("stroke-width", "1");
      svg.appendChild(p);
    });

    order.forEach(function (key, i) {
      var g = document.createElementNS(NS, "g");
      g.setAttribute("class", "basin-ring");
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", TIERS[key].code + " · " + TIERS[key].name);
      g.dataset.tier = key;

      var fill = document.createElementNS(NS, "path");
      fill.setAttribute("class", "fill");
      fill.setAttribute("d", ringPath(cx, cy, radii[key], 7, 11 + i * 13, 22));
      fill.setAttribute("fill", TIER_COLORS[key]);
      fill.setAttribute("fill-opacity", String(TIER_FILL_OPACITY[key]));

      var edge = document.createElementNS(NS, "path");
      edge.setAttribute("class", "edge");
      edge.setAttribute("d", ringPath(cx, cy, radii[key], 7, 11 + i * 13, 22));
      edge.setAttribute("fill", "none");
      edge.setAttribute("stroke", TIER_COLORS[key]);
      edge.setAttribute("stroke-width", "2");

      g.appendChild(fill);
      g.appendChild(edge);
      svg.appendChild(g);

      var t = document.createElementNS(NS, "text");
      t.setAttribute("class", "basin-label");
      t.setAttribute("x", cx);
      t.setAttribute("y", labelY[key]);
      t.setAttribute("text-anchor", "middle");
      t.textContent = key.toUpperCase();
      svg.appendChild(t);

      var st = document.createElementNS(NS, "text");
      st.setAttribute("class", "basin-label sub");
      st.setAttribute("x", cx);
      st.setAttribute("y", labelY[key] + 15);
      st.setAttribute("text-anchor", "middle");
      st.textContent = subLabel[key];
      svg.appendChild(st);

      // entry animation: center outward — T3 first (protect-first, encoded)
      if (!REDUCED) {
        g.style.opacity = "0";
        g.style.transform = "scale(0.85)";
        g.style.transformOrigin = cx + "px " + cy + "px";
        g.style.transition = "opacity 0.7s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)";
        setTimeout(function () {
          g.style.opacity = "1";
          g.style.transform = "scale(1)";
        }, 250 + (order.length - 1 - i) * 220);
      }

      function activate() { selectTier(key, true); }
      g.addEventListener("click", activate);
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
      g.addEventListener("mouseenter", function () { hotTier(key, true); });
      g.addEventListener("mouseleave", function () { hotTier(key, false); });
    });

    // slow breath on the T3 core — the hearth
    if (!REDUCED) {
      var core = svg.querySelector('[data-tier="t3"]');
      setTimeout(function () {
        if (!core) return;
        core.style.transition = "none";
        core.animate(
          [{ transform: "scale(1)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }],
          { duration: 6000, iterations: Infinity, easing: "ease-in-out" }
        );
      }, 2000);
    }

    host.appendChild(svg);
  }

  function hotTier(key, on) {
    document.querySelectorAll('.basin-ring[data-tier="' + key + '"]').forEach(function (g) {
      g.classList.toggle("hot", on);
    });
  }

  /* ================= TIER DETAIL PANEL ================= */
  function selectTier(key, scroll) {
    var t = TIERS[key];
    var panel = document.getElementById("tier-detail");
    if (!panel) return;
    panel.style.setProperty("--tc", "var(--" + key + ")");
    panel.removeAttribute("hidden");

    var domains = Object.keys(t.domains).map(function (d) {
      return '<div class="domain-chip"><b>' + d + "</b>" + t.domains[d] + "</div>";
    }).join("");
    var examples = t.examples.map(function (x) { return "<li>" + x + "</li>"; }).join("");

    panel.innerHTML =
      '<span class="code">' + t.code + "</span>" +
      "<h3>" + t.name + "</h3>" +
      "<p>" + t.def + "</p>" +
      '<p class="principle">' + t.principle + "</p>" +
      '<div class="cols"><div><h4>Examples</h4><ul>' + examples + "</ul></div>" +
      '<div><h4>Across the four sovereignty domains</h4><div class="domain-grid" style="grid-template-columns:1fr 1fr">' + domains + "</div></div></div>" +
      '<h4 style="margin-top:16px">' + t.labels + "</h4>";

    document.querySelectorAll(".tier-card").forEach(function (c) {
      c.classList.toggle("selected", c.dataset.tier === key);
    });
    if (scroll) {
      var tiersSec = document.getElementById("tiers");
      if (tiersSec) panel.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "nearest" });
    }
  }

  /* ================= GLOSSARY ================= */
  function buildGlossary() {
    var grid = document.getElementById("glossary-grid");
    if (!grid) return;
    Object.keys(GLOSSARY).forEach(function (k) {
      if (k === "dotted") return;
      var g = GLOSSARY[k];
      grid.appendChild(el("div", "gloss-card", "<b>" + g.t + "</b><p>" + g.d + "</p>"));
    });
  }

  var pop = null;
  function showPop(target) {
    var key = target.dataset.term;
    var g = GLOSSARY[key];
    if (!g) return;
    pop.innerHTML = "<b>" + g.t + "</b>" + g.d;
    pop.classList.add("show");
    pop.setAttribute("aria-hidden", "false");
    var r = target.getBoundingClientRect();
    var px = window.scrollX + r.left;
    var py = window.scrollY + r.bottom + 8;
    pop.style.left = "0px"; pop.style.top = "0px";
    var pw = pop.offsetWidth;
    if (px + pw > window.scrollX + document.documentElement.clientWidth - 16) {
      px = window.scrollX + document.documentElement.clientWidth - pw - 16;
    }
    pop.style.left = px + "px";
    pop.style.top = py + "px";
  }
  function hidePop() {
    pop.classList.remove("show");
    pop.setAttribute("aria-hidden", "true");
  }
  function wireTerms() {
    pop = document.getElementById("gloss-pop");
    document.querySelectorAll(".term").forEach(function (t) {
      t.setAttribute("tabindex", "0");
      t.addEventListener("mouseenter", function () { showPop(t); });
      t.addEventListener("mouseleave", hidePop);
      t.addEventListener("focus", function () { showPop(t); });
      t.addEventListener("blur", hidePop);
      t.addEventListener("click", function (e) { e.stopPropagation(); showPop(t); });
    });
    document.addEventListener("click", hidePop);
    window.addEventListener("scroll", hidePop, { passive: true });
  }

  /* ================= DECISION TOOL ================= */
  var decStep = 0;
  function renderDecStep() {
    var node = DEC_TREE[decStep];
    var track = document.getElementById("dec-track");
    var q = document.getElementById("dec-q");
    var opts = document.getElementById("dec-opts");
    var verdict = document.getElementById("dec-verdict");
    verdict.classList.remove("show");
    verdict.innerHTML = "";
    q.style.display = ""; opts.style.display = "";
    track.textContent = "QUESTION " + (decStep + 1) + " OF 5";
    q.textContent = node.q;
    opts.innerHTML = "";
    node.opts.forEach(function (o) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = o.l;
      b.addEventListener("click", function () {
        if (o.verdict) renderVerdict(o.verdict);
        else { decStep = o.next; renderDecStep(); }
      });
      opts.appendChild(b);
    });
  }
  function renderVerdict(key) {
    var v = DEC_VERDICTS[key];
    var q = document.getElementById("dec-q");
    var opts = document.getElementById("dec-opts");
    var verdict = document.getElementById("dec-verdict");
    var track = document.getElementById("dec-track");
    q.style.display = "none"; opts.style.display = "none";
    track.textContent = "CLASSIFICATION";
    verdict.innerHTML =
      (v.chip ? '<span class="chip ' + v.cls + '">' + v.chip + "</span>" : "") +
      "<h4>" + v.h + "</h4><p>" + v.p + "</p>" +
      '<button class="reset" type="button">↺ Start over</button>';
    verdict.classList.add("show");
    verdict.querySelector(".reset").addEventListener("click", function () {
      decStep = 0; renderDecStep();
    });
  }

  /* ================= EVIDENCE CONTENT ================= */
  function buildEvidence() {
    var stat = document.getElementById("stat-extractive");
    if (stat) {
      stat.textContent = "87%";
      document.getElementById("stat-extractive-desc").innerHTML =
        "of climate studies engaging Indigenous communities used an <strong>extractive model</strong>: minimal community participation or decision-making authority. Only 13% reached collaborative levels.";
      document.getElementById("stat-extractive-src").innerHTML =
        'David-Chavez &amp; Gavin, 2018, <em>Environmental Research Letters</em> · <a href="https://doi.org/10.1088/1748-9326/aaf300">doi:10.1088/1748-9326/aaf300</a>';
    }
    var c1 = document.getElementById("claims-1");
    if (c1) CLAIMS_1.forEach(function (c) {
      c1.appendChild(el("div", "claim warn reveal", c.txt + '<span class="src">' + c.src + ' · <a href="' + c.url + '">source</a></span>'));
    });
    var c2 = document.getElementById("claims-2");
    if (c2) CLAIMS_2.forEach(function (c) {
      c2.appendChild(el("div", "claim reveal", c.txt + '<span class="src">' + c.src + ' · <a href="' + c.url + '">source</a></span>'));
    });
    function acc(hostId, items) {
      var host = document.getElementById(hostId);
      if (!host) return;
      items.forEach(function (it) {
        var d = document.createElement("details");
        d.innerHTML = "<summary><b>" + it.title + '</b><span class="tag">' + it.tag + "</span></summary>" +
          '<div class="pa-body"><p>' + it.body + "</p><p><a href=\"" + it.link + "\">" + it.linktext + " →</a></p></div>";
        host.appendChild(d);
      });
    }
    acc("policy-federal", POLICY_FEDERAL);
    acc("policy-wa", POLICY_WA);
  }

  /* ================= SCROLL REVEAL ================= */
  var observer = null;
  function initReveal() {
    if (REDUCED || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
      return;
    }
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); observer.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal").forEach(function (n) { observer.observe(n); });
  }
  function revealVisible() {
    // when a tab becomes active, reveal anything already in-viewport immediately
    document.querySelectorAll(".tab-panel.active .reveal:not(.in)").forEach(function (n) {
      var r = n.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) n.classList.add("in");
    });
  }

  /* ================= STANDARD TOC highlight ================= */
  function wireToc() {
    var links = document.querySelectorAll(".std-toc a");
    links.forEach(function (a) {
      a.addEventListener("click", function () {
        links.forEach(function (x) { x.classList.remove("here"); });
        a.classList.add("here");
      });
    });
  }

  /* ================= INIT ================= */
  document.addEventListener("DOMContentLoaded", function () {
    buildBasin();
    buildGlossary();
    wireTerms();
    buildEvidence();
    renderDecStep();
    initReveal();
    wireToc();
    selectTier("t3", false); // open on the center: protect-first
    handleHash();
  });
})();
