# Integrations

## SonarCloud

Status: Integrated and verified (see Issue #15 and Issue #16)

Summary

We integrated SonarCloud for static analysis and coverage reporting. The integration includes:

- SonarCloud project: MominTrust-web (organization: momin-trust / jalal-haidar)
- CI workflow: `.github/workflows/build-sonar.yml` (runs tests with coverage and performs Sonar scan on `main` and PRs)
- Local dev: `.env` contains `SONARQUBE_TOKEN` (gitignored) to run local tools; `mcp.json` reads `${SONARQUBE_TOKEN}` from the environment.
- Coverage: Vitest configured to output LCOV at `coverage/lcov.info` for SonarCloud consumption.

Files and changes

- `.github/workflows/build-sonar.yml` — CI workflow that runs tests and Sonar scan
- `sonar-project.properties` — Sonar project configuration for local/CI scanner
- `vite.config.ts` — coverage configuration for Vitest
- `docs/INTEGRATIONS.md` — this file

Verification checklist

- [x] SonarCloud project bound to repository and main branch analyzed
- [x] CI job generates `coverage/lcov.info` and Sonar scan completes (after disabling Automatic Analysis)




Related issues and PRs

- Issue #15 — SonarCloud integration completed (audit record)
- Issue #16 — Automated Building (tracking task)


