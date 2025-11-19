type Platform = "Twitter" | "LinkedIn" | "GitHub" | "Instagram" | string;

interface SocialLink {
  platform: Platform;
  icon: React.ComponentType<any>;
  _id: string;
  url: string;
}

interface TechItem {
  name: string;
  icon: React.ComponentType<any>;
  category: "frontend" | "backend" | "database" | "devops" | "cloud";
  description: string;
}