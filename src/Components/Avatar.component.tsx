import { Avatar } from "@fluentui/react-components";
import { GuestRegular } from "@fluentui/react-icons";

type Props = {
  name?: string;
  image?: string;
};

export function AvatarComponent({ name, image }: Props) {
  return name ? (
    <Avatar
      name={name}
      image={{
        src: `${image ?? ""}`,
      }}
    />
  ) : (
    <Avatar icon={<GuestRegular />} aria-label="Guest" />
  );
}
