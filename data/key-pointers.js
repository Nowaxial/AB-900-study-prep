const keyPointerCategories = [
  {
    title: "Zero Trust &amp; identity",
    id: "zero-trust-identity",
    pointers: [
      "Zero Trust is NOT a product &mdash; it's a combination of processes, policies, and configurations.",
      "Three principles: verify explicitly &middot; least privilege &middot; assume breach.",
      "Six pillars (Microsoft framework): Identity &middot; Endpoints &middot; Applications &middot; Data &middot; Infrastructure &middot; Network.",
      "Authentication = prove identity (n factor) &middot; Authorization = what you can do (z factor).",
      "MFA = 2+ of: know (password/PIN) &middot; have (phone, FIDO key) &middot; are (biometric).",
      "Passkeys are still 2 factors: device (have) + PIN/biometric (know/are).",
      "Phishing-resistant methods: Passkeys (FIDO2), Windows Hello for Business, certificate-based &mdash; mandatory for admins.",
      "Passwords alone = banned for admins; least-preferred method overall.",
      "Entra ID = identity plane of M365; every workload uses it."
    ]
  },
  {
    title: "Identity types in Entra",
    id: "identity-types-entra",
    pointers: [
      "Person (user), Application (service principal / app registration / managed identity), AI agent (Entra Agent ID, preview).",
      "Cloud-only identity: created directly in Entra.",
      "Hybrid identity: synced from on-prem AD via Entra Connect (or Cloud Sync).",
      "Three hybrid auth methods: PHS (preferred, no on-prem dep), PTA (DC must be reachable), Federation (AD FS, legacy).",
      "Dynamic groups use attribute rules (e.g. department = Sales) &mdash; auto-cleanup of permissions.",
      "App registration = the app's definition; Enterprise app / Service principal = the instance in a tenant."
    ]
  },
  {
    title: "MFA &amp; sign-in methods",
    id: "mfa-signin",
    pointers: [
      "Microsoft Authenticator = passwordless, push, biometrics, token broker via MSAL.",
      "FIDO2 security keys = USB/NFC hardware keys, phishing-resistant.",
      "Windows Hello for Business = face/fingerprint/PIN tied to device TPM.",
      "SSPR: Cloud-only works out of the box. Hybrid needs Password Writeback in Entra Connect.",
      "Verified ID / Verifiable Credentials (preview) = decentralized identity in a digital wallet."
    ]
  },
  {
    title: "Conditional Access (CA)",
    id: "conditional-access",
    pointers: [
      "Targets: users/groups/agents, cloud apps, Azure portal, Microsoft Admin Portals; always set break-glass exclusions.",
      "Conditions: user risk, sign-in risk, insider risk, device platform, location, client app, auth flow.",
      "Session controls: sign-in frequency, persistent browser, continuous access evaluation, Defender for Cloud Apps app control.",
      "Authentication strengths: built-in (Multifactor, Phishing-resistant MFA) and custom (Hello, FIDO2, certificate).",
      "Global Secure Access client = Microsoft SSE for private/internet resources.",
      "Common policies: MFA for external &middot; block unmanaged devices &middot; block legacy auth &middot; restrict guests &middot; enforce Terms of Use.",
      "What If tool = test a CA policy before enabling."
    ]
  },
  {
    title: "RBAC, PIM, JEA, JIT",
    id: "rbac-pim-jea-jit",
    pointers: [
      "RBAC = roles (built-in or custom) bound to a scope. Built-ins: Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader.",
      "Global Admin = god role; minimize (target &le; 4); must be eligible in PIM, not permanent.",
      "PIM = eligible-by-default + activation; time-bound, audited.",
      "JIT = role activation only when needed; delivered by PIM.",
      "JEA = smallest scope that does the job.",
      "Access Reviews = periodic re-attestation; kills privilege creep.",
      "Entitlement Management / Access Packages = bundle groups, sites, apps, roles with approval + expiration."
    ]
  },
  {
    title: "Identity Secure Score &amp; audit",
    id: "identity-secure-score",
    pointers: [
      "Identity Secure Score = % of best practices applied; benchmarks against similar orgs; statuses = Completed / Planned / Risk Accepted / Not applied.",
      "Microsoft Secure Score = same idea across the whole M365 tenant.",
      "Unified Audit Log (Purview) = who-did-what across M365; default 180 days, E5 = 1 year.",
      "Entra ID audit log = directory changes; Entra sign-in log = sign-in events; What If = CA simulation."
    ]
  },
  {
    title: "Defender XDR",
    id: "defender-xdr",
    pointers: [
      "Defender XDR = Identity + Office 365 + Endpoint + Cloud Apps + optional Cloud &mdash; unified at security.microsoft.com.",
      "MSTIC = Microsoft Threat Intelligence Center, 65T+ signals/day, nation-state + dark-web tracking.",
      "Defender for Office 365 Plan 2 (in E5) unlocks Threat Explorer and Attack simulation training.",
      "Safe Links = URL rewrite + rescan at click time.",
      "ZAP (Zero-hour Auto Purge) = retroactive removal of malicious messages.",
      "Spoof intelligence = fake/impersonated senders; Impersonation protection = lookalike-sender targeting execs.",
      "Attachment filtering blocks .exe, .js, .vbs.",
      "Attack simulation training = phishing sims + auto-training on failure.",
      "Threat Explorer = real-time email investigation; pivot by sender, URL, file hash, user impact.",
      "Threat Analytics = reports with MITRE ATT&amp;CK mappings.",
      "Defender for Endpoint: EDR, AV, attack surface reduction, automated investigations, attack path tracking, device isolation.",
      "Defender for Cloud Apps (CASB): shadow IT discovery, session policies, app governance.",
      "Microsoft Sentinel = cloud SIEM + SOAR; KQL hunting; Logic Apps playbooks.",
      "Defender for Cloud = posture across Azure, AWS, GCP."
    ]
  },
  {
    title: "M365 core services",
    id: "m365-core-services",
    pointers: [
      "Exchange Online = mail, calendar, mail flow rules, accepted domains, connectors, retention, litigation hold, anti-spam, anti-malware, DLP.",
      "Mailboxes: user &middot; shared &middot; resource (room/equipment) &middot; Microsoft 365 group.",
      "Distribution lists = email only, can ONLY be created in M365 admin center (not Entra).",
      "Teams = chat, meetings, calling, app integrations; built on M365 Groups.",
      "Channel types: standard &middot; private &middot; shared (cross-team).",
      "Teams policies: meeting, messaging, calling, app permission, app setup.",
      "SharePoint = sites (team / communication) &middot; libraries &middot; folders &middot; files.",
      "SharePoint site roles: Owner (full) &middot; Member (edit) &middot; Visitor (read).",
      "Permission inheritance can be broken &mdash; main source of oversharing.",
      "OneDrive = 1 TB+ per user; uses SharePoint storage; Known Folder Move = Desktop/Documents/Pictures.",
      "Microsoft Graph = the single API surface used by everything in M365 (and Copilot)."
    ]
  },
  {
    title: "Microsoft 365 admin center",
    id: "m365-admin-center",
    pointers: [
      "URL: https://admin.microsoft.com.",
      "Tasks: users, bulk user create, group-based licensing, roles, billing, service health, message center, reports, settings.",
      "Custom domains need DNS verification; can have multiple per tenant.",
      "PowerShell modules: Exchange Online &middot; Microsoft Teams &middot; SharePoint Online Management Shell &middot; Microsoft Graph PowerShell SDK."
    ]
  },
  {
    title: "Microsoft Purview",
    id: "microsoft-purview",
    pointers: [
      "Portal: https://purview.microsoft.com.",
      "Information Protection = Sensitivity Labels &mdash; encrypt, watermark, restrict access; travel with the file.",
      "Labels = published via label policies; can be mandatory or optional; override rules with justification.",
      "DLP = detect &amp; block sensitive data across Exchange / SharePoint / OneDrive / Teams / endpoints / cloud apps; can target Copilot.",
      "Insider Risk Management = correlates signals (departure + download, off-hours, mass copy); can auto-feed Conditional Access via Adaptive Protection.",
      "Communication Compliance = monitors Teams, Exchange, Viva Engage, and 3rd-party connectors.",
      "DSPM for AI = data security for AI / Copilot; surfaces shadow AI, risky prompts, prompt-injection.",
      "Adaptive Protection = automatic IRM &rarr; DLP escalation; strictest DLP applies as risk score rises.",
      "Data Lifecycle Management = retention policies + labels + disposition reviews + records management.",
      "eDiscovery Standard (E3) + Premium (E5) = search/hold/export for legal.",
      "Compliance Manager = Microsoft-managed + customer-managed controls; Compliance Score.",
      "Data Explorer = query sensitive-data locations; Activity Explorer = who viewed/modified/printed/emailed labeled content.",
      "Customer Key = customer-managed encryption keys; Customer Lockbox = explicit consent for Microsoft engineer access."
    ]
  },
  {
    title: "SharePoint governance",
    id: "sharepoint-governance",
    pointers: [
      "Oversharing is Copilot's #1 risk &mdash; Semantic Index finds data that security by obscurity used to hide.",
      "SharePoint Advanced Management = the umbrella for governance; included in some M365 Copilot licenses.",
      "Restricted Site Access = limit content visibility to a specific Entra group.",
      "DAG reports flag sites with sensitive content, excessive sharing, inactive owners, missing labels.",
      "Site access reviews = periodic owner confirmation of who should have access.",
      "Site ownership policy = e.g. require &ge; 2 owners per site.",
      "Restricted content discovery (site level) = opt a site out of Copilot grounding.",
      "Restricted SharePoint Search (tenant level) = up to 100 sites; hub sites and children don't count."
    ]
  },
  {
    title: "Microsoft 365 Copilot",
    id: "m365-copilot",
    pointers: [
      "Copilot = RAG over Graph + Semantic Index, permission-aware.",
      "No new data-access path &mdash; uses the user's OAuth token.",
      "Architecture: prompt &rarr; orchestrator &rarr; Graph + Semantic Index (RAG) &rarr; LLM + system prompt &rarr; content safety + groundedness &rarr; response.",
      "Prerequisites: Copilot license + active Exchange mailbox + OneDrive + Microsoft Search healthy.",
      "No training of the LLM on your prompts, responses, or tenant data.",
      "Copilot Chat (free) = web only; Microsoft 365 Copilot (paid) adds work-grounding.",
      "Enable/disable: web content, plugin/connector controls, per-app, per-user (license), per-content (Sensitivity Labels).",
      "Copilot analytics in admin center + Viva Insights for deep adoption metrics.",
      "Prompts can be saved, shared (admin can scope sharing), scheduled, deleted.",
      "Reclaim underused licenses &mdash; reassign Copilot from inactive users."
    ]
  },
  {
    title: "Agents",
    id: "agents",
    pointers: [
      "Copilot = personal assistant; Agent = scoped, often autonomous, may run on trigger or schedule.",
      "Pre-built agents: Researcher, Analyst, Writing Coach, Prompt Coach, SharePoint site agents.",
      "Custom agents: Copilot Studio (low-code), VS Code + Foundry (pro-code), Declarative agents (manifest JSON).",
      "Copilot Studio limits: up to 20 knowledge sources, files up to 512 MB.",
      "SharePoint agents = scoped to one site, inherit permissions, fastest path to a governed agent.",
      "Prefer APIs and MCP over computer-use / GUI scripting (UIs change).",
      "MCP = Model Context Protocol, open standard for AI &harr; tools/knowledge.",
      "Entra Agent ID (preview) = first-class identity for agents.",
      "Agent lifecycle: Draft &rarr; Test &rarr; Publish &rarr; Operate &rarr; Retire.",
      "Approval workflow = admins can require new agents to be approved before going tenant-wide.",
      "Monitor agents in M365 admin center + Power Platform admin center."
    ]
  },
  {
    title: "Work IQ, content safety, groundedness",
    id: "work-iq-safety",
    pointers: [
      "Work IQ (preview) = exposes the Semantic Index to your custom AI apps (not just Microsoft Copilot).",
      "Content safety = filters prompt + response for harmful content.",
      "Groundedness detection = flags hallucinated answers; check via Activity Explorer."
    ]
  },
  {
    title: "Licensing",
    id: "licensing",
    pointers: [
      "Copilot Chat (free) = web-only; no Graph.",
      "Copilot Chat (paid) = work-grounded; cheaper than full M365 Copilot.",
      "M365 Copilot &asymp; $30/user/month; per-user, predictable.",
      "PAYG = metered; bills against an Azure subscription; use Azure budgets + cost alerts.",
      "Credit Packs = pre-purchased Copilot Studio message bundles for burst.",
      "Business plans cap at 300 users; lack Purview + IRM.",
      "E5 = Defender for Office 365 Plan 2 + eDiscovery Premium + full Purview.",
      "E5 Compliance / E5 Security add-ons = stack on E3 if you only need those.",
      "Copilot for personal/family = in-app agents, not work-grounded.",
      "Group-based licensing scales; assign to a group, not per user."
    ]
  },
  {
    title: "Adoption &amp; rollout",
    id: "adoption-rollout",
    pointers: [
      "Group-level Copilot settings beat tenant-level toggles &mdash; easier to run a clean pilot.",
      "Phased rollout: Pilot &rarr; Evaluate &rarr; Expand &rarr; Optimize.",
      "Operational excellence = Secure Score trends, quarterly Attack Simulation, weekly DLP/IRM review, Access Reviews, license reclamation.",
      "Disable Teams transcriptions = example of a tenant-level toggle."
    ]
  },
  {
    title: "Responsible AI",
    id: "responsible-ai",
    pointers: [
      "Six principles: Fairness &middot; Reliability &amp; Safety &middot; Privacy &amp; Security &middot; Inclusiveness &middot; Accountability &middot; Transparency.",
      "Transparency for Copilot = show source data, citations, prompt history, audit trail.",
      "Accountability = a human remains responsible for AI-driven actions."
    ]
  },
  {
    title: "Hybrid identity (the three methods)",
    id: "hybrid-identity",
    pointers: [
      "PHS = hash of hash synced; preferred.",
      "PTA = agent on DC; supports AD-specific features.",
      "Federation = redirect to on-prem ADFS; legacy.",
      "Entra Connect = sync tool; Cloud Sync = lighter alternative."
    ]
  },
  {
    title: "Intune (quick)",
    id: "intune",
    pointers: [
      "Compliance policies = encryption, OS, AV, password.",
      "App protection policies (MAM) = protect data in apps without enrolling the device (BYOD).",
      "Endpoint Analytics = device-health visibility."
    ]
  },
  {
    title: "Numbers to remember",
    id: "numbers",
    pointers: [
      "Passing score: 700.",
      "Domain weights: 30&ndash;35 / 35&ndash;40 / 25&ndash;30.",
      "Copilot price: ~$30/user/month.",
      "Business plan user cap: 300.",
      "Unified Audit Log retention: 180 days default, 1 year with E5.",
      "Restricted SharePoint Search: up to 100 sites; hub sites excluded.",
      "Per-user OneDrive: 1 TB+ (up to 5 TB).",
      "Knowledge sources per agent: 20.",
      "Knowledge file size: 512 MB.",
      "Global Admin count: keep &le; 4."
    ]
  }
];
