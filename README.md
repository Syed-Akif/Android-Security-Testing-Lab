# Android Application Security Testing Lab — Mobile Pentesting

**Author:** Syed Akifuddin Arif

This repository contains the documentation, scripts, and notes for a hands-on Android mobile application security testing lab using MobSF, JADX, apktool, Burp Suite, Frida, and an Android emulator. The lab uses intentionally vulnerable apps (e.g., DIVA, InsecureBankv2) for educational purposes.

**Status:** In Progress

## Quick Start (short)
1. Clone repo
2. Follow `docs/SETUP_GUIDE.md` or the roadmap to set up MobSF, emulator, Frida and Burp Suite.
3. Place downloaded APKs in a local `apks/` folder (do NOT commit APKs to the repo).
4. Run static analysis with MobSF and save exported report into `reports/`.

## Repository Structure
- `static-analysis/` — Static findings and manifest notes
- `dynamic-analysis/` — Frida notes, Burp observations, runtime artifacts
- `tools/` — Frida scripts and automation stubs
- `reports/` — Example vulnerability report (markdown)
- `screenshots/` — Safe screenshots (placeholders)
- `owasp-mapping/` — Mapping findings to OWASP Mobile Top 10
- `README.md` — This file (executive summary)

**Legal:** Only intentionally vulnerable apps were used. Do not test production apps without written permission.
