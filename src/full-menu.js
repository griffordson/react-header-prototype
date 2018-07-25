import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import compose from "recompose/compose";
import MapIcon from "@material-ui/icons/Map";
import PlaceIcon from "@material-ui/icons/Place";
import WorkIcon from "@material-ui/icons/Work";

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
	state = {
	};

  buttonContent = (label, width, content) => {
    if(isWidthDown("md", width)) {
      return content;
    }
    else {
      return label;
    }
  };

  render() {
    const {classes, onMasterMap, width} = this.props;

    return (
      <div className={classes.root}>
        <Button className={classes.button} onClick={onMasterMap}>
      {this.buttonContent("Master Map", width, 
        <MapIcon>
        </MapIcon>
      )}
        </Button>
        <Button className={classes.button}>
      {this.buttonContent("Jobs", width, 
        <PlaceIcon>
        </PlaceIcon>
      )}
        </Button>
        <Button className={classes.button}>
      {this.buttonContent("Batches", width, 
        <WorkIcon>
        </WorkIcon>
      )}
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
  classes: PropTypes.object.isRequired,
  onMasterMap: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

// export default withStyles(styles)(FpoFullMenu);
export default compose(
  withWidth(),
  withStyles(styles),
)(FpoFullMenu);
