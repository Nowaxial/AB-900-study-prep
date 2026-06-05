# AB-900 — Flashcards (Q→A)

> Spaced-repetition deck covering all 20 categories of the Key Pointers.
> **Use for self-quiz, Anki import, or last-minute review.**
> For full context, see `AB-900T00-Study-Guide.md` and `Key-Pointers.md`.
>
> Anki import: copy a `front<TAB>back` table at the bottom of this file, or split on the first `**A:**`/`**Q:**` markers with a script.

---

## 0. Exam basics
**Q: What is the passing score for the AB-900 exam?**
**A:** 700 (out of 1000).

**Q: How is the AB-900 exam formatted?**
**A:** Multiple-choice, multi-select, scenario-based, and drag-and-drop — no labs, no case studies.

**Q: How many exam domains does AB-900 have, and what are they?**
**A:** Three: ① Core M365 features & objects (30–35%), ② Data protection & governance (35–40%, largest), ③ Copilot & agents admin (25–30%).

**Q: Which features does the AB-900 exam cover most — GA or Preview?**
**A:** Mostly GA. Some Preview features may appear but are flagged as such.

---

## 1. Zero Trust & identity
**Q: Is Zero Trust a Microsoft product?**
**A:** No. It's a combination of processes, policies, and configurations — a security model.

**Q: What are the three principles of Zero Trust?**
**A:** Verify explicitly · Least privilege · Assume breach.

**Q: Name the six Zero Trust pillars in Microsoft framework.**
**A:** **I**dentity · **E**ndpoints · **A**pplications · **D**ata · **I**nfrastructure · **N**etwork (mnemonic: "I Eat Data In Networks").

**Q: What is the difference between authentication and authorization?**
**A:** Authentication = prove *who* you are (n factor). Authorization = *what* you're allowed to do (z factor).

**Q: What three factor types can MFA combine?**
**A:** Know (password/PIN) · Have (phone, FIDO key) · Are (biometric).

**Q: How many authentication factors are passkeys?**
**A:** Still 2 — device (have) + PIN/biometric (know or are).

**Q: Which MFA methods are phishing-resistant and required for admins?**
**A:** Passkeys (FIDO2), Windows Hello for Business, certificate-based auth.

**Q: Why are passwords alone banned for admin accounts?**
**A:** Passwords are the most phishable, leakable, brute-forceable factor — admins must use phishing-resistant MFA.

**Q: What role does Entra ID play in M365?**
**A:** It's the identity plane — every M365 workload uses it for sign-in, RBAC, Conditional Access.

---

## 2. Identity types in Entra
**Q: What three identity types exist in Entra ID?**
**A:** Person (user) · Application (service principal / app registration / managed identity) · AI agent (Entra Agent ID, preview).

**Q: What's the difference between cloud-only and hybrid identities?**
**A:** Cloud-only = created in Entra. Hybrid = synced from on-prem AD via Entra Connect (or Cloud Sync).

**Q: Name the three hybrid authentication methods.**
**A:** **PHS** (Password Hash Sync, preferred) · **PTA** (Pass-Through Authentication) · **Federation** (AD FS, legacy).

**Q: Why is PHS the preferred hybrid auth method?**
**A:** No on-prem dependency, simplest, supports leaked-credential check.

**Q: What are dynamic groups?**
**A:** Entra groups whose membership is auto-evaluated by attribute rules (e.g., `department = Sales`) — no manual adds/removes.

**Q: What is the difference between an app registration and a service principal (enterprise app)?**
**A:** App registration = the *definition* of the app (in the dev tenant). Service principal / enterprise app = the *instance* of that app in a target tenant.

---

## 3. MFA & sign-in methods
**Q: What does Microsoft Authenticator provide?**
**A:** Passwordless sign-in, push notifications, biometrics, and a token broker via MSAL.

**Q: What are FIDO2 security keys?**
**A:** USB or NFC hardware keys used as phishing-resistant MFA factors.

**Q: What is Windows Hello for Business?**
**A:** Biometric/PIN sign-in tied to the device's TPM chip — replaces passwords on Windows devices.

**Q: Does SSPR work for hybrid users out of the box?**
**A:** No — hybrid users need **Password Writeback** enabled in Entra Connect.

