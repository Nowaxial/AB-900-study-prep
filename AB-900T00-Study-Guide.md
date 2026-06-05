# AB-900 — Microsoft 365 Copilot and Agent Administration Fundamentals

A structured study guide built from Microsoft's **official study guide**, **two official learning paths**, and the **module-level learning objectives**.

> **Exam basics**
> - Passing score: **700**
> - Format: Multiple-choice, multi-select, scenario-based, drag-and-drop
> - Most questions cover features in **General Availability (GA)**; some Preview features may appear
> - 30 extra minutes available on request for non-English speakers

---

## Exam Weightings (Skills at a Glance)

| Domain | Weight |
|---|---|
| 1. Identify the core features and objects of Microsoft 365 services | **30–35%** |
| 2. Understand data protection and governance tasks for Microsoft 365 and Copilot | **35–40%** ← largest |
| 3. Perform basic administrative tasks for Copilot and agents | **25–30%** |

> Study priority: spend ~35–40% of your prep time on **Domain 2** (data protection & governance).

---

## Official Learning Path Roadmap (6 modules, 53 units)

Use this as your week-by-week study plan. Each module ends with a knowledge check.

### Learning Path 1 — Explore Microsoft 365 administration
- **Module 1: Explore Microsoft 365 security foundations** (10 units)
  1. Introduction
  2. Analyze the **Zero Trust** security model
  3. Implement Zero Trust in Microsoft 365
  4. Examine **threat protection and intelligence** in Microsoft 365
  5. Explore **identity and authentication** in Microsoft 365
  6. Manage **access and permissions** in Microsoft 365
  7. Explore **identity and access management in Microsoft Entra**
  8. **Troubleshoot and monitor** identity security
  9. Module assessment
  10. Summary

- **Module 2: Introduction to Microsoft 365 core services and admin controls** (8 units)
  1. Introduction
  2. Explore the **Microsoft 365 ecosystem** and core service components
  3. Explore the **Microsoft 365 admin center** and key admin tools
  4. Examine **Microsoft Exchange, Teams, and SharePoint**
  5. Establish **security, identity, and compliance foundations**
  6. Assign **admin roles using RBAC**
  7. Module assessment
  8. Summary

- **Module 3: Protect and govern Microsoft 365 data** (8 units)
  1. Introduction
  2. Introduction to **Microsoft Purview** and data governance
  3. **Identify and respond to data risks** with Microsoft Purview
  4. Examine **compliance, AI data discovery, and eDiscovery**
  5. Explore **oversharing and data access governance** in SharePoint
  6. Explore **data protection in Microsoft 365 Copilot**
  7. Module assessment
  8. Summary

### Learning Path 2 — Explore Microsoft 365 Copilot and Agent Administration
- **Module 4: Explore Microsoft 365 Copilot and agents** (9 units)
  1. Introduction
  2. Introduction to Microsoft 365 Copilot
  3. What are **agents**?
  4. Compare **Microsoft 365 Copilot and agents**
  5. Compare **Microsoft 365 Copilot licensing models**
  6. **Plan and deploy** Microsoft 365 Copilot and agents
  7. Explore **real-world use cases** for Copilot and agents
  8. Module assessment
  9. Summary

- **Module 5: Perform basic administrative tasks for Microsoft 365 Copilot** (8 units)
  1. Introduction
  2. **Manage Copilot licenses** and pay-as-you-go billing
  3. **Monitor and adjust** pay-as-you-go Copilot usage
  4. **Monitor Microsoft 365 Copilot** usage and adoption
  5. **Manage and govern** Microsoft 365 Copilot prompts
  6. **Apply operational best practices** for Microsoft 365 Copilot
  7. Module assessment
  8. Summary

- **Module 6: Perform basic administrative tasks for Microsoft 365 Copilot agents** (10 units)
  1. Introduction
  2. Create a **Microsoft 365 Copilot Chat agent — Part 1**
  3. Create a **Microsoft 365 Copilot Chat agent — Part 2**
  4. Create a **SharePoint agent**
  5. **Test and edit** your agents
  6. **Manage user access and permissions** for agents
  7. Examine **agent approval and governance**
  8. **Monitor and manage the agent lifecycle**
  9. Module assessment
  10. Summary

---

## How to Use This Guide

| Phase | Action | Time |
|---|---|---|
| 1. Concept Map | Skim the three domain headers | 10 min |
| 2. Deep Read | Work one Learning Path module per day | 6 × 90 min |
| 3. Drill | Use the **Key Concepts** box at the end of each domain as flashcards | 30 min/day |
| 4. Verify | Walk through the **Exam-Day Configuration Checklist** from memory | 45 min |
| 5. Review | Re-read weak areas 24 h before the exam | 60 min |

---

# DOMAIN 1 — Identify the core features and objects of Microsoft 365 services (30–35%)

Three sub-areas: (1.1) core objects, (1.2) security principles, (1.3) core security features.

## 1.1 Identify the core objects of Microsoft 365 services

### The Microsoft 365 ecosystem (Module 2, Unit 2)
Microsoft 365 brings together the major productivity and collaboration workloads **under one secure, cloud-connected environment**:

```
┌─────────────────── Microsoft 365 Tenant ───────────────────┐
│                                                            │
│  Identity (Entra ID) ──┬── Exchange Online (mail/cal)      │
│                        ├── SharePoint (sites/libraries)    │
│                        ├── OneDrive (personal storage)     │
│                        ├── Teams (chat/meetings/calling)   │
│                        ├── Power Platform (Power Apps,     │
│                        │    Automate, BI, Copilot Studio)  │
│                        ├── Microsoft 365 Apps (Office)     │
│                        └── Microsoft 365 Copilot (AI)      │
│                                                            │
│  Common services: security, compliance, governance         │
└────────────────────────────────────────────────────────────┘
```
Key idea: **all workloads share a common identity layer (Entra ID)** and a common compliance layer (Purview). Configuring one usually affects all.

### How license types affect access
- **License assignment controls feature access.** A user with an E3 license cannot use E5-only features (e.g., Defender for Cloud Apps, Power BI Pro, Phone System).
- Licenses are assigned to **users** or to **groups** (group-based licensing cascades to members).
- Removing a license immediately revokes access to features; data is preserved (grace behavior) for a period before the account is disabled.
- Service plans inside a license can be enabled/disabled individually (e.g., give a user E5 but disable Audio Conferencing).

### Microsoft 365 admin center — organization configuration
- **Domain names** — add and verify custom domains (e.g., `contoso.com`) before pointing MX/SPF/DKIM/DMARC records to M365.
- **Org settings** — release preferences, theme, contact info, privacy profile, customer lockbox, data location.
- **Key admin tools inside the M365 admin center** (Module 2, Unit 3):
  - **Users** — create, manage, reset passwords, assign roles.
  - **Groups** — security and Microsoft 365 groups, group-based licensing.
  - **Billing** — licenses, subscriptions, invoices, payment methods.
  - **Support** — open Microsoft tickets, see health advisories.
  - **Service Health** — tenant-wide incidents, planned maintenance, health history.
  - **Message Center** — official Microsoft communications, weekly digests, alert subscriptions.
  - **Reports** — adoption, usage, security/compliance score.
  - **Settings** — org-wide toggles (release preferences, marketplace, etc.).
  - **Setup** — guided checklists for first-time admins.
  - **Roles** — assign Entra ID admin roles (Global Admin, Exchange Admin, etc.).

### Exchange Online admin center — objects to configure
- **Mailboxes** — user mailboxes, shared mailboxes, resource mailboxes (rooms, equipment), Microsoft 365 group mailboxes.
- **Distribution lists** — non-mail-enabled or mail-enabled groups used to send email to many recipients.

### SharePoint in Microsoft 365 admin center — objects to configure
- **Sites** — communication sites, team sites (connected to Microsoft 365 groups).
- **Libraries** — document libraries within a site; each library is a container for files with versioning, metadata, columns, and views.
- **Folders** — sub-containers inside a library; can be used to organize content and apply unique permissions.

### SharePoint roles and permissions for sites
- **SharePoint Groups** (security principals inside a site): **Owners**, **Members**, **Visitors** — Owner = full control, Member = contribute, Visitor = read.
- **Permission levels** — Full Control, Design, Edit, Contribute, Read, Limited Access.
- **Sharing settings** — tenant-level (Anyone, New and existing guests, Existing guests, Only people in your organization) and site-level (Anyone with the link, Specific people, Organization).

### Teams admin center — objects to configure
- **Teams** — collections of people, content, and conversations tied to a Microsoft 365 group.
- **Channels** — **Standard** (open to all members) and **Private** (invitation-only). **Shared channels** allow cross-team collaboration.
- **Policies** — Messaging, Meeting, Live Event, Calling, App permission, App setup, Teams Phone, Teams Update management.

## 1.2 Understand the Microsoft 365 security principles

### Zero Trust (Module 1, Units 2–3)
| Principle | Meaning |
|---|---|
| **Verify explicitly** | Always authenticate and authorize using *all* available signals: identity, device, location, data sensitivity, anomaly detection. |
| **Least privilege** | Give users only the access they need, only when they need it (JIT, JEA). |
| **Assume breach** | Design as if the attacker is already inside. Segment, monitor, encrypt, verify continuously. |

**Implementing Zero Trust in M365** (Unit 3) translates to:
- Strong authentication (phishing-resistant MFA, especially for admins).
- Conditional Access policies for sign-in decisions.
- Layered protection (identity + endpoint + data + network + app + infra).
- Continuous monitoring and detection (Defender XDR, Sentinel, Entra ID Protection).
- User education and operational practices.

### Building a layered security strategy
Six layers of defense (from the official module):
1. **Assessment** — Microsoft Secure Score, Attack Simulator, Defender vulnerability reports.
2. **Identity protection** — Entra ID Protection, MFA, PIM, Conditional Access.
3. **Endpoint compliance** — Intune compliance policies, Defender for Endpoint, Windows Hello for Business.
4. **Data classification** — Sensitivity Labels, trainable classifiers, EDM, content markings.
5. **Threat monitoring** — Defender XDR unified incidents, Microsoft Sentinel, hunting queries.
6. **User education** — Attack Simulator phishing campaigns, security awareness training, change-communication plans.

### Threat protection and intelligence (Module 1, Unit 4)
- **Threat intelligence** — Microsoft Defender XDR correlates signals from identity, endpoints, email, and cloud apps to detect multi-stage attacks (kill-chain, MITRE ATT&CK mapping).
- **Threat protection** — capabilities in Defender for Identity, Defender for Office 365 (Safe Links, Safe Attachments, anti-phishing), Defender for Endpoint, Defender for Cloud Apps.
- **Identity threat detection** — Entra ID Protection flags risky sign-ins (anonymous IP, atypical travel, leaked credentials, password spray) and risky users (leaked credentials, threat intelligence).
- **Best practice** — review incidents weekly, tune alert rules, run attack simulations, and track Secure Score trends.

### Authorization
- **Conditional Access** — if/then policy engine in Entra ID. Example: *if* sign-in from untrusted network *then* require MFA + compliant device.
- **RBAC (Role-Based Access Control)** — built-in or custom roles (Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader, …). Module 2, Unit 6 focuses on **assigning admin roles with RBAC** to delegate permissions and responsibilities securely.
- **JIT (Just-In-Time) access** — role activation only when needed, for a bounded time, with approval — delivered through **PIM**.
- **JEA (Just Enough Administration)** — granular, task-scoped admin rights; the same least-privilege philosophy at the operations/PowerShell layer.

