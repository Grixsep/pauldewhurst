// Each image has a src and an optional focusX/focusY for background-position on cards
export interface ProjectImage {
  src: string;
  focus?: string; // CSS background-position value, e.g. "center", "top", "right"
}

export const PROJECTS = [
  {
    slug: "paacs",
    title: "PAACS Software",
    cat: "sw",
    status: "Active" as const,
    tagline: "Modular multiphysics simulation platform",
    short:
      "C++ desktop simulation app with ImGui and OpenCASCADE, paired with a Next.js web platform. A personal side project.",
    detail:
      "PAACS (Physics Assistant for Advanced Computational Simulation) is a personal side project building a modular multiphysics simulation platform from scratch. The desktop application is written in C++ and uses ImGui for the interface layer and OpenCASCADE for CAD geometry handling, with SFML/OpenGL for rendering. The architecture is designed around interchangeable physics solvers — structural, fluid, and electromagnetic modules — sharing a common geometry and mesh pipeline. The companion web platform is built with Next.js and Supabase, handling user account management, licensing, and secure backend logic via Supabase Edge Functions.",
    link: "https://paacs.pro",
    linkLabel: "paacs.pro",
    tools: [
      "C++",
      "ImGui",
      "OpenCASCADE",
      "CMake",
      "Next.js",
      "Supabase",
      "OpenGL",
    ],
    images: [
      { src: "/images/portfolio/Recording website best.gif", focus: "top" },
      { src: "/images/portfolio/PAACS-early-screenshot.png", focus: "top" },
      { src: "/images/portfolio/Logo_page-00030.png", focus: "center" },
    ] as ProjectImage[],
  },
  {
    slug: "meng-levitation",
    title: "Electromagnetic Levitation System",
    cat: "sim",
    status: "Published" as const,
    tagline: "MEng thesis — reluctance networks and FEA in FEMM",
    short:
      "Full electromagnetic levitation system design and analysis for MEng thesis, including reluctance network modelling. Published in the Edinburgh Research Archive.",
    detail:
      "MEng thesis project at the University of Edinburgh investigating the design of a levitation system for a Hyperloop pod. Serving as Project Manager for a team of three, the work combined analytical reluctance network modelling to characterise the magnetic circuit with finite element analysis in FEMM to validate force predictions and optimise power efficiency. Multiple geometric configurations were compared to determine the best balance of levitation force and stability during travel. The complete thesis including methodology, results, and conclusions is published open-access in the Edinburgh Research Archive.",
    link: "https://era.ed.ac.uk/handle/1842/42594",
    linkLabel: "Edinburgh Research Archive",
    tools: ["FEMM", "MATLAB", "Python", "LaTeX"],
    images: [
      { src: "/images/portfolio/portfolio-10.gif", focus: "center" },
      { src: "/images/portfolio/reluctance-network.png", focus: "center" },
      { src: "/images/portfolio/thesis-snip.png", focus: "top" },
    ] as ProjectImage[],
  },
  {
    slug: "cfd-gas-dispersion",
    title: "CFD Gas Dispersion Study",
    cat: "cfd",
    status: "Complete" as const,
    tagline: "StarCCM+ simulation on university HPC cluster",
    short:
      "Chlorine gas dispersion across a university campus modelled in StarCCM+, run on the university HPC cluster.",
    detail:
      "Computational fluid dynamics study of chlorine gas dispersion across a university campus, simulating a release event and tracking gas behaviour over time. The simulation domain was built and meshed in StarCCM+ and run on the university high-performance computing cluster. Environmental factors including wind speed and direction were accounted for in the solver setup. Post-processing produced concentration field visualisations, with methodology, solver choices, and results documented in a comprehensive report.",
    link: undefined,
    linkLabel: undefined,
    tools: ["StarCCM+", "Python", "Linux HPC"],
    images: [
      { src: "/images/portfolio/portfolio-2.gif", focus: "center" },
      { src: "/images/portfolio/portfolio-5.jpg", focus: "center" },
      { src: "/images/portfolio/portfolio-9.jpg", focus: "center" },
    ] as ProjectImage[],
  },
  {
    slug: "formula-student",
    title: "Formula Student CAD",
    cat: "eng",
    status: "Complete" as const,
    tagline: "Structural components with FEA validation",
    short:
      "Structural component design for the university Formula Student vehicle, with ANSYS FEA validation and 3D-printed prototypes.",
    detail:
      "Structural component design for the University of Edinburgh Formula Student team. Starting from a clean-sheet design brief, components were modelled in SolidWorks and validated using ANSYS FEA to confirm safety margins under simulated load cases. Rapid prototypes were produced via 3D printing for fitment and clearance checks before handoff for final manufacture.",
    link: undefined,
    linkLabel: undefined,
    tools: ["SolidWorks", "ANSYS", "3D Printing"],
    images: [
      { src: "/images/portfolio/portfolio-1.jpg", focus: "center" },
      { src: "/images/portfolio/portfolio-3.jpg", focus: "center" },
      { src: "/images/portfolio/portfolio-6.jpg", focus: "center" },
    ] as ProjectImage[],
  },
  {
    slug: "water-cooled-pc",
    title: "Custom Water-Cooled PC",
    cat: "hw",
    status: "Complete" as const,
    tagline: "Hardline custom water cooling loop",
    short:
      "Custom hardline water cooling loop build, from loop planning and component selection through to the finished system.",
    detail:
      "A fully custom hardline water cooling loop build. The project covered hardware compatibility planning, radiator and pump sizing, component selection, and loop layout design. Hardline PETG tubing was shaped using a heat gun to achieve clean bends and a tidy final layout. The finished system routes coolant through CPU and GPU blocks via a dual-radiator setup, combining efficient thermal performance with a clean aesthetic.",
    link: undefined,
    linkLabel: undefined,
    tools: ["Custom Hardline Loop", "PETG Tubing"],
    images: [
      { src: "/images/portfolio/portfolio-4.jpg", focus: "center" },
      { src: "/images/portfolio/PC-build.jpg", focus: "center" },
    ] as ProjectImage[],
  },
];

export type Project = (typeof PROJECTS)[number];

export const STATUS_CLASS: Record<string, string> = {
  Active: "st-active",
  Published: "st-published",
  Complete: "st-complete",
};
