// =========================
// Profile
// =========================

export interface Profile {
  name: string;
  role: string;

  headline: string;

  shortBio: string;
  fullBio: string;

  location: string;
  availability: string;

  avatar?: string;
  resume?: string;

  email: string;

   // NEW
  mission: string;
  missionTitle: string;
missionSubtitle: string;
mission1: string;
mission2: string;
mission3: string;
  degree: string;
mentor: string;
research: string;
focus: string;
technicalTitle: string;
technicalSubtitle: string;
  academicJourney: string;

academicJourneyTitle: string;
academicJourneySubtitle: string;
academicJourneyQuote: string;


}

// =========================
// Achievement
// =========================

export interface Achievement {
  id: string;
  title: string;
  description: string;
}




// =========================
// Education
// =========================

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

// =========================
// Experience
// =========================

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

// =========================
// Skill
// =========================

export interface Skill {
  id: string;
  category: string;
  name: string;
}

// =========================
// Project
// =========================

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
}



// =========================
// Certificate
// =========================

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

// =========================
// Social Links
// =========================

export interface Social {
  github?: string;
  linkedin?: string;
  email?: string;
  website?: string;
}

// =========================
// Portfolio
// =========================

export interface Portfolio {
  profile: Profile;

  education: Education[];
  experience: Experience[];

  skills: Skill[];

  projects: Project[];

  achievements: Achievement[];

  certificates: Certificate[];

  socials: Social;
}