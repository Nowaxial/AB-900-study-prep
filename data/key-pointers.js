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
      "Verified ID / Verifiable Credentials (preview) = decentralized identity in a digital wallet.",
      "Temporary Access Pass (TAP) = time-limited password for onboarding new users or recovery; phishing-resistant.",
      "SMS and voice call = legacy MFA methods; Microsoft recommends migrating to Authenticator or passkeys.",
      "Authentication methods policy in Entra = which methods are allowed and who can use them; per-method targeting.",
      "Combined registration experience = users register MFA + SSPR in one wizard.",
      "Per-user MFA (legacy) vs Conditional Access MFA: always use CA for granularity; per-user is deprecated in favor of CA.",
      "Hardware OATH tokens = time-based codes; supported for high-security scenarios where phones are banned.",
      "Passkeys in Entra ID = cross-device, phishing-resistant; stored in password manager, iCloud Keychain, or hardware key.",
      "MFA registration campaign = admins can nudge non-compliant users to register MFA at sign-in."
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
      "Microsoft Secure Score = same idea across the whole M365 tenant; categories: Identity, Device, Data, Apps, Infrastructure.",
      "Unified Audit Log (Purview) = who-did-what across M365; default 180 days, E5 = 1 year.",
      "Entra ID audit log = directory changes; Entra sign-in log = sign-in events; What If = CA simulation.",
      "Identity Protection = risk policies (user + sign-in), risk detections, confirmed compromised, MFA registration policy.",
      "User risk policy = auto-remediate when leak-credential/unusual-behavior detected; sign-in risk policy = block low/medium/high risk.",
      "Risk detection types: Atypical travel, anonymous IP, unfamiliar sign-in, malware-linked, password spray, credential leaks, brute force.",
      "Identity Protection requires P2 license for automated risk-based policies.",
      "Secure Score API: pull score and improvement actions programmatically via Microsoft Graph.",
      "Improvement actions = specific steps with points, status, license requirement; some actions depend on E5/P2."
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
      "Tasks: users, bulk user create (CSV), group-based licensing, admin roles, billing, service health, message center, reports, org settings, setup guides.",
      "Custom domains need DNS verification (TXT or MX); can have multiple per tenant; primary domain cannot be removed.",
      "PowerShell modules: Exchange Online &middot; Microsoft Teams &middot; SharePoint Online Management Shell &middot; Microsoft Graph PowerShell SDK.",
      "Billing: subscriptions, invoices, payment methods (credit card/invoice), licenses (assign/unassign/reclaim).",
      "Service Health = real-time status + incident/advisory history; Message Center = planned feature changes with timeline.",
      "Reports dashboard = usage analytics for M365 apps, forms, email activity, Teams, OneDrive, SharePoint, and more.",
      "Admin roles delegation: assign least-privilege roles (e.g. User Admin, Helpdesk Admin, Billing Admin) instead of Global Admin.",
      "Partner relationships: add a CSP partner for delegated admin privileges (DAP) or granular delegated admin privileges (GDAP).",
      "Setup page = guided wizards for initial tenant configuration, migration, and adoption scenarios."
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
      "Customer Key = customer-managed encryption keys; Customer Lockbox = explicit consent for Microsoft engineer access.",
      "Audit (Standard) = 180-day retention, basic events; Audit (Premium) = 1-10 year retention, high-value events (e.g. mailbox access), bandwidth export.",
      "Data connectors = ingest data from 3rd-party sources (Slack, Zoom, Teams, Salesforce, Bloomberg, etc.) for eDiscovery and IRM.",
      "Compliance boundaries = scoped search/hold/export for geographical or departmental data segmentation.",
      "Retention policies (location-wide) vs Retention labels (item-level) = policies auto-apply, labels are published for users/admins.",
      "Default retention label = auto-applied to all content in a library, folder, or document set.",
      "Adaptive scopes = target policies based on attributes (department, geography, group membership) instead of static groups.",
      "Records management = retention labels that declare content a record (locked, immutable) or regulatory record (even admins cannot delete).",
      "Sensitive Information Types (SITs) = built-in (credit card, SSN, passport) + custom regex patterns; used by DLP, autolabeling, IRM.",
      "Trainable classifiers = AI-based content classification; trained with seed content; used by DLP, autolabeling, IRM, Communication Compliance.",
      "Auto-labeling = automatically applies sensitivity/retention labels based on SITs, trainable classifiers, or manual triggers.",
      "Sublabels = parent-child label hierarchy (e.g. Confidential &rarr; Legal, HR); parent label can be disabled to force sublabel selection.",
      "Double Key Encryption (DKE) = two keys needed to decrypt (one in Microsoft, one customer-held); for most sensitive data.",
      "Mark content = headers, footers, or watermarks applied by Sensitivity Labels; follows the file wherever it goes.",
      "DLP policy tips = notify users inline when they try to share sensitive data; allow override with business justification.",
      "DLP for Teams = blocks sensitive data in Teams chat/channel messages; supports SITs and label-based conditions.",
      "DLP for endpoints = monitors &amp; blocks sensitive data on Windows/macOS devices (USB copy, print, clipboard, cloud upload).",
      "IRM risk indicators: data exfiltration (mass download, unusual SharePoint access), data theft (off-hours access, unusual deletion), security policy violations.",
      "IRM forensic evidence = captures screen recordings of user activity when a risk threshold is triggered (requires E5).",
      "Compliance Manager assessments = pre-built templates (ISO 27001, NIST, GDPR, FedRAMP, DORA) + custom assessments.",
      "Compliance Manager improvement actions = actionable steps to improve score; can be assigned, tracked, tested.",
      "Compliance Manager automated testing = Microsoft-managed controls auto-tested; customer-manual controls need evidence upload.",
      "eDiscovery Premium workflow: holds &rarr; collections &rarr; review sets &rarr; tagging &rarr; analytics (email threading, themes, duplicate detection) &rarr; export.",
      "Retention labels can auto-apply based on SITs or trainable classifiers (without manual user action).",
      "Disposition reviews = periodic manual review of content before deletion; reviewers attest whether to keep or delete.",
      "Adaptive scopes reduce administrative overhead by targeting policies dynamically &mdash; no need to update group memberships.",
      "Service encryption with Customer Key = tenant-level encryption key you manage via Azure Key Vault."
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
      "Restricted SharePoint Search (tenant level) = up to 100 sites; hub sites and children don't count.",
      "Default sharing links = set to Specific People (not Everyone) to prevent oversharing by default.",
      "External sharing = limit to authenticated users only or Specific People; block external sharing on sensitive sites via CA.",
      "Sharing limits per site = cap external shares per site; block sharing to unauthorized domains.",
      "Site lifecycle management = auto-delete inactive sites after a configurable inactivity period.",
      "Inactivity alerts = notify admins/site owners when a site has no activity for X days.",
      "Site policy validation at creation = enforce an approval workflow when a user creates a new communication site.",
      "File request in OneDrive/SharePoint = collect files from others without granting them access to the folder.",
      "SharePoint admin center reports = storage usage, active users, top content types, activity trends.",
      "Web part security = allow/block specific SharePoint web parts across the tenant.",
      "Information Rights Management (IRM) in SharePoint = apply IRM protection to items in a document library (separate from Sensitivity Labels)."
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
      "Semantic Index indexes all user content in M365: emails, chats, docs, meetings, calendar, etc.",
      "Groundedness detection = flags hallucinated answers; check via Activity Explorer.",
      "Types of grounding: Microsoft Graph (user data), web content, uploaded files, custom connectors.",
      "Content safety = filters prompt + response for harmful content; four categories: hate, sexual, violence, self-harm.",
      "Content safety severity levels: Safe, Low, Medium, High; configurable per category.",
      "Content safety can be configured at tenant level or per-app in Copilot Studio.",
      "Groundedness detection is always on for M365 Copilot; cannot be turned off by tenant admins."
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
      "Disable Teams transcriptions = example of a tenant-level toggle.",
      "Champion program = identify and enable early adopters with training and exclusive access.",
      "Microsoft Adoption Score = organizational productivity and health metrics (content collaboration, mobility, etc.).",
      "Change management: executive sponsorship, stakeholder mapping, feedback loops, and celebration of wins.",
      "Training resources: Microsoft Learn, Viva Learning, custom Copilot prompts library.",
      "Communication strategy: use Message Center, Viva Engage, Teams posts to announce new capabilities.",
      "Pilot selection criteria: diverse roles, high willingness, deprioritize security-sensitive users initially."
    ]
  },
  {
    title: "Responsible AI",
    id: "responsible-ai",
    pointers: [
      "Six principles: Fairness &middot; Reliability &amp; Safety &middot; Privacy &amp; Security &middot; Inclusiveness &middot; Accountability &middot; Transparency.",
      "Transparency for Copilot = show source data, citations, prompt history, audit trail.",
      "Accountability = a human remains responsible for AI-driven actions.",
      "Microsoft implements RA through content safety, groundedness detection, data residency controls, and abuse monitoring.",
      "Fairness: LLM bias testing; Copilot uses system prompt + grounding to reduce biased outputs.",
      "Inclusiveness: Universal Design for Copilot UI; supports screen readers, keyboard navigation, high contrast.",
      "Privacy & Security: no training on tenant data; tenant boundary enforced by OAuth.",
      "Reliability & Safety: Copilot disengages if confidence in grounding is low; fallback to search results."
    ]
  },
  {
    title: "Hybrid identity (the three methods)",
    id: "hybrid-identity",
    pointers: [
      "PHS = hash of password hash synced; preferred by Microsoft; no on-prem dependency at sign-in.",
      "PTA = agent on DC validates credentials; supports AD-specific features (e.g. smartcards, local policies); agent must be reachable.",
      "Federation = redirect to on-prem ADFS or 3rd-party IdP; legacy; rich claims, immediate revocation.",
      "Entra Connect = full sync tool (forests, writeback, device sync, custom rules); Cloud Sync = lightweight agent, good for MER (Mergers, Acquisitions, Divestitures).",
      "Seamless SSO = transparent sign-in on domain-joined devices; works with PHS and PTA; no extra cost.",
      "Staged rollout = migrate users from Fed to PHS/PTA progressively; test before full cutover.",
      "Password Writeback = required for SSPR in hybrid; enables cloud password change to sync back to on-prem.",
      "Device Writeback and Group Writeback are Entra Connect features, not available in Cloud Sync.",
      "Entra Connect Health = monitoring dashboards for sync, AD FS, and AD domain controllers.",
      "Multiple forests: Entra Connect can sync up to 500K objects across many forests into one tenant."
    ]
  },
  {
    title: "Intune (quick)",
    id: "intune",
    pointers: [
      "Compliance policies = encryption, OS, AV, password, device health (e.g. jailbreak/root detected, TPM).",
      "App protection policies (MAM) = protect data in apps without enrolling the device (BYOD); block copy/paste, force save-as OneDrive, require PIN.",
      "Endpoint Analytics = device-health visibility with boot performance, app reliability, and Microsoft recommendation scores.",
      "Enrollment methods: Windows Autopilot (zero-touch), BYOD (Company Portal), Corporate (DEM with ConfigMgr).",
      "Configuration profiles = manage device settings (WiFi, VPN, email, restrictions, certificates, policies).",
      "Update rings = control Windows Update deferral periods (quality, feature, driver); enable expedited updates.",
      "Co-management with ConfigMgr = split workloads between Intune and on-prem; slider determines who manages which areas.",
      "Conditional Access with Intune compliance = allow access only to compliant devices; block non-compliant or non-enrolled."
    ]
  },
  {
    title: "Agent creation &amp; management",
    id: "agent-creation-management",
    pointers: [
      "Two creation paths: Copilot Studio (copilotstudio.microsoft.com) or inline in M365 Copilot Chat.",
      "Copilot Studio: Describe mode (NL description) → Configure mode (icon, instructions, knowledge, actions, topics).",
      "SharePoint agent = fastest path to a governed agent: site-scoped, permissions inherited, no Copilot Studio required.",
      "Up to 20 knowledge sources per agent; each file up to 512 MB.",
      "Test in Copilot Studio test pane; use Trace to view conversation transcript + reasoning steps.",
      "Copilot Studio supports versioning — revert to a previous version at any time.",
      "Agent sharing: specific users/groups (Entra ID), everyone in org, or external (public website).",
      "Security roles in Copilot Studio: User (chat), Editor (modify), Owner (full control).",
      "Approval workflow: admin center → Copilot → Agent inventory shows pending agents for approval.",
      "Governance: DLP for connectors, Managed environment, Sensitivity Label on agent data, Customer Lockbox.",
      "Agent lifecycle: Draft → Test → Publish → Operate → Retire.",
      "Monitor in M365 admin center → Copilot → Agent inventory (usage, owner, last activity, status).",
      "Copilot Studio analytics: per-agent success rate, escalation rate, session transcripts.",
      "Power Platform admin center: Dev/Test/Production environments, operational insights (errors, throttling).",
      "Purview DSPM for AI: detects risky prompts and sensitive data exposure involving agents.",
      "Autonomous agents require a trigger (event/schedule) and run hands-off without a user in the loop.",
      "Entra Agent ID (preview) = first-class identity for agents in Entra for governance, audit, and permissions.",
      "Prefer APIs and MCP over computer-use / GUI scripting for agent actions — UIs change, APIs are stable.",
      "Pre-built agents: Researcher (deep research), Analyst (data analysis), Writing Coach, Prompt Coach."
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
