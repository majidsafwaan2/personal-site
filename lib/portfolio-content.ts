import type { SiteLinkKey } from "./site-config";

export type ModalItem = {
  id: string;
  title: string;
  front: string;
  modalBody: string;
  linkLabel?: string;
  linkHref?: SiteLinkKey;
};

export type AwardItem = {
  id: string;
  title: string;
  front: string;
};

export const aboutNarrative =
  "Hi I'm Safwaan. I have been doing competitive robotics for the past 7 years and am driven by a mission to reduce dangerous manual labor through autonomous robotics, and hit Unreal in Fortnite.";

export const skillsSummary =
  "Python, C++, Java, JavaScript, SQL, HTML/CSS, Swift, Dart · Pandas, NumPy, SciPy, Plotly, Matplotlib · PyTorch, Hugging Face Transformers · Git/GitHub, Jupyter, Colab, Xcode, Mapbox GL · Fusion 360, SolidWorks · React, Node.js, Shopify Liquid";

/** Shown on load and for `cat intro.txt` — about narrative only (no stack). */
export function getIntroTerminalBody(): string {
  return aboutNarrative;
}

/** Contents of `skills.txt` in the terminal. */
export function getSkillsTerminalBody(): string {
  return `Technical stack\n${skillsSummary.split(" · ").join("\n")}`;
}

export const projects: ModalItem[] = [
  {
    id: "nasa-vasts",
    title: "NASA VASTS",
    front:
      "Authored technical reports for NASA missions regarding mission design constraints and aerospace engineering studies.",
    modalBody:
      "Selected for the Virginia Aerospace Science and Technology Scholars program to analyze NASA mission architectures. Developed engineering graphics and data visualizations to communicate complex systems concepts for the Lunar Gateway. All deliverables were aligned with NASA-standard documentation and peer-review processes.",
    linkLabel: "View final project",
    linkHref: "nasaVasts",
  },
  {
    id: "zooquest",
    title: "ZooQuest",
    front:
      "Developed AI-powered conservation technology currently integrating with Save the Elephants to improve NGO engagement.",
    modalBody:
      "Engineered an AI chatbot as a WordPress plugin using a self-trained Large Language Model (LLM) built with Hugging Face Transformers and PyTorch. The system is designed to increase website retention and donor likelihood for conservation NGOs. Currently pitching the deployment directly to Save the Elephants leadership.",
    linkLabel: "View proposal PDF",
    linkHref: "zooquestPdf",
  },
  {
    id: "bricklabclips",
    title: "BrickLabClips",
    front:
      "Built a TikTok account with 16M+ views and 24k followers teaching mechanical systems design through daily engineering content.",
    modalBody:
      "Scaled a digital engineering community and an open-source Lego-Technic library that attracts 4,000+ monthly visitors. Published over 100 technical articles teaching complex mechanical and systems design principles to a global audience.",
    linkLabel: "View TikTok",
    linkHref: "bricklabTiktok",
  },
  {
    id: "ecommerce",
    title: "E-commerce (Sprione)",
    front:
      "Created a D2C electronics brand and scaled it to $43,000 in total revenue.",
    modalBody:
      "Founded and managed direct-to-consumer brand Sprione, generating over $43,000 in total revenue. Developed custom Shopify Liquid themes and Python inventory scripts that reduced stock gaps by 30%. Managed end-to-end logistics and digital marketing funnels across TikTok and Meta platforms. The business ultimately had to shut down due to back-to-back supplier scams (hard constraint when you're fully bootstrapped).",
  },
  {
    id: "sham",
    title: "SHAM",
    front:
      "Published 'SHAM', a multiplayer 'Imposter' party game to the iOS App Store.",
    modalBody:
      "Designed and deployed a multiplayer mobile application using Swift, Dart, and Xcode. Implemented a lightweight locally hosted AI-powered category generation engine to create unique, dynamic word lists for users.",
    linkLabel: "View on App Store",
    linkHref: "shamAppStore",
  },
  {
    id: "gymguard",
    title: "GymGuard",
    front:
      "Developed an injury prevention tracking tool, submitted to the Congressional App Challenge.",
    modalBody:
      "Engineered an automated tracking system to monitor lifting form and prevent athletic injuries. Designed the platform to provide real-time feedback for weightlifters to optimize safety and performance.",
    linkLabel: "Watch demo",
    linkHref: "gymguardYoutube",
  },
];

export const awards: AwardItem[] = [
  {
    id: "stem-advocacy",
    title: "International STEM Advocacy Award",
    front:
      "Awarded the International STEM Advocacy Award, selected from 25,000+ teams worldwide.",
  },
  {
    id: "vex-state",
    title: "3× Virginia State Champion",
    front:
      "Led VEX Robotics Team 71999A to three consecutive Virginia State Championship titles.",
  },
  {
    id: "vex-create",
    title: "VEX Worlds Create Award",
    front:
      "Won the VEX Worlds Create Award for innovative engineering and design.",
  },
  {
    id: "jack-brown",
    title: "Jack Brown Award",
    front:
      "Winner of the Jack Brown Award at the Regional Science and Engineering Fair.",
  },
  {
    id: "air-quality",
    title: "Clean Air Partners — 1st Place",
    front:
      "Awarded 1st Place in the Clean Air Partners Air Quality and Climate Change Initiative.",
  },
  {
    id: "phoenix-hacks",
    title: "Phoenix Hacks 2024",
    front:
      "Won 1st Place and the Most Innovative Award at Phoenix Hacks 2024.",
  },
];
