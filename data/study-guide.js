const studyGuideData = {
  // ============================================================
  // PREAMBLE — Getting Started (4 items)
  // ============================================================
  preamble: [
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
<h4>Learning Path 1 \u2014 Explore Microsoft 365 administration</h4>
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
<h4>Learning Path 2 \u2014 Explore Microsoft 365 Copilot and Agent Administration</h4>
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
  <li>Create a <strong>Microsoft 365 Copilot Chat agent \u2014 Part 1</strong></li>
  <li>Create a <strong>Microsoft 365 Copilot Chat agent \u2014 Part 2</strong></li>
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
  ],

  // ============================================================
  // LEARNING PATHS
  // ============================================================
  learningPaths: [
    {
      lpId: "lp1",
      lpTitle: "Explore Microsoft 365 administration",
      modules: [
        {
          moduleId: "m1",
          moduleTitle: "Explore Microsoft 365 security foundations",
          units: [
            {
              unitId: "m1-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of the Explore Microsoft 365 security foundations module. This module covers Zero Trust security, threat protection, identity and authentication, access management, Microsoft Entra, and troubleshooting identity security.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u2",
              unitTitle: "Analyze the Zero Trust security model",
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
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u3",
              unitTitle: "Implement Zero Trust in Microsoft 365",
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
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u4",
              unitTitle: "Examine threat protection and intelligence in Microsoft 365",
              content: `<h4>Threat protection and intelligence (Module 1, Unit 4)</h4>
<ul>
  <li><strong>Threat intelligence</strong> \u2014 Microsoft Defender XDR correlates signals from identity, endpoints, email, and cloud apps to detect multi-stage attacks (kill-chain, MITRE ATT&amp;CK mapping).</li>
  <li><strong>Threat protection</strong> \u2014 capabilities in Defender for Identity, Defender for Office 365 (Safe Links, Safe Attachments, anti-phishing), Defender for Endpoint, Defender for Cloud Apps.</li>
  <li><strong>Identity threat detection</strong> \u2014 Entra ID Protection flags risky sign-ins (anonymous IP, atypical travel, leaked credentials, password spray) and risky users (leaked credentials, threat intelligence).</li>
  <li><strong>Best practice</strong> \u2014 review incidents weekly, tune alert rules, run attack simulations, and track Secure Score trends.</li>
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
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u5",
              unitTitle: "Explore identity and authentication in Microsoft 365",
              content: `<h4>Authentication methods</h4>
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
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u6",
              unitTitle: "Manage access and permissions in Microsoft 365",
              content: `<h4>Authorization (Module 1, Unit 6)</h4>
<ul>
  <li><strong>Conditional Access</strong> \u2014 if/then policy engine in Entra ID. Example: <em>if</em> sign-in from untrusted network <em>then</em> require MFA + compliant device.</li>
  <li><strong>RBAC (Role-Based Access Control)</strong> \u2014 built-in or custom roles (Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader, \u2026). Used to delegate permissions and responsibilities securely.</li>
  <li><strong>JIT (Just-In-Time) access</strong> \u2014 role activation only when needed, for a bounded time, with approval \u2014 delivered through <strong>PIM</strong>.</li>
  <li><strong>JEA (Just Enough Administration)</strong> \u2014 granular, task-scoped admin rights; the same least-privilege philosophy at the operations/PowerShell layer.</li>
</ul>
<h4>Privileged Identity Management (PIM)</h4>
<ul>
  <li>Provides <strong>just-in-time</strong> privileged access to Entra ID roles and Azure resource roles.</li>
  <li><strong>Eligible assignment</strong> (default) \u2014 user must activate; requires approval/justification; time-bound.</li>
  <li><strong>Active assignment</strong> \u2014 always-on (use only when needed, audit heavily).</li>
  <li>Activations produce a full <strong>audit trail</strong>; PIM alerts notify of unusual activations.</li>
</ul>
<h4>Security objects to use in an organization</h4>
<ul>
  <li><strong>Users</strong> \u2014 security principals representing people or service accounts.</li>
  <li><strong>Groups</strong> \u2014 security groups (for permissions) and Microsoft 365 groups (for collaboration).</li>
  <li><strong>Administrative units</strong> \u2014 scoped management (e.g., a regional admin for a subset of users).</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u7",
              unitTitle: "Explore identity and access management in Microsoft Entra",
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
  <li><strong>AI agent</strong> \u2014 <strong>Entra Agent ID</strong> (preview) gives agents their own identity so they can be governed, audited, and assigned their own permissions.</li>
</ul>
<h4>Hybrid identity authentication methods</h4>
<ul>
  <li><strong>Password Hash Sync (PHS)</strong> \u2014 <em>preferred</em>; no on-prem dependency; supports leaked-credential detection.</li>
  <li><strong>Pass-Through Authentication (PTA)</strong> \u2014 forwards auth to an agent on a DC; requires on-prem AD reachable.</li>
  <li><strong>Federation (AD FS)</strong> \u2014 heavy on-prem footprint; today, <strong>federate cloud services with Entra</strong> instead.</li>
</ul>
<h4>Groups types</h4>
<ul>
  <li><strong>Security group</strong> \u2014 assign access to resources; managed in Entra admin center.</li>
  <li><strong>Microsoft 365 group</strong> \u2014 collaboration (shared mailbox, calendar, SharePoint site, Planner, Teams).</li>
  <li><strong>Mail-enabled security group</strong> \u2014 security + email distribution.</li>
  <li><strong>Distribution list</strong> \u2014 email only; can ONLY be created in M365 admin center (not Entra).</li>
  <li><strong>Dynamic group</strong> \u2014 membership updates automatically based on user attributes (e.g., <code>department = Sales</code>).</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u8",
              unitTitle: "Troubleshoot and monitor identity security",
              content: `<h4>Tools to troubleshoot common sign-in issues</h4>
<ul>
  <li><strong>MFA issues</strong> \u2014 Microsoft Authenticator app, SSPR (self-service password reset), tenant MFA settings.</li>
  <li><strong>Conditional Access</strong> \u2014 sign-in logs, <strong>"What If" tool</strong> to test a policy before applying it, Conditional Access Insights &amp; Reporting workbook.</li>
  <li><strong>Risky sign-ins</strong> \u2014 Entra ID Protection risk report, risky sign-ins blade, risk remediation (block / require MFA / require password change).</li>
  <li><strong>Other</strong> \u2014 Self-Service Password Reset (SSPR), Azure AD sign-in logs (interactive + non-interactive), passwordless diagnostic.</li>
</ul>
<h4>Common sign-in problem \u2192 fix matrix</h4>
<table>
  <thead>
    <tr><th>Symptom</th><th>First check</th><th>Resolution</th></tr>
  </thead>
  <tbody>
    <tr><td>MFA failure (Authenticator)</td><td>Sign-in logs \u2192 exact failure reason</td><td>Re-register Authenticator; <strong>fix device time drift</strong> for TOTP codes</td></tr>
    <tr><td>MFA failure (FIDO2)</td><td>Sign-in logs</td><td>Re-register the FIDO2 security key</td></tr>
    <tr><td>Conditional Access denial</td><td><strong>What If</strong> tool</td><td>Identify the blocking policy; confirm device compliance in Intune; remediate or update the device</td></tr>
    <tr><td>Risky sign-in</td><td>Identity Protection risk log</td><td>Reset password, force MFA, or block access</td></tr>
    <tr><td>Location / IP block</td><td>Sign-in logs (IP, location)</td><td>Adjust Conditional Access policy; add temporary exception</td></tr>
    <tr><td>Legacy authentication failure</td><td>Client version</td><td>Upgrade apps; <strong>enable modern auth</strong>; retire legacy protocols</td></tr>
  </tbody>
</table>
<h4>Self-Service Password Reset (SSPR)</h4>
<ul>
  <li>Lets users reset their own password.</li>
  <li>Works for <strong>cloud-only</strong> accounts out of the box.</li>
  <li>Works for <strong>hybrid</strong> accounts only if <strong>Password Writeback</strong> is enabled in Entra Connect.</li>
  <li>Auth methods: mobile app notification/code, email, mobile phone (SMS/voice), security questions.</li>
</ul>
<h4>Identity Secure Score</h4>
<ul>
  <li>A <strong>percentage score</strong> showing how well your Entra ID tenant is configured against Microsoft's security best practices.</li>
  <li>Each <strong>improvement action</strong> has an impact score; the total achievable = 100%.</li>
  <li><strong>Interpret</strong> \u2014 aim for the recommended target; high score = better identity posture; investigate regressions in score history.</li>
</ul>
<h4>Audit logs</h4>
<ul>
  <li><strong>Entra ID audit logs</strong> \u2014 every directory change (user created, role assigned, app registered).</li>
  <li><strong>Unified Audit Log (Microsoft Purview)</strong> \u2014 every action across M365 workloads; default retention <strong>180 days</strong>; <strong>Premium</strong> = 1 year (requires E5).</li>
  <li>Tools: <strong>Microsoft Purview \u2192 Audit</strong>, <strong>Entra admin center \u2192 Audit logs</strong>, <strong>M365 Admin Center \u2192 Audit logs</strong>, <strong>Microsoft 365 Defender \u2192 Hunting</strong>.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u9",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 1: Explore Microsoft 365 security foundations. Review Zero Trust principles, threat protection, identity and authentication, access management, Microsoft Entra, and troubleshooting identity security.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u10",
              unitTitle: "Summary",
              content: `<p>Module 1 covered the Microsoft 365 security foundations including Zero Trust principles, layered security strategy, threat protection with Defender XDR, identity and authentication methods, Conditional Access, SSO, access management with RBAC/PIM/JIT/JEA, Microsoft Entra identity and access management, and troubleshooting identity security.</p>`,
              examTips: [],
              keyConcepts: []
            }
          ]
        },
        {
          moduleId: "m2",
          moduleTitle: "Introduction to Microsoft 365 core services and admin controls",
          units: [
            {
              unitId: "m2-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of the Introduction to Microsoft 365 core services and admin controls module. This module covers the Microsoft 365 ecosystem, admin center, Exchange/Teams/SharePoint, security/identity/compliance foundations, and RBAC admin roles.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u2",
              unitTitle: "Explore the Microsoft 365 ecosystem and core service components",
              content: `<h4>The Microsoft 365 ecosystem</h4>
<p>Microsoft 365 brings together major productivity and collaboration workloads under one secure, cloud-connected environment:</p>
<ul>
  <li><strong>Identity (Entra ID)</strong> \u2014 common identity layer for all workloads.</li>
  <li><strong>Exchange Online</strong> \u2014 mail, calendar, mail flow rules.</li>
  <li><strong>SharePoint</strong> \u2014 sites, libraries, content management.</li>
  <li><strong>OneDrive</strong> \u2014 personal storage.</li>
  <li><strong>Teams</strong> \u2014 chat, meetings, calling, app integrations.</li>
  <li><strong>Power Platform</strong> \u2014 Power Apps, Automate, BI, Copilot Studio.</li>
  <li><strong>Microsoft 365 Apps</strong> \u2014 Office desktop and web apps.</li>
  <li><strong>Microsoft 365 Copilot</strong> \u2014 AI assistant.</li>
</ul>
<h4>How license types affect access</h4>
<ul>
  <li><strong>License assignment controls feature access.</strong> A user with an E3 license cannot use E5-only features.</li>
  <li>Licenses are assigned to <strong>users</strong> or to <strong>groups</strong> (group-based licensing cascades to members).</li>
  <li>Removing a license immediately revokes access; data is preserved for a grace period.</li>
  <li>Service plans inside a license can be enabled/disabled individually.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u3",
              unitTitle: "Explore the Microsoft 365 admin center and key admin tools",
              content: `<h4>Microsoft 365 admin center \u2014 organization configuration</h4>
<ul>
  <li><strong>Domain names</strong> \u2014 add and verify custom domains before pointing MX/SPF/DKIM/DMARC records to M365.</li>
  <li><strong>Org settings</strong> \u2014 release preferences, theme, contact info, privacy profile, customer lockbox, data location.</li>
</ul>
<h4>Key admin tools inside the M365 admin center</h4>
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
<h4>PowerShell modules for M365 admin</h4>
<ul>
  <li><strong>Exchange Online PowerShell</strong></li>
  <li><strong>Microsoft Teams PowerShell</strong></li>
  <li><strong>SharePoint Online Management Shell</strong></li>
  <li><strong>Microsoft Graph PowerShell SDK</strong> (the new way \u2014 covers most workloads)</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u4",
              unitTitle: "Examine Microsoft Exchange, Teams, and SharePoint",
              content: `<h4>Exchange Online admin center \u2014 objects</h4>
<ul>
  <li><strong>Mailboxes</strong> \u2014 user mailboxes, shared mailboxes, resource mailboxes (rooms, equipment), Microsoft 365 group mailboxes.</li>
  <li><strong>Distribution lists</strong> \u2014 email groups for sending to many recipients.</li>
  <li>Mail flow rules (transport rules), accepted domains, connectors, anti-spam, anti-malware, DLP.</li>
</ul>
<h4>SharePoint in Microsoft 365 admin center \u2014 objects</h4>
<ul>
  <li><strong>Sites</strong> \u2014 communication sites (broadcast) and team sites (collaboration, tied to Microsoft 365 groups).</li>
  <li><strong>Libraries</strong> \u2014 document libraries with versioning, metadata, columns, views.</li>
  <li><strong>Folders</strong> \u2014 sub-containers for organizing content with unique permissions.</li>
</ul>
<h4>SharePoint roles and permissions</h4>
<ul>
  <li><strong>SharePoint Groups</strong>: <strong>Owners</strong> (full control), <strong>Members</strong> (contribute), <strong>Visitors</strong> (read).</li>
  <li><strong>Permission levels</strong> \u2014 Full Control, Design, Edit, Contribute, Read, Limited Access.</li>
  <li><strong>Sharing settings</strong> \u2014 Anyone, New and existing guests, Existing guests, Only people in your organization.</li>
  <li>Permission inheritance can be broken for granular control (main source of oversharing).</li>
</ul>
<h4>Teams admin center \u2014 objects</h4>
<ul>
  <li><strong>Teams</strong> \u2014 tied to a Microsoft 365 group.</li>
  <li><strong>Channels</strong> \u2014 <strong>Standard</strong> (open to all), <strong>Private</strong> (invitation-only), <strong>Shared</strong> (cross-team).</li>
  <li><strong>Policies</strong> \u2014 Messaging, Meeting, Live Event, Calling, App permission, App setup, Teams Phone, Teams Update management.</li>
  <li><strong>OneDrive</strong> \u2014 1 TB+ per user; uses SharePoint storage; <strong>Known Folder Move</strong> = Desktop/Documents/Pictures.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u5",
              unitTitle: "Establish security, identity, and compliance foundations",
              content: `<h4>Security, identity, and compliance foundations</h4>
<ul>
  <li><strong>Security foundations</strong> \u2014 Zero Trust principles (verify explicitly, least privilege, assume breach), layered security strategy (assessment, identity, endpoint, data, threat monitoring, user education).</li>
  <li><strong>Identity foundations</strong> \u2014 Entra ID as the identity plane; authentication (MFA, passkeys, Windows Hello, certificate-based); Conditional Access as the policy engine; SSO for seamless access.</li>
  <li><strong>Authorization foundations</strong> \u2014 RBAC with built-in and custom roles; JIT/JEA with PIM; Access Reviews for periodic re-attestation.</li>
  <li><strong>Compliance foundations</strong> \u2014 Microsoft Purview as the compliance portal; Sensitivity Labels for information protection; DLP for data loss prevention; retention policies and labels for data lifecycle management.</li>
  <li><strong>Monitoring foundations</strong> \u2014 Identity Secure Score, Unified Audit Log (180 days default, 1 year with E5), Entra ID audit logs, sign-in logs.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u6",
              unitTitle: "Assign admin roles using RBAC",
              content: `<h4>RBAC (Role-Based Access Control)</h4>
<ul>
  <li><strong>Roles</strong> \u2014 built-in (Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader, \u2026) and custom.</li>
  <li>Roles are bound to a <strong>scope</strong> (tenant-wide or specific administrative unit).</li>
  <li><strong>Global Admin</strong> \u2014 god role; <strong>minimize</strong> (target \u2264 4); must be <strong>eligible in PIM</strong>, not permanent.</li>
  <li><strong>Delegation best practice</strong> \u2014 assign the least-privilege role that can do the job.</li>
</ul>
<h4>Privileged Identity Management (PIM)</h4>
<ul>
  <li><strong>Eligible assignment</strong> \u2014 user must activate the role when needed (time-bound, requires approval, full audit trail).</li>
  <li><strong>Active assignment</strong> \u2014 always-on (use sparingly, audit heavily).</li>
  <li><strong>Access Reviews</strong> \u2014 periodic re-attestation of role assignments; kills privilege creep.</li>
  <li><strong>Entitlement Management / Access Packages</strong> \u2014 bundle groups, sites, apps, roles with approval + expiration.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u7",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 2: Introduction to Microsoft 365 core services and admin controls. Review the M365 ecosystem, admin center tools, Exchange/Teams/SharePoint admin centers, security/identity/compliance foundations, and RBAC admin roles.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u8",
              unitTitle: "Summary",
              content: `<p>Module 2 covered the Microsoft 365 ecosystem and core service components, the Microsoft 365 admin center and key admin tools, Exchange/Teams/SharePoint admin objects and configuration, security/identity/compliance foundations, and assigning admin roles using RBAC with PIM and Access Reviews.</p>`,
              examTips: [],
              keyConcepts: []
            }
          ]
        },
        {
          moduleId: "m3",
          moduleTitle: "Protect and govern Microsoft 365 data",
          units: [
            {
              unitId: "m3-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of the Protect and govern Microsoft 365 data module. This module covers Microsoft Purview, data risk identification, compliance and AI data discovery, oversharing in SharePoint, and data protection in Microsoft 365 Copilot.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u2",
              unitTitle: "Introduction to Microsoft Purview and data governance",
              content: `<h4>Microsoft Purview</h4>
<p>The unified compliance portal at <strong>https://purview.microsoft.com</strong>.</p>
<table>
  <thead>
    <tr><th>Capability</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Purview Information Protection</strong></td><td>Discover, classify, label, and protect sensitive data \u2014 <strong>Sensitivity Labels</strong> travel with the content.</td></tr>
    <tr><td><strong>Data Loss Prevention (DLP)</strong></td><td>Detect and <strong>prevent</strong> accidental sharing of sensitive data across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps.</td></tr>
    <tr><td><strong>Insider Risk Management</strong></td><td>Correlate signals (departing user + bulk download, off-hours activity, anomalous data movement) into risk scores and cases.</td></tr>
    <tr><td><strong>Communication Compliance</strong></td><td>Monitor internal email and Teams chat for harassment, regulatory violations, conflicts of interest, and policy breaches.</td></tr>
    <tr><td><strong>DSPM for AI</strong></td><td>Discover, monitor, and govern the use of AI services and Copilot activity across the tenant.</td></tr>
    <tr><td><strong>Data Lifecycle Management</strong></td><td>Govern the lifecycle of data \u2014 retention policies and retention labels, disposition reviews, records management.</td></tr>
    <tr><td><strong>eDiscovery</strong></td><td>Search, hold, and export content for legal investigations. Standard in E3; Premium (E5) adds analytics and review set tooling.</td></tr>
    <tr><td><strong>Compliance Manager</strong></td><td>Centralized dashboard of compliance posture across regulations with recommended improvement actions.</td></tr>
    <tr><td><strong>Data Explorer</strong></td><td>Query tool for content metadata; explore who accessed items, label distribution, sensitive data locations.</td></tr>
    <tr><td><strong>Activity Explorer</strong></td><td>Shows user activities on labeled content \u2014 view, modify, print, email, share.</td></tr>
    <tr><td><strong>Adaptive Protection</strong></td><td>Dynamically applies stricter DLP policies as a user's insider-risk score increases.</td></tr>
  </tbody>
</table>
<h4>Sensitivity labels</h4>
<ul>
  <li>Use cases: <strong>Confidential/Highly Confidential</strong> (restrict access, encrypt, watermark), <strong>Public</strong> (no restrictions), <strong>Business/General</strong> (internal, visual marking), <strong>Regulatory</strong> (auto-labeled for PII/financial/healthcare).</li>
  <li>Apply in <strong>Office apps, Outlook, SharePoint, OneDrive, Teams, Power BI</strong>; <strong>travels with the file</strong> even when downloaded.</li>
  <li><strong>Auto-labeling</strong> \u2014 Microsoft-managed (built-in) or custom policies detect and label based on content inspection.</li>
</ul>
<h4>Data classification</h4>
<ul>
  <li><strong>Trainable classifiers</strong> \u2014 ML models that identify categories like Resume, Source Code, HR, Finance.</li>
  <li><strong>Sensitive Information Types (SITs)</strong> \u2014 pattern matches (regex, checksum) for credit card, SSN, passport, IBAN.</li>
  <li><strong>Exact Data Match (EDM)</strong> \u2014 match against a structured database of sensitive records.</li>
</ul>
<h4>Data lifecycle management</h4>
<ul>
  <li><strong>Retention policy</strong> \u2014 tenant-level rule (e.g., retain all Teams chat for 7 years then delete).</li>
  <li><strong>Retention label</strong> \u2014 content-level (e.g., "Customer Records \u2014 10 years" applied to files).</li>
  <li><strong>Archiving</strong> \u2014 move inactive content to cheaper storage while keeping it discoverable.</li>
  <li><strong>Disposition review</strong> \u2014 an approver confirms deletion before it happens.</li>
  <li><strong>Records management</strong> \u2014 declares items as immutable records that cannot be edited or deleted.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u3",
              unitTitle: "Identify and respond to data risks with Microsoft Purview",
              content: `<h4>Tools to identify data protection and governance risks</h4>
<table>
  <thead>
    <tr><th>Tool</th><th>Use to identify\u2026</th></tr>
  </thead>
  <tbody>
    <tr><td>Compliance Manager</td><td>Compliance posture gaps and improvement actions mapped to regulations.</td></tr>
    <tr><td>Data Explorer</td><td>Where sensitive data lives, label distribution.</td></tr>
    <tr><td>Insider Risk Management</td><td>Risky user behavior \u2014 bulk download, off-hours activity, departing user patterns.</td></tr>
    <tr><td>DLP alerts</td><td>When a DLP policy is triggered \u2014 who, what item, which service, policy response.</td></tr>
    <tr><td>Communication Compliance</td><td>Policy violations in email and Teams \u2014 harassment, profanity, regulatory concerns.</td></tr>
    <tr><td>Activity Explorer</td><td>Per-user, per-file activity on labeled content \u2014 view, modify, share, email, print.</td></tr>
    <tr><td>DSPM for AI</td><td>Discovery of AI activity \u2014 risky prompts, sensitive data flowing into AI, prompt-injection attempts.</td></tr>
    <tr><td>eDiscovery Content Search</td><td>Search files and emails by keyword, sender, recipient, label, date, location.</td></tr>
    <tr><td>Unified Audit Log</td><td>Every action across workloads, default 180 days (1 year with E5).</td></tr>
  </tbody>
</table>
<h4>Compliance Manager \u2014 control types</h4>
<ul>
  <li><strong>Microsoft-managed controls</strong> \u2014 automatically monitored by Microsoft (e.g., encryption at rest). No action from you.</li>
  <li><strong>Customer-managed controls</strong> \u2014 require <strong>manual verification</strong> by your admins (e.g., training completion, documentation).</li>
  <li><strong>Improvement actions</strong> are mapped to controls, have assigned owners, and roll up into the <strong>Compliance Score</strong>.</li>
</ul>
<h4>Insider Risk Management details</h4>
<ul>
  <li>Optional signals: <strong>Endpoint activity</strong> (Defender for Endpoint), <strong>HR events</strong> (exit interview integration), DLP alerts feeding IRM cases.</li>
  <li>IRM cases can be <strong>escalated to eDiscovery</strong> for legal hold.</li>
</ul>
<h4>Communication Compliance channels</h4>
<ul>
  <li>Microsoft Teams chats and channels, Exchange Online email, Viva Engage, third-party connectors (Slack, Bloomberg).</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u4",
              unitTitle: "Examine compliance, AI data discovery, and eDiscovery",
              content: `<h4>eDiscovery</h4>
<ul>
  <li><strong>eDiscovery Standard</strong> (included in E3) \u2014 search, hold, and export content for legal investigations.</li>
  <li><strong>eDiscovery Premium</strong> (included in E5) \u2014 adds lawyer-client model, analytics, review set tooling, and advanced processing.</li>
</ul>
<h4>Data Explorer</h4>
<ul>
  <li>Query content metadata; filter by <strong>location</strong>, <strong>sensitivity label</strong>, <strong>content type</strong>.</li>
  <li>Visualize <strong>data exposure patterns</strong> (where sensitive data lives, who owns it).</li>
  <li>Identify <strong>externally shared</strong> or high-risk files. Example: find all "Confidential \u2014 Finance" documents and see how they are shared.</li>
</ul>
<h4>Activity Explorer</h4>
<ul>
  <li>Shows <strong>user activities</strong> on labeled content \u2014 view, modify, print, email, share.</li>
  <li>Core signal for DSPM and IRM investigations.</li>
  <li>Captures every Copilot action for audit.</li>
</ul>
<h4>DSPM for AI</h4>
<ul>
  <li>Data Security Posture Management for AI \u2014 surfaces <strong>shadow AI</strong> (non-corporate AI services), risky prompts, prompt-injection patterns.</li>
  <li>Integrates with Activity Explorer for the last 30 days of Copilot interactions.</li>
  <li>Flags sites feeding too much data into Copilot without restriction.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u5",
              unitTitle: "Explore oversharing and data access governance in SharePoint",
              content: `<h4>Tools to troubleshoot oversharing</h4>
<ul>
  <li><strong>SharePoint Advanced Management</strong> \u2014 the umbrella capability.</li>
  <li><strong>Data access governance reports</strong> \u2014 surface sites, libraries, and files that are broadly shared.</li>
  <li><strong>SharePoint admin center \u2192 Reports</strong> \u2014 sharing summary, file activity, sharing links inventory.</li>
</ul>
<h4>Run a data access governance report</h4>
<ol>
  <li>Go to <strong>SharePoint admin center</strong> (or <strong>https://aka.ms/spoda</strong>).</li>
  <li>Open <strong>Reports \u2192 Data access governance</strong>.</li>
  <li>Select a site or run across all sites.</li>
  <li>The report shows: broken inheritance, access requests, external sharing, Anyone links, label distribution, sensitivity label violations.</li>
  <li>Use the report to drive remediation: tighten sharing, apply labels, restrict access.</li>
</ol>
<h4>SharePoint Advanced Management features</h4>
<ul>
  <li><strong>Restricted Site Access</strong> \u2014 limit content visibility to a specified Entra ID group.</li>
  <li><strong>Oversharing reports / Permission site report</strong> \u2014 see what's been shared too broadly.</li>
  <li><strong>Conditional access for SharePoint sites</strong> \u2014 block access from unmanaged devices.</li>
  <li><strong>Inactive site lifecycle</strong> \u2014 auto-archive or delete inactive sites.</li>
  <li><strong>Site ownership policy</strong> \u2014 enforces a minimum number of owners (e.g., at least 2) on every site.</li>
  <li><strong>Restricted content discovery</strong> (site level) \u2014 opt a site out of being indexed and used by Copilot Semantic Index.</li>
  <li><strong>Restricted SharePoint Search</strong> (tenant level) \u2014 restricts Copilot's grounding to a hand-picked allow-list of up to <strong>100 sites</strong> (hub sites and children not counted).</li>
</ul>
<h4>Common oversharing scenarios</h4>
<ul>
  <li>Sharing with <strong>"Everyone"</strong> or <strong>"Anyone with the link"</strong>.</li>
  <li>Granting <strong>Edit</strong> when <strong>View only</strong> was intended.</li>
  <li>Granting <strong>external guests full site access</strong> when they only needed a single file.</li>
  <li>DAG reports flag sites with: sensitive content, excessive sharing, inactive owners, missing sensitivity labels.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u6",
              unitTitle: "Explore data protection in Microsoft 365 Copilot",
              content: `<h4>How Copilot accesses data</h4>
<ul>
  <li><strong>Microsoft 365 Copilot is grounded in your tenant's data</strong> through Microsoft Graph.</li>
  <li>Copilot only retrieves content the <strong>signed-in user is permitted to see</strong>.</li>
  <li>Three retrieval layers: <strong>Graph search</strong> (permitted content), <strong>Semantic Index</strong> (pre-computed relationships), <strong>LLM</strong> (reasoning).</li>
  <li>Prompts, responses, and tenant data are <strong>not</strong> used to train foundation models.</li>
</ul>
<h4>How Microsoft Graph influences Copilot responses</h4>
<ul>
  <li>Every Copilot response is composed from Graph-grounded context \u2014 files, emails, chats, meetings, people.</li>
  <li><strong>Permission-aware</strong> \u2014 Copilot respects SharePoint/OneDrive permissions, Sensitivity Labels, mailbox delegation, Teams membership.</li>
  <li>If a user cannot access a document directly, <strong>Copilot cannot surface its content</strong> through another channel.</li>
  <li>Graph connectors extend the semantic index to <strong>third-party data</strong> (ServiceNow, Confluence, Salesforce).</li>
</ul>
<h4>How Copilot uses permissions and controls</h4>
<ul>
  <li><strong>Microsoft 365 controls</strong> \u2014 SharePoint permissions, OneDrive sharing links, mailbox access, Teams channel membership, Sensitivity Label encryption.</li>
  <li><strong>Microsoft Purview controls</strong> \u2014 Sensitivity Labels (encrypted content restricted), DLP (blocks Copilot from pasting sensitive data), DSPM for AI (surfaces risky prompts), Activity Explorer (audits Copilot actions).</li>
  <li><strong>Microsoft Defender controls</strong> \u2014 Defender for Cloud Apps session policies apply to Copilot actions.</li>
  <li><strong>Customer Key</strong> \u2014 customer-managed encryption keys; <strong>Customer Lockbox</strong> \u2014 explicit consent for Microsoft engineer access.</li>
</ul>
<h4>Responsible AI principles</h4>
<ul>
  <li><strong>Fairness</strong> \u2014 consistent for all users, languages, and contexts.</li>
  <li><strong>Reliability and safety</strong> \u2014 testable outputs; refuses harmful content.</li>
  <li><strong>Privacy and security</strong> \u2014 tenant data stays in your boundary; permissions honored; actions auditable.</li>
  <li><strong>Inclusiveness</strong> \u2014 accessible (screen reader, high-contrast).</li>
  <li><strong>Accountability</strong> \u2014 humans remain accountable; Copilot is an assistant.</li>
  <li><strong>Transparency</strong> \u2014 Microsoft publishes how Copilot works, data it uses, and limits.</li>
</ul>`,
              examTips: [],
              keyConcepts: [
                "Purview Information Protection", "Sensitivity Label", "Auto-labeling", "DLP", "DLP Alert",
                "Insider Risk Management", "Communication Compliance", "DSPM for AI", "Data Lifecycle Management",
                "Retention Policy", "Retention Label", "Disposition Review", "Records Management", "Archiving",
                "Compliance Manager", "Data Explorer", "Activity Explorer", "Content Search", "eDiscovery Standard",
                "eDiscovery Premium", "Trainable Classifier", "Sensitive Information Type", "EDM",
                "Graph", "Semantic Index", "Grounding", "Customer Key", "Customer Lockbox",
                "Responsible AI", "SharePoint Advanced Management", "Restricted Site Access",
                "Data Access Governance Report", "Oversharing", "Adaptive Protection"
              ]
            },
            {
              unitId: "m3-u7",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 3: Protect and govern Microsoft 365 data. Review Microsoft Purview capabilities, data risk identification, compliance and AI data discovery, oversharing in SharePoint, and data protection in Copilot.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u8",
              unitTitle: "Summary",
              content: `<p>Module 3 covered Microsoft Purview capabilities including Sensitivity Labels, DLP, Insider Risk Management, Communication Compliance, DSPM for AI, Data Lifecycle Management, eDiscovery, and Compliance Manager. It also covered identifying data risks, oversharing in SharePoint with SharePoint Advanced Management, and data protection for Microsoft 365 Copilot including Graph grounding, permission awareness, and Responsible AI.</p>`,
              examTips: [],
              keyConcepts: []
            }
          ]
        }
      ]
    },
    {
      lpId: "lp2",
      lpTitle: "Explore Microsoft 365 Copilot and Agent Administration",
      modules: [
        {
          moduleId: "m4",
          moduleTitle: "Explore Microsoft 365 Copilot and agents",
          units: [
            {
              unitId: "m4-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of the Explore Microsoft 365 Copilot and agents module. This module covers Microsoft 365 Copilot architecture, agents, comparing Copilot and agents, licensing models, planning and deployment, and real-world use cases.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u2",
              unitTitle: "Introduction to Microsoft 365 Copilot",
              content: `<h4>Microsoft 365 Copilot architecture</h4>
<ul>
  <li><strong>LLM</strong> \u2014 the model that produces natural language by predicting the next most probable token.</li>
  <li><strong>Microsoft Graph</strong> \u2014 the data + permissions layer (retrieves permitted content via Microsoft Graph APIs).</li>
  <li><strong>Semantic Index</strong> \u2014 pre-computed relationships across users, content, and concepts.</li>
  <li><strong>Orchestrator / Copilot system</strong> \u2014 coordinates the prompt, retrieval, and response. Adds a <strong>system prompt</strong> to instruct the LLM.</li>
  <li><strong>Content safety</strong> \u2014 filters both prompt and response for harmful or offensive content.</li>
  <li><strong>Groundedness detection</strong> \u2014 flags answers not supported by the retrieved grounding data (hallucination control).</li>
  <li><strong>Apps</strong> \u2014 Word, Excel, PowerPoint, Outlook, OneNote, Teams, Business Chat (now <strong>Microsoft 365 Copilot Chat</strong>).</li>
  <li><strong>Microsoft 365 Copilot Chat</strong> \u2014 the free/built-in chat surface (web-grounded only); <strong>Microsoft 365 Copilot</strong> is the paid licensed version with work-grounded answers.</li>
</ul>
<p><strong>No training on your data</strong>: prompts, responses, and tenant data are never used to train the foundation LLMs.</p>
<h4>Which Copilot features can be enabled or disabled</h4>
<ul>
  <li><strong>Web content access</strong> \u2014 Off / On (with or without Bing grounding).</li>
  <li><strong>Plugin / connector controls</strong> \u2014 block or allow specific plugins tenant-wide.</li>
  <li><strong>Per-app enablement</strong> \u2014 disable Copilot in specific apps (Word, Excel, Outlook, Teams, etc.).</li>
  <li><strong>Per-user</strong> \u2014 controlled by license assignment.</li>
  <li><strong>Per-content</strong> \u2014 Sensitivity Labels can prevent Copilot from using labeled content.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u3",
              unitTitle: "What are agents?",
              content: `<h4>What are agents?</h4>
<ul>
  <li>Specialized AI assistants built on top of Copilot that perform a specific job.</li>
  <li><strong>Types</strong>:
    <ul>
      <li><strong>Prebuilt agents</strong> \u2014 Researcher, Analyst, Writing Coach, Prompt Coach, plus Microsoft-authored agents in the Agent Store.</li>
      <li><strong>Custom agents</strong> \u2014 built in Copilot Studio or via declarative manifest.</li>
      <li><strong>SharePoint agents</strong> \u2014 scoped to a single site, no authoring required.</li>
      <li><strong>Advanced / custom engine agents</strong> \u2014 full control via <strong>Azure AI Foundry</strong> + Teams.</li>
    </ul>
  </li>
</ul>
<h4>Agent identity</h4>
<ul>
  <li>Agents typically need <strong>their own identity</strong> because they often operate across data the calling user may not see.</li>
  <li><strong>Entra Agent ID</strong> (preview) \u2014 agents get their own first-class identity in Entra for governance and audit.</li>
</ul>
<h4>MCP (Model Context Protocol)</h4>
<ul>
  <li>An open standard for AI apps to talk to <strong>additional knowledge</strong> and <strong>tools</strong>.</li>
  <li><strong>Prefer APIs and MCP servers</strong> over <strong>computer-use / GUI scripting</strong> \u2014 UIs change, APIs/MCPs are stable and auditable.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u4",
              unitTitle: "Compare Microsoft 365 Copilot and agents",
              content: `<h4>Compare the built-in capabilities of Copilot and agents</h4>
<table>
  <thead>
    <tr><th>Capability</th><th>Microsoft 365 Copilot</th><th>Agents</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Scope</strong></td><td>General assistant across M365</td><td>Scoped to a specific role/task</td></tr>
    <tr><td><strong>Built-in</strong></td><td>Yes (Word, Excel, PPT, Outlook, Teams, \u2026)</td><td><strong>Pre-built</strong> (Researcher, Analyst) or <strong>Custom</strong></td></tr>
    <tr><td><strong>Grounding</strong></td><td>Microsoft Graph + Semantic Index</td><td>Same, plus knowledge sources you specify</td></tr>
    <tr><td><strong>Autonomy</strong></td><td>Reactive to user prompts</td><td>Can run <strong>autonomously</strong>, multi-step, on a schedule or trigger</td></tr>
    <tr><td><strong>Customization</strong></td><td>Limited (prompts only)</td><td>Configurable in Copilot Studio: knowledge, actions, instructions, rules</td></tr>
  </tbody>
</table>
<h4>Use cases for Researcher</h4>
<ul>
  <li><strong>Deep research</strong> \u2014 multi-step web + work research, planning, citations.</li>
  <li>Tasks: compile a market analysis with citations from files and the web, draft a competitive landscape report.</li>
</ul>
<h4>Use cases for Analyst</h4>
<ul>
  <li><strong>Data analysis</strong> \u2014 turns raw data (Excel, tables, CSVs) into insights; runs Python-style reasoning.</li>
  <li>Tasks: summarize sales table by region, forecast quarterly revenue, find anomalies in logs.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u5",
              unitTitle: "Compare Microsoft 365 Copilot licensing models",
              content: `<h4>License model: monthly vs pay-as-you-go</h4>
<ul>
  <li><strong>Microsoft 365 Copilot monthly license</strong> \u2014 <strong>per-user</strong>, predictable, ~<strong>$30 USD/user/month</strong>.</li>
  <li><strong>Pay-as-you-go</strong> \u2014 metered consumption billed through an <strong>Azure subscription</strong>; available for Copilot Studio messages and SharePoint.</li>
  <li>Choose <strong>PAYG</strong> when usage is variable; choose <strong>per-user</strong> when usage is high and predictable.</li>
  <li><strong>Copilot Credit Packs</strong> \u2014 pre-paid Copilot Studio message bundles for burst capacity.</li>
  <li><strong>Copilot Chat (free)</strong> \u2014 web-grounded only, no Microsoft Graph / work data.</li>
  <li><strong>M365 Copilot Chat (paid)</strong> \u2014 adds work-grounded answers on top of Copilot Chat.</li>
  <li><strong>Copilot Studio</strong> \u2014 separate licensing; credit packs or PAYG.</li>
</ul>
<h4>Plan family notes</h4>
<ul>
  <li><strong>M365 Business</strong> plans (Basic, Standard, Premium) \u2014 capped at <strong>300 users</strong>, lack <strong>Purview</strong> and <strong>Insider Risk Management</strong>.</li>
  <li><strong>M365 E3 / E5</strong> \u2014 enterprise plans; E5 unlocks Plan 2 Defender for Office 365 and full Purview.</li>
  <li><strong>M365 E5 Compliance</strong> and <strong>E5 Security</strong> add-ons \u2014 stack on E3 for just compliance or security pieces.</li>
</ul>
<h4>PAYG billing in Azure</h4>
<ul>
  <li>PAYG resource is hidden in Azure portal by default \u2014 switch to "show hidden" to find it.</li>
  <li>Apply <strong>Azure budgets</strong>, <strong>cost analysis</strong>, <strong>cost alerts</strong>, and <strong>spend thresholds</strong>.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u6",
              unitTitle: "Plan and deploy Microsoft 365 Copilot and agents",
              content: `<h4>Readiness checklist</h4>
<ul>
  <li><strong>Identity &amp; access</strong> \u2014 Entra ID healthy; Conditional Access + phishing-resistant MFA for admins.</li>
  <li><strong>Content</strong> \u2014 run oversharing reports; clean up broad links; apply Sensitivity Labels.</li>
  <li><strong>Licenses</strong> \u2014 Copilot licenses purchased; Power Platform / Azure subscription for PAYG.</li>
  <li><strong>Data security</strong> \u2014 Purview DLP and DSPM for AI enabled; Customer Lockbox configured.</li>
  <li><strong>Adoption strategy</strong> \u2014 pilot group, training, champion network, feedback channel, exec sponsorship.</li>
  <li><strong>Connectors</strong> \u2014 approve Graph connectors you intend to ground against.</li>
  <li><strong>Network</strong> \u2014 Copilot endpoints reachable; no proxy blocks for required APIs.</li>
  <li><strong>Change management</strong> \u2014 user comms plan, champion network, training schedule, feedback channel.</li>
</ul>
<h4>Phased rollout</h4>
<ul>
  <li><strong>Pilot</strong> \u2014 10\u201320 power users, IT team, a single workload.</li>
  <li><strong>Evaluate</strong> \u2014 Copilot Analytics, Adoption Score, feedback survey, sensitive data exposure.</li>
  <li><strong>Expand</strong> \u2014 broader business unit, more workloads, more agents.</li>
  <li><strong>Optimize</strong> \u2014 tune policies, retire blockers, share best prompts.</li>
</ul>
<h4>Group-level vs tenant-level enablement</h4>
<ul>
  <li>Tenant-level toggles are blunt \u2014 <strong>prefer group-level enablement</strong> to run a clean pilot first.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u7",
              unitTitle: "Explore real-world use cases for Copilot and agents",
              content: `<h4>Real-world use cases</h4>
<ul>
  <li><strong>Researcher agent</strong> \u2014 multi-step research with citations across the web and your tenant.</li>
  <li><strong>Analyst agent</strong> \u2014 turn raw data (Excel, CSVs) into insights, run Python-style reasoning.</li>
  <li><strong>HR FAQ agent</strong> (SharePoint agent) \u2014 answers employee questions from the HR handbook.</li>
  <li><strong>IT helpdesk agent</strong> \u2014 triages tickets, suggests known solutions.</li>
  <li><strong>Sales deal-summary agent</strong> \u2014 pulls the latest CRM + email + meeting notes into a one-pager.</li>
  <li><strong>Customer service copilot</strong> \u2014 drafts replies grounded by knowledge base + ticket history.</li>
  <li><strong>Onboarding agent</strong> \u2014 creates accounts, sends welcome emails, schedules orientation.</li>
  <li><strong>Project "ask me anything" agent</strong> \u2014 scoped to a single SharePoint project site.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u8",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 4: Explore Microsoft 365 Copilot and agents. Review Copilot architecture, agents, Copilot vs agents comparison, licensing models, planning and deployment, and real-world use cases.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u9",
              unitTitle: "Summary",
              content: `<p>Module 4 covered the Microsoft 365 Copilot and agents architecture, comparing Copilot and agents, licensing models (per-user, PAYG, Credit Packs), planning and deployment readiness, and real-world use cases for Copilot and agents including Researcher, Analyst, and custom agents.</p>`,
              examTips: [],
              keyConcepts: []
            }
          ]
        },
        {
          moduleId: "m5",
          moduleTitle: "Perform basic administrative tasks for Microsoft 365 Copilot",
          units: [
            {
              unitId: "m5-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of the Perform basic administrative tasks for Microsoft 365 Copilot module. This module covers managing Copilot licenses, PAYG billing, monitoring usage and adoption, managing prompts, and operational best practices.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u2",
              unitTitle: "Manage Copilot licenses and pay-as-you-go billing",
              content: `<h4>Manage Copilot licenses and PAYG billing</h4>
<ul>
  <li>Microsoft 365 admin center \u2192 <strong>Billing \u2192 Licenses</strong> \u2192 assign <strong>Microsoft 365 Copilot</strong> to users or groups.</li>
  <li>Verify prerequisites per user: <strong>Copilot license + active Exchange mailbox + OneDrive provisioned + Microsoft Search healthy</strong>.</li>
  <li>For <strong>PAYG</strong>: Microsoft 365 admin center \u2192 <strong>Copilot \u2192 Billing &amp; usage</strong> \u2192 select the <strong>Azure subscription</strong>.</li>
  <li>Set <strong>budget limits</strong> to prevent runaway spend.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u3",
              unitTitle: "Monitor and adjust pay-as-you-go Copilot usage",
              content: `<h4>Monitor and adjust PAYG usage</h4>
<ul>
  <li>Open <strong>Copilot \u2192 Billing &amp; usage</strong> in the admin center.</li>
  <li>Inspect <strong>metered consumption</strong> by workload (Copilot Studio, SharePoint, etc.).</li>
  <li><strong>Adjust</strong> by:
    <ul>
      <li>Switching users from PAYG to per-user licenses (when usage is consistently high).</li>
      <li>Tightening DLP policies on connectors (when usage is high-risk).</li>
      <li>Switching from PAYG to <strong>Credit Packs</strong> (when usage is spiky).</li>
      <li>Disabling specific Copilot features that drive cost (web grounding, plugins).</li>
    </ul>
  </li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u4",
              unitTitle: "Monitor Microsoft 365 Copilot usage and adoption",
              content: `<h4>Monitor Microsoft 365 Copilot usage and adoption</h4>
<ul>
  <li><strong>Microsoft 365 admin center \u2192 Reports \u2192 Copilot dashboard</strong> \u2014 license utilization, active users, top prompts, top apps used.</li>
  <li><strong>Copilot Analytics</strong> (under Reports) \u2014 adoption score, prompt quality, prompt-injection attempts surfaced by DSPM for AI.</li>
  <li><strong>Viva Insights</strong> \u2014 workplace analytics view including Copilot usage.</li>
  <li><strong>Microsoft Purview \u2192 Activity Explorer</strong> \u2014 per-user AI activity on labeled content.</li>
  <li><strong>Adoption strategy</strong>: identify champions, share prompt libraries, track department-level adoption, run lunch-and-learns.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u5",
              unitTitle: "Manage and govern Microsoft 365 Copilot prompts",
              content: `<h4>Manage and govern prompts</h4>
<p>Prompts in Copilot can be:</p>
<ul>
  <li><strong>Saved</strong> \u2014 bookmark useful prompts for reuse (per user, in the Copilot chat panel).</li>
  <li><strong>Shared</strong> \u2014 distribute a prompt template to teammates.</li>
  <li><strong>Scheduled</strong> \u2014 trigger a prompt on a schedule (e.g., daily summary email).</li>
  <li><strong>Deleted</strong> \u2014 remove a saved prompt from the user's library.</li>
  <li><strong>Governed</strong> \u2014 admin-published shared prompt libraries appear alongside user prompts.</li>
</ul>
<p>Prompts are tied to the user; admins do not directly edit a user's saved prompts but can delete user-level prompts in some workloads and publish shared prompt templates via channels.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u6",
              unitTitle: "Apply operational best practices for Microsoft 365 Copilot",
              content: `<h4>Troubleshoot common issues</h4>
<ul>
  <li>User can't see Copilot \u2192 check license, app enablement, region rollout, Microsoft 365 app version.</li>
  <li>Copilot returns no content \u2192 check Graph permissions, Sensitivity Label encryption, broken Search index, restricted content discovery, restricted SharePoint search.</li>
  <li>Slow responses \u2192 check tenant health, network egress, Microsoft 365 service health.</li>
</ul>
<h4>Communicate changes to end users</h4>
<ul>
  <li>Pre-launch emails with "what to expect" + screenshots.</li>
  <li>Champion network / early adopters for peer support.</li>
  <li>"Prompt of the week" communications.</li>
  <li>Feedback channel (Forms or Teams) feeding back into Copilot Analytics.</li>
</ul>
<h4>Operational excellence</h4>
<ul>
  <li>Track Secure Score and Identity Secure Score trends.</li>
  <li>Run Attack Simulator phishing campaigns quarterly.</li>
  <li>Review DLP and IRM alerts weekly.</li>
  <li>Audit admin role assignments with <strong>Access Reviews</strong>.</li>
  <li><strong>Reclaim underused Copilot licenses</strong> \u2014 identify users with a license but low usage in Copilot Analytics and reassign.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u7",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 5: Perform basic administrative tasks for Microsoft 365 Copilot. Review managing Copilot licenses, PAYG billing, monitoring usage and adoption, managing prompts, and operational best practices.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u8",
              unitTitle: "Summary",
              content: `<p>Module 5 covered administrative tasks for Microsoft 365 Copilot including managing licenses and PAYG billing, monitoring usage with Copilot Analytics and Viva Insights, managing and governing prompts (save/share/schedule/delete), troubleshooting common issues, end-user communication, and operational best practices including license reclamation.</p>`,
              examTips: [],
              keyConcepts: []
            }
          ]
        },
        {
          moduleId: "m6",
          moduleTitle: "Perform basic administrative tasks for Microsoft 365 Copilot agents",
          units: [
            {
              unitId: "m6-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of the Perform basic administrative tasks for Microsoft 365 Copilot agents module. This module covers creating Copilot Chat agents, SharePoint agents, testing and editing agents, managing user access, agent approval and governance, and monitoring the agent lifecycle.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u2",
              unitTitle: "Create a Microsoft 365 Copilot Chat agent \u2014 Part 1",
              content: `<h4>Create a Copilot Chat agent \u2014 Path A: from Copilot Studio</h4>
<ol>
  <li>Open <strong>https://copilotstudio.microsoft.com</strong>.</li>
  <li><strong>Create \u2192 New agent</strong> (or start from a <strong>template</strong>).</li>
  <li><strong>Describe mode</strong> \u2014 natural-language description: name, purpose, tone, audience. Copilot Studio works out the rest.</li>
  <li><strong>Configure mode</strong> \u2014 set:
    <ul>
      <li><strong>Icon, name, description</strong>.</li>
      <li><strong>Instructions and Rules</strong> \u2014 system prompt with tone, what the agent should do, hard rules/guardrails.</li>
      <li><strong>Knowledge sources</strong> \u2014 up to <strong>20</strong> sources (public websites, SharePoint, Dataverse, Dynamics 365, Fabric, uploaded files up to <strong>512 MB each</strong>).</li>
      <li><strong>Web access toggle</strong> \u2014 whether the agent may use Bing.</li>
      <li><strong>Suggested prompts</strong> \u2014 pre-built prompts surfaced to the user.</li>
      <li><strong>Actions / Tools</strong> (Power Automate flows).</li>
      <li><strong>Topics</strong> (intents the agent recognizes).</li>
      <li><strong>Authentication</strong> (Entra ID, anonymous, or per-user).</li>
    </ul>
  </li>
  <li><strong>Test</strong> in the built-in chat panel at any time.</li>
  <li><strong>Publish</strong> to Microsoft 365 Copilot, Teams, or a custom website.</li>
</ol>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u3",
              unitTitle: "Create a Microsoft 365 Copilot Chat agent \u2014 Part 2",
              content: `<h4>Create a Copilot Chat agent \u2014 Path B: from Microsoft 365 Copilot Chat</h4>
<ol>
  <li>Open <strong>https://copilot.cloud.microsoft</strong> or the Copilot Chat surface in Teams/Outlook.</li>
  <li>Click the <strong>Create an agent</strong> / <strong>Copilot Studio</strong> entry point.</li>
  <li>Walk through the same Describe/Configure flow inline.</li>
  <li>Save as draft or publish.</li>
</ol>
<h4>Autonomous agents</h4>
<ul>
  <li>Require a <strong>trigger</strong> (e.g., email received, schedule) and a clear set of instructions.</li>
  <li>Execute without a user in the loop.</li>
  <li>Can be created in Copilot Studio with trigger configuration.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u4",
              unitTitle: "Create a SharePoint agent",
              content: `<h4>Create a SharePoint agent</h4>
<ol>
  <li>Navigate to a <strong>SharePoint site</strong>.</li>
  <li>Click <strong>New \u2192 Agent</strong> (or use the Copilot entry point in the site command bar).</li>
  <li>The agent is <strong>scoped to one site or library</strong> (principle of least privilege).</li>
  <li>Choose <strong>data sources</strong> (files, pages, lists within the site).</li>
  <li>Set <strong>access permissions</strong> \u2014 inherit from SharePoint (the agent can only see what the user can see).</li>
  <li><strong>Name</strong>, <strong>icon</strong>, and <strong>description</strong> the agent.</li>
  <li><strong>Publish</strong> \u2014 the agent appears in SharePoint and in Microsoft 365 Copilot for users with access.</li>
</ol>
<p><strong>Exam tip</strong>: A SharePoint agent is the <strong>fastest path</strong> to a working, governed agent \u2014 no Copilot Studio required, permissions inherited automatically.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u5",
              unitTitle: "Test and edit your agents",
              content: `<h4>Test and edit agents</h4>
<ul>
  <li><strong>Test in the Copilot Studio test pane</strong> \u2014 send prompts, validate responses, check knowledge retrieval and tool invocations.</li>
  <li><strong>Trace</strong> \u2014 view the conversation transcript with reasoning steps and documents/tools used.</li>
  <li><strong>Topic editing</strong> \u2014 adjust intents, trigger phrases, and fallback behavior.</li>
  <li><strong>Knowledge tuning</strong> \u2014 add/remove sources, set per-source priority, filter by URL.</li>
  <li><strong>Action editing</strong> \u2014 modify Power Automate flow parameters, error handling, and authentication.</li>
  <li><strong>User simulator</strong> \u2014 run scripted test scenarios against the agent.</li>
  <li><strong>Versioning</strong> \u2014 Copilot Studio keeps a version history; you can revert.</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u6",
              unitTitle: "Manage user access and permissions for agents",
              content: `<h4>Manage user access and permissions for agents</h4>
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
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u7",
              unitTitle: "Examine agent approval and governance",
              content: `<h4>Agent approval and governance</h4>
<ul>
  <li><strong>Microsoft 365 admin center \u2192 Copilot \u2192 Agent inventory</strong> shows pending agents and the approval workflow.</li>
  <li><strong>Power Platform admin center \u2192 Agents</strong> shows Copilot Studio agents and their distribution status.</li>
  <li>When an agent uses a new <strong>connector</strong>, the connector may need classification (Business, Non-business, Blocked) and DLP-policy review.</li>
  <li><strong>Governance policies</strong>:
    <ul>
      <li><strong>DLP for connectors</strong> \u2014 block or allow connectors per environment.</li>
      <li><strong>Managed environment</strong> \u2014 restrict who can create apps/agents.</li>
      <li><strong>Agent Store curation</strong> \u2014 admin controls which prebuilt agents are available.</li>
      <li><strong>Sensitivity Label</strong> the agent's instructions/data.</li>
      <li><strong>Customer Lockbox</strong> for Microsoft access to agent data.</li>
    </ul>
  </li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u8",
              unitTitle: "Monitor and manage the agent lifecycle",
              content: `<h4>Monitor and manage the agent lifecycle</h4>
<ul>
  <li><strong>Microsoft 365 admin center \u2192 Copilot \u2192 Agent inventory</strong> \u2014 list of agents, owner, usage, last activity, lifecycle status.</li>
  <li><strong>Copilot Studio analytics</strong> \u2014 per-agent usage, success rate, escalation rate, session transcripts.</li>
  <li><strong>Power Platform admin center</strong> \u2014 agent lifecycle (create / publish / disable / delete), operational insights.</li>
  <li><strong>Microsoft Purview \u2192 DSPM for AI</strong> \u2014 risky prompts, sensitive data exposure, prompt-injection incidents involving agents.</li>
  <li><strong>Lifecycle stages</strong>:
    <ol>
      <li><strong>Draft</strong> \u2014 author in Copilot Studio.</li>
      <li><strong>Test</strong> \u2014 internal validation with test pane and user simulator.</li>
      <li><strong>Publish</strong> \u2014 make available to a target audience.</li>
      <li><strong>Operate</strong> \u2014 monitor usage, errors, cost, satisfaction.</li>
      <li><strong>Retire</strong> \u2014 disable, archive, or delete; revoke access; export conversation logs if needed.</li>
    </ol>
  </li>
</ul>`,
              examTips: [],
              keyConcepts: [
                "Microsoft 365 Copilot", "Microsoft 365 Copilot Chat", "Copilot Studio", "Pre-built Agent",
                "Custom Agent", "Researcher", "Analyst", "Per-user license", "Pay-as-you-go (PAYG)",
                "Credit Packs", "Azure subscription", "Web content access", "Plugin control",
                "Per-app enablement", "Copilot Analytics", "Copilot Dashboard", "Viva Insights",
                "Adoption Score", "Prompt", "Saved prompt", "Shared prompt", "Scheduled prompt",
                "Champion network", "Agent inventory", "Approval workflow", "Agent lifecycle",
                "Operational insights", "Power Platform admin center", "Connector classification",
                "DLP policy for agents", "Describe mode", "Configure mode", "Knowledge source",
                "SharePoint agent", "Tenant-level vs per-agent sharing", "Test pane", "Versioning",
                "User simulator", "MCP", "Entra Agent ID", "Work IQ", "Foundry", "Content Safety",
                "Groundedness Detection", "Hallucination", "512 MB file limit", "Business plan 300-user cap"
              ]
            },
            {
              unitId: "m6-u9",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 6: Perform basic administrative tasks for Microsoft 365 Copilot agents. Review creating Copilot Chat agents, SharePoint agents, testing and editing agents, managing user access, agent approval and governance, and monitoring the agent lifecycle.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u10",
              unitTitle: "Summary",
              content: `<p>Module 6 covered administrative tasks for Microsoft 365 Copilot agents including creating agents via Copilot Studio and SharePoint, testing and editing agents with the test pane and user simulator, managing user access with per-agent and tenant-level controls, agent approval workflows and governance policies (DLP for connectors, managed environments, Sensitivity Labels), and monitoring the agent lifecycle from draft through retirement.</p>`,
              examTips: [],
              keyConcepts: []
            }
          ]
        }
      ]
    }
  ],

  // ============================================================
  // SUPPLEMENTAL NOTES
  // ============================================================
  supplements: {
    savill: [
      {
        id: "S.1",
        title: "Zero Trust & identity (recap with key phrasing)",
        content: `<ul>
  <li><strong>Zero Trust is not a product</strong> \u2014 no single toggle or SKU turns it on. It's a combination of policies, processes, and configurations.</li>
  <li><strong>Authentication = proving who you are</strong> (n factor). <strong>Authorization = what you're allowed to do</strong> (z factor). The exam uses this n/z shorthand.</li>
  <li><strong>MFA</strong> needs 2+ of: something you know (password/PIN), have (phone, FIDO key), or are (biometric).</li>
  <li>A <strong>passkey is still 2 factors</strong>: the device (something you have) + PIN/biometric (something you know/are).</li>
  <li>Passkeys are <strong>phishing-resistant</strong> because they only work against the exact domain they were issued for.</li>
</ul>`
      },
      {
        id: "S.2",
        title: "Conditional Access",
        content: `<ul>
  <li><strong>Authentication strengths</strong> (built-in: "Multifactor", "Phishing-resistant MFA") can be required per app.</li>
  <li>Use <strong>session controls</strong> (sign-in frequency, continuous access evaluation) to continuously validate.</li>
  <li><strong>Global Secure Access client</strong> is Microsoft's SSE client and integrates with Conditional Access.</li>
  <li>Use the <strong>"What If"</strong> tool in Entra to test a CA policy before turning it on.</li>
</ul>`
      },
      {
        id: "S.3",
        title: "Identity & Entra ID",
        content: `<ul>
  <li><strong>Three hybrid auth options</strong>: <strong>Password Hash Sync (PHS)</strong> preferred; <strong>Pass-Through Authentication (PTA)</strong> DC must be reachable; <strong>Federation (AD FS)</strong> legacy.</li>
  <li><strong>SSPR for hybrid</strong> requires <strong>Password Writeback</strong> in Entra Connect.</li>
  <li><strong>Verified ID / Verifiable Credentials</strong> (preview) \u2014 decentralized identity stored in a digital wallet.</li>
  <li><strong>Dynamic groups</strong> \u2014 rule-based membership (e.g., <code>department = Sales</code>).</li>
  <li><strong>Microsoft 365 groups</strong> = collaboration (mailbox, calendar, SharePoint library).</li>
  <li><strong>Mail-enabled security groups</strong> = security group that also accepts email.</li>
  <li><strong>Distribution lists</strong> can only be created in the M365 admin portal (not Entra).</li>
</ul>`
      },
      {
        id: "S.4",
        title: "Defender XDR \u2014 exam pearls",
        content: `<ul>
  <li><strong>Defender for Office 365 Plan 2</strong> ships with <strong>M365 E5</strong> and unlocks <strong>Threat Explorer</strong> and <strong>Attack simulation training</strong>.</li>
  <li><strong>Attack path tracking</strong> in Defender for Endpoint shows the kill chain visually.</li>
  <li><strong>Threat analytics</strong> \u2014 Microsoft-curated threat-intelligence reports.</li>
  <li><strong>Attack simulation training</strong> \u2014 run phishing simulations and convert failures into instant training.</li>
</ul>`
      },
      {
        id: "S.5",
        title: "Purview",
        content: `<ul>
  <li><strong>Adaptive Protection</strong> \u2014 automatically tightens DLP policies as Insider Risk score rises.</li>
  <li><strong>DLP can target Copilots</strong> \u2014 block Copilot from using data labeled "Highly Confidential".</li>
  <li><strong>DSPM for AI</strong> \u2014 captures AI prompts and responses, lets you see Copilot interactions for the last 30 days.</li>
  <li><strong>Restricted content discovery</strong> = site-level opt-out of Copilot grounding.</li>
  <li><strong>Restricted SharePoint Search</strong> = tenant-level, up to 100 sites; hub sites + children don't count.</li>
</ul>`
      },
      {
        id: "S.6",
        title: "AI architecture \u2014 what to say out loud",
        content: `<ol>
  <li>User enters prompt.</li>
  <li>Copilot orchestrator decides if it needs more info.</li>
  <li>Microsoft Graph + Semantic Index retrieve permitted content (RAG).</li>
  <li>System prompt + grounding data go to the LLM.</li>
  <li>Content safety + groundedness detection check the response.</li>
  <li>Response goes back to the user.</li>
  <li>No training of the LLM happens on your prompts, responses, or data.</li>
</ol>`
      },
      {
        id: "S.7",
        title: "Agents \u2014 exam pearls",
        content: `<ul>
  <li><strong>Pre-built</strong>: Researcher (deep research), Analyst (data), Writing Coach, Prompt Coach, SharePoint site agent.</li>
  <li><strong>Custom</strong>: Copilot Studio (low-code) or VS Code + Foundry (pro-code).</li>
  <li><strong>Prefer APIs and MCP</strong> over computer-use / GUI scripting.</li>
  <li><strong>Templates</strong> are available in Copilot Studio.</li>
  <li><strong>Files in knowledge</strong> \u2014 up to <strong>512 MB each</strong>.</li>
  <li><strong>Up to 20 knowledge sources</strong> per agent.</li>
  <li><strong>Autonomous agents</strong> have a trigger (event or schedule) and run hands-off.</li>
  <li><strong>Entra Agent ID</strong> (preview) \u2014 agents get their own Entra identity.</li>
  <li><strong>Approval workflow</strong> \u2014 admins can require new agents to be approved before publishing tenant-wide.</li>
</ul>`
      },
      {
        id: "S.8",
        title: "Adoption & licensing tips",
        content: `<ul>
  <li><strong>Group-level Copilot settings</strong> beat tenant-level toggles.</li>
  <li><strong>Pilot \u2192 Evaluate \u2192 Expand \u2192 Optimize</strong>.</li>
  <li>Use <strong>Copilot Analytics</strong> and <strong>Viva Insights \u2192 Copilot Analytics</strong>.</li>
  <li><strong>Reclaim underused licenses</strong> \u2014 reassign Copilot from inactive users.</li>
  <li><strong>Copilot Chat (free)</strong> \u2014 web-grounded only; <strong>Copilot Chat paid</strong> = work-grounded.</li>
  <li><strong>Business plans cap at 300 users</strong> and lack Purview + IRM.</li>
  <li><strong>PAYG</strong> bills against an Azure subscription \u2014 use Azure budgets + alerts to control spend.</li>
</ul>`
      }
    ],
    classmate: [
      {
        id: "C.1",
        title: "Six Zero Trust pillars in Microsoft 365",
        content: `<table>
  <thead>
    <tr><th>Pillar</th><th>Tools in M365</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Identity</strong></td><td>Entra ID (centralized identity, passwordless, risk-based Conditional Access)</td></tr>
    <tr><td><strong>Endpoints</strong></td><td>Intune (compliance), Defender for Endpoint, Endpoint Analytics</td></tr>
    <tr><td><strong>Applications</strong></td><td>Defender for Cloud Apps (shadow IT, session controls), App Proxy</td></tr>
    <tr><td><strong>Data</strong></td><td>Purview Information Protection (labels, encryption), DLP</td></tr>
    <tr><td><strong>Infrastructure</strong></td><td>Defender for Cloud (Azure, AWS, GCP), Azure Policy</td></tr>
    <tr><td><strong>Network</strong></td><td>Azure Firewall, VPN Gateway, Defender for Identity</td></tr>
  </tbody>
</table>`
      },
      {
        id: "C.2",
        title: "Six phases of Zero Trust implementation",
        content: `<ol>
  <li><strong>Assess posture</strong> \u2014 Microsoft Secure Score, Purview Compliance Manager.</li>
  <li><strong>Identity protection</strong> \u2014 Conditional Access, risk-based authentication, identity governance.</li>
  <li><strong>Endpoint compliance</strong> \u2014 Intune compliance policies, app protection policies, Endpoint Analytics.</li>
  <li><strong>Classify &amp; protect data</strong> \u2014 sensitivity labels, DLP, incident monitoring.</li>
  <li><strong>Monitor &amp; respond</strong> \u2014 Defender for Endpoint (auto-isolate), Microsoft Sentinel, Defender for Identity.</li>
  <li><strong>Educate users</strong> \u2014 attack simulation training, security awareness campaigns, role-specific training.</li>
</ol>`
      },
      {
        id: "C.3",
        title: "MSTIC & threat intel",
        content: `<ul>
  <li><strong>MSTIC</strong> \u2014 Microsoft Threat Intelligence Center, <strong>65+ trillion signals/day</strong>.</li>
  <li><strong>Threat Explorer</strong> \u2014 real-time email-threat investigation (pivot by sender, URL, file hash).</li>
  <li><strong>Threat Analytics</strong> \u2014 researcher-written reports mapped to MITRE ATT&CK.</li>
</ul>`
      },
      {
        id: "C.4",
        title: "Defender for Office 365 \u2014 specific features",
        content: `<table>
  <thead>
    <tr><th>Capability</th><th>What it does</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Spoof intelligence</strong></td><td>Detects fake/impersonated senders (DMARC failures, lookalike domains).</td></tr>
    <tr><td><strong>Impersonation protection</strong></td><td>Flags lookalike senders targeting executives.</td></tr>
    <tr><td><strong>Safe Links</strong></td><td>Rewrites URLs and scans them at click time.</td></tr>
    <tr><td><strong>Anti-malware</strong></td><td>Multi-engine scanning across Exchange, SharePoint, OneDrive, Teams.</td></tr>
    <tr><td><strong>ZAP</strong></td><td>Retroactively removes malicious messages when verdict changes.</td></tr>
    <tr><td><strong>Attachment filtering</strong></td><td>Blocks risky file types (.exe, .js, .vbs).</td></tr>
    <tr><td><strong>Anti-spam &amp; transport rules</strong></td><td>ML-based spam filtering, custom mail flow rules, quarantine policies.</td></tr>
  </tbody>
</table>`
      },
      {
        id: "C.5",
        title: "Authenticator + FIDO2 + Windows Hello \u2014 distinctions",
        content: `<ul>
  <li><strong>Microsoft Authenticator app</strong> \u2014 passwordless sign-in, push notifications, biometrics; token broker via MSAL.</li>
  <li><strong>FIDO2 security keys</strong> \u2014 USB/NFC hardware keys; phishing-resistant.</li>
  <li><strong>Windows Hello for Business</strong> \u2014 face, fingerprint, or PIN tied to device TPM.</li>
  <li><strong>Certificate-based authentication</strong> \u2014 smart cards, X.509 certificates.</li>
</ul>`
      },
      {
        id: "C.6",
        title: "SSO details",
        content: `<ul>
  <li>SSO uses secure tokens issued by Entra ID, reducing password prompts and improving security.</li>
  <li>Works for Outlook, Teams, SharePoint, OneDrive, and third-party apps (Salesforce, Adobe, ServiceNow).</li>
  <li>Works in cloud-only and hybrid environments.</li>
  <li>Integrates with device-based access (Windows Hello, Intune-managed devices).</li>
</ul>`
      },
      {
        id: "C.7",
        title: "Groups \u2014 types cheat sheet",
        content: `<table>
  <thead>
    <tr><th>Type</th><th>Purpose</th><th>Where to manage</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Security group</strong></td><td>Assign access to resources</td><td>Entra admin center</td></tr>
    <tr><td><strong>Microsoft 365 group</strong></td><td>Collaboration</td><td>Microsoft 365 admin center</td></tr>
    <tr><td><strong>Mail-enabled security group</strong></td><td>Security + email distribution</td><td>Microsoft 365 admin center</td></tr>
    <tr><td><strong>Distribution list</strong></td><td>Email only, no permissions</td><td>M365 admin center only</td></tr>
    <tr><td><strong>Dynamic group</strong></td><td>Auto-updated membership by attribute</td><td>Entra admin center</td></tr>
  </tbody>
</table>`
      },
      {
        id: "C.8",
        title: "Resource-specific permissions in SharePoint",
        content: `<ul>
  <li>Permissions at four levels: <strong>Site \u2192 Library \u2192 Folder \u2192 File</strong>.</li>
  <li>Built-in roles: <strong>Visitor</strong> (read), <strong>Member</strong> (edit), <strong>Owner</strong> (full control).</li>
  <li>Permission inheritance can be broken for granular control \u2014 main source of oversharing.</li>
</ul>`
      },
      {
        id: "C.9",
        title: "SharePoint \u2014 team sites vs communication sites",
        content: `<ul>
  <li><strong>Team sites</strong> \u2014 tied to a Microsoft 365 group; collaboration-focused.</li>
  <li><strong>Communication sites</strong> \u2014 broadcast-focused; good for intranets and news.</li>
</ul>`
      },
      {
        id: "C.10",
        title: "OneDrive \u2014 Known Folder Move",
        content: `<ul>
  <li><strong>Known Folder Move</strong> redirects Windows Desktop, Documents, and Pictures to OneDrive for Business.</li>
  <li>Useful for backup + multi-device sync.</li>
</ul>`
      },
      {
        id: "C.11",
        title: "Teams \u2014 policy types",
        content: `<table>
  <thead>
    <tr><th>Policy</th><th>Controls</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Meeting policy</strong></td><td>Recording, transcription, anonymous join, who can bypass lobby.</td></tr>
    <tr><td><strong>Messaging policy</strong></td><td>Chat features, federation, read receipts, giphy/memes.</td></tr>
    <tr><td><strong>Calling policy</strong></td><td>PSTN, voicemail, call forwarding.</td></tr>
    <tr><td><strong>App permission / setup policy</strong></td><td>Which apps users can install or pin.</td></tr>
    <tr><td><strong>Live event policy</strong></td><td>Town-hall-style broadcast settings.</td></tr>
  </tbody>
</table>`
      },
      {
        id: "C.12",
        title: "Microsoft 365 admin center \u2014 practical",
        content: `<ul>
  <li><strong>Bulk user creation</strong> (CSV import).</li>
  <li>User attributes (location, department, job title) drive Conditional Access and group licensing.</li>
  <li><strong>PowerShell modules</strong>: Exchange Online, Teams, SharePoint Online Management Shell, Microsoft Graph PowerShell SDK.</li>
  <li>Email signatures and disclaimers set tenant-wide.</li>
  <li>Custom domains require DNS verification.</li>
</ul>`
      },
      {
        id: "C.13",
        title: "Intune \u2014 App protection policies (MAM, BYOD)",
        content: `<ul>
  <li>Protect corporate data inside apps without enrolling the device.</li>
  <li>Common actions: block copy/paste, block local saves, block root/jailbroken devices, force PIN.</li>
  <li>Pairs with Conditional Access: "Require an app protection policy on iOS/Android".</li>
</ul>`
      },
      {
        id: "C.14",
        title: "Compliance Manager \u2014 control types",
        content: `<ul>
  <li><strong>Microsoft-managed controls</strong> \u2014 automatically monitored by Microsoft.</li>
  <li><strong>Customer-managed controls</strong> \u2014 require manual verification by your admins.</li>
  <li><strong>Improvement actions</strong> mapped to controls, have assigned owners, roll up into Compliance Score.</li>
</ul>`
      },
      {
        id: "C.15",
        title: "Sensitivity labels \u2014 deployment details",
        content: `<ul>
  <li><strong>Label policies</strong> decide which users see which labels and whether labeling is mandatory or optional.</li>
  <li><strong>Override rules</strong> let a user downgrade a recommended label but require justification.</li>
  <li>Labels can enforce encryption, access restrictions, external-sharing controls, watermarks, headers, footers.</li>
</ul>`
      },
      {
        id: "C.16",
        title: "Retention \u2014 auto-apply rules",
        content: `<ul>
  <li>Apply retention labels automatically based on: <strong>Keywords</strong>, <strong>Sensitive Information Types (SITs)</strong>, <strong>Trainable classifiers</strong>.</li>
  <li>Retention policies for org-wide baselines; retention labels for per-content controls.</li>
</ul>`
      },
      {
        id: "C.17",
        title: "Insider Risk Management \u2014 optional signals",
        content: `<ul>
  <li><strong>Endpoint activity</strong> (Defender for Endpoint signals) \u2014 file copy to USB, mass download.</li>
  <li><strong>HR events</strong> \u2014 exit interview integration, IRM risk score auto-increases.</li>
  <li><strong>DLP alerts</strong> can feed IRM cases.</li>
  <li>IRM cases can be escalated to eDiscovery for legal hold.</li>
</ul>`
      },
      {
        id: "C.18",
        title: "Communication Compliance \u2014 channels",
        content: `<ul>
  <li>Microsoft Teams chats and channels, Exchange Online email, Viva Engage (Yammer), third-party connectors.</li>
  <li>Detects: harassment, profanity, insider trading risk, regulatory violations, sensitive-data leakage.</li>
</ul>`
      },
      {
        id: "C.19",
        title: "Data Explorer \u2014 what to look for",
        content: `<ul>
  <li>Filter by location, sensitivity label, content type.</li>
  <li>Visualize data exposure patterns (where sensitive data lives, who owns it).</li>
  <li>Identify externally shared or high-risk files.</li>
</ul>`
      },
      {
        id: "C.20",
        title: "DAG reports \u2014 site criteria",
        content: `<ul>
  <li>Data Access Governance (DAG) reports flag sites with: <strong>Sensitive content</strong>, <strong>Excessive sharing</strong>, <strong>Inactive owners</strong>, <strong>Missing sensitivity labels</strong>.</li>
</ul>`
      },
      {
        id: "C.21",
        title: "Oversharing \u2014 common scenarios",
        content: `<ul>
  <li>Sharing with "Everyone" or "Anyone with the link".</li>
  <li>Granting Edit when View only was intended.</li>
  <li>Granting external guests full site access when they only needed a single file.</li>
  <li>Automated alerts (Power Automate + Purview) can fire on anonymous link usage.</li>
</ul>`
      },
      {
        id: "C.22",
        title: "Copilot \u2014 exactly how it works",
        content: `<ol>
  <li>User signs in with their OAuth token (same identity and permissions as any M365 action).</li>
  <li>Copilot orchestrates the request and queries Microsoft Graph.</li>
  <li>Graph enforces authentication + authorization + semantic search.</li>
  <li>Results are ranked by recency, sharing patterns, and user activity.</li>
  <li>User's permissions, sensitivity labels, DLP, and Conditional Access are all enforced.</li>
  <li>Response is returned with source links for transparency.</li>
  <li>All prompts and responses are audited in Purview.</li>
  <li>No training of the model on your data.</li>
  <li>Data minimization \u2014 only retrieves what's needed for the answer.</li>
</ol>
<p>If a user can't open a file directly, Copilot cannot surface its content to them \u2014 Copilot introduces no new data-access path.</p>`
      },
      {
        id: "C.23",
        title: "Identity Secure Score \u2014 features",
        content: `<ul>
  <li>Security recommendations with step-by-step improvement actions.</li>
  <li>Status per action: Completed, Planned, Risk Accepted, Not applied.</li>
  <li>Benchmarking against similar organizations.</li>
  <li>Tracks score history over time.</li>
</ul>`
      },
      {
        id: "C.24",
        title: "MFA sign-in troubleshooting matrix",
        content: `<table>
  <thead>
    <tr><th>Symptom</th><th>First check</th><th>Resolution</th></tr>
  </thead>
  <tbody>
    <tr><td>MFA failure (Authenticator)</td><td>Sign-in logs</td><td>Re-register Authenticator; fix device time drift for TOTP codes</td></tr>
    <tr><td>MFA failure (FIDO2)</td><td>Sign-in logs</td><td>Re-register FIDO2 key</td></tr>
    <tr><td>Conditional Access denial</td><td>What If tool</td><td>Identify policy; confirm device compliance</td></tr>
    <tr><td>Risky sign-in</td><td>Identity Protection risk log</td><td>Reset password, force MFA, or block</td></tr>
    <tr><td>Location / IP block</td><td>Sign-in logs</td><td>Adjust CA policy; add exception</td></tr>
    <tr><td>Legacy auth failure</td><td>Client version</td><td>Upgrade apps; enable modern auth</td></tr>
  </tbody>
</table>`
      },
      {
        id: "C.25",
        title: "Operational tools & automation",
        content: `<ul>
  <li><strong>Power Automate</strong> can react to DLP alerts, insider-risk cases, or Purview alerts.</li>
  <li><strong>Audit logs</strong> can be exported to Power BI, Excel, or SIEM (Sentinel).</li>
  <li><strong>Microsoft Graph</strong> is the unified API surface \u2014 used by every admin tool and by Copilot itself.</li>
</ul>`
      }
    ]
  },

  // ============================================================
  // EXAM-DAY CONFIGURATION CHECKLISTS
  // ============================================================
  checklists: {
    domain1: [
      "Assign a license to a user and explain what features that license enables",
      "Use group-based licensing to manage a group of users",
      "Configure a custom domain in the Microsoft 365 admin center",
      "Review and edit org settings (release preferences, theme, lockbox)",
      "Use the Microsoft 365 admin center key admin tools (Users, Groups, Billing, Service Health, Message Center, Reports, Roles, Settings)",
      "Create a user mailbox, shared mailbox, and resource mailbox in Exchange Online",
      "Create a distribution list",
      "Create a SharePoint site with a document library and folders",
      "Configure SharePoint group permissions (Owners / Members / Visitors) and permission levels",
      "Create a team with standard, private, and shared channels",
      "Configure a Teams policy (messaging / meeting / app)",
      "Describe Zero Trust principles and give an example",
      "Describe the six layers of a layered security strategy",
      "Configure MFA (and phishing-resistant MFA for admins \u2014 Passkeys / Windows Hello for Business)",
      "Explain JIT / JEA / PIM in a sentence",
      "Identify the components of Defender XDR and how they detect/respond to threats",
      "List Entra features (Conditional Access, SSO, Risky sign-ins)",
      "Build a Conditional Access policy and use the What If tool",
      "Explain SSO purpose and benefits",
      "Troubleshoot a sign-in problem using MFA, Conditional Access, Risky sign-ins, SSPR",
      "Read and interpret Identity Secure Score",
      "Find an event in the Unified Audit Log",
      "Activate a role through PIM",
      "Assign admin roles with RBAC (built-in and custom) to delegate responsibilities",
      "Distinguish App registration from Enterprise app / Service principal",
      "Configure an authentication strength (e.g., phishing-resistant MFA) for a high-value app",
      "Use the CA What If tool to test a policy before enabling it",
      "Distinguish the three hybrid auth options: PHS, PTA, Federation",
      "Configure Password Writeback in Entra Connect to enable SSPR for hybrid users",
      "Build a dynamic group based on a user attribute (e.g., department = Sales)",
      "Distinguish security group, mail-enabled security group, Microsoft 365 group, and distribution list",
      "List the components of Defender for Office 365 Plan 2 (Threat Explorer, Attack simulation training)",
      "Use Attack path tracking in Defender for Endpoint to reconstruct an incident",
      "Configure Threat analytics in Defender XDR",
      "Run an Attack simulation training campaign for phishing awareness",
      "Describe the six Zero Trust pillars (Identity, Endpoints, Applications, Data, Infrastructure, Network) and the M365 tool for each",
      "Identify when to use Microsoft Sentinel as a SIEM/SOAR",
      "Identify the specific Defender for Office 365 features: Spoof intelligence, Impersonation protection, Safe Links, ZAP, Attachment filtering",
      "Configure Intune app protection policies for BYOD (block copy/paste, local saves)",
      "Distinguish team sites vs communication sites in SharePoint",
      "Distinguish the four PowerShell modules for M365 admin (Exchange Online, Teams, SharePoint Online Mgmt Shell, Microsoft Graph PowerShell SDK)",
      "Set up OneDrive Known Folder Move for Desktop/Documents/Pictures",
      "Distinguish the Microsoft-managed vs Customer-managed controls in Compliance Manager",
      "Configure auto-apply rules for retention labels (keywords, SITs, classifiers)",
      "Configure mandatory vs optional labeling and override rules with justification",
      "Add Viva Engage (and third-party connectors) to Communication Compliance",
      "Connect HR events (optional) as a signal in Insider Risk Management"
    ],
    domain2: [
      "Create and publish a Sensitivity Label with encryption",
      "Configure auto-labeling for a Sensitive Information Type",
      "Create and test a DLP policy for Exchange / SharePoint / Teams",
      "Triage a DLP alert in Purview",
      "Activate and tune Insider Risk Management",
      "Activate and tune Communication Compliance",
      "Activate and tune DSPM for AI",
      "Create a Retention Policy and a Retention Label",
      "Configure archiving for inactive content",
      "Configure a disposition review",
      "Review compliance posture in Compliance Manager",
      "Use Data Explorer to find sensitive data locations",
      "Use Activity Explorer to investigate label activity",
      "Run a Content Search in eDiscovery",
      "Explain how Graph and Semantic Index influence Copilot responses",
      "Explain how Sensitivity Labels, DLP, and Defender protect Copilot outputs",
      "State the Responsible AI principles",
      "Run a Data access governance report in SharePoint",
      "Apply Restricted Site Access to a SharePoint site",
      "Identify the major SharePoint Advanced Management features",
      "Apply Restricted content discovery to a sensitive SharePoint site",
      "Configure Restricted SharePoint Search (up to 100 sites) to scope Copilot grounding",
      "Configure a site ownership policy (e.g., require \u2265 2 owners)",
      "Configure Adaptive Protection to bind Insider Risk \u2192 DLP",
      "Use DSPM for AI to find shadow AI usage in the tenant"
    ],
    domain3: [
      "Assign a Microsoft 365 Copilot license to a user",
      "Verify Copilot prerequisites (mailbox, OneDrive, Microsoft Search)",
      "Toggle Copilot features (web content, plugins, per-app) in the admin center",
      "Compare per-user vs PAYG vs Credit Packs licensing",
      "Configure a PAYG billing policy and an Azure subscription",
      "Monitor and adjust PAYG usage",
      "Open Copilot Analytics and the Copilot dashboard",
      "Save, share, schedule, and delete a prompt",
      "Describe and Configure an agent in Copilot Studio",
      "Create a Microsoft 365 Copilot Chat agent (Part 1 & Part 2 flow)",
      "Create a SharePoint agent scoped to one site",
      "Add up to 20 knowledge sources to an agent",
      "Add instructions and rules to an agent",
      "Test an agent in the test pane; edit topics, knowledge, and actions",
      "Share an agent with specific users / groups / everyone",
      "Walk through the agent approval process for a new agent",
      "Monitor agents via the Microsoft 365 admin center and the Power Platform admin center",
      "Use DSPM for AI to identify risky prompts",
      "Describe the Researcher and Analyst use cases",
      "Describe a custom agent use case",
      "Explain the agent lifecycle (create \u2192 publish \u2192 monitor \u2192 disable / delete)",
      "Apply operational best practices for Copilot (troubleshooting, end-user communication, adoption)",
      "Start a Copilot Studio agent from a template",
      "Add up to 20 knowledge sources including public websites, SharePoint, Dataverse, Dynamics 365, Fabric, and files up to 512 MB",
      "Choose between APIs / MCP vs computer-use / GUI scripting when integrating tools",
      "Distinguish Copilot Chat (free), Copilot Chat (paid), and M365 Copilot (licensed)",
      "Configure Azure budgets + cost alerts for PAYG Copilot spend",
      "Identify the Business plan 300-user cap and which features it lacks",
      "Use Viva Insights \u2192 Copilot Analytics for deep adoption metrics",
      "Reclaim underused Copilot licenses from inactive users"
    ]
  }
};