**Q: What is Microsoft Entra Verified ID?**
**A:** A preview decentralized-identity feature using verifiable credentials in a digital wallet.

---

## 4. Conditional Access (CA)
**Q: What should every Conditional Access policy exclude?**
**A:** Break-glass (emergency) accounts — so you don't lock yourself out of the tenant.

**Q: Name four common Conditional Access conditions.**
**A:** User risk · sign-in risk · insider risk · device platform · location · client app · auth flow. (Pick any four.)

**Q: What session controls can a CA policy enforce?**
**A:** Sign-in frequency, persistent browser session, **Continuous Access Evaluation (CAE)**, and Defender for Cloud Apps app control.

**Q: What is an authentication strength in CA?**
**A:** A required set of allowed auth methods (built-in like "Multifactor" or "Phishing-resistant MFA"; custom combining Hello, FIDO2, certificate).

**Q: What is the Global Secure Access client?**
**A:** Microsoft's Security Service Edge (SSE) client for accessing private and internet resources securely.

**Q: Name four common Conditional Access policies.**
**A:** MFA for external users · block unmanaged devices · block legacy auth · restrict guests · enforce Terms of Use.

**Q: How do you safely test a CA policy before enabling it?**
**A:** Use the **What If** tool in Entra to simulate the policy's effect on a user sign-in.

---

## 5. RBAC, PIM, JEA, JIT
**Q: What does RBAC stand for and what does it do?**
**A:** Role-Based Access Control — assigns built-in or custom roles to a scope (tenant, group, resource).

**Q: Name four built-in admin roles in Entra/M365.**
**A:** Global Admin · Exchange Admin · SharePoint Admin · Teams Admin · Security Admin · Compliance Admin · Global Reader. (Pick four.)

**Q: What is the recommended target number of Global Admins, and how should they be assigned?**
**A:** Keep ≤ 4. Assign as **eligible in PIM**, not permanent active.

**Q: What is PIM?**
**A:** Privileged Identity Management — eligible-by-default role assignment with time-bound activation and full auditing.

**Q: What is JIT (Just-In-Time) access, and which Microsoft feature delivers it?**
**A:** Activation of a privileged role only when needed — delivered by PIM.

**Q: What is JEA (Just Enough Administration)?**
**A:** Granting the smallest role scope required to perform a task.

**Q: What are access reviews?**
**A:** Periodic re-attestation of group/role membership to remove unnecessary privileges (privilege creep).

**Q: What is an access package in entitlement management?**
**A:** A bundle of groups, sites, apps, and roles with approval workflow and expiration — self-service for users.

---

## 6. Identity Secure Score & audit
**Q: What does Identity Secure Score measure?**
**A:** The percentage of identity-related best practices applied. Statuses: Completed / Planned / Risk Accepted / Not applied.

**Q: How does Identity Secure Score differ from Microsoft Secure Score?**
**A:** Identity Secure Score = Entra ID identity settings. Microsoft Secure Score = the whole M365 tenant (broader).

**Q: What is the default Unified Audit Log retention, and how does E5 change it?**
**A:** Default 180 days; **1 year (365 days) with E5**.

**Q: What does each Entra log capture?**
**A:** Audit log = directory changes · sign-in log = sign-in events · What If = CA policy simulation.

---

## 7. Defender XDR
**Q: What four (or five) products make up Defender XDR, and where do they unify?**
**A:** Defender for **Identity** + **Office 365** + **Endpoint** + **Cloud Apps** (+ optional **Cloud**) — unified at **security.microsoft.com**.

**Q: What is MSTIC and how big is its signal?**
**A:** Microsoft Threat Intelligence Center; **65T+ signals/day** of nation-state, dark-web, and attacker telemetry.

**Q: Which Defender for Office 365 plan unlocks Threat Explorer and Attack simulation training?**
**A:** **Plan 2** (included in E5).

**Q: What does Safe Links do?**
**A:** Rewrites URLs in email and rescans **at click time** to catch delayed-bomb URLs.

**Q: What does ZAP (Zero-hour Auto Purge) do?**
**A:** **Retroactively** removes malicious messages from user mailboxes after a threat is detected.

**Q: What is the difference between Spoof intelligence and Impersonation protection?**
**A:** Spoof intelligence = fake/impersonated **sender domain**. Impersonation protection = lookalike-sender targeting **specific execs** (CEO fraud).

