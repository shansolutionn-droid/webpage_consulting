export const site = {
  name: "ShanSolution India",
  tagline: "Product development. CAD design. FEA validation.",
  blurb: "Engineering support from first concept through CAD and FEA.",
  email: "rdsupport@shansolutionindia.com",
} as const;

export const nav = [
  { to: "/approach", label: "Approach" },
  { to: "/services", label: "Services" },
  { to: "/capabilities", label: "CAD & FEA" },
  { to: "/about", label: "About" },
] as const;

export const services = [
  {
    slug: "product-development",
    title: "End-to-end product development",
    kicker: "From concept to solution",
    summary:
      "Product development support from scratch to solution, shaped around your product requirements and project stage.",
    points: [
      "Support from the initial idea through design development",
      "Engineering input across successive product stages",
      "CAD and FEA activities connected to the development brief",
    ],
  },
  {
    slug: "2d-cad",
    title: "2D CAD drawing creation",
    kicker: "2D CAD",
    summary:
      "2D drawing creation to define product geometry and communicate design intent clearly.",
    points: [
      "2D CAD drawing creation from project requirements",
      "Drawing updates as designs develop",
      "Technical drawings prepared for engineering review",
    ],
  },
  {
    slug: "3d-modelling",
    title: "3D modelling",
    kicker: "3D CAD",
    summary:
      "3D modelling to develop, review, and communicate product designs through the development process.",
    points: [
      "3D part and assembly modelling",
      "Design development and model iterations",
      "CAD geometry prepared for engineering review",
    ],
  },
  {
    slug: "fea-validation",
    title: "FEA validation",
    kicker: "Finite element analysis",
    summary:
      "Finite element analysis to assess design response against agreed requirements and loading conditions.",
    points: [
      "FEA based on defined project inputs and conditions",
      "Review of design response under specified loads",
      "Engineering findings to inform validation and design decisions",
    ],
  },
] as const;

export const capabilities = services.slice(1);

export const principles = [
  {
    title: "Start with the brief",
    copy: "Clarify the product requirements, available information, and outputs needed for the next project decision.",
  },
  {
    title: "Develop to the scope",
    copy: "Shape product development and CAD work around the project stage and the engineering support required.",
  },
  {
    title: "Validate the design",
    copy: "Use FEA validation where it supports the agreed product requirements and design decisions.",
  },
  {
    title: "Share useful outputs",
    copy: "Provide clear drawings, models, and engineering findings for project review and follow-up.",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Understand the brief",
    copy: "Review the product, requirements, constraints, and information available at the start.",
  },
  {
    n: "02",
    title: "Agree the scope",
    copy: "Define the engineering tasks, expected outputs, and review points for the work.",
  },
  {
    n: "03",
    title: "Develop the design",
    copy: "Progress product development using 2D drawings and 3D models as the scope requires.",
  },
  {
    n: "04",
    title: "Validate and review",
    copy: "Use FEA where needed, then share findings to support the next product decision.",
  },
] as const;

export const serviceOptions = [
  "End-to-end product development",
  "2D CAD drawing creation",
  "3D modelling",
  "FEA validation",
  "Not sure yet",
] as const;
