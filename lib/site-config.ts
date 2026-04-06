export const siteLinks = {
  email: "mailto:majidsafwaan2@gmail.com",
  github: "https://github.com/majidsafwaan2?tab=repositories",
  linkedin: "https://www.linkedin.com/in/safwaan-majid-481167372/",
  devpost: "https://devpost.com/safwaanmajid",
  nasaVasts:
    "https://drive.google.com/file/d/1JYlugf5mxDAOTUloBP18TyPI8iKeH5xo/view?usp=sharing",
  zooquestPdf:
    "https://drive.google.com/file/d/1mmkCFh7l0StcWNLargkvdJfnHnhFAOI6/view?usp=sharing",
  bricklabTiktok: "https://www.tiktok.com/@bricklabclips",
  shamAppStore:
    "https://apps.apple.com/us/app/sham-imposter-word-game/id6756511163",
  gymguardYoutube: "https://youtu.be/hXzEABiaidQ?si=zZgKK1vPkGqe7Hen",
} as const;

export type SiteLinkKey = keyof typeof siteLinks;
