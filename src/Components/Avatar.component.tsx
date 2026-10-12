import { Avatar } from "@fluentui/react-components";
import { AvatarProps, AvatarSizes } from "../Types";

export function AvatarComponent({ name, image, size }: AvatarProps) {
  return name ? (
    <Avatar
      name={name}
      image={{ src: image || "", alt: name }}
      size={size || AvatarSizes.small}
      aria-label={name}
    />
  ) : (
    <Avatar aria-label="Guest" />
  );
}
