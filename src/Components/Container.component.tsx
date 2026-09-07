import useStyles from "../Styles/useStyles.styles";

const Container = (children: React.ReactNode) => {
  const styles = useStyles();
  return <div className={styles.container}>{children}</div>;
};
export default Container;
