export const site = {
  name: "AXIA",
  tagline: "Practical engineering. Clear decisions.",
  blurb: "Electrical and mechanical consulting for projects that need clear technical judgement.",
  email: "hello@axia.field",
} as const;

export const nav = [
  { to: "/approach", label: "Approach" },
  { to: "/services", label: "Services" },
  { to: "/sectors", label: "Sectors" },
  { to: "/about", label: "About" },
] as const;

export const services = [
  {
    slug: "power",
    title: "Power systems",
    kicker: "Electrical",
    summary:
      "Technical support for electrical systems, from the incoming supply to the final distribution board.",
    points: [
      "Load, short-circuit, and arc-flash studies",
      "MV/LV distribution, substations, UPS, and generators",
      "Protection coordination and relay settings",
      "Earthing, lightning, and power quality",
    ],
  },
  {
    slug: "plant",
    title: "Mechanical systems",
    kicker: "Mechanical",
    summary:
      "Design and review support for HVAC, process piping, and rotating equipment sized for the duty.",
    points: [
      "Central plant, process heat, and cooling",
      "Pumps, fans, compressors, and heat recovery",
      "Piping, vessels, and mechanical rooms",
      "Noise, vibration, and maintainability",
    ],
  },
  {
    slug: "controls",
    title: "Controls & digital",
    kicker: "Controls",
    summary:
      "Controls and instrumentation planning that connects plant design to reliable operation.",
    points: [
      "BMS, SCADA, and PLC architecture",
      "Cause-and-effect and sequence of operations",
      "Metering, energy dashboards, and alarms",
      "Cyber-aware network zoning for OT",
    ],
  },
  {
    slug: "commissioning",
    title: "Commissioning support",
    kicker: "Delivery",
    summary: "Independent technical support for test planning, commissioning, and handover.",
    points: [
      "FAT / SAT planning and witnessing",
      "Integrated systems testing",
      "Punch lists and technical close-out",
      "Operator-focused handover documents",
    ],
  },
  {
    slug: "energy",
    title: "Energy & carbon",
    kicker: "Strategy",
    summary:
      "Engineering options to improve energy performance, compared by cost, risk, and practicality.",
    points: [
      "Electrification and heat-pump options",
      "Heat recovery and waste-heat use",
      "Tariff, demand, and peak-shave studies",
      "Scope 1 and 2 reduction pathways",
    ],
  },
  {
    slug: "owners",
    title: "Owner-side engineering",
    kicker: "Oversight",
    summary:
      "Technical review and decision support for owners evaluating designs, bids, or project risks.",
    points: [
      "Peer review of design and calculations",
      "Tender documents and bid evaluation",
      "Construction-stage technical review",
      "Claims, variations, and close-out support",
    ],
  },
] as const;

export const sectors = [
  {
    slug: "data",
    title: "Data centres",
    copy: "Electrical resilience, cooling capacity, and maintainability planning.",
  },
  {
    slug: "power",
    title: "Power & utilities",
    copy: "Substations, generation auxiliaries, and grid connection studies.",
  },
  {
    slug: "making",
    title: "Manufacturing",
    copy: "Process power, drives, steam, and chilled water systems.",
  },
  {
    slug: "care",
    title: "Healthcare",
    copy: "Essential power, medical gases, and dependable building services.",
  },
  {
    slug: "water",
    title: "Water & process",
    copy: "Pumping stations, treatment systems, and hazardous-area electrics.",
  },
  {
    slug: "places",
    title: "Commercial buildings",
    copy: "Campuses, laboratories, and mixed-use buildings with complex plant.",
  },
] as const;

export const principles = [
  {
    title: "Clear scope",
    copy: "Agree the question, deliverables, assumptions, and decision points at the start.",
  },
  {
    title: "Practical advice",
    copy: "Connect calculations and technical options to the realities of cost, programme, and operation.",
  },
  {
    title: "Direct communication",
    copy: "Keep findings understandable, show the reasoning, and make uncertainties visible.",
  },
  {
    title: "Flexible support",
    copy: "Shape the engagement around the project stage and the help your team needs.",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Understand",
    copy: "Clarify the system, constraints, available information, and the decision to be made.",
  },
  {
    n: "02",
    title: "Agree the scope",
    copy: "Set deliverables, assumptions, responsibilities, and a practical programme together.",
  },
  {
    n: "03",
    title: "Do the engineering",
    copy: "Prepare or review calculations, options, drawings, and technical recommendations.",
  },
  {
    n: "04",
    title: "Support the decision",
    copy: "Explain findings and help the project team agree the next steps.",
  },
] as const;

export const serviceOptions = [
  "Power systems",
  "Mechanical systems",
  "Controls & digital",
  "Commissioning support",
  "Energy & carbon",
  "Owner-side engineering",
  "Not sure yet",
] as const;
