const learningPaths = [
  {
    id: "lp1",
    title: "Explore Microsoft 365 administration",
    modules: [
      {
        id: "m1",
        title: "Explore M365 security foundations",
        units: [
          { id: "m1-u1", title: "Introduction" },
          { id: "m1-u2", title: "Analyze the Zero Trust security model" },
          { id: "m1-u3", title: "Implement Zero Trust in Microsoft 365" },
          { id: "m1-u4", title: "Examine threat protection and intelligence in Microsoft 365" },
          { id: "m1-u5", title: "Explore identity and authentication in Microsoft 365" },
          { id: "m1-u6", title: "Manage access and permissions in Microsoft 365" },
          { id: "m1-u7", title: "Explore identity and access management in Microsoft Entra" },
          { id: "m1-u8", title: "Troubleshoot and monitor identity security" },
          { id: "m1-u9", title: "Module assessment" },
          { id: "m1-u10", title: "Summary" },
        ]
      },
      {
        id: "m2",
        title: "Introduction to M365 core services and admin controls",
        units: [
          { id: "m2-u1", title: "Introduction" },
          { id: "m2-u2", title: "Explore the Microsoft 365 ecosystem and core service components" },
          { id: "m2-u3", title: "Explore the Microsoft 365 admin center and key admin tools" },
          { id: "m2-u4", title: "Examine Microsoft Exchange, Teams, and SharePoint" },
          { id: "m2-u5", title: "Establish security, identity, and compliance foundations" },
          { id: "m2-u6", title: "Assign admin roles using RBAC" },
          { id: "m2-u7", title: "Module assessment" },
          { id: "m2-u8", title: "Summary" },
        ]
      },
      {
        id: "m3",
        title: "Protect and govern Microsoft 365 data",
        units: [
          { id: "m3-u1", title: "Introduction" },
          { id: "m3-u2", title: "Introduction to Microsoft Purview and data governance" },
          { id: "m3-u3", title: "Identify and respond to data risks with Microsoft Purview" },
          { id: "m3-u4", title: "Examine compliance, AI data discovery, and eDiscovery" },
          { id: "m3-u5", title: "Explore oversharing and data access governance in SharePoint" },
          { id: "m3-u6", title: "Explore data protection in Microsoft 365 Copilot" },
          { id: "m3-u7", title: "Module assessment" },
          { id: "m3-u8", title: "Summary" },
        ]
      },
    ]
  },
  {
    id: "lp2",
    title: "Explore Microsoft 365 Copilot and Agent Administration",
    modules: [
      {
        id: "m4",
        title: "Explore Microsoft 365 Copilot and agents",
        units: [
          { id: "m4-u1", title: "Introduction" },
          { id: "m4-u2", title: "Introduction to Microsoft 365 Copilot" },
          { id: "m4-u3", title: "What are agents?" },
          { id: "m4-u4", title: "Compare Microsoft 365 Copilot and agents" },
          { id: "m4-u5", title: "Compare Microsoft 365 Copilot licensing models" },
          { id: "m4-u6", title: "Plan and deploy Microsoft 365 Copilot and agents" },
          { id: "m4-u7", title: "Explore real-world use cases for Copilot and agents" },
          { id: "m4-u8", title: "Module assessment" },
          { id: "m4-u9", title: "Summary" },
        ]
      },
      {
        id: "m5",
        title: "Perform basic administrative tasks for M365 Copilot",
        units: [
          { id: "m5-u1", title: "Introduction" },
          { id: "m5-u2", title: "Manage Copilot licenses and pay-as-you-go billing" },
          { id: "m5-u3", title: "Monitor and adjust pay-as-you-go Copilot usage" },
          { id: "m5-u4", title: "Monitor Microsoft 365 Copilot usage and adoption" },
          { id: "m5-u5", title: "Manage and govern Microsoft 365 Copilot prompts" },
          { id: "m5-u6", title: "Apply operational best practices for Microsoft 365 Copilot" },
          { id: "m5-u7", title: "Module assessment" },
          { id: "m5-u8", title: "Summary" },
        ]
      },
      {
        id: "m6",
        title: "Perform basic administrative tasks for M365 Copilot agents",
        units: [
          { id: "m6-u1", title: "Introduction" },
          { id: "m6-u2", title: "Create a Microsoft 365 Copilot Chat agent \u2014 Part 1" },
          { id: "m6-u3", title: "Create a Microsoft 365 Copilot Chat agent \u2014 Part 2" },
          { id: "m6-u4", title: "Create a SharePoint agent" },
          { id: "m6-u5", title: "Test and edit your agents" },
          { id: "m6-u6", title: "Manage user access and permissions for agents" },
          { id: "m6-u7", title: "Examine agent approval and governance" },
          { id: "m6-u8", title: "Monitor and manage the agent lifecycle" },
          { id: "m6-u9", title: "Module assessment" },
          { id: "m6-u10", title: "Summary" },
        ]
      },
    ]
  },
];

function findUnit(unitId) {
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      for (const unit of mod.units) {
        if (unit.id === unitId) return unit;
      }
    }
  }
  return null;
}

function getModule(moduleId) {
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      if (mod.id === moduleId) return mod;
    }
  }
  return null;
}

function getLearningPath(moduleId) {
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      if (mod.id === moduleId) return lp;
    }
  }
  return null;
}
