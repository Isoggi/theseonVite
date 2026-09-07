import {
  ArrowReplyRegular,
  NewsRegular,
  ShareRegular,
} from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  makeStyles,
  Body1,
  Caption1,
  Button,
  Avatar,
} from "@fluentui/react-components";
import { AvatarComponent } from "./Avatar.component";
type Props = {
  title?: string;
  description?: string;
  image?: string;
  body?: string;
};

const resolveAsset = (asset: string) => {
  const ASSET_URL = "/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "min(720px, 100%)",
    maxWidth: "100%",
  },
});

export default function CardComponent({
  title,
  description,
  image,
  body,
}: Props) {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        image={<AvatarComponent name={title} image={image} />}
        header={
          <Body1>
            <b>{title}</b>
          </Body1>
        }
        description={<Caption1>{description}</Caption1>}
      />

      <CardPreview
        logo={
          body ? (
            <img src={resolveAsset("placeholder.jpg")} alt="Body" />
          ) : (
            <Avatar icon={<NewsRegular />} aria-label="Document" />
          )
        }
      >
        {body ? (
          <div>{body}</div>
        ) : (
          <img src={resolveAsset("placeholder.jpg")} alt="Preview of body" />
        )}
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
}
