# AB-900 — Key Pointers (One-Page Quick Reference)

> The most exam-relevant facts in one place. Each pointer is a single sentence you should be able to repeat from memory.
> For full context, see `AB-900T00-Study-Guide.md`.

## 0. Exam basics
- **Passing score: 700** · Format: MCQ + multi-select + scenario + drag-and-drop · No labs, no case studies.
- **Three domains**: ① Core M365 features & objects (**30–35%**), ② Data protection & governance (**35–40%**, largest), ③ Copilot & agents admin (**25–30%**).
- Most questions cover **GA** features; some Preview may appear.

## 1. Zero Trust & identity
- **Zero Trust is NOT a product** — it's a combination of processes, policies, and configurations.
- **Three principles**: verify explicitly · least privilege · assume breach.
- **Six pillars** (Microsoft framework): **I**dentity · **E**ndpoints · **A**pplications · **D**ata · **I**nfrastructure · **N**etwork.
- **Authentication** = prove identity (n factor) · **Authorization** = what you can do (z factor).
- **MFA** = 2+ of: know (password/PIN) · have (phone, FIDO key) · are (biometric).
- **Passkeys are still 2 factors**: device (have) + PIN/biometric (know/are).
- **Phishing-resistant** methods: **Passkeys (FIDO2)**, **Windows Hello for Business**, certificate-based — **mandatory for admins**.
- **Passwords alone = banned for admins**; least-preferred method overall.
- **Entra ID = identity plane** of M365; every workload uses it.

## 2. Identity types in Entra
- **Person** (user), **Application** (service principal / app registration / managed identity), **AI agent** (**Entra Agent ID**, preview).
- **Cloud-only** identity: created directly in Entra.
- **Hybrid** identity: synced from on-prem AD via **Entra Connect** (or **Cloud Sync**).
- **Three hybrid auth methods** (know trade-offs):
  - **PHS (Password Hash Sync)** — *preferred*; no on-prem dep; supports leaked-credential check.
  - **PTA (Pass-Through Authentication)** — DC must be reachable; some AD-specific features.
  - **Federation (AD FS)** — heavy on-prem footprint; legacy.
- **Dynamic groups** use attribute rules (e.g., `department = Sales`) — auto-cleanup of permissions.
- **App registration** = the app's *definition*; **Enterprise app** / **Service principal** = the *instance* in a tenant.

## 3. MFA & sign-in methods
- **Microsoft Authenticator** = passwordless, push, biometrics, token broker via **MSAL**.
- **FIDO2 security keys** = USB/NFC hardware keys, phishing-resistant.
- **Windows Hello for Business** = face/fingerprint/PIN tied to device TPM.
- **SSPR (Self-Service Password Reset)**:
  - Cloud-only works out of the box.
  - Hybrid needs **Password Writeback** in Entra Connect.
- **Verified ID / Verifiable Credentials** (preview) = decentralized identity in a digital wallet.

## 4. Conditional Access (CA)
- **Targets** — users/groups/agents, cloud apps, Azure portal, Microsoft Admin Portals; always set **break-glass exclusions**.
- **Conditions** — user risk, sign-in risk, insider risk, device platform, location, client app, auth flow.
- **Session controls** — sign-in frequency, persistent browser, **continuous access evaluation**, Defender for Cloud Apps app control.
- **Authentication strengths** — built-in ("Multifactor", "Phishing-resistant MFA") and custom (Hello, FIDO2, certificate).
- **Global Secure Access client** = Microsoft SSE for private/internet resources.
- **Common policies**: MFA for external · block unmanaged devices · block legacy auth · restrict guests · enforce Terms of Use.
- **What If tool** = test a CA policy before enabling.

