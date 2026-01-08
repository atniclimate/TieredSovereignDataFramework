# Tiered Sovereignty Data Framework: Indigenous Data Sovereignty Standard

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Version](https://img.shields.io/badge/version-0.9.0-blue.svg)](CHANGELOG.md)

> **This repository is read-only and archived.** Issues and pull requests are disabled. For questions or proposed amendments, contact the author directly.

A comprehensive framework for Indigenous data classification and governance that operationalizes Indigenous Data Sovereignty principles (CARE, OCAP, UNDRIP) into implementable standards.

---

## Overview

The Tiered Sovereignty Data Framework (TSDF) provides Indigenous Nations with a clear, enforceable mechanism for data governance. It translates foundational Indigenous data sovereignty principles into practical, actionable classifications.

### The Four Tiers

| Tier | Name | Definition |
|------|------|------------|
| **T0** | Open/Public | Data formally released for public benefit by sovereign Indigenous decision |
| **T1** | Network | Data shared among Indigenous network members via reciprocal protocols |
| **T2** | Negotiated | Data shared with external partners through formal agreements |
| **T3** | Sovereign | Data under complete Indigenous control; never leaves community systems |

### Core Principle

> **When in doubt, classify as T3.**

Over-classification is correctable; under-classification may cause irreversible harm.

---

## Repository Contents

```
TribalSovereignDataFramework/
├── README.md                           # This file
├── LICENSE                             # CC-BY-NC-SA 4.0 license text
├── CITATION.cff                        # Academic citation metadata
├── CHANGELOG.md                        # Version history
├── standard/
│   ├── TSDF-Standard-v0.9.md           # Full standard document
│   └── tier-decision-guide.md          # Classification decision guide
└── literature/
    ├── idsov-climate-review.md         # Systematic review: IDS in climate research
    ├── idsov-governance-review.md      # Systematic review: governance frameworks
    └── convergence-architecture.md     # Theoretical synthesis
```

---

## Quick Start

### For Indigenous Nations

1. **Review the Standard** — Read `standard/TSDF-Standard-v0.9.md` for the complete framework
2. **Use the Decision Guide** — Apply `standard/tier-decision-guide.md` for classification decisions
3. **Default to T3** — When classification is uncertain, protect first
4. **Adapt as needed** — This framework supports your existing governance structures

### For Research Partners

1. **Recognize Tribal sovereignty** — Indigenous Nations set data governance terms
2. **Request access through proper channels** — T2 requires formal agreements
3. **Honor tier restrictions** — Classification determines access, not requests
4. **Build relationships** — FPIC is ongoing dialogue, not one-time consent

### For Technology Providers

1. **Implement tier-based access controls** — Technical enforcement, not just policy
2. **Support architectural guarantees for T3** — Make external access impossible
3. **Maintain audit trails** — Accountability requires documentation
4. **Obtain explicit approval for AI/ML** — Especially for T1-T3 data

---

## Key Framework Principles

### Sovereignty-First Design

- Classification authority rests with Indigenous governing bodies
- Tribes are sovereigns, not stakeholders
- Data governance is an expression of inherent rights

### Framework Alignment

| Framework | TSDF Implementation |
|-----------|---------------------|
| **CARE Principles** | Collective Benefit, Authority, Responsibility, Ethics operationalized through tiers |
| **OCAP Principles** | Ownership, Control, Access, Possession enforced by classification |
| **UNDRIP Article 31** | Cultural heritage protection through T3 architectural guarantees |
| **Local Contexts Labels** | TK/BC Labels integrate within any tier |

### AI/ML Restrictions

| Tier | Training | Inference |
|------|----------|-----------|
| T0 | Permitted | Permitted |
| T1 | Network approval required | Network scope only |
| T2 | Per agreement only | Per agreement only |
| T3 | **Prohibited** | **Prohibited** |

---

## Literature Reviews

The `literature/` directory contains systematic reviews and theoretical synthesis supporting this framework:

- **Indigenous Data Sovereignty in Climate Research** — Review of 22 sources on IDS frameworks for environmental data sharing
- **Indigenous Data Governance Frameworks** — Review of 40 studies on governance mechanisms for Indigenous-controlled repositories
- **Convergence Architecture** — Theoretical synthesis of Indigenous Data, Network, and Digital Sovereignty

---

## Related Work

### Part 2: Federated Indigenous Data Protocol

This repository contains **Part 1: The Indigenous Data Sovereignty Standard** (governance framework).

A companion technical specification, the **Federated Indigenous Data Protocol**, provides implementation details for federated data infrastructure. That work is licensed separately under Apache 2.0 and is not included in this repository.

### Related Frameworks

- [CARE Principles for Indigenous Data Governance](https://www.gida-global.org/care)
- [OCAP Principles (FNIGC)](https://fnigc.ca/ocap-training/)
- [Local Contexts Labels](https://localcontexts.org/)
- [UNDRIP](https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html)

---

## Citation

If you use this framework in research or policy development, please cite:

```bibtex
@misc{freeland2025tsdf,
  author = {Freeland, Patrick A.},
  title = {Tiered Sovereignty Data Framework: Indigenous Data Sovereignty Standard},
  year = {2025},
  version = {0.9.0},
  publisher = {Affiliated Tribes of Northwest Indians},
  url = {https://github.com/atniclimate/TieredSovereignDataFramework},
  license = {CC-BY-NC-SA-4.0}
}
```

See `CITATION.cff` for machine-readable citation metadata.

---

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

**Under the following terms:**
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **NonCommercial** — You may not use the material for commercial purposes
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license

### Indigenous Governance Notice

While this document is openly licensed, implementations of this framework that govern Indigenous community data should be developed **in partnership with those communities** and in accordance with applicable Indigenous data governance principles (CARE, OCAP, community-specific protocols).

---

## Acknowledgments

This framework builds upon decades of Indigenous data sovereignty scholarship and advocacy, including:

- The CARE Principles for Indigenous Data Governance
- The First Nations Information Governance Centre (FNIGC) and OCAP Principles
- The Global Indigenous Data Alliance
- Indigenous scholars and advocates who have led this work

---

**Author:** Patrick A. Freeland
**Organization:** Affiliated Tribes of Northwest Indians
**Version:** 0.9.0
**License:** CC BY-NC-SA 4.0
