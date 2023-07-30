import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "#000",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "14px",
    fontFamily: ["Castoro", "cursive"],
    fontWeight: 400,
    padding: "10px"
  },
  customArrow: {
    color: "#000",
    fontSize: 9
  }
}));

export const InfoToolTip = ({ text, component }) => {
  const classes = useStyles();
  return (
    <Tooltip
      title={text}
      placement={"top"}
      classes={{
        arrow: classes.customArrow,
        tooltip: classes.customTooltip
      }}
      arrow={true}
    >
      {component}
    </Tooltip>
  );
};