## 5. RBAC, PIM, JEA, JIT
- **RBAC** = roles (built-in or custom) bound to a scope. Built-ins: Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader.
- **Global Admin** = god role; **minimize** (target ≤ 4); must be **eligible in PIM**, not permanent.
- **PIM (Privileged Identity Management)** = eligible-by-default + activation; time-bound, audited.
- **JIT (Just-In-Time)** = role activation only when needed; delivered by PIM.
- **JEA (Just Enough Administration)** = smallest scope that does the job.
- **Access Reviews** = periodic re-attestation; kills privilege creep.
- **Entitlement Management / Access Packages** = bundle groups, sites, apps, roles with approval + expiration.

## 6. Identity Secure Score & audit
- **Identity Secure Score** = % of best practices applied; **benchmarks** against similar orgs; statuses = Completed / Planned / Risk Accepted / Not applied.
- **Microsoft Secure Score** = same idea across the whole M365 tenant.
- **Unified Audit Log** (Purview) = who-did-what across M365; default 180 days, **E5 = 1 year**.
- **Entra ID audit log** = directory changes; **Entra sign-in log** = sign-in events; **"What If"** = CA simulation.

## 7. Defender XDR
- **Defender XDR = Identity + Office 365 + Endpoint + Cloud Apps** + optional **Cloud** — unified at **security.microsoft.com**.
- **MSTIC** = Microsoft Threat Intelligence Center, **65T+ signals/day**, nation-state + dark-web tracking.
- **Defender for Office 365 Plan 2** (in **E5**) unlocks **Threat Explorer** and **Attack simulation training**.
- **Safe Links** = URL rewrite + rescan **at click time**.
- **ZAP (Zero-hour Auto Purge)** = **retroactive** removal of malicious messages.
- **Spoof intelligence** = fake/impersonated senders; **Impersonation protection** = lookalike-sender targeting execs.
- **Attachment filtering** blocks `.exe`, `.js`, `.vbs`.
- **Attack simulation training** = phishing sims + auto-training on failure.
- **Threat Explorer** = real-time email investigation; pivot by sender, URL, file hash, user impact.
- **Threat Analytics** = reports with **MITRE ATT&CK** mappings.
- **Defender for Endpoint**: EDR, AV, attack surface reduction, automated investigations, **attack path tracking**, **device isolation**.
- **Defender for Cloud Apps (CASB)**: shadow IT discovery, session policies, app governance.
- **Microsoft Sentinel** = cloud **SIEM** + **SOAR**; KQL hunting; Logic Apps playbooks.
- **Defender for Cloud** = posture across **Azure, AWS, GCP**.

## 8. M365 core services
- **Exchange Online** = mail, calendar, mail flow rules (transport), accepted domains, connectors, **retention**, **litigation hold**, anti-spam, anti-malware, DLP.
- **Mailboxes**: user · shared · resource (room/equipment) · Microsoft 365 group.
- **Distribution lists** = email only, can ONLY be created in **M365 admin center** (not Entra).
- **Teams** = chat, meetings, calling, app integrations; built on M365 Groups.
- **Channel types**: standard · private · **shared** (cross-team).
- **Teams policies**: meeting (recording, transcription, anonymous join) · messaging (chat, external) · calling · app permission · app setup.
- **SharePoint** = sites (team sites / communication sites) · libraries · folders · files.
- **SharePoint site roles**: **Owner** (full) · **Member** (edit) · **Visitor** (read).
- **Permission inheritance can be broken** — main source of oversharing.
- **OneDrive = 1 TB+ per user**; uses SharePoint storage; **Known Folder Move** = Desktop/Documents/Pictures.
- **Microsoft Graph** = the single API surface used by everything in M365 (and Copilot).

## 9. Microsoft 365 admin center
- URL: **https://admin.microsoft.com**.
- Tasks: users, bulk user create, group-based licensing, roles, billing, service health, message center, reports, settings.
- **Custom domains** need **DNS verification**; can have multiple per tenant.
- **PowerShell modules**: **Exchange Online** · **Microsoft Teams** · **SharePoint Online Management Shell** · **Microsoft Graph PowerShell SDK**.

