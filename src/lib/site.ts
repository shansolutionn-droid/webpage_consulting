export const site = {
  name: "ShanSolution India",
  tagline: "From engineering requirement to prototype.",
  blurb: "Engineering design & development",
  email: "rdsupport@shansolutionindia.com",
  addressLines: [
    "Sri Venkateswara Nagar,",
    "3rd Cross street,",
    "Kishikinta road,",
    "Old Perunglathur, Tambaram, Chennai-63",
  ],
} as const;

export const nav = [
  { to: "/approach", label: "Approach" },
  { to: "/services", label: "Services" },
  { to: "/capabilities", label: "CAD & FEA" },
  { to: "/about", label: "About" },
] as const;

export const services = [
  {
    slug: "concept-development",
    title: "Concept development",
    kicker: "From requirement to concept",
    summary:
      "We turn engineering requirements into practical mechanical concepts for detailed development.",
    points: [
      "Requirement analysis and functional understanding",
      "Concept generation and comparison",
      "Preliminary calculations and design feasibility",
      "Concept selection",
    ],
    outcome: "A technically feasible concept ready for detailed development.",
  },
  {
    slug: "3d-mechanical-design",
    title: "3D mechanical design",
    kicker: "Parts, assemblies & mechanisms",
    summary: "We develop 3D models and assemblies based on the selected concept.",
    points: [
      "Mechanical components, assemblies and mechanisms",
      "Sheet metal and structural components",
      "Fixtures, tooling and special-purpose equipment",
      "Design modifications and optimization",
    ],
    outcome: "A 3D engineering model representing the proposed solution.",
  },
  {
    slug: "2d-engineering-drawings",
    title: "2D engineering drawings",
    kicker: "Engineering documentation",
    summary:
      "We prepare detailed drawings from 3D designs for engineering review and manufacturing.",
    points: [
      "Part, assembly and fabrication drawings",
      "Manufacturing drawings and section views",
      "Dimensions, tolerances and engineering notes",
      "Bills of materials",
    ],
    outcome: "Structured engineering documentation for the next stage of execution.",
  },
  {
    slug: "fea-engineering-analysis",
    title: "FEA & engineering analysis",
    kicker: "Engineering verification",
    summary:
      "Where required, we use analysis to evaluate structural behaviour and inform design decisions.",
    points: [
      "Static structural, stress and deformation analysis",
      "Load analysis and factor of safety evaluation",
      "Engineering calculations and design verification support",
      "Results review to identify potential design improvements",
    ],
    outcome: "Analysis findings that support engineering decisions and design improvement.",
  },
  {
    slug: "prototype-development",
    title: "Prototype development",
    kicker: "From design to physical prototype",
    summary:
      "We support prototype development from the finalized engineering design through coordinated execution.",
    points: [
      "Preparation of the engineering design for prototyping",
      "Coordination of the defined prototype scope",
      "Review of practical implementation",
      "Design improvement based on prototype feedback",
    ],
    outcome: "A prototype stage that helps evaluate the solution before further development.",
  },
  {
    slug: "engineering-project-management",
    title: "Engineering project management",
    kicker: "One engineering interface",
    summary:
      "We coordinate engineering activities and specialized execution partners around the customer's requirements.",
    points: [
      "Project scope, technical requirements and schedule",
      "Design development and engineering communication",
      "Execution partners and project progress",
      "Deliverables aligned with the agreed scope",
    ],
    outcome: "A central engineering interface for projects involving multiple resources.",
  },
] as const;

export const capabilities = [services[1], services[2], services[3]] as const;

export const requirements = [
  "Application and functional requirements",
  "Operating conditions",
  "Loads and constraints",
  "Space limitations",
  "Material requirements",
  "Customer expectations and project timelines",
] as const;

export const reasons = [
  {
    title: "Engineering-focused approach",
    copy: "We understand the technical requirement before starting the design.",
  },
  {
    title: "End-to-end development",
    copy: "Concepts, 3D and 2D design, analysis and prototype support can be coordinated through one interface.",
  },
  {
    title: "Flexible technical resources",
    copy: "Specialized engineering resources can be brought in according to each project's scope.",
  },
  {
    title: "Practical engineering",
    copy: "Design work is developed with practical implementation in view.",
  },
  {
    title: "Project coordination",
    copy: "Customers can work through one engineering project interface across multiple resources.",
  },
  {
    title: "Scalable execution",
    copy: "The approach can scale with project complexity and development requirements.",
  },
] as const;

export const industries = [
  {
    title: "Wind energy",
    copy: "Mechanical solutions, tools, fixtures, structures and component handling solutions.",
  },
  {
    title: "Heavy engineering",
    copy: "Mechanical design, structural development and engineering analysis.",
  },
  {
    title: "Industrial machinery",
    copy: "Special-purpose machines, mechanisms, fixtures and tooling.",
  },
  {
    title: "Manufacturing",
    copy: "Design development, drawings, engineering analysis and prototype support.",
  },
  {
    title: "Automotive",
    copy: "Mechanical components, fixtures, tooling and prototype development.",
  },
  {
    title: "Industrial equipment",
    copy: "Mechanical engineering and product development support.",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Understand",
    copy: "Understand the requirement, application, operating conditions and project objectives.",
  },
  {
    n: "02",
    title: "Concept",
    copy: "Develop and evaluate suitable engineering concepts.",
  },
  {
    n: "03",
    title: "Design",
    copy: "Develop the selected concept into detailed 3D and 2D designs.",
  },
  {
    n: "04",
    title: "Analyse",
    copy: "Perform FEA and engineering calculations where required.",
  },
  {
    n: "05",
    title: "Develop",
    copy: "Prepare the engineering design for prototype development.",
  },
  {
    n: "06",
    title: "Prototype",
    copy: "Support prototype development through coordinated engineering execution.",
  },
  {
    n: "07",
    title: "Improve",
    copy: "Incorporate development feedback into the engineering design as needed.",
  },
] as const;

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Not sure yet",
] as const;
