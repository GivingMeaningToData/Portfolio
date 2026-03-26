/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   PORTFOLIO DATA — YOUR SINGLE SOURCE OF TRUTH          ║
 * ║   Edit this file only. Everything auto-updates.         ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * STRUCTURE:
 *   PERSONAL      → Hero, nav, footer, contact info
 *   ABOUT         → Bio paragraphs, traits, education, certs, languages
 *   METRICS       → The big impact numbers strip
 *   SKILLS        → Skill domains + individual skills + tools list
 *   EXPERIENCE    → Jobs (start/end dates auto-calculate years)
 *   PROJECTS      → Project cards (count auto-calculated)
 *   DIAGRAMS      → Visual work gallery with filter tags
 *   SOCIAL        → Footer + contact links
 */

const DATA = {

  /* ──────────────────────────────────────────
     PERSONAL INFO
  ────────────────────────────────────────── */
  personal: {
    name:         "Your Full Name",          // ← shows in nav, hero, footer
    initials:     "YN",                      // ← shown in avatar card until you add a photo
    title:        "Senior Business & Data Analyst",
    tagline:      "I transform messy data into clear strategy — bridging analytics, product, and operations to drive measurable growth.",
    location:     "Gurugram, India",
    available:    true,                      // ← true = green dot "Open to work"
    heroEyebrow:  "Open to opportunities",
    photo:        "",                        // ← add path like "assets/photo.jpg" to show your photo
    resumeLink:   "YOUR_RESUME.pdf",         // ← path or URL to your resume PDF
  },

  /* ──────────────────────────────────────────
     ROLE CHIPS shown under your name in Hero
  ────────────────────────────────────────── */
  roles: [
    { emoji: "📊", label: "Data Analyst" },
    { emoji: "🧩", label: "Business Analyst" },
    { emoji: "🚀", label: "Growth Strategist" },
    { emoji: "🛠",  label: "Product Thinker" },
    { emoji: "🏆", label: "Biz Excellence" },
  ],

  /* ──────────────────────────────────────────
     ABOUT — bio, traits, sidebar
  ────────────────────────────────────────── */
  about: {
    bio: [
      "Hi! I'm a <strong>multi-disciplinary analyst and strategist</strong> who lives at the intersection of data, product, and business. I believe the best insights don't just explain what happened — they tell you exactly what to do next.",
      "Over the years I've built analytics stacks from scratch, owned product roadmaps, led business excellence initiatives, and designed more process diagrams than I can count. I'm equally comfortable in a data warehouse and a boardroom.",
    ],
    traits: [
      { icon: "🎯", title: "Impact-Led",       desc: "Every query and dashboard tied to a real business outcome." },
      { icon: "🔍", title: "Deep Diver",        desc: "I surface insights others miss by going past the first layer." },
      { icon: "🤝", title: "Cross-Functional",  desc: "I speak fluent data, product, ops, and finance." },
      { icon: "📐", title: "Visual Thinker",    desc: "Complex problems simplified through clear diagrams & flows." },
    ],
    education: [
      { degree: "MBA — Marketing & Finance", school: "Your Business School", year: "2017 — 2019" },
      { degree: "B.Tech / B.Com / BA",       school: "Your University",      year: "2013 — 2017" },
    ],
    certifications: [
      { icon: "📊", name: "Google Data Analytics Professional" },
      { icon: "📈", name: "Power BI Data Analyst Associate" },
      { icon: "🐍", name: "Python for Data Science — Coursera" },
      { icon: "🏆", name: "Six Sigma Green Belt" },
    ],
    languages: [
      { name: "Hindi",   level: "Native" },
      { name: "English", level: "Fluent" },
    ],
  },

  /* ──────────────────────────────────────────
     METRICS STRIP
     tip: use strings like "₹2Cr+", "40%", "5+"
  ────────────────────────────────────────── */
  metrics: [
    { number: "5+",    label: "Years Experience" },
    { number: "₹2Cr+", label: "Business Impact"  },
    { number: "15+",   label: "Dashboards Built" },
    { number: "8+",    label: "Industries Covered"},
    // project count and experience years are auto-calculated separately
  ],

  /* ──────────────────────────────────────────
     SKILLS
  ────────────────────────────────────────── */
  skills: {
    domains: [
      {
        icon: "📊", title: "Data & Analytics",
        items: [
          { name: "SQL / BigQuery",      pct: 95 },
          { name: "Python · Pandas",     pct: 82 },
          { name: "Power BI / Tableau",  pct: 90 },
          { name: "Statistical Analysis",pct: 78 },
          { name: "Excel / Sheets",      pct: 98 },
        ]
      },
      {
        icon: "🚀", title: "Product & Growth",
        items: [
          { name: "Funnel Analytics",    pct: 93 },
          { name: "A/B Testing",         pct: 88 },
          { name: "Product Roadmapping", pct: 83 },
          { name: "Go-To-Market",        pct: 79 },
          { name: "User Research",       pct: 74 },
        ]
      },
      {
        icon: "🏆", title: "Business Excellence",
        items: [
          { name: "Process Optimization",pct: 91 },
          { name: "Stakeholder Mgmt",    pct: 95 },
          { name: "OKR / KPI Design",    pct: 87 },
          { name: "Six Sigma / Lean",    pct: 75 },
          { name: "Executive Reporting", pct: 92 },
        ]
      },
    ],
    tools: [
      "Power BI","Tableau","Google Analytics","Mixpanel","Amplitude",
      "Looker","dbt","Snowflake","Figma","draw.io","Miro","Jira",
      "Confluence","Notion","Salesforce","HubSpot","Airflow",
      "Metabase","Zapier","MS Office Suite",
    ],
  },

  /* ──────────────────────────────────────────
     EXPERIENCE
     • startDate / endDate: "YYYY-MM" format
     • endDate: null = "Present"
     • Total years of experience auto-calculated
       from the earliest startDate to today
  ────────────────────────────────────────── */
  experience: [
    {
      company:   "Your Current Company",
      role:      "Senior Business Analyst",
      startDate: "2023-01",
      endDate:   null,            // null = Present
      desc:      "Leading data strategy for a ₹500Cr+ product line. Built executive dashboards adopted across 3 BUs. Spearheaded A/B testing framework improving conversion 28% YoY. Partner with product, marketing and finance on OKR alignment.",
      wins:      ["↑ 28% Conversion", "15 Dashboards", "3 BUs Impacted"],
    },
    {
      company:   "Previous Company",
      role:      "Data Analyst & Growth",
      startDate: "2021-06",
      endDate:   "2022-12",
      desc:      "Owned growth analytics for a D2C startup. Built cohort analysis, retention models and LTV dashboards from scratch. Identified ₹80L revenue leakage through funnel deep-dive and resolved it in 6 weeks.",
      wins:      ["₹80L Recovered", "Retention +18%", "0→1 Stack Built"],
    },
    {
      company:   "First Company",
      role:      "Business Analyst",
      startDate: "2019-07",
      endDate:   "2021-05",
      desc:      "Joined as a fresh analyst and quickly owned key reporting for ops. Automated 12 manual reports saving 40+ hours/month. Built pricing models influencing go-to-market decisions.",
      wins:      ["40 hrs/mo Saved", "12 Automated", "Pricing Models"],
    },
  ],

  /* ──────────────────────────────────────────
     PROJECTS
     • Count auto-calculated from this array
     • featured: true = wide card (spans 2 cols)
     • link: "" = hides the CTA button
  ────────────────────────────────────────── */
  projects: [
    {
      category: "Growth Analytics",
      title:    "Revenue Leakage Detection Engine",
      desc:     "End-to-end funnel analysis using SQL + Python that automatically flags drop-off anomalies. Identified ₹1.2Cr in recoverable revenue within the first month of deployment.",
      tags:     ["Python","SQL","Power BI","Mixpanel"],
      impact:   "₹1.2Cr Impact · 4 Weeks",
      emoji:    "📈",
      gradient: "rgba(14,124,123,.12),rgba(10,37,64,.05)",
      link:     "#",
      featured: true,
    },
    {
      category: "Business Intelligence",
      title:    "Executive KPI Command Center",
      desc:     "Real-time Power BI suite for C-suite with 40+ KPIs, drill-downs and anomaly alerts. Replaced 6 manual weekly reports.",
      tags:     ["Power BI","DAX","SQL Server"],
      impact:   "6 Reports Automated",
      emoji:    "🎛",
      gradient: "rgba(10,37,64,.09),transparent",
      link:     "#",
      featured: false,
    },
    {
      category: "Experimentation",
      title:    "A/B Testing Framework",
      desc:     "Reusable framework enabling 10+ concurrent tests. Ran 30 experiments in one quarter, lifting checkout CVR by 22%.",
      tags:     ["Python","Stats","Amplitude"],
      impact:   "+22% CVR · 30 Tests",
      emoji:    "🧪",
      gradient: "rgba(14,124,123,.08),transparent",
      link:     "#",
      featured: false,
    },
    {
      category: "Predictive Analytics",
      title:    "Churn Predictor Model",
      desc:     "XGBoost churn prediction integrated into CRM to auto-flag at-risk customers. Reduced churn by 15% in 6 months.",
      tags:     ["Python","XGBoost","Salesforce"],
      impact:   "-15% Churn",
      emoji:    "🔮",
      gradient: "rgba(201,168,76,.10),transparent",
      link:     "#",
      featured: false,
    },
    {
      category: "Business Excellence",
      title:    "Process Redesign Initiative",
      desc:     "Cross-functional process mapping for 500-person ops team. Eliminated 18 redundant steps. Saved 200+ man-hours weekly.",
      tags:     ["Six Sigma","Lean","draw.io"],
      impact:   "200 hrs/week Saved",
      emoji:    "🏗",
      gradient: "rgba(14,124,123,.07),transparent",
      link:     "#",
      featured: false,
    },
  ],

  /* ──────────────────────────────────────────
     DIAGRAMS
     • type: "process" | "product" | "framework" | "data"
     • image: "" = shows emoji placeholder
     •         "assets/diagrams/flow.png" = shows your image
     • figmaLink / drawioLink: "" = hides that button
  ────────────────────────────────────────── */
  diagrams: [
    {
      type:       "process",
      typeLabel:  "Process Flow · draw.io",
      title:      "Customer Onboarding Flow",
      desc:       "End-to-end BPMN diagram mapping the customer onboarding journey across 6 touchpoints, with decision nodes, SLA timers, and handoff owners clearly marked.",
      emoji:      "🔄",
      image:      "",                         // ← "assets/diagrams/onboarding.png"
      drawioLink: "#",                        // ← your draw.io share link
      figmaLink:  "",
    },
    {
      type:       "product",
      typeLabel:  "Product Wireframe · Figma",
      title:      "Analytics Dashboard Wireframe",
      desc:       "Low-to-mid fidelity wireframe for an internal analytics dashboard. IA, navigation flow, and KPI card layout across desktop and mobile breakpoints.",
      emoji:      "🖥",
      image:      "",
      figmaLink:  "https://figma.com/your-link-here",  // ← your Figma link
      drawioLink: "",
    },
    {
      type:       "framework",
      typeLabel:  "Business Framework · draw.io",
      title:      "Growth Framework Canvas",
      desc:       "Custom AARRR canvas for a D2C brand combining acquisition, activation, retention, referral and revenue loops into one visual operating model.",
      emoji:      "🧩",
      image:      "",
      drawioLink: "#",
      figmaLink:  "",
    },
    {
      type:       "data",
      typeLabel:  "Data Architecture · draw.io",
      title:      "Data Pipeline Architecture",
      desc:       "End-to-end pipeline: 5-source ingestion → Snowflake via dbt → Power BI delivery layer. Includes data quality gates, alert mechanisms, and SLA monitoring.",
      emoji:      "🗄",
      image:      "",
      drawioLink: "#",
      figmaLink:  "",
    },
    {
      type:       "process",
      typeLabel:  "Process Flow · draw.io",
      title:      "Approval Workflow Redesign",
      desc:       "Before/after map of a 14-step manual approval workflow streamlined to 6 automated steps using Zapier + Notion, saving 200+ hours/month.",
      emoji:      "⚙️",
      image:      "",
      drawioLink: "#",
      figmaLink:  "",
    },
    {
      type:       "product",
      typeLabel:  "User Journey · Figma",
      title:      "SaaS User Journey Map",
      desc:       "8-stage journey map from awareness to advocacy. Includes emotion curve, pain points, opportunities, and owner mapping per touchpoint.",
      emoji:      "🗺",
      image:      "",
      figmaLink:  "https://figma.com/your-link-here",
      drawioLink: "",
    },
  ],

  /* ──────────────────────────────────────────
     SOCIAL / CONTACT
  ────────────────────────────────────────── */
  contact: {
    email:    "your@email.com",
    linkedin: "https://linkedin.com/in/yourhandle",
    github:   "https://github.com/yourusername",
    twitter:  "",                              // ← optional, leave "" to hide
    formspreeId: "",                           // ← add your Formspree form ID to enable email
    contactNote: "Whether you need a data strategist, product analyst, or someone who connects dots across the entire business — I'd love to have a conversation.",
  },

  /* ──────────────────────────────────────────
     MARQUEE — scrolling text strip
  ────────────────────────────────────────── */
  marquee: [
    "Data Analytics","Business Intelligence","Product Strategy",
    "Growth Experimentation","Process Excellence","Funnel Optimization",
    "KPI Design","A/B Testing","Stakeholder Mgmt","Executive Reporting",
  ],

};