**Q: Which file types can Defender for Office 365 attachment filtering block?**
**A:** Executable/script types like `.exe`, `.js`, `.vbs`.

**Q: What is Attack simulation training?**
**A:** Phishing simulations that auto-enroll failing users in remediation training.

**Q: What is Threat Explorer used for?**
**A:** Real-time email investigation — pivot by sender, URL, file hash, or user impact.

**Q: What framework do Threat Analytics reports map to?**
**A:** **MITRE ATT&CK**.

**Q: What can Defender for Endpoint do?**
**A:** EDR · AV · attack surface reduction rules · automated investigations · **attack path tracking** · **device isolation**.

**Q: What does Defender for Cloud Apps (CASB) provide?**
**A:** Shadow IT discovery, session policies, app governance for SaaS.

**Q: What is Microsoft Sentinel?**
**A:** Cloud-native **SIEM + SOAR** with KQL hunting queries and Logic Apps playbooks for response.

**Q: What does Defender for Cloud cover?**
**A:** Posture management and threat protection for **Azure, AWS, and GCP** workloads.

---

## 8. M365 core services
**Q: What does Exchange Online provide?**
**A:** Mail, calendar, mail flow (transport) rules, accepted domains, connectors, retention, litigation hold, anti-spam/anti-malware, DLP.

**Q: Name the four mailbox types in Exchange Online.**
**A:** User · shared · resource (room/equipment) · Microsoft 365 group.

**Q: Where can you create a distribution list?**
**A:** Only in the **Microsoft 365 admin center** (not in Entra — Entra supports mail-enabled security groups).

**Q: What are the three Teams channel types?**
**A:** Standard · private · **shared** (cross-team).

**Q: Name the five Teams policy types.**
**A:** Meeting · messaging · calling · app permission · app setup.

**Q: What is the difference between SharePoint team sites and communication sites?**
**A:** Team sites = collaboration, joined to a M365 group. Communication sites = broadcast/informational, lightweight, no group.

**Q: What are the three SharePoint site roles?**
**A:** **Owner** (full control) · **Member** (edit) · **Visitor** (read only).

**Q: Why is permission inheritance important in SharePoint?**
**A:** Breaking inheritance is the #1 source of oversharing.

**Q: How much OneDrive storage does a user get, and what is Known Folder Move?**
**A:** **1 TB+ per user** (up to 5 TB). Known Folder Move = back up Desktop/Documents/Pictures to OneDrive.

**Q: What is Microsoft Graph?**
**A:** The single unified API surface that everything in M365 (and Copilot) uses to read/write data.

---

## 9. Microsoft 365 admin center
**Q: What is the URL of the M365 admin center?**
**A:** **https://admin.microsoft.com**.

**Q: Name four tasks you do in the M365 admin center.**
**A:** Create users · bulk create users · group-based licensing · assign roles · billing · service health · message center · reports · tenant settings. (Pick four.)

**Q: What do you need to add a custom domain to a M365 tenant?**
**A:** **DNS verification** of the domain by adding a TXT/MX record.

**Q: Name the four PowerShell modules for M365 admin.**
**A:** **Exchange Online** · **Microsoft Teams** · **SharePoint Online Management Shell** · **Microsoft Graph PowerShell SDK**.

---

## 10. Microsoft Purview
**Q: What is the URL of the Microsoft Purview portal?**
**A:** **https://purview.microsoft.com**.

**Q: What are Sensitivity Labels used for?**
**A:** Classify and protect content with encryption, watermarks, and access restrictions — labels **travel with the file**.

**Q: How are labels distributed, and can a label be optional or mandatory?**
**A:** Via **label policies**. A label can be optional (user chooses) or mandatory (auto-applied / required). **Override rules** can require justification to downgrade.

**Q: What does DLP (Data Loss Prevention) do?**
**A:** Detects and blocks sensitive data (PII, PHI, financial) across Exchange, SharePoint, OneDrive, Teams, endpoints, cloud apps — **including Copilot prompts/responses**.

**Q: What signals does Insider Risk Management correlate?**
**A:** Resignation + data download, off-hours activity, mass copy, optional **endpoint activity** and **HR events**. It can auto-feed **Conditional Access via Adaptive Protection**.

