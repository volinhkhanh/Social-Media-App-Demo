import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5),
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  profile: {
    display: "flex",
    alignItems: "center",
  },
  spacingLeft: {
    marginLeft: "15px",
  },
}));
