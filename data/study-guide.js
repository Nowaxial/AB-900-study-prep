const studyGuideData = {
  // ============================================================
  // PREAMBLE — Getting Started (3 items)
  // ============================================================
  preamble: [
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
  <li><strong>License requirements for CA</strong> \u2014 Free Entra ID / Free Office 365 = <em>no CA</em>. Entra ID P1 / M365 E3+ = <em>CA with standard rules</em> (users, groups, location, device, app). Entra ID P2 = <em>adds risk-based conditions</em> (Risky sign-in, Risky users) from Identity Protection.</li>
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
  <li><strong>License requirements for CA</strong> \u2014 Free Entra ID / Free Office 365 = <em>no CA</em>. Entra ID P1 / M365 E3+ = <em>CA with standard rules</em> (users, groups, location, device, app). Entra ID P2 = <em>adds risk-based conditions</em> (Risky sign-in, Risky users) from Identity Protection.</li>
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
              content: `
<h4>Threat protection and intelligence (Module 1, Unit 4)</h4>
<ul>
  <li><strong>Threat intelligence</strong> — Microsoft Defender XDR correlates signals from identity, endpoints, email, and cloud apps to detect multi-stage attacks (kill-chain, MITRE ATT&amp;CK mapping).</li>
  <li><strong>Threat protection</strong> — capabilities in Defender for Identity, Defender for Office 365 (Safe Links, Safe Attachments, anti-phishing), Defender for Endpoint, Defender for Cloud Apps.</li>
  <li><strong>Identity threat detection</strong> — Entra ID Protection flags risky sign-ins (anonymous IP, atypical travel, leaked credentials, password spray) and risky users (leaked credentials, threat intelligence).</li>
  <li><strong>Best practice</strong> — review incidents weekly, tune alert rules, run attack simulations, and track Secure Score trends.</li>
</ul>
<h4>Microsoft Defender XDR</h4>
<p>The unified eXtended Detection &amp; Response suite that combines:</p>
<ul>
  <li><strong>Defender for Identity</strong> — on-premises AD signals (agents on DCs, AD FS, Connect servers)</li>
  <li><strong>Defender for Office 365</strong> — email &amp; collaboration (anti-phish, anti-malware, Safe Links, Safe Attachments, <strong>Threat Explorer</strong>, <strong>Attack simulation training</strong>)</li>
  <li><strong>Defender for Endpoint</strong> — devices (EDR, anti-malware, attack surface reduction, automated investigations, <strong>attack path tracking</strong>)</li>
  <li><strong>Defender for Cloud Apps</strong> — SaaS/CASB, shadow IT discovery, session policies</li>
  <li><strong>Defender for Cloud</strong> (Azure workloads) — optional</li>
  <li><strong>Threat analytics</strong> — a curated library of threat intelligence reports written by Microsoft security researchers.</li>
  <li>Unified portal at <strong>https://security.microsoft.com</strong> with <strong>Incidents</strong>, <strong>Hunting</strong>, <strong>Action center</strong>, <strong>Secure Score</strong>.</li>
</ul>
<h4>Exam-relevant Defender for Office 365 details</h4>
<ul>
  <li><strong>Plan 1</strong> vs <strong>Plan 2</strong> — Plan 2 is the version bundled in <strong>M365 E5</strong> and adds <strong>Threat Explorer</strong>, <strong>Attack simulation training</strong>, automated investigation &amp; response (AIR), and campaign views.</li>
  <li><strong>Attack simulation training</strong> — let admins run realistic phishing campaigns against users and turn failed clicks into instant training.</li>
  <li><strong>Specific capabilities the exam tests</strong>:
    <ul>
      <li><strong>Spoof intelligence</strong> — detects fake / impersonated senders (DMARC failures, lookalike domains).</li>
      <li><strong>Impersonation protection</strong> — flags lookalike senders targeting executives (e.g., "ce0@" instead of "ceo@").</li>
      <li><strong>Safe Links</strong> — rewrites URLs in incoming messages and <strong>rescans them at click time</strong> (not just delivery).</li>
      <li><strong>Anti-malware</strong> — multi-engine scanning across Exchange, SharePoint, OneDrive, Teams.</li>
      <li><strong>Zero-hour Auto Purge (ZAP)</strong> — <strong>retroactively removes</strong> malicious messages that already landed in mailboxes once a verdict changes.</li>
      <li><strong>Attachment filtering</strong> — blocks risky file types (<code>.exe</code>, <code>.js</code>, <code>.vbs</code>, …).</li>
      <li><strong>Anti-spam &amp; transport rules</strong> — ML-based spam filtering, <strong>custom mail flow rules</strong> (e.g., block external mail with certain keywords), <strong>quarantine policies</strong>, connection filtering.</li>
    </ul>
  </li>
</ul>
<h4>Exam-relevant Defender for Endpoint details</h4>
<ul>
  <li><strong>Attack path tracking</strong> — visualizes the chain <em>email → attachment → process → network → lateral movement → credentials on another machine</em>. Helps you understand how an incident actually unfolded.</li>
  <li><strong>EDR + antivirus + attack surface reduction + automated investigations</strong> in one product.</li>
  <li><strong>Device isolation</strong> — admins can remotely cut a compromised device off the network.</li>
</ul>
<h4>Defender for Cloud Apps (CASB)</h4>
<ul>
  <li>Discovers <strong>shadow IT</strong> (which SaaS apps employees are actually using).</li>
  <li><strong>Session policies</strong> — control what users can do inside a sanctioned app (block downloads, monitor activity).</li>
  <li>App governance — sanction / unsanction apps tenant-wide.</li>
</ul>
<h4>Microsoft Sentinel</h4>
<ul>
  <li>Cloud-native <strong>SIEM</strong> (Security Information and Event Management) + <strong>SOAR</strong> (Security Orchestration, Automation, Response).</li>
  <li>Correlates signals from Defender XDR, Defender for Identity, third-party sources, Entra ID, and on-prem.</li>
  <li><strong>KQL hunting queries</strong> to find threats; <strong>analytic rules</strong> to alert; <strong>playbooks</strong> (Logic Apps) to automate response.</li>
</ul>
<h4>Microsoft Threat Intelligence Center (MSTIC)</h4>
<ul>
  <li>The team behind Microsoft's threat telemetry — <strong>65+ trillion signals/day</strong>, tracks nation-state actors, dark-web activity, and global campaigns.</li>
  <li>Feeds intelligence into Defender products in near real time.</li>
</ul>
<h4>Defender for Cloud (Infrastructure pillar)</h4>
<ul>
  <li>Assesses security posture across <strong>Azure, AWS, and GCP</strong> subscriptions.</li>
  <li><strong>Secure Score</strong> recommendations across all three clouds.</li>
  <li><strong>Defender plans</strong> (pay-per-resource) for servers, containers, storage, SQL, App Service, etc.</li>
</ul>

<h4>Microsoft Threat Intelligence Center (MSTIC)</h4>
<ul>
  <li><strong>MSTIC</strong> analyzes 65+ trillion signals daily from across Microsoft's cloud, endpoint, and identity ecosystem.</li>
  <li>Tracks nation-state actors, ransomware groups, dark web activity, and global attack campaigns.</li>
  <li>Intel feeds directly into Defender XDR products for real-time blocking and detection.</li>
</ul>
<h4>Threat Explorer</h4>
<ul>
  <li><strong>Real-time investigation tool</strong> for email and collaboration threats within Defender for Office 365.</li>
  <li>Pivot investigations by sender, recipient, URL, file hash, or campaign ID.</li>
  <li>Supports immediate remediation: soft-delete messages, block senders/URLs, submit to Microsoft for analysis.</li>
</ul>
<h4>Threat Analytics</h4>
<ul>
  <li><strong>Researcher-written reports</strong> on emerging threats, active adversary campaigns, and attacker techniques (TTPs).</li>
  <li>Each report includes MITRE ATT&amp;CK mappings and recommended mitigations (config changes, enable features).</li>
  <li>Helps organizations stay ahead of evolving attack trends by applying proactive defenses.</li>
</ul>

<h4>Microsoft Threat Intelligence Center (MSTIC)</h4>
<ul>
  <li><strong>MSTIC</strong> analyzes 65+ trillion signals daily from across Microsoft's cloud, endpoint, and identity ecosystem.</li>
  <li>Tracks nation-state actors, ransomware groups, dark web activity, and global attack campaigns.</li>
  <li>Intel feeds directly into Defender XDR products for real-time blocking and detection.</li>
</ul>
<h4>Threat Explorer</h4>
<ul>
  <li><strong>Real-time investigation tool</strong> for email and collaboration threats within Defender for Office 365.</li>
  <li>Pivot investigations by sender, recipient, URL, file hash, or campaign ID.</li>
  <li>Supports immediate remediation: soft-delete messages, block senders/URLs, submit to Microsoft for analysis.</li>
</ul>
<h4>Threat Analytics</h4>
<ul>
  <li><strong>Researcher-written reports</strong> on emerging threats, active adversary campaigns, and attacker techniques (TTPs).</li>
  <li>Each report includes MITRE ATT&amp;CK mappings and recommended mitigations (config changes, enable features).</li>
  <li>Helps organizations stay ahead of evolving attack trends by applying proactive defenses.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u5",
              unitTitle: "Explore identity and authentication in Microsoft 365",
              content: `
<h4>Authentication methods</h4>
<ul>
  <li><strong>MFA (Multi-Factor Authentication)</strong> — at least two of: <em>something you know</em> (password), <em>something you have</em> (phone, token, passkey), <em>something you are</em> (biometric).</li>
  <li><strong>Phishing-resistant</strong> methods (preferred, mandatory for admins):
    <ul>
      <li><strong>Passkeys (FIDO2 / WebAuthn)</strong> — bound to a device or hardware key; the private key never leaves the device, so they cannot be phished.</li>
      <li><strong>Windows Hello for Business</strong> — replaces passwords with a PIN + biometric (face/fingerprint) tied to the device's TPM.</li>
      <li><strong>Certificate-based authentication</strong>.</li>
    </ul>
  </li>
  <li><strong>Passwordless</strong> — Authenticator app passwordless, Windows Hello, Passkeys.</li>
  <li><strong>Password</strong> — only as a last resort, and <strong>never</strong> the only factor for admins.</li>
</ul>
<h4>Conditional Access policies</h4>
<ul>
  <li>The <strong>policy engine</strong> for sign-in decisions. Considers: user/group, target resource, device platform, location, client app, sign-in risk.</li>
  <li>Example building blocks: <em>block legacy authentication</em>, <em>require MFA</em>, <em>require app protection policy</em>, <em>require compliant device</em>, <em>require approved client app</em>.</li>
  <li>Can use <strong>named locations</strong>, <strong>filter for applications/insider risk</strong>, <strong>session controls</strong> (sign-in frequency, persistent browser session, continuous access evaluation).</li>
</ul>
<h4>Single Sign-On (SSO)</h4>
<ul>
  <li><strong>Purpose</strong> — one set of credentials gives access to many apps; fewer passwords = lower phishing risk, fewer resets.</li>
  <li><strong>Benefits</strong> — improved user experience, centralized access control, consistent MFA enforcement, easier offboarding.</li>
  <li><strong>Methods supported</strong> — password-based SSO (seamless SSO), SAML, OpenID Connect/OAuth, header-based, linked.</li>
  <li><strong>Client-side brokers</strong>:
    <ul>
      <li>On Windows: <strong>Windows Hello for Business</strong> transparently brokers SSO tokens to apps.</li>
      <li>On phones: <strong>Microsoft Authenticator app</strong> acts as a <strong>token broker</strong> using the <strong>Microsoft Authentication Library (MSAL)</strong>, getting tokens for all the apps on the device seamlessly.</li>
    </ul>
  </li>
  <li><strong>Federation-era best practice</strong> — today, instead of deploying your own ADFS to federate third-party SaaS apps, <strong>configure those apps to federate with Entra ID</strong> and let Entra do the work.</li>
</ul>

<h4>Authentication in Hybrid Environments</h4>
<table>
  <thead>
    <tr><th>Method</th><th>How it works</th><th>Best for</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Password Hash Sync (PHS)</strong></td><td>Password hashes synced from on-prem AD to Entra ID; user signs in against the cloud</td><td>Most organizations — no on-prem dependency, includes Identity Protection and leak detection</td></tr>
    <tr><td><strong>Pass-Through Authentication (PTA)</strong></td><td>Password validated in real-time against on-prem AD via an agent on domain-joined servers</td><td>Orgs that require immediate on-prem password policy enforcement or disabled-account lockout</td></tr>
    <tr><td><strong>Federation (AD FS)</strong></td><td>Authentication handled by on-prem identity provider; user redirected to AD FS</td><td>Legacy or complex scenarios requiring custom auth, third-party MFA, or smart-card integration</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>Microsoft recommends PHS or PTA</strong> for most organizations. Federation is considered legacy and adds complexity.</li>
  <li><strong>Seamless SSO</strong> available with both PHS and PTA — users see no sign-in prompt on domain-joined devices.</li>
  <li><strong>Password Writeback</strong> (requires PHS + Entra Connect) enables hybrid SSPR — password changes in cloud sync back to on-prem.</li>
</ul>

<h4>Authentication in Hybrid Environments</h4>
<table>
  <thead>
    <tr><th>Method</th><th>How it works</th><th>Best for</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Password Hash Sync (PHS)</strong></td><td>Password hashes synced from on-prem AD to Entra ID; user signs in against the cloud</td><td>Most organizations — no on-prem dependency, includes Identity Protection and leak detection</td></tr>
    <tr><td><strong>Pass-Through Authentication (PTA)</strong></td><td>Password validated in real-time against on-prem AD via an agent on domain-joined servers</td><td>Orgs that require immediate on-prem password policy enforcement or disabled-account lockout</td></tr>
    <tr><td><strong>Federation (AD FS)</strong></td><td>Authentication handled by on-prem identity provider; user redirected to AD FS</td><td>Legacy or complex scenarios requiring custom auth, third-party MFA, or smart-card integration</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>Microsoft recommends PHS or PTA</strong> for most organizations. Federation is considered legacy and adds complexity.</li>
  <li><strong>Seamless SSO</strong> available with both PHS and PTA — users see no sign-in prompt on domain-joined devices.</li>
  <li><strong>Password Writeback</strong> (requires PHS + Entra Connect) enables hybrid SSPR — password changes in cloud sync back to on-prem.</li>
</ul>
`,
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
              content: `
<h4>Microsoft Entra (formerly Azure Active Directory)</h4>
<p>The identity plane for all M365 services.</p>
<ul>
  <li><strong>Entra ID</strong> — cloud directory of users, groups, applications, service principals.</li>
  <li><strong>App registrations</strong> — applications you build/own; you define the app's identity, secrets, and API permissions.</li>
  <li><strong>Enterprise applications</strong> — applications integrated into your tenant (SaaS apps, custom apps, Microsoft-published apps) — you manage user assignments, SSO, and provisioning.</li>
  <li><strong>External Identities</strong> — B2B guest access, B2C for customer-facing apps.</li>
</ul>
<h4>Identity types in Entra</h4>
<ul>
  <li><strong>Person</strong> — user identity (a digital persona for a human).</li>
  <li><strong>Application</strong> — service principal, app registration, managed identity.</li>
  <li><strong>AI agent</strong> — <strong>Entra Agent ID</strong> (preview) gives agents their own identity so they can be governed, audited, and assigned their own permissions.</li>
</ul>
<h4>Hybrid identity authentication methods</h4>
<ul>
  <li><strong>Password Hash Sync (PHS)</strong> — <em>preferred</em>; no on-prem dependency; supports leaked-credential detection.</li>
  <li><strong>Pass-Through Authentication (PTA)</strong> — forwards auth to an agent on a DC; requires on-prem AD reachable.</li>
  <li><strong>Federation (AD FS)</strong> — heavy on-prem footprint; today, <strong>federate cloud services with Entra</strong> instead.</li>
</ul>
<h4>Groups types</h4>
<ul>
  <li><strong>Security group</strong> — assign access to resources; managed in Entra admin center.</li>
  <li><strong>Microsoft 365 group</strong> — collaboration (shared mailbox, calendar, SharePoint site, Planner, Teams).</li>
  <li><strong>Mail-enabled security group</strong> — security + email distribution.</li>
  <li><strong>Distribution list</strong> — email only; can ONLY be created in M365 admin center (not Entra).</li>
  <li><strong>Dynamic group</strong> — membership updates automatically based on user attributes (e.g., <code>department = Sales</code>).</li>
</ul>

<h4>Access Packages (Entra Identity Governance)</h4>
<ul>
  <li><strong>Access Packages</strong> bundle permissions across multiple resources (groups, apps, SharePoint sites) into a single requestable catalog.</li>
  <li><strong>Features</strong>: approval workflows, expiration policies (time-bound access), access reviews, automated onboarding/offboarding.</li>
  <li>Managed via <strong>Entra admin center → Identity Governance → Access Packages</strong> within a Catalog.</li>
  <li>Use cases: new employee onboarding (grants all required apps/sites), external collaborator access (time-limited, reviewed, auto-expires).</li>
  <li><strong>Exam tip</strong>: Access Packages are the recommended approach for granting time-limited, auditable access compared to manual group membership assignments.</li>
</ul>

<h4>Access Packages (Entra Identity Governance)</h4>
<ul>
  <li><strong>Access Packages</strong> bundle permissions across multiple resources (groups, apps, SharePoint sites) into a single requestable catalog.</li>
  <li><strong>Features</strong>: approval workflows, expiration policies (time-bound access), access reviews, automated onboarding/offboarding.</li>
  <li>Managed via <strong>Entra admin center → Identity Governance → Access Packages</strong> within a Catalog.</li>
  <li>Use cases: new employee onboarding (grants all required apps/sites), external collaborator access (time-limited, reviewed, auto-expires).</li>
  <li><strong>Exam tip</strong>: Access Packages are the recommended approach for granting time-limited, auditable access compared to manual group membership assignments.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u8",
              unitTitle: "Troubleshoot and monitor identity security",
              content: `
<h4>Tools to troubleshoot common sign-in issues</h4>
<ul>
  <li><strong>MFA issues</strong> — Microsoft Authenticator app, SSPR (self-service password reset), tenant MFA settings.</li>
  <li><strong>Conditional Access</strong> — sign-in logs, <strong>"What If" tool</strong> to test a policy before applying it, Conditional Access Insights &amp; Reporting workbook.</li>
  <li><strong>Risky sign-ins</strong> — Entra ID Protection risk report, risky sign-ins blade, risk remediation (block / require MFA / require password change).</li>
  <li><strong>Other</strong> — Self-Service Password Reset (SSPR), Azure AD sign-in logs (interactive + non-interactive), passwordless diagnostic.</li>
</ul>
<h4>Common sign-in problem → fix matrix</h4>
<table>
  <thead>
    <tr><th>Symptom</th><th>First check</th><th>Resolution</th></tr>
  </thead>
  <tbody>
    <tr><td>MFA failure (Authenticator)</td><td>Sign-in logs → exact failure reason</td><td>Re-register Authenticator; <strong>fix device time drift</strong> for TOTP codes</td></tr>
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
  <li><strong>Interpret</strong> — aim for the recommended target; high score = better identity posture; investigate regressions in score history.</li>
</ul>
<h4>Audit logs</h4>
<ul>
  <li><strong>Entra ID audit logs</strong> — every directory change (user created, role assigned, app registered).</li>
  <li><strong>Unified Audit Log (Microsoft Purview)</strong> — every action across M365 workloads; default retention <strong>180 days</strong>; <strong>Premium</strong> = 1 year (requires E5).</li>
  <li>Tools: <strong>Microsoft Purview → Audit</strong>, <strong>Entra admin center → Audit logs</strong>, <strong>M365 Admin Center → Audit logs</strong>, <strong>Microsoft 365 Defender → Hunting</strong>.</li>
</ul>

<h4>Common Scenario Walkthroughs</h4>
<table>
  <thead>
    <tr><th>Scenario</th><th>Troubleshooting Steps</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>MFA prompt not appearing</strong></td><td>Check user MFA registration status in Entra admin center; verify Authenticator app is up-to-date; re-register device if needed; fix device time drift for TOTP codes</td></tr>
    <tr><td><strong>Conditional Access denying access</strong></td><td>Use the <strong>What If</strong> tool to simulate the exact sign-in (user, app, location, device) and identify which policy blocks; check Intune device compliance status; review Defender for Endpoint device risk score</td></tr>
    <tr><td><strong>Risky sign-in flagged</strong></td><td>Review risk level (Low/Medium/High) in Entra → Identity Protection → Risky sign-ins; investigate event details (anonymous IP, unfamiliar location, leaked credentials); dismiss if false positive, force password reset if confirmed</td></tr>
    <tr><td><strong>Location/IP-based block while traveling</strong></td><td>Review sign-in logs for named location mismatch; add a temporary exclusion in the Conditional Access policy (compliance grace period) or guide user through registered-location MFA prompt</td></tr>
    <tr><td><strong>Legacy authentication failure</strong></td><td>Identify the client (Exchange ActiveSync, legacy IMAP/POP, older Office); enable modern auth for that protocol; upgrade Office client; create a Conditional Access policy to block legacy auth entirely</td></tr>
  </tbody>
</table>

<h4>Common Scenario Walkthroughs</h4>
<table>
  <thead>
    <tr><th>Scenario</th><th>Troubleshooting Steps</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>MFA prompt not appearing</strong></td><td>Check user MFA registration status in Entra admin center; verify Authenticator app is up-to-date; re-register device if needed; fix device time drift for TOTP codes</td></tr>
    <tr><td><strong>Conditional Access denying access</strong></td><td>Use the <strong>What If</strong> tool to simulate the exact sign-in (user, app, location, device) and identify which policy blocks; check Intune device compliance status; review Defender for Endpoint device risk score</td></tr>
    <tr><td><strong>Risky sign-in flagged</strong></td><td>Review risk level (Low/Medium/High) in Entra → Identity Protection → Risky sign-ins; investigate event details (anonymous IP, unfamiliar location, leaked credentials); dismiss if false positive, force password reset if confirmed</td></tr>
    <tr><td><strong>Location/IP-based block while traveling</strong></td><td>Review sign-in logs for named location mismatch; add a temporary exclusion in the Conditional Access policy (compliance grace period) or guide user through registered-location MFA prompt</td></tr>
    <tr><td><strong>Legacy authentication failure</strong></td><td>Identify the client (Exchange ActiveSync, legacy IMAP/POP, older Office); enable modern auth for that protocol; upgrade Office client; create a Conditional Access policy to block legacy auth entirely</td></tr>
  </tbody>
</table>
`,
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
              content: `
<h4>Module 1 Summary — Microsoft 365 Security Foundations</h4>
<p>Module 1 covered the foundational security concepts every Microsoft 365 administrator needs. Key takeaways:</p>
<ul>
  <li><strong>Zero Trust</strong> is a security model, not a product. Three principles: verify explicitly, least privilege, assume breach. Six pillars: Identity, Endpoints, Applications, Data, Infrastructure, Network.</li>
  <li><strong>Microsoft Defender XDR</strong> unifies Identity, Office 365, Endpoint, and Cloud Apps into a single incident view at security.microsoft.com. Key components: Defender for Identity (AD signals), Defender for Office 365 (Safe Links, Safe Attachments, ZAP, Threat Explorer), Defender for Endpoint (EDR, AV, attack surface reduction), Defender for Cloud Apps (CASB, shadow IT).</li>
  <li><strong>Microsoft Sentinel</strong> is a cloud-native SIEM+SOAR with KQL hunting and Logic Apps playbooks. Defender for Cloud provides multicloud posture across Azure, AWS, GCP.</li>
  <li><strong>Identity and authentication</strong>: phishing-resistant MFA (passkeys, Windows Hello, certificate-based) is mandatory for admins. Passwords alone are the least-preferred method. MFA uses at least two of: know (password), have (phone/FIDO key), are (biometric).</li>
  <li><strong>Entra ID</strong> is the identity plane for all M365 workloads. Supports cloud-only, hybrid (PHS preferred, PTA, Federation legacy), and dynamic groups for auto-cleanup.</li>
  <li><strong>Authorization</strong>: RBAC with built-in roles (Global Admin, Exchange Admin, etc.) and custom roles. PIM provides JIT activation with approval, time-bound access, and full audit. Access Reviews prevent privilege creep.</li>
  <li><strong>Conditional Access</strong> is the if/then policy engine targeting users, apps, and conditions (risk, device, location, client app). Session controls include sign-in frequency, persistent browser, and continuous access evaluation.</li>
  <li><strong>Monitoring</strong>: Identity Secure Score, Unified Audit Log (180 days default, 1 year E5), Entra ID audit and sign-in logs.</li>
  <li><strong>Hybrid identity</strong>: PHS preferred for no on-prem dependency, PTA for AD-specific features, Federation legacy. Seamless SSO available with PHS/PTA. Password Writeback required for hybrid SSPR.</li>
  <li><strong>Intune</strong>: compliance policies (encryption, OS, AV), MAM app protection for BYOD, Windows Autopilot enrollment, update rings, co-management with ConfigMgr.</li>
</ul>
`,
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
              content: `
<h4>Microsoft 365 ecosystem overview</h4>
<p>Microsoft 365 is a subscription-based platform that integrates productivity apps, identity management, security, and compliance into a unified cloud environment. All workloads share a common identity plane through <strong>Microsoft Entra ID</strong>.</p>
<h4>Core service components</h4>
<table>
  <thead>
    <tr><th>Service</th><th>Function</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Microsoft Entra ID</strong></td><td>Identity and access management — authentication, authorization, Conditional Access</td></tr>
    <tr><td><strong>Exchange Online</strong></td><td>Email hosting, calendar, contacts, mail flow rules, anti-spam/anti-malware</td></tr>
    <tr><td><strong>SharePoint Online</strong></td><td>Site and content management, document libraries, intranet portals</td></tr>
    <tr><td><strong>OneDrive for Business</strong></td><td>Personal cloud storage (1 TB+ per user); backed by SharePoint storage infrastructure</td></tr>
    <tr><td><strong>Microsoft Teams</strong></td><td>Chat, meetings, calling, app integration, channels (Standard/Private/Shared)</td></tr>
    <tr><td><strong>Microsoft 365 Apps</strong></td><td>Desktop and web versions of Word, Excel, PowerPoint, Outlook, OneNote</td></tr>
    <tr><td><strong>Power Platform</strong></td><td>Power Apps, Power Automate, Power BI, Power Pages, Copilot Studio</td></tr>
    <tr><td><strong>Microsoft 365 Copilot</strong></td><td>AI assistant grounded in Microsoft Graph; requires prerequisite license (E3/E5/Business)</td></tr>
    <tr><td><strong>Microsoft Purview</strong></td><td>Unified compliance portal for data governance, protection, and risk management</td></tr>
    <tr><td><strong>Microsoft Defender XDR</strong></td><td>Unified security suite — Defender for Identity, Office 365, Endpoint, Cloud Apps</td></tr>
  </tbody>
</table>
<h4>License plan families</h4>
<ul>
  <li><strong>M365 Business</strong> (Basic, Standard, Premium) — up to <strong>300 users</strong>; no Purview or Insider Risk Management</li>
  <li><strong>M365 Enterprise E3</strong> — full productivity suite + core security/compliance; eDiscovery Standard</li>
  <li><strong>M365 Enterprise E5</strong> — adds Defender for Office 365 Plan 2, advanced Purview compliance, eDiscovery Premium, advanced auditing (1-year retention)</li>
  <li><strong>M365 F1/F3</strong> — front-line worker licenses (limited Office apps, web-only)</li>
  <li><strong>Copilot prerequisites</strong> — requires E3, E5, or Business Standard/Premium as a baseline; <strong>~$30/user/month</strong> add-on</li>
  <li><strong>E5 Compliance</strong> and <strong>E5 Security</strong> add-ons — stack on E3 for specific capabilities without full E5</li>
</ul>
<h4>License assignment and service plans</h4>
<ul>
  <li>Licenses can be assigned to <strong>individual users</strong> or <strong>groups</strong> (group-based licensing via Entra ID)</li>
  <li>Each license contains <strong>service plans</strong> (e.g., Exchange Online, SharePoint, Teams, Power BI Pro) that can be toggled on/off individually</li>
  <li>Removing a license immediately revokes access; <strong>data is preserved for a 30-day grace period</strong> (longer for suspended accounts)</li>
  <li><strong>Multi-Geo</strong> — data residency feature; lets you specify data locations per user (requires a separate add-on)</li>
</ul>
<h4>How services interconnect (exam scenario)</h4>
<ul>
  <li>Teams relies on <strong>Exchange Online</strong> for meeting recordings, voicemail, and calendar integration</li>
  <li>Teams relies on <strong>SharePoint</strong> for file sharing in channels; <strong>OneDrive</strong> for private chat file sharing</li>
  <li>Microsoft 365 Groups unify a shared mailbox, calendar, SharePoint site, Planner, and Teams team</li>
  <li>Copilot uses <strong>Microsoft Graph</strong> to retrieve permitted content from all workloads — it respects existing permissions</li>
  <li><strong>Common exam scenario</strong>: "A user cannot access a file in Teams chat" → the file is stored in OneDrive, check OneDrive sharing permissions</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u3",
              unitTitle: "Explore the Microsoft 365 admin center and key admin tools",
              content: `
<h4>Microsoft 365 admin center (https://admin.microsoft.com)</h4>
<p>The primary administration portal for managing users, groups, billing, service health, and tenant-wide settings. Key sections include:</p>
<ul>
  <li><strong>Users → Active Users</strong> — create users, reset passwords, assign licenses, manage roles, block sign-in</li>
  <li><strong>Groups</strong> — create and manage security groups, Microsoft 365 groups, distribution lists, mail-enabled security groups</li>
  <li><strong>Billing</strong> — licenses, subscriptions, invoices, payment methods, third-party app purchases</li>
  <li><strong>Service Health</strong> — tenant-wide incidents, planned maintenance, health history, RSS feeds, email notifications</li>
  <li><strong>Message Center</strong> — official Microsoft communications about feature changes, deprecations, and updates; supports weekly digests and alert subscriptions</li>
  <li><strong>Reports</strong> — adoption metrics, usage analytics, security & compliance score, Microsoft 365 usage analytics</li>
  <li><strong>Org settings</strong> — release preferences (Standard/Targeted), organization profile (logo, theme, privacy, contact info), Customer Lockbox, data location</li>
  <li><strong>Setup</strong> — guided checklists for first-time configuration, data migration, and security baselines</li>
  <li><strong>Roles</strong> — assign Entra ID admin roles (Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, etc.)</li>
  <li><strong>Health → Service Health</strong> and <strong>Message Center</strong> — critical for monitoring tenant status</li>
</ul>
<h4>Specialized admin centers (portal URLs)</h4>
<table>
  <thead>
    <tr><th>Portal</th><th>URL</th><th>Primary Use</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Entra admin center</strong></td><td>entra.microsoft.com</td><td>Identity, Conditional Access, PIM, App registrations</td></tr>
    <tr><td><strong>Exchange admin center</strong></td><td>admin.exchange.microsoft.com</td><td>Mailboxes, mail flow, anti-spam, connectors, accepted domains</td></tr>
    <tr><td><strong>SharePoint admin center</strong></td><td>admin.microsoft.com/sharepoint</td><td>Sites, site collections, sharing settings, storage limits</td></tr>
    <tr><td><strong>Teams admin center</strong></td><td>admin.teams.microsoft.com</td><td>Teams, policies, voice, apps, meeting settings, devices</td></tr>
    <tr><td><strong>Microsoft 365 Defender</strong></td><td>security.microsoft.com</td><td>Security incidents, alerts, Secure Score, threat hunting</td></tr>
    <tr><td><strong>Microsoft Purview</strong></td><td>purview.microsoft.com</td><td>Compliance, DLP, sensitivity labels, eDiscovery, IRM</td></tr>
    <tr><td><strong>Power Platform admin center</strong></td><td>admin.powerplatform.microsoft.com</td><td>Power Apps, Power Automate, environments, DLP policies</td></tr>
    <tr><td><strong>Copilot Studio</strong></td><td>copilotstudio.microsoft.com</td><td>Build custom agents and Copilots</td></tr>
  </tbody>
</table>
<h4>PowerShell modules for administration</h4>
<ul>
  <li><strong>Exchange Online PowerShell</strong> — mailbox management, mail flow rules, anti-spam policies</li>
  <li><strong>Microsoft Teams PowerShell</strong> — team creation, policies, voice configuration</li>
  <li><strong>SharePoint Online Management Shell</strong> — site provisioning, permissions, storage limits</li>
  <li><strong>Microsoft Graph PowerShell SDK</strong> — unified API for all M365 workloads; <strong>preferred modern approach</strong></li>
</ul>
<h4>Delegated administration</h4>
<ul>
  <li><strong>DAP (Delegated Admin Privileges)</strong> — legacy partner delegation; grants Global Admin privileges</li>
  <li><strong>GDAP (Granular Delegated Admin Privileges)</strong> — modern replacement; time-bound, scoped roles for partners</li>
  <li><strong>Exam scenario</strong>: "Partner needs temporary mailbox management" → <strong>GDAP</strong> with Exchange Admin role assignment</li>
</ul>
<h4>Service Health and Message Center (exam details)</h4>
<ul>
  <li><strong>Service Health</strong> shows current and past incidents with status (Service degraded, Restoring service, Extended recovery, Post-incident report)</li>
  <li><strong>Message Center</strong> posts are organized by category (Plan for change, Stay informed, Action required) with a default <strong>30-day retention</strong></li>
  <li>Message Center supports <strong>send to email</strong>, <strong>weekly digest</strong>, <strong>API access</strong>, and <strong>preferences</strong></li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u4",
              unitTitle: "Examine Microsoft Exchange, Teams, and SharePoint",
              content: `
<h4>Exchange Online — key objects and admin tasks</h4>
<ul>
  <li><strong>Mailbox types</strong>: User mailbox (primary per person), Shared mailbox (multiple users, no license needed if <50 GB), Resource mailbox (Room/Equipment for scheduling), Microsoft 365 Group mailbox, Discovery mailbox (for eDiscovery searches)</li>
  <li><strong>Mail flow</strong> — inbound/outbound connectors, accepted domains (authoritative/internal relay/external relay), mail flow rules (transport rules) for routing, compliance, or security</li>
  <li><strong>Exchange admin center (EAC)</strong> — admin.exchange.microsoft.com</li>
  <li><strong>Key admin tasks</strong>: create shared mailboxes, configure mail forwarding, set mailbox delegation (Send As, Send on Behalf, Full Access), manage retention policies</li>
  <li><strong>Distribution groups</strong> vs <strong>Mail-enabled security groups</strong> vs <strong>Microsoft 365 groups</strong> — distribution lists are created only in Exchange admin center or M365 admin center (not Entra)</li>
  <li><strong>Defender for Office 365</strong>: anti-phishing, anti-malware, Safe Links, Safe Attachments, anti-spam, quarantine policies, spoof intelligence, impersonation protection</li>
  <li><strong>Exam fact</strong>: Shared mailboxes with less than 50 GB do NOT require a license</li>
</ul>
<h4>SharePoint Online — key objects and admin tasks</h4>
<ul>
  <li><strong>Site types</strong>: <strong>Communication sites</strong> (broadcast, news, reports) and <strong>Team sites</strong> (collaboration, tied to Microsoft 365 groups)</li>
  <li><strong>Hub sites</strong> — group related sites together for unified navigation and search scope</li>
  <li><strong>Document libraries</strong> — versioning (major/minor), metadata, columns, content types, co-authoring, check-in/check-out</li>
  <li><strong>SharePoint groups</strong>: Owners (full control), Members (contribute), Visitors (read)</li>
  <li><strong>Permission levels</strong>: Full Control, Design, Edit, Contribute, Read, Limited Access, Approve</li>
  <li><strong>Permission inheritance</strong> — child objects (folders, files) inherit from parent by default; breaking inheritance gives granular control but is a <strong>major source of oversharing</strong></li>
  <li><strong>Sharing settings</strong> (external): <strong>Anyone</strong> (anonymous links), <strong>New and existing guests</strong> (guest accounts), <strong>Existing guests</strong>, <strong>Only people in your organization</strong></li>
  <li><strong>File storage limits</strong>: 1 TB + 10 GB per licensed user across the tenant; max file size 250 GB (in SharePoint/OneDrive); 2 TB default per site collection</li>
  <li><strong>Key admin tools</strong>: SharePoint admin center, SharePoint Migration Tool (SPMT), SharePoint PowerShell, SharePoint Online Management Shell</li>
  <li><strong>SharePoint Advanced Management</strong> (E5 add-on): Restricted Site Access, Data Access Governance reports, site ownership policy (minimum 2 owners), inactive site lifecycle, Restricted SharePoint Search (limit Copilot grounding to 100 sites)</li>
</ul>
<h4>Microsoft Teams — key objects and admin tasks</h4>
<ul>
  <li><strong>Team types</strong>: Every team is backed by a Microsoft 365 Group (shared mailbox, calendar, SharePoint site, OneNote, Planner)</li>
  <li><strong>Channel types</strong>: <strong>Standard</strong> (open to all team members), <strong>Private</strong> (invitation-only, separate SharePoint site), <strong>Shared</strong> (cross-team/cross-tenant collaboration)</li>
  <li><strong>Policies</strong> (applied per-user or per-group): Messaging policies, Meeting policies, Live Event policies, Calling policies, App permission policies, App setup policies, Teams Phone policies, Update management policies</li>
  <li><strong>Guest access</strong> — enabled tenant-wide via Entra B2B; controlled per-team by team owners</li>
  <li><strong>Meeting roles</strong>: Organizer, Presenter (can share content, mute others), Attendee (view-only unless promoted)</li>
  <li><strong>Teams admin center</strong> — admin.teams.microsoft.com for managing teams, policies, devices, users, and phone system</li>
  <li><strong>Exam scenario</strong>: "A file shared in Teams channel can't be found" → check the SharePoint site backing the channel. Files in private chats are in the user's OneDrive, not SharePoint.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u5",
              unitTitle: "Establish security, identity, and compliance foundations",
              content: `

<h4>Security foundations</h4>
<ul>
  <li><strong>Zero Trust</strong> — three core principles: <strong>Verify explicitly</strong> (authenticate using all signals), <strong>Least privilege</strong> (JIT/JEA), <strong>Assume breach</strong> (segment, monitor, encrypt)</li>
  <li><strong>Six layered defense strategy</strong>: Assessment (Secure Score), Identity protection (MFA, Conditional Access, PIM), Endpoint compliance (Intune), Data classification (Sensitivity Labels), Threat monitoring (Defender XDR), User education (Attack simulation training)</li>
  <li><strong>Microsoft Secure Score</strong> — measures tenant security posture against Microsoft best practices (0-100%); each improvement action has an impact score; found at <strong>security.microsoft.com</strong></li>
  <li><strong>Attack simulation training</strong> — run realistic phishing campaigns against users; integrated into Defender for Office 365 Plan 2</li>
  <li><strong>Defender for Office 365</strong>: Plan 1 (baseline) vs Plan 2 (adds Threat Explorer, Attack simulation training, AIR, campaign views — bundled in E5)</li>
</ul>
<h4>Identity foundations</h4>
<ul>
  <li><strong>Microsoft Entra ID</strong> — the identity plane for all M365 services; Free tier included with all M365 subscriptions, Premium P1/P2 add-ons available</li>
  <li><strong>Authentication methods</strong>: Password, MFA (at least 2 factors), Passwordless (Windows Hello, Authenticator app, Passkeys/FIDO2), Certificate-based</li>
  <li><strong>Phishing-resistant MFA mandatory for admins</strong> — Microsoft position; passkeys/FIDO2 preferred</li>
  <li><strong>Conditional Access</strong> — the policy engine: <em>if</em> sign-in conditions <em>then</em> grant/block/session controls. Key: sign-in risk, user risk, device platforms, locations, client apps</li>
  <li><strong>Single Sign-On (SSO)</strong> — one credential access across all apps; brokered by Entra ID; supports SAML, OIDC/OAuth, password-based SSO</li>
  <li><strong>Hybrid identity options</strong>: <strong>Password Hash Sync (PHS)</strong> — preferred, no on-prem dependency; <strong>Pass-Through Authentication (PTA)</strong> — agents on DCs; <strong>Federation</strong> — legacy, AD FS</li>
  <li><strong>Self-Service Password Reset (SSPR)</strong> — user-resets; works for cloud-only accounts; hybrid accounts need <strong>Password Writeback</strong> enabled in Entra Connect</li>
</ul>
<h4>Authorization foundations</h4>
<ul>
  <li><strong>RBAC</strong> — built-in roles (Global Admin, Exchange Admin, SharePoint Admin, Teams Admin, Security Admin, Compliance Admin, Global Reader, etc.) or custom roles</li>
  <li><strong>PIM (Privileged Identity Management)</strong> — JIT role activation (eligible assignment), requires approval + justification, time-bound, full audit trail. <strong>Active assignment</strong> = always-on (use sparingly)</li>
  <li><strong>Access Reviews</strong> — periodic re-attestation of role assignments; prevents privilege creep</li>
  <li><strong>Entitlement Management / Access Packages</strong> — bundle groups, sites, apps, roles with approval workflow and expiration</li>
</ul>
<h4>Compliance foundations</h4>
<ul>
  <li><strong>Microsoft Purview</strong> — unified compliance portal at <strong>purview.microsoft.com</strong></li>
  <li><strong>Sensitivity Labels</strong> — classify and protect content; travel with the file (encryption, watermark, access control). <strong>Auto-labeling</strong> via content inspection (SITs, trainable classifiers, EDM)</li>
  <li><strong>DLP (Data Loss Prevention)</strong> — detect and prevent accidental sharing of sensitive data across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps</li>
  <li><strong>Retention policies</strong> (tenant-level) vs <strong>Retention labels</strong> (content-level) — govern data lifecycle; disposition review for controlled deletion</li>
  <li><strong>Records management</strong> — declare content as immutable records (cannot be edited/deleted)</li>
  <li><strong>Unified Audit Log</strong> — default retention <strong>180 days</strong>; <strong>1 year with E5</strong> (Premium Audit)</li>
</ul>


<h4>Intune Device Compliance Policies — What They Check</h4>
<ul>
  <li><strong>Encryption</strong> — BitLocker (Windows), FileVault (macOS), device encryption (mobile)</li>
  <li><strong>OS version</strong> — minimum and maximum allowed versions; blocks outdated, vulnerable devices</li>
  <li><strong>Antivirus</strong> — Windows Defender or third-party AV must be active and up-to-date (Windows 10/11)</li>
  <li><strong>Firewall</strong> — must be enabled with approved config</li>
  <li><strong>Password/PIN</strong> — minimum length, complexity, max inactivity lock, history requirements</li>
  <li><strong>Jailbroken/rooted detection</strong> — mobile devices with root access are blocked immediately</li>
  <li>Devices that fail compliance are <strong>blocked</strong> by Conditional Access unless granted a grace period for remediation</li>
</ul>
<h4>App Protection Policies (MAM) for BYOD</h4>
<ul>
  <li>Protect corporate data inside approved apps <strong>without enrolling the device</strong> (no MDM). Ideal for BYOD scenarios.</li>
  <li><strong>Common controls</strong>: block copy/paste between work and personal apps, prevent "Save As" to local storage, require PIN/biometric to open work apps, block screenshots, restrict data transfer to unmanaged apps.</li>
  <li>Configured in <strong>Microsoft Intune → App protection policies</strong>. Target specific apps (Outlook, Teams, OneDrive) and data types.</li>
  <li><strong>Selective wipe</strong>: remove corporate data without affecting personal data on the device — important for offboarding.</li>
</ul>

<h4>Intune Device Compliance Policies — What They Check</h4>
<ul>
  <li><strong>Encryption</strong> — BitLocker (Windows), FileVault (macOS), device encryption (mobile)</li>
  <li><strong>OS version</strong> — minimum and maximum allowed versions; blocks outdated, vulnerable devices</li>
  <li><strong>Antivirus</strong> — Windows Defender or third-party AV must be active and up-to-date (Windows 10/11)</li>
  <li><strong>Firewall</strong> — must be enabled with approved config</li>
  <li><strong>Password/PIN</strong> — minimum length, complexity, max inactivity lock, history requirements</li>
  <li><strong>Jailbroken/rooted detection</strong> — mobile devices with root access are blocked immediately</li>
  <li>Devices that fail compliance are <strong>blocked</strong> by Conditional Access unless granted a grace period for remediation</li>
</ul>
<h4>App Protection Policies (MAM) for BYOD</h4>
<ul>
  <li>Protect corporate data inside approved apps <strong>without enrolling the device</strong> (no MDM). Ideal for BYOD scenarios.</li>
  <li><strong>Common controls</strong>: block copy/paste between work and personal apps, prevent "Save As" to local storage, require PIN/biometric to open work apps, block screenshots, restrict data transfer to unmanaged apps.</li>
  <li>Configured in <strong>Microsoft Intune → App protection policies</strong>. Target specific apps (Outlook, Teams, OneDrive) and data types.</li>
  <li><strong>Selective wipe</strong>: remove corporate data without affecting personal data on the device — important for offboarding.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m2-u6",
              unitTitle: "Assign admin roles using RBAC",
              content: `
<h4>RBAC in Microsoft 365 — role types and scope</h4>
<ul>
  <li><strong>Role-Based Access Control</strong> governs what administrators can do across M365 services. Roles are assigned to users with a defined <strong>scope</strong>: tenant-wide or administrative unit (scoped to a subset of users/devices)</li>
  <li>Roles are managed through <strong>Entra ID</strong> (entra.microsoft.com → Identity → Roles & admins) or <strong>M365 admin center</strong> → <strong>Roles</strong></li>
</ul>
<h4>Key built-in roles (exam-critical)</h4>
<table>
  <thead>
    <tr><th>Role</th><th>Capabilities</th><th>Who should hold it</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Global Administrator</strong></td><td>Full access to ALL admin features; can reset all admin passwords</td><td><strong>Minimize</strong> (≤4), must use PIM, never permanent</td></tr>
    <tr><td><strong>Global Reader</strong></td><td>Read-only view of all admin centers</td><td>Auditors, monitoring staff</td></tr>
    <tr><td><strong>Exchange Administrator</strong></td><td>Manage mailboxes, mail flow, anti-spam, connectors</td><td>Email team</td></tr>
    <tr><td><strong>SharePoint Administrator</strong></td><td>Manage sites, sharing settings, storage limits</td><td>Content/infra team</td></tr>
    <tr><td><strong>Teams Administrator</strong></td><td>Manage teams, policies, voice, devices</td><td>Collaboration team</td></tr>
    <tr><td><strong>Security Administrator</strong></td><td>Manage security policies, view security reports and incidents</td><td>Security operations</td></tr>
    <tr><td><strong>Security Reader</strong></td><td>Read-only access to security center</td><td>Auditors, SOC analysts (read-only)</td></tr>
    <tr><td><strong>Compliance Administrator</strong></td><td>Manage compliance policies, DLP, retention, eDiscovery</td><td>Compliance/legal team</td></tr>
    <tr><td><strong>Billing Administrator</strong></td><td>Manage subscriptions, licenses, invoices, support tickets</td><td>Finance/procurement team</td></tr>
    <tr><td><strong>User Administrator</strong></td><td>Create/manage users and groups, reset passwords (non-admin)</td><td>Helpdesk (first-line support)</td></tr>
    <tr><td><strong>Helpdesk Administrator</strong></td><td>Reset passwords (non-admin), manage service requests</td><td>Level 1 IT support</td></tr>
    <tr><td><strong>Authentication Administrator</strong></td><td>Manage authentication methods and MFA settings</td><td>Identity team</td></tr>
    <tr><td><strong>Privileged Role Administrator</strong></td><td>Manage role assignments in Entra ID and PIM</td><td>Identity governance team</td></tr>
    <tr><td><strong>Application Administrator</strong></td><td>Manage app registrations and enterprise apps</td><td>App/DevOps team</td></tr>
    <tr><td><strong>Cloud Device Administrator</strong></td><td>Manage Intune device enrollment and compliance</td><td>Endpoint management team</td></tr>
  </tbody>
</table>
<h4>Custom roles</h4>
<ul>
  <li>Create custom roles when built-in roles are too broad or too narrow</li>
  <li>Define by <strong>permissions</strong> (specific API actions) and <strong>scope</strong> (tenant-wide or administrative unit)</li>
  <li>Example: "Helpdesk for EMEA only" — custom role scoped to an administrative unit containing EMEA users</li>
</ul>
<h4>Privileged Identity Management (PIM) — detailed flow</h4>
<ol>
  <li><strong>Eligible assignment</strong> — user is added to a role as "eligible" (not active)</li>
  <li><strong>Activation</strong> — user requests activation in the PIM portal; provides justification + duration</li>
  <li><strong>Approval</strong> — if approval is required, designated approvers review and approve/deny</li>
  <li><strong>Time-bound</strong> — role activates for a configurable duration (default 1-8 hours), then auto-expires</li>
  <li><strong>Audit</strong> — every activation is logged with user, time, justification, approval, and actions taken</li>
  <li><strong>Alerts</strong> — PIM alerts for unusual activations, permanent assignments, or role escalations</li>
</ol>
<h4>Access Reviews (exam fact)</h4>
<ul>
  <li>Periodic reviews where group owners or designated reviewers confirm whether users still need their role assignments</li>
  <li>Can be <strong>self-review</strong> (users confirm their own access) or <strong>manager review</strong></li>
  <li>Results: <strong>Approve</strong>, <strong>Deny</strong>, or <strong>Don't know</strong>; Deny auto-removes the assignment</li>
  <li>Creates a full audit trail for compliance requirements (SOX, GDPR, ISO 27001)</li>
</ul>
<h4>Entitlement Management (Access Packages)</h4>
<ul>
  <li>Bundle one or more <strong>resources</strong> (groups, sites, apps, roles) into an <strong>access package</strong></li>
  <li>Internal/external users can <strong>request</strong> the package; optional approval workflow + expiration</li>
  <li>Managed in <strong>Entra ID → Identity Governance → Entitlement Management</strong></li>
</ul>
<h4>Delegation best practices (exam scenarios)</h4>
<ul>
  <li><strong>Least privilege</strong> — assign the role that can perform the task and nothing more</li>
  <li><strong>Global Admin minimization</strong> — limit to ≤4 users, always via PIM (eligible, not active)</li>
  <li><strong>Administrative units</strong> — scope role to a region or department (e.g., "Exchange Admin for EU users only")</li>
  <li><strong>Break-glass accounts</strong> — 2 emergency Global Admin accounts excluded from Conditional Access; long passwords, heavily monitored</li>
  <li><strong>Permanent vs eligible</strong> — permanent Global Admin is a security risk; always use eligible assignments with PIM</li>
</ul>
`,
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
              content: `
<h4>Module 2 Summary — Microsoft 365 Core Services and Admin Controls</h4>
<p>Module 2 covered the core M365 services and how to administer them. Key takeaways:</p>
<ul>
  <li><strong>M365 ecosystem</strong> includes Entra ID, Exchange Online, SharePoint, OneDrive, Teams, Power Platform, M365 Apps, Copilot, Purview, and Defender XDR. All share a common identity plane through Entra ID.</li>
  <li><strong>License plans</strong>: Business (up to 300 users, no Purview), E3 (full productivity + core security), E5 (adds full Purview, Defender Plan 2, eDiscovery Premium). Copilot is a $30/user/month add-on requiring E3/Business Premium baseline.</li>
  <li><strong>M365 admin center</strong> (admin.microsoft.com) handles users, groups, billing, service health, message center, reports, roles, and settings. Service Health monitors incidents; Message Center communicates planned changes.</li>
  <li><strong>Specialized admin centers</strong>: Entra (entra.microsoft.com), Exchange (admin.exchange.microsoft.com), SharePoint (admin.microsoft.com/sharepoint), Teams (admin.teams.microsoft.com), Defender (security.microsoft.com), Purview (purview.microsoft.com).</li>
  <li><strong>Exchange Online</strong> manages mailboxes (user, shared, resource, group), mail flow (connectors, accepted domains, transport rules), and anti-spam/anti-malware via Defender for Office 365. Shared mailboxes under 50 GB need no license.</li>
  <li><strong>SharePoint Online</strong>: communication and team sites, hub sites, document libraries with versioning, permission levels (Full Control through Read), sharing settings (Anyone to Only org), file storage limits (1 TB + 10 GB/licensed user). SharePoint Advanced Management adds DAG reports, site ownership policies, and Restricted SharePoint Search.</li>
  <li><strong>Teams</strong>: built on M365 Groups; channel types (Standard, Private, Shared); policies for messaging, meetings, calling, apps. Guest access via Entra B2B. Files in channels stored in SharePoint, files in private chats in OneDrive.</li>
  <li><strong>PowerShell modules</strong>: Exchange Online, Teams, SharePoint Online Management Shell, and Microsoft Graph PowerShell SDK (preferred modern approach).</li>
  <li><strong>RBAC and PIM</strong>: built-in roles scoped tenant-wide or by administrative unit. Global Admin minimized to 4 users, always via PIM. Access Reviews for periodic re-attestation. Break-glass accounts excluded from CA.</li>
  <li><strong>Delegated administration</strong>: DAP (legacy, Global Admin) vs GDAP (modern, time-bound scoped roles for partners).</li>
</ul>
`,
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
              content: `<p>Welcome to Module 3: Protect and govern Microsoft 365 data. This is the largest domain on the exam (<strong>35\u201340%</strong>), so careful study here pays the highest score dividend.</p>
<p>In this module you will explore:</p>
<ul>
  <li><strong>Microsoft Purview</strong> \u2014 the unified compliance portal and its full capabilities matrix including Information Protection, DLP, Insider Risk Management, Communication Compliance, DSPM for AI, eDiscovery, and more.</li>
  <li><strong>Data risk identification</strong> \u2014 how to use Purview tools to find, assess, and respond to data protection and governance risks across your tenant.</li>
  <li><strong>Compliance, AI data discovery, and eDiscovery</strong> \u2014 Compliance Manager, Data Explorer, Activity Explorer, DSPM for AI, and the eDiscovery lifecycle.</li>
  <li><strong>Oversharing in SharePoint</strong> \u2014 SharePoint Advanced Management, data access governance reports, and remediating overly broad sharing.</li>
  <li><strong>Data protection in Microsoft 365 Copilot</strong> \u2014 how Copilot accesses data through Microsoft Graph, permission awareness, Purview controls, and Responsible AI principles.</li>
</ul>
<p>After this module, you should be able to identify, classify, protect, and govern sensitive data across Microsoft 365 and Copilot workloads.</p>`,
              examTips: [
                "Domain 2 is 35-40% of the exam - the largest single domain",
                "Focus on Purview capabilities, risk identification tools, and Copilot data protection"
              ],
              keyConcepts: []
            },
            {
              unitId: "m3-u2",
              unitTitle: "Introduction to Microsoft Purview and data governance",
              content: `<h3>Microsoft Purview Overview</h3>
<p>Microsoft Purview is the unified compliance portal at <strong>https://purview.microsoft.com</strong>. It brings together data governance, protection, and compliance capabilities in a single platform for managing sensitive data across your Microsoft 365 tenant.</p>

<h3>Capabilities Matrix</h3>
<table>
  <thead>
    <tr><th>Capability</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Microsoft Purview Information Protection</strong></td><td>Discover, classify, label, and protect sensitive data \u2014 <strong>Sensitivity Labels</strong> travel with the content wherever it goes.</td></tr>
    <tr><td><strong>Microsoft Purview Data Loss Prevention (DLP)</strong></td><td>Detect and <strong>prevent</strong> accidental sharing of sensitive data (PII, PHI, financial) across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps.</td></tr>
    <tr><td><strong>Microsoft Purview Insider Risk Management</strong></td><td>Correlate signals (departing user + bulk download, off-hours activity, anomalous data movement) into risk scores and cases.</td></tr>
    <tr><td><strong>Microsoft Purview Communication Compliance</strong></td><td>Monitor internal email and Teams chat for harassment, regulatory violations, conflicts of interest, and policy breaches.</td></tr>
    <tr><td><strong>Microsoft Purview Data Security Posture Management (DSPM) for AI</strong></td><td>Discover, monitor, and govern the use of <strong>AI services and Copilot activity</strong> across the tenant.</td></tr>
    <tr><td><strong>Microsoft Purview Data Lifecycle Management</strong></td><td>Govern the <strong>lifecycle</strong> of data \u2014 retention policies and retention labels, disposition reviews, records management.</td></tr>
    <tr><td><strong>Microsoft Purview eDiscovery</strong></td><td>Search, hold, and export content for legal investigations. <strong>Standard</strong> in E3; <strong>Premium</strong> (E5) adds lawyer-client model, analytics, and review set tooling.</td></tr>
    <tr><td><strong>Microsoft Purview Compliance Manager</strong></td><td>A centralized dashboard of compliance posture across regulations (ISO 27001, GDPR, NIST, HIPAA, etc.) with recommended improvement actions.</td></tr>
    <tr><td><strong>Microsoft Purview Data Explorer</strong></td><td>A query tool for content metadata; lets you explore who accessed which items, label distribution, sensitive data locations.</td></tr>
    <tr><td><strong>Microsoft Purview Activity Explorer</strong></td><td>Shows <strong>user activities</strong> on labeled content \u2014 view, modify, print, email, share. Core signal for DSPM and IRM investigations.</td></tr>
    <tr><td><strong>Microsoft Purview Adaptive Protection</strong></td><td>Dynamically applies stricter <strong>DLP</strong> policies as a user's <strong>insider-risk</strong> score increases \u2014 bridges IRM and DLP so a high-risk user automatically gets the strictest data controls without admin intervention.</td></tr>
  </tbody>
</table>

<h3>Sensitivity Labels</h3>
<ul>
  <li><strong>Confidential / Highly Confidential</strong> \u2014 restrict access to a specific group; encrypt with permission policy; add watermark.</li>
  <li><strong>Public</strong> \u2014 no restrictions; useful for explicit marking.</li>
  <li><strong>Business / General</strong> \u2014 internal only; might apply visual marking.</li>
  <li><strong>Regulatory</strong> \u2014 automatically applied via auto-labeling for PII, financial, healthcare, etc.</li>
  <li>Apply in <strong>Office apps, Outlook, SharePoint, OneDrive, Teams, Power BI</strong>; the label <strong>travels with the file</strong> even when downloaded.</li>
  <li><strong>Auto-labeling</strong> \u2014 Microsoft-managed (built-in) or custom policies detect and label based on content inspection.</li>
</ul>

<h3>Data Classification</h3>
<ul>
  <li><strong>Trainable classifiers</strong> \u2014 machine-learning models that identify categories like <em>Resume</em>, <em>Source Code</em>, <em>HR</em>, <em>Finance</em> (built-in) and custom categories you train.</li>
  <li><strong>Sensitive Information Types (SITs)</strong> \u2014 pattern matches (regex, checksum) for items like credit card, SSN, passport, IBAN.</li>
  <li><strong>Exact Data Match (EDM)</strong> \u2014 match against a structured database of sensitive records (e.g., patient IDs, employee IDs) for high-precision detection without false positives.</li>
  <li>EDM workflow: define schema \u2192 create rule package \u2192 hash + upload source data \u2192 validate classifier. Integrated with DLP, auto-labeling, and eDiscovery.</li>
  <li>EDM vs regex: regex detects patterns by format (e.g., \d{3}-\d{2}-\d{4} for SSNs), which can produce false positives. EDM only triggers when the exact value from a secure list is matched.</li>
  <li><strong>Activity classification</strong> \u2014 track which labels users apply and to what content.</li>
</ul>

<h3>Data Lifecycle Management</h3>
<ul>
  <li><strong>Retention policy</strong> \u2014 a tenant-level rule (e.g., "retain all Teams chat for 7 years then delete").</li>
  <li><strong>Retention label</strong> \u2014 content-level (e.g., a label "Customer Records \u2014 10 years" applied to files).</li>
  <li><strong>Archiving</strong> \u2014 move inactive content to cheaper storage while keeping it discoverable (e.g., Exchange Online Archiving, SharePoint site archive).</li>
  <li><strong>Disposition review</strong> \u2014 an approver confirms deletion before it happens.</li>
  <li><strong>Records management</strong> \u2014 declares items as immutable <strong>records</strong> that cannot be edited or deleted.</li>
</ul>`,
              examTips: [
                "Know the Purview portal URL: https://purview.microsoft.com",
                "Sensitivity labels travel with the content even when downloaded",
                "Auto-labeling can be Microsoft-managed (built-in) or custom policies",
                "Adaptive Protection bridges Insider Risk Management and DLP automatically",
                "eDiscovery Standard is in E3; Premium is in E5"
              ],
              keyConcepts: [
                "Purview Information Protection",
                "Sensitivity Label",
                "Auto-labeling",
                "Trainable Classifier",
                "Sensitive Information Type",
                "EDM",
                "Data Lifecycle Management",
                "Retention Policy",
                "Retention Label",
                "Disposition Review",
                "Records Management",
                "Archiving",
                "Adaptive Protection"
              ]
            },
            {
              unitId: "m3-u3",
              unitTitle: "Identify and respond to data risks with Microsoft Purview",
              content: `<h3>Risk Identification Tools</h3>
<p>Microsoft Purview provides several tools to identify data protection and governance risks across your Microsoft 365 tenant and Copilot interactions.</p>

<table>
  <thead>
    <tr><th>Tool</th><th>Use to identify\u2026</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Microsoft Purview Compliance Manager</strong></td><td>Compliance posture gaps and improvement actions mapped to regulations (GDPR, ISO 27001, NIST 800-53, HIPAA, etc.).</td></tr>
    <tr><td><strong>Microsoft Purview Data Explorer</strong></td><td>Where sensitive data lives, which sites/libraries/mailboxes contain it, label distribution.</td></tr>
    <tr><td><strong>Microsoft Purview Insider Risk Management</strong></td><td>Risky user behavior \u2014 bulk download, off-hours activity, departing user + download pattern, security policy violations.</td></tr>
    <tr><td><strong>Microsoft Purview DLP alerts</strong></td><td>When a DLP policy is triggered \u2014 who did what, with which item, on which service, and the policy's response.</td></tr>
    <tr><td><strong>Microsoft Purview Communication Compliance</strong></td><td>Policy violations in email and Teams \u2014 harassment, profanity, regulatory concerns, sensitive info leaks.</td></tr>
    <tr><td><strong>Microsoft Purview Activity Explorer</strong></td><td>Per-user, per-file activity on labeled content \u2014 view, modify, share, email, print.</td></tr>
    <tr><td><strong>Microsoft Purview DSPM for AI</strong></td><td>Discovery and governance of AI activity \u2014 risky prompts, sensitive data flowing into AI, prompt-injection attempts.</td></tr>
    <tr><td><strong>Microsoft Purview eDiscovery \u2014 Content Search</strong></td><td>Search for files and emails by keyword, sender, recipient, label, date, location. Export results for legal review.</td></tr>
    <tr><td><strong>Microsoft Purview Audit</strong></td><td>Unified audit log \u2014 every action across workloads, default 180 days (1 year with E5).</td></tr>
  </tbody>
</table>

<h3>Data Loss Prevention (DLP) Details</h3>
<ul>
  <li>Detects and <strong>prevents</strong> accidental sharing of sensitive data (PII, PHI, financial information) across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps.</li>
  <li>DLP policy actions can block Copilot from pasting a sensitive number into a prompt or response.</li>
  <li>DLP alerts tell you who did what, with which item, on which service, and the policy's enforcement action.</li>
  <li><strong>Adaptive Protection</strong> dynamically applies stricter DLP policies as a user's insider-risk score increases, bridging Insider Risk Management and DLP without manual admin changes.</li>
</ul>

<h3>Insider Risk Management Details</h3>
<ul>
  <li>Correlates signals into risk scores and cases: departing user + bulk download, off-hours activity, anomalous data movement, security policy violations.</li>
  <li>Optional signals: <strong>Endpoint activity</strong> (Defender for Endpoint), <strong>HR events</strong> (exit interview integration via connector), DLP alerts feeding IRM cases.</li>
  <li>IRM cases can be <strong>escalated to eDiscovery</strong> for legal hold and further investigation.</li>
  <li>Adaptive Protection bridges IRM and DLP so a high-risk user automatically receives stricter data controls.</li>
</ul>

<h3>Communication Compliance Details</h3>
<ul>
  <li>Monitors internal email and Teams chat for harassment, regulatory violations, conflicts of interest, and policy breaches.</li>
  <li>Monitored channels: Microsoft Teams chats and channels, Exchange Online email, Viva Engage, and third-party connectors (Slack, Bloomberg, etc.).</li>
  <li>Uses trainable classifiers to detect policy violations including harassment, profanity, and sensitive info leaks.</li>
  <li><strong>Reviewer dashboard</strong> lets compliance analysts assess flagged messages, dismiss false positives, escalate to HR/legal, or tag for policy training.</li>
  <li><strong>Industry-specific policies</strong>: FINRA (financial services, MNPI detection), HIPAA (healthcare), insider trading patterns.</li>
  <li><strong>DLP for endpoints</strong> (via Defender for Endpoint) enforces policies on Windows/macOS devices: block USB copy, print, clipboard paste, or cloud upload of sensitive files.</li>
</ul>

<h3>Compliance Manager Control Types</h3>
<ul>
  <li><strong>Microsoft-managed controls</strong> \u2014 automatically monitored by Microsoft (e.g., encryption at rest). No action required from your organization.</li>
  <li><strong>Customer-managed controls</strong> \u2014 require <strong>manual verification</strong> by your admins (e.g., training completion, documentation of procedures).</li>
  <li><strong>Improvement actions</strong> are mapped to controls, have assigned owners, and roll up into the <strong>Compliance Score</strong>.</li>
</ul>`,
              examTips: [
                "When asked 'how do I find every file labeled Confidential that a user accessed last month?' the answer is Activity Explorer",
                "DLP alerts record: who, what item, which service, and the policy enforcement action",
                "Adaptive Protection automatically bridges Insider Risk Management and DLP",
                "Unified Audit Log default retention is 180 days; 1 year with E5",
                "IRM cases can be escalated to eDiscovery for legal hold"
              ],
              keyConcepts: [
                "DLP",
                "DLP Alert",
                "Insider Risk Management",
                "Communication Compliance",
                "Adaptive Protection",
                "Activity Explorer",
                "Data Explorer",
                "Content Search",
                "Unified Audit Log"
              ]
            },
            {
              unitId: "m3-u4",
              unitTitle: "Examine compliance, AI data discovery, and eDiscovery",
              content: `<h3>Compliance Manager</h3>
<p>A centralized dashboard of compliance posture across regulations including ISO 27001, GDPR, NIST 800-53, HIPAA, and many more. It provides recommended improvement actions to strengthen your compliance posture.</p>
<ul>
  <li><strong>Microsoft-managed controls</strong> \u2014 automatically monitored by Microsoft (e.g., encryption at rest). No action required from your organization.</li>
  <li><strong>Customer-managed controls</strong> \u2014 require <strong>manual verification</strong> by your admins (e.g., training completion, documented procedures).</li>
  <li><strong>Improvement actions</strong> \u2014 mapped to specific controls, assigned to owners, and roll up into the overall <strong>Compliance Score</strong>.</li>
</ul>

<h3>eDiscovery</h3>
<ul>
  <li><strong>eDiscovery Standard</strong> (included in E3) \u2014 search, hold, and export content for legal investigations.</li>
  <li><strong>eDiscovery Premium</strong> (included in E5) \u2014 adds lawyer-client privilege model, advanced analytics, review set tooling, and intelligent processing (OCR, threading, near-duplicate detection).</li>
  <li><strong>Content Search</strong> \u2014 search files and emails by keyword, sender, recipient, sensitivity label, date range, and location. Export results natively or as a report for legal review.</li>
</ul>

<h3>Data Explorer</h3>
<ul>
  <li>A query tool for content metadata that lets you explore who accessed which items, label distribution, and sensitive data locations.</li>
  <li>Filter by <strong>location</strong>, <strong>sensitivity label</strong>, <strong>content type</strong> to find specific data patterns.</li>
  <li>Visualize <strong>data exposure patterns</strong> \u2014 where sensitive data lives and who owns it.</li>
  <li>Identify <strong>externally shared</strong> or high-risk files. Example: find all "Confidential \u2014 Finance" documents and see how they are shared.</li>
</ul>

<h3>Activity Explorer</h3>
<ul>
  <li>Shows <strong>user activities</strong> on labeled content \u2014 view, modify, print, email, share.</li>
  <li>Core signal for DSPM and Insider Risk Management investigations.</li>
  <li>Captures every Copilot action for audit trails.</li>
  <li>Answer the question: "find every file labeled Confidential that a user accessed last month."</li>
</ul>

<h3>Data Security Posture Management (DSPM) for AI</h3>
<ul>
  <li>Discover, monitor, and govern the use of <strong>AI services and Copilot activity</strong> across the tenant.</li>
  <li>Surfaces <strong>shadow AI</strong> \u2014 non-corporate AI services being used by employees.</li>
  <li>Detects <strong>risky prompts</strong>, sensitive data flowing into AI, and <strong>prompt-injection</strong> patterns.</li>
  <li>Integrates with Activity Explorer for the last 30 days of Copilot interactions.</li>
  <li>Flags sites feeding too much data into Copilot without restriction.</li>
</ul>

<h3>Data Lifecycle Management</h3>
<ul>
  <li><strong>Retention policy</strong> \u2014 a tenant-level rule (e.g., "retain all Teams chat for 7 years then delete").</li>
  <li><strong>Retention label</strong> \u2014 content-level (e.g., a label "Customer Records \u2014 10 years" applied to specific files).</li>
  <li><strong>Archiving</strong> \u2014 move inactive content to cheaper storage while keeping it discoverable (e.g., Exchange Online Archiving, SharePoint site archive).</li>
  <li><strong>Disposition review</strong> \u2014 an approver confirms deletion before it happens.</li>
  <li><strong>Records management</strong> \u2014 declares items as immutable <strong>records</strong> that cannot be edited or deleted, ensuring compliance with regulatory requirements.</li>
</ul>`,
              examTips: [
                "eDiscovery Standard = E3, eDiscovery Premium = E5",
                "Activity Explorer answers questions about who accessed labeled content and what they did with it",
                "DSPM for AI covers shadow AI, risky prompts, and prompt-injection",
                "Compliance Manager has Microsoft-managed (auto) and customer-managed (manual verification) controls",
                "Activity Explorer captures every Copilot action for audit"
              ],
              keyConcepts: [
                "Compliance Manager",
                "eDiscovery Standard",
                "eDiscovery Premium",
                "Content Search",
                "DSPM for AI",
                "Data Explorer",
                "Activity Explorer",
                "Data Lifecycle Management",
                "Retention Policy",
                "Retention Label",
                "Archiving",
                "Disposition Review",
                "Records Management"
              ]
            },
            {
              unitId: "m3-u5",
              unitTitle: "Explore oversharing and data access governance in SharePoint",
              content: `
<h3>SharePoint Oversharing Overview</h3>
<p>Oversharing occurs when content is shared more broadly than necessary. This is one of the most common data protection risks in Microsoft 365. SharePoint Advanced Management provides a suite of tools to identify, monitor, and remediate oversharing.</p>

<h3>Tools to Troubleshoot Oversharing</h3>
<ul>
  <li><strong>SharePoint Advanced Management</strong> — the umbrella capability that includes all the tools below.</li>
  <li><strong>Data access governance reports</strong> — surface sites, libraries, and files that are broadly shared.</li>
  <li><strong>Microsoft Purview DSPM for AI</strong> — flags sites feeding too much data into Copilot without restriction.</li>
  <li><strong>SharePoint admin center → Reports</strong> — sharing summary, file activity, sharing links inventory.</li>
</ul>

<h3>Run a Data Access Governance Report</h3>
<ol>
  <li>Go to <strong>SharePoint admin center</strong> (or <strong>https://aka.ms/spoda</strong>).</li>
  <li>Open <strong>Reports</strong> → <strong>Data access governance</strong>.</li>
  <li>Select a site or run across all sites.</li>
  <li>The report shows: <strong>broken inheritance</strong>, <strong>access requests</strong>, <strong>external sharing</strong>, <strong>Anyone links</strong>, <strong>label distribution</strong>, <strong>sensitivity label violations</strong>.</li>
  <li>Use the report to drive remediation: tighten sharing, apply labels, restrict access, or move content to a private channel.</li>
</ol>

<h3>SharePoint Advanced Management Features</h3>
<table>
  <thead>
    <tr><th>Feature</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Restricted Site Access</strong></td><td>Limit content visibility to a specified Entra ID group, even if users have access to the parent site.</td></tr>
    <tr><td><strong>Oversharing reports / Permission site report</strong></td><td>See what has been shared too broadly; lets a site owner do a <strong>site access review</strong> to validate who really needs access.</td></tr>
    <tr><td><strong>Conditional access for SharePoint sites</strong></td><td>Block access from unmanaged devices at the site level.</td></tr>
    <tr><td><strong>Inactive site lifecycle</strong></td><td>Auto-archive or delete inactive sites.</td></tr>
    <tr><td><strong>Change history</strong></td><td>See who changed permissions and when.</td></tr>
    <tr><td><strong>Site ownership policy</strong></td><td>Enforces a minimum number of owners (e.g., <strong>at least 2</strong>) on every site.</td></tr>
    <tr><td><strong>Restricted content discovery (site level)</strong></td><td>Opt a site out of being indexed and used as Copilot / Semantic Index ground. The site is still browseable by its existing members, but Copilot will not include its content in answers.</td></tr>
    <tr><td><strong>Restricted SharePoint Search (tenant level)</strong></td><td>Restricts Copilot's grounding to a hand-picked allow-list of up to <strong>100 sites</strong> (hub sites and their child sites are not counted toward the 100). Useful while you clean up permissions.</td></tr>
  </tbody>
</table>

<h3>Common Oversharing Scenarios</h3>
<ul>
  <li>Sharing with <strong>"Everyone"</strong> or <strong>"Anyone with the link"</strong> — these links bypass authentication requirements.</li>
  <li>Granting <strong>Edit</strong> permissions when <strong>View only</strong> was intended.</li>
  <li>Granting <strong>external guests full site access</strong> when they only needed a single file.</li>
  <li>Data Access Governance (DAG) reports flag sites with: sensitive content, excessive sharing, inactive owners, missing sensitivity labels.</li>
</ul>

<h4>SharePoint Advanced Management (SAM) — Full Feature Breakdown</h4>
<table>
  <thead>
    <tr><th>Feature</th><th>What it does</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Data access governance (DAG) reports</strong></td><td>Identify overshared sites, sites with sensitive content and excessive external access, sites with no owners or inactive owners, sites missing sensitivity labels. Guides remediation actions.</td></tr>
    <tr><td><strong>Restricted SharePoint Search</strong></td><td>Limits Copilot grounding to up to 100 explicitly allowed sites. All other sites are invisible to Copilot. Hub sites excluded from the restriction automatically. Key control to reduce Copilot oversharing risk.</td></tr>
    <tr><td><strong>Restricted site access</strong></td><td>Limit site access to an Entra ID security group; users outside the group cannot access the site even with a direct link. Applies at the site level, not content level.</td></tr>
    <tr><td><strong>Site ownership policies</strong></td><td>Require ≥ 2 owners per site. Alerts when a site has only one owner or no owners. Prevents orphaned sites and reduces risk from ungoverned content.</td></tr>
  </tbody>
</table>
<h4>Conditional Access Integration</h4>
<ul>
  <li>SAM integrates with <strong>Conditional Access</strong> to require MFA or block unmanaged devices from accessing sensitive sites.</li>
  <li><strong>Inactivity alerts</strong> flag unused sites (no recent activity) to reduce risk from abandoned content.</li>
  <li><strong>Site access reviews</strong> prompt site owners to periodically confirm the access list is correct.</li>
</ul>

<h4>SharePoint Advanced Management (SAM) — Full Feature Breakdown</h4>
<table>
  <thead>
    <tr><th>Feature</th><th>What it does</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Data access governance (DAG) reports</strong></td><td>Identify overshared sites, sites with sensitive content and excessive external access, sites with no owners or inactive owners, sites missing sensitivity labels. Guides remediation actions.</td></tr>
    <tr><td><strong>Restricted SharePoint Search</strong></td><td>Limits Copilot grounding to up to 100 explicitly allowed sites. All other sites are invisible to Copilot. Hub sites excluded from the restriction automatically. Key control to reduce Copilot oversharing risk.</td></tr>
    <tr><td><strong>Restricted site access</strong></td><td>Limit site access to an Entra ID security group; users outside the group cannot access the site even with a direct link. Applies at the site level, not content level.</td></tr>
    <tr><td><strong>Site ownership policies</strong></td><td>Require ≥ 2 owners per site. Alerts when a site has only one owner or no owners. Prevents orphaned sites and reduces risk from ungoverned content.</td></tr>
  </tbody>
</table>
<h4>Conditional Access Integration</h4>
<ul>
  <li>SAM integrates with <strong>Conditional Access</strong> to require MFA or block unmanaged devices from accessing sensitive sites.</li>
  <li><strong>Inactivity alerts</strong> flag unused sites (no recent activity) to reduce risk from abandoned content.</li>
  <li><strong>Site access reviews</strong> prompt site owners to periodically confirm the access list is correct.</li>
</ul>
`,
              examTips: [
                "SharePoint admin center shortcut URL: https://aka.ms/spoda",
                "Restricted SharePoint Search limits Copilot grounding to up to 100 sites (hub sites + children not counted)",
                "Restricted content discovery is site-level; Restricted SharePoint Search is tenant-level",
                "Site ownership policy enforces minimum 2 owners per site",
                "DAG reports show: broken inheritance, access requests, external sharing, Anyone links, label distribution"
              ],
              keyConcepts: [
                "SharePoint Advanced Management",
                "Restricted Site Access",
                "Data Access Governance Report",
                "Oversharing",
                "Restricted SharePoint Search",
                "Restricted Content Discovery",
                "Site Ownership Policy",
                "Inactive Site Lifecycle"
              ]
            },
            {
              unitId: "m3-u6",
              unitTitle: "Explore data protection in Microsoft 365 Copilot",
              content: `<h3>How Copilot Accesses Data</h3>
<ul>
  <li><strong>Microsoft 365 Copilot is grounded in your tenant's data</strong> through Microsoft Graph.</li>
  <li>Copilot only retrieves content the <strong>signed-in user is permitted to see</strong>. Permissions travel with the data.</li>
  <li>Three retrieval layers: <strong>Graph search</strong> (permitted content), <strong>Semantic Index</strong> (pre-computed relationships across users, content, and concepts), <strong>LLM</strong> (reasoning that produces natural language).</li>
  <li>The system prompt, conversation history, and grounding data are <strong>not</strong> used to train foundation models.</li>
</ul>

<h3>How Microsoft Graph Influences Copilot Responses</h3>
<ul>
  <li>Every Copilot response is composed from Graph-grounded context \u2014 files, emails, chats, meetings, people.</li>
  <li><strong>Permission-aware</strong> \u2014 Copilot respects SharePoint and OneDrive item-level permissions, Sensitivity Labels, mailbox delegation, and Teams channel membership.</li>
  <li>If a user cannot access a document directly, <strong>Copilot cannot surface its content to them</strong> through another channel or workaround.</li>
  <li><strong>Graph connectors</strong> extend the semantic index to <strong>third-party data</strong> (ServiceNow, Confluence, Salesforce, etc.), which is then available for Copilot grounding.</li>
</ul>

<h3>How Copilot Uses Permissions and Other Controls to Protect Against Risks</h3>
<h4>Microsoft 365 Controls Honored</h4>
<ul>
  <li>SharePoint permissions, OneDrive sharing links, mailbox access, Teams channel membership, Sensitivity Label encryption.</li>
</ul>
<h4>Microsoft Purview Controls Honored</h4>
<ul>
  <li><strong>Sensitivity Labels</strong> \u2014 if a file is encrypted for "Finance group only", only Finance can have its content used by Copilot.</li>
  <li><strong>DLP</strong> \u2014 DLP policy actions can block Copilot from pasting a sensitive number into a prompt or response.</li>
  <li><strong>DSPM for AI</strong> \u2014 surfaces risky prompts, overshared data sources, and prompt-injection patterns.</li>
  <li><strong>Activity Explorer</strong> \u2014 captures every Copilot action for audit.</li>
</ul>
<h4>Microsoft Defender Controls</h4>
<ul>
  <li><strong>Defender for Cloud Apps</strong> session policies apply to Copilot actions in cloud apps.</li>
  <li><strong>Defender XDR</strong> incidents can include Copilot-sourced signals.</li>
</ul>
<h4>Additional Security Controls</h4>
<ul>
  <li><strong>Customer Key</strong> \u2014 customer-managed encryption keys apply to content Copilot retrieves.</li>
  <li><strong>Customer Lockbox</strong> \u2014 Microsoft engineers require explicit tenant approval to access content.</li>
</ul>

<h3>Responsible AI Principles</h3>
<table>
  <thead>
    <tr><th>Principle</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Fairness</strong></td><td>Copilot should work consistently for all users, languages, and contexts.</td></tr>
    <tr><td><strong>Reliability and safety</strong></td><td>Outputs are designed to be testable; Copilot refuses harmful content.</td></tr>
    <tr><td><strong>Privacy and security</strong></td><td>Tenant data stays in your boundary, permissions are honored, actions are auditable.</td></tr>
    <tr><td><strong>Inclusiveness</strong></td><td>Accessible to people with disabilities (screen reader support, high-contrast, etc.).</td></tr>
    <tr><td><strong>Accountability</strong></td><td>Humans remain accountable; Copilot is an assistant, not a decision-maker.</td></tr>
    <tr><td><strong>Transparency</strong></td><td>Microsoft publishes documentation about how Copilot works, the data it uses, and its limits.</td></tr>
  </tbody>
</table>`,
              examTips: [
                "Copilot cannot surface content the user cannot directly access - permissions are always honored",
                "Three retrieval layers: Graph search, Semantic Index, LLM",
                "Customer Key = customer-managed encryption; Customer Lockbox = explicit consent for Microsoft engineer access",
                "Graph connectors extend grounding to third-party data (ServiceNow, Confluence, Salesforce)",
                "Prompts and tenant data are never used to train foundation models"
              ],
              keyConcepts: [
                "Graph",
                "Semantic Index",
                "Grounding",
                "Customer Key",
                "Customer Lockbox",
                "Responsible AI",
                "Fairness",
                "Reliability",
                "Privacy",
                "Inclusiveness",
                "Accountability",
                "Transparency"
              ]
            },
            {
              unitId: "m3-u7",
              unitTitle: "Module assessment",
              content: `<p>Knowledge check for Module 3: Protect and govern Microsoft 365 data. Review the following areas before attempting the assessment:</p>
<ul>
  <li>Microsoft Purview capabilities matrix and portal URL</li>
  <li>Sensitivity labels, auto-labeling, trainable classifiers, SITs, and EDM</li>
  <li>Data Lifecycle Management (retention policies, retention labels, disposition review, records management)</li>
  <li>Risk identification tools (Compliance Manager, DLP alerts, Insider Risk Management, Communication Compliance, Activity Explorer, Data Explorer, Audit)</li>
  <li>Compliance Manager control types and Compliance Score</li>
  <li>eDiscovery Standard vs Premium</li>
  <li>DSPM for AI and Activity Explorer for Copilot audit</li>
  <li>SharePoint Advanced Management features and data access governance reports</li>
  <li>Copilot data access via Microsoft Graph, permission awareness, Purview and Defender controls</li>
  <li>Responsible AI principles</li>
</ul>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m3-u8",
              unitTitle: "Summary",
              content: `
<h4>Module 3 Summary — Protect and Govern Microsoft 365 Data</h4>
<p>Module 3 covered the largest exam domain (35–40%). This is the deepest module with the most exam-critical detail. Key takeaways:</p>
<ul>
  <li><strong>Microsoft Purview</strong> (purview.microsoft.com) is the unified compliance portal with capabilities spanning Information Protection, DLP, Insider Risk Management, Communication Compliance, DSPM for AI, Data Lifecycle Management, eDiscovery, Compliance Manager, Data Explorer, Activity Explorer, Audit, and Adaptive Protection.</li>
  <li><strong>Sensitivity Labels</strong> classify and protect content with encryption, watermarking, and access restrictions. Labels travel with the file. Auto-labeling uses content inspection (SITs, trainable classifiers, EDM). Published via label policies; can be mandatory or optional with override justification.</li>
  <li><strong>Data Loss Prevention (DLP)</strong> detects and blocks sensitive data across Exchange, SharePoint, OneDrive, Teams, endpoints, and cloud apps. Can target Copilot interactions. Policy tips educate users inline.</li>
  <li><strong>Insider Risk Management</strong> correlates signals (departure + download, off-hours, mass copy) into risk scores. Can feed Conditional Access via Adaptive Protection (strictest DLP applies as risk rises).</li>
  <li><strong>Communication Compliance</strong> monitors Teams, Exchange, Viva Engage, and 3rd-party connectors for harassment, regulatory violations, and conflicts of interest.</li>
  <li><strong>DSPM for AI</strong> (Data Security Posture Management) monitors Copilot and agent interactions for shadow AI, risky prompts, prompt-injection, and sensitive data exposure. Captures 30 days of interaction history.</li>
  <li><strong>Data Lifecycle Management</strong>: retention policies (location-wide) vs retention labels (item-level). Disposition reviews for controlled deletion. Records management declares immutable records.</li>
  <li><strong>eDiscovery</strong>: Standard (E3, search/hold/export) vs Premium (E5, legal-hold workflows, review sets, redaction, analytics).</li>
  <li><strong>Compliance Manager</strong> tracks Microsoft-managed + customer-managed controls with Compliance Score and improvement actions.</li>
  <li><strong>SharePoint Advanced Management</strong> provides DAG reports (overshared sites), Restricted Site Access (limit to Entra group), site ownership policies (2+ owners), and Restricted SharePoint Search (up to 100 sites, hub sites excluded). Oversharing is Copilot's top risk because Semantic Index finds data hidden by obscurity.</li>
  <li><strong>Audit</strong>: Standard (180 days) vs Premium (1 year with E5, high-value events like mailbox access). Data connectors ingest 3rd-party data for eDiscovery and IRM.</li>
  <li><strong>Sensitive Information Types (SITs)</strong> are built-in (credit card, SSN) or custom regex patterns used by DLP, autolabeling, and IRM. Trainable classifiers use AI for content classification.</li>
  <li><strong>Customer Key</strong> and <strong>Customer Lockbox</strong> provide customer-managed encryption and explicit consent for Microsoft engineer access.</li>
</ul>
`,
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
              content: `
<h4>Microsoft 365 Copilot architecture</h4>
<p>Microsoft 365 Copilot integrates large language models (LLMs) with your Microsoft 365 data through Microsoft Graph and the Semantic Index. The architecture consists of several layers that work together to produce grounded, safe responses.</p>
<table>
  <thead>
    <tr><th>Component</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Orchestrator</strong></td><td>Coordinates the prompt, retrieval, and response pipeline; adds the system prompt and manages grounding.</td></tr>
    <tr><td><strong>Microsoft Graph</strong></td><td>Retrieves permitted content using the signed-in user's identity and permissions via Graph API.</td></tr>
    <tr><td><strong>Semantic Index</strong></td><td>Pre-computed relationships across users, content, and concepts for faster, more relevant retrieval.</td></tr>
    <tr><td><strong>LLM</strong></td><td>Generates natural language responses conditioned on the grounding data and system prompt.</td></tr>
    <tr><td><strong>Content Safety</strong></td><td>Filters both prompt and response for harmful, offensive, or policy-violating content.</td></tr>
    <tr><td><strong>Groundedness Detection</strong></td><td>Flags answers not supported by the retrieved grounding data (hallucination prevention).</td></tr>
  </tbody>
</table>
<h4>Copilot across Microsoft 365 apps</h4>
<ul>
  <li><strong>Word</strong> — draft, summarize, rewrite, and format documents.</li>
  <li><strong>Excel</strong> — analyze data, create formulas, generate charts, identify trends.</li>
  <li><strong>PowerPoint</strong> — create presentations from prompts or existing documents, add slides.</li>
  <li><strong>Outlook</strong> — summarize email threads, draft replies, coach writing tone.</li>
  <li><strong>Teams</strong> — recap meetings, suggest action items, answer questions about missed conversations.</li>
  <li><strong>OneNote</strong> — draft notes, organize content, summarize pages.</li>
  <li><strong>Business Chat (Copilot Chat)</strong> — the unified chat surface across all M365 data.</li>
</ul>
<h4>Access tiers (important exam distinction)</h4>
<table>
  <thead>
    <tr><th>Tier</th><th>Grounding</th><th>License required</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Microsoft 365 Copilot Chat (free)</strong></td><td>Web-grounded only (Bing); no work data access</td><td>Any M365 license</td></tr>
    <tr><td><strong>Microsoft 365 Copilot Chat (paid)</strong></td><td>Web + work-grounded (Microsoft Graph)</td><td>Add-on license</td></tr>
    <tr><td><strong>Microsoft 365 Copilot (licensed)</strong></td><td>Full app integration + Graph + Semantic Index</td><td>$30/user/month add-on</td></tr>
  </tbody>
</table>
<h4>Admin controls for Copilot</h4>
<ul>
  <li><strong>Web content access</strong> — toggle Bing grounding on/off tenant-wide.</li>
  <li><strong>Plugin/connector controls</strong> — block or allow specific plugins.</li>
  <li><strong>Per-app enablement</strong> — disable Copilot in specific applications (Word, Excel, Teams, etc.).</li>
  <li><strong>Per-user</strong> — controlled through license assignment in M365 admin center.</li>
  <li><strong>Per-content</strong> — Sensitivity Labels can prevent Copilot from using labeled content for grounding.</li>
  <li><strong>Data loss prevention (DLP)</strong> — DLP policies can block Copilot from processing sensitive data.</li>
  <li><strong>Restricted SharePoint Search</strong> — limit Copilot grounding to a maximum of 100 SharePoint sites.</li>
</ul>
<h4>Key exam facts about Copilot architecture</h4>
<ul>
  <li>Prompts, responses, and tenant data are <strong>never used to train foundation LLMs</strong>.</li>
  <li>Copilot is <strong>permission-aware</strong> — it cannot access content the signed-in user cannot directly access.</li>
  <li>The <strong>system prompt</strong> includes context such as the user's role, recent activity, and selected app.</li>
  <li><strong>Groundedness detection</strong> runs post-generation to catch hallucinations before the user sees them.</li>
  <li><strong>Content safety</strong> filters run on both the inbound prompt and the outbound response.</li>
  <li>All Copilot interactions are <strong>auditable</strong> via Purview Activity Explorer (30-day Copilot interaction history).</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u3",
              unitTitle: "What are agents?",
              content: `
<h4>Definition of agents</h4>
<p>Agents are specialized AI assistants built on top of Microsoft 365 Copilot that perform a specific job or role. Unlike general-purpose Copilot, agents are scoped to a <strong>specific task</strong>, <strong>knowledge domain</strong>, or <strong>business process</strong>, and can operate autonomously with or without human interaction.</p>
<h4>Agent types</h4>
<table>
  <thead>
    <tr><th>Type</th><th>Description</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Prebuilt agents</strong></td><td>Microsoft-authored agents available in the Agent Store</td><td>Researcher, Analyst, Writing Coach, Prompt Coach</td></tr>
    <tr><td><strong>Custom agents</strong></td><td>Built by users in Copilot Studio or via declarative manifest</td><td>HR FAQ agent, IT helpdesk agent</td></tr>
    <tr><td><strong>SharePoint agents</strong></td><td>Scoped to a single SharePoint site; auto-inherit permissions</td><td>Project "ask me anything" agent</td></tr>
    <tr><td><strong>Advanced/custom engine agents</strong></td><td>Full control via Azure AI Foundry + Teams</td><td>Complex autonomous workflow agents</td></tr>
  </tbody>
</table>
<h4>Prebuilt agents in detail</h4>
<ul>
  <li><strong>Researcher</strong> — multi-step research across web and work data; produces cited reports, market analyses, and competitive landscapes.</li>
  <li><strong>Analyst</strong> — data analysis using Python-style reasoning; summarizes tables, forecasts trends, finds anomalies in structured data (Excel, CSV).</li>
  <li><strong>Writing Coach</strong> — helps improve writing tone, clarity, and style across M365 apps.</li>
  <li><strong>Prompt Coach</strong> — guides users in crafting effective prompts for better Copilot results.</li>
  <li><strong>SharePoint site agent</strong> — automatically created for each SharePoint site; answers questions from site content.</li>
</ul>
<h4>Agent identity and governance</h4>
<ul>
  <li>Agents may need <strong>their own identity</strong> because they often operate across data the calling user may not see or act independently on triggers.</li>
  <li><strong>Entra Agent ID</strong> (preview) — gives agents a first-class identity in Microsoft Entra for governance, auditing, and permission assignment.</li>
  <li>With a dedicated identity, agents can be assigned granular permissions, audited independently, and governed like any other security principal.</li>
</ul>
<h4>Model Context Protocol (MCP)</h4>
<ul>
  <li><strong>MCP</strong> is an open standard for AI applications to connect with <strong>additional knowledge sources</strong> and <strong>tools</strong>.</li>
  <li>Rather than using <strong>computer-use or GUI scripting</strong> (which breaks when UIs change), agents should use <strong>APIs and MCP servers</strong> — these are stable, auditable, and secure.</li>
  <li>MCP allows agents to interact with databases, file systems, external APIs, and third-party services in a standardized way.</li>
</ul>
<h4>Key exam facts about agents</h4>
<ul>
  <li>Custom agents are built in <strong>Copilot Studio</strong> (low-code) or via <strong>declarative manifest</strong> (pro-code).</li>
  <li>Knowledge sources per agent: up to <strong>20 sources</strong> (public websites, SharePoint, Dataverse, Dynamics 365, Fabric, uploaded files).</li>
  <li>Uploaded file size limit: <strong>512 MB per file</strong>.</li>
  <li><strong>Autonomous agents</strong> require a <strong>trigger</strong> (event or schedule) and can execute without user interaction.</li>
  <li>Agents can be published to <strong>Microsoft 365 Copilot</strong>, <strong>Teams</strong>, or a <strong>custom website</strong>.</li>
  <li>Prebuilt agents are available in the <strong>Agent Store</strong> and can be enabled/disabled by admins.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u4",
              unitTitle: "Compare Microsoft 365 Copilot and agents",
              content: `
<h4>Built-in capabilities comparison</h4>
<table>
  <thead>
    <tr><th>Capability</th><th>Microsoft 365 Copilot</th><th>Agents</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Scope</strong></td><td>General assistant across all M365 apps and data</td><td>Scoped to a specific role, task, or knowledge domain</td></tr>
    <tr><td><strong>Built-in availability</strong></td><td>Integrated in Word, Excel, PowerPoint, Outlook, Teams, OneNote, Business Chat</td><td>Pre-built (Researcher, Analyst) or custom-built</td></tr>
    <tr><td><strong>Grounding</strong></td><td>Microsoft Graph + Semantic Index (tenant-wide)</td><td>Same, plus specific knowledge sources you define</td></tr>
    <tr><td><strong>Autonomy</strong></td><td>Reactive — responds to user prompts only</td><td>Can run autonomously with triggers, schedules, and multi-step workflows</td></tr>
    <tr><td><strong>Customization</strong></td><td>Limited — users write natural-language prompts</td><td>Full customization via Copilot Studio: instructions, rules, knowledge, topics, actions, tone</td></tr>
    <tr><td><strong>Data scope</strong></td><td>All content the user has permission to see</td><td>Can be restricted to specific knowledge sources or SharePoint sites</td></tr>
    <tr><td><strong>Identity</strong></td><td>User's identity (delegated permissions)</td><td>Can have its own Entra Agent ID for independent permissions</td></tr>
    <tr><td><strong>Publishing</strong></td><td>Available tenant-wide via license assignment</td><td>Published to specific users, groups, channels, or everyone</td></tr>
  </tbody>
</table>
<h4>When to use Copilot vs agents</h4>
<ul>
  <li>Use <strong>Microsoft 365 Copilot</strong> for open-ended productivity assistance across all M365 apps — drafting, summarizing, analyzing, and creating.</li>
  <li>Use <strong>agents</strong> when you need a specialized, repeatable, and governed assistant for a <strong>specific business process</strong> — such as HR support, IT troubleshooting, or sales deal summaries.</li>
  <li>Use <strong>autonomous agents</strong> when the task should run on a schedule or trigger without user intervention.</li>
  <li>Agents <strong>complement</strong> Copilot — users can invoke agents from within Copilot Chat.</li>
</ul>
<h4>Researcher agent — detailed use cases</h4>
<ul>
  <li><strong>Deep research</strong> — multi-step research across web + work data with planning and citation generation.</li>
  <li><strong>Market analysis</strong> — compile competitive landscape reports from internal files and external web sources.</li>
  <li><strong>Due diligence</strong> — gather and summarize information from multiple sources into a structured report.</li>
  <li>The Researcher agent produces <strong>cited outputs</strong> with source links for transparency.</li>
</ul>
<h4>Analyst agent — detailed use cases</h4>
<ul>
  <li><strong>Data analysis</strong> — turn raw data (Excel tables, CSVs) into visual insights using Python-style reasoning.</li>
  <li><strong>Sales summary</strong> — summarize sales data by region, product, or time period with trend identification.</li>
  <li><strong>Forecasting</strong> — project quarterly revenue based on historical data patterns.</li>
  <li><strong>Anomaly detection</strong> — find outliers, errors, or unusual patterns in structured datasets.</li>
  <li>The Analyst agent can output <strong>tables, charts, and summaries</strong> grounded in the provided data.</li>
</ul>
<h4>Key exam facts</h4>
<ul>
  <li>Both Copilot and agents are <strong>permission-aware</strong> — they respect existing M365 permissions, Sensitivity Labels, and DLP policies.</li>
  <li>Agents can be <strong>discovered and invoked</strong> from within the Copilot Chat interface.</li>
  <li>Prebuilt agents (Researcher, Analyst) are free with a qualifying Copilot license but may have <strong>message limits</strong> under PAYG.</li>
  <li>Both Copilot and agents support <strong>web grounding</strong> (Bing search) as an optional toggle.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u5",
              unitTitle: "Compare Microsoft 365 Copilot licensing models",
              content: `
<h4>Licensing models overview</h4>
<table>
  <thead>
    <tr><th>Model</th><th>How it works</th><th>Best for</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Per-user (monthly)</strong></td><td>Predictable $30/user/month add-on license</td><td>High and predictable usage across many users</td></tr>
    <tr><td><strong>Pay-as-you-go (PAYG)</strong></td><td>Metered consumption billed through an Azure subscription</td><td>Variable, spiky, or pilot usage</td></tr>
    <tr><td><strong>Copilot Credit Packs</strong></td><td>Pre-paid Copilot Studio message bundles</td><td>Burst capacity for Copilot Studio agents</td></tr>
    <tr><td><strong>Copilot Chat (free)</strong></td><td>Web-grounded only; included with any M365 license</td><td>Users who need AI assistance but not work-data grounding</td></tr>
    <tr><td><strong>Copilot Chat (paid)</strong></td><td>Adds work-grounded answers via Microsoft Graph</td><td>Users who need work-data access but not full app integration</td></tr>
  </tbody>
</table>
<h4>Per-user licensing details</h4>
<ul>
  <li>Microsoft 365 Copilot add-on is approximately <strong>$30 USD per user per month</strong>.</li>
  <li>Requires a <strong>qualifying base license</strong> (M365 E3, E5, Business Standard, Business Premium, etc.).</li>
  <li>Per-user prerequisites: active <strong>Exchange Online mailbox</strong>, provisioned <strong>OneDrive for Business</strong>, and <strong>Microsoft Search</strong> healthy.</li>
  <li>Licenses assigned via M365 admin center → Billing → Licenses.</li>
  <li><strong>Group-based licensing</strong> supported for bulk assignment.</li>
</ul>
<h4>Pay-as-you-go (PAYG) billing</h4>
<ul>
  <li>Metered consumption billed through an <strong>Azure subscription</strong>.</li>
  <li>Available for <strong>Copilot Studio messages</strong> and <strong>SharePoint</strong> scenarios.</li>
  <li>The PAYG resource is <strong>hidden in Azure portal by default</strong> — admins must toggle "show hidden resources".</li>
  <li>Apply <strong>Azure budgets</strong>, <strong>cost alerts</strong>, and <strong>spend thresholds</strong> to control costs.</li>
  <li><strong>Cost analysis</strong> in Azure portal shows per-workload consumption.</li>
  <li>Switch users from PAYG to per-user licenses when usage becomes consistently high.</li>
  <li>Switch from PAYG to <strong>Credit Packs</strong> when usage is very spiky.</li>
</ul>
<h4>Copilot Credit Packs</h4>
<ul>
  <li>Pre-paid message bundles for Copilot Studio agents.</li>
  <li>Useful for <strong>burst capacity</strong> when agents experience heavy but short-lived demand.</li>
  <li>Available in different sizes; managed in the Azure portal.</li>
</ul>
<h4>Plan family considerations</h4>
<ul>
  <li><strong>M365 Business plans</strong> (Basic, Standard, Premium) — capped at <strong>300 users</strong>; lack <strong>Microsoft Purview</strong> and <strong>Insider Risk Management</strong>.</li>
  <li><strong>M365 E3</strong> — enterprise features, up to unlimited users; includes eDiscovery Standard.</li>
  <li><strong>M365 E5</strong> — highest tier; includes eDiscovery Premium, Defender for Office 365 Plan 2, full Purview suite, and advanced compliance features.</li>
  <li><strong>M365 E5 Compliance</strong> and <strong>E5 Security</strong> add-ons — stack on E3 for specific compliance or security capabilities.</li>
  <li><strong>Copilot Studio</strong> has separate licensing — either Credit Packs or PAYG; no per-user option.</li>
</ul>
<h4>Key exam facts</h4>
<ul>
  <li>The exam tests the distinction between <strong>Copilot Chat (free, web-only)</strong>, <strong>Copilot Chat (paid, work-grounded)</strong>, and <strong>M365 Copilot (full app integration)</strong>.</li>
  <li><strong>PAYG</strong> requires an <strong>Azure subscription</strong> — this is the only way to enable PAYG consumption.</li>
  <li>Business plan <strong>300-user cap</strong> is a frequent exam point.</li>
  <li>Choose <strong>per-user</strong> for predictable, high usage; <strong>PAYG</strong> for variable or pilot usage.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u6",
              unitTitle: "Plan and deploy Microsoft 365 Copilot and agents",
              content: `
<h4>Prerequisites and readiness checklist</h4>
<p>Before deploying Microsoft 365 Copilot and agents, organizations must ensure readiness across several domains. The exam tests your ability to identify missing prerequisites in scenario-based questions.</p>
<table>
  <thead>
    <tr><th>Domain</th><th>Checks</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Identity & access</strong></td><td>Entra ID healthy, Conditional Access policies in place, phishing-resistant MFA for admins, PIM configured for privileged roles</td></tr>
    <tr><td><strong>Content readiness</strong></td><td>Run oversharing reports, clean up broad "Anyone" links, apply Sensitivity Labels, review SharePoint permissions</td></tr>
    <tr><td><strong>Licensing</strong></td><td>Copilot licenses purchased and assigned, Power Platform or Azure subscription for PAYG, Credit Packs available if needed</td></tr>
    <tr><td><strong>Data security</strong></td><td>Purview DLP enabled, DSPM for AI activated, Customer Lockbox configured, Customer Key if required</td></tr>
    <tr><td><strong>Network</strong></td><td>Copilot endpoints reachable, no proxy blocks for required APIs, Microsoft 365 network connectivity optimized</td></tr>
    <tr><td><strong>Search</strong></td><td>Microsoft Search healthy and indexed, Semantic Index populated, SharePoint Search configured</td></tr>
    <tr><td><strong>Connectors</strong></td><td>Approve Graph connectors that should be available for grounding (ServiceNow, Confluence, Salesforce, etc.)</td></tr>
    <tr><td><strong>Change management</strong></td><td>User communications plan drafted, champion network identified, training schedule created, feedback channel established</td></tr>
  </tbody>
</table>
<h4>Phased rollout strategy</h4>
<ol>
  <li><strong>Pilot</strong> — start with 10–20 power users, IT team, and a single workload (e.g., Teams or Outlook). Enable Copilot via <strong>group-level settings</strong>, not tenant-wide.</li>
  <li><strong>Evaluate</strong> — use <strong>Copilot Analytics</strong>, <strong>Adoption Score</strong>, and user feedback surveys. Check for sensitive data exposure and oversharing in the pilot group. Review cost under PAYG.</li>
  <li><strong>Expand</strong> — roll out to broader business units. Add more workloads (Word, Excel, PowerPoint). Deploy prebuilt agents (Researcher, Analyst) and build custom agents for identified use cases.</li>
  <li><strong>Optimize</strong> — tune DLP policies based on observed usage. Retire blockers. Share best practices and prompt libraries. Reclaim underused licenses. Expand agent deployment.</li>
</ol>
<h4>Group-level vs tenant-level enablement</h4>
<ul>
  <li><strong>Tenant-level toggles</strong> are blunt — they enable or disable features for every user at once. Use only when you are ready for full deployment.</li>
  <li><strong>Group-level enablement</strong> is preferred for controlled rollouts — assign Copilot licenses to specific security groups, enable features for pilot groups first.</li>
  <li>In the M365 admin center, Copilot settings can be scoped to specific <strong>Entra ID groups</strong> for granular control.</li>
  <li>Per-app enablement can also be scoped to groups (e.g., enable Copilot in Teams for the Sales group but not Finance).</li>
</ul>
<h4>Pre-deployment content preparation</h4>
<ul>
  <li>Run <strong>Data Access Governance reports</strong> in SharePoint admin center to identify overshared sites and content.</li>
  <li>Apply <strong>Sensitivity Labels</strong> to sensitive content to prevent Copilot from using it in responses.</li>
  <li>Configure <strong>Restricted SharePoint Search</strong> (limit to up to 100 sites) to control Copilot's content scope during the pilot.</li>
  <li>Review <strong>external sharing settings</strong> and tighten where needed.</li>
  <li>Enable <strong>DSPM for AI</strong> to monitor Copilot activity from day one.</li>
</ul>
<h4>Key exam facts</h4>
<ul>
  <li><strong>Prerequisites:</strong> active Exchange Online mailbox + provisioned OneDrive + healthy Microsoft Search per user.</li>
  <li><strong>Phased rollout order:</strong> Pilot → Evaluate → Expand → Optimize (memorize this sequence).</li>
  <li><strong>Group-level settings</strong> are preferred for controlled rollouts — tenant-level is for full production.</li>
  <li>Adoption strategy must include: <strong>champion network</strong>, <strong>training</strong>, <strong>feedback channel</strong>, and <strong>executive sponsorship</strong>.</li>
  <li>Monitor sensitive data exposure during the evaluation phase using Purview DSPM for AI.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m4-u7",
              unitTitle: "Explore real-world use cases for Copilot and agents",
              content: `

<h4>Real-world use case categories</h4>
<p>Microsoft 365 Copilot and agents can be applied across every business function. The exam tests scenario-based understanding of which tool and approach fits a given business problem.</p>
<h4>Research and analysis use cases</h4>
<ul>
  <li><strong>Researcher agent</strong> — multi-step deep research across web and tenant data with citation generation. <em>Scenario:</em> A product manager needs a competitive landscape report with sources from internal files and industry websites. The Researcher agent compiles the report with citations in minutes.</li>
  <li><strong>Analyst agent</strong> — data analysis using Python-style reasoning on structured data (Excel, CSVs, tables). <em>Scenario:</em> A sales director uploads a quarterly sales spreadsheet and asks the Analyst agent to show revenue by region, highlight top performers, and forecast next quarter. The agent returns a summary table with trend analysis.</li>
</ul>
<h4>Human Resources use cases</h4>
<ul>
  <li><strong>HR FAQ agent</strong> (SharePoint agent) — answers employee questions grounded in the HR policy handbook stored in SharePoint. <em>Scenario:</em> An employee asks "How many sick days do I have?" The agent retrieves the answer from the HR policies document. Automatically inherits SharePoint permissions — only relevant employees can access sensitive policies.</li>
  <li><strong>Onboarding agent</strong> — automates new-hire setup. <em>Scenario:</em> When triggered by a new user creation event, the onboarding agent creates accounts, sends welcome emails, schedules orientation, and assigns training.</li>
</ul>
<h4>IT and support use cases</h4>
<ul>
  <li><strong>IT helpdesk agent</strong> — triages tickets and suggests known solutions from the IT knowledge base. <em>Scenario:</em> A user reports "My Outlook won't connect." The agent checks known issues, runs diagnostic steps, and either resolves or escalates with full context.</li>
  <li><strong>Customer service copilot</strong> — drafts replies grounded in the knowledge base and ticket history. <em>Scenario:</em> A support agent asks "What's our return policy for electronics?" Copilot drafts a response with the correct policy and links to supporting docs.</li>
</ul>
<h4>Sales and business development use cases</h4>
<ul>
  <li><strong>Sales deal-summary agent</strong> — pulls CRM data, email threads, and meeting notes into a one-page briefing. <em>Scenario:</em> Before a client meeting, a salesperson asks the agent to prepare a briefing on Acme Corp's open opportunities, recent communications, and next steps. The agent synthesizes data from Dynamics 365, Exchange, and Teams.</li>
  <li><strong>Project ask me anything agent</strong> — scoped to a single SharePoint project site. <em>Scenario:</em> A team member asks "What's our Q3 deliverable timeline?" The agent answers based solely on the project site content, respecting all site permissions.</li>
</ul>
<h4>How to choose the right approach</h4>
<table>
  <thead>
    <tr><th>If you need...</th><th>Choose...</th></tr>
  </thead>
  <tbody>
    <tr><td>Open-ended productivity across all M365 apps</td><td>Microsoft 365 Copilot</td></tr>
    <tr><td>Deep research with citations from web + work</td><td>Researcher agent (prebuilt)</td></tr>
    <tr><td>Structured data analysis and visualization</td><td>Analyst agent (prebuilt)</td></tr>
    <tr><td>FAQ-style Q&A from a single SharePoint site</td><td>SharePoint agent</td></tr>
    <tr><td>A custom business process with specific instructions and knowledge</td><td>Custom Copilot Studio agent</td></tr>
    <tr><td>Automated workflow without user interaction</td><td>Autonomous agent (Copilot Studio with trigger)</td></tr>
  </tbody>
</table>
<h4>Measuring success of use cases</h4>
<ul>
  <li><strong>Copilot Analytics</strong> — adoption rate, active users, top prompts, usage by workload.</li>
  <li><strong>Viva Insights</strong> — deeper workplace analytics including Copilot usage patterns.</li>
  <li><strong>Feedback surveys</strong> — user satisfaction, time saved, quality of responses.</li>
  <li><strong>Agent analytics</strong> in Copilot Studio — per-agent usage, success rate, escalation rate, session transcripts.</li>
  <li><strong>Start small</strong> — pick one high-impact, low-risk use case for the pilot, prove value, then expand.</li>
</ul>
<h4>Key exam facts</h4>
<ul>
  <li>The exam presents <strong>scenario-based questions</strong> asking "which agent or approach would you use?" — memorize the matching table above.</li>
  <li><strong>SharePoint agents</strong> are the fastest path to a working governed agent — no Copilot Studio required, permissions inherited automatically.</li>
  <li><strong>Prebuilt agents</strong> (Researcher, Analyst) require a qualifying Copilot license and are available from the Agent Store.</li>
  <li>Custom agents built in <strong>Copilot Studio</strong> can be published to <strong>M365 Copilot</strong>, <strong>Teams</strong>, or a <strong>custom website/channel</strong>.</li>
  <li>All agents honor existing <strong>Sensitivity Labels</strong>, <strong>DLP policies</strong>, and <strong>SharePoint permissions</strong>.</li>
</ul>


<h4>Responsible AI Principles for Copilot</h4>
<ul>
  <li><strong>Data minimization</strong> — Copilot only retrieves the data needed to answer the query, not the entire user mailbox or tenant.</li>
  <li><strong>Transparency</strong> — Copilot cites its sources (document names, URLs) so users can verify responses. If it cannot find information, it says so rather than inventing data.</li>
  <li><strong>Content filtering</strong> — Harmful, offensive, or inappropriate content is blocked at both input (prompt) and output (response) stages.</li>
  <li><strong>Accountability</strong> — All Copilot interactions are logged to Microsoft Purview Audit (Standard or Premium). Admins can review prompts, responses, and source documents for compliance.</li>
  <li><strong>Fairness &amp; reliability</strong> — LLM models are tested to reduce bias and produce grounded, factual responses based on tenant data (RAG).</li>
  <li><strong>No LLM training on tenant data</strong> — Your organization's data is never used to train or retrain the underlying AI models. Tenant data remains within your compliance boundary.</li>
</ul>
<h4>Broader Microsoft Responsible AI Principles</h4>
<ul>
  <li><strong>Fairness</strong> — AI systems should treat all people fairly, without bias.</li>
  <li><strong>Reliability and safety</strong> — Systems should perform reliably and refuse harmful content.</li>
  <li><strong>Security and privacy</strong> — Tenant data is never used to train LLMs; interactions are encrypted.</li>
  <li><strong>Inclusiveness</strong> — AI should empower everyone, across languages and abilities.</li>
  <li><strong>Transparency</strong> — Microsoft publishes how Copilot works; responses cite sources.</li>
  <li><strong>Accountability</strong> — Humans remain responsible for AI outputs; Purview Audit tracks all activity.</li>
</ul>
`,
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
              content: `
<h4>Module 4 Summary — Explore Microsoft 365 Copilot and Agents</h4>
<p>Module 4 introduced Microsoft 365 Copilot and agents. Key takeaways:</p>
<ul>
  <li><strong>Copilot architecture</strong>: prompt → orchestrator → Graph + Semantic Index (RAG) → LLM → content safety + groundedness → response. Permission-aware — uses the user's OAuth token. No LLM training on tenant data.</li>
  <li><strong>Three access tiers</strong>: Copilot Chat free (web-only), Copilot Chat paid (adds work-grounding), M365 Copilot (full app integration + $30/user/month).</li>
  <li><strong>Admin controls</strong>: web content toggle, plugin/connector controls, per-app enablement, per-user via license, per-content via Sensitivity Labels, DLP policies, Restricted SharePoint Search (100 sites).</li>
  <li><strong>Agents</strong>: specialized AI assistants scoped to a task/domain. Types: prebuilt (Researcher, Analyst, Writing Coach, Prompt Coach), custom (Copilot Studio), SharePoint agents (site-scoped, permissions inherited).</li>
  <li><strong>Copilot vs agents</strong>: Copilot is a general reactive assistant; agents can be autonomous, have custom knowledge sources (up to 20, 512 MB each), their own Entra Agent ID, and specific instructions/rules.</li>
  <li><strong>Licensing models</strong>: per-user (predictable, ~$30), PAYG (metered via Azure subscription), Credit Packs (pre-paid message bundles). Business plans capped at 300 users.</li>
  <li><strong>Deployment readiness</strong>: prerequisites (Exchange mailbox, OneDrive, healthy Search), phased rollout (Pilot → Evaluate → Expand → Optimize), group-level settings preferred over tenant-level toggles.</li>
  <li><strong>Real-world use cases</strong>: Researcher (market analysis), Analyst (data trends), HR FAQ (SharePoint agent), IT helpdesk (custom agent), Sales deal-summary (cross-data synthesis). Choose the approach based on scope, autonomy need, and data sources.</li>
</ul>
`,
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
              content: `
<h4>License Assignment Methods</h4>
<p>Copilot licenses are managed in the <strong>Microsoft 365 admin center</strong> under <strong>Billing → Licenses</strong>. You can assign licenses to individual users or use <strong>group-based licensing</strong> to assign via Entra ID security groups (membership cascades automatically).</p>
<h4>Prerequisites Per User</h4>
<p>Before a user can use Microsoft 365 Copilot, verify these prerequisites:</p>
<ul>
  <li><strong>Copilot license</strong> assigned to the user account</li>
  <li><strong>Active Exchange Online mailbox</strong> (required for email grounding)</li>
  <li><strong>OneDrive for Business provisioned</strong> (required for file grounding and storage)</li>
  <li><strong>Microsoft Search healthy</strong> (the search index must be built and functional)</li>
  <li>User must have a supported Microsoft 365 base license (E3, E5, Business Standard/Premium)</li>
</ul>
<h4>Per-User vs Pay-as-You-Go Licensing</h4>
<table>
  <thead>
    <tr><th>Model</th><th>Best for</th><th>Billing</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Per-user (monthly)</strong></td><td>Consistent, predictable usage</td><td>~$30 USD/user/month billed monthly</td></tr>
    <tr><td><strong>Pay-as-you-go (PAYG)</strong></td><td>Variable or pilot usage</td><td>Metered consumption via Azure subscription</td></tr>
    <tr><td><strong>Credit Packs</strong></td><td>Burst / spiky Copilot Studio usage</td><td>Pre-paid message bundles</td></tr>
  </tbody>
</table>
<h4>PAYG Configuration</h4>
<ul>
  <li>Navigate to <strong>Microsoft 365 admin center → Copilot → Billing & usage</strong> to select the Azure subscription for PAYG billing.</li>
  <li>The PAYG resource is hidden in the Azure portal by default — toggle <strong>"Show hidden"</strong> to see it.</li>
  <li>Apply <strong>Azure budgets</strong>, <strong>cost analysis</strong>, and <strong>spend thresholds</strong> to prevent runaway spending.</li>
  <li>Set up <strong>cost alerts</strong> that notify admins when usage approaches budget limits.</li>
</ul>
<h4>Exam Scenarios</h4>
<ul>
  <li>A pilot group of 15 users expects variable Copilot usage → assign PAYG via Azure subscription.</li>
  <li>An entire department of 200 users needs Copilot daily → assign per-user licenses for predictable cost.</li>
  <li>Audit licenses regularly to identify unassigned or underused Copilot seats → reassign to active users.</li>
  <li><strong>Business plans</strong> (Basic, Standard, Premium) are capped at <strong>300 users</strong> and lack Purview + Insider Risk Management.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u3",
              unitTitle: "Monitor and adjust pay-as-you-go Copilot usage",
              content: `
<h4>Monitoring PAYG Consumption</h4>
<p>Open the <strong>Microsoft 365 admin center → Copilot → Billing & usage</strong> dashboard to inspect metered consumption. This view breaks down usage by workload:</p>
<ul>
  <li><strong>Copilot Studio</strong> — agent message consumption</li>
  <li><strong>SharePoint</strong> — Copilot interactions grounded in SharePoint content</li>
  <li><strong>Microsoft 365 Copilot</strong> — general Copilot usage metering</li>
</ul>
<h4>Adjustment Strategies</h4>
<p>When metered consumption exceeds expectations, admins can adjust by:</p>
<ul>
  <li><strong>Switching users to per-user licenses</strong> — cost-effective when an individual's usage is consistently high and predictable.</li>
  <li><strong>Tightening DLP policies on connectors</strong> — reduces high-risk usage and associated costs.</li>
  <li><strong>Moving from PAYG to Credit Packs</strong> — pre-paid Copilot Studio message bundles for burst or spiky usage patterns.</li>
  <li><strong>Disabling specific Copilot features</strong> that drive cost:
    <ul>
      <li>Web content grounding (Bing search integration)</li>
      <li>Third-party plugins and Graph connectors</li>
      <li>Per-app Copilot toggles (e.g., disable in Excel for cost-sensitive workloads)</li>
    </ul>
  </li>
</ul>
<h4>Azure Cost Controls</h4>
<ul>
  <li><strong>Azure budgets</strong> — set monetary caps on the Copilot PAYG resource.</li>
  <li><strong>Cost alerts</strong> — notify admins at configurable thresholds (e.g., 50%, 80%, 100% of budget).</li>
  <li><strong>Cost analysis</strong> — drill into daily/hourly spend by meter category.</li>
  <li><strong>Budget actions</strong> — optionally trigger automation (e.g., disable Copilot for a group) when budget is exceeded.</li>
</ul>
<h4>Exam Scenarios</h4>
<ul>
  <li>A department's PAYG Copilot usage doubled in one month → inspect Billing & usage to identify which workload drove the increase.</li>
  <li>Users in the legal department should not use web-grounding in Copilot → disable web content access per group through Copilot settings.</li>
  <li>An organization wants to migrate from PAYG to per-user → identify high-usage users, convert them to per-user licenses, leave low-usage users on PAYG.</li>
  <li>Cost alerts at 80% and 100% of monthly Copilot budget → configure in Azure Cost Management for the Copilot PAYG resource.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u4",
              unitTitle: "Monitor Microsoft 365 Copilot usage and adoption",
              content: `
<h4>Admin Center Reports</h4>
<p>Three primary dashboards monitor Copilot usage and adoption across the tenant:</p>
<ul>
  <li><strong>Microsoft 365 admin center → Reports → Copilot dashboard</strong> — shows license utilization, active users, top prompts, and top apps used (Word, Excel, Outlook, Teams, etc.).</li>
  <li><strong>Copilot Analytics</strong> (under Reports) — deeper insights including adoption score trends, prompt quality metrics, and prompt-injection attempts surfaced by DSPM for AI.</li>
  <li><strong>Viva Insights → Copilot Analytics</strong> — workplace analytics view of Copilot usage, showing how Copilot affects meeting habits, email volume, and collaboration patterns.</li>
</ul>
<h4>Activity Explorer for AI Audit</h4>
<ul>
  <li><strong>Microsoft Purview → Activity Explorer</strong> — captures per-user AI activity on labeled content, including every Copilot action for audit trails.</li>
  <li>Filter by date range, user, sensitivity label, or activity type to investigate specific Copilot interactions.</li>
  <li>Core signal for DSPM for AI investigations and Insider Risk Management cases involving Copilot.</li>
</ul>
<h4>Adoption Strategy</h4>
<ul>
  <li><strong>Identify champions</strong> — power users who demonstrate effective Copilot usage and can coach peers.</li>
  <li><strong>Share prompt libraries</strong> — curate and distribute reusable prompts through Teams, SharePoint, or the admin-published prompt library.</li>
  <li><strong>Track department-level adoption</strong> — monitor which departments have the highest/lowest active usage and target training accordingly.</li>
  <li><strong>Run lunch-and-learns</strong> — informal training sessions demonstrating real-world Copilot workflows.</li>
  <li><strong>Feedback channel</strong> — collect user feedback via Forms or Teams channel and feed it back into Copilot Analytics for continuous improvement.</li>
</ul>
<h4>License Reclamation</h4>
<ul>
  <li>Use Copilot Analytics to identify users who have a Copilot license but <strong>low or zero activity</strong> over 30–60 days.</li>
  <li><strong>Reclaim underused licenses</strong> by unassigning from inactive users and reassigning to active users who don't yet have a license.</li>
  <li>This is a key operational best practice for controlling Copilot costs.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u5",
              unitTitle: "Manage and govern Microsoft 365 Copilot prompts",
              content: `
<h4>Prompt Lifecycle</h4>
<p>Prompts are the user's instruction to Copilot. Users can manage their own prompts through the Copilot chat interface, while admins can govern prompts at the tenant level.</p>
<ul>
  <li><strong>Saved</strong> — users bookmark useful prompts for reuse in the Copilot chat panel. Saved prompts are per-user and not visible to others by default.</li>
  <li><strong>Shared</strong> — users can share a prompt template with teammates via a link. Admins can publish shared prompt libraries tenant-wide through channels or SharePoint.</li>
  <li><strong>Scheduled</strong> — prompts can be configured to run on a schedule (e.g., a daily summary email or weekly status report). Requires a trigger configuration.</li>
  <li><strong>Deleted</strong> — users remove prompts from their personal library. Admins can delete user-level prompts in some workloads but cannot directly edit a user's saved prompts.</li>
</ul>
<h4>Admin Governance of Prompts</h4>
<ul>
  <li><strong>Admin-published shared prompt libraries</strong> — appear alongside user prompts in the Copilot interface; curated by admins for approved use cases.</li>
  <li><strong>DSPM for AI</strong> — monitors prompts for risky content, sensitive data leakage, and prompt-injection patterns. Captures Copilot interactions for the last 30 days.</li>
  <li><strong>DLP policies</strong> — can block Copilot from processing prompts that contain sensitive data (PII, financial, PHI).</li>
  <li><strong>Activity Explorer</strong> — provides the audit trail for all Copilot prompt and response activity.</li>
</ul>
<h4>Prompt Engineering Best Practices</h4>
<ul>
  <li><strong>Be specific</strong> — "Summarize the Q3 financial report in this SharePoint library" is better than "Summarize the report."</li>
  <li><strong>Provide context</strong> — include relevant documents, files, or people in the prompt.</li>
  <li><strong>Iterate</strong> — refine the prompt based on Copilot's responses; save effective versions.</li>
  <li><strong>Use system instructions</strong> — in agents, define tone, scope, rules, and guardrails in the Instructions field.</li>
</ul>
<h4>Exam Scenarios</h4>
<ul>
  <li>A user wants to reuse a complex prompt daily → save the prompt in the Copilot chat panel and optionally schedule it.</li>
  <li>An admin wants all sales users to have access to a "Weekly pipeline summary" prompt → publish it as an admin-shared prompt template.</li>
  <li>A prompt-injection attempt is detected → investigate via DSPM for AI and tighten DLP policies for Copilot.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m5-u6",
              unitTitle: "Apply operational best practices for Microsoft 365 Copilot",
              content: `
<h4>Troubleshooting Common Issues</h4>
<table>
  <thead>
    <tr><th>Symptom</th><th>Check</th><th>Resolution</th></tr>
  </thead>
  <tbody>
    <tr><td>User can't see Copilot</td><td>License assignment, app enablement, region rollout, Microsoft 365 app version</td><td>Assign license, enable per-app, update Office build</td></tr>
    <tr><td>Copilot returns no content</td><td>Graph permissions, Sensitivity Label encryption, Search index, restricted content discovery, restricted SharePoint Search</td><td>Fix permissions, remove restrictive labels, rebuild search index</td></tr>
    <tr><td>Slow responses</td><td>Tenant health, network egress, Microsoft 365 service health</td><td>Check service health dashboard, optimize network connectivity</td></tr>
    <tr><td>Copilot surfaces incorrect data</td><td>Broken permission inheritance, overshared links, stale content</td><td>Run DAG reports, tighten SharePoint sharing settings</td></tr>
  </tbody>
</table>
<h4>End-User Communication Plan</h4>
<ul>
  <li><strong>Pre-launch emails</strong> — "what to expect" with screenshots, example prompts, and training resources.</li>
  <li><strong>Champion network</strong> — identify early adopters who provide peer support and share best practices.</li>
  <li><strong>"Prompt of the week"</strong> communications via Teams, email, or Viva Connections.</li>
  <li><strong>Feedback channel</strong> — Forms survey or Teams channel that feeds insights back into Copilot Analytics for continuous improvement.</li>
</ul>
<h4>Ongoing Operational Excellence</h4>
<ul>
  <li><strong>Track Secure Score and Identity Secure Score</strong> trends — measure security posture improvements over time.</li>
  <li><strong>Run Attack Simulator phishing campaigns</strong> quarterly — test user awareness and measure improvement.</li>
  <li><strong>Review DLP and IRM alerts</strong> weekly — investigate and remediate data protection incidents.</li>
  <li><strong>Audit admin role assignments</strong> regularly using <strong>Access Reviews</strong> in Entra ID — remove unused or excessive admin roles.</li>
  <li><strong>Reclaim underused Copilot licenses</strong> — monitor Copilot Analytics for inactive licensed users and reassign seats.</li>
  <li><strong>Review DSPM for AI reports</strong> — identify shadow AI usage, risky prompts, and overshared data sources.</li>
</ul>
<h4>Change Management for Copilot</h4>
<ul>
  <li><strong>Pilot</strong> — start with 10–20 power users in a single workload.</li>
  <li><strong>Evaluate</strong> — measure adoption, satisfaction, and security impact before expanding.</li>
  <li><strong>Expand</strong> — roll out to broader business units and additional workloads.</li>
  <li><strong>Optimize</strong> — tune policies, retire blockers, share effective prompts, and iteratively improve the deployment.</li>
  <li><strong>Tenant-level toggles</strong> are blunt instruments — <strong>prefer group-level enablement</strong> for measured, controlled rollout.</li>
</ul>
`,
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
              content: `
<h4>Module 5 Summary — Basic Administrative Tasks for Copilot</h4>
<p>Module 5 covered the hands-on admin tasks for managing Microsoft 365 Copilot. Key takeaways:</p>
<ul>
  <li><strong>License management</strong>: assign per-user licenses or PAYG via Azure subscription. Prerequisites per user: Copilot license + active Exchange mailbox + provisioned OneDrive + healthy Microsoft Search. Group-based licensing scales bulk assignments.</li>
  <li><strong>PAYG monitoring</strong>: M365 admin center → Copilot → Billing & usage shows metered consumption by workload (Copilot Studio, SharePoint, M365 Copilot). Azure budgets, cost alerts, and spend thresholds control costs. Switch high-usage users to per-user licenses for predictable billing.</li>
  <li><strong>Usage and adoption monitoring</strong>: Copilot dashboard (license utilization, active users, top prompts), Copilot Analytics (adoption score, prompt quality), Viva Insights (workplace analytics). Reclaim underused licenses from inactive users.</li>
  <li><strong>Prompt governance</strong>: users can save, share, schedule, and delete prompts. Admins publish shared prompt libraries tenant-wide. DSPM for AI monitors prompts for risky content and prompt-injection (30-day retention). DLP policies can block Copilot from processing sensitive data.</li>
  <li><strong>Operational excellence</strong>: track Secure Score, run quarterly Attack Simulation, review DLP/IRM alerts weekly, audit admin roles via Access Reviews, monitor DSPM for AI reports.</li>
  <li><strong>Change management</strong>: Pilot → Evaluate → Expand → Optimize. Group-level enablement over tenant-level toggles. Champion network, training, feedback channels, and executive sponsorship.</li>
  <li><strong>Troubleshooting</strong>: user can't see Copilot (check license, app enablement, region, app version), Copilot returns no content (check permissions, labels, Search index, restricted content discovery), slow responses (check tenant health, network, service health).</li>
</ul>
`,
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
              content: `
<h4>Creating a Copilot Chat Agent — Prerequisites and Planning</h4>
<p>Before creating an agent, verify prerequisites: a <strong>Copilot Studio license</strong> (per-user or PAYG), appropriate <strong>Power Platform environment</strong>, and <strong>knowledge source permissions</strong>. Agents can be created through <strong>two paths</strong>: Copilot Studio (full-featured) or directly from Microsoft 365 Copilot Chat (lightweight).</p>
<h4>Path A: From Copilot Studio Step by Step</h4>
<ol>
  <li>Open <strong>https://copilotstudio.microsoft.com</strong> and sign in with admin credentials.</li>
  <li>Select <strong>Create → New agent</strong> or start from a <strong>template</strong> (pre-built agent blueprints).</li>
  <li><strong>Describe mode</strong> — enter a natural-language description: agent name, purpose, tone, target audience. Copilot Studio generates the initial configuration.</li>
  <li><strong>Configure mode</strong> — fine-tune every aspect:
    <ul>
      <li><strong>Icon, name, description</strong> — branding and discoverability.</li>
      <li><strong>Instructions and Rules</strong> — the system prompt defining tone, scope, hard guardrails (e.g., "never share financial data").</li>
      <li><strong>Knowledge sources</strong> — up to <strong>20 sources</strong> including public websites, SharePoint sites/libraries, Dataverse tables, Dynamics 365 data, Microsoft Fabric, and uploaded files (<strong>512 MB max per file</strong>).</li>
      <li><strong>Web access toggle</strong> — enable or disable Bing grounding for real-time web data.</li>
      <li><strong>Suggested prompts</strong> — pre-built starter questions displayed to users.</li>
      <li><strong>Actions / Tools</strong> — Power Automate flows the agent can invoke.</li>
      <li><strong>Topics</strong> — intents the agent recognizes with trigger phrases and conversation paths.</li>
      <li><strong>Authentication</strong> — Entra ID (tenant users), anonymous (public), or per-user.</li>
    </ul>
  </li>
  <li><strong>Test</strong> in the built-in test pane at any stage of configuration.</li>
  <li><strong>Publish</strong> to Microsoft 365 Copilot, Teams, a custom website, or as an autonomous agent.</li>
</ol>
<h4>Key Configuration Details</h4>
<ul>
  <li><strong>Instructions</strong> are the most critical governance control — they define what the agent can and cannot do.</li>
  <li><strong>Knowledge sources</strong> support full-text search, not just metadata; sources can be reordered by priority.</li>
  <li><strong>Templates</strong> reduce setup time for common scenarios (HR FAQ, IT helpdesk, project assistant).</li>
  <li><strong>Authentication</strong> determines who can invoke the agent: Entra ID respects user permissions, anonymous bypasses auth.</li>
  <li>The agent can be saved as a <strong>draft</strong> and published later; version history is tracked.</li>
</ul>
<h4>Exam-Relevant Limits</h4>
<table>
  <thead>
    <tr><th>Limit</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>Knowledge sources per agent</td><td><strong>20</strong></td></tr>
    <tr><td>Max file size per uploaded knowledge source</td><td><strong>512 MB</strong></td></tr>
    <tr><td>Authentication options</td><td>Entra ID, Anonymous, Per-user</td></tr>
    <tr><td>Publishing targets</td><td>M365 Copilot, Teams, Web, Autonomous</td></tr>
  </tbody>
</table>
<p><strong>Scenario</strong>: An HR manager wants an agent answering employee benefits questions. The admin creates the agent in Copilot Studio, adds the HR SharePoint site and a benefits PDF (under 512 MB) as knowledge sources, writes instructions to keep responses benefits-only, and publishes to M365 Copilot scoped to the HR security group.</p>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u3",
              unitTitle: "Create a Microsoft 365 Copilot Chat agent \u2014 Part 2",
              content: `
<h4>Path B: From Microsoft 365 Copilot Chat</h4>
<p>The lightweight creation path lets users build agents without leaving the Copilot Chat interface.</p>
<ol>
  <li>Open <strong>https://copilot.cloud.microsoft.com</strong> or the Copilot Chat surface in Teams/Outlook.</li>
  <li>Click the <strong>Create an agent</strong> entry point (may redirect to Copilot Studio inline).</li>
  <li>Walk through the same <strong>Describe/Configure</strong> flow within the Copilot Chat pane.</li>
  <li>Save as draft or publish directly to Microsoft 365 Copilot.</li>
</ol>
<ul>
  <li>This path is <strong>simpler but less configurable</strong> — suitable for quick agents with basic knowledge needs.</li>
  <li>Agents created here appear in <strong>Copilot Studio</strong> for further editing by admins.</li>
  <li>The agent inherits the <strong>user's permissions</strong> by default; admins can adjust sharing later.</li>
</ul>
<h4>Autonomous Agents</h4>
<ul>
  <li>Agents that <strong>execute without a user in the loop</strong> — triggered by events or schedules.</li>
  <li>Require a <strong>trigger configuration</strong>: email received, new file in SharePoint, Dataverse change, or a recurring schedule.</li>
  <li>Require a clear set of <strong>instructions</strong> defining the autonomous task scope and boundaries.</li>
  <li>Can be created in <strong>Copilot Studio</strong> with trigger configuration — not available in the lightweight Copilot Chat path.</li>
  <li><strong>Exam tip</strong>: Autonomous agents need a <strong>trigger</strong> (not just a prompt) and operate independently once activated.</li>
</ul>
<h4>Comparing Creation Paths</h4>
<table>
  <thead>
    <tr><th>Feature</th><th>Copilot Studio (Path A)</th><th>Copilot Chat (Path B)</th></tr>
  </thead>
  <tbody>
    <tr><td>Full Configure mode</td><td>Yes</td><td>Limited</td></tr>
    <tr><td>Autonomous triggers</td><td>Yes</td><td>No</td></tr>
    <tr><td>Power Automate actions</td><td>Yes</td><td>No</td></tr>
    <tr><td>Template support</td><td>Yes</td><td>No</td></tr>
    <tr><td>Topic editing</td><td>Yes</td><td>No</td></tr>
    <tr><td>Version history</td><td>Yes</td><td>Via Copilot Studio</td></tr>
  </tbody>
</table>
<h4>Content Safety and Groundedness</h4>
<ul>
  <li><strong>Content safety filters</strong> applied to both prompt and response — block harmful, offensive, or policy-violating content.</li>
  <li><strong>Groundedness detection</strong> flags responses not supported by retrieved knowledge — reduces hallucination risk.</li>
  <li>Both are automatically enabled for all agents and <strong>cannot be disabled</strong>.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u4",
              unitTitle: "Create a SharePoint agent",
              content: `
<h4>SharePoint Agents — Overview</h4>
<p>SharePoint agents are the <strong>fastest path</strong> to a working, governed agent. They require <strong>no Copilot Studio license</strong>, inherit SharePoint permissions automatically, and are scoped to a single site. This makes them ideal for project-specific or team-specific Q&A scenarios.</p>
<h4>Step-by-Step Creation</h4>
<ol>
  <li>Navigate to a <strong>SharePoint site</strong> (team or communication site).</li>
  <li>Click <strong>New → Agent</strong> or use the Copilot entry point in the site command bar.</li>
  <li>The agent is automatically <strong>scoped to that site</strong> — principle of least privilege built in.</li>
  <li>Choose <strong>data sources</strong>: files, pages, lists, and libraries within the site can be included or excluded.</li>
  <li><strong>Access permissions</strong> inherit from SharePoint — the agent can only surface content the signed-in user can access. No separate permission configuration needed.</li>
  <li>Set <strong>name</strong>, <strong>icon</strong>, and <strong>description</strong> for discoverability.</li>
  <li>Optionally add <strong>instructions</strong> to refine the agent's tone and scope.</li>
  <li><strong>Publish</strong> — the agent appears in SharePoint and in Microsoft 365 Copilot for authorized users.</li>
</ol>
<h4>Key Characteristics</h4>
<ul>
  <li><strong>No Copilot Studio required</strong> — created entirely within SharePoint.</li>
  <li><strong>Permission inheritance</strong> is automatic and cannot be bypassed — eliminates oversharing risk.</li>
  <li><strong>Site-scoped</strong> — the agent only knows about content in its host site. Cannot access other sites or tenant-wide data.</li>
  <li><strong>SharePoint permissions only</strong> — respects site-level, library-level, folder-level, and item-level permissions.</li>
  <li><strong>Sensitivity Labels</strong> are honored — encrypted content is only accessible to authorized users even through the agent.</li>
</ul>
<h4>When to Use SharePoint Agents vs Copilot Studio Agents</h4>
<table>
  <thead>
    <tr><th>Scenario</th><th>Recommended Approach</th></tr>
  </thead>
  <tbody>
    <tr><td>Single-project Q&A from a SharePoint site</td><td><strong>SharePoint agent</strong> — fastest, simplest</td></tr>
    <tr><td>Multi-site or cross-data-source knowledge</td><td><strong>Copilot Studio agent</strong> — up to 20 sources</td></tr>
    <tr><td>Autonomous, trigger-based operation</td><td><strong>Copilot Studio agent</strong></td></tr>
    <tr><td>Custom Power Automate actions needed</td><td><strong>Copilot Studio agent</strong></td></tr>
    <tr><td>Least-privilege, permissions-inherited agent</td><td><strong>SharePoint agent</strong> — automatic</td></tr>
  </tbody>
</table>
<h4>Exam-Relevant Details</h4>
<ul>
  <li>SharePoint agents are <strong>not listed in Copilot Studio</strong> — they are managed from the SharePoint site.</li>
  <li>SharePoint agents <strong>do not count toward</strong> Copilot Studio capacity or licensing.</li>
  <li><strong>Restricted content discovery</strong> settings on the site are honored — if a site opts out of Copilot grounding, its agent is also restricted.</li>
  <li>SharePoint agents can be <strong>deleted or unpublished</strong> from the site's settings panel.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u5",
              unitTitle: "Test and edit your agents",
              content: `
<h4>Testing Agents in Copilot Studio</h4>
<ul>
  <li><strong>Test pane</strong> — built-in chat panel in Copilot Studio where you send prompts and observe responses in real time.</li>
  <li><strong>Trace view</strong> — shows the full conversation transcript including reasoning steps, retrieved knowledge sources, tool/action invocations, and the system prompt. Critical for debugging unexpected responses.</li>
  <li><strong>User simulator</strong> — run <strong>scripted test scenarios</strong> against the agent to validate multi-turn conversations without manual input.</li>
  <li>Testing can be done at <strong>any stage</strong> — even before publishing, while the agent is still in draft.</li>
</ul>
<h4>Editing Agent Configuration</h4>
<h4>Topic Editing</h4>
<ul>
  <li><strong>Topics</strong> represent intents the agent recognizes — defined by trigger phrases and conversation paths.</li>
  <li>Add, edit, or remove trigger phrases to improve intent recognition.</li>
  <li>Adjust <strong>fallback behavior</strong> — what the agent says when it cannot match a user's intent.</li>
  <li><strong>Escalation rules</strong> — hand off to a human when the agent cannot resolve the query.</li>
</ul>
<h4>Knowledge Tuning</h4>
<ul>
  <li>Add or remove <strong>knowledge sources</strong> (up to 20 total).</li>
  <li>Set <strong>per-source priority</strong> — reorder sources so the most authoritative ones are consulted first.</li>
  <li>Filter knowledge by <strong>URL patterns</strong> — include or exclude specific paths within a SharePoint site.</li>
  <li>Update or replace <strong>uploaded files</strong> (up to 512 MB each).</li>
</ul>
<h4>Action Editing</h4>
<ul>
  <li>Modify <strong>Power Automate flow parameters</strong> that the agent calls.</li>
  <li>Configure <strong>error handling</strong> — what the agent says when an action fails.</li>
  <li>Update <strong>authentication</strong> for actions that call external APIs.</li>
</ul>
<h4>Instructions and Rules</h4>
<ul>
  <li>Refine the agent's <strong>system prompt</strong> to adjust tone, scope, and guardrails.</li>
  <li>Add <strong>hard rules</strong> — e.g., "Never disclose employee salaries" or "Always cite your sources."</li>
  <li><strong>Exam tip</strong>: Well-written instructions reduce the need for topic-based corrections.</li>
</ul>
<h4>Versioning and Rollback</h4>
<ul>
  <li>Copilot Studio maintains a <strong>version history</strong> of every published agent.</li>
  <li>You can <strong>revert</strong> to any previous version if an edit introduces problems.</li>
  <li>Each publish creates a new version; draft edits are not versioned until published.</li>
</ul>
<h4>Testing Best Practices</h4>
<ul>
  <li>Test with <strong>realistic user prompts</strong> — include edge cases, ambiguous phrasing, and out-of-scope requests.</li>
  <li>Use <strong>trace view</strong> to verify the correct knowledge sources are being retrieved.</li>
  <li>Run the <strong>user simulator</strong> with scripted scenarios before publishing to production.</li>
  <li>Test with <strong>different user roles</strong> — verify permission enforcement works correctly for viewers vs editors.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u6",
              unitTitle: "Manage user access and permissions for agents",
              content: `
<h4>Access Control Levels for Agents</h4>
<p>Agent access is managed at multiple administrative levels. Understanding which console to use for each scenario is critical for the exam.</p>
<h4>Tenant-Level Agent Settings</h4>
<ul>
  <li><strong>Microsoft 365 admin center → Settings → Copilot → Agents</strong> — tenant-wide toggle to enable or disable custom agents.</li>
  <li><strong>Power Platform admin center</strong> — environment-level controls for Copilot Studio agents, including DLP policies and environment security groups.</li>
  <li>Disabling at tenant level <strong>blocks all agents</strong> across the organization regardless of individual sharing settings.</li>
</ul>
<h4>Per-Agent Sharing (Copilot Studio)</h4>
<ul>
  <li>In <strong>Copilot Studio → Publish → Share</strong>, share a published agent with:
    <ul>
      <li><strong>Specific users or Entra ID groups</strong> — fine-grained access for pilot or departmental agents.</li>
      <li><strong>Everyone in the organization</strong> — publish to the M365 Copilot agent store for tenant-wide discovery.</li>
      <li><strong>External users</strong> — via public website embed, with optional authentication (anonymous or Entra ID B2B).</li>
    </ul>
  </li>
  <li><strong>Channel-by-channel sharing</strong> — separate sharing for Microsoft 365 Copilot, Teams, and web embed. You might share an agent in Teams but not in M365 Copilot.</li>
</ul>
<h4>Security Roles in Copilot Studio</h4>
<table>
  <thead>
    <tr><th>Role</th><th>Capabilities</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>User</strong></td><td>Can chat with the agent. No edit or share permissions.</td></tr>
    <tr><td><strong>Editor</strong></td><td>Can modify the agent but cannot publish or share.</td></tr>
    <tr><td><strong>Owner</strong></td><td>Full control — edit, publish, share, delete, transfer ownership.</td></tr>
  </tbody>
</table>
<h4>Scenario-Based Exam Questions</h4>
<ul>
  <li><strong>Scenario</strong>: Deploy an agent to the sales team only → share with the "Sales" Entra ID security group in Copilot Studio.</li>
  <li><strong>Scenario</strong>: Block all agents temporarily → disable agents tenant-wide in Microsoft 365 admin center → Settings → Copilot → Agents.</li>
  <li><strong>Scenario</strong>: Allow editors but prevent publishing → assign the Editor security role, not Owner.</li>
</ul>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u7",
              unitTitle: "Examine agent approval and governance",
              content: `
<h4>Agent Approval Workflows</h4>
<ul>
  <li><strong>Microsoft 365 admin center → Copilot → Agent inventory</strong> shows all agents with their status: Draft, Pending approval, Published, Disabled.</li>
  <li>Admins can configure an <strong>approval workflow</strong> requiring new agents to be approved before publishing tenant-wide.</li>
  <li><strong>Power Platform admin center → Agents</strong> shows Copilot Studio agents' distribution status and allows admin review.</li>
  <li>Approval workflows prevent unauthorized agents from reaching users — a key governance control for the exam.</li>
</ul>
<h4>Connector Classification and DLP</h4>
<ul>
  <li>Agents use <strong>connectors</strong> to access external services — SharePoint, Dataverse, Dynamics 365, public websites, custom APIs.</li>
  <li>When an agent uses a connector, the connector must be <strong>classified</strong>:
    <ul>
      <li><strong>Business</strong> — approved for use.</li>
      <li><strong>Non-business</strong> — permitted but not endorsed.</li>
      <li><strong>Blocked</strong> — prohibited entirely.</li>
    </ul>
  </li>
  <li><strong>DLP policies for connectors</strong> — block or allow connectors per Power Platform environment. An agent referencing a blocked connector will fail at runtime.</li>
  <li>Connector classification and DLP are configured in the <strong>Power Platform admin center</strong>.</li>
</ul>
<h4>Governance Policies</h4>
<table>
  <thead>
    <tr><th>Governance Tool</th><th>Where Configured</th><th>What It Controls</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>DLP for connectors</strong></td><td>Power Platform admin center</td><td>Which connectors agents can use per environment</td></tr>
    <tr><td><strong>Managed Environments</strong></td><td>Power Platform admin center</td><td>Who can create agents, data policies, usage monitoring</td></tr>
    <tr><td><strong>Agent Store curation</strong></td><td>M365 admin center</td><td>Which prebuilt agents are available to users</td></tr>
    <tr><td><strong>Sensitivity Labels</strong></td><td>Microsoft Purview</td><td>Label agent instructions/data with encryption/restrictions</td></tr>
    <tr><td><strong>Customer Lockbox</strong></td><td>M365 admin center</td><td>Require explicit tenant approval for Microsoft engineer access to agent data</td></tr>
    <tr><td><strong>Approval workflow</strong></td><td>M365 admin center</td><td>Require admin approval before agent publishing</td></tr>
  </tbody>
</table>
<h4>Prebuilt Agent Curation</h4>
<ul>
  <li>Microsoft provides prebuilt agents in the <strong>Agent Store</strong> (Researcher, Analyst, Writing Coach, Prompt Coach, etc.).</li>
  <li>Admins can <strong>curate the Agent Store</strong> — show, hide, or block specific prebuilt agents tenant-wide.</li>
  <li>This prevents users from accessing prebuilt agents that don't meet organizational compliance requirements.</li>
</ul>
<h4>Exam-Relevant Scenario</h4>
<p><strong>Scenario</strong>: A developer creates an agent using a new custom connector for an external CRM. The admin must first classify the connector as "Business" in the Power Platform admin center and ensure the DLP policy permits it. Only then can the agent proceed through the approval workflow and be published. If the connector is blocked, the agent will fail regardless of approval status.</p>
`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m6-u8",
              unitTitle: "Monitor and manage the agent lifecycle",
              content: `
<h4>Agent Lifecycle Stages</h4>
<ol>
  <li><strong>Draft</strong> — authoring in Copilot Studio or SharePoint; agent is not accessible to users.</li>
  <li><strong>Test</strong> — internal validation using the test pane, trace view, and user simulator.</li>
  <li><strong>Publish</strong> — make available to target audience via sharing settings and approval workflow.</li>
  <li><strong>Operate</strong> — live agent; monitor usage, errors, cost, user satisfaction, and security signals.</li>
  <li><strong>Retire</strong> — disable, archive, or delete the agent; revoke user access; export conversation logs if needed.</li>
</ol>
<h4>Monitoring Tools</h4>
<table>
  <thead>
    <tr><th>Tool</th><th>What It Shows</th><th>Access Path</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Agent inventory</strong></td><td>All agents, owner, usage stats, last activity, lifecycle status</td><td>M365 admin center → Copilot → Agent inventory</td></tr>
    <tr><td><strong>Copilot Studio analytics</strong></td><td>Per-agent: session count, success rate, escalation rate, average session duration, top topics</td><td>Copilot Studio → Analytics</td></tr>
    <tr><td><strong>Power Platform admin center</strong></td><td>Lifecycle (create/publish/disable/delete), environment-level operational insights</td><td>Power Platform admin center → Agents</td></tr>
    <tr><td><strong>DSPM for AI (Purview)</strong></td><td>Risky prompts, sensitive data exposure, prompt-injection incidents involving agents</td><td>Microsoft Purview → DSPM for AI</td></tr>
    <tr><td><strong>Activity Explorer (Purview)</strong></td><td>Per-user AI activity on labeled content — every Copilot and agent action audited</td><td>Microsoft Purview → Activity Explorer</td></tr>
  </tbody>
</table>
<h4>Managing Agent Health</h4>
<ul>
  <li><strong>Success rate</strong> — percentage of user queries the agent successfully resolved without escalation or error.</li>
  <li><strong>Escalation rate</strong> — how often users needed a human handoff; high escalation indicates knowledge gaps.</li>
  <li><strong>Session transcripts</strong> — review actual user conversations to identify patterns, misunderstandings, or policy violations.</li>
  <li><strong>Cost tracking</strong> — for PAYG agents, monitor metered consumption in the Azure portal (Copilot → Billing & usage).</li>
</ul>
<h4>Retirement Process</h4>
<ol>
  <li><strong>Disable</strong> the agent — prevents new conversations; existing sessions may continue briefly.</li>
  <li><strong>Notify users</strong> — communicate the retirement date and any replacement agent.</li>
  <li><strong>Export data</strong> — download conversation logs for compliance or audit retention.</li>
  <li><strong>Delete</strong> — permanently remove the agent and its configuration. Deletion is irreversible.</li>
  <li><strong>Revoke sharing</strong> — remove sharing links and channel assignments.</li>
</ol>
<h4>Operational Best Practices</h4>
<ul>
  <li>Review <strong>agent analytics weekly</strong> — identify low-success-rate agents for retraining.</li>
  <li>Use <strong>DSPM for AI</strong> to detect risky prompt patterns across all agents.</li>
  <li>Set up <strong>Azure cost alerts</strong> on the PAYG subscription used by agent metering.</li>
  <li><strong>Audit agent permissions quarterly</strong> — ensure only current team members have Owner/Editor roles.</li>
  <li>Maintain a <strong>retirement schedule</strong> for agents replaced by newer versions.</li>
</ul>
<h4>Exam-Relevant Limits and Details</h4>
<ul>
  <li>Agent analytics data retention in Copilot Studio: <strong>30 days</strong> for detailed session data.</li>
  <li>DSPM for AI captures the <strong>last 30 days</strong> of Copilot/agent interactions.</li>
  <li>Agent inventory in M365 admin center shows agents from <strong>all sources</strong> — Copilot Studio, SharePoint, prebuilt.</li>
  <li>Deleting a Power Platform environment <strong>also deletes all agents</strong> within it.</li>
</ul>
`,
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
              content: `
<h4>Module 6 Summary — Basic Administrative Tasks for Copilot Agents</h4>
<p>Module 6 covered creating, testing, managing, and governing agents. Key takeaways:</p>
<ul>
  <li><strong>Two creation paths</strong>: Copilot Studio (full-featured, templates, Describe/Configure modes, up to 20 knowledge sources, 512 MB per file, Power Automate actions, topics, authentication) and Copilot Chat (lightweight, less configurable, quick agents).</li>
  <li><strong>SharePoint agents</strong> are the fastest path to a governed agent — no Copilot Studio license needed, site-scoped, permissions inherited automatically, cannot access other sites.</li>
  <li><strong>Autonomous agents</strong> execute on triggers (events or schedules) without user intervention. Require trigger configuration and clear instructions. Only available in Copilot Studio, not the lightweight path.</li>
  <li><strong>Testing</strong>: test pane for real-time chat, trace view for conversation transcript + reasoning steps, user simulator for scripted scenarios. Version history supports rollback to any previous published version.</li>
  <li><strong>Access control</strong>: tenant-level toggle (M365 admin center → Settings → Copilot → Agents), per-agent sharing (specific users/groups, everyone, or external), Copilot Studio security roles (User, Editor, Owner). Power Platform admin center manages environments and DLP policies for connectors.</li>
  <li><strong>Agent approval workflow</strong>: admins can require approval before agents publish tenant-wide. Agent inventory shows all agents with lifecycle status (Draft, Pending approval, Published, Disabled).</li>
  <li><strong>Governance tools</strong>: DLP for connectors (Business/Non-business/Blocked classification per environment), Managed Environments, Sensitivity Labels on agent data, Customer Lockbox, Agent Store curation (show/hide prebuilt agents).</li>
  <li><strong>Agent lifecycle</strong>: Draft → Test → Publish → Operate → Retire. Monitoring via agent inventory (M365 admin center), Copilot Studio analytics (success rate, escalation rate, session transcripts), DSPM for AI (risky prompts), Activity Explorer (audit trail).</li>
  <li><strong>Retirement</strong>: disable → notify users → export data → delete (irreversible). Deleting a Power Platform environment also deletes all agents within it.</li>
</ul>
`,
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
  <li>Passkeys are <strong>phishing-resistant</strong> because they only work against the exact domain they were issued for and require <strong>physical proximity</strong> (Bluetooth or NFC) between the device with the passkey and the machine being authenticated.</li>
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