**Q: What does Communication Compliance monitor?**
**A:** Teams messages, Exchange mail, **Viva Engage** (Yammer), and 3rd-party connectors — for harassment, regulatory violations, **insider trading** risk.

**Q: What is DSPM for AI?**
**A:** Data Security Posture Management for AI/Copilot — surfaces **shadow AI**, risky prompts, prompt-injection attempts. Integrates with **Activity Explorer** (last 30 days of Copilot interactions).

**Q: What is Adaptive Protection?**
**A:** Automatic escalation from Insider Risk signals into DLP — the higher the risk score, the stricter the DLP rules applied.

**Q: What is Data Lifecycle Management?**
**A:** Retention policies + retention labels + disposition reviews + records management. **Auto-apply rules** can fire on keywords, sensitive info types, or trainable classifiers.

**Q: Difference between eDiscovery Standard and Premium?**
**A:** Standard (E3) = search, hold, export. **Premium (E5)** = adds legal-hold workflows, review sets, redaction, analytics.

**Q: What does Compliance Manager track?**
**A:** **Microsoft-managed** (auto-monitored) + **customer-managed** (manual) controls, improvement actions with owners, and an overall **Compliance Score**.

**Q: What is the difference between Data Explorer and Activity Explorer?**
**A:** **Data Explorer** = query *where* sensitive data lives (by site, label, content type). **Activity Explorer** = *who* viewed/modified/printed/emailed labeled content.

**Q: What is Customer Key vs Customer Lockbox?**
**A:** **Customer Key** = customer-managed encryption keys for M365 data. **Customer Lockbox** = explicit customer consent before a Microsoft engineer can access tenant data.

---

## 11. SharePoint governance
**Q: What is the #1 risk Copilot exposes in SharePoint?**
**A:** **Oversharing** — Semantic Index finds data that "security by obscurity" used to hide.

**Q: What is SharePoint Advanced Management?**
**A:** The umbrella of governance features for SharePoint/OneDrive — included in some M365 Copilot licenses.

**Q: What does Restricted Site Access do?**
**A:** Limits content visibility on a SharePoint site to a specific Entra group only.

**Q: What do DAG (Data Access Governance) reports flag?**
**A:** Sites with sensitive content, excessive sharing, inactive owners, or missing labels.

**Q: What is a site access review?**
**A:** Periodic owner-driven confirmation of who should have access to a site.

**Q: What is a site ownership policy?**
**A:** A policy such as "every site must have **≥ 2 owners**" — enforced automatically.