**Conditional Access — deeper building blocks** (often tested):
- **Targets** — users/groups (or agents), agents, cloud apps, Azure portal, the Microsoft Admin Portals, other resources. **Exclusions** are critical for break-glass accounts.
- **Conditions** — user risk, **sign-in risk** (from Identity Protection), insider risk, device platforms, locations, client apps, authentication flows.
- **Session controls** — sign-in frequency, persistent browser session, **continuous access evaluation**, conditional access app control (Defender for Cloud Apps), restriction of downloads / printing / clipboard for unmanaged devices.
- **Authentication strengths** — pre-built combos ("Multifactor authentication strength", "Phishing-resistant MFA strength") and custom (Windows Hello for Business, FIDO2/passkey, certificate-based). Required for high-value apps.
- **Global Secure Access client** — Microsoft's Security Service Edge (SSE) client that integrates with Conditional Access to govern access to private resources and internet destinations.
- **Common policies you'll see in exam scenarios**:
  - Require MFA for external access
  - Block unmanaged devices
  - Block legacy authentication
  - Restrict guest access
  - Enforce Terms of Use
  - Require MFA when accessing sensitive data from a personal device

### The six Zero Trust pillars (Microsoft framework)
| Pillar | What M365 enforces it with |
|---|---|
| **Identity** | Entra ID, passwordless, risk-based Conditional Access |
| **Endpoints** | Intune (compliance), Defender for Endpoint (behavioral detection), **Endpoint Analytics** (device health visibility) |
| **Applications** | Defender for Cloud Apps (shadow IT, session controls), **App Proxy** (secure access to on-prem apps without VPN) |
| **Data** | Purview Information Protection (labels, encryption), DLP |
| **Infrastructure** | **Defender for Cloud** (posture across **Azure, AWS, GCP**), **Azure Policy** (encryption, tagging, VM restrictions) |
| **Network** | **Azure Firewall**, **VPN Gateway**, Defender for Identity (segmentation, lateral-movement detection) |

### Authentication methods
- **MFA (Multi-Factor Authentication)** — at least two of: *something you know* (password), *something you have* (phone, token, passkey), *something you are* (biometric).
- **Phishing-resistant** methods (preferred, mandatory for admins):
  - **Passkeys (FIDO2 / WebAuthn)** — bound to a device or hardware key; the private key never leaves the device, so they cannot be phished.
  - **Windows Hello for Business** — replaces passwords with a PIN + biometric (face/fingerprint) tied to the device's TPM.
  - **Certificate-based authentication**.
- **Passwordless** — Authenticator app passwordless, Windows Hello, Passkeys.
- **Password** — only as a last resort, and **never** the only factor for admins.

### Microsoft Defender XDR
The unified eXtended Detection & Response suite that combines:
- **Defender for Identity** — on-premises AD signals (agents on DCs, AD FS, Connect servers)
- **Defender for Office 365** — email & collaboration (anti-phish, anti-malware, Safe Links, Safe Attachments, **Threat Explorer**, **Attack simulation training**)
- **Defender for Endpoint** — devices (EDR, anti-malware, attack surface reduction, automated investigations, **attack path tracking**)
- **Defender for Cloud Apps** — SaaS/CASB, shadow IT discovery, session policies
- **Defender for Cloud** (Azure workloads) — optional
- **Threat analytics** — a curated library of threat intelligence reports written by Microsoft security researchers.
- Unified portal at **https://security.microsoft.com** with **Incidents**, **Hunting**, **Action center**, **Secure Score**.

**Exam-relevant Defender for Office 365 details**:
- **Plan 1** vs **Plan 2** — Plan 2 is the version bundled in **M365 E5** and adds **Threat Explorer**, **Attack simulation training**, automated investigation & response (AIR), and campaign views.
- **Attack simulation training** — let admins run realistic phishing campaigns against users and turn failed clicks into instant training.
- **Specific capabilities the exam tests**:
  - **Spoof intelligence** — detects fake / impersonated senders (DMARC failures, lookalike domains).
  - **Impersonation protection** — flags lookalike senders targeting executives (e.g., "ce0@" instead of "ceo@").
  - **Safe Links** — rewrites URLs in incoming messages and **rescans them at click time** (not just delivery).
  - **Anti-malware** — multi-engine scanning across Exchange, SharePoint, OneDrive, Teams.
  - **Zero-hour Auto Purge (ZAP)** — **retroactively removes** malicious messages that already landed in mailboxes once a verdict changes.
  - **Attachment filtering** — blocks risky file types (`.exe`, `.js`, `.vbs`, …).
  - **Anti-spam & transport rules** — ML-based spam filtering, **custom mail flow rules** (e.g., block external mail with certain keywords), **quarantine policies**, connection filtering.

**Exam-relevant Defender for Endpoint details**:
- **Attack path tracking** — visualizes the chain *email → attachment → process → network → lateral movement → credentials on another machine*. Helps you understand how an incident actually unfolded.
- **EDR + antivirus + attack surface reduction + automated investigations** in one product.
- **Device isolation** — admins can remotely cut a compromised device off the network.

**Defender for Cloud Apps (CASB)**:
- Discovers **shadow IT** (which SaaS apps employees are actually using).
- **Session policies** — control what users can do inside a sanctioned app (block downloads, monitor activity).
- App governance — sanction / unsanction apps tenant-wide.

**Microsoft Sentinel**:
- Cloud-native **SIEM** (Security Information and Event Management) + **SOAR** (Security Orchestration, Automation, Response).
- Correlates signals from Defender XDR, Defender for Identity, third-party sources, Entra ID, and on-prem.
- **KQL hunting queries** to find threats; **analytic rules** to alert; **playbooks** (Logic Apps) to automate response.

**Microsoft Threat Intelligence Center (MSTIC)**:
- The team behind Microsoft's threat telemetry — **65+ trillion signals/day**, tracks nation-state actors, dark-web activity, and global campaigns.
- Feeds intelligence into Defender products in near real time.

**Defender for Cloud** (Infrastructure pillar):
- Assesses security posture across **Azure, AWS, and GCP** subscriptions.
- **Secure Score** recommendations across all three clouds.
- **Defender plans** (pay-per-resource) for servers, containers, storage, SQL, App Service, etc.

## 1.3 Identify the core security features of Microsoft 365 services

### Microsoft Entra (formerly Azure Active Directory)
The identity plane for all M365 services.
- **Entra ID** — cloud directory of users, groups, applications, service principals.
- **App registrations** — applications you build/own; you define the app's identity, secrets, and API permissions.
- **Enterprise applications** — applications integrated into your tenant (SaaS apps, custom apps, Microsoft-published apps) — you manage user assignments, SSO, and provisioning.
- **External Identities** — B2B guest access, B2C for customer-facing apps.

**Identity types in Entra**:
- **Person** — user identity (a digital persona for a human).
- **Application** — service principal, app registration, managed identity.
- **AI agent** — Microsoft's newer pattern; **Entra Agent ID** (preview at time of writing) gives agents their own identity so they can be governed, audited, and assigned their own permissions. Copilot Studio, M365 Copilot, Security Copilot, and Foundry agents can automatically receive an Entra Agent ID.

**Hybrid identity authentication methods** (you must know the three options):
| Method | How it works | Trade-offs |
|---|---|---|
| **Password Hash Sync (PHS)** | Hash of the on-prem password hash is synced to Entra; cloud auth happens directly. | **Preferred.** No on-prem dependency, works during outages, supports leaked-credential detection. |
| **Pass-Through Authentication (PTA)** | Entra forwards the auth request to a lightweight agent on a DC. | Requires on-prem AD reachable. Supports some AD-specific features (e.g., sign-in hours, certain lockout policies). |
| **Federation (AD FS)** | Entra redirects the user to on-prem AD FS which issues a SAML/OIDC token. | Heavy on-prem footprint (open ports, certificates, scale). Today, **federate cloud services with Entra instead of standing up your own federation** is the typical recommendation. |

### Conditional Access policies
- The **policy engine** for sign-in decisions. Considers: user/group, target resource, device platform, location, client app, sign-in risk.
- Example building blocks: *block legacy authentication*, *require MFA*, *require app protection policy*, *require compliant device*, *require approved client app*.
- Can use **named locations**, **filter for applications/insider risk**, **session controls** (sign-in frequency, persistent browser session, continuous access evaluation).

### Single Sign-On (SSO)
- **Purpose** — one set of credentials gives access to many apps; fewer passwords = lower phishing risk, fewer resets.
- **Benefits** — improved user experience, centralized access control, consistent MFA enforcement, easier offboarding.
- **Methods supported** — password-based SSO (seamless SSO), SAML, OpenID Connect/OAuth, header-based, linked.
- **Client-side brokers**:
  - On Windows: **Windows Hello for Business** transparently brokers SSO tokens to apps.
  - On phones: **Microsoft Authenticator app** acts as a **token broker** using the **Microsoft Authentication Library (MSAL)**, getting tokens for all the apps on the device seamlessly.
- **Federation-era best practice** — today, instead of deploying your own ADFS to federate third-party SaaS apps, **configure those apps to federate with Entra ID** and let Entra do the work.

### Security objects to use in an organization
- **Users** — security principals representing people or service accounts.
- **Groups** — security groups (for permissions) and Microsoft 365 groups (for collaboration).
- **Administrative units** — scoped management (e.g., a regional admin for a subset of users).

### Tools to troubleshoot common sign-in issues (Module 1, Unit 8)
- **MFA issues** — Microsoft Authenticator app, SSPR (self-service password reset), tenant MFA settings.
- **Conditional Access** — sign-in logs, "What If" tool to test a policy before applying it, Conditional Access Insights & Reporting workbook.
- **Risky sign-ins** — Entra ID Protection risk report, risky sign-ins blade, risk remediation (block / require MFA / require password change).
- **Other** — Self-Service Password Reset (SSPR), Azure AD sign-in logs (interactive + non-interactive), passwordless diagnostic.

**Common sign-in problem → fix matrix** (the exam loves these):
| Symptom | First check | Resolution |
|---|---|---|
| MFA failure (Authenticator) | Sign-in logs → exact failure reason | Re-register Authenticator; **fix device time drift** for TOTP codes |
| MFA failure (FIDO2) | Sign-in logs | Re-register the FIDO2 security key |
| Conditional Access denial | **What If** tool | Identify the blocking policy; confirm device compliance in Intune; remediate or update the device |
| Risky sign-in (impossible travel, unfamiliar IP, leaked credentials) | Identity Protection risk log | Reset password, force MFA, or block access |
| Location / IP block | Sign-in logs (IP, location) | Adjust Conditional Access policy; add temporary exception |
| Legacy authentication failure | Client version | Upgrade apps; **enable modern auth**; retire legacy protocols |

### Self-Service Password Reset (SSPR)
- Lets users reset (and sometimes unlock) their own password.
- Works for **cloud-only** accounts out of the box.
- Works for **hybrid** accounts only if **Password Writeback** is enabled in Entra Connect (writes the new password back to on-prem AD).
- Auth methods for SSPR: mobile app notification/code, email, mobile phone (SMS/voice), security questions.
- **Verified ID / Verifiable Credentials (preview)** — emerging flow where a user proves identity to a trusted third-party service with a government ID + selfie, receives a **decentralized identity** stored in a **digital wallet** (e.g., on the phone), and presents it back to Entra to recover the account without a human help-desk step.

