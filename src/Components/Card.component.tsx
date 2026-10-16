import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  makeStyles,
  mergeClasses,
  Body1,
  Caption1,
  Button,
  tokens,
} from "@fluentui/react-components";
import { AvatarComponent } from "./Avatar.component";
import * as React from "react";
import { CardProps } from "../Types";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
  },
  clickableCard: {
    cursor: "pointer",
    transitionDuration: "200ms",
    transitionProperty: "transform, box-shadow",
    transitionTimingFunction: "ease-in-out",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: tokens.shadow8,
    },
  },
});

export default function CardComponent({
  title,
  description,
  image,
  body,
  footer,
  onClick,
}: CardProps) {
  const styles = useStyles();

  const handleFooterButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card
      className={mergeClasses(styles.card, onClick && styles.clickableCard)}
      onClick={onClick}
    >
      <CardHeader
        image={<AvatarComponent name={title} image={image} />}
        header={
          <Body1>
            <b>{title}</b>
          </Body1>
        }
        description={<Caption1>{description}</Caption1>}
      />

      {body && (
        <CardPreview>
          <div>{body}</div>
        </CardPreview>
      )}

      {footer !== null && (
        <CardFooter onClick={handleFooterButtonClick}>
          {footer ?? (
            <>
              <Button onClick={handleFooterButtonClick}>Reply</Button>
              <Button onClick={handleFooterButtonClick}>Share</Button>
            </>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