**Q: What does restricted content discovery do at the site level?**
**A:** Opts a site out of Copilot grounding (its content won't surface in Copilot answers).

**Q: What does Restricted SharePoint Search do at the tenant level, and what's the limit?**
**A:** Limits Copilot and search to a curated list of up to **100 sites**. **Hub sites and their children don't count** against the limit.

---

## 12. Microsoft 365 Copilot
**Q: What is the architectural definition of M365 Copilot?**
**A:** **RAG over Microsoft Graph + Semantic Index, permission-aware** — using the user's existing OAuth token (no new data-access path).

**Q: How does Copilot access data?**
**A:** It uses the **user's OAuth token** and queries Graph + Semantic Index — the LLM has no direct access to tenant data.

**Q: Describe the Copilot request architecture.**
**A:** User prompt → orchestrator → Graph + Semantic Index (RAG) → LLM with system prompt → content safety + groundedness checks → response.

**Q: What are the per-user prerequisites for M365 Copilot?**
**A:** Copilot license · active Exchange Online mailbox · OneDrive provisioned · Microsoft Search healthy.

**Q: Does Microsoft train its foundation models on your prompts, responses, or tenant data?**
**A:** No. Your data is never used for training.

**Q: What is the difference between Copilot Chat (free) and Microsoft 365 Copilot (paid)?**
**A:** **Copilot Chat (free)** = web grounding only, no Graph. **Microsoft 365 Copilot (paid)** = adds work grounding (Graph + Semantic Index).

**Q: What are the four levels at which Copilot can be enabled/disabled?**
**A:** Tenant settings · per-app enablement · per-user (license) · per-content (Sensitivity Labels).

**Q: Where do you find Copilot adoption analytics?**
**A:** In the M365 admin center, and deep metrics in **Viva Insights → Copilot Analytics**.

**Q: How can admin scope prompt sharing?**
**A:** Admins can restrict who can share saved prompts — to specific roles, groups, or the tenant.

**Q: What is license reclamation in a Copilot rollout?**
**A:** Reassigning Copilot licenses from users who aren't actively using them to waiting users.

---

## 13. Agents
**Q: What is the difference between a Copilot and an Agent?**
**A:** **Copilot** = personal assistant that responds to the user. **Agent** = scoped, often autonomous, may run on a trigger or schedule.

**Q: Name four pre-built agents.**
**A:** **Researcher** (deep research with citations) · **Analyst** (data analysis) · Writing Coach · Prompt Coach · SharePoint site agents. (Pick four.)

**Q: What are the three ways to build a custom agent?**
**A:** **Copilot Studio** (low-code) · **VS Code + Azure AI Foundry** (pro-code) · **Declarative agents** (manifest JSON).

**Q: What are the limits of Copilot Studio knowledge?**
**A:** Up to **20 knowledge sources**; each file up to **512 MB**; web toggle; suggested prompts; instructions & rules; triggers for autonomous behavior.

**Q: What is a SharePoint agent, and why is it the fastest path to a governed agent?**
**A:** An agent scoped to a single SharePoint site. It **inherits the site's permissions** — no extra data-access decisions to make.

**Q: Why prefer APIs and MCP over GUI scripting?**
**A:** UIs change often; APIs and the **Model Context Protocol (MCP)** are stable contracts.

**Q: What is MCP?**
**A:** **Model Context Protocol** — an open standard for AI agents to call tools and access knowledge.

**Q: What is Azure AI Foundry?**
**A:** Microsoft's pro-code platform for building custom engine agents.

**Q: What is Entra Agent ID?**
**A:** A preview feature that gives **AI agents a first-class identity** in Entra (separate from user/service-principal).

**Q: What are the five phases of the agent lifecycle?**
**A:** **Draft → Test → Publish → Operate → Retire**.

**Q: How do you govern agent publishing?**
**A:** Approval workflow — admins can require new agents to be approved before they go tenant-wide.

**Q: Where do you monitor agent activity?**
**A:** M365 admin center + Power Platform admin center; DLP for connectors; **DSPM for AI** for risky prompts.

---

## 14. Work IQ, content safety, groundedness
**Q: What is Work IQ?**
**A:** A preview feature that exposes the Semantic Index to your **custom AI apps**, not just Microsoft Copilot.

**Q: What is content safety in Copilot?**
**A:** Filters both the prompt and the response for harmful content (hate, violence, sexual, self-harm).

**Q: What is groundedness detection?**
**A:** Flags Copilot answers that aren't backed by retrieved data (potential hallucinations). Check it in **Activity Explorer**.

---

## 15. Licensing
**Q: What is Copilot Chat (free)?**
**A:** Web-grounded chat only — no Microsoft Graph access.

**Q: What is Copilot Chat (paid)?**
**A:** Work-grounded chat, cheaper than full M365 Copilot.

**Q: What is the per-user price of M365 Copilot?**
**A:** **~$30 per user per month.**

**Q: What is PAYG billing for agents, and what controls it?**
**A:** Pay-as-you-go metering billed against an **Azure subscription**; use **Azure budgets + cost alerts** to control cost.

**Q: What are Credit Packs?**
**A:** Pre-purchased Copilot Studio message bundles for burst usage above the included quota.

**Q: What is the user cap of Microsoft 365 Business plans, and what do they lack?**
**A:** **300 users** max. They lack full **Purview** features and **Insider Risk Management**.

**Q: What does E5 add over E3 that's relevant to AB-900?**
**A:** Defender for Office 365 **Plan 2** · eDiscovery **Premium** · full **Purview** suite.

**Q: What are the E5 Compliance and E5 Security add-ons?**
**A:** Stack-on-E3 SKUs for customers who need only compliance or only security E5 features.

**Q: Are Copilot for personal/family and M365 Copilot the same?**
**A:** No. Personal/family Copilot is **in-app agents** in consumer apps — **not work-grounded**.

**Q: Why use group-based licensing for Copilot?**
**A:** Assign the license to a group (e.g., a dynamic group) rather than per user — scales as users join/leave.

---

## 16. Adoption & rollout
**Q: Why prefer group-level Copilot settings over tenant-level toggles?**
**A:** Easier to run a clean pilot — settings only apply to the group.

**Q: What is the recommended Copilot rollout sequence?**
**A:** **Pilot → Evaluate → Expand → Optimize.**

**Q: What is "operational excellence" in the M365 context?**
**A:** Quarterly cadence: monitor Secure Score trends, run Attack Simulation training, review DLP/IRM alerts, run Access Reviews, reclaim unused licenses.

**Q: Give one example of a tenant-level Copilot toggle.**
**A:** Disable Teams transcriptions. (Other examples: web content, plugins, semantic index for Copilot.)

---

## 17. Responsible AI
**Q: Name the six Microsoft responsible AI principles.**
**A:** **Fairness · Reliability & Safety · Privacy & Security · Inclusiveness · Accountability · Transparency.**

**Q: What does "transparency" mean for Copilot?**
**A:** Show source data, citations, prompt history, and the audit trail of how an answer was generated.

**Q: What does "accountability" mean in the context of Copilot?**
**A:** A **human** remains responsible for any AI-driven action — Copilot is a tool, not an autonomous legal actor.

---

## 18. Hybrid identity (the three methods)
**Q: What does PHS do, and why is it preferred?**
**A:** Syncs a **hash of the password hash** to Entra. No on-prem dependency; supports leaked-credential checks.

**Q: What does PTA require that PHS does not?**
**A:** An **on-prem authentication agent** on a domain-joinable server reachable from the internet. Supports AD-specific features.

**Q: When is Federation still appropriate?**
**A:** Legacy/regulatory scenarios requiring on-prem auth (e.g., smart cards, third-party MFA). It's the most operationally heavy option.

**Q: What is the difference between Entra Connect and Cloud Sync?**
**A:** **Entra Connect** = full single-server sync engine. **Cloud Sync** = lightweight agent-based, supports multiple agents for high availability.

---

## 19. Intune (quick)
**Q: What does an Intune compliance policy check?**
**A:** Encryption, OS version, antivirus, password — flags non-compliant devices.

**Q: What is the difference between an Intune compliance policy and an app protection policy (MAM)?**
**A:** Compliance = device-level (requires enrollment). **MAM** = app-level data protection **without enrolling** the device (BYOD-friendly).

**Q: What is Endpoint Analytics?**
**A:** Intune module that gives device-health visibility (boot time, app reliability, etc.).

---

## 20. Numbers to remember
**Q: What is the AB-900 passing score?**
**A:** **700.**

**Q: What are the three AB-900 domain weightings?**
**A:** **30–35% / 35–40% / 25–30%** (Core M365 / Data protection / Copilot).

**Q: What is the per-user price of M365 Copilot?**
**A:** **~$30/user/month.**

**Q: What is the user cap of Microsoft 365 Business plans?**
**A:** **300 users.**

**Q: What is the default Unified Audit Log retention, and how does E5 change it?**
**A:** 180 days default; **1 year (365 days) with E5**.

**Q: What is the limit of Restricted SharePoint Search?**
**A:** Up to **100 sites**. Hub sites and their children don't count.

**Q: How much OneDrive storage does a user get?**
**A:** **1 TB+** (up to 5 TB).

**Q: What is the maximum number of knowledge sources per Copilot Studio agent?**
**A:** **20.**

**Q: What is the maximum knowledge file size in Copilot Studio?**
**A:** **512 MB.**

**Q: How many Global Admins should a tenant have?**
**A:** Keep it **≤ 4** (and assign them as eligible in PIM, not permanent).

---

## Anki import format

The flashcards above are also available in tab-separated form for Anki import. Sample:

```
Question<TAB>Answer
What is the passing score for AB-900?<TAB>700 (out of 1000).
What are the six Zero Trust pillars?<TAB>Identity, Endpoints, Applications, Data, Infrastructure, Network.
What does ZAP do?<TAB>Retroactively removes malicious messages from user mailboxes.
...
```

To generate the full TSV from this markdown, run a one-liner like:

```powershell
Get-Content "C:\Users\Nowaxial\Documents\Projekt\AB-900\Flashcards.md" | `
  ForEach-Object { $_ -replace '^\*\*Q:\s*','' -replace '\*\*$','' } | ...
```

(Or open the file and split on `**Q:` / `**A:**` markers in any text editor.)