### Identity Secure Score
- A **percentage score** showing how well your Entra ID tenant is configured against Microsoft's security best practices.
- Each **improvement action** has an impact score; the total achievable = 100%.
- **Interpret** — aim for the recommended target; high score = better identity posture; investigate regressions in score history.

### Audit logs (user and admin activity)
- **Entra ID audit logs** — every directory change (user created, role assigned, app registered).
- **Unified Audit Log (Microsoft Purview)** — every action across M365 workloads (email sent, file accessed, label applied, admin action). Default retention **180 days**; **Premium** = 1 year (requires E5/A5/G5).
- Tools to review: **Microsoft Purview → Audit**, **Entra admin center → Audit logs**, **M365 Admin Center → Audit logs**, **Microsoft 365 Defender → Hunting**.

### Privileged Identity Management (PIM)
- Provides **just-in-time** privileged access to Entra ID roles and Azure resource roles.
- **Eligible assignment** (default) — user must activate; requires approval/justification; time-bound.
- **Active assignment** — always-on (use only when needed, audit heavily).
- Activations produce a full **audit trail**; PIM alerts notify of unusual activations.

### App registrations and Enterprise apps
- **App registration** — the application's *definition* (object ID, app ID, credentials, API permissions, exposed APIs).
- **Enterprise app / Service principal** — the application's *instance* in a tenant (the on-the-ground identity used at runtime).
- Used for **SSO integration**, **API access to Microsoft Graph** (delegated or application permissions), and **custom agents / declarative agents** that need to call protected APIs.

## 1.4 Key Concepts
`License` · `Group-based licensing` · `Microsoft 365 admin center` · `Custom Domain` · `Mailbox` · `Distribution List` · `SharePoint Site` · `Library` · `Folder` · `Owner/Member/Visitor` · `Team` · `Channel` · `Teams Policy` · `Zero Trust` · `Layered Security` · `RBAC` · `JIT` · `JEA` · `PIM` · `Conditional Access` · `MFA` · `Passkeys (FIDO2)` · `Windows Hello for Business` · `Phishing-resistant` · `Threat Intelligence` · `Defender XDR` · `Defender for Identity` · `Defender for Office 365` · `Defender for Endpoint` · `Defender for Cloud Apps` · `Entra ID` · `App Registration` · `Enterprise App` · `Service Principal` · `SSO` · `SSPR` · `Risky Sign-in` · `Identity Secure Score` · `Microsoft Secure Score` · `Unified Audit Log` · `Audit Log` · `Attack Simulator` · `Intune compliance`

---

# DOMAIN 2 — Understand data protection and governance tasks for Microsoft 365 and Copilot (35–40%)

Four sub-areas: (2.1) Purview capabilities, (2.2) Copilot data security, (2.3) risk identification, (2.4) oversharing in SharePoint.

## 2.1 Understand Microsoft Purview

The unified compliance portal at **https://purview.microsoft.com**.

### Capabilities matrix

| Capability | Purpose |
|---|---|
| **Microsoft Purview Information Protection** | Discover, classify, label, and protect sensitive data — **Sensitivity Labels** travel with the content. |
| **Microsoft Purview Data Loss Prevention (DLP)** | Detect and **prevent** accidental sharing of sensitive data (PII, PHI, financial) across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps. |
| **Microsoft Purview Insider Risk Management** | Correlate signals (departing user + bulk download, off-hours activity, anomalous data movement) into risk scores and cases. |
| **Microsoft Purview Communication Compliance** | Monitor internal email and Teams chat for harassment, regulatory violations, conflicts of interest, and policy breaches. |
| **Microsoft Purview Data Security Posture Management (DSPM) for AI** | Discover, monitor, and govern the use of **AI services and Copilot activity** across the tenant. |
| **Microsoft Purview Data Lifecycle Management** | Govern the **lifecycle** of data — retention policies and retention labels, disposition reviews, records management. |
| **Microsoft Purview eDiscovery** | Search, hold, and export content for legal investigations. **Standard** in E3; **Premium** (E5) adds lawyer-client model, analytics, and review set tooling. |
| **Microsoft Purview Compliance Manager** | A centralized dashboard of compliance posture across regulations (ISO 27001, GDPR, NIST, HIPAA, …) with recommended improvement actions. |
| **Microsoft Purview Data Explorer** | A query tool for content metadata; lets you explore who accessed which items, label distribution, sensitive data locations. |
| **Microsoft Purview Activity Explorer** | Shows **user activities** on labeled content — view, modify, print, email, share. Core signal for DSPM and IRM investigations. |
| **Microsoft Purview Adaptive Protection** | Dynamically applies stricter **DLP** policies as a user's **insider-risk** score increases — bridges IRM and DLP so a high-risk user automatically gets the strictest data controls without an admin having to change anything. |

### Sensitivity labels
- **Use cases**:
  - **Confidential \ Highly Confidential** — restrict access to a specific group; encrypt with permission policy; add watermark.
  - **Public** — no restrictions; useful for explicit marking.
  - **Business \ General** — internal only; might apply visual marking.
  - **Regulatory** — automatically applied via auto-labeling for PII, financial, healthcare, etc.
- Apply in **Office apps, Outlook, SharePoint, OneDrive, Teams, Power BI**; **travels with the file** even when downloaded.
- **Auto-labeling** — Microsoft-managed (built-in) or custom policies detect and label based on content inspection.

### Data classification
- **Trainable classifiers** — machine-learning models that identify categories like *Resume*, *Source Code*, *HR*, *Finance* (built-in) and custom categories you train.
- **Sensitive Information Types (SITs)** — pattern matches (regex, checksum) for items like credit card, SSN, passport, IBAN.
- **Exact Data Match (EDM)** — match against a structured database of sensitive records (e.g., patient IDs).
- **Activity classification** — track which labels users apply and to what content.

### Data lifecycle management
- **Retention policy** — a tenant-level rule (e.g., "retain all Teams chat for 7 years then delete").
- **Retention label** — content-level (e.g., a label "Customer Records — 10 years" applied to files).
- **Archiving** — move inactive content to cheaper storage while keeping it discoverable (e.g., Exchange Online Archiving, SharePoint site archive).
- **Disposition review** — an approver confirms deletion before it happens.
- **Records management** declares items as immutable **records** that cannot be edited or deleted.

## 2.2 Understand data security implications of Copilot

### How Copilot accesses data
- **Microsoft 365 Copilot is grounded in your tenant's data** through Microsoft Graph.
- Copilot only retrieves content the **signed-in user is permitted to see**. Permissions travel with the data.
- Three retrieval layers: **Graph search** (permitted content), **Semantic Index** (pre-computed relationships), **LLM** (reasoning).
- The system prompt, conversation history, and grounding data are **not** used to train foundation models.

### How Microsoft Graph influences Copilot responses
- Every Copilot response is composed from Graph-grounded context — files, emails, chats, meetings, people.
- **Permission-aware** — Copilot respects SharePoint/OneDrive item-level permissions, Sensitivity Labels, mailbox delegation, Teams channel membership.
- If a user cannot access a document directly, **Copilot cannot surface its content to them** through another channel.
- Graph connectors extend the semantic index to **third-party data** (ServiceNow, Confluence, Salesforce, etc.), which is then fair game for Copilot grounding.

### How Copilot uses permissions and other controls to protect against risks
- **Microsoft 365** controls honored: SharePoint permissions, OneDrive sharing links, mailbox access, Teams channel membership, Sensitivity Label encryption.
- **Microsoft Purview** controls honored:
  - **Sensitivity Labels** — if a file is encrypted for "Finance group only", only Finance can have its content used.
  - **DLP** — DLP policy actions can block Copilot from pasting a sensitive number into a prompt or response.
  - **DSPM for AI** — surfaces risky prompts, overshared data sources, and prompt-injection patterns.
  - **Activity Explorer** — captures every Copilot action for audit.
- **Microsoft Defender** controls:
  - **Defender for Cloud Apps** session policies apply to Copilot actions in cloud apps.
  - **Defender XDR** incidents can include Copilot-sourced signals.
- **Customer Key** — customer-managed encryption keys apply to content Copilot retrieves.
- **Customer Lockbox** — Microsoft engineers require explicit tenant approval to access content.

### Responsible AI principles
- **Fairness** — Copilot should work consistently for all users, languages, and contexts.
- **Reliability and safety** — outputs are designed to be testable; Copilot refuses harmful content.
- **Privacy and security** — tenant data stays in your boundary, permissions are honored, actions are auditable.
- **Inclusiveness** — accessible to people with disabilities (screen reader support, high-contrast, etc.).
- **Accountability** — humans remain accountable; Copilot is an assistant, not a decision-maker.
- **Transparency** — Microsoft publishes documentation about how Copilot works, the data it uses, and its limits.

## 2.3 Identify data protection and governance risks for Microsoft 365 and Copilot

| Tool | Use to identify… |
|---|---|
| **Microsoft Purview Compliance Manager** | Compliance posture gaps and improvement actions mapped to regulations (GDPR, ISO 27001, NIST 800-53, HIPAA, …). |
| **Microsoft Purview Data Explorer** | Where sensitive data lives, which sites/libraries/mailboxes contain it, label distribution. |
| **Microsoft Purview Insider Risk Management** | Risky user behavior — bulk download, off-hours activity, departing user + download pattern, security policy violations. |
| **Microsoft Purview DLP alerts** | When a DLP policy is triggered — who did what, with which item, on which service, and the policy's response. |
| **Microsoft Purview Communication Compliance** | Policy violations in email and Teams — harassment, profanity, regulatory concerns, sensitive info leaks. |
| **Microsoft Purview Activity Explorer** | Per-user, per-file activity on labeled content — view, modify, share, email, print. |
| **Microsoft Purview DSPM for AI** | Discovery and governance of AI activity — risky prompts, sensitive data flowing into AI, prompt-injection attempts. |
| **Microsoft Purview eDiscovery — Content Search** | Search for files and emails by keyword, sender, recipient, label, date, location. Export results for legal review. |
| **Microsoft Purview Audit** | Unified audit log — every action across workloads, default 180 days (1 year with E5). |

> Exam tip: when a question asks **"how do I find every file labeled Confidential that a user accessed last month?"** → **Activity Explorer**.

## 2.4 Identify and monitor oversharing in SharePoint in Microsoft 365

### Tools to troubleshoot oversharing
- **SharePoint Advanced Management** — the umbrella capability.
- **Data access governance reports** — surface sites, libraries, and files that are broadly shared.
- **Microsoft Purview DSPM for AI** — flags sites feeding too much data into Copilot without restriction.
- **SharePoint admin center → Reports** — sharing summary, file activity, sharing links inventory.