## 10. Microsoft Purview
- Portal: **https://purview.microsoft.com**.
- **Information Protection** = Sensitivity Labels — encrypt, watermark, restrict access; **travel with the file**.
- **Labels** = published via **label policies**; can be mandatory or optional; **override rules** with justification.
- **DLP** = detect & block sensitive data (PII, PHI, financial) across Exchange / SharePoint / OneDrive / Teams / endpoints / cloud apps; **can target Copilot**.
- **Insider Risk Management** = correlates signals (departure + download, off-hours, mass copy); optional inputs: **endpoint activity**, **HR events**; can auto-feed **Conditional Access** via **Adaptive Protection**.
- **Communication Compliance** = monitors Teams, Exchange, **Viva Engage** (Yammer), and 3rd-party connectors; detects harassment, regulatory violations, **insider trading** risk.
- **DSPM for AI** = data security for AI / Copilot; surfaces **shadow AI**, risky prompts, prompt-injection; integrates with **Activity Explorer** (last 30 days of Copilot interactions).
- **Adaptive Protection** = automatic IRM → DLP escalation; strictest DLP applies as risk score rises.
- **Data Lifecycle Management** = retention policies + retention labels + disposition reviews + records management; **auto-apply rules** (keywords, SITs, trainable classifiers).
- **eDiscovery Standard** (E3) + **eDiscovery Premium** (E5) = search/hold/export for legal.
- **Compliance Manager** = Microsoft-managed (auto) + customer-managed (manual) controls; improvement actions with owners; **Compliance Score**.
- **Data Explorer** = query sensitive-data locations by site, label, content type; visualize exposure.
- **Activity Explorer** = who viewed/modified/printed/emailed labeled content.
- **Customer Key** = customer-managed encryption keys; **Customer Lockbox** = explicit consent for Microsoft engineer access.

## 11. SharePoint governance
- **Oversharing is Copilot's #1 risk** — Semantic Index finds data that "security by obscurity" used to hide.
- **SharePoint Advanced Management** = the umbrella for governance; included in some M365 Copilot licenses.
- **Restricted Site Access** = limit content visibility to a specific Entra group.
- **Oversharing reports / Permission site reports** → **DAG reports** flag sites with sensitive content, excessive sharing, inactive owners, missing labels.
- **Site access reviews** = periodic owner confirmation of who should have access.
- **Site ownership policy** = e.g., require **≥ 2 owners** per site.
- **Restricted content discovery** (site level) = opt a site out of Copilot grounding.
- **Restricted SharePoint Search** (tenant level) = up to **100 sites**; **hub sites and children don't count**.

## 12. Microsoft 365 Copilot
- **Copilot = RAG over Graph + Semantic Index, permission-aware.**
- **No new data-access path** — uses the user's **OAuth token**.
- **Architecture**: prompt → orchestrator → Graph + Semantic Index (RAG) → LLM with **system prompt** → content safety + groundedness → response.
- **Prerequisites** (per user): Copilot license + active Exchange mailbox + OneDrive + Microsoft Search healthy.
- **No training** of the LLM on your prompts, responses, or tenant data.
- **Microsoft 365 Copilot Chat** = the free chat surface (web only); **Microsoft 365 Copilot (paid)** adds work-grounding.
- **Enable/disable features**: web content, plugin/connector controls, per-app enablement, per-user (license), per-content (Sensitivity Labels).
- **Copilot analytics** in admin center + **Viva Insights → Copilot Analytics** for deep adoption metrics.
- **Prompts** can be saved, shared (admin can scope sharing to roles/groups), scheduled, deleted.
- **Reclaim underused licenses** — reassign Copilot from inactive users.

## 13. Agents
- **Copilot** = personal assistant; **Agent** = scoped, often autonomous, may run on a trigger or schedule.
- **Pre-built agents**: **Researcher** (deep research with citations) · **Analyst** (data analysis) · Writing Coach · Prompt Coach · SharePoint site agents.
- **Custom agents**:
  - **Copilot Studio** (low-code, Describe/Configure; start from **template**; up to **20 knowledge sources**; files up to **512 MB**; web toggle; suggested prompts; instructions & rules; triggers for autonomous).
  - **VS Code + Foundry** (pro-code).
  - **Declarative agents** (manifest JSON).
