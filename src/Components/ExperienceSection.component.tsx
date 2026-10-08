import {
  Badge,
  Card,
  Caption1,
  makeStyles,
  Text,
  Title2,
  tokens,
} from "@fluentui/react-components";
import {
  CalendarRegular,
  LocationRegular,
} from "@fluentui/react-icons";
import { IExperience } from "../Interfaces";

const useStyles = makeStyles({
  section: {
    margin: "0 auto",
    maxWidth: "900px",
    padding: "clamp(1rem, 3vw, 2rem) 0",
  },
  heading: {
    marginBottom: tokens.spacingVerticalL,
  },
  timeline: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    "::before": {
      backgroundColor: tokens.colorNeutralStroke2,
      content: '""',
      left: "9px",
      position: "absolute",
      top: "12px",
      bottom: "20px",
      width: "2px",
    },
    "::after": {
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: `8px solid ${tokens.colorBrandBackground}`,
      bottom: "12px",
      content: '""',
      left: "5px",
      position: "absolute",
    },
  },
  timelineItem: {
    alignItems: "start",
    columnGap: tokens.spacingHorizontalL,
    display: "grid",
    gridTemplateColumns: "20px minmax(0, 1fr)",
    paddingBottom: tokens.spacingVerticalL,
    position: "relative",
    "&:last-child": {
      paddingBottom: "36px",
    },
  },
  marker: {
    alignItems: "center",
    backgroundColor: tokens.colorBrandBackground,
    border: `4px solid ${tokens.colorNeutralBackground1}`,
    borderRadius: tokens.borderRadiusCircular,
    boxSizing: "content-box",
    display: "flex",
    height: "12px",
    justifyContent: "center",
    marginTop: "16px",
    width: "12px",
    zIndex: 1,
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    boxShadow: tokens.shadow4,
    minWidth: 0,
    padding: tokens.spacingVerticalL,
    transitionDuration: "160ms",
    transitionProperty: "box-shadow, transform",
    "&:hover": {
      boxShadow: tokens.shadow8,
      transform: "translateY(-2px)",
    },
    "@media (max-width: 480px)": {
      padding: tokens.spacingVerticalM,
    },
  },
  cardHeader: {
    alignItems: "flex-start",
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalM,
    justifyContent: "space-between",
  },
  titleGroup: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    minWidth: 0,
  },
  role: {
    color: tokens.colorNeutralForeground1,
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase500,
    margin: 0,
  },
  company: {
    color: tokens.colorNeutralForeground2,
    margin: 0,
  },
  metadata: {
    alignItems: "center",
    color: tokens.colorNeutralForeground3,
    display: "flex",
    flexWrap: "wrap",
    gap: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalL}`,
    marginTop: tokens.spacingVerticalM,
  },
  metadataItem: {
    alignItems: "center",
    columnGap: tokens.spacingHorizontalXS,
    display: "inline-flex",
  },
  description: {
    color: tokens.colorNeutralForeground2,
    display: "block",
    lineHeight: tokens.lineHeightBase300,
    marginTop: tokens.spacingVerticalM,
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalM,
  },
});

const ExperienceSection = ({
  experienceData,
}: {
  experienceData: IExperience[];
}) => {
  const styles = useStyles();

  return (
    <section aria-labelledby="experience-heading" className={styles.section}>
      <div className={styles.heading}>
        <Title2 as="h2" id="experience-heading">
          Experience
        </Title2>
      </div>
      <ol className={styles.timeline}>
        {experienceData.map((experience) => (
          <li className={styles.timelineItem} key={experience.id}>
            <span aria-hidden="true" className={styles.marker} />
            <Card appearance="outline" className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.titleGroup}>
                  <Text as="h3" className={styles.role}>
                    {experience.role}
                  </Text>
                  <Text
                    as="p"
                    className={styles.company}
                    weight="semibold"
                  >
                    {experience.company}
                  </Text>
                </div>
                <Badge
                  appearance="tint"
                  color="brand"
                  size="small"
                  shape="rounded"
                >
                  {experience.type}
                </Badge>
              </div>

              <div className={styles.metadata}>
                <Caption1 className={styles.metadataItem}>
                  <CalendarRegular aria-hidden="true" />
                  {experience.duration}
                </Caption1>
                <Caption1 className={styles.metadataItem}>
                  <LocationRegular aria-hidden="true" />
                  {experience.location}
                </Caption1>
                {experience.workModel && (
                  <Caption1>{experience.workModel}</Caption1>
                )}
              </div>

              {experience.description && (
                <Text as="p" className={styles.description}>
                  {experience.description}
                </Text>
              )}

              {experience.skills && experience.skills.length > 0 && (
                <div aria-label="Skills" className={styles.skills}>
                  {experience.skills.map((skill) => (
                    <Badge appearance="outline" key={skill} size="small">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;
