# Changelog

All notable changes to the Tiered Sovereign Data Framework will be documented in this file.

## [Site and documentation update] - 2026-07-14

### Interactive site

- Corrected the framework name site-wide and repo-wide: Tiered Sovereign Data Framework
- Three new pages: Literature (both systematic reviews and the Convergence Systems Architecture, with a finding-to-mechanism map), IEEE Compliance (IEEE 2890-2025 explicated functionally, the responsible-design 7000-series as partner qualification, and AI/LLM boundaries tier by tier), and ATNI-GeoPackager (the data wrapper in development that carries TSDF classification, provenance, and an append-only audit record inside the artifact)
- Convergence Systems Architecture framing elevated on the Overview, with a Go Deeper section linking the new pages
- Standards-claim language tightened following an external adversarial review: TSDF is described as designed to support IEEE 2890-2025, with clause-level conformance verification pending; TSDF-specific constructions (tier provenance profile, custody vocabulary, Data Actor rule) are identified as TSDF's own implementation profile
- Full prose pass across site copy for house style
- README hygiene: published-standard designation (IEEE 2890-2025, not P2890), standard filename, and version references aligned

## [0.9.2] - 2025-01-13

### Initial Release

- Four-tier classification system (T0: Open, T1: Network, T2: Negotiated, T3: Sovereign)
- Complete standard document with theoretical foundations and implementation guidance
- Tier decision guide for data classification
- Framework alignment mappings (CARE, OCAP, UNDRIP, Local Contexts)
- AI/ML use restrictions by tier
- Literature reviews supporting the framework:
  - Indigenous Data Sovereignty in Climate Research
  - Indigenous Data Governance Frameworks
  - Convergence Architecture theoretical synthesis

### Framework Alignment

- CARE Principles for Indigenous Data Governance
- OCAP Principles (First Nations Information Governance Centre)
- UNDRIP Article 31 (cultural heritage protection)
- Local Contexts TK/BC Labels integration
- IEEE P2890-2025 Reccomended Practice for Provenence of Indigenous Peoples's Data 

---

## Version Numbering

This framework uses semantic versioning:
- **Major versions** (1.0, 2.0): Significant structural changes to tier definitions
- **Minor versions** (0.9, 0.10): New guidance, expanded examples, clarifications
- **Patch versions** (0.9.2): Integration of IEEE standards for IDSov Provenence and AI Ethics