- **SharePoint agents** = scoped to one site, inherit permissions, fastest path to a working governed agent.
- **Prefer APIs and MCP** over **computer-use / GUI scripting** (UIs change).
- **MCP (Model Context Protocol)** = open standard for AI ↔ tools/knowledge.
- **Foundry** = Azure AI Foundry for custom engine agents.
- **Entra Agent ID** (preview) = first-class identity for agents.
- **Agent lifecycle** = Draft → Test → Publish → Operate → Retire.
- **Approval workflow** = admins can require new agents to be approved before going tenant-wide.
- **Monitor agents** in M365 admin center + Power Platform admin center; DLP for connectors; **DSPM for AI** for risky prompts.

## 14. Work IQ, content safety, groundedness
- **Work IQ** (preview) = exposes the Semantic Index to your **custom AI apps** (not just Microsoft Copilot).
- **Content safety** = filters prompt + response for harmful content.
- **Groundedness detection** = flags hallucinated answers; check via Activity Explorer.

## 15. Licensing
- **Copilot Chat (free)** = web-only; no Graph.
- **Copilot Chat (paid)** = work-grounded; cheaper than full M365 Copilot.
- **M365 Copilot** ≈ **$30/user/month**; per-user, predictable.
- **PAYG** = metered; bills against an **Azure subscription**; use **Azure budgets + cost alerts**.
- **Credit Packs** = pre-purchased Copilot Studio message bundles for burst.
- **Business plans** cap at **300 users**; **lack Purview + IRM**.
- **E5** = Defender for Office 365 **Plan 2** + eDiscovery **Premium** + full Purview.
- **E5 Compliance / E5 Security add-ons** = stack on E3 if you only need those.
- **Copilot for personal/family** = in-app agents, not work-grounded.
- **Group-based licensing** scales; assign to a group, not per user.

## 16. Adoption & rollout
- **Group-level Copilot settings** beat tenant-level toggles — easier to run a clean pilot.
- **Phased rollout**: **Pilot → Evaluate → Expand → Optimize**.
- **Operational excellence** = Secure Score trends, quarterly Attack Simulation training, weekly DLP/IRM review, Access Reviews, license reclamation.
- **Disable Teams transcriptions** = example of a tenant-level toggle.

## 17. Responsible AI
- **Six principles**: Fairness · Reliability & Safety · Privacy & Security · Inclusiveness · Accountability · Transparency.
- **Transparency** for Copilot = show source data, citations, prompt history, audit trail.
- **Accountability** = a human remains responsible for AI-driven actions.

## 18. Hybrid identity (the three methods)
- **PHS** = hash of hash synced; *preferred*.
- **PTA** = agent on DC; supports AD-specific features.
- **Federation** = redirect to on-prem ADFS; legacy.
- **Entra Connect** = sync tool; **Cloud Sync** = lighter alternative.

## 19. Intune (quick)
- **Compliance policies** = encryption, OS, AV, password.
- **App protection policies (MAM)** = protect data in apps **without enrolling** the device (BYOD).
- **Endpoint Analytics** = device-health visibility.

## 20. Numbers to remember
- **Passing score**: 700.
- **Domain weights**: 30–35 / 35–40 / 25–30.
- **Copilot price**: ~$30/user/month.
- **Business plan user cap**: 300.
- **Unified Audit Log retention**: 180 days default, **1 year** with E5.
- **Restricted SharePoint Search**: up to **100 sites**; hub sites excluded.
- **Per-user OneDrive**: 1 TB+ (up to 5 TB).
- **Knowledge sources per agent**: 20.
- **Knowledge file size**: 512 MB.
- **Global Admin count**: keep ≤ 4.
