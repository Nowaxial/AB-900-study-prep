const studyGuideSections = [
  // ============================================================
  // PREAMBLE — Getting Started
  // ============================================================
  {
    id: "preamble",
    title: "Getting Started",
    subsections: [
      {
        id: "exam-basics",
        title: "Exam Basics",
        content: `<p>Passing score: <strong>700</strong></p>
<ul>
  <li>Format: Multiple-choice, multi-select, scenario-based, drag-and-drop</li>
  <li>Most questions cover features in <strong>General Availability (GA)</strong>; some Preview features may appear</li>
  <li>30 extra minutes available on request for non-English speakers</li>
</ul>`
      },
      {
        id: "exam-weightings",
        title: "Exam Weightings (Skills at a Glance)",
        content: `<table>
  <thead>
    <tr>
      <th>Domain</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Identify the core features and objects of Microsoft 365 services</td>
      <td><strong>30\u201335%</strong></td>
    </tr>
    <tr>
      <td>2. Understand data protection and governance tasks for Microsoft 365 and Copilot</td>
      <td><strong>35\u201340%</strong> \u2190 largest</td>
    </tr>
    <tr>
      <td>3. Perform basic administrative tasks for Copilot and agents</td>
      <td><strong>25\u201330%</strong></td>
    </tr>
  </tbody>
</table>
<blockquote><p>Study priority: spend ~35\u201340% of your prep time on <strong>Domain 2</strong> (data protection &amp; governance).</p></blockquote>`
      },
      {
        id: "learning-path-roadmap",
        title: "Official Learning Path Roadmap (6 modules, 53 units)",
        content: `<p>Use this as your week-by-week study plan. Each module ends with a knowledge check.</p>
<h4>Learning Path 1 — Explore Microsoft 365 administration</h4>
<h5>Module 1: Explore Microsoft 365 security foundations (10 units)</h5>
<ol>
  <li>Introduction</li>
  <li>Analyze the <strong>Zero Trust</strong> security model</li>
  <li>Implement Zero Trust in Microsoft 365</li>
  <li>Examine <strong>threat protection and intelligence</strong> in Microsoft 365</li>
  <li>Explore <strong>identity and authentication</strong> in Microsoft 365</li>
  <li>Manage <strong>access and permissions</strong> in Microsoft 365</li>
  <li>Explore <strong>identity and access management in Microsoft Entra</strong></li>
  <li><strong>Troubleshoot and monitor</strong> identity security</li>
  <li>Module assessment</li>
  <li>Summary</li>
</ol>
<h5>Module 2: Introduction to Microsoft 365 core services and admin controls (8 units)</h5>
<ol>
  <li>Introduction</li>
  <li>Explore the <strong>Microsoft 365 ecosystem</strong> and core service components</li>
  <li>Explore the <strong>Microsoft 365 admin center</strong> and key admin tools</li>
  <li>Examine <strong>Microsoft Exchange, Teams, and SharePoint</strong></li>
  <li>Establish <strong>security, identity, and compliance foundations</strong></li>
  <li>Assign <strong>admin roles using RBAC</strong></li>
  <li>Module assessment</li>
  <li>Summary</li>
</ol>
<h5>Module 3: Protect and govern Microsoft 365 data (8 units)</h5>
<ol>
  <li>Introduction</li>
  <li>Introduction to <strong>Microsoft Purview</strong> and data governance</li>
  <li><strong>Identify and respond to data risks</strong> with Microsoft Purview</li>
  <li>Examine <strong>compliance, AI data discovery, and eDiscovery</strong></li>
  <li>Explore <strong>oversharing and data access governance</strong> in SharePoint</li>
  <li>Explore <strong>data protection in Microsoft 365 Copilot</strong></li>
  <li>Module assessment</li>
  <li>Summary</li>
</ol>
<h4>Learning Path 2 — Explore Microsoft 365 Copilot and Agent Administration</h4>
<h5>Module 4: Explore Microsoft 365 Copilot and agents (9 units)</h5>
<ol>
  <li>Introduction</li>
  <li>Introduction to Microsoft 365 Copilot</li>
  <li>What are <strong>agents</strong>?</li>
  <li>Compare <strong>Microsoft 365 Copilot and agents</strong></li>
  <li>Compare <strong>Microsoft 365 Copilot licensing models</strong></li>
  <li><strong>Plan and deploy</strong> Microsoft 365 Copilot and agents</li>
  <li>Explore <strong>real-world use cases</strong> for Copilot and agents</li>
  <li>Module assessment</li>
  <li>Summary</li>
</ol>
<h5>Module 5: Perform basic administrative tasks for Microsoft 365 Copilot (8 units)</h5>
<ol>
  <li>Introduction</li>
  <li><strong>Manage Copilot licenses</strong> and pay-as-you-go billing</li>
  <li><strong>Monitor and adjust</strong> pay-as-you-go Copilot usage</li>
  <li><strong>Monitor Microsoft 365 Copilot</strong> usage and adoption</li>
  <li><strong>Manage and govern</strong> Microsoft 365 Copilot prompts</li>
  <li><strong>Apply operational best practices</strong> for Microsoft 365 Copilot</li>
  <li>Module assessment</li>
  <li>Summary</li>
</ol>
<h5>Module 6: Perform basic administrative tasks for Microsoft 365 Copilot agents (10 units)</h5>
<ol>
  <li>Introduction</li>
  <li>Create a <strong>Microsoft 365 Copilot Chat agent — Part 1</strong></li>
  <li>Create a <strong>Microsoft 365 Copilot Chat agent — Part 2</strong></li>
  <li>Create a <strong>SharePoint agent</strong></li>
  <li><strong>Test and edit</strong> your agents</li>
  <li><strong>Manage user access and permissions</strong> for agents</li>
  <li>Examine <strong>agent approval and governance</strong></li>
  <li><strong>Monitor and manage the agent lifecycle</strong></li>
  <li>Module assessment</li>
  <li>Summary</li>
</ol>`
      },
      {
        id: "how-to-use",
        title: "How to Use This Guide",
        content: `<table>
  <thead>
    <tr>
      <th>Phase</th>
      <th>Action</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Concept Map</td>
      <td>Skim the three domain headers</td>
      <td>10 min</td>
    </tr>
    <tr>
      <td>2. Deep Read</td>
      <td>Work one Learning Path module per day</td>
      <td>6 \u00d7 90 min</td>
    </tr>
    <tr>
      <td>3. Drill</td>
      <td>Use the <strong>Key Concepts</strong> box at the end of each domain as flashcards</td>
      <td>30 min/day</td>
    </tr>
    <tr>
      <td>4. Verify</td>
      <td>Walk through the <strong>Exam-Day Configuration Checklist</strong> from memory</td>
      <td>45 min</td>
    </tr>
    <tr>
      <td>5. Review</td>
      <td>Re-read weak areas 24 h before the exam</td>
      <td>60 min</td>
    </tr>
  </tbody>
</table>`
      }
    ]
  },

  // ============================================================
  // DOMAIN 1
  // ============================================================
  {
    id: "domain1",
    title: "DOMAIN 1 \u2014 Identify the core features and objects of Microsoft 365 services (30\u201335%)",
    subsections: [
      {
        id: "1-1",
        title: "1.1 Identify the core objects of Microsoft 365 services",
        content: `<p>Three sub-areas: (1.1) core objects, (1.2) security principles, (1.3) core security features.</p>
<h4>The Microsoft 365 ecosystem (Module 2, Unit 2)</h4>
<p>Microsoft 365 brings together the major productivity and collaboration workloads <strong>under one secure, cloud-connected environment</strong>:</p>
<pre><code>\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Microsoft 365 Tenant \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                                                            \u2502
\u2502  Identity (Entra ID) \u2500\u2500\u252c\u2500\u2500 Exchange Online (mail/cal)      \u2502
\u2502                        \u251c\u2500\u2500 SharePoint (sites/libraries)    \u2502
\u2502                        \u251c\u2500\u2500 OneDrive (personal storage)     \u2502
\u2502                        \u251c\u2500\u2500 Teams (chat/meetings/calling)   \u2502
\u2502                        \u251c\u2500\u2500 Power Platform (Power Apps,     \u2502
\u2502                        \u2502    Automate, BI, Copilot Studio)  \u2502
\u2502                        \u251c\u2500\u2500 Microsoft 365 Apps (Office)     \u2502
\u2502                        \u2514\u2500\u2500 Microsoft 365 Copilot (AI)      \u2502
\u2502                                                            \u2502
\u2502  Common services: security, compliance, governance         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</code></pre>
<p>Key idea: <strong>all workloads share a common identity layer (Entra ID)</strong> and a common compliance layer (Purview). Configuring one usually affects all.</p>
<h4>How license types affect access</h4>
<ul>
  <li><strong>License assignment controls feature access.</strong> A user with an E3 license cannot use E5-only features (e.g., Defender for Cloud Apps, Power BI Pro, Phone System).</li>
  <li>Licenses are assigned to <strong>users</strong> or to <strong>groups</strong> (group-based licensing cascades to members).</li>
  <li>Removing a license immediately revokes access to features; data is preserved (grace behavior) for a period before the account is disabled.</li>
  <li>Service plans inside a license can be enabled/disabled individually (e.g., give a user E5 but disable Audio Conferencing).</li>
</ul>
<h4>Microsoft 365 admin center \u2014 organization configuration</h4>
<ul>
  <li><strong>Domain names</strong> \u2014 add and verify custom domains (e.g., <code>contoso.com</code>) before pointing MX/SPF/DKIM/DMARC records to M365.</li>
  <li><strong>Org settings</strong> \u2014 release preferences, theme, contact info, privacy profile, customer lockbox, data location.</li>
  <li><strong>Key admin tools inside the M365 admin center</strong> (Module 2, Unit 3):
    <ul>
      <li><strong>Users</strong> \u2014 create, manage, reset passwords, assign roles.</li>
      <li><strong>Groups</strong> \u2014 security and Microsoft 365 groups, group-based licensing.</li>
      <li><strong>Billing</strong> \u2014 licenses, subscriptions, invoices, payment methods.</li>
      <li><strong>Support</strong> \u2014 open Microsoft tickets, see health advisories.</li>
      <li><strong>Service Health</strong> \u2014 tenant-wide incidents, planned maintenance, health history.</li>
      <li><strong>Message Center</strong> \u2014 official Microsoft communications, weekly digests, alert subscriptions.</li>
      <li><strong>Reports</strong> \u2014 adoption, usage, security/compliance score.</li>
      <li><strong>Settings</strong> \u2014 org-wide toggles (release preferences, marketplace, etc.).</li>
      <li><strong>Setup</strong> \u2014 guided checklists for first-time admins.</li>
      <li><strong>Roles</strong> \u2014 assign Entra ID admin roles (Global Admin, Exchange Admin, etc.).</li>
    </ul>
  </li>
</ul>
<h4>Exchange Online admin center \u2014 objects to configure</h4>
<ul>
  <li><strong>Mailboxes</strong> \u2014 user mailboxes, shared mailboxes, resource mailboxes (rooms, equipment), Microsoft 365 group mailboxes.</li>
  <li><strong>Distribution lists</strong> \u2014 non-mail-enabled or mail-enabled groups used to send email to many recipients.</li>
</ul>
<h4>SharePoint in Microsoft 365 admin center \u2014 objects to configure</h4>
<ul>
  <li><strong>Sites</strong> \u2014 communication sites, team sites (connected to Microsoft 365 groups).</li>
  <li><strong>Libraries</strong> \u2014 document libraries within a site; each library is a container for files with versioning, metadata, columns, and views.</li>
  <li><strong>Folders</strong> \u2014 sub-containers inside a library; can be used to organize content and apply unique permissions.</li>
</ul>
<h4>SharePoint roles and permissions for sites</h4>
<ul>
  <li><strong>SharePoint Groups</strong> (security principals inside a site): <strong>Owners</strong>, <strong>Members</strong>, <strong>Visitors</strong> \u2014 Owner = full control, Member = contribute, Visitor = read.</li>
  <li><strong>Permission levels</strong> \u2014 Full Control, Design, Edit, Contribute, Read, Limited Access.</li>
  <li><strong>Sharing settings</strong> \u2014 tenant-level (Anyone, New and existing guests, Existing guests, Only people in your organization) and site-level (Anyone with the link, Specific people, Organization).</li>
</ul>
<h4>Teams admin center \u2014 objects to configure</h4>
<ul>
  <li><strong>Teams</strong> \u2014 collections of people, content, and conversations tied to a Microsoft 365 group.</li>
  <li><strong>Channels</strong> \u2014 <strong>Standard</strong> (open to all members) and <strong>Private</strong> (invitation-only). <strong>Shared channels</strong> allow cross-team collaboration.</li>
  <li><strong>Policies</strong> \u2014 Messaging, Meeting, Live Event, Calling, App permission, App setup, Teams Phone, Teams Update management.</li>
</ul>`
      },
      {
        id: "1-2",
        title: "1.2 Understand the Microsoft 365 security principles",
        content: `<h4>Zero Trust (Module 1, Units 2\u20133)</h4>
<table>
  <thead>
    <tr>
      <th>Principle</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Verify explicitly</strong></td>
      <td>Always authenticate and authorize using <em>all</em> available signals: identity, device, location, data sensitivity, anomaly detection.</td>
    </tr>
    <tr>
      <td><strong>Least privilege</strong></td>
      <td>Give users only the access they need, only when they need it (JIT, JEA).</td>
    </tr>
    <tr>
      <td><strong>Assume breach</strong></td>
      <td>Design as if the attacker is already inside. Segment, monitor, encrypt, verify continuously.</td>
    </tr>
  </tbody>
</table>
<p><strong>Implementing Zero Trust in M365</strong> (Unit 3) translates to:</p>
<ul>
  <li>Strong authentication (phishing-resistant MFA, especially for admins).</li>
  <li>Conditional Access policies for sign-in decisions.</li>
  <li>Layered protection (identity + endpoint + data + network + app + infra).</li>
  <li>Continuous monitoring and detection (Defender XDR, Sentinel, Entra ID Protection).</li>
  <li>User education and operational practices.</li>
</ul>
<h4>Building a layered security strategy</h4>
<p>Six layers of defense (from the official module):</p>
<ol>
  <li><strong>Assessment</strong> \u2014 Microsoft Secure Score, Attack Simulator, Defender vulnerability reports.</li>
  <li><strong>Identity protection</strong> \u2014 Entra ID Protection, MFA, PIM, Conditional Access.</li>
  <li><strong>Endpoint compliance</strong> \u2014 Intune compliance policies, Defender for Endpoint, Windows Hello for Business.</li>
  <li><strong>Data classification</strong> \u2014 Sensitivity Labels, trainable classifiers, EDM, content markings.</li>
  <li><strong>Threat monitoring</strong> \u2014 Defender XDR unified incidents, Microsoft Sentinel, hunting queries.</li>
  <li><strong>User education</strong> \u2014 Attack Simulator phishing campaigns, security awareness training, change-communication plans.</li>
</ol>
<h4>Threat protection and intelligence (Module 1, Unit 4)</h4>
<ul>
  <li><strong>Threat intelligence</strong> \u2014 Microsoft Defender XDR correlates signals from identity, endpoints, email, and cloud apps to detect multi-stage attacks (kill-chain, MITRE ATT&amp;CK mapping).</li>
  <li><strong>Threat protection</strong> \u2014 capabilities in Defender for Identity, Defender for Office 365 (Safe Links, Safe Attachments, anti-phishing), Defender for Endpoint, Defender for Cloud Apps.</li>
  <li><strong>Identity threat detection</strong> \u2014 Entra ID Protection flags risky sign-ins (anonymous IP, atypical travel, leaked credentials, password spray) and risky users (leaked credentials, threat intelligence).</li>
  <li><strong>Best practice</strong> \u2014 review incidents weekly, tune alert rules, run attack simulations, and track Secure Score trends.</li>
</ul>
<h4>Authorization</h4>
<ul>
  <li><strong>Conditional Access</strong> \u2014 if/then policy engine in Entra ID. Example: <em>if</em> sign-in from untrusted network <em>then</em> require MFA + compliant device.</li>
  <li><strong>RBAC (Role-Based Access Control)</strong> \u2014 built-in or custom roles (Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader, \u2026). Module 2, Unit 6 focuses on <strong>assigning admin roles with RBAC</strong> to delegate permissions and responsibilities securely.</li>
  <li><strong>JIT (Just-In-Time) access</strong> \u2014 role activation only when needed, for a bounded time, with approval \u2014 delivered through <strong>PIM</strong>.</li>
  <li><strong>JEA (Just Enough Administration)</strong> \u2014 granular, task-scoped admin rights; the same least-privilege philosophy at the operations/PowerShell layer.</li>
</ul>
<h4>Conditional Access \u2014 deeper building blocks (often tested)</h4>
<ul>
  <li><strong>Targets</strong> \u2014 users/groups (or agents), agents, cloud apps, Azure portal, the Microsoft Admin Portals, other resources. <strong>Exclusions</strong> are critical for break-glass accounts.</li>
  <li><strong>Conditions</strong> \u2014 user risk, <strong>sign-in risk</strong> (from Identity Protection), insider risk, device platforms, locations, client apps, authentication flows.</li>
  <li><strong>Session controls</strong> \u2014 sign-in frequency, persistent browser session, <strong>continuous access evaluation</strong>, conditional access app control (Defender for Cloud Apps), restriction of downloads / printing / clipboard for unmanaged devices.</li>
  <li><strong>Authentication strengths</strong> \u2014 pre-built combos ("Multifactor authentication strength", "Phishing-resistant MFA strength") and custom (Windows Hello for Business, FIDO2/passkey, certificate-based). Required for high-value apps.</li>
  <li><strong>Global Secure Access client</strong> \u2014 Microsoft's Security Service Edge (SSE) client that integrates with Conditional Access to govern access to private resources and internet destinations.</li>
  <li><strong>Common policies you'll see in exam scenarios</strong>:
    <ul>
      <li>Require MFA for external access</li>
      <li>Block unmanaged devices</li>
      <li>Block legacy authentication</li>
      <li>Restrict guest access</li>
      <li>Enforce Terms of Use</li>
      <li>Require MFA when accessing sensitive data from a personal device</li>
    </ul>
  </li>
</ul>
<h4>The six Zero Trust pillars (Microsoft framework)</h4>
<table>
  <thead>
    <tr>
      <th>Pillar</th>
      <th>What M365 enforces it with</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Identity</strong></td>
      <td>Entra ID, passwordless, risk-based Conditional Access</td>
    </tr>
    <tr>
      <td><strong>Endpoints</strong></td>
      <td>Intune (compliance), Defender for Endpoint (behavioral detection), <strong>Endpoint Analytics</strong> (device health visibility)</td>
    </tr>
    <tr>
      <td><strong>Applications</strong></td>
      <td>Defender for Cloud Apps (shadow IT, session controls), <strong>App Proxy</strong> (secure access to on-prem apps without VPN)</td>
    </tr>
    <tr>
      <td><strong>Data</strong></td>
      <td>Purview Information Protection (labels, encryption), DLP</td>
    </tr>
    <tr>
      <td><strong>Infrastructure</strong></td>
      <td><strong>Defender for Cloud</strong> (posture across <strong>Azure, AWS, GCP</strong>), <strong>Azure Policy</strong> (encryption, tagging, VM restrictions)</td>
    </tr>
    <tr>
      <td><strong>Network</strong></td>
      <td><strong>Azure Firewall</strong>, <strong>VPN Gateway</strong>, Defender for Identity (segmentation, lateral-movement detection)</td>
    </tr>
  </tbody>
</table>
<h4>Authentication methods</h4>
<ul>
  <li><strong>MFA (Multi-Factor Authentication)</strong> \u2014 at least two of: <em>something you know</em> (password), <em>something you have</em> (phone, token, passkey), <em>something you are</em> (biometric).</li>
  <li><strong>Phishing-resistant</strong> methods (preferred, mandatory for admins):
    <ul>
      <li><strong>Passkeys (FIDO2 / WebAuthn)</strong> \u2014 bound to a device or hardware key; the private key never leaves the device, so they cannot be phished.</li>
      <li><strong>Windows Hello for Business</strong> \u2014 replaces passwords with a PIN + biometric (face/fingerprint) tied to the device's TPM.</li>
      <li><strong>Certificate-based authentication</strong>.</li>
    </ul>
  </li>
  <li><strong>Passwordless</strong> \u2014 Authenticator app passwordless, Windows Hello, Passkeys.</li>
  <li><strong>Password</strong> \u2014 only as a last resort, and <strong>never</strong> the only factor for admins.</li>
</ul>
<h4>Microsoft Defender XDR</h4>
<p>The unified eXtended Detection &amp; Response suite that combines:</p>
<ul>
  <li><strong>Defender for Identity</strong> \u2014 on-premises AD signals (agents on DCs, AD FS, Connect servers)</li>
  <li><strong>Defender for Office 365</strong> \u2014 email &amp; collaboration (anti-phish, anti-malware, Safe Links, Safe Attachments, <strong>Threat Explorer</strong>, <strong>Attack simulation training</strong>)</li>
  <li><strong>Defender for Endpoint</strong> \u2014 devices (EDR, anti-malware, attack surface reduction, automated investigations, <strong>attack path tracking</strong>)</li>
  <li><strong>Defender for Cloud Apps</strong> \u2014 SaaS/CASB, shadow IT discovery, session policies</li>
  <li><strong>Defender for Cloud</strong> (Azure workloads) \u2014 optional</li>
  <li><strong>Threat analytics</strong> \u2014 a curated library of threat intelligence reports written by Microsoft security researchers.</li>
  <li>Unified portal at <strong>https://security.microsoft.com</strong> with <strong>Incidents</strong>, <strong>Hunting</strong>, <strong>Action center</strong>, <strong>Secure Score</strong>.</li>
</ul>
<h4>Exam-relevant Defender for Office 365 details</h4>
<ul>
  <li><strong>Plan 1</strong> vs <strong>Plan 2</strong> \u2014 Plan 2 is the version bundled in <strong>M365 E5</strong> and adds <strong>Threat Explorer</strong>, <strong>Attack simulation training</strong>, automated investigation &amp; response (AIR), and campaign views.</li>
  <li><strong>Attack simulation training</strong> \u2014 let admins run realistic phishing campaigns against users and turn failed clicks into instant training.</li>
  <li><strong>Specific capabilities the exam tests</strong>:
    <ul>
      <li><strong>Spoof intelligence</strong> \u2014 detects fake / impersonated senders (DMARC failures, lookalike domains).</li>
      <li><strong>Impersonation protection</strong> \u2014 flags lookalike senders targeting executives (e.g., "ce0@" instead of "ceo@").</li>
      <li><strong>Safe Links</strong> \u2014 rewrites URLs in incoming messages and <strong>rescans them at click time</strong> (not just delivery).</li>
      <li><strong>Anti-malware</strong> \u2014 multi-engine scanning across Exchange, SharePoint, OneDrive, Teams.</li>
      <li><strong>Zero-hour Auto Purge (ZAP)</strong> \u2014 <strong>retroactively removes</strong> malicious messages that already landed in mailboxes once a verdict changes.</li>
      <li><strong>Attachment filtering</strong> \u2014 blocks risky file types (<code>.exe</code>, <code>.js</code>, <code>.vbs</code>, \u2026).</li>
      <li><strong>Anti-spam &amp; transport rules</strong> \u2014 ML-based spam filtering, <strong>custom mail flow rules</strong> (e.g., block external mail with certain keywords), <strong>quarantine policies</strong>, connection filtering.</li>
    </ul>
  </li>
</ul>
<h4>Exam-relevant Defender for Endpoint details</h4>
<ul>
  <li><strong>Attack path tracking</strong> \u2014 visualizes the chain <em>email \u2192 attachment \u2192 process \u2192 network \u2192 lateral movement \u2192 credentials on another machine</em>. Helps you understand how an incident actually unfolded.</li>
  <li><strong>EDR + antivirus + attack surface reduction + automated investigations</strong> in one product.</li>
  <li><strong>Device isolation</strong> \u2014 admins can remotely cut a compromised device off the network.</li>
</ul>
<h4>Defender for Cloud Apps (CASB)</h4>
<ul>
  <li>Discovers <strong>shadow IT</strong> (which SaaS apps employees are actually using).</li>
  <li><strong>Session policies</strong> \u2014 control what users can do inside a sanctioned app (block downloads, monitor activity).</li>
  <li>App governance \u2014 sanction / unsanction apps tenant-wide.</li>
</ul>
<h4>Microsoft Sentinel</h4>
<ul>
  <li>Cloud-native <strong>SIEM</strong> (Security Information and Event Management) + <strong>SOAR</strong> (Security Orchestration, Automation, Response).</li>
  <li>Correlates signals from Defender XDR, Defender for Identity, third-party sources, Entra ID, and on-prem.</li>
  <li><strong>KQL hunting queries</strong> to find threats; <strong>analytic rules</strong> to alert; <strong>playbooks</strong> (Logic Apps) to automate response.</li>
</ul>
<h4>Microsoft Threat Intelligence Center (MSTIC)</h4>
<ul>
  <li>The team behind Microsoft's threat telemetry \u2014 <strong>65+ trillion signals/day</strong>, tracks nation-state actors, dark-web activity, and global campaigns.</li>
  <li>Feeds intelligence into Defender products in near real time.</li>
</ul>
<h4>Defender for Cloud (Infrastructure pillar)</h4>
<ul>
  <li>Assesses security posture across <strong>Azure, AWS, and GCP</strong> subscriptions.</li>
  <li><strong>Secure Score</strong> recommendations across all three clouds.</li>
  <li><strong>Defender plans</strong> (pay-per-resource) for servers, containers, storage, SQL, App Service, etc.</li>
</ul>`
      },
      {
        id: "1-3",
        title: "1.3 Identify the core security features of Microsoft 365 services",
        content: `<h4>Microsoft Entra (formerly Azure Active Directory)</h4>
<p>The identity plane for all M365 services.</p>
<ul>
  <li><strong>Entra ID</strong> \u2014 cloud directory of users, groups, applications, service principals.</li>
  <li><strong>App registrations</strong> \u2014 applications you build/own; you define the app's identity, secrets, and API permissions.</li>
  <li><strong>Enterprise applications</strong> \u2014 applications integrated into your tenant (SaaS apps, custom apps, Microsoft-published apps) \u2014 you manage user assignments, SSO, and provisioning.</li>
  <li><strong>External Identities</strong> \u2014 B2B guest access, B2C for customer-facing apps.</li>
</ul>
<h4>Identity types in Entra</h4>
<ul>
  <li><strong>Person</strong> \u2014 user identity (a digital persona for a human).</li>
  <li><strong>Application</strong> \u2014 service principal, app registration, managed identity.</li>
  <li><strong>AI agent</strong> \u2014 Microsoft's newer pattern; <strong>Entra Agent ID</strong> (preview at time of writing) gives agents their own identity so they can be governed, audited, and assigned their own permissions. Copilot Studio, M365 Copilot, Security Copilot, and Foundry agents can automatically receive an Entra Agent ID.</li>
</ul>
<h4>Hybrid identity authentication methods (you must know the three options)</h4>
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>How it works</th>
      <th>Trade-offs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Password Hash Sync (PHS)</strong></td>
      <td>Hash of the on-prem password hash is synced to Entra; cloud auth happens directly.</td>
      <td><strong>Preferred.</strong> No on-prem dependency, works during outages, supports leaked-credential detection.</td>
    </tr>
    <tr>
      <td><strong>Pass-Through Authentication (PTA)</strong></td>
      <td>Entra forwards the auth request to a lightweight agent on a DC.</td>
      <td>Requires on-prem AD reachable. Supports some AD-specific features (e.g., sign-in hours, certain lockout policies).</td>
    </tr>
    <tr>
      <td><strong>Federation (AD FS)</strong></td>
      <td>Entra redirects the user to on-prem AD FS which issues a SAML/OIDC token.</td>
      <td>Heavy on-prem footprint (open ports, certificates, scale). Today, <strong>federate cloud services with Entra instead of standing up your own federation</strong> is the typical recommendation.</td>
    </tr>
  </tbody>
</table>
<h4>Conditional Access policies</h4>
<ul>
  <li>The <strong>policy engine</strong> for sign-in decisions. Considers: user/group, target resource, device platform, location, client app, sign-in risk.</li>
  <li>Example building blocks: <em>block legacy authentication</em>, <em>require MFA</em>, <em>require app protection policy</em>, <em>require compliant device</em>, <em>require approved client app</em>.</li>
  <li>Can use <strong>named locations</strong>, <strong>filter for applications/insider risk</strong>, <strong>session controls</strong> (sign-in frequency, persistent browser session, continuous access evaluation).</li>
</ul>
<h4>Single Sign-On (SSO)</h4>
<ul>
  <li><strong>Purpose</strong> \u2014 one set of credentials gives access to many apps; fewer passwords = lower phishing risk, fewer resets.</li>
  <li><strong>Benefits</strong> \u2014 improved user experience, centralized access control, consistent MFA enforcement, easier offboarding.</li>
  <li><strong>Methods supported</strong> \u2014 password-based SSO (seamless SSO), SAML, OpenID Connect/OAuth, header-based, linked.</li>
  <li><strong>Client-side brokers</strong>:
    <ul>
      <li>On Windows: <strong>Windows Hello for Business</strong> transparently brokers SSO tokens to apps.</li>
      <li>On phones: <strong>Microsoft Authenticator app</strong> acts as a <strong>token broker</strong> using the <strong>Microsoft Authentication Library (MSAL)</strong>, getting tokens for all the apps on the device seamlessly.</li>
    </ul>
  </li>
  <li><strong>Federation-era best practice</strong> \u2014 today, instead of deploying your own ADFS to federate third-party SaaS apps, <strong>configure those apps to federate with Entra ID</strong> and let Entra do the work.</li>
</ul>
<h4>Security objects to use in an organization</h4>
<ul>
  <li><strong>Users</strong> \u2014 security principals representing people or service accounts.</li>
  <li><strong>Groups</strong> \u2014 security groups (for permissions) and Microsoft 365 groups (for collaboration).</li>
  <li><strong>Administrative units</strong> \u2014 scoped management (e.g., a regional admin for a subset of users).</li>
</ul>
<h4>Tools to troubleshoot common sign-in issues (Module 1, Unit 8)</h4>
<ul>
  <li><strong>MFA issues</strong> \u2014 Microsoft Authenticator app, SSPR (self-service password reset), tenant MFA settings.</li>
  <li><strong>Conditional Access</strong> \u2014 sign-in logs, "What If" tool to test a policy before applying it, Conditional Access Insights &amp; Reporting workbook.</li>
  <li><strong>Risky sign-ins</strong> \u2014 Entra ID Protection risk report, risky sign-ins blade, risk remediation (block / require MFA / require password change).</li>
  <li><strong>Other</strong> \u2014 Self-Service Password Reset (SSPR), Azure AD sign-in logs (interactive + non-interactive), passwordless diagnostic.</li>
</ul>
<h4>Common sign-in problem \u2192 fix matrix (the exam loves these)</h4>
<table>
  <thead>
    <tr>
      <th>Symptom</th>
      <th>First check</th>
      <th>Resolution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MFA failure (Authenticator)</td>
      <td>Sign-in logs \u2192 exact failure reason</td>
      <td>Re-register Authenticator; <strong>fix device time drift</strong> for TOTP codes</td>
    </tr>
    <tr>
      <td>MFA failure (FIDO2)</td>
      <td>Sign-in logs</td>
      <td>Re-register the FIDO2 security key</td>
    </tr>
    <tr>
      <td>Conditional Access denial</td>
      <td><strong>What If</strong> tool</td>
      <td>Identify the blocking policy; confirm device compliance in Intune; remediate or update the device</td>
    </tr>
    <tr>
      <td>Risky sign-in (impossible travel, unfamiliar IP, leaked credentials)</td>
      <td>Identity Protection risk log</td>
      <td>Reset password, force MFA, or block access</td>
    </tr>
    <tr>
      <td>Location / IP block</td>
      <td>Sign-in logs (IP, location)</td>
      <td>Adjust Conditional Access policy; add temporary exception</td>
    </tr>
    <tr>
      <td>Legacy authentication failure</td>
      <td>Client version</td>
      <td>Upgrade apps; <strong>enable modern auth</strong>; retire legacy protocols</td>
    </tr>
  </tbody>
</table>
<h4>Self-Service Password Reset (SSPR)</h4>
<ul>
  <li>Lets users reset (and sometimes unlock) their own password.</li>
  <li>Works for <strong>cloud-only</strong> accounts out of the box.</li>
  <li>Works for <strong>hybrid</strong> accounts only if <strong>Password Writeback</strong> is enabled in Entra Connect (writes the new password back to on-prem AD).</li>
  <li>Auth methods for SSPR: mobile app notification/code, email, mobile phone (SMS/voice), security questions.</li>
  <li><strong>Verified ID / Verifiable Credentials (preview)</strong> \u2014 emerging flow where a user proves identity to a trusted third-party service with a government ID + selfie, receives a <strong>decentralized identity</strong> stored in a <strong>digital wallet</strong> (e.g., on the phone), and presents it back to Entra to recover the account without a human help-desk step.</li>
</ul>
<h4>Identity Secure Score</h4>
<ul>
  <li>A <strong>percentage score</strong> showing how well your Entra ID tenant is configured against Microsoft's security best practices.</li>
  <li>Each <strong>improvement action</strong> has an impact score; the total achievable = 100%.</li>
  <li><strong>Interpret</strong> \u2014 aim for the recommended target; high score = better identity posture; investigate regressions in score history.</li>
</ul>
<h4>Audit logs (user and admin activity)</h4>
<ul>
  <li><strong>Entra ID audit logs</strong> \u2014 every directory change (user created, role assigned, app registered).</li>
  <li><strong>Unified Audit Log (Microsoft Purview)</strong> \u2014 every action across M365 workloads (email sent, file accessed, label applied, admin action). Default retention <strong>180 days</strong>; <strong>Premium</strong> = 1 year (requires E5/A5/G5).</li>
  <li>Tools to review: <strong>Microsoft Purview \u2192 Audit</strong>, <strong>Entra admin center \u2192 Audit logs</strong>, <strong>M365 Admin Center \u2192 Audit logs</strong>, <strong>Microsoft 365 Defender \u2192 Hunting</strong>.</li>
</ul>
<h4>Privileged Identity Management (PIM)</h4>
<ul>
  <li>Provides <strong>just-in-time</strong> privileged access to Entra ID roles and Azure resource roles.</li>
  <li><strong>Eligible assignment</strong> (default) \u2014 user must activate; requires approval/justification; time-bound.</li>
  <li><strong>Active assignment</strong> \u2014 always-on (use only when needed, audit heavily).</li>
  <li>Activations produce a full <strong>audit trail</strong>; PIM alerts notify of unusual activations.</li>
</ul>
<h4>App registrations and Enterprise apps</h4>
<ul>
  <li><strong>App registration</strong> \u2014 the application's <em>definition</em> (object ID, app ID, credentials, API permissions, exposed APIs).</li>
  <li><strong>Enterprise app / Service principal</strong> \u2014 the application's <em>instance</em> in a tenant (the on-the-ground identity used at runtime).</li>
  <li>Used for <strong>SSO integration</strong>, <strong>API access to Microsoft Graph</strong> (delegated or application permissions), and <strong>custom agents / declarative agents</strong> that need to call protected APIs.</li>
</ul>`
      }
    ],
    keyConcepts: {
      title: "1.4 Key Concepts",
      tags: ["License", "Group-based licensing", "Microsoft 365 admin center", "Custom Domain", "Mailbox", "Distribution List", "SharePoint Site", "Library", "Folder", "Owner/Member/Visitor", "Team", "Channel", "Teams Policy", "Zero Trust", "Layered Security", "RBAC", "JIT", "JEA", "PIM", "Conditional Access", "MFA", "Passkeys (FIDO2)", "Windows Hello for Business", "Phishing-resistant", "Threat Intelligence", "Defender XDR", "Defender for Identity", "Defender for Office 365", "Defender for Endpoint", "Defender for Cloud Apps", "Entra ID", "App Registration", "Enterprise App", "Service Principal", "SSO", "SSPR", "Risky Sign-in", "Identity Secure Score", "Microsoft Secure Score", "Unified Audit Log", "Audit Log", "Attack Simulator", "Intune compliance"]
    }
  },

  // ============================================================
  // DOMAIN 2
  // ============================================================
  {
    id: "domain2",
    title: "DOMAIN 2 \u2014 Understand data protection and governance tasks for Microsoft 365 and Copilot (35\u201340%)",
    subsections: [
      {
        id: "2-1",
        title: "2.1 Understand Microsoft Purview",
        content: `<p>The unified compliance portal at <strong>https://purview.microsoft.com</strong>.</p>
<h4>Capabilities matrix</h4>
<table>
  <thead>
    <tr>
      <th>Capability</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Microsoft Purview Information Protection</strong></td>
      <td>Discover, classify, label, and protect sensitive data \u2014 <strong>Sensitivity Labels</strong> travel with the content.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Data Loss Prevention (DLP)</strong></td>
      <td>Detect and <strong>prevent</strong> accidental sharing of sensitive data (PII, PHI, financial) across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Insider Risk Management</strong></td>
      <td>Correlate signals (departing user + bulk download, off-hours activity, anomalous data movement) into risk scores and cases.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Communication Compliance</strong></td>
      <td>Monitor internal email and Teams chat for harassment, regulatory violations, conflicts of interest, and policy breaches.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Data Security Posture Management (DSPM) for AI</strong></td>
      <td>Discover, monitor, and govern the use of <strong>AI services and Copilot activity</strong> across the tenant.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Data Lifecycle Management</strong></td>
      <td>Govern the <strong>lifecycle</strong> of data \u2014 retention policies and retention labels, disposition reviews, records management.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview eDiscovery</strong></td>
      <td>Search, hold, and export content for legal investigations. <strong>Standard</strong> in E3; <strong>Premium</strong> (E5) adds lawyer-client model, analytics, and review set tooling.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Compliance Manager</strong></td>
      <td>A centralized dashboard of compliance posture across regulations (ISO 27001, GDPR, NIST, HIPAA, \u2026) with recommended improvement actions.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Data Explorer</strong></td>
      <td>A query tool for content metadata; lets you explore who accessed which items, label distribution, sensitive data locations.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Activity Explorer</strong></td>
      <td>Shows <strong>user activities</strong> on labeled content \u2014 view, modify, print, email, share. Core signal for DSPM and IRM investigations.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Adaptive Protection</strong></td>
      <td>Dynamically applies stricter <strong>DLP</strong> policies as a user's <strong>insider-risk</strong> score increases \u2014 bridges IRM and DLP so a high-risk user automatically gets the strictest data controls without an admin having to change anything.</td>
    </tr>
  </tbody>
</table>
<h4>Sensitivity labels</h4>
<ul>
  <li><strong>Use cases</strong>:
    <ul>
      <li><strong>Confidential / Highly Confidential</strong> \u2014 restrict access to a specific group; encrypt with permission policy; add watermark.</li>
      <li><strong>Public</strong> \u2014 no restrictions; useful for explicit marking.</li>
      <li><strong>Business / General</strong> \u2014 internal only; might apply visual marking.</li>
      <li><strong>Regulatory</strong> \u2014 automatically applied via auto-labeling for PII, financial, healthcare, etc.</li>
    </ul>
  </li>
  <li>Apply in <strong>Office apps, Outlook, SharePoint, OneDrive, Teams, Power BI</strong>; <strong>travels with the file</strong> even when downloaded.</li>
  <li><strong>Auto-labeling</strong> \u2014 Microsoft-managed (built-in) or custom policies detect and label based on content inspection.</li>
</ul>
<h4>Data classification</h4>
<ul>
  <li><strong>Trainable classifiers</strong> \u2014 machine-learning models that identify categories like <em>Resume</em>, <em>Source Code</em>, <em>HR</em>, <em>Finance</em> (built-in) and custom categories you train.</li>
  <li><strong>Sensitive Information Types (SITs)</strong> \u2014 pattern matches (regex, checksum) for items like credit card, SSN, passport, IBAN.</li>
  <li><strong>Exact Data Match (EDM)</strong> \u2014 match against a structured database of sensitive records (e.g., patient IDs).</li>
  <li><strong>Activity classification</strong> \u2014 track which labels users apply and to what content.</li>
</ul>
<h4>Data lifecycle management</h4>
<ul>
  <li><strong>Retention policy</strong> \u2014 a tenant-level rule (e.g., "retain all Teams chat for 7 years then delete").</li>
  <li><strong>Retention label</strong> \u2014 content-level (e.g., a label "Customer Records \u2014 10 years" applied to files).</li>
  <li><strong>Archiving</strong> \u2014 move inactive content to cheaper storage while keeping it discoverable (e.g., Exchange Online Archiving, SharePoint site archive).</li>
  <li><strong>Disposition review</strong> \u2014 an approver confirms deletion before it happens.</li>
  <li><strong>Records management</strong> declares items as immutable <strong>records</strong> that cannot be edited or deleted.</li>
</ul>`
      },
      {
        id: "2-2",
        title: "2.2 Understand data security implications of Copilot",
        content: `<h4>How Copilot accesses data</h4>
<ul>
  <li><strong>Microsoft 365 Copilot is grounded in your tenant's data</strong> through Microsoft Graph.</li>
  <li>Copilot only retrieves content the <strong>signed-in user is permitted to see</strong>. Permissions travel with the data.</li>
  <li>Three retrieval layers: <strong>Graph search</strong> (permitted content), <strong>Semantic Index</strong> (pre-computed relationships), <strong>LLM</strong> (reasoning).</li>
  <li>The system prompt, conversation history, and grounding data are <strong>not</strong> used to train foundation models.</li>
</ul>
<h4>How Microsoft Graph influences Copilot responses</h4>
<ul>
  <li>Every Copilot response is composed from Graph-grounded context \u2014 files, emails, chats, meetings, people.</li>
  <li><strong>Permission-aware</strong> \u2014 Copilot respects SharePoint/OneDrive item-level permissions, Sensitivity Labels, mailbox delegation, Teams channel membership.</li>
  <li>If a user cannot access a document directly, <strong>Copilot cannot surface its content to them</strong> through another channel.</li>
  <li>Graph connectors extend the semantic index to <strong>third-party data</strong> (ServiceNow, Confluence, Salesforce, etc.), which is then fair game for Copilot grounding.</li>
</ul>
<h4>How Copilot uses permissions and other controls to protect against risks</h4>
<ul>
  <li><strong>Microsoft 365</strong> controls honored: SharePoint permissions, OneDrive sharing links, mailbox access, Teams channel membership, Sensitivity Label encryption.</li>
  <li><strong>Microsoft Purview</strong> controls honored:
    <ul>
      <li><strong>Sensitivity Labels</strong> \u2014 if a file is encrypted for "Finance group only", only Finance can have its content used.</li>
      <li><strong>DLP</strong> \u2014 DLP policy actions can block Copilot from pasting a sensitive number into a prompt or response.</li>
      <li><strong>DSPM for AI</strong> \u2014 surfaces risky prompts, overshared data sources, and prompt-injection patterns.</li>
      <li><strong>Activity Explorer</strong> \u2014 captures every Copilot action for audit.</li>
    </ul>
  </li>
  <li><strong>Microsoft Defender</strong> controls:
    <ul>
      <li><strong>Defender for Cloud Apps</strong> session policies apply to Copilot actions in cloud apps.</li>
      <li><strong>Defender XDR</strong> incidents can include Copilot-sourced signals.</li>
    </ul>
  </li>
  <li><strong>Customer Key</strong> \u2014 customer-managed encryption keys apply to content Copilot retrieves.</li>
  <li><strong>Customer Lockbox</strong> \u2014 Microsoft engineers require explicit tenant approval to access content.</li>
</ul>
<h4>Responsible AI principles</h4>
<ul>
  <li><strong>Fairness</strong> \u2014 Copilot should work consistently for all users, languages, and contexts.</li>
  <li><strong>Reliability and safety</strong> \u2014 outputs are designed to be testable; Copilot refuses harmful content.</li>
  <li><strong>Privacy and security</strong> \u2014 tenant data stays in your boundary, permissions are honored, actions are auditable.</li>
  <li><strong>Inclusiveness</strong> \u2014 accessible to people with disabilities (screen reader support, high-contrast, etc.).</li>
  <li><strong>Accountability</strong> \u2014 humans remain accountable; Copilot is an assistant, not a decision-maker.</li>
  <li><strong>Transparency</strong> \u2014 Microsoft publishes documentation about how Copilot works, the data it uses, and its limits.</li>
</ul>`
      },
      {
        id: "2-3",
        title: "2.3 Identify data protection and governance risks for Microsoft 365 and Copilot",
        content: `<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Use to identify\u2026</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Microsoft Purview Compliance Manager</strong></td>
      <td>Compliance posture gaps and improvement actions mapped to regulations (GDPR, ISO 27001, NIST 800-53, HIPAA, \u2026).</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Data Explorer</strong></td>
      <td>Where sensitive data lives, which sites/libraries/mailboxes contain it, label distribution.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Insider Risk Management</strong></td>
      <td>Risky user behavior \u2014 bulk download, off-hours activity, departing user + download pattern, security policy violations.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview DLP alerts</strong></td>
      <td>When a DLP policy is triggered \u2014 who did what, with which item, on which service, and the policy's response.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Communication Compliance</strong></td>
      <td>Policy violations in email and Teams \u2014 harassment, profanity, regulatory concerns, sensitive info leaks.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Activity Explorer</strong></td>
      <td>Per-user, per-file activity on labeled content \u2014 view, modify, share, email, print.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview DSPM for AI</strong></td>
      <td>Discovery and governance of AI activity \u2014 risky prompts, sensitive data flowing into AI, prompt-injection attempts.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview eDiscovery \u2014 Content Search</strong></td>
      <td>Search for files and emails by keyword, sender, recipient, label, date, location. Export results for legal review.</td>
    </tr>
    <tr>
      <td><strong>Microsoft Purview Audit</strong></td>
      <td>Unified audit log \u2014 every action across workloads, default 180 days (1 year with E5).</td>
    </tr>
  </tbody>
</table>
<blockquote><p>Exam tip: when a question asks <strong>"how do I find every file labeled Confidential that a user accessed last month?"</strong> \u2192 <strong>Activity Explorer</strong>.</p></blockquote>`
      },
      {
        id: "2-4",
        title: "2.4 Identify and monitor oversharing in SharePoint in Microsoft 365",
        content: `<h4>Tools to troubleshoot oversharing</h4>
<ul>
  <li><strong>SharePoint Advanced Management</strong> \u2014 the umbrella capability.</li>
  <li><strong>Data access governance reports</strong> \u2014 surface sites, libraries, and files that are broadly shared.</li>
  <li><strong>Microsoft Purview DSPM for AI</strong> \u2014 flags sites feeding too much data into Copilot without restriction.</li>
  <li><strong>SharePoint admin center \u2192 Reports</strong> \u2014 sharing summary, file activity, sharing links inventory.</li>
</ul>
<h4>Run a data access governance report</h4>
<ol>
  <li>Go to <strong>SharePoint admin center</strong> (or <strong>https://aka.ms/spoda</strong>).</li>
  <li>Open <strong>Reports</strong> \u2192 <strong>Data access governance</strong>.</li>
  <li>Select a site or run across all sites.</li>
  <li>The report shows: <strong>broken inheritance</strong>, <strong>access requests</strong>, <strong>external sharing</strong>, <strong>Anyone links</strong>, <strong>label distribution</strong>, <strong>sensitivity label violations</strong>.</li>
  <li>Use the report to drive remediation: tighten sharing, apply labels, restrict access, or move to a private channel.</li>
</ol>
<h4>SharePoint Advanced Management (key features)</h4>
<ul>
  <li><strong>Restricted Site Access</strong> \u2014 limit content visibility to a specified Entra ID group, even if users have access to the parent site.</li>
  <li><strong>Oversharing reports / Permission site report</strong> \u2014 see what's been shared too broadly; lets a site owner do a <strong>site access review</strong> to validate who really needs access.</li>
  <li><strong>Conditional access for SharePoint sites</strong> \u2014 block access from unmanaged devices.</li>
  <li><strong>Inactive site lifecycle</strong> \u2014 auto-archive or delete inactive sites.</li>
  <li><strong>Change history</strong> \u2014 see who changed permissions.</li>
  <li><strong>Site ownership policy</strong> \u2014 enforces a minimum number of owners (e.g., <strong>at least 2</strong>) on every site.</li>
  <li><strong>Restricted content discovery (site level)</strong> \u2014 opt a site out of being indexed and used as Copilot / Semantic Index ground. The site is still browseable by its existing members, but Copilot won't include its content in answers.</li>
  <li><strong>Restricted SharePoint Search</strong> \u2014 tenant-level, restricts Copilot's grounding to a hand-picked allow-list of up to <strong>100 sites</strong> (hub sites and their child sites are not counted toward the 100). Useful while you clean up permissions.</li>
</ul>`
      }
    ],
    keyConcepts: {
      title: "2.5 Key Concepts",
      tags: ["Purview Information Protection", "Sensitivity Label", "Auto-labeling", "DLP", "DLP Alert", "Insider Risk Management", "Communication Compliance", "DSPM for AI", "Data Lifecycle Management", "Retention Policy", "Retention Label", "Disposition Review", "Records Management", "Archiving", "Compliance Manager", "Data Explorer", "Activity Explorer", "Content Search", "eDiscovery Standard", "eDiscovery Premium", "Trainable Classifier", "Sensitive Information Type", "EDM", "Graph", "Semantic Index", "Grounding", "Customer Key", "Customer Lockbox", "Responsible AI", "Fairness", "Reliability", "Privacy", "Inclusiveness", "Accountability", "Transparency", "SharePoint Advanced Management", "Restricted Site Access", "Data Access Governance Report", "Oversharing"]
    }
  },

  // ============================================================
  // DOMAIN 3
  // ============================================================
  {
    id: "domain3",
    title: "DOMAIN 3 \u2014 Perform basic administrative tasks for Copilot and agents (25\u201330%)",
    subsections: [
      {
        id: "3-1",
        title: "3.1 Understand features and capabilities of Copilot and agents",
        content: `<h4>Microsoft 365 Copilot architecture (Module 4, Unit 2)</h4>
<ul>
  <li><strong>LLM</strong> \u2014 the model that produces natural language by predicting the next most probable <em>token</em>.</li>
  <li><strong>Microsoft Graph</strong> \u2014 the data + permissions layer (retrieves permitted content via Microsoft Graph APIs).</li>
  <li><strong>Semantic Index</strong> \u2014 pre-computed relationships across users, content, and concepts. Sits on top of Graph so natural-language queries return contextually relevant results.</li>
  <li><strong>Orchestrator / Copilot system</strong> \u2014 coordinates the prompt, retrieval, and response. Adds a <strong>system prompt</strong> to instruct the LLM on tone, format, and behavior.</li>
  <li><strong>Content safety</strong> \u2014 filters both prompt and response for harmful or offensive content.</li>
  <li><strong>Groundedness detection</strong> \u2014 flags answers that are not supported by the retrieved grounding data (hallucination control).</li>
  <li><strong>Apps</strong> \u2014 Word, Excel, PowerPoint, Outlook, OneNote, Teams, Business Chat (now <strong>Microsoft 365 Copilot Chat</strong>).</li>
  <li><strong>Microsoft 365 Copilot Chat</strong> \u2014 the free / built-in chat surface available to all Entra users (web-grounded only); <strong>Microsoft 365 Copilot</strong> is the paid licensed version that adds work-grounded answers via Graph.</li>
</ul>
<blockquote><p><strong>No training on your data</strong>: prompts, responses, and tenant data are never used to train the foundation LLMs.</p></blockquote>
<h4>Compare the built-in capabilities of Copilot and agents</h4>
<table>
  <thead>
    <tr>
      <th>Capability</th>
      <th>Microsoft 365 Copilot</th>
      <th>Agents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Scope</strong></td>
      <td>General assistant across M365</td>
      <td>Scoped to a specific role/task</td>
    </tr>
    <tr>
      <td><strong>Built-in</strong></td>
      <td>Yes (Word, Excel, PPT, Outlook, Teams, \u2026)</td>
      <td><strong>Pre-built</strong> (Researcher, Analyst, \u2026) or <strong>Custom</strong></td>
    </tr>
    <tr>
      <td><strong>Grounding</strong></td>
      <td>Microsoft Graph + Semantic Index</td>
      <td>Same, plus knowledge sources you specify</td>
    </tr>
    <tr>
      <td><strong>Autonomy</strong></td>
      <td>Reactive to user prompts</td>
      <td>Can run <strong>autonomously</strong>, multi-step, on a schedule or trigger</td>
    </tr>
    <tr>
      <td><strong>Customization</strong></td>
      <td>Limited (prompts only)</td>
      <td>Configurable in Copilot Studio: knowledge, actions, instructions, rules</td>
    </tr>
  </tbody>
</table>
<h4>What are agents? (Module 4, Unit 3)</h4>
<ul>
  <li>Specialized AI assistants built on top of Copilot that perform a specific job.</li>
  <li><strong>Types</strong>:
    <ul>
      <li><strong>Prebuilt agents</strong> \u2014 Researcher, Analyst, plus Microsoft-authored agents in the Agent Store (e.g., Writing Coach, Prompt Coach).</li>
      <li><strong>Custom agents</strong> \u2014 built in Copilot Studio or via declarative manifest.</li>
      <li><strong>SharePoint agents</strong> \u2014 scoped to a single site, no authoring required.</li>
      <li><strong>Advanced / custom engine agents</strong> \u2014 full control via <strong>Azure AI Foundry</strong> + Teams (pro-code, VS Code-style development).</li>
    </ul>
  </li>
</ul>
<h4>Agent identity</h4>
<ul>
  <li>Agents typically need <strong>their own identity</strong> because they often operate across data the calling user may not see (or across many users at once).</li>
  <li>Historically: a special service account (for Azure resources) or managed identity.</li>
  <li><strong>New: Entra Agent ID (preview)</strong> \u2014 Microsoft now gives agents their own first-class identity in Entra so they can be governed, audited, and assigned their own permissions. Automatically assigned to agents created in Copilot Studio, M365 Copilot, Security Copilot, and Foundry.</li>
</ul>
<h4>MCP (Model Context Protocol)</h4>
<ul>
  <li>An open standard for AI apps to talk to <strong>additional knowledge</strong> and <strong>tools</strong> in a way LLMs understand natively.</li>
  <li>When designing agents, <strong>prefer APIs and MCP servers</strong> over <strong>computer-use / GUI scripting</strong> \u2014 the UI can change and break computer-use agents, whereas APIs/MCPs are stable and auditable.</li>
</ul>
<h4>License model: monthly vs pay-as-you-go (incl. SharePoint) \u2014 Module 4, Unit 5</h4>
<ul>
  <li><strong>Microsoft 365 Copilot monthly license</strong> \u2014 <strong>per-user</strong>, predictable, ~<strong>$30 USD/user/month</strong>, attached to a user.</li>
  <li><strong>Pay-as-you-go</strong> \u2014 metered consumption billed through an <strong>Azure subscription</strong>; available for <strong>Copilot Studio messages</strong> and <strong>SharePoint</strong> (Copilot on SharePoint sites can be billed per message).</li>
  <li>Choose <strong>PAYG</strong> when usage is variable; choose <strong>per-user</strong> when usage is high and predictable.</li>
  <li>You can also purchase <strong>Copilot Credit Packs</strong> for burst capacity (pre-paid Copilot Studio messages).</li>
  <li><strong>Copilot Chat (free)</strong> \u2014 web-grounded only, no Microsoft Graph / work data.</li>
  <li><strong>M365 Copilot Chat (paid)</strong> \u2014 adds work-grounded answers on top of Copilot Chat.</li>
  <li><strong>Copilot Studio</strong> \u2014 separate licensing; can be bought as credit packs or PAYG.</li>
  <li><strong>Copilot for personal/family</strong> plans \u2014 gets you in-app agent capabilities, but <strong>not</strong> grounded in work data.</li>
</ul>
<h4>Plan family notes the exam loves</h4>
<ul>
  <li><strong>M365 Business</strong> plans (Basic, Standard, Premium) \u2014 capped at <strong>300 users</strong>, lack <strong>Purview</strong> and <strong>Insider Risk Management</strong> features that the E3/E5 plans include.</li>
  <li><strong>M365 E3 / E5</strong> \u2014 enterprise plans; E5 unlocks the <strong>Plan 2</strong> Defender for Office 365 (Threat Explorer, Attack simulation training) and full Purview.</li>
  <li><strong>M365 E5 Compliance</strong> and <strong>E5 Security</strong> add-ons \u2014 can be stacked on E3 to get just the compliance or security pieces.</li>
  <li><strong>Office E3/E5</strong> + Copilot add-on \u2014 alternative path for orgs that don't want the full M365 suite.</li>
</ul>
<h4>PAYG billing in Azure</h4>
<ul>
  <li>The PAYG resource is hidden in the Azure portal by default \u2014 switch the view to "show hidden" to find it.</li>
  <li>You can apply <strong>Azure budgets</strong>, <strong>cost analysis</strong>, <strong>cost alerts</strong>, and <strong>spend thresholds</strong> because the consumption is just an Azure meter.</li>
</ul>
<h4>Plan and deploy Copilot and agents (Module 4, Unit 6)</h4>
<p><strong>Readiness checklist</strong> (apply before broad rollout):</p>
<ul>
  <li><strong>Identity &amp; access</strong> \u2014 Entra ID healthy; Conditional Access + phishing-resistant MFA for admins.</li>
  <li><strong>Content</strong> \u2014 run oversharing reports; clean up broad links; apply Sensitivity Labels.</li>
  <li><strong>Licenses</strong> \u2014 Copilot licenses purchased; Power Platform / Azure subscription for PAYG.</li>
  <li><strong>Data security</strong> \u2014 Purview DLP and DSPM for AI enabled; Customer Lockbox configured.</li>
  <li><strong>Adoption strategy</strong> \u2014 pilot group, training, champion network, feedback channel (Forms or Teams), exec sponsorship.</li>
  <li><strong>Phased rollout</strong>: <strong>Pilot \u2192 Evaluate \u2192 Expand \u2192 Optimize</strong>.</li>
  <li><strong>Connectors</strong> \u2014 approve Graph connectors you intend to ground against.</li>
  <li><strong>Network</strong> \u2014 Copilot endpoints reachable; no proxy blocks for required APIs.</li>
  <li><strong>Change management</strong> \u2014 user comms plan, champion network, training schedule, feedback channel.</li>
</ul>
<p><strong>Phased rollout</strong>:</p>
<ul>
  <li><strong>Pilot</strong> \u2014 10\u201320 power users, IT team, a single workload.</li>
  <li><strong>Evaluate</strong> \u2014 Copilot Analytics, Adoption Score, feedback survey, sensitive data exposure.</li>
  <li><strong>Expand</strong> \u2014 broader business unit, more workloads, more agents.</li>
  <li><strong>Optimize</strong> \u2014 tune policies, retire blockers, share best prompts.</li>
</ul>
<h4>Real-world use cases for Copilot and agents (Module 4, Unit 7)</h4>
<ul>
  <li><strong>Researcher agent</strong> \u2014 multi-step research with citations across the web and your tenant.</li>
  <li><strong>Analyst agent</strong> \u2014 turn raw data (Excel, CSVs) into insights, run Python-style reasoning.</li>
  <li><strong>HR FAQ agent</strong> (SharePoint agent) \u2014 answers employee questions from the HR handbook.</li>
  <li><strong>IT helpdesk agent</strong> \u2014 triages tickets, suggests known solutions.</li>
  <li><strong>Sales deal-summary agent</strong> \u2014 pulls the latest CRM + email + meeting notes into a one-pager.</li>
  <li><strong>Customer service copilot</strong> \u2014 drafts replies grounded by knowledge base + ticket history.</li>
  <li><strong>Onboarding agent</strong> \u2014 creates accounts, sends welcome emails, schedules orientation.</li>
  <li><strong>Project "ask me anything" agent</strong> \u2014 scoped to a single SharePoint project site.</li>
</ul>
<h4>Which Copilot features can be enabled or disabled</h4>
<ul>
  <li><strong>Tenant-level controls</strong> (Microsoft 365 admin center \u2192 Copilot settings):
    <ul>
      <li><strong>Web content access</strong> \u2014 Off / On (with or without Bing grounding).</li>
      <li><strong>Plugin / connector controls</strong> \u2014 block or allow specific plugins tenant-wide.</li>
      <li><strong>Per-app enablement</strong> \u2014 disable Copilot in specific apps (Word, Excel, Outlook, Teams, etc.).</li>
      <li><strong>Data security</strong> integration with Purview.</li>
    </ul>
  </li>
  <li><strong>Per-user</strong> \u2014 controlled by license assignment (no license \u2192 no access).</li>
  <li><strong>Per-content</strong> \u2014 Sensitivity Labels can prevent Copilot from using labeled content.</li>
</ul>
<h4>Use cases for Researcher</h4>
<ul>
  <li><strong>Deep research</strong> \u2014 multi-step web + work research, planning, citations.</li>
  <li>Tasks: <em>compile a market analysis with citations from my files and the web</em>, <em>draft a competitive landscape report</em>.</li>
</ul>
<h4>Use cases for Analyst</h4>
<ul>
  <li><strong>Data analysis</strong> \u2014 turns raw data (Excel, tables, CSVs) into insights; runs Python-style reasoning.</li>
  <li>Tasks: <em>summarize this sales table by region</em>, <em>forecast next quarter's revenue</em>, <em>find anomalies in this log</em>.</li>
</ul>
<h4>Use cases for custom agents</h4>
<ul>
  <li><strong>Department-specific</strong> \u2014 HR FAQ agent that pulls from a SharePoint handbook.</li>
  <li><strong>Process automation</strong> \u2014 onboarding agent that creates accounts, sends welcome emails, schedules orientation.</li>
  <li><strong>Knowledge surface</strong> \u2014 a SharePoint site agent that answers questions about a single project.</li>
  <li><strong>Customer/partner-facing</strong> \u2014 a public agent embedded on a website.</li>
</ul>`
      },
      {
        id: "3-2",
        title: "3.2 Perform basic administrative tasks for Copilot (Module 5)",
        content: `<h4>Manage Copilot licenses and pay-as-you-go billing</h4>
<ol>
  <li><strong>Microsoft 365 admin center</strong> \u2192 <strong>Billing</strong> \u2192 <strong>Licenses</strong> \u2192 assign <strong>Microsoft 365 Copilot</strong> to users or groups.</li>
  <li>Verify prerequisites per user: <strong>Copilot license + active Exchange mailbox + OneDrive provisioned + Microsoft Search healthy</strong>.</li>
  <li>For <strong>PAYG</strong>: Microsoft 365 admin center \u2192 <strong>Copilot</strong> \u2192 <strong>Billing &amp; usage</strong> \u2192 select the <strong>Azure subscription</strong> that will be charged.</li>
  <li>Set <strong>budget limits</strong> to prevent runaway spend.</li>
</ol>
<h4>Monitor and adjust pay-as-you-go Copilot usage</h4>
<ul>
  <li>Open <strong>Copilot</strong> \u2192 <strong>Billing &amp; usage</strong> in the admin center.</li>
  <li>Inspect <strong>metered consumption</strong> by workload (Copilot Studio, SharePoint, etc.).</li>
  <li><strong>Adjust</strong> by:
    <ul>
      <li>Switching users from PAYG to per-user licenses (when usage is consistently high).</li>
      <li>Tightening DLP policies on connectors (when usage is high-risk).</li>
      <li>Switching from PAYG to <strong>Credit Packs</strong> (when usage is spiky).</li>
      <li>Disabling specific Copilot features that drive cost (web grounding, plugins).</li>
    </ul>
  </li>
</ul>
<h4>Monitor Microsoft 365 Copilot usage and adoption</h4>
<ul>
  <li><strong>Microsoft 365 admin center \u2192 Reports \u2192 Copilot dashboard</strong> \u2014 license utilization, active users, top prompts, top apps used.</li>
  <li><strong>Copilot Analytics</strong> (under Reports) \u2014 adoption score, prompt quality, prompt-injection attempts surfaced by DSPM for AI.</li>
  <li><strong>Viva Insights</strong> \u2014 workplace analytics view including Copilot usage.</li>
  <li><strong>Microsoft Purview \u2192 Activity Explorer</strong> \u2014 per-user AI activity (view, copy, paste) on labeled content.</li>
  <li><strong>Adoption strategy</strong>: identify champions, share prompt libraries, track department-level adoption, run lunch-and-learns.</li>
</ul>
<h4>Manage and govern Microsoft 365 Copilot prompts</h4>
<p>Prompts in Copilot can be:</p>
<ul>
  <li><strong>Saved</strong> \u2014 bookmark useful prompts for reuse (per user, in the Copilot chat panel).</li>
  <li><strong>Shared</strong> \u2014 distribute a prompt template to teammates (where the app supports it).</li>
  <li><strong>Scheduled</strong> \u2014 trigger a prompt to run on a schedule and deliver a result (e.g., daily summary email).</li>
  <li><strong>Deleted</strong> \u2014 remove a saved prompt from the user's library.</li>
  <li><strong>Governed</strong> \u2014 admin-published shared prompt libraries appear alongside user prompts.</li>
</ul>
<blockquote><p>Admin note: prompts are tied to the user; admins do not directly edit a user's saved prompts but can <strong>delete</strong> user-level prompts in some workloads, and can <strong>publish</strong> shared prompt templates via channels.</p></blockquote>
<h4>Apply operational best practices for Microsoft 365 Copilot (Module 5, Unit 6)</h4>
<ul>
  <li><strong>Troubleshoot common issues</strong>:
    <ul>
      <li>User can't see Copilot \u2192 check license, app enablement, region rollout, Microsoft 365 app version.</li>
      <li>Copilot returns no content \u2192 check Graph permissions, Sensitivity Label encryption, broken Search index, restricted content discovery, restricted SharePoint search.</li>
      <li>Slow responses \u2192 check tenant health, network egress, Microsoft 365 service health.</li>
    </ul>
  </li>
  <li><strong>Communicate changes to end users</strong>:
    <ul>
      <li>Pre-launch emails with "what to expect" + screenshots.</li>
      <li>Champion network / early adopters for peer support.</li>
      <li>"Prompt of the week" communications.</li>
      <li>Feedback channel (Forms or Teams) feeding back into Copilot Analytics.</li>
    </ul>
  </li>
  <li><strong>Operational excellence</strong>:
    <ul>
      <li>Track Secure Score and Identity Secure Score trends.</li>
      <li>Run Attack Simulator phishing campaigns quarterly.</li>
      <li>Review DLP and IRM alerts weekly.</li>
      <li>Audit admin role assignments with <strong>Access Reviews</strong> (Entra ID Governance).</li>
      <li><strong>Reclaim underused Copilot licenses</strong> \u2014 identify users with a license but low usage in Copilot Analytics and reassign the license to someone else.</li>
    </ul>
  </li>
  <li><strong>Adoption strategy</strong>:
    <ul>
      <li>Tenant-level toggles are blunt \u2014 <strong>prefer group-level enablement</strong> to run a clean <strong>pilot</strong> first.</li>
      <li>Pair rollout with training, exec sponsorship, and a feedback loop.</li>
      <li>Publish a "Prompt of the week" and a shared prompt library.</li>
      <li>Use <strong>Copilot Analytics</strong> (in the admin center) and <strong>Viva Insights \u2192 Copilot Analytics</strong> for adoption KPIs.</li>
    </ul>
  </li>
</ul>`
      },
      {
        id: "3-3",
        title: "3.3 Perform basic administrative tasks for agents (Module 6)",
        content: `<h4>Create a Microsoft 365 Copilot Chat agent (Part 1 &amp; Part 2)</h4>
<p><strong>Path A \u2014 from Copilot Studio</strong> (https://copilotstudio.microsoft.com):</p>
<ol>
  <li><strong>Create</strong> \u2192 <strong>New agent</strong> (or start from a <strong>template</strong> \u2014 Copilot Studio offers templates for common agent types).</li>
  <li><strong>Describe mode</strong> \u2014 natural-language description: name, purpose, tone, audience. Copilot Studio works out the rest for you.</li>
  <li><strong>Configure mode</strong> \u2014 set:
    <ul>
      <li><strong>Icon, name, description</strong>.</li>
      <li><strong>Instructions and Rules</strong> \u2014 system prompt with tone, what the agent should do, hard rules/guardrails.</li>
      <li><strong>Knowledge sources</strong> \u2014 up to <strong>20</strong> sources (public websites, SharePoint sites, Dataverse, Dynamics 365, Fabric, uploaded files <strong>up to 512 MB each</strong>). The agent respects your existing <strong>sensitivity labels</strong> and lets you restrict what it may use.</li>
      <li><strong>Web access toggle</strong> \u2014 whether the agent may also use <strong>Bing</strong> for additional context.</li>
      <li><strong>Suggested prompts</strong> \u2014 pre-built prompts surfaced to the user.</li>
      <li><strong>Actions / Tools</strong> (Power Automate flows) \u2014 call APIs, write to Dataverse, create tickets.</li>
      <li><strong>Topics</strong> (intents the agent recognizes).</li>
      <li><strong>Authentication</strong> (Entra ID, anonymous, or per-user).</li>
    </ul>
  </li>
  <li><strong>Test</strong> in the built-in chat panel (Test pane) at any time.</li>
  <li><strong>Edit</strong> responses, intents, triggers, knowledge, and actions as needed.</li>
  <li><strong>Publish</strong> to Microsoft 365 Copilot, Teams, or a custom website.</li>
</ol>
<blockquote><p><strong>Autonomous agents</strong> require a <strong>trigger</strong> (e.g., email received, schedule) and a clear set of instructions \u2014 they execute without a user in the loop.</p></blockquote>
<p><strong>Path B \u2014 Microsoft 365 Copilot Chat directly</strong> (Module 6, Units 2\u20133):</p>
<ol>
  <li>Open <strong>https://copilot.cloud.microsoft</strong> or the <strong>Copilot Chat</strong> surface in Teams/Outlook.</li>
  <li>Click the <strong>Create an agent</strong> / <strong>Copilot Studio</strong> entry point.</li>
  <li>Walk through the same Describe/Configure flow inline.</li>
  <li>Save as draft or publish.</li>
</ol>
<h4>Create a SharePoint agent (Module 6, Unit 4)</h4>
<ol>
  <li>Navigate to a <strong>SharePoint site</strong>.</li>
  <li>Click <strong>New \u2192 Agent</strong> (or use the Copilot entry point in the site command bar).</li>
  <li>The agent is <strong>scoped to one site or library</strong> (principle of least privilege).</li>
  <li>Choose <strong>data sources</strong> (files, pages, lists within the site).</li>
  <li>Set <strong>access permissions</strong> \u2014 inherit from SharePoint (the agent can only see what the user can see).</li>
  <li><strong>Name</strong>, <strong>icon</strong>, and <strong>description</strong> the agent.</li>
  <li><strong>Publish</strong> \u2014 the agent appears in SharePoint and in Microsoft 365 Copilot for users with access.</li>
</ol>
<blockquote><p>Exam tip: A SharePoint agent is the <strong>fastest path</strong> to a working, governed agent \u2014 no Copilot Studio required, permissions inherited automatically.</p></blockquote>
<h4>Test and edit your agents (Module 6, Unit 5)</h4>
<ul>
  <li><strong>Test in the Copilot Studio test pane</strong> \u2014 send prompts, validate responses, check knowledge retrieval and tool invocations.</li>
  <li><strong>Trace</strong> \u2014 view the <strong>conversation transcript</strong> with reasoning steps and the documents/tools used.</li>
  <li><strong>Topic editing</strong> \u2014 adjust intents, trigger phrases, and fallback behavior.</li>
  <li><strong>Knowledge tuning</strong> \u2014 add/remove sources, set per-source priority, filter by URL.</li>
  <li><strong>Action editing</strong> \u2014 modify Power Automate flow parameters, error handling, and authentication.</li>
  <li><strong>User simulator</strong> \u2014 run scripted test scenarios against the agent.</li>
  <li><strong>Versioning</strong> \u2014 Copilot Studio keeps a version history; you can revert.</li>
</ul>
<h4>Manage user access and permissions for agents (Module 6, Unit 6)</h4>
<ul>
  <li><strong>Tenant-level</strong> \u2014 Microsoft 365 admin center \u2192 <strong>Settings \u2192 Copilot \u2192 Agents</strong> (or Power Platform admin center for Copilot Studio agents).</li>
  <li><strong>Per-agent</strong> \u2014 in <strong>Copilot Studio</strong>, share a published agent with:
    <ul>
      <li><strong>Specific users / groups</strong> (Entra ID security groups or Microsoft 365 groups).</li>
      <li><strong>Everyone in the organization</strong> (publish to the M365 Copilot agent store).</li>
      <li><strong>External</strong> \u2014 public website, authenticated or anonymous.</li>
    </ul>
  </li>
  <li><strong>Security roles in Copilot Studio</strong> \u2014 User (can chat), Owner (full control), Editor (modify without owning).</li>
  <li><strong>Channel-by-channel</strong> \u2014 separate sharing for Teams, Microsoft 365 Copilot, and web embed.</li>
  <li><strong>Power Platform</strong> \u2014 environment-level access controls (DLP policies, environment security groups).</li>
</ul>
<h4>Examine agent approval and governance (Module 6, Unit 7)</h4>
<ul>
  <li><strong>Microsoft 365 admin center</strong> \u2192 <strong>Copilot</strong> \u2192 <strong>Agent inventory</strong> shows pending agents and the approval workflow.</li>
  <li><strong>Power Platform admin center</strong> \u2192 <strong>Agents</strong> shows Copilot Studio agents and their distribution status.</li>
  <li>When an agent is created with a new <strong>connector</strong>, the connector may need to be classified (Business, Non-business, Blocked) and the agent may need DLP-policy review.</li>
  <li><strong>Governance policies</strong> to apply:
    <ul>
      <li><strong>DLP for connectors</strong> \u2014 block or allow connectors per environment.</li>
      <li><strong>Managed environment</strong> \u2014 restrict who can create apps/agents.</li>
      <li><strong>Agent Store curation</strong> \u2014 admin controls which prebuilt agents are available.</li>
      <li><strong>Sensitivity Label</strong> the agent's instructions/data.</li>
      <li><strong>Customer Lockbox</strong> for Microsoft access to agent data.</li>
    </ul>
  </li>
</ul>
<h4>Monitor and manage the agent lifecycle (Module 6, Unit 8)</h4>
<ul>
  <li><strong>Microsoft 365 admin center \u2192 Copilot \u2192 Agent inventory</strong> \u2014 list of agents in the tenant, owner, usage, last activity, lifecycle status.</li>
  <li><strong>Copilot Studio analytics</strong> \u2014 per-agent usage, success rate, escalation rate, session transcripts (with privacy controls).</li>
  <li><strong>Power Platform admin center</strong> \u2014 agent lifecycle (create / publish / disable / delete), <strong>operational insights</strong> (errors, throttling, message volume), and <strong>environment management</strong> (Dev/Test/Production).</li>
  <li><strong>Microsoft Purview \u2192 DSPM for AI</strong> \u2014 risky prompts, sensitive data exposure, prompt-injection incidents involving agents.</li>
  <li><strong>Lifecycle stages</strong>:
    <ol>
      <li><strong>Draft</strong> \u2014 author in Copilot Studio.</li>
      <li><strong>Test</strong> \u2014 internal validation with the test pane and user simulator.</li>
      <li><strong>Publish</strong> \u2014 make available to a target audience.</li>
      <li><strong>Operate</strong> \u2014 monitor usage, errors, cost, satisfaction.</li>
      <li><strong>Retire</strong> \u2014 disable, archive, or delete; revoke access; export conversation logs if needed.</li>
    </ol>
  </li>
</ul>`
      }
    ],
    keyConcepts: {
      title: "3.4 Key Concepts",
      tags: ["Microsoft 365 Copilot", "Microsoft 365 Copilot Chat", "Copilot Studio", "Pre-built Agent", "Custom Agent", "Researcher", "Analyst", "Per-user license", "Pay-as-you-go (PAYG)", "Credit Packs", "Azure subscription", "Web content access", "Plugin control", "Per-app enablement", "Copilot Analytics", "Copilot Dashboard", "Viva Insights", "Adoption Score", "Prompt", "Saved prompt", "Shared prompt", "Scheduled prompt", "Champion network", "Agent inventory", "Approval workflow", "Agent lifecycle", "Operational insights", "Power Platform admin center", "Connector classification", "DLP policy for agents", "Describe mode", "Configure mode", "Knowledge source", "SharePoint agent", "Tenant-level vs per-agent sharing", "Test pane", "Versioning", "User simulator", "MCP", "Entra Agent ID", "Work IQ", "Foundry", "Content Safety", "Groundedness Detection", "Hallucination", "512 MB file limit", "Business plan 300-user cap", "Pilot"]
    }
  },

  // ============================================================
  // SUPPLEMENT: John Savill's AB-900 Study Cram
  // ============================================================
  {
    id: "supplement-savill",
    title: "Supplemental Notes \u2014 John Savill's AB-900 Study Cram",
    subsections: [
      {
        id: "s-1",
        title: "S.1 Zero Trust & identity (recap with key phrasing)",
        content: `<ul>
  <li><strong>Zero Trust is not a product</strong> \u2014 no single toggle or SKU turns it on. It's a <em>combination</em> of policies, processes, and configurations.</li>
  <li><strong>Authentication = proving who you are</strong> (n factor). <strong>Authorization = what you're allowed to do</strong> (z factor). The exam uses this n/z shorthand.</li>
  <li><strong>MFA</strong> needs 2+ of: something you <em>know</em> (password/PIN), <em>have</em> (phone, FIDO key), or <em>are</em> (biometric).</li>
  <li>A <strong>passkey is still 2 factors</strong>: the device (something you have) + PIN/biometric (something you know/are).</li>
  <li>Passkeys are <strong>phishing-resistant</strong> because they only work against the exact domain they were issued for and require physical proximity (Bluetooth/NFC) when on a phone.</li>
</ul>`
      },
      {
        id: "s-2",
        title: "S.2 Conditional Access",
        content: `<ul>
  <li><strong>Authentication strengths</strong> (built-in: "Multifactor", "Phishing-resistant MFA") can be required per app \u2014 common for high-value apps.</li>
  <li>Use <strong>session controls</strong> (sign-in frequency, continuous access evaluation) to <em>continuously</em> validate, not just at sign-in.</li>
  <li><strong>Global Secure Access client</strong> is Microsoft's SSE client and integrates with Conditional Access for private-resource and internet access.</li>
  <li>Use the <strong>"What If"</strong> tool in Entra to test a CA policy <em>before</em> turning it on.</li>
</ul>`
      },
      {
        id: "s-3",
        title: "S.3 Identity & Entra ID",
        content: `<ul>
  <li><strong>Three hybrid auth options</strong> (know the trade-offs):
    <ul>
      <li><strong>Password Hash Sync (PHS)</strong> \u2014 <em>preferred</em>; no on-prem dependency; supports leaked-credential detection.</li>
      <li><strong>Pass-Through Authentication (PTA)</strong> \u2014 DC must be reachable; some AD-specific features.</li>
      <li><strong>Federation (AD FS)</strong> \u2014 heavy on-prem footprint; today prefer to federate SaaS apps <em>with</em> Entra.</li>
    </ul>
  </li>
  <li><strong>SSPR for hybrid</strong> requires <strong>Password Writeback</strong> in Entra Connect.</li>
  <li><strong>Verified ID / Verifiable Credentials (preview)</strong> \u2014 decentralized identity stored in a digital wallet; lets a user re-prove identity to Entra after losing their password.</li>
  <li><strong>Dynamic groups</strong> \u2014 rule-based membership (e.g., <code>department = Sales</code>). Cleans up "lingering permissions" automatically.</li>
  <li><strong>Microsoft 365 groups</strong> = collaboration (mailbox, calendar, SharePoint library).</li>
  <li><strong>Mail-enabled security groups</strong> = security group that also accepts email.</li>
  <li><strong>Distribution lists</strong> can only be created in the M365 admin portal (not Entra).</li>
</ul>`
      },
      {
        id: "s-4",
        title: "S.4 Defender XDR \u2014 exam pearls",
        content: `<ul>
  <li><strong>Defender for Office 365 Plan 2</strong> ships with <strong>M365 E5</strong> and unlocks <strong>Threat Explorer</strong> and <strong>Attack simulation training</strong>.</li>
  <li><strong>Attack path tracking</strong> in Defender for Endpoint shows the kill chain visually (email \u2192 click \u2192 process \u2192 lateral movement \u2192 credentials).</li>
  <li><strong>Threat analytics</strong> \u2014 Microsoft-curated threat-intelligence reports.</li>
  <li><strong>Attack simulation training</strong> \u2014 run phishing simulations and convert failures into instant training.</li>
</ul>`
      },
      {
        id: "s-5",
        title: "S.5 Purview",
        content: `<ul>
  <li><strong>Adaptive Protection</strong> \u2014 automatically tightens DLP policies as Insider Risk score rises. The bridge between IRM and DLP.</li>
  <li><strong>DLP can target Copilots</strong> \u2014 block Copilot from using data labeled "Highly Confidential".</li>
  <li><strong>DSPM for AI</strong> \u2014 captures AI prompts and responses, lets you see Copilot interactions for the last 30 days in Activity Explorer, and detects <strong>shadow AI</strong> (non-corporate AI services).</li>
  <li><strong>Restricted content discovery</strong> = site-level opt-out of Copilot grounding (members still see it, Copilot doesn't).</li>
  <li><strong>Restricted SharePoint Search</strong> = tenant-level, up to 100 sites; hub sites + children don't count toward the 100. While you clean up, restrict Copilot to a hand-picked allow-list.</li>
</ul>`
      },
      {
        id: "s-6",
        title: "S.6 AI architecture \u2014 what to say out loud",
        content: `<ol>
  <li><strong>User enters prompt</strong>.</li>
  <li><strong>Copilot orchestrator</strong> decides if it needs more info.</li>
  <li><strong>Microsoft Graph + Semantic Index</strong> retrieve permitted content (RAG).</li>
  <li><strong>System prompt + grounding data</strong> go to the <strong>LLM</strong>.</li>
  <li><strong>Content safety + groundedness detection</strong> check the response.</li>
  <li><strong>Response goes back to the user</strong>.</li>
  <li><strong>No training</strong> of the LLM happens on your prompts, responses, or data.</li>
</ol>`
      },
      {
        id: "s-7",
        title: "S.7 Agents \u2014 exam pearls",
        content: `<ul>
  <li><strong>Pre-built</strong>: Researcher (deep research), Analyst (data), Writing Coach, Prompt Coach, SharePoint site agent.</li>
  <li><strong>Custom</strong>: Copilot Studio (low-code) or VS Code + Foundry (pro-code).</li>
  <li><strong>Prefer APIs and MCP</strong> over <strong>computer-use / GUI scripting</strong> for agents \u2014 GUIs change.</li>
  <li><strong>Templates</strong> are available in Copilot Studio \u2014 you don't have to start blank.</li>
  <li><strong>Files in knowledge</strong> \u2014 up to <strong>512 MB each</strong>.</li>
  <li><strong>Up to 20 knowledge sources</strong> per agent.</li>
  <li><strong>Autonomous agents</strong> have a <strong>trigger</strong> (event or schedule) and run hands-off.</li>
  <li><strong>Entra Agent ID (preview)</strong> \u2014 agents get their own Entra identity for governance and audit.</li>
  <li><strong>Approval workflow</strong> \u2014 admins can require new agents to be approved before publishing tenant-wide.</li>
</ul>`
      },
      {
        id: "s-8",
        title: "S.8 Adoption & licensing tips",
        content: `<ul>
  <li><strong>Group-level Copilot settings</strong> beat tenant-level toggles \u2014 easier to run a clean pilot.</li>
  <li><strong>Pilot \u2192 Evaluate \u2192 Expand \u2192 Optimize</strong>.</li>
  <li>Use <strong>Copilot Analytics</strong> (admin center) and <strong>Viva Insights \u2192 Copilot Analytics</strong> for adoption KPIs.</li>
  <li><strong>Reclaim underused licenses</strong> \u2014 reassign Copilot from inactive users to power users.</li>
  <li><strong>Copilot Chat (free)</strong> \u2014 web-grounded only; <strong>Copilot Chat paid</strong> = M365 work-grounded.</li>
  <li><strong>Business plans cap at 300 users</strong> and <strong>lack Purview + IRM</strong>.</li>
  <li><strong>PAYG</strong> bills against an <strong>Azure subscription</strong> \u2014 use <strong>Azure budgets + alerts</strong> to control spend.</li>
</ul>`
      }
    ]
  },

  // ============================================================
  // SUPPLEMENT: Classmate's OneNote (Rickard's summaries)
  // ============================================================
  {
    id: "supplement-classmate",
    title: "Supplemental Notes \u2014 Classmate's OneNote (Rickard's summaries)",
    subsections: [
      {
        id: "c-1",
        title: "C.1 Six Zero Trust pillars in Microsoft 365",
        content: `<table>
  <thead>
    <tr>
      <th>Pillar</th>
      <th>Tools in M365</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Identity</strong></td>
      <td>Entra ID (centralized identity, passwordless, risk-based Conditional Access)</td>
    </tr>
    <tr>
      <td><strong>Endpoints</strong></td>
      <td>Intune (compliance), Defender for Endpoint (behavioral threat detection), <strong>Endpoint Analytics</strong> (device-health visibility)</td>
    </tr>
    <tr>
      <td><strong>Applications</strong></td>
      <td>Defender for Cloud Apps (shadow IT, session controls), <strong>App Proxy</strong> (secure access to on-prem apps without exposing them to the internet)</td>
    </tr>
    <tr>
      <td><strong>Data</strong></td>
      <td>Purview Information Protection (labels, encryption), DLP (Exchange/SharePoint/OneDrive/Teams)</td>
    </tr>
    <tr>
      <td><strong>Infrastructure</strong></td>
      <td><strong>Defender for Cloud</strong> (assesses posture across <strong>Azure, AWS, and GCP</strong>), <strong>Azure Policy</strong> (encryption, tagging, VM restrictions)</td>
    </tr>
    <tr>
      <td><strong>Network</strong></td>
      <td><strong>Azure Firewall</strong>, <strong>VPN Gateway</strong>, Defender for Identity (segmentation, lateral-movement detection)</td>
    </tr>
  </tbody>
</table>
<blockquote><p>Exam tip: a question mentioning <strong>"Defender for Cloud + AWS"</strong> or <strong>"Azure Policy for encryption enforcement"</strong> is the Infrastructure pillar.</p></blockquote>`
      },
      {
        id: "c-2",
        title: "C.2 Six phases of Zero Trust implementation",
        content: `<ol>
  <li><strong>Assess posture</strong> \u2014 Microsoft <strong>Secure Score</strong>, Purview Compliance Manager.</li>
  <li><strong>Identity protection</strong> \u2014 Conditional Access, risk-based authentication, <strong>identity governance</strong> (access reviews, entitlement management, temporary access).</li>
  <li><strong>Endpoint compliance</strong> \u2014 Intune compliance policies, <strong>app protection policies</strong> (BYOD: block copy/paste, local saves, rooted-device blocks), Endpoint Analytics.</li>
  <li><strong>Classify &amp; protect data</strong> \u2014 sensitivity labels, DLP, incident monitoring.</li>
  <li><strong>Monitor &amp; respond</strong> \u2014 Defender for Endpoint (auto-isolate compromised devices), <strong>Microsoft Sentinel</strong> (SIEM that correlates events across systems and automates responses), Defender for Identity (Pass-the-Hash, lateral movement).</li>
  <li><strong>Educate users</strong> \u2014 <strong>attack simulation training</strong> (phishing sims + user-specific training), security awareness campaigns, <strong>role-specific training</strong> (Finance, Developers, etc.).</li>
</ol>`
      },
      {
        id: "c-3",
        title: "C.3 Microsoft Threat Intelligence Center (MSTIC) & threat intel",
        content: `<ul>
  <li><strong>MSTIC</strong> is the team behind Microsoft's threat telemetry \u2014 <strong>65+ trillion signals/day</strong>, tracking nation-state actors, dark-web activity, and global campaigns.</li>
  <li><strong>Threat Explorer</strong> (real-time email-threat investigation): pivot by <strong>sender, URL, file hash</strong>, view user impact, immediate remediation (delete messages, block senders). Part of Defender for Office 365 <strong>Plan 2</strong>.</li>
  <li><strong>Threat Analytics</strong>: researcher-written reports on emerging threats, mapped to <strong>MITRE ATT&amp;CK</strong> techniques, with recommended mitigations.</li>
</ul>`
      },
      {
        id: "c-4",
        title: "C.4 Defender for Office 365 \u2014 specific features",
        content: `<table>
  <thead>
    <tr>
      <th>Capability</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Spoof intelligence</strong></td>
      <td>Detects fake / impersonated senders (DMARC failures, lookalike domains).</td>
    </tr>
    <tr>
      <td><strong>Impersonation protection</strong></td>
      <td>Flags lookalike senders targeting executives (e.g., "ce0@" instead of "ceo@").</td>
    </tr>
    <tr>
      <td><strong>Safe Links</strong></td>
      <td>Rewrites URLs and <strong>scans them at click time</strong>, not just delivery.</td>
    </tr>
    <tr>
      <td><strong>Anti-malware</strong></td>
      <td>Multi-engine scanning across Exchange, SharePoint, OneDrive, Teams.</td>
    </tr>
    <tr>
      <td><strong>Zero-hour Auto Purge (ZAP)</strong></td>
      <td><strong>Retroactively removes</strong> malicious messages that already landed in mailboxes once a verdict changes.</td>
    </tr>
    <tr>
      <td><strong>Attachment filtering</strong></td>
      <td>Blocks risky file types (<code>.exe</code>, <code>.js</code>, <code>.vbs</code>, etc.).</td>
    </tr>
    <tr>
      <td><strong>Anti-spam &amp; transport rules</strong></td>
      <td>ML-based spam filtering, <strong>custom mail flow rules</strong> (e.g., block external mail with certain keywords), <strong>quarantine policies</strong>, connection filtering.</td>
    </tr>
  </tbody>
</table>`
      },
      {
        id: "c-5",
        title: "C.5 Authenticator + FIDO2 + Windows Hello \u2014 distinctions",
        content: `<ul>
  <li><strong>Microsoft Authenticator app</strong> \u2014 passwordless sign-in, push notifications, biometrics; also acts as a <strong>token broker</strong> for SSO on mobile (uses Microsoft Authentication Library).</li>
  <li><strong>FIDO2 security keys</strong> \u2014 USB / NFC hardware keys; phishing-resistant.</li>
  <li><strong>Windows Hello for Business</strong> \u2014 face, fingerprint, or PIN tied to the device TPM.</li>
  <li><strong>Certificate-based authentication</strong> \u2014 smart cards, X.509 certificates.</li>
</ul>`
      },
      {
        id: "c-6",
        title: "C.6 SSO details",
        content: `<ul>
  <li>SSO uses <strong>secure tokens issued by Entra ID</strong>, reducing password prompts and improving security.</li>
  <li>Works for: <strong>Outlook, Teams, SharePoint, OneDrive</strong>, and <strong>third-party apps (Salesforce, Adobe, ServiceNow)</strong>.</li>
  <li>Works in <strong>cloud-only</strong> and <strong>hybrid</strong> (Entra Connect Sync / <strong>Cloud Sync</strong>) environments.</li>
  <li>Integrates with <strong>device-based access</strong> (Windows Hello, Intune-managed devices).</li>
</ul>`
      },
      {
        id: "c-7",
        title: "C.7 Groups \u2014 types cheat sheet",
        content: `<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Purpose</th>
      <th>Where to manage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Security group</strong></td>
      <td>Assign access to resources</td>
      <td>Entra admin center</td>
    </tr>
    <tr>
      <td><strong>Microsoft 365 group</strong></td>
      <td>Collaboration (shared mailbox, calendar, SharePoint site, <strong>Planner, Teams</strong>)</td>
      <td>Microsoft 365 admin center</td>
    </tr>
    <tr>
      <td><strong>Mail-enabled security group</strong></td>
      <td>Security + email distribution</td>
      <td>Microsoft 365 admin center</td>
    </tr>
    <tr>
      <td><strong>Distribution list</strong></td>
      <td>Email only, no permissions</td>
      <td><strong>Microsoft 365 admin center only</strong> (cannot be created in Entra)</td>
    </tr>
    <tr>
      <td><strong>Dynamic group</strong></td>
      <td>Membership updates automatically based on user attributes (e.g., <code>department = Sales</code>)</td>
      <td>Entra admin center</td>
    </tr>
  </tbody>
</table>
<blockquote><p>Best practice: <strong>align groups with departments, roles, or projects</strong> to simplify access and offboarding.</p></blockquote>`
      },
      {
        id: "c-8",
        title: "C.8 Resource-specific permissions in SharePoint",
        content: `<p>Permissions can be set at four levels \u2014 <strong>Site \u2192 Library \u2192 Folder \u2192 File</strong>, with built-in roles:</p>
<ul>
  <li><strong>Visitor</strong> \u2014 read only</li>
  <li><strong>Member</strong> \u2014 edit</li>
  <li><strong>Owner</strong> \u2014 full control</li>
</ul>
<p><strong>Permission inheritance can be broken</strong> for granular control. Be careful \u2014 broken inheritance is one of the main sources of oversharing.</p>`
      },
      {
        id: "c-9",
        title: "C.9 SharePoint \u2014 team sites vs communication sites",
        content: `<ul>
  <li><strong>Team sites</strong> \u2014 tied to a <strong>Microsoft 365 group</strong>; collaboration-focused (members, owners, shared resources).</li>
  <li><strong>Communication sites</strong> \u2014 broadcast-focused (fewer members, more readers); good for intranets and news.</li>
</ul>`
      },
      {
        id: "c-10",
        title: "C.10 OneDrive \u2014 Known Folder Move",
        content: `<ul>
  <li><strong>Known Folder Move</strong> redirects Windows <strong>Desktop, Documents, and Pictures</strong> to OneDrive for Business.</li>
  <li>Useful for backup + multi-device sync.</li>
  <li>Part of OneDrive's sync client config.</li>
</ul>`
      },
      {
        id: "c-11",
        title: "C.11 Teams \u2014 policy types (not the same thing)",
        content: `<table>
  <thead>
    <tr>
      <th>Policy</th>
      <th>Controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Meeting policy</strong></td>
      <td><strong>Recording</strong>, <strong>transcription</strong>, <strong>anonymous join</strong>, who can start/record, who can bypass the lobby.</td>
    </tr>
    <tr>
      <td><strong>Messaging policy</strong></td>
      <td>Chat features, <strong>external (federation) access</strong>, read receipts, giphy/memes.</td>
    </tr>
    <tr>
      <td><strong>Calling policy</strong></td>
      <td>Inbound/outbound PSTN, voicemail, call forwarding.</td>
    </tr>
    <tr>
      <td><strong>App permission / app setup policy</strong></td>
      <td>Which apps users can install or pin.</td>
    </tr>
    <tr>
      <td><strong>Live event policy</strong></td>
      <td>Town-hall-style broadcast settings.</td>
    </tr>
    <tr>
      <td><strong>Teams update management</strong></td>
      <td>Per-user or per-group version of the Teams desktop client.</td>
    </tr>
  </tbody>
</table>
<p>Also: Teams supports <strong>tabs, connectors, bots, and Power Automate</strong> as extensibility points.</p>`
      },
      {
        id: "c-12",
        title: "C.12 Microsoft 365 admin center \u2014 practical",
        content: `<ul>
  <li><strong>Bulk user creation</strong> (CSV import).</li>
  <li><strong>User attributes</strong> (location, department, job title) drive Conditional Access and group licensing.</li>
  <li><strong>PowerShell modules</strong> (know the names):
    <ul>
      <li><strong>Exchange Online PowerShell</strong></li>
      <li><strong>Microsoft Teams PowerShell</strong></li>
      <li><strong>SharePoint Online Management Shell</strong></li>
      <li><strong>Microsoft Graph PowerShell SDK</strong> (the new way \u2014 covers most workloads)</li>
    </ul>
  </li>
  <li><strong>Email signatures and disclaimers</strong> can be set tenant-wide.</li>
  <li><strong>Custom domains</strong> require <strong>DNS verification</strong> before they can be used.</li>
</ul>`
      },
      {
        id: "c-13",
        title: "C.13 Intune \u2014 App protection policies (MAM, BYOD)",
        content: `<ul>
  <li>Protect corporate data inside apps <strong>without enrolling the device</strong>.</li>
  <li>Common actions: <strong>block copy/paste</strong>, block local saves, block access from <strong>rooted / jailbroken</strong> devices, force work apps to use a PIN.</li>
  <li>Pairs well with <strong>Conditional Access</strong> \u2192 "Require an app protection policy on iOS/Android".</li>
</ul>`
      },
      {
        id: "c-14",
        title: "C.14 Compliance Manager \u2014 control types",
        content: `<ul>
  <li><strong>Microsoft-managed controls</strong> \u2014 automatically monitored by Microsoft (e.g., encryption at rest). No action from you.</li>
  <li><strong>Customer-managed controls</strong> \u2014 require <strong>manual verification</strong> by your admins (e.g., training completion, documentation).</li>
  <li><strong>Improvement actions</strong> are mapped to controls, have <strong>assigned owners</strong>, and roll up into the <strong>Compliance Score</strong>.</li>
  <li>Compliance Manager is the place to answer: <em>"What do we need to do to be GDPR / HIPAA / ISO 27001 compliant?"</em></li>
</ul>`
      },
      {
        id: "c-15",
        title: "C.15 Sensitivity labels \u2014 deployment details",
        content: `<ul>
  <li><strong>Label policies</strong> decide which users see which labels and whether labeling is <strong>mandatory</strong> or <strong>optional</strong>.</li>
  <li><strong>Override rules</strong> let a user downgrade a recommended label but require <strong>justification</strong>.</li>
  <li>Labels can enforce <strong>encryption, access restrictions, external-sharing controls, watermarks, headers, and footers</strong>.</li>
</ul>`
      },
      {
        id: "c-16",
        title: "C.16 Retention \u2014 auto-apply rules",
        content: `<ul>
  <li>Apply <strong>retention labels</strong> automatically based on:
    <ul>
      <li><strong>Keywords</strong></li>
      <li><strong>Sensitive information types (SITs)</strong></li>
      <li><strong>Trainable classifiers</strong></li>
    </ul>
  </li>
  <li>Use <strong>retention policies</strong> for organization-wide baselines; use <strong>retention labels</strong> for per-content controls.</li>
</ul>`
      },
      {
        id: "c-17",
        title: "C.17 Insider Risk Management \u2014 optional signals",
        content: `<ul>
  <li><strong>Endpoint activity</strong> (Defender for Endpoint signals) \u2014 file copy to USB, mass download, etc.</li>
  <li><strong>HR events</strong> \u2014 <em>optional</em> integration: when HR schedules an exit interview, IRM risk score auto-increases.</li>
  <li><strong>DLP alerts</strong> can feed IRM cases.</li>
  <li>IRM cases can be <strong>escalated to eDiscovery</strong> for legal hold.</li>
</ul>`
      },
      {
        id: "c-18",
        title: "C.18 Communication Compliance \u2014 channels",
        content: `<ul>
  <li><strong>Microsoft Teams</strong> chats and channels</li>
  <li><strong>Exchange Online</strong> email</li>
  <li><strong>Viva Engage</strong> (formerly Yammer)</li>
  <li><strong>Third-party connectors</strong> (e.g., Slack, Bloomberg)</li>
</ul>
<p>Detects: harassment, profanity, <strong>insider trading</strong> risk, regulatory violations, sensitive-data leakage.</p>`
      },
      {
        id: "c-19",
        title: "C.19 Data Explorer \u2014 what to look for",
        content: `<ul>
  <li>Filter by <strong>location</strong>, <strong>sensitivity label</strong>, <strong>content type</strong>.</li>
  <li>Visualize <strong>data exposure patterns</strong> (where sensitive data lives, who owns it).</li>
  <li>Identify <strong>externally shared</strong> or high-risk files.</li>
  <li>Example: find all "Confidential \u2014 Finance" documents and see how they are shared.</li>
</ul>`
      },
      {
        id: "c-20",
        title: "C.20 DAG reports \u2014 site criteria",
        content: `<p>Data Access Governance (DAG) reports flag sites that have:</p>
<ul>
  <li><strong>Sensitive content</strong></li>
  <li><strong>Excessive sharing</strong> (broken inheritance, "Anyone" links, broad groups)</li>
  <li><strong>Inactive owners</strong></li>
  <li><strong>Missing sensitivity labels</strong></li>
</ul>`
      },
      {
        id: "c-21",
        title: "C.21 Oversharing \u2014 common scenarios",
        content: `<ul>
  <li>Sharing with <strong>"Everyone"</strong> or <strong>"Anyone with the link"</strong> \u2192 anyone who gets the link can open it, even outside the org.</li>
  <li>Granting <strong>Edit</strong> when <strong>View only</strong> was intended.</li>
  <li>Granting <strong>external guests full site access</strong> when they only needed a single file.</li>
  <li><strong>Automated alerts</strong> (Power Automate + Purview) can fire on anonymous link usage and external sharing of sensitive files.</li>
</ul>`
      },
      {
        id: "c-22",
        title: "C.22 Copilot \u2014 exactly how it works (speak this out)",
        content: `<ol>
  <li>User signs in with their <strong>OAuth token</strong> (the same identity and permissions as any other M365 action).</li>
  <li>Copilot orchestrates the request and queries <strong>Microsoft Graph</strong>.</li>
  <li>Graph enforces <strong>authentication + authorization + semantic search</strong> (vector-based, not just keywords).</li>
  <li>Results are <strong>ranked by recency, sharing patterns, and user activity</strong>.</li>
  <li>The user's permissions, <strong>sensitivity labels, DLP, and Conditional Access</strong> are all enforced.</li>
  <li>The response is returned with <strong>source links</strong> for transparency.</li>
  <li>All prompts and responses are <strong>audited in Purview</strong>.</li>
  <li><strong>No training</strong> of the model on your data.</li>
  <li><strong>Data minimization</strong> \u2014 only retrieves what's needed for the answer.</li>
</ol>
<blockquote><p>If a user can't open a file directly, <strong>Copilot cannot surface its content</strong> to them \u2014 Copilot introduces <strong>no new data-access path</strong>.</p></blockquote>`
      },
      {
        id: "c-23",
        title: "C.23 Identity Secure Score \u2014 features",
        content: `<ul>
  <li><strong>Security recommendations</strong> with step-by-step improvement actions.</li>
  <li><strong>Status</strong> per action: <em>Completed</em>, <em>Planned</em>, <em>Risk Accepted</em>, <em>Not applied</em>, etc.</li>
  <li><strong>Benchmarking</strong> \u2014 compare your score against <strong>similar organizations</strong> in your industry / size bucket.</li>
  <li>Tracks score <strong>history</strong> over time so you can prove progress to leadership.</li>
</ul>`
      },
      {
        id: "c-24",
        title: "C.24 MFA sign-in troubleshooting (classmate's matrix)",
        content: `<table>
  <thead>
    <tr>
      <th>Symptom</th>
      <th>First check</th>
      <th>Resolution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MFA failure (Authenticator)</td>
      <td>Sign-in logs \u2192 exact failure reason</td>
      <td>Re-register Authenticator; <strong>fix device time drift</strong> for TOTP codes</td>
    </tr>
    <tr>
      <td>MFA failure (FIDO2)</td>
      <td>Sign-in logs</td>
      <td>Re-register the FIDO2 key</td>
    </tr>
    <tr>
      <td>Conditional Access denial</td>
      <td><strong>What If</strong> tool</td>
      <td>Identify the policy; confirm device compliance in Intune; update / remediate device</td>
    </tr>
    <tr>
      <td>Risky sign-in</td>
      <td>Identity Protection risk log</td>
      <td>Impossible travel, unfamiliar IP, leaked credentials \u2192 reset password, force MFA, or block</td>
    </tr>
    <tr>
      <td>Location / IP block</td>
      <td>Sign-in logs (IP, location)</td>
      <td>Adjust CA policy; add temporary exception</td>
    </tr>
    <tr>
      <td>Legacy auth failure</td>
      <td>Client version</td>
      <td>Upgrade apps; enable modern auth; retire legacy protocols</td>
    </tr>
  </tbody>
</table>`
      },
      {
        id: "c-25",
        title: "C.25 Operational tools & automation",
        content: `<ul>
  <li><strong>Power Automate</strong> can react to <strong>DLP alerts</strong>, <strong>insider-risk cases</strong>, or <strong>Purview alerts</strong> \u2014 auto-isolate files, notify owners, open tickets.</li>
  <li><strong>Audit logs</strong> can be <strong>exported to Power BI, Excel, or SIEM</strong> (Sentinel) for long-term analysis.</li>
  <li><strong>Microsoft Graph</strong> is the unified API surface \u2014 used by every admin tool and by Copilot itself.</li>
</ul>`
      }
    ]
  },

  // ============================================================
  // EXAM-DAY CONFIGURATION CHECKLIST
  // ============================================================
  {
    id: "exam-checklist",
    title: "Exam-Day Configuration Checklist",
    subsections: [
      {
        id: "checklist-d1",
        title: "Domain 1 \u2014 Core features and objects (30\u201335%)",
        content: `<ul>
  <li>Assign a license to a user and explain what features that license enables</li>
  <li>Use <strong>group-based licensing</strong> to manage a group of users</li>
  <li>Configure a <strong>custom domain</strong> in the Microsoft 365 admin center</li>
  <li>Review and edit <strong>org settings</strong> (release preferences, theme, lockbox)</li>
  <li>Use the <strong>Microsoft 365 admin center</strong> key admin tools (Users, Groups, Billing, Service Health, Message Center, Reports, Roles, Settings)</li>
  <li>Create a <strong>user mailbox</strong>, <strong>shared mailbox</strong>, and <strong>resource mailbox</strong> in Exchange Online</li>
  <li>Create a <strong>distribution list</strong></li>
  <li>Create a <strong>SharePoint site</strong> with a <strong>document library</strong> and <strong>folders</strong></li>
  <li>Configure <strong>SharePoint group permissions</strong> (Owners / Members / Visitors) and <strong>permission levels</strong></li>
  <li>Create a <strong>team</strong> with <strong>standard</strong>, <strong>private</strong>, and <strong>shared channels</strong></li>
  <li>Configure a <strong>Teams policy</strong> (messaging / meeting / app)</li>
  <li>Describe <strong>Zero Trust</strong> principles and give an example</li>
  <li>Describe the <strong>six layers of a layered security strategy</strong></li>
  <li>Configure <strong>MFA</strong> (and <strong>phishing-resistant MFA</strong> for admins \u2014 Passkeys / Windows Hello for Business)</li>
  <li>Explain <strong>JIT / JEA / PIM</strong> in a sentence</li>
  <li>Identify the components of <strong>Defender XDR</strong> and how they detect/respond to threats</li>
  <li>List Entra features (<strong>Conditional Access, SSO, Risky sign-ins</strong>)</li>
  <li>Build a <strong>Conditional Access</strong> policy and use the <strong>What If</strong> tool</li>
  <li>Explain <strong>SSO</strong> purpose and benefits</li>
  <li>Troubleshoot a sign-in problem using <strong>MFA, Conditional Access, Risky sign-ins, SSPR</strong></li>
  <li>Read and interpret <strong>Identity Secure Score</strong></li>
  <li>Find an event in the <strong>Unified Audit Log</strong></li>
  <li>Activate a role through <strong>PIM</strong></li>
  <li>Assign <strong>admin roles with RBAC</strong> (built-in and custom) to delegate responsibilities</li>
  <li>Distinguish <strong>App registration</strong> from <strong>Enterprise app</strong> / <strong>Service principal</strong></li>
  <li>Configure an <strong>authentication strength</strong> (e.g., phishing-resistant MFA) for a high-value app</li>
  <li>Use the <strong>CA What If</strong> tool to test a policy before enabling it</li>
  <li>Distinguish the <strong>three hybrid auth options</strong>: PHS, PTA, Federation</li>
  <li>Configure <strong>Password Writeback</strong> in Entra Connect to enable <strong>SSPR for hybrid</strong> users</li>
  <li>Build a <strong>dynamic group</strong> based on a user attribute (e.g., <code>department = Sales</code>)</li>
  <li>Distinguish <strong>security group</strong>, <strong>mail-enabled security group</strong>, <strong>Microsoft 365 group</strong>, and <strong>distribution list</strong></li>
  <li>List the components of <strong>Defender for Office 365 Plan 2</strong> (Threat Explorer, Attack simulation training)</li>
  <li>Use <strong>Attack path tracking</strong> in Defender for Endpoint to reconstruct an incident</li>
  <li>Configure <strong>Threat analytics</strong> in Defender XDR</li>
  <li>Run an <strong>Attack simulation training</strong> campaign for phishing awareness</li>
  <li>Describe the <strong>six Zero Trust pillars</strong> (Identity, Endpoints, Applications, Data, Infrastructure, Network) and the M365 tool for each</li>
  <li>Identify when to use <strong>Microsoft Sentinel</strong> as a SIEM/SOAR</li>
  <li>Identify the specific Defender for Office 365 features: <strong>Spoof intelligence, Impersonation protection, Safe Links, ZAP, Attachment filtering</strong></li>
  <li>Configure <strong>Intune app protection policies</strong> for BYOD (block copy/paste, local saves)</li>
  <li>Distinguish <strong>team sites</strong> vs <strong>communication sites</strong> in SharePoint</li>
  <li>Distinguish the four <strong>PowerShell modules</strong> for M365 admin (Exchange Online, Teams, SharePoint Online Mgmt Shell, Microsoft Graph PowerShell SDK)</li>
  <li>Set up <strong>OneDrive Known Folder Move</strong> for Desktop/Documents/Pictures</li>
  <li>Distinguish the <strong>Microsoft-managed</strong> vs <strong>Customer-managed</strong> controls in Compliance Manager</li>
  <li>Configure <strong>auto-apply rules</strong> for retention labels (keywords, SITs, classifiers)</li>
  <li>Configure <strong>mandatory vs optional</strong> labeling and <strong>override rules</strong> with justification</li>
  <li>Add <strong>Viva Engage</strong> (and third-party connectors) to Communication Compliance</li>
  <li>Connect <strong>HR events</strong> (optional) as a signal in Insider Risk Management</li>
</ul>`
      },
      {
        id: "checklist-d2",
        title: "Domain 2 \u2014 Data protection and governance (35\u201340%)",
        content: `<ul>
  <li>Create and <strong>publish</strong> a <strong>Sensitivity Label</strong> with encryption</li>
  <li>Configure <strong>auto-labeling</strong> for a Sensitive Information Type</li>
  <li>Create and test a <strong>DLP policy</strong> for Exchange / SharePoint / Teams</li>
  <li>Triage a <strong>DLP alert</strong> in Purview</li>
  <li>Activate and tune <strong>Insider Risk Management</strong></li>
  <li>Activate and tune <strong>Communication Compliance</strong></li>
  <li>Activate and tune <strong>DSPM for AI</strong></li>
  <li>Create a <strong>Retention Policy</strong> and a <strong>Retention Label</strong></li>
  <li>Configure <strong>archiving</strong> for inactive content</li>
  <li>Configure a <strong>disposition review</strong></li>
  <li>Review compliance posture in <strong>Compliance Manager</strong></li>
  <li>Use <strong>Data Explorer</strong> to find sensitive data locations</li>
  <li>Use <strong>Activity Explorer</strong> to investigate label activity</li>
  <li>Run a <strong>Content Search</strong> in eDiscovery</li>
  <li>Explain how <strong>Graph</strong> and <strong>Semantic Index</strong> influence Copilot responses</li>
  <li>Explain how <strong>Sensitivity Labels, DLP, and Defender</strong> protect Copilot outputs</li>
  <li>State the <strong>Responsible AI</strong> principles</li>
  <li>Run a <strong>Data access governance report</strong> in SharePoint</li>
  <li>Apply <strong>Restricted Site Access</strong> to a SharePoint site</li>
  <li>Identify the major <strong>SharePoint Advanced Management</strong> features</li>
  <li>Apply <strong>Restricted content discovery</strong> to a sensitive SharePoint site</li>
  <li>Configure <strong>Restricted SharePoint Search</strong> (up to 100 sites) to scope Copilot grounding</li>
  <li>Configure a <strong>site ownership policy</strong> (e.g., require \u2265 2 owners)</li>
  <li>Configure <strong>Adaptive Protection</strong> to bind Insider Risk \u2192 DLP</li>
  <li>Use <strong>DSPM for AI</strong> to find <strong>shadow AI</strong> usage in the tenant</li>
</ul>`
      },
      {
        id: "checklist-d3",
        title: "Domain 3 \u2014 Copilot and agents administration (25\u201330%)",
        content: `<ul>
  <li>Assign a <strong>Microsoft 365 Copilot license</strong> to a user</li>
  <li>Verify Copilot prerequisites (mailbox, OneDrive, Microsoft Search)</li>
  <li>Toggle Copilot features (web content, plugins, per-app) in the admin center</li>
  <li>Compare <strong>per-user</strong> vs <strong>PAYG</strong> vs <strong>Credit Packs</strong> licensing</li>
  <li>Configure a <strong>PAYG billing policy</strong> and an Azure subscription</li>
  <li><strong>Monitor and adjust</strong> PAYG usage</li>
  <li>Open <strong>Copilot Analytics</strong> and the <strong>Copilot dashboard</strong></li>
  <li>Save, share, schedule, and delete a <strong>prompt</strong></li>
  <li><strong>Describe</strong> and <strong>Configure</strong> an agent in <strong>Copilot Studio</strong></li>
  <li>Create a <strong>Microsoft 365 Copilot Chat agent</strong> (Part 1 &amp; Part 2 flow)</li>
  <li>Create a <strong>SharePoint agent</strong> scoped to one site</li>
  <li>Add up to <strong>20 knowledge sources</strong> to an agent</li>
  <li>Add <strong>instructions and rules</strong> to an agent</li>
  <li><strong>Test</strong> an agent in the test pane; <strong>edit</strong> topics, knowledge, and actions</li>
  <li>Share an agent with specific users / groups / everyone</li>
  <li>Walk through the <strong>agent approval process</strong> for a new agent</li>
  <li>Monitor agents via the <strong>Microsoft 365 admin center</strong> and the <strong>Power Platform admin center</strong></li>
  <li>Use <strong>DSPM for AI</strong> to identify risky prompts</li>
  <li>Describe the <strong>Researcher</strong> and <strong>Analyst</strong> use cases</li>
  <li>Describe a <strong>custom agent</strong> use case</li>
  <li>Explain the <strong>agent lifecycle</strong> (create \u2192 publish \u2192 monitor \u2192 disable / delete)</li>
  <li>Apply <strong>operational best practices</strong> for Copilot (troubleshooting, end-user communication, adoption)</li>
  <li>Start a <strong>Copilot Studio agent from a template</strong></li>
  <li>Add up to <strong>20 knowledge sources</strong> including public websites, SharePoint, Dataverse, Dynamics 365, Fabric, and <strong>files up to 512 MB</strong></li>
  <li>Choose between <strong>APIs / MCP</strong> vs <strong>computer-use / GUI scripting</strong> when integrating tools</li>
  <li>Distinguish <strong>Copilot Chat (free)</strong>, <strong>Copilot Chat (paid)</strong>, and <strong>M365 Copilot (licensed)</strong></li>
  <li>Configure <strong>Azure budgets + cost alerts</strong> for PAYG Copilot spend</li>
  <li>Identify the <strong>Business plan 300-user cap</strong> and which features it lacks</li>
  <li>Use <strong>Viva Insights \u2192 Copilot Analytics</strong> for deep adoption metrics</li>
  <li>Reclaim underused <strong>Copilot licenses</strong> from inactive users</li>
</ul>`
      }
    ]
  },

  // ============================================================
  // KEY POINTERS \u2014 ONE-PAGE QUICK REFERENCE
  // ============================================================
  {
    id: "key-pointers",
    title: "Key Pointers \u2014 One-Page Quick Reference",
    subsections: [
      {
        id: "kp-0",
        title: "0. Exam basics",
        content: `<ul>
  <li><strong>Passing score: 700</strong> \u00b7 Format: MCQ + multi-select + scenario + drag-and-drop \u00b7 No labs, no case studies.</li>
  <li><strong>Three domains</strong>: \u2460 Core M365 features &amp; objects (<strong>30\u201335%</strong>), \u2461 Data protection &amp; governance (<strong>35\u201340%</strong>, largest), \u2462 Copilot &amp; agents admin (<strong>25\u201330%</strong>).</li>
  <li>Most questions cover <strong>GA</strong> features; some Preview may appear.</li>
</ul>`
      },
      {
        id: "kp-1",
        title: "1. Zero Trust & identity",
        content: `<ul>
  <li><strong>Zero Trust is NOT a product</strong> \u2014 it's a combination of processes, policies, and configurations.</li>
  <li><strong>Three principles</strong>: verify explicitly \u00b7 least privilege \u00b7 assume breach.</li>
  <li><strong>Six pillars</strong> (Microsoft framework): <strong>I</strong>dentity \u00b7 <strong>E</strong>ndpoints \u00b7 <strong>A</strong>pplications \u00b7 <strong>D</strong>ata \u00b7 <strong>I</strong>nfrastructure \u00b7 <strong>N</strong>etwork.</li>
  <li><strong>Authentication</strong> = prove identity (n factor) \u00b7 <strong>Authorization</strong> = what you can do (z factor).</li>
  <li><strong>MFA</strong> = 2+ of: know (password/PIN) \u00b7 have (phone, FIDO key) \u00b7 are (biometric).</li>
  <li><strong>Passkeys are still 2 factors</strong>: device (have) + PIN/biometric (know/are).</li>
  <li><strong>Phishing-resistant</strong> methods: <strong>Passkeys (FIDO2)</strong>, <strong>Windows Hello for Business</strong>, certificate-based \u2014 <strong>mandatory for admins</strong>.</li>
  <li><strong>Passwords alone = banned for admins</strong>; least-preferred method overall.</li>
  <li><strong>Entra ID = identity plane</strong> of M365; every workload uses it.</li>
</ul>`
      },
      {
        id: "kp-2",
        title: "2. Identity types in Entra",
        content: `<ul>
  <li><strong>Person</strong> (user), <strong>Application</strong> (service principal / app registration / managed identity), <strong>AI agent</strong> (<strong>Entra Agent ID</strong>, preview).</li>
  <li><strong>Cloud-only</strong> identity: created directly in Entra.</li>
  <li><strong>Hybrid</strong> identity: synced from on-prem AD via <strong>Entra Connect</strong> (or <strong>Cloud Sync</strong>).</li>
  <li><strong>Three hybrid auth methods</strong> (know trade-offs):
    <ul>
      <li><strong>PHS (Password Hash Sync)</strong> \u2014 <em>preferred</em>; no on-prem dep; supports leaked-credential check.</li>
      <li><strong>PTA (Pass-Through Authentication)</strong> \u2014 DC must be reachable; some AD-specific features.</li>
      <li><strong>Federation (AD FS)</strong> \u2014 heavy on-prem footprint; legacy.</li>
    </ul>
  </li>
  <li><strong>Dynamic groups</strong> use attribute rules (e.g., <code>department = Sales</code>) \u2014 auto-cleanup of permissions.</li>
  <li><strong>App registration</strong> = the app's <em>definition</em>; <strong>Enterprise app</strong> / <strong>Service principal</strong> = the <em>instance</em> in a tenant.</li>
</ul>`
      },
      {
        id: "kp-3",
        title: "3. MFA & sign-in methods",
        content: `<ul>
  <li><strong>Microsoft Authenticator</strong> = passwordless, push, biometrics, token broker via <strong>MSAL</strong>.</li>
  <li><strong>FIDO2 security keys</strong> = USB/NFC hardware keys, phishing-resistant.</li>
  <li><strong>Windows Hello for Business</strong> = face/fingerprint/PIN tied to device TPM.</li>
  <li><strong>SSPR (Self-Service Password Reset)</strong>:
    <ul>
      <li>Cloud-only works out of the box.</li>
      <li>Hybrid needs <strong>Password Writeback</strong> in Entra Connect.</li>
    </ul>
  </li>
  <li><strong>Verified ID / Verifiable Credentials</strong> (preview) = decentralized identity in a digital wallet.</li>
</ul>`
      },
      {
        id: "kp-4",
        title: "4. Conditional Access (CA)",
        content: `<ul>
  <li><strong>Targets</strong> \u2014 users/groups/agents, cloud apps, Azure portal, Microsoft Admin Portals; always set <strong>break-glass exclusions</strong>.</li>
  <li><strong>Conditions</strong> \u2014 user risk, sign-in risk, insider risk, device platform, location, client app, auth flow.</li>
  <li><strong>Session controls</strong> \u2014 sign-in frequency, persistent browser, <strong>continuous access evaluation</strong>, Defender for Cloud Apps app control.</li>
  <li><strong>Authentication strengths</strong> \u2014 built-in ("Multifactor", "Phishing-resistant MFA") and custom (Hello, FIDO2, certificate).</li>
  <li><strong>Global Secure Access client</strong> = Microsoft SSE for private/internet resources.</li>
  <li><strong>Common policies</strong>: MFA for external \u00b7 block unmanaged devices \u00b7 block legacy auth \u00b7 restrict guests \u00b7 enforce Terms of Use.</li>
  <li><strong>What If tool</strong> = test a CA policy before enabling.</li>
</ul>`
      },
      {
        id: "kp-5",
        title: "5. RBAC, PIM, JEA, JIT",
        content: `<ul>
  <li><strong>RBAC</strong> = roles (built-in or custom) bound to a scope. Built-ins: Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader.</li>
  <li><strong>Global Admin</strong> = god role; <strong>minimize</strong> (target \u2264 4); must be <strong>eligible in PIM</strong>, not permanent.</li>
  <li><strong>PIM (Privileged Identity Management)</strong> = eligible-by-default + activation; time-bound, audited.</li>
  <li><strong>JIT (Just-In-Time)</strong> = role activation only when needed; delivered by PIM.</li>
  <li><strong>JEA (Just Enough Administration)</strong> = smallest scope that does the job.</li>
  <li><strong>Access Reviews</strong> = periodic re-attestation; kills privilege creep.</li>
  <li><strong>Entitlement Management / Access Packages</strong> = bundle groups, sites, apps, roles with approval + expiration.</li>
</ul>`
      },
      {
        id: "kp-6",
        title: "6. Identity Secure Score & audit",
        content: `<ul>
  <li><strong>Identity Secure Score</strong> = % of best practices applied; <strong>benchmarks</strong> against similar orgs; statuses = Completed / Planned / Risk Accepted / Not applied.</li>
  <li><strong>Microsoft Secure Score</strong> = same idea across the whole M365 tenant.</li>
  <li><strong>Unified Audit Log</strong> (Purview) = who-did-what across M365; default 180 days, <strong>E5 = 1 year</strong>.</li>
  <li><strong>Entra ID audit log</strong> = directory changes; <strong>Entra sign-in log</strong> = sign-in events; <strong>"What If"</strong> = CA simulation.</li>
</ul>`
      },
      {
        id: "kp-7",
        title: "7. Defender XDR",
        content: `<ul>
  <li><strong>Defender XDR = Identity + Office 365 + Endpoint + Cloud Apps</strong> + optional <strong>Cloud</strong> \u2014 unified at <strong>security.microsoft.com</strong>.</li>
  <li><strong>MSTIC</strong> = Microsoft Threat Intelligence Center, <strong>65T+ signals/day</strong>, nation-state + dark-web tracking.</li>
  <li><strong>Defender for Office 365 Plan 2</strong> (in <strong>E5</strong>) unlocks <strong>Threat Explorer</strong> and <strong>Attack simulation training</strong>.</li>
  <li><strong>Safe Links</strong> = URL rewrite + rescan <strong>at click time</strong>.</li>
  <li><strong>ZAP (Zero-hour Auto Purge)</strong> = <strong>retroactive</strong> removal of malicious messages.</li>
  <li><strong>Spoof intelligence</strong> = fake/impersonated senders; <strong>Impersonation protection</strong> = lookalike-sender targeting execs.</li>
  <li><strong>Attachment filtering</strong> blocks <code>.exe</code>, <code>.js</code>, <code>.vbs</code>.</li>
  <li><strong>Attack simulation training</strong> = phishing sims + auto-training on failure.</li>
  <li><strong>Threat Explorer</strong> = real-time email investigation; pivot by sender, URL, file hash, user impact.</li>
  <li><strong>Threat Analytics</strong> = reports with <strong>MITRE ATT&amp;CK</strong> mappings.</li>
  <li><strong>Defender for Endpoint</strong>: EDR, AV, attack surface reduction, automated investigations, <strong>attack path tracking</strong>, <strong>device isolation</strong>.</li>
  <li><strong>Defender for Cloud Apps (CASB)</strong>: shadow IT discovery, session policies, app governance.</li>
  <li><strong>Microsoft Sentinel</strong> = cloud <strong>SIEM</strong> + <strong>SOAR</strong>; KQL hunting; Logic Apps playbooks.</li>
  <li><strong>Defender for Cloud</strong> = posture across <strong>Azure, AWS, GCP</strong>.</li>
</ul>`
      },
      {
        id: "kp-8",
        title: "8. M365 core services",
        content: `<ul>
  <li><strong>Exchange Online</strong> = mail, calendar, mail flow rules (transport), accepted domains, connectors, <strong>retention</strong>, <strong>litigation hold</strong>, anti-spam, anti-malware, DLP.</li>
  <li><strong>Mailboxes</strong>: user \u00b7 shared \u00b7 resource (room/equipment) \u00b7 Microsoft 365 group.</li>
  <li><strong>Distribution lists</strong> = email only, can ONLY be created in <strong>M365 admin center</strong> (not Entra).</li>
  <li><strong>Teams</strong> = chat, meetings, calling, app integrations; built on M365 Groups.</li>
  <li><strong>Channel types</strong>: standard \u00b7 private \u00b7 <strong>shared</strong> (cross-team).</li>
  <li><strong>Teams policies</strong>: meeting (recording, transcription, anonymous join) \u00b7 messaging (chat, external) \u00b7 calling \u00b7 app permission \u00b7 app setup.</li>
  <li><strong>SharePoint</strong> = sites (team sites / communication sites) \u00b7 libraries \u00b7 folders \u00b7 files.</li>
  <li><strong>SharePoint site roles</strong>: <strong>Owner</strong> (full) \u00b7 <strong>Member</strong> (edit) \u00b7 <strong>Visitor</strong> (read).</li>
  <li><strong>Permission inheritance can be broken</strong> \u2014 main source of oversharing.</li>
  <li><strong>OneDrive = 1 TB+ per user</strong>; uses SharePoint storage; <strong>Known Folder Move</strong> = Desktop/Documents/Pictures.</li>
  <li><strong>Microsoft Graph</strong> = the single API surface used by everything in M365 (and Copilot).</li>
</ul>`
      },
      {
        id: "kp-9",
        title: "9. Microsoft 365 admin center",
        content: `<ul>
  <li>URL: <strong>https://admin.microsoft.com</strong>.</li>
  <li>Tasks: users, bulk user create, group-based licensing, roles, billing, service health, message center, reports, settings.</li>
  <li><strong>Custom domains</strong> need <strong>DNS verification</strong>; can have multiple per tenant.</li>
  <li><strong>PowerShell modules</strong>: <strong>Exchange Online</strong> \u00b7 <strong>Microsoft Teams</strong> \u00b7 <strong>SharePoint Online Management Shell</strong> \u00b7 <strong>Microsoft Graph PowerShell SDK</strong>.</li>
</ul>`
      },
      {
        id: "kp-10",
        title: "10. Microsoft Purview",
        content: `<ul>
  <li>Portal: <strong>https://purview.microsoft.com</strong>.</li>
  <li><strong>Information Protection</strong> = Sensitivity Labels \u2014 encrypt, watermark, restrict access; <strong>travel with the file</strong>.</li>
  <li><strong>Labels</strong> = published via <strong>label policies</strong>; can be mandatory or optional; <strong>override rules</strong> with justification.</li>
  <li><strong>DLP</strong> = detect &amp; block sensitive data (PII, PHI, financial) across Exchange / SharePoint / OneDrive / Teams / endpoints / cloud apps; <strong>can target Copilot</strong>.</li>
  <li><strong>Insider Risk Management</strong> = correlates signals (departure + download, off-hours, mass copy); optional inputs: <strong>endpoint activity</strong>, <strong>HR events</strong>; can auto-feed <strong>Conditional Access</strong> via <strong>Adaptive Protection</strong>.</li>
  <li><strong>Communication Compliance</strong> = monitors Teams, Exchange, <strong>Viva Engage</strong> (Yammer), and 3rd-party connectors; detects harassment, regulatory violations, <strong>insider trading</strong> risk.</li>
  <li><strong>DSPM for AI</strong> = data security for AI / Copilot; surfaces <strong>shadow AI</strong>, risky prompts, prompt-injection; integrates with <strong>Activity Explorer</strong> (last 30 days of Copilot interactions).</li>
  <li><strong>Adaptive Protection</strong> = automatic IRM \u2192 DLP escalation; strictest DLP applies as risk score rises.</li>
  <li><strong>Data Lifecycle Management</strong> = retention policies + retention labels + disposition reviews + records management; <strong>auto-apply rules</strong> (keywords, SITs, trainable classifiers).</li>
  <li><strong>eDiscovery Standard</strong> (E3) + <strong>eDiscovery Premium</strong> (E5) = search/hold/export for legal.</li>
  <li><strong>Compliance Manager</strong> = Microsoft-managed (auto) + customer-managed (manual) controls; improvement actions with owners; <strong>Compliance Score</strong>.</li>
  <li><strong>Data Explorer</strong> = query sensitive-data locations by site, label, content type; visualize exposure.</li>
  <li><strong>Activity Explorer</strong> = who viewed/modified/printed/emailed labeled content.</li>
  <li><strong>Customer Key</strong> = customer-managed encryption keys; <strong>Customer Lockbox</strong> = explicit consent for Microsoft engineer access.</li>
</ul>`
      },
      {
        id: "kp-11",
        title: "11. SharePoint governance",
        content: `<ul>
  <li><strong>Oversharing is Copilot's #1 risk</strong> \u2014 Semantic Index finds data that "security by obscurity" used to hide.</li>
  <li><strong>SharePoint Advanced Management</strong> = the umbrella for governance; included in some M365 Copilot licenses.</li>
  <li><strong>Restricted Site Access</strong> = limit content visibility to a specific Entra group.</li>
  <li><strong>Oversharing reports / Permission site reports</strong> \u2192 <strong>DAG reports</strong> flag sites with sensitive content, excessive sharing, inactive owners, missing labels.</li>
  <li><strong>Site access reviews</strong> = periodic owner confirmation of who should have access.</li>
  <li><strong>Site ownership policy</strong> = e.g., require <strong>\u2265 2 owners</strong> per site.</li>
  <li><strong>Restricted content discovery</strong> (site level) = opt a site out of Copilot grounding.</li>
  <li><strong>Restricted SharePoint Search</strong> (tenant level) = up to <strong>100 sites</strong>; <strong>hub sites and children don't count</strong>.</li>
</ul>`
      },
      {
        id: "kp-12",
        title: "12. Microsoft 365 Copilot",
        content: `<ul>
  <li><strong>Copilot = RAG over Graph + Semantic Index, permission-aware.</strong></li>
  <li><strong>No new data-access path</strong> \u2014 uses the user's <strong>OAuth token</strong>.</li>
  <li><strong>Architecture</strong>: prompt \u2192 orchestrator \u2192 Graph + Semantic Index (RAG) \u2192 LLM with <strong>system prompt</strong> \u2192 content safety + groundedness \u2192 response.</li>
  <li><strong>Prerequisites</strong> (per user): Copilot license + active Exchange mailbox + OneDrive + Microsoft Search healthy.</li>
  <li><strong>No training</strong> of the LLM on your prompts, responses, or tenant data.</li>
  <li><strong>Microsoft 365 Copilot Chat</strong> = the free chat surface (web only); <strong>Microsoft 365 Copilot (paid)</strong> adds work-grounding.</li>
  <li><strong>Enable/disable features</strong>: web content, plugin/connector controls, per-app enablement, per-user (license), per-content (Sensitivity Labels).</li>
  <li><strong>Copilot analytics</strong> in admin center + <strong>Viva Insights \u2192 Copilot Analytics</strong> for deep adoption metrics.</li>
  <li><strong>Prompts</strong> can be saved, shared (admin can scope sharing to roles/groups), scheduled, deleted.</li>
  <li><strong>Reclaim underused licenses</strong> \u2014 reassign Copilot from inactive users.</li>
</ul>`
      },
      {
        id: "kp-13",
        title: "13. Agents",
        content: `<ul>
  <li><strong>Copilot</strong> = personal assistant; <strong>Agent</strong> = scoped, often autonomous, may run on a trigger or schedule.</li>
  <li><strong>Pre-built agents</strong>: <strong>Researcher</strong> (deep research with citations) \u00b7 <strong>Analyst</strong> (data analysis) \u00b7 Writing Coach \u00b7 Prompt Coach \u00b7 SharePoint site agents.</li>
  <li><strong>Custom agents</strong>:
    <ul>
      <li><strong>Copilot Studio</strong> (low-code, Describe/Configure; start from <strong>template</strong>; up to <strong>20 knowledge sources</strong>; files up to <strong>512 MB</strong>; web toggle; suggested prompts; instructions &amp; rules; triggers for autonomous).</li>
      <li><strong>VS Code + Foundry</strong> (pro-code).</li>
      <li><strong>Declarative agents</strong> (manifest JSON).</li>
    </ul>
  </li>
  <li><strong>SharePoint agents</strong> = scoped to one site, inherit permissions, fastest path to a working governed agent.</li>
  <li><strong>Prefer APIs and MCP</strong> over <strong>computer-use / GUI scripting</strong> (UIs change).</li>
  <li><strong>MCP (Model Context Protocol)</strong> = open standard for AI \u2194 tools/knowledge.</li>
  <li><strong>Foundry</strong> = Azure AI Foundry for custom engine agents.</li>
  <li><strong>Entra Agent ID</strong> (preview) = first-class identity for agents.</li>
  <li><strong>Agent lifecycle</strong> = Draft \u2192 Test \u2192 Publish \u2192 Operate \u2192 Retire.</li>
  <li><strong>Approval workflow</strong> = admins can require new agents to be approved before going tenant-wide.</li>
  <li><strong>Monitor agents</strong> in M365 admin center + Power Platform admin center; DLP for connectors; <strong>DSPM for AI</strong> for risky prompts.</li>
</ul>`
      },
      {
        id: "kp-14",
        title: "14. Work IQ, content safety, groundedness",
        content: `<ul>
  <li><strong>Work IQ</strong> (preview) = exposes the Semantic Index to your <strong>custom AI apps</strong> (not just Microsoft Copilot).</li>
  <li><strong>Content safety</strong> = filters prompt + response for harmful content.</li>
  <li><strong>Groundedness detection</strong> = flags hallucinated answers; check via Activity Explorer.</li>
</ul>`
      },
      {
        id: "kp-15",
        title: "15. Licensing",
        content: `<ul>
  <li><strong>Copilot Chat (free)</strong> = web-only; no Graph.</li>
  <li><strong>Copilot Chat (paid)</strong> = work-grounded; cheaper than full M365 Copilot.</li>
  <li><strong>M365 Copilot</strong> \u2248 <strong>$30/user/month</strong>; per-user, predictable.</li>
  <li><strong>PAYG</strong> = metered; bills against an <strong>Azure subscription</strong>; use <strong>Azure budgets + cost alerts</strong>.</li>
  <li><strong>Credit Packs</strong> = pre-purchased Copilot Studio message bundles for burst.</li>
  <li><strong>Business plans</strong> cap at <strong>300 users</strong>; <strong>lack Purview + IRM</strong>.</li>
  <li><strong>E5</strong> = Defender for Office 365 <strong>Plan 2</strong> + eDiscovery <strong>Premium</strong> + full Purview.</li>
  <li><strong>E5 Compliance / E5 Security add-ons</strong> = stack on E3 if you only need those.</li>
  <li><strong>Copilot for personal/family</strong> = in-app agents, not work-grounded.</li>
  <li><strong>Group-based licensing</strong> scales; assign to a group, not per user.</li>
</ul>`
      },
      {
        id: "kp-16",
        title: "16. Adoption & rollout",
        content: `<ul>
  <li><strong>Group-level Copilot settings</strong> beat tenant-level toggles \u2014 easier to run a clean pilot.</li>
  <li><strong>Phased rollout</strong>: <strong>Pilot \u2192 Evaluate \u2192 Expand \u2192 Optimize</strong>.</li>
  <li><strong>Operational excellence</strong> = Secure Score trends, quarterly Attack Simulation training, weekly DLP/IRM review, Access Reviews, license reclamation.</li>
  <li><strong>Disable Teams transcriptions</strong> = example of a tenant-level toggle.</li>
</ul>`
      },
      {
        id: "kp-17",
        title: "17. Responsible AI",
        content: `<ul>
  <li><strong>Six principles</strong>: Fairness \u00b7 Reliability &amp; Safety \u00b7 Privacy &amp; Security \u00b7 Inclusiveness \u00b7 Accountability \u00b7 Transparency.</li>
  <li><strong>Transparency</strong> for Copilot = show source data, citations, prompt history, audit trail.</li>
  <li><strong>Accountability</strong> = a human remains responsible for AI-driven actions.</li>
</ul>`
      },
      {
        id: "kp-18",
        title: "18. Hybrid identity (the three methods)",
        content: `<ul>
  <li><strong>PHS</strong> = hash of hash synced; <em>preferred</em>.</li>
  <li><strong>PTA</strong> = agent on DC; supports AD-specific features.</li>
  <li><strong>Federation</strong> = redirect to on-prem ADFS; legacy.</li>
  <li><strong>Entra Connect</strong> = sync tool; <strong>Cloud Sync</strong> = lighter alternative.</li>
</ul>`
      },
      {
        id: "kp-19",
        title: "19. Intune (quick)",
        content: `<ul>
  <li><strong>Compliance policies</strong> = encryption, OS, AV, password.</li>
  <li><strong>App protection policies (MAM)</strong> = protect data in apps <strong>without enrolling</strong> the device (BYOD).</li>
  <li><strong>Endpoint Analytics</strong> = device-health visibility.</li>
</ul>`
      },
      {
        id: "kp-20",
        title: "20. Numbers to remember",
        content: `<ul>
  <li><strong>Passing score</strong>: 700.</li>
  <li><strong>Domain weights</strong>: 30\u201335 / 35\u201340 / 25\u201330.</li>
  <li><strong>Copilot price</strong>: ~$30/user/month.</li>
  <li><strong>Business plan user cap</strong>: 300.</li>
  <li><strong>Unified Audit Log retention</strong>: 180 days default, <strong>1 year</strong> with E5.</li>
  <li><strong>Restricted SharePoint Search</strong>: up to <strong>100 sites</strong>; hub sites excluded.</li>
  <li><strong>Per-user OneDrive</strong>: 1 TB+ (up to 5 TB).</li>
  <li><strong>Knowledge sources per agent</strong>: 20.</li>
  <li><strong>Knowledge file size</strong>: 512 MB.</li>
  <li><strong>Global Admin count</strong>: keep \u2264 4.</li>
</ul>`
      }
    ]
  },

  // ============================================================
  // CROSS-REFERENCE (Quick Lookup)
  // ============================================================
  {
    id: "cross-reference",
    title: "Cross-Reference (Quick Lookup)",
    subsections: [
      {
        id: "xref-1",
        title: "Exam Topic Cross-Reference",
        content: `<table>
  <thead>
    <tr>
      <th>Exam Topic</th>
      <th>Domain</th>
      <th>Section</th>
      <th>Learning Path</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>License types &amp; access</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>M365 admin center org config</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>M365 ecosystem &amp; core services</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>Exchange admin center objects</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>SharePoint admin center objects &amp; permissions</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>Teams admin center objects &amp; policies</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>Admin roles with RBAC</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>Security, identity, compliance foundations</td><td>1</td><td>1.1</td><td>M2</td></tr>
    <tr><td>Zero Trust</td><td>1</td><td>1.2</td><td>M1</td></tr>
    <tr><td>Layered security strategy</td><td>1</td><td>1.2</td><td>M1</td></tr>
    <tr><td>Authorization (RBAC, JIT, JEA, PIM)</td><td>1</td><td>1.2, 1.3</td><td>M1, M2</td></tr>
    <tr><td>Authentication (MFA, Passkeys, Hello)</td><td>1</td><td>1.2</td><td>M1</td></tr>
    <tr><td>Threat protection &amp; intelligence</td><td>1</td><td>1.2</td><td>M1</td></tr>
    <tr><td>Microsoft Defender XDR</td><td>1</td><td>1.2</td><td>M1</td></tr>
    <tr><td>Microsoft Entra</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>Conditional Access</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>SSO</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>Sign-in troubleshooting</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>Identity Secure Score</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>Audit logs</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>PIM</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>App registrations / Enterprise apps</td><td>1</td><td>1.3</td><td>M1</td></tr>
    <tr><td>Purview Information Protection</td><td>2</td><td>2.1</td><td>M3</td></tr>
    <tr><td>DLP</td><td>2</td><td>2.1, 2.3</td><td>M3</td></tr>
    <tr><td>Insider Risk Management</td><td>2</td><td>2.1, 2.3</td><td>M3</td></tr>
    <tr><td>Communication Compliance</td><td>2</td><td>2.1, 2.3</td><td>M3</td></tr>
    <tr><td>DSPM for AI</td><td>2</td><td>2.1, 2.3</td><td>M3</td></tr>
    <tr><td>Data Lifecycle Management / Retention / Archiving</td><td>2</td><td>2.1</td><td>M3</td></tr>
    <tr><td>Sensitivity Labels</td><td>2</td><td>2.1</td><td>M3</td></tr>
    <tr><td>Data classification (SIT, EDM, classifiers)</td><td>2</td><td>2.1</td><td>M3</td></tr>
    <tr><td>Copilot data access (Graph, Semantic Index)</td><td>2</td><td>2.2</td><td>M3</td></tr>
    <tr><td>Copilot + Purview / Defender controls</td><td>2</td><td>2.2</td><td>M3</td></tr>
    <tr><td>Responsible AI</td><td>2</td><td>2.2</td><td>M3</td></tr>
    <tr><td>Compliance Manager</td><td>2</td><td>2.3</td><td>M3</td></tr>
    <tr><td>Data Explorer</td><td>2</td><td>2.3</td><td>M3</td></tr>
    <tr><td>Activity Explorer</td><td>2</td><td>2.3</td><td>M3</td></tr>
    <tr><td>eDiscovery Content Search</td><td>2</td><td>2.3</td><td>M3</td></tr>
    <tr><td>SharePoint Advanced Management / Oversharing</td><td>2</td><td>2.4</td><td>M3</td></tr>
    <tr><td>Restricted Site Access</td><td>2</td><td>2.4</td><td>M3</td></tr>
    <tr><td>Data access governance report</td><td>2</td><td>2.4</td><td>M3</td></tr>
    <tr><td>Copilot vs agent capabilities</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>Copilot architecture (LLM, Graph, Semantic Index, Orchestrator)</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>Microsoft 365 Copilot Chat (free) vs Copilot (paid)</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>License model (per-user vs PAYG vs Credit Packs)</td><td>3</td><td>3.1, 3.2</td><td>M4, M5</td></tr>
    <tr><td>Enable/disable Copilot features</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>Plan and deploy Copilot and agents</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>Real-world use cases</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>Researcher / Analyst / custom agent use cases</td><td>3</td><td>3.1</td><td>M4</td></tr>
    <tr><td>Assign Copilot licenses</td><td>3</td><td>3.2</td><td>M5</td></tr>
    <tr><td>PAYG billing policies (manage, monitor, adjust)</td><td>3</td><td>3.2</td><td>M5</td></tr>
    <tr><td>Copilot Analytics &amp; dashboard</td><td>3</td><td>3.2</td><td>M5</td></tr>
    <tr><td>Adoption tracking &amp; Viva Insights</td><td>3</td><td>3.2</td><td>M5</td></tr>
    <tr><td>Prompt management (save/share/schedule/delete)</td><td>3</td><td>3.2</td><td>M5</td></tr>
    <tr><td>Operational best practices (troubleshooting, communication)</td><td>3</td><td>3.2</td><td>M5</td></tr>
    <tr><td>Create Copilot Chat agent (Part 1 &amp; 2)</td><td>3</td><td>3.3</td><td>M6</td></tr>
    <tr><td>Create SharePoint agent</td><td>3</td><td>3.3</td><td>M6</td></tr>
    <tr><td>Test and edit agents</td><td>3</td><td>3.3</td><td>M6</td></tr>
    <tr><td>Configure user access to agents</td><td>3</td><td>3.3</td><td>M6</td></tr>
    <tr><td>Agent approval and governance</td><td>3</td><td>3.3</td><td>M6</td></tr>
    <tr><td>Agent monitoring (M365 admin + Power Platform admin)</td><td>3</td><td>3.3</td><td>M6</td></tr>
    <tr><td>Agent lifecycle</td><td>3</td><td>3.3</td><td>M6</td></tr>
  </tbody>
</table>`
      }
    ]
  },

  // ============================================================
  // FINAL 5-MINUTE PRE-EXAM RECAP
  // ============================================================
  {
    id: "final-recap",
    title: "Final 5-Minute Pre-Exam Recap",
    subsections: [
      {
        id: "recap-1",
        title: "Pre-Exam Recap",
        content: `<ol>
  <li><strong>Three domains, weighted 30\u201335 / 35\u201340 / 25\u201330.</strong> Spend the most time on <strong>Domain 2</strong>.</li>
  <li><strong>Licenses drive access</strong> \u2014 group-based licensing scales; the admin center is where you assign them.</li>
  <li><strong>Objects</strong>: Mailboxes &amp; distribution lists (Exchange), sites/libraries/folders (SharePoint), teams/channels/policies (Teams).</li>
  <li><strong>Microsoft 365 admin center</strong> = one console for Users / Groups / Billing / Service Health / Message Center / Reports / Roles.</li>
  <li><strong>Zero Trust</strong> = verify explicitly + least privilege + assume breach. <strong>Layered security</strong> = assessment \u2192 identity \u2192 endpoint \u2192 data \u2192 threat monitoring \u2192 user education. <strong>Zero Trust is NOT a product.</strong></li>
  <li><strong>Auth</strong>: MFA, <strong>phishing-resistant</strong> (Passkeys, Windows Hello, certificates) for admins. <strong>AuthZ</strong>: Conditional Access + RBAC + JIT/JEA + PIM. Use <strong>authentication strengths</strong> and <strong>session controls</strong>.</li>
  <li><strong>Defender XDR</strong> = Defender for Identity + Office 365 + Endpoint + Cloud Apps \u2014 unified incidents. E5 = Plan 2 (Threat Explorer, Attack simulation training, attack-path tracking, threat analytics).</li>
  <li><strong>Entra</strong> = identity plane; <strong>App registration</strong> = definition, <strong>Enterprise app</strong> = instance, <strong>SSO</strong> = one credential, many apps. <strong>Hybrid auth</strong> = PHS (preferred) / PTA / Federation (legacy).</li>
  <li><strong>Identity Secure Score</strong> = percentage of best practices applied; <strong>Unified Audit Log</strong> = the place to find who-did-what across M365.</li>
  <li><strong>Purview = the compliance portal</strong>: Information Protection (Labels), DLP, IRM, Communication Compliance, <strong>DSPM for AI</strong>, Data Lifecycle Management, Compliance Manager, Data Explorer, Activity Explorer, eDiscovery, <strong>Adaptive Protection</strong> (binds IRM \u2192 DLP automatically).</li>
  <li><strong>Copilot = RAG over Graph + Semantic Index, permission-aware</strong>. Flow: prompt \u2192 orchestrator \u2192 Graph/Semantic Index \u2192 LLM with system prompt \u2192 content safety + groundedness \u2192 response. <strong>No training on your data.</strong> <strong>Work IQ</strong> (preview) extends Semantic Index to your custom AI apps.</li>
  <li><strong>Responsible AI</strong> = Fairness, Reliability &amp; Safety, Privacy &amp; Security, Inclusiveness, Accountability, Transparency.</li>
  <li><strong>Oversharing</strong> is Copilot's #1 risk. Fight it with <strong>SharePoint Advanced Management + Data Access Governance report + Restricted Site Access + Restricted content discovery + Restricted SharePoint Search (\u2264 100 sites, hub sites excluded)</strong>.</li>
  <li><strong>Copilot licensing</strong> = per-user (~$30/u/mo, predictable) vs <strong>PAYG</strong> (metered, Azure subscription, use budgets + alerts) vs <strong>Credit Packs</strong> (burst). <strong>Copilot Chat (free)</strong> = web-only; <strong>Copilot Chat paid</strong> = work-grounded; <strong>Business plans cap at 300 users</strong> and <strong>lack Purview + IRM</strong>.</li>
  <li><strong>Copilot admin tasks</strong> = assign licenses, manage PAYG/budget, monitor with <strong>Copilot Analytics &amp; Viva Insights</strong>, manage prompts, apply <strong>operational best practices</strong> (troubleshooting + user communication + license reclamation).</li>
  <li><strong>Agent admin tasks</strong> = configure access, create in <strong>Copilot Studio (Describe / Configure \u2014 or start from a template)</strong> or <strong>SharePoint</strong>, run the <strong>approval workflow</strong>, <strong>test and edit</strong>, monitor via <strong>M365 admin center + Power Platform admin center</strong> for the <strong>full lifecycle</strong>. <strong>Prefer APIs and MCP over computer-use / GUI scripting.</strong> Agents can have an <strong>Entra Agent ID</strong>.</li>
  <li><strong>Researcher</strong> = deep research with citations. <strong>Analyst</strong> = data analysis on tables/Excel. <strong>Custom</strong> = your own department / process agent.</li>
  <li><strong>Plan before you deploy</strong> \u2014 readiness checklist, <strong>group-level</strong> enablement, <strong>pilot</strong> before broad rollout (Pilot \u2192 Evaluate \u2192 Expand \u2192 Optimize), change-management comms.</li>
  <li><strong>Pilot, evaluate, and reclaim</strong> \u2014 adopt in waves, instrument with Copilot Analytics, and reassign underused Copilot licenses.</li>
  <li><strong>Reuse what you know</strong> \u2014 exam is fundamentals; no labs, no case studies, no tricks. Use process of elimination and time markers.</li>
  <li><strong>Six Zero Trust pillars</strong> = Identity \u00b7 Endpoints \u00b7 Applications \u00b7 Data \u00b7 Infrastructure \u00b7 Network. Know one M365 tool for each.</li>
  <li><strong>MSTIC</strong> powers Defender's intelligence \u2014 65T+ signals/day; <strong>Threat Explorer</strong> is for real-time email investigation; <strong>Threat Analytics</strong> reports are mapped to <strong>MITRE ATT&amp;CK</strong>.</li>
  <li><strong>Defender for Office 365 specifics</strong>: Spoof intelligence \u00b7 Impersonation protection \u00b7 <strong>Safe Links</strong> (URL rewrite, rescan at click) \u00b7 <strong>ZAP</strong> (retroactive removal) \u00b7 Attachment filtering.</li>
  <li><strong>M365 = RAG over Graph + Semantic Index, permission-aware, no new data-access path</strong>. Copilot uses the user's <strong>OAuth token</strong>; the response carries <strong>source links</strong>; <strong>data minimization</strong> applies.</li>
  <li><strong>Compliance Manager</strong> = Microsoft-managed controls (auto-monitored) + <strong>Customer-managed controls</strong> (manual) + <strong>Improvement actions with owners</strong> + <strong>Compliance Score</strong>.</li>
  <li><strong>OneDrive Known Folder Move</strong> (Desktop/Documents/Pictures) and <strong>SharePoint team sites vs communication sites</strong> are quick exam wins.</li>
  <li><strong>PowerShell tools</strong>: Exchange Online \u00b7 Teams \u00b7 SharePoint Online Management Shell \u00b7 <strong>Microsoft Graph PowerShell SDK</strong>.</li>
  <li><strong>App protection policies (MAM)</strong> for BYOD = block copy/paste, local saves, rooted/jailbroken devices \u2014 without enrolling the device.</li>
</ol>
<p>Good luck on the exam.</p>`
      }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { studyGuideSections };
}
