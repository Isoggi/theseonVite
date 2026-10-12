export interface IAvatarInfo {
  avatar: string;
  name: string;
  description?: string;
  location?: string;
  socialLinks?: {
    email?: string;
    github?: string;
    linkedin?: string;
    alternateEmail?: string;
  };
}
