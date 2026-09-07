import { Avatar } from "@fluentui/react-components";

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
    <Avatar aria-label="Guest" />
  );
}
