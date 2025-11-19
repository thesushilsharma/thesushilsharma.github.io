type Platform = "Twitter" | "LinkedIn" | "GitHub" | "Instagram" | string;

interface SocialLink {
  platform: Platform;
  icon: React.ComponentType<any>;
  _id: string;
  url: string;
}