import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  // Main container for the entire application, ensuring it takes full viewport height.
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8f8f8', // Light background for the page
    fontFamily: 'Inter, sans-serif', // Use Inter font as specified
  },
});

export default useStyles;