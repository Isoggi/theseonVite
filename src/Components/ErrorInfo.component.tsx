import * as React from 'react';
import {
  Button,
  Link,
  Text,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowClockwise20Regular,
  ErrorCircle20Regular,
  PersonSupport20Regular,
  Wrench20Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: tokens.colorNeutralBackground2,
  },
  panel: {
    width: '100%',
    maxWidth: '760px',
    borderRadius: '16px',
    padding: '32px',
    background: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px',
  },
  iconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: tokens.colorPaletteRedBackground2,
    color: tokens.colorPaletteRedForeground1,
    flexShrink: 0,
  },
  title: {
    margin: 0,
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 600,
  },
  subtitle: {
    margin: '8px 0 0',
    color: tokens.colorNeutralForeground3,
  },
  sectionTitle: {
    margin: '24px 0 12px',
    fontWeight: 600,
  },
  checklist: {
    display: 'grid',
    gap: '8px',
    paddingLeft: '20px',
    color: tokens.colorNeutralForeground2,
    margin: 0,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '24px',
  },
  supportCard: {
    marginTop: '24px',
    padding: '16px 20px',
    borderRadius: '12px',
    background: tokens.colorNeutralBackground3,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
  },
  supportMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: tokens.colorNeutralForeground2,
  },
});

export const ErrorInfoComponent: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <div className={styles.iconWrap} aria-label="error icon">
            <ErrorCircle20Regular />
          </div>

          <div>
            <h1 className={styles.title}>We hit a snag</h1>
            <p className={styles.subtitle}>
              The page could not load correctly. Use the troubleshooting steps below to narrow down the issue.
            </p>
          </div>
        </div>

        <Text as="h2" size={400} weight="semibold" className={styles.sectionTitle}>
          Troubleshooting checklist
        </Text>

        <ul className={styles.checklist}>
          <li>Refresh the page and retry the action.</li>
          <li>Check your internet connection and confirm the service is available.</li>
          <li>Review the most recent changes or data you entered before the issue appeared.</li>
          <li>Try again in a few minutes if the problem is intermittent.</li>
        </ul>

        <div className={styles.actions}>
          <Button appearance="primary" icon={<ArrowClockwise20Regular />}>
            Try again
          </Button>
          <Button appearance="secondary" icon={<Wrench20Regular />}>
            Run diagnostics
          </Button>
        </div>

        <div className={styles.supportCard}>
          <div className={styles.supportMeta}>
            <PersonSupport20Regular />
            <Text as="span" size={300} weight="medium">
              Need help? Contact support for advanced troubleshooting.
            </Text>
          </div>
          <Link href="#support">Get support</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorInfoComponent;
