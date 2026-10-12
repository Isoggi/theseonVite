export type AppThemeProps = {
  themeMode: "light" | "dark";
  onThemeToggle?: () => void;
};

export type AvatarProps = {
  name?: string;
  image?: string;
  size?: AvatarSizes;
};

export enum AvatarSizes {
  small = 24,
  medium = 32,
  large = 48,
  xlarge = 64,
  landingpage = 128,
}
