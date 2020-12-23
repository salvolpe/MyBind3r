import { makeStyles } from "@material-ui/core";

const LoadingScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <img
        src="../assets/mybind3r_logo.png"
        alt="Logo: Stick figure reading binder with 3r on the inside"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    alignItems: "center",
  },
}));

export default LoadingScreen;
