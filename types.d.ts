type Platform = "Twitter" | "LinkedIn" | "GitHub" | "Instagram" | string;

interface SocialLink {
  platform: Platform;
  _id: string;
  url: string;
}