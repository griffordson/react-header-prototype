import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";

const styles = {
  root: {
    flex: 1
  },
  button: {
    color: 'white',
    textTransform: 'none',
		paddingLeft: 8,
		paddingRight: 8
  }
};

class FpoFullMenu extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div ref='fullMenu' className={classes.root}>
        <Button className={classes.button}>
          Master Map
        </Button>
        <Button className={classes.button}>
          Jobs
        </Button>
        <Button className={classes.button}>
          Batches
        </Button>
        <Button className={classes.button}>
          Log Files
        </Button>
        <Button className={classes.button}>
          Growers
        </Button>
        <Button className={classes.button}>
          Tickets
        </Button>
        <Button className={classes.button}>
          Inventory
        </Button>
        <Button className={classes.button}>
          Reports
        </Button>
        <IconButton className={classes.button}>
          <SettingsIcon />
        </IconButton>
        <IconButton className={classes.button}>
          <HelpIcon />
        </IconButton>
      </div>
    );
  };
};

FpoFullMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FpoFullMenu);