### Run a data access governance report
1. Go to **SharePoint admin center** (or **https://aka.ms/spoda**).
2. Open **Reports** → **Data access governance**.
3. Select a site or run across all sites.
4. The report shows: **broken inheritance**, **access requests**, **external sharing**, **Anyone links**, **label distribution**, **sensitivity label violations**.
5. Use the report to drive remediation: tighten sharing, apply labels, restrict access, or move to a private channel.

### SharePoint Advanced Management (key features)
- **Restricted Site Access** — limit content visibility to a specified Entra ID group, even if users have access to the parent site.
- **Oversharing reports / Permission site report** — see what's been shared too broadly; lets a site owner do a **site access review** to validate who really needs access.
- **Conditional access for SharePoint sites** — block access from unmanaged devices.
- **Inactive site lifecycle** — auto-archive or delete inactive sites.
- **Change history** — see who changed permissions.
- **Site ownership policy** — enforces a minimum number of owners (e.g., **at least 2**) on every site.
- **Restricted content discovery (site level)** — opt a site out of being indexed and used as Copilot / Semantic Index ground. The site is still browseable by its existing members, but Copilot won't include its content in answers.
- **Restricted SharePoint Search** — tenant-level, restricts Copilot's grounding to a hand-picked allow-list of up to **100 sites** (hub sites and their child sites are not counted toward the 100). Useful while you clean up permissions.

## 2.5 Key Concepts
`Purview Information Protection` · `Sensitivity Label` · `Auto-labeling` · `DLP` · `DLP Alert` · `Insider Risk Management` · `Communication Compliance` · `DSPM for AI` · `Data Lifecycle Management` · `Retention Policy` · `Retention Label` · `Disposition Review` · `Records Management` · `Archiving` · `Compliance Manager` · `Data Explorer` · `Activity Explorer` · `Content Search` · `eDiscovery Standard` · `eDiscovery Premium` · `Trainable Classifier` · `Sensitive Information Type` · `EDM` · `Graph` · `Semantic Index` · `Grounding` · `Customer Key` · `Customer Lockbox` · `Responsible AI` · `Fairness` · `Reliability` · `Privacy` · `Inclusiveness` · `Accountability` · `Transparency` · `SharePoint Advanced Management` · `Restricted Site Access` · `Data Access Governance Report` · `Oversharing`

---

# DOMAIN 3 — Perform basic administrative tasks for Copilot and agents (25–30%)

Three sub-areas: (3.1) features and capabilities, (3.2) Copilot administration, (3.3) agent administration.

## 3.1 Understand features and capabilities of Copilot and agents

### Microsoft 365 Copilot architecture (Module 4, Unit 2)
- **LLM** — the model that produces natural language by predicting the next most probable *token*.
- **Microsoft Graph** — the data + permissions layer (retrieves permitted content via Microsoft Graph APIs).
- **Semantic Index** — pre-computed relationships across users, content, and concepts. Sits on top of Graph so natural-language queries return contextually relevant results.
- **Orchestrator / Copilot system** — coordinates the prompt, retrieval, and response. Adds a **system prompt** to instruct the LLM on tone, format, and behavior.
- **Content safety** — filters both prompt and response for harmful or offensive content.
- **Groundedness detection** — flags answers that are not supported by the retrieved grounding data (hallucination control).
- **Apps** — Word, Excel, PowerPoint, Outlook, OneNote, Teams, Business Chat (now **Microsoft 365 Copilot Chat**).
- **Microsoft 365 Copilot Chat** — the free / built-in chat surface available to all Entra users (web-grounded only); **Microsoft 365 Copilot** is the paid licensed version that adds work-grounded answers via Graph.

> **No training on your data**: prompts, responses, and tenant data are never used to train the foundation LLMs.

### Compare the built-in capabilities of Copilot and agents
| Capability | Microsoft 365 Copilot | Agents |
|---|---|---|
| **Scope** | General assistant across M365 | Scoped to a specific role/task |
| **Built-in** | Yes (Word, Excel, PPT, Outlook, Teams, …) | **Pre-built** (Researcher, Analyst, …) or **Custom** |
| **Grounding** | Microsoft Graph + Semantic Index | Same, plus knowledge sources you specify |
| **Autonomy** | Reactive to user prompts | Can run **autonomously**, multi-step, on a schedule or trigger |
| **Customization** | Limited (prompts only) | Configurable in Copilot Studio: knowledge, actions, instructions, rules |

### What are agents? (Module 4, Unit 3)
- Specialized AI assistants built on top of Copilot that perform a specific job.
- **Types**:
  - **Prebuilt agents** — Researcher, Analyst, plus Microsoft-authored agents in the Agent Store (e.g., Writing Coach, Prompt Coach).
  - **Custom agents** — built in Copilot Studio or via declarative manifest.
  - **SharePoint agents** — scoped to a single site, no authoring required.
  - **Advanced / custom engine agents** — full control via **Azure AI Foundry** + Teams (pro-code, VS Code-style development).

**Agent identity**:
- Agents typically need **their own identity** because they often operate across data the calling user may not see (or across many users at once).
- Historically: a special service account (for Azure resources) or managed identity.
- **New: Entra Agent ID (preview)** — Microsoft now gives agents their own first-class identity in Entra so they can be governed, audited, and assigned their own permissions. Automatically assigned to agents created in Copilot Studio, M365 Copilot, Security Copilot, and Foundry.

**MCP (Model Context Protocol)**:
- An open standard for AI apps to talk to **additional knowledge** and **tools** in a way LLMs understand natively.
- When designing agents, **prefer APIs and MCP servers** over **computer-use / GUI scripting** — the UI can change and break computer-use agents, whereas APIs/MCPs are stable and auditable.

### License model: monthly vs pay-as-you-go (incl. SharePoint) — Module 4, Unit 5
- **Microsoft 365 Copilot monthly license** — **per-user**, predictable, ~**$30 USD/user/month**, attached to a user.
- **Pay-as-you-go** — metered consumption billed through an **Azure subscription**; available for **Copilot Studio messages** and **SharePoint** (Copilot on SharePoint sites can be billed per message).
- Choose **PAYG** when usage is variable; choose **per-user** when usage is high and predictable.
- You can also purchase **Copilot Credit Packs** for burst capacity (pre-paid Copilot Studio messages).
- **Copilot Chat (free)** — web-grounded only, no Microsoft Graph / work data.
- **M365 Copilot Chat (paid)** — adds work-grounded answers on top of Copilot Chat.
- **Copilot Studio** — separate licensing; can be bought as credit packs or PAYG.
- **Copilot for personal/family** plans — gets you in-app agent capabilities, but **not** grounded in work data.

**Plan family notes the exam loves**:
- **M365 Business** plans (Basic, Standard, Premium) — capped at **300 users**, lack **Purview** and **Insider Risk Management** features that the E3/E5 plans include.
- **M365 E3 / E5** — enterprise plans; E5 unlocks the **Plan 2** Defender for Office 365 (Threat Explorer, Attack simulation training) and full Purview.
- **M365 E5 Compliance** and **E5 Security** add-ons — can be stacked on E3 to get just the compliance or security pieces.
- **Office E3/E5** + Copilot add-on — alternative path for orgs that don't want the full M365 suite.

**PAYG billing in Azure**:
- The PAYG resource is hidden in the Azure portal by default — switch the view to "show hidden" to find it.
- You can apply **Azure budgets**, **cost analysis**, **cost alerts**, and **spend thresholds** because the consumption is just an Azure meter.

### Plan and deploy Copilot and agents (Module 4, Unit 6)
**Readiness checklist** (apply before broad rollout):
- **Identity & access** — Entra ID healthy; Conditional Access + phishing-resistant MFA for admins.
- **Content** — run oversharing reports; clean up broad links; apply Sensitivity Labels.
- **Licenses** — Copilot licenses purchased; Power Platform / Azure subscription for PAYG.
- **Data security** — Purview DLP and DSPM for AI enabled; Customer Lockbox configured.
- **Adoption strategy** — pilot group, training, champion network, feedback channel (Forms or Teams), exec sponsorship.
- **Phased rollout**: **Pilot → Evaluate → Expand → Optimize**.
- **Connectors** — approve Graph connectors you intend to ground against.
- **Network** — Copilot endpoints reachable; no proxy blocks for required APIs.
- **Change management** — user comms plan, champion network, training schedule, feedback channel.

**Phased rollout**:
- **Pilot** — 10–20 power users, IT team, a single workload.
- **Evaluate** — Copilot Analytics, Adoption Score, feedback survey, sensitive data exposure.
- **Expand** — broader business unit, more workloads, more agents.
- **Optimize** — tune policies, retire blockers, share best prompts.

### Real-world use cases for Copilot and agents (Module 4, Unit 7)
- **Researcher agent** — multi-step research with citations across the web and your tenant.
- **Analyst agent** — turn raw data (Excel, CSVs) into insights, run Python-style reasoning.
- **HR FAQ agent** (SharePoint agent) — answers employee questions from the HR handbook.
- **IT helpdesk agent** — triages tickets, suggests known solutions.
- **Sales deal-summary agent** — pulls the latest CRM + email + meeting notes into a one-pager.
- **Customer service copilot** — drafts replies grounded by knowledge base + ticket history.
- **Onboarding agent** — creates accounts, sends welcome emails, schedules orientation.
- **Project "ask me anything" agent** — scoped to a single SharePoint project site.

### Which Copilot features can be enabled or disabled
- **Tenant-level controls** (Microsoft 365 admin center → Copilot settings):
  - **Web content access** — Off / On (with or without Bing grounding).
  - **Plugin / connector controls** — block or allow specific plugins tenant-wide.
  - **Per-app enablement** — disable Copilot in specific apps (Word, Excel, Outlook, Teams, etc.).
  - **Data security** integration with Purview.
- **Per-user** — controlled by license assignment (no license → no access).
- **Per-content** — Sensitivity Labels can prevent Copilot from using labeled content.

### Use cases for Researcher
- **Deep research** — multi-step web + work research, planning, citations.
- Tasks: *compile a market analysis with citations from my files and the web*, *draft a competitive landscape report*.

### Use cases for Analyst
- **Data analysis** — turns raw data (Excel, tables, CSVs) into insights; runs Python-style reasoning.
- Tasks: *summarize this sales table by region*, *forecast next quarter's revenue*, *find anomalies in this log*.

### Use cases for custom agents
- **Department-specific** — HR FAQ agent that pulls from a SharePoint handbook.
- **Process automation** — onboarding agent that creates accounts, sends welcome emails, schedules orientation.
- **Knowledge surface** — a SharePoint site agent that answers questions about a single project.
- **Customer/partner-facing** — a public agent embedded on a website.

## 3.2 Perform basic administrative tasks for Copilot (Module 5)

### Manage Copilot licenses and pay-as-you-go billing
1. **Microsoft 365 admin center** → **Billing** → **Licenses** → assign **Microsoft 365 Copilot** to users or groups.
2. Verify prerequisites per user: **Copilot license + active Exchange mailbox + OneDrive provisioned + Microsoft Search healthy**.
3. For **PAYG**: Microsoft 365 admin center → **Copilot** → **Billing & usage** → select the **Azure subscription** that will be charged.
4. Set **budget limits** to prevent runaway spend.

### Monitor and adjust pay-as-you-go Copilot usage
- Open **Copilot** → **Billing & usage** in the admin center.
- Inspect **metered consumption** by workload (Copilot Studio, SharePoint, etc.).
- **Adjust** by:
  - Switching users from PAYG to per-user licenses (when usage is consistently high).
  - Tightening DLP policies on connectors (when usage is high-risk).
  - Switching from PAYG to **Credit Packs** (when usage is spiky).
  - Disabling specific Copilot features that drive cost (web grounding, plugins).

### Monitor Microsoft 365 Copilot usage and adoption
- **Microsoft 365 admin center → Reports → Copilot dashboard** — license utilization, active users, top prompts, top apps used.
- **Copilot Analytics** (under Reports) — adoption score, prompt quality, prompt-injection attempts surfaced by DSPM for AI.
- **Viva Insights** — workplace analytics view including Copilot usage.
- **Microsoft Purview → Activity Explorer** — per-user AI activity (view, copy, paste) on labeled content.
- **Adoption strategy**: identify champions, share prompt libraries, track department-level adoption, run lunch-and-learns.

### Manage and govern Microsoft 365 Copilot prompts
Prompts in Copilot can be:
- **Saved** — bookmark useful prompts for reuse (per user, in the Copilot chat panel).
- **Shared** — distribute a prompt template to teammates (where the app supports it).
- **Scheduled** — trigger a prompt to run on a schedule and deliver a result (e.g., daily summary email).
- **Deleted** — remove a saved prompt from the user's library.
- **Governed** — admin-published shared prompt libraries appear alongside user prompts.

> Admin note: prompts are tied to the user; admins do not directly edit a user's saved prompts but can **delete** user-level prompts in some workloads, and can **publish** shared prompt templates via channels.

### Apply operational best practices for Microsoft 365 Copilot (Module 5, Unit 6)
- **Troubleshoot common issues**:
  - User can't see Copilot → check license, app enablement, region rollout, Microsoft 365 app version.
  - Copilot returns no content → check Graph permissions, Sensitivity Label encryption, broken Search index, restricted content discovery, restricted SharePoint search.
  - Slow responses → check tenant health, network egress, Microsoft 365 service health.
- **Communicate changes to end users**:
  - Pre-launch emails with "what to expect" + screenshots.
  - Champion network / early adopters for peer support.
  - "Prompt of the week" communications.
  - Feedback channel (Forms or Teams) feeding back into Copilot Analytics.
- **Operational excellence**:
  - Track Secure Score and Identity Secure Score trends.
  - Run Attack Simulator phishing campaigns quarterly.
  - Review DLP and IRM alerts weekly.
  - Audit admin role assignments with **Access Reviews** (Entra ID Governance).
  - **Reclaim underused Copilot licenses** — identify users with a license but low usage in Copilot Analytics and reassign the license to someone else.
- **Adoption strategy**:
  - Tenant-level toggles are blunt — **prefer group-level enablement** to run a clean **pilot** first.
  - Pair rollout with training, exec sponsorship, and a feedback loop.
  - Publish a "Prompt of the week" and a shared prompt library.
  - Use **Copilot Analytics** (in the admin center) and **Viva Insights → Copilot Analytics** for adoption KPIs.

## 3.3 Perform basic administrative tasks for agents (Module 6)

### Create a Microsoft 365 Copilot Chat agent (Part 1 & Part 2)
**Path A — from Copilot Studio** (https://copilotstudio.microsoft.com):
1. **Create** → **New agent** (or start from a **template** — Copilot Studio offers templates for common agent types).
2. **Describe mode** — natural-language description: name, purpose, tone, audience. Copilot Studio works out the rest for you.
3. **Configure mode** — set:
   - **Icon, name, description**.
   - **Instructions and Rules** — system prompt with tone, what the agent should do, hard rules/guardrails.
   - **Knowledge sources** — up to **20** sources (public websites, SharePoint sites, Dataverse, Dynamics 365, Fabric, uploaded files **up to 512 MB each**). The agent respects your existing **sensitivity labels** and lets you restrict what it may use.
   - **Web access toggle** — whether the agent may also use **Bing** for additional context.
   - **Suggested prompts** — pre-built prompts surfaced to the user.
   - **Actions / Tools** (Power Automate flows) — call APIs, write to Dataverse, create tickets.
   - **Topics** (intents the agent recognizes).
   - **Authentication** (Entra ID, anonymous, or per-user).
4. **Test** in the built-in chat panel (Test pane) at any time.
5. **Edit** responses, intents, triggers, knowledge, and actions as needed.
6. **Publish** to Microsoft 365 Copilot, Teams, or a custom website.

> **Autonomous agents** require a **trigger** (e.g., email received, schedule) and a clear set of instructions — they execute without a user in the loop.

**Path B — Microsoft 365 Copilot Chat directly** (Module 6, Units 2–3):
1. Open **https://copilot.cloud.microsoft** or the **Copilot Chat** surface in Teams/Outlook.
2. Click the **Create an agent** / **Copilot Studio** entry point.
3. Walk through the same Describe/Configure flow inline.
4. Save as draft or publish.

### Create a SharePoint agent (Module 6, Unit 4)
1. Navigate to a **SharePoint site**.
2. Click **New → Agent** (or use the Copilot entry point in the site command bar).
3. The agent is **scoped to one site or library** (principle of least privilege).
4. Choose **data sources** (files, pages, lists within the site).
5. Set **access permissions** — inherit from SharePoint (the agent can only see what the user can see).
6. **Name**, **icon**, and **description** the agent.
7. **Publish** — the agent appears in SharePoint and in Microsoft 365 Copilot for users with access.

> Exam tip: A SharePoint agent is the **fastest path** to a working, governed agent — no Copilot Studio required, permissions inherited automatically.

### Test and edit your agents (Module 6, Unit 5)
- **Test in the Copilot Studio test pane** — send prompts, validate responses, check knowledge retrieval and tool invocations.
- **Trace** — view the **conversation transcript** with reasoning steps and the documents/tools used.
- **Topic editing** — adjust intents, trigger phrases, and fallback behavior.
- **Knowledge tuning** — add/remove sources, set per-source priority, filter by URL.
- **Action editing** — modify Power Automate flow parameters, error handling, and authentication.
- **User simulator** — run scripted test scenarios against the agent.
- **Versioning** — Copilot Studio keeps a version history; you can revert.

### Manage user access and permissions for agents (Module 6, Unit 6)
- **Tenant-level** — Microsoft 365 admin center → **Settings → Copilot → Agents** (or Power Platform admin center for Copilot Studio agents).
- **Per-agent** — in **Copilot Studio**, share a published agent with:
  - **Specific users / groups** (Entra ID security groups or Microsoft 365 groups).
  - **Everyone in the organization** (publish to the M365 Copilot agent store).
  - **External** — public website, authenticated or anonymous.
- **Security roles in Copilot Studio** — User (can chat), Owner (full control), Editor (modify without owning).
- **Channel-by-channel** — separate sharing for Teams, Microsoft 365 Copilot, and web embed.
- **Power Platform** — environment-level access controls (DLP policies, environment security groups).

### Examine agent approval and governance (Module 6, Unit 7)
- **Microsoft 365 admin center** → **Copilot** → **Agent inventory** shows pending agents and the approval workflow.
- **Power Platform admin center** → **Agents** shows Copilot Studio agents and their distribution status.
- When an agent is created with a new **connector**, the connector may need to be classified (Business, Non-business, Blocked) and the agent may need DLP-policy review.
- **Governance policies** to apply:
  - **DLP for connectors** — block or allow connectors per environment.
  - **Managed environment** — restrict who can create apps/agents.
  - **Agent Store curation** — admin controls which prebuilt agents are available.
  - **Sensitivity Label** the agent's instructions/data.
  - **Customer Lockbox** for Microsoft access to agent data.

### Monitor and manage the agent lifecycle (Module 6, Unit 8)
- **Microsoft 365 admin center → Copilot → Agent inventory** — list of agents in the tenant, owner, usage, last activity, lifecycle status.
- **Copilot Studio analytics** — per-agent usage, success rate, escalation rate, session transcripts (with privacy controls).
- **Power Platform admin center** — agent lifecycle (create / publish / disable / delete), **operational insights** (errors, throttling, message volume), and **environment management** (Dev/Test/Production).
- **Microsoft Purview → DSPM for AI** — risky prompts, sensitive data exposure, prompt-injection incidents involving agents.
- **Lifecycle stages**:
  1. **Draft** — author in Copilot Studio.
  2. **Test** — internal validation with the test pane and user simulator.
  3. **Publish** — make available to a target audience.
  4. **Operate** — monitor usage, errors, cost, satisfaction.
  5. **Retire** — disable, archive, or delete; revoke access; export conversation logs if needed.

## 3.4 Key Concepts
`Microsoft 365 Copilot` · `Microsoft 365 Copilot Chat` · `Copilot Studio` · `Pre-built Agent` · `Custom Agent` · `Researcher` · `Analyst` · `Per-user license` · `Pay-as-you-go (PAYG)` · `Credit Packs` · `Azure subscription` · `Web content access` · `Plugin control` · `Per-app enablement` · `Copilot Analytics` · `Copilot Dashboard` · `Viva Insights` · `Adoption Score` · `Prompt` · `Saved prompt` · `Shared prompt` · `Scheduled prompt` · `Champion network` · `Agent inventory` · `Approval workflow` · `Agent lifecycle` · `Operational insights` · `Power Platform admin center` · `Connector classification` · `DLP policy for agents` · `Describe mode` · `Configure mode` · `Knowledge source` · `SharePoint agent` · `Tenant-level vs per-agent sharing` · `Test pane` · `Versioning` · `User simulator` · `MCP` · `Entra Agent ID` · `Work IQ` · `Foundry` · `Content Safety` · `Groundedness Detection` · `Hallucination` · `512 MB file limit` · `Business plan 300-user cap` · `Pilot`

---

# Supplemental Notes — John Savill's AB-900 Study Cram

These condensed highlights come from John Savill's *AB-900 Study Cram* on YouTube. They reinforce the official curriculum and surface details that often show up on the exam.

## S.1 Zero Trust & identity (recap with key phrasing)
- **Zero Trust is not a product** — no single toggle or SKU turns it on. It's a *combination* of policies, processes, and configurations.
- **Authentication = proving who you are** (n factor). **Authorization = what you're allowed to do** (z factor). The exam uses this n/z shorthand.
- **MFA** needs 2+ of: something you *know* (password/PIN), *have* (phone, FIDO key), or *are* (biometric).
- A **passkey is still 2 factors**: the device (something you have) + PIN/biometric (something you know/are).
- Passkeys are **phishing-resistant** because they only work against the exact domain they were issued for and require physical proximity (Bluetooth/NFC) when on a phone.

## S.2 Conditional Access
- **Authentication strengths** (built-in: "Multifactor", "Phishing-resistant MFA") can be required per app — common for high-value apps.
- Use **session controls** (sign-in frequency, continuous access evaluation) to *continuously* validate, not just at sign-in.
- **Global Secure Access client** is Microsoft's SSE client and integrates with Conditional Access for private-resource and internet access.
- Use the **"What If"** tool in Entra to test a CA policy *before* turning it on.

## S.3 Identity & Entra ID
- **Three hybrid auth options** (know the trade-offs):
  - **Password Hash Sync (PHS)** — *preferred*; no on-prem dependency; supports leaked-credential detection.
  - **Pass-Through Authentication (PTA)** — DC must be reachable; some AD-specific features.
  - **Federation (AD FS)** — heavy on-prem footprint; today prefer to federate SaaS apps *with* Entra.
- **SSPR for hybrid** requires **Password Writeback** in Entra Connect.
- **Verified ID / Verifiable Credentials (preview)** — decentralized identity stored in a digital wallet; lets a user re-prove identity to Entra after losing their password.
- **Dynamic groups** — rule-based membership (e.g., `department = Sales`). Cleans up "lingering permissions" automatically.
- **Microsoft 365 groups** = collaboration (mailbox, calendar, SharePoint library).
- **Mail-enabled security groups** = security group that also accepts email.
- **Distribution lists** can only be created in the M365 admin portal (not Entra).

## S.4 Defender XDR — exam pearls
- **Defender for Office 365 Plan 2** ships with **M365 E5** and unlocks **Threat Explorer** and **Attack simulation training**.
- **Attack path tracking** in Defender for Endpoint shows the kill chain visually (email → click → process → lateral movement → credentials).
- **Threat analytics** — Microsoft-curated threat-intelligence reports.
- **Attack simulation training** — run phishing simulations and convert failures into instant training.

## S.5 Purview
- **Adaptive Protection** — automatically tightens DLP policies as Insider Risk score rises. The bridge between IRM and DLP.
- **DLP can target Copilots** — block Copilot from using data labeled "Highly Confidential".
- **DSPM for AI** — captures AI prompts and responses, lets you see Copilot interactions for the last 30 days in Activity Explorer, and detects **shadow AI** (non-corporate AI services).
- **Restricted content discovery** = site-level opt-out of Copilot grounding (members still see it, Copilot doesn't).
- **Restricted SharePoint Search** = tenant-level, up to 100 sites; hub sites + children don't count toward the 100. While you clean up, restrict Copilot to a hand-picked allow-list.

## S.6 AI architecture — what to say out loud
1. **User enters prompt**.
2. **Copilot orchestrator** decides if it needs more info.
3. **Microsoft Graph + Semantic Index** retrieve permitted content (RAG).
4. **System prompt + grounding data** go to the **LLM**.
5. **Content safety + groundedness detection** check the response.
6. **Response goes back to the user**.
7. **No training** of the LLM happens on your prompts, responses, or data.

## S.7 Agents — exam pearls
- **Pre-built**: Researcher (deep research), Analyst (data), Writing Coach, Prompt Coach, SharePoint site agent.
- **Custom**: Copilot Studio (low-code) or VS Code + Foundry (pro-code).
- **Prefer APIs and MCP** over **computer-use / GUI scripting** for agents — GUIs change.
- **Templates** are available in Copilot Studio — you don't have to start blank.
- **Files in knowledge** — up to **512 MB each**.
- **Up to 20 knowledge sources** per agent.
- **Autonomous agents** have a **trigger** (event or schedule) and run hands-off.
- **Entra Agent ID (preview)** — agents get their own Entra identity for governance and audit.
- **Approval workflow** — admins can require new agents to be approved before publishing tenant-wide.

## S.8 Adoption & licensing tips
- **Group-level Copilot settings** beat tenant-level toggles — easier to run a clean pilot.
- **Pilot → Evaluate → Expand → Optimize**.
- Use **Copilot Analytics** (admin center) and **Viva Insights → Copilot Analytics** for adoption KPIs.
- **Reclaim underused licenses** — reassign Copilot from inactive users to power users.
- **Copilot Chat (free)** — web-grounded only; **Copilot Chat paid** = M365 work-grounded.
- **Business plans cap at 300 users** and **lack Purview + IRM**.
- **PAYG** bills against an **Azure subscription** — use **Azure budgets + alerts** to control spend.

---

# Supplemental Notes — Classmate's OneNote (Rickard's summaries)

Highlights from a classmate's structured OneNote summaries. Filled in detail that complements the John Savill section.

## C.1 Six Zero Trust pillars in Microsoft 365

| Pillar | Tools in M365 |
|---|---|
| **Identity** | Entra ID (centralized identity, passwordless, risk-based Conditional Access) |
| **Endpoints** | Intune (compliance), Defender for Endpoint (behavioral threat detection), **Endpoint Analytics** (device-health visibility) |
| **Applications** | Defender for Cloud Apps (shadow IT, session controls), **App Proxy** (secure access to on-prem apps without exposing them to the internet) |
| **Data** | Purview Information Protection (labels, encryption), DLP (Exchange/SharePoint/OneDrive/Teams) |
| **Infrastructure** | **Defender for Cloud** (assesses posture across **Azure, AWS, and GCP**), **Azure Policy** (encryption, tagging, VM restrictions) |
| **Network** | **Azure Firewall**, **VPN Gateway**, Defender for Identity (segmentation, lateral-movement detection) |

> Exam tip: a question mentioning **"Defender for Cloud + AWS"** or **"Azure Policy for encryption enforcement"** is the Infrastructure pillar.

## C.2 Six phases of Zero Trust implementation

1. **Assess posture** — Microsoft **Secure Score**, Purview Compliance Manager.
2. **Identity protection** — Conditional Access, risk-based authentication, **identity governance** (access reviews, entitlement management, temporary access).
3. **Endpoint compliance** — Intune compliance policies, **app protection policies** (BYOD: block copy/paste, local saves, rooted-device blocks), Endpoint Analytics.
4. **Classify & protect data** — sensitivity labels, DLP, incident monitoring.
5. **Monitor & respond** — Defender for Endpoint (auto-isolate compromised devices), **Microsoft Sentinel** (SIEM that correlates events across systems and automates responses), Defender for Identity (Pass-the-Hash, lateral movement).
6. **Educate users** — **attack simulation training** (phishing sims + user-specific training), security awareness campaigns, **role-specific training** (Finance, Developers, etc.).

## C.3 Microsoft Threat Intelligence Center (MSTIC) & threat intel
- **MSTIC** is the team behind Microsoft's threat telemetry — **65+ trillion signals/day**, tracking nation-state actors, dark-web activity, and global campaigns.
- **Threat Explorer** (real-time email-threat investigation): pivot by **sender, URL, file hash**, view user impact, immediate remediation (delete messages, block senders). Part of Defender for Office 365 **Plan 2**.
- **Threat Analytics**: researcher-written reports on emerging threats, mapped to **MITRE ATT&CK** techniques, with recommended mitigations.

## C.4 Defender for Office 365 — specific features

| Capability | What it does |
|---|---|
| **Spoof intelligence** | Detects fake / impersonated senders (DMARC failures, lookalike domains). |
| **Impersonation protection** | Flags lookalike senders targeting executives (e.g., "ce0@" instead of "ceo@"). |
| **Safe Links** | Rewrites URLs and **scans them at click time**, not just delivery. |
| **Anti-malware** | Multi-engine scanning across Exchange, SharePoint, OneDrive, Teams. |
| **Zero-hour Auto Purge (ZAP)** | **Retroactively removes** malicious messages that already landed in mailboxes once a verdict changes. |
| **Attachment filtering** | Blocks risky file types (`.exe`, `.js`, `.vbs`, etc.). |
| **Anti-spam & transport rules** | ML-based spam filtering, **custom mail flow rules** (e.g., block external mail with certain keywords), **quarantine policies**, connection filtering. |

## C.5 Authenticator + FIDO2 + Windows Hello — distinctions
- **Microsoft Authenticator app** — passwordless sign-in, push notifications, biometrics; also acts as a **token broker** for SSO on mobile (uses Microsoft Authentication Library).
- **FIDO2 security keys** — USB / NFC hardware keys; phishing-resistant.
- **Windows Hello for Business** — face, fingerprint, or PIN tied to the device TPM.
- **Certificate-based authentication** — smart cards, X.509 certificates.

## C.6 SSO details
- SSO uses **secure tokens issued by Entra ID**, reducing password prompts and improving security.
- Works for: **Outlook, Teams, SharePoint, OneDrive**, and **third-party apps (Salesforce, Adobe, ServiceNow)**.
- Works in **cloud-only** and **hybrid** (Entra Connect Sync / **Cloud Sync**) environments.
- Integrates with **device-based access** (Windows Hello, Intune-managed devices).

## C.7 Groups — types cheat sheet
| Type | Purpose | Where to manage |
|---|---|---|
| **Security group** | Assign access to resources | Entra admin center |
| **Microsoft 365 group** | Collaboration (shared mailbox, calendar, SharePoint site, **Planner, Teams**) | Microsoft 365 admin center |
| **Mail-enabled security group** | Security + email distribution | Microsoft 365 admin center |
| **Distribution list** | Email only, no permissions | **Microsoft 365 admin center only** (cannot be created in Entra) |
| **Dynamic group** | Membership updates automatically based on user attributes (e.g., `department = Sales`) | Entra admin center |

> Best practice: **align groups with departments, roles, or projects** to simplify access and offboarding.

## C.8 Resource-specific permissions in SharePoint

Permissions can be set at four levels — **Site → Library → Folder → File**, with built-in roles:
- **Visitor** — read only
- **Member** — edit
- **Owner** — full control

**Permission inheritance can be broken** for granular control. Be careful — broken inheritance is one of the main sources of oversharing.

## C.9 SharePoint — team sites vs communication sites
- **Team sites** — tied to a **Microsoft 365 group**; collaboration-focused (members, owners, shared resources).
- **Communication sites** — broadcast-focused (fewer members, more readers); good for intranets and news.

## C.10 OneDrive — Known Folder Move
- **Known Folder Move** redirects Windows **Desktop, Documents, and Pictures** to OneDrive for Business.
- Useful for backup + multi-device sync.
- Part of OneDrive's sync client config.

## C.11 Teams — policy types (not the same thing)
| Policy | Controls |
|---|---|
| **Meeting policy** | **Recording**, **transcription**, **anonymous join**, who can start/record, who can bypass the lobby. |
| **Messaging policy** | Chat features, **external (federation) access**, read receipts, giphy/memes. |
| **Calling policy** | Inbound/outbound PSTN, voicemail, call forwarding. |
| **App permission / app setup policy** | Which apps users can install or pin. |
| **Live event policy** | Town-hall-style broadcast settings. |
| **Teams update management** | Per-user or per-group version of the Teams desktop client. |

Also: Teams supports **tabs, connectors, bots, and Power Automate** as extensibility points.

## C.12 Microsoft 365 admin center — practical
- **Bulk user creation** (CSV import).
- **User attributes** (location, department, job title) drive Conditional Access and group licensing.
- **PowerShell modules** (know the names):
  - **Exchange Online PowerShell**
  - **Microsoft Teams PowerShell**
  - **SharePoint Online Management Shell**
  - **Microsoft Graph PowerShell SDK** (the new way — covers most workloads)
- **Email signatures and disclaimers** can be set tenant-wide.
- **Custom domains** require **DNS verification** before they can be used.

## C.13 Intune — App protection policies (MAM, BYOD)
- Protect corporate data inside apps **without enrolling the device**.
- Common actions: **block copy/paste**, block local saves, block access from **rooted / jailbroken** devices, force work apps to use a PIN.
- Pairs well with **Conditional Access** → "Require an app protection policy on iOS/Android".

## C.14 Compliance Manager — control types
- **Microsoft-managed controls** — automatically monitored by Microsoft (e.g., encryption at rest). No action from you.
- **Customer-managed controls** — require **manual verification** by your admins (e.g., training completion, documentation).
- **Improvement actions** are mapped to controls, have **assigned owners**, and roll up into the **Compliance Score**.
- Compliance Manager is the place to answer: *"What do we need to do to be GDPR / HIPAA / ISO 27001 compliant?"*

## C.15 Sensitivity labels — deployment details
- **Label policies** decide which users see which labels and whether labeling is **mandatory** or **optional**.
- **Override rules** let a user downgrade a recommended label but require **justification**.
- Labels can enforce **encryption, access restrictions, external-sharing controls, watermarks, headers, and footers**.

## C.16 Retention — auto-apply rules
- Apply **retention labels** automatically based on:
  - **Keywords**
  - **Sensitive information types (SITs)**
  - **Trainable classifiers**
- Use **retention policies** for organization-wide baselines; use **retention labels** for per-content controls.

## C.17 Insider Risk Management — optional signals
- **Endpoint activity** (Defender for Endpoint signals) — file copy to USB, mass download, etc.
- **HR events** — *optional* integration: when HR schedules an exit interview, IRM risk score auto-increases.
- **DLP alerts** can feed IRM cases.
- IRM cases can be **escalated to eDiscovery** for legal hold.

## C.18 Communication Compliance — channels
- **Microsoft Teams** chats and channels
- **Exchange Online** email
- **Viva Engage** (formerly Yammer)
- **Third-party connectors** (e.g., Slack, Bloomberg)

Detects: harassment, profanity, **insider trading** risk, regulatory violations, sensitive-data leakage.

## C.19 Data Explorer — what to look for
- Filter by **location**, **sensitivity label**, **content type**.
- Visualize **data exposure patterns** (where sensitive data lives, who owns it).
- Identify **externally shared** or high-risk files.
- Example: find all "Confidential — Finance" documents and see how they are shared.

## C.20 DAG reports — site criteria
Data Access Governance (DAG) reports flag sites that have:
- **Sensitive content**
- **Excessive sharing** (broken inheritance, "Anyone" links, broad groups)
- **Inactive owners**
- **Missing sensitivity labels**

## C.21 Oversharing — common scenarios
- Sharing with **"Everyone"** or **"Anyone with the link"** → anyone who gets the link can open it, even outside the org.
- Granting **Edit** when **View only** was intended.
- Granting **external guests full site access** when they only needed a single file.
- **Automated alerts** (Power Automate + Purview) can fire on anonymous link usage and external sharing of sensitive files.

## C.22 Copilot — exactly how it works (speak this out)
1. User signs in with their **OAuth token** (the same identity and permissions as any other M365 action).
2. Copilot orchestrates the request and queries **Microsoft Graph**.
3. Graph enforces **authentication + authorization + semantic search** (vector-based, not just keywords).
4. Results are **ranked by recency, sharing patterns, and user activity**.
5. The user's permissions, **sensitivity labels, DLP, and Conditional Access** are all enforced.
6. The response is returned with **source links** for transparency.
7. All prompts and responses are **audited in Purview**.
8. **No training** of the model on your data.
9. **Data minimization** — only retrieves what's needed for the answer.

> If a user can't open a file directly, **Copilot cannot surface its content** to them — Copilot introduces **no new data-access path**.

## C.23 Identity Secure Score — features
- **Security recommendations** with step-by-step improvement actions.
- **Status** per action: *Completed*, *Planned*, *Risk Accepted*, *Not applied*, etc.
- **Benchmarking** — compare your score against **similar organizations** in your industry / size bucket.
- Tracks score **history** over time so you can prove progress to leadership.

## C.24 MFA sign-in troubleshooting (classmate's matrix)
| Symptom | First check | Resolution |
|---|---|---|
| MFA failure (Authenticator) | Sign-in logs → exact failure reason | Re-register Authenticator; **fix device time drift** for TOTP codes |
| MFA failure (FIDO2) | Sign-in logs | Re-register the FIDO2 key |
| Conditional Access denial | **What If** tool | Identify the policy; confirm device compliance in Intune; update / remediate device |
| Risky sign-in | Identity Protection risk log | Impossible travel, unfamiliar IP, leaked credentials → reset password, force MFA, or block |
| Location / IP block | Sign-in logs (IP, location) | Adjust CA policy; add temporary exception |
| Legacy auth failure | Client version | Upgrade apps; enable modern auth; retire legacy protocols |

## C.25 Operational tools & automation
- **Power Automate** can react to **DLP alerts**, **insider-risk cases**, or **Purview alerts** — auto-isolate files, notify owners, open tickets.
- **Audit logs** can be **exported to Power BI, Excel, or SIEM** (Sentinel) for long-term analysis.
- **Microsoft Graph** is the unified API surface — used by every admin tool and by Copilot itself.

---

# Exam-Day Configuration Checklist

Use this as a final pre-exam drill. You should be able to complete every row from memory.

## ✅ Domain 1 — Core features and objects (30–35%)
- [ ] Assign a license to a user and explain what features that license enables
- [ ] Use **group-based licensing** to manage a group of users
- [ ] Configure a **custom domain** in the Microsoft 365 admin center
- [ ] Review and edit **org settings** (release preferences, theme, lockbox)
- [ ] Use the **Microsoft 365 admin center** key admin tools (Users, Groups, Billing, Service Health, Message Center, Reports, Roles, Settings)
- [ ] Create a **user mailbox**, **shared mailbox**, and **resource mailbox** in Exchange Online
- [ ] Create a **distribution list**
- [ ] Create a **SharePoint site** with a **document library** and **folders**
- [ ] Configure **SharePoint group permissions** (Owners / Members / Visitors) and **permission levels**
- [ ] Create a **team** with **standard**, **private**, and **shared channels**
- [ ] Configure a **Teams policy** (messaging / meeting / app)
- [ ] Describe **Zero Trust** principles and give an example
- [ ] Describe the **six layers of a layered security strategy**
- [ ] Configure **MFA** (and **phishing-resistant MFA** for admins — Passkeys / Windows Hello for Business)
- [ ] Explain **JIT / JEA / PIM** in a sentence
- [ ] Identify the components of **Defender XDR** and how they detect/respond to threats
- [ ] List Entra features (**Conditional Access, SSO, Risky sign-ins**)
- [ ] Build a **Conditional Access** policy and use the **What If** tool
- [ ] Explain **SSO** purpose and benefits
- [ ] Troubleshoot a sign-in problem using **MFA, Conditional Access, Risky sign-ins, SSPR**
- [ ] Read and interpret **Identity Secure Score**
- [ ] Find an event in the **Unified Audit Log**
- [ ] Activate a role through **PIM**
- [ ] Assign **admin roles with RBAC** (built-in and custom) to delegate responsibilities
- [ ] Distinguish **App registration** from **Enterprise app** / **Service principal**
- [ ] Configure an **authentication strength** (e.g., phishing-resistant MFA) for a high-value app
- [ ] Use the **CA What If** tool to test a policy before enabling it
- [ ] Distinguish the **three hybrid auth options**: PHS, PTA, Federation
- [ ] Configure **Password Writeback** in Entra Connect to enable **SSPR for hybrid** users
- [ ] Build a **dynamic group** based on a user attribute (e.g., `department = Sales`)
- [ ] Distinguish **security group**, **mail-enabled security group**, **Microsoft 365 group**, and **distribution list**
- [ ] List the components of **Defender for Office 365 Plan 2** (Threat Explorer, Attack simulation training)
- [ ] Use **Attack path tracking** in Defender for Endpoint to reconstruct an incident
- [ ] Configure **Threat analytics** in Defender XDR
- [ ] Run an **Attack simulation training** campaign for phishing awareness
- [ ] Describe the **six Zero Trust pillars** (Identity, Endpoints, Applications, Data, Infrastructure, Network) and the M365 tool for each
- [ ] Identify when to use **Microsoft Sentinel** as a SIEM/SOAR
- [ ] Identify the specific Defender for Office 365 features: **Spoof intelligence, Impersonation protection, Safe Links, ZAP, Attachment filtering**
- [ ] Configure **Intune app protection policies** for BYOD (block copy/paste, local saves)
- [ ] Distinguish **team sites** vs **communication sites** in SharePoint
- [ ] Distinguish the four **PowerShell modules** for M365 admin (Exchange Online, Teams, SharePoint Online Mgmt Shell, Microsoft Graph PowerShell SDK)
- [ ] Set up **OneDrive Known Folder Move** for Desktop/Documents/Pictures
- [ ] Distinguish the **Microsoft-managed** vs **Customer-managed** controls in Compliance Manager
- [ ] Configure **auto-apply rules** for retention labels (keywords, SITs, classifiers)
- [ ] Configure **mandatory vs optional** labeling and **override rules** with justification
- [ ] Add **Viva Engage** (and third-party connectors) to Communication Compliance
- [ ] Connect **HR events** (optional) as a signal in Insider Risk Management

## ✅ Domain 2 — Data protection and governance (35–40%)
- [ ] Create and **publish** a **Sensitivity Label** with encryption
- [ ] Configure **auto-labeling** for a Sensitive Information Type
- [ ] Create and test a **DLP policy** for Exchange / SharePoint / Teams
- [ ] Triage a **DLP alert** in Purview
- [ ] Activate and tune **Insider Risk Management**
- [ ] Activate and tune **Communication Compliance**
- [ ] Activate and tune **DSPM for AI**
- [ ] Create a **Retention Policy** and a **Retention Label**
- [ ] Configure **archiving** for inactive content
- [ ] Configure a **disposition review**
- [ ] Review compliance posture in **Compliance Manager**
- [ ] Use **Data Explorer** to find sensitive data locations
- [ ] Use **Activity Explorer** to investigate label activity
- [ ] Run a **Content Search** in eDiscovery
- [ ] Explain how **Graph** and **Semantic Index** influence Copilot responses
- [ ] Explain how **Sensitivity Labels, DLP, and Defender** protect Copilot outputs
- [ ] State the **Responsible AI** principles
- [ ] Run a **Data access governance report** in SharePoint
- [ ] Apply **Restricted Site Access** to a SharePoint site
- [ ] Identify the major **SharePoint Advanced Management** features
- [ ] Apply **Restricted content discovery** to a sensitive SharePoint site
- [ ] Configure **Restricted SharePoint Search** (up to 100 sites) to scope Copilot grounding
- [ ] Configure a **site ownership policy** (e.g., require ≥ 2 owners)
- [ ] Configure **Adaptive Protection** to bind Insider Risk → DLP
- [ ] Use **DSPM for AI** to find **shadow AI** usage in the tenant

## ✅ Domain 3 — Copilot and agents administration (25–30%)
- [ ] Assign a **Microsoft 365 Copilot license** to a user
- [ ] Verify Copilot prerequisites (mailbox, OneDrive, Microsoft Search)
- [ ] Toggle Copilot features (web content, plugins, per-app) in the admin center
- [ ] Compare **per-user** vs **PAYG** vs **Credit Packs** licensing
- [ ] Configure a **PAYG billing policy** and an Azure subscription
- [ ] **Monitor and adjust** PAYG usage
- [ ] Open **Copilot Analytics** and the **Copilot dashboard**
- [ ] Save, share, schedule, and delete a **prompt**
- [ ] **Describe** and **Configure** an agent in **Copilot Studio**
- [ ] Create a **Microsoft 365 Copilot Chat agent** (Part 1 & Part 2 flow)
- [ ] Create a **SharePoint agent** scoped to one site
- [ ] Add up to **20 knowledge sources** to an agent
- [ ] Add **instructions and rules** to an agent
- [ ] **Test** an agent in the test pane; **edit** topics, knowledge, and actions
- [ ] Share an agent with specific users / groups / everyone
- [ ] Walk through the **agent approval process** for a new agent
- [ ] Monitor agents via the **Microsoft 365 admin center** and the **Power Platform admin center**
- [ ] Use **DSPM for AI** to identify risky prompts
- [ ] Describe the **Researcher** and **Analyst** use cases
- [ ] Describe a **custom agent** use case
- [ ] Explain the **agent lifecycle** (create → publish → monitor → disable / delete)
- [ ] Apply **operational best practices** for Copilot (troubleshooting, end-user communication, adoption)
- [ ] Start a **Copilot Studio agent from a template**
- [ ] Add up to **20 knowledge sources** including public websites, SharePoint, Dataverse, Dynamics 365, Fabric, and **files up to 512 MB**
- [ ] Choose between **APIs / MCP** vs **computer-use / GUI scripting** when integrating tools
- [ ] Distinguish **Copilot Chat (free)**, **Copilot Chat (paid)**, and **M365 Copilot (licensed)**
- [ ] Configure **Azure budgets + cost alerts** for PAYG Copilot spend
- [ ] Identify the **Business plan 300-user cap** and which features it lacks
- [ ] Use **Viva Insights → Copilot Analytics** for deep adoption metrics
- [ ] Reclaim underused **Copilot licenses** from inactive users

---

# Key Pointers — One-Page Quick Reference

The most exam-relevant facts in one place. Each pointer is a single sentence you should be able to repeat from memory.

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

---

# Cross-Reference (Quick Lookup)

| Exam Topic | Domain | Section | Learning Path |
|---|---|---|---|
| License types & access | 1 | 1.1 | M2 |
| M365 admin center org config | 1 | 1.1 | M2 |
| M365 ecosystem & core services | 1 | 1.1 | M2 |
| Exchange admin center objects | 1 | 1.1 | M2 |
| SharePoint admin center objects & permissions | 1 | 1.1 | M2 |
| Teams admin center objects & policies | 1 | 1.1 | M2 |
| Admin roles with RBAC | 1 | 1.1 | M2 |
| Security, identity, compliance foundations | 1 | 1.1 | M2 |
| Zero Trust | 1 | 1.2 | M1 |
| Layered security strategy | 1 | 1.2 | M1 |
| Authorization (RBAC, JIT, JEA, PIM) | 1 | 1.2, 1.3 | M1, M2 |
| Authentication (MFA, Passkeys, Hello) | 1 | 1.2 | M1 |
| Threat protection & intelligence | 1 | 1.2 | M1 |
| Microsoft Defender XDR | 1 | 1.2 | M1 |
| Microsoft Entra | 1 | 1.3 | M1 |
| Conditional Access | 1 | 1.3 | M1 |
| SSO | 1 | 1.3 | M1 |
| Sign-in troubleshooting | 1 | 1.3 | M1 |
| Identity Secure Score | 1 | 1.3 | M1 |
| Audit logs | 1 | 1.3 | M1 |
| PIM | 1 | 1.3 | M1 |
| App registrations / Enterprise apps | 1 | 1.3 | M1 |
| Purview Information Protection | 2 | 2.1 | M3 |
| DLP | 2 | 2.1, 2.3 | M3 |
| Insider Risk Management | 2 | 2.1, 2.3 | M3 |
| Communication Compliance | 2 | 2.1, 2.3 | M3 |
| DSPM for AI | 2 | 2.1, 2.3 | M3 |
| Data Lifecycle Management / Retention / Archiving | 2 | 2.1 | M3 |
| Sensitivity Labels | 2 | 2.1 | M3 |
| Data classification (SIT, EDM, classifiers) | 2 | 2.1 | M3 |
| Copilot data access (Graph, Semantic Index) | 2 | 2.2 | M3 |
| Copilot + Purview / Defender controls | 2 | 2.2 | M3 |
| Responsible AI | 2 | 2.2 | M3 |
| Compliance Manager | 2 | 2.3 | M3 |
| Data Explorer | 2 | 2.3 | M3 |
| Activity Explorer | 2 | 2.3 | M3 |
| eDiscovery Content Search | 2 | 2.3 | M3 |
| SharePoint Advanced Management / Oversharing | 2 | 2.4 | M3 |
| Restricted Site Access | 2 | 2.4 | M3 |
| Data access governance report | 2 | 2.4 | M3 |
| Copilot vs agent capabilities | 3 | 3.1 | M4 |
| Copilot architecture (LLM, Graph, Semantic Index, Orchestrator) | 3 | 3.1 | M4 |
| Microsoft 365 Copilot Chat (free) vs Copilot (paid) | 3 | 3.1 | M4 |
| License model (per-user vs PAYG vs Credit Packs) | 3 | 3.1, 3.2 | M4, M5 |
| Enable/disable Copilot features | 3 | 3.1 | M4 |
| Plan and deploy Copilot and agents | 3 | 3.1 | M4 |
| Real-world use cases | 3 | 3.1 | M4 |
| Researcher / Analyst / custom agent use cases | 3 | 3.1 | M4 |
| Assign Copilot licenses | 3 | 3.2 | M5 |
| PAYG billing policies (manage, monitor, adjust) | 3 | 3.2 | M5 |
| Copilot Analytics & dashboard | 3 | 3.2 | M5 |
| Adoption tracking & Viva Insights | 3 | 3.2 | M5 |
| Prompt management (save/share/schedule/delete) | 3 | 3.2 | M5 |
| Operational best practices (troubleshooting, communication) | 3 | 3.2 | M5 |
| Create Copilot Chat agent (Part 1 & 2) | 3 | 3.3 | M6 |
| Create SharePoint agent | 3 | 3.3 | M6 |
| Test and edit agents | 3 | 3.3 | M6 |
| Configure user access to agents | 3 | 3.3 | M6 |
| Agent approval and governance | 3 | 3.3 | M6 |
| Agent monitoring (M365 admin + Power Platform admin) | 3 | 3.3 | M6 |
| Agent lifecycle | 3 | 3.3 | M6 |

---

# Final 5-Minute Pre-Exam Recap

1. **Three domains, weighted 30–35 / 35–40 / 25–30.** Spend the most time on **Domain 2**.
2. **Licenses drive access** — group-based licensing scales; the admin center is where you assign them.
3. **Objects**: Mailboxes & distribution lists (Exchange), sites/libraries/folders (SharePoint), teams/channels/policies (Teams).
4. **Microsoft 365 admin center** = one console for Users / Groups / Billing / Service Health / Message Center / Reports / Roles.
5. **Zero Trust** = verify explicitly + least privilege + assume breach. **Layered security** = assessment → identity → endpoint → data → threat monitoring → user education. **Zero Trust is NOT a product.**
6. **Auth**: MFA, **phishing-resistant** (Passkeys, Windows Hello, certificates) for admins. **AuthZ**: Conditional Access + RBAC + JIT/JEA + PIM. Use **authentication strengths** and **session controls**.
7. **Defender XDR** = Defender for Identity + Office 365 + Endpoint + Cloud Apps — unified incidents. E5 = Plan 2 (Threat Explorer, Attack simulation training, attack-path tracking, threat analytics).
8. **Entra** = identity plane; **App registration** = definition, **Enterprise app** = instance, **SSO** = one credential, many apps. **Hybrid auth** = PHS (preferred) / PTA / Federation (legacy).
9. **Identity Secure Score** = percentage of best practices applied; **Unified Audit Log** = the place to find who-did-what across M365.
10. **Purview = the compliance portal**: Information Protection (Labels), DLP, IRM, Communication Compliance, **DSPM for AI**, Data Lifecycle Management, Compliance Manager, Data Explorer, Activity Explorer, eDiscovery, **Adaptive Protection** (binds IRM → DLP automatically).
11. **Copilot = RAG over Graph + Semantic Index, permission-aware**. Flow: prompt → orchestrator → Graph/Semantic Index → LLM with system prompt → content safety + groundedness → response. **No training on your data.** **Work IQ** (preview) extends Semantic Index to your custom AI apps.
12. **Responsible AI** = Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Accountability, Transparency.
13. **Oversharing** is Copilot's #1 risk. Fight it with **SharePoint Advanced Management + Data Access Governance report + Restricted Site Access + Restricted content discovery + Restricted SharePoint Search (≤ 100 sites, hub sites excluded)**.
14. **Copilot licensing** = per-user (~$30/u/mo, predictable) vs **PAYG** (metered, Azure subscription, use budgets + alerts) vs **Credit Packs** (burst). **Copilot Chat (free)** = web-only; **Copilot Chat paid** = work-grounded; **Business plans cap at 300 users** and **lack Purview + IRM**.
15. **Copilot admin tasks** = assign licenses, manage PAYG/budget, monitor with **Copilot Analytics & Viva Insights**, manage prompts, apply **operational best practices** (troubleshooting + user communication + license reclamation).
16. **Agent admin tasks** = configure access, create in **Copilot Studio (Describe / Configure — or start from a template)** or **SharePoint**, run the **approval workflow**, **test and edit**, monitor via **M365 admin center + Power Platform admin center** for the **full lifecycle**. **Prefer APIs and MCP over computer-use / GUI scripting.** Agents can have an **Entra Agent ID**.
17. **Researcher** = deep research with citations. **Analyst** = data analysis on tables/Excel. **Custom** = your own department / process agent.
18. **Plan before you deploy** — readiness checklist, **group-level** enablement, **pilot** before broad rollout (Pilot → Evaluate → Expand → Optimize), change-management comms.
19. **Pilot, evaluate, and reclaim** — adopt in waves, instrument with Copilot Analytics, and reassign underused Copilot licenses.
20. **Reuse what you know** — exam is fundamentals; no labs, no case studies, no tricks. Use process of elimination and time markers.
21. **Six Zero Trust pillars** = Identity · Endpoints · Applications · Data · Infrastructure · Network. Know one M365 tool for each.
22. **MSTIC** powers Defender's intelligence — 65T+ signals/day; **Threat Explorer** is for real-time email investigation; **Threat Analytics** reports are mapped to **MITRE ATT&CK**.
23. **Defender for Office 365 specifics**: Spoof intelligence · Impersonation protection · **Safe Links** (URL rewrite, rescan at click) · **ZAP** (retroactive removal) · Attachment filtering.
24. **M365 = RAG over Graph + Semantic Index, permission-aware, no new data-access path**. Copilot uses the user's **OAuth token**; the response carries **source links**; **data minimization** applies.
25. **Compliance Manager** = Microsoft-managed controls (auto-monitored) + **Customer-managed controls** (manual) + **Improvement actions with owners** + **Compliance Score**.
26. **OneDrive Known Folder Move** (Desktop/Documents/Pictures) and **SharePoint team sites vs communication sites** are quick exam wins.
27. **PowerShell tools**: Exchange Online · Teams · SharePoint Online Management Shell · **Microsoft Graph PowerShell SDK**.
28. **App protection policies (MAM)** for BYOD = block copy/paste, local saves, rooted/jailbroken devices — without enrolling the device.

Good luck on the exam.
