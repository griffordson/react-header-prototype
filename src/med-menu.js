import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import compose from "recompose/compose";
import MapIcon from "@material-ui/icons/Map";
import PlaceIcon from "@material-ui/icons/Place";
import WorkIcon from "@material-ui/icons/Work";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flex: 1
  },
  iconButton: {
    color: 'white',
    textTransform: 'none',
		paddingLeft: 8,
		paddingRight: 8
  }
};

class FpoMedMenu extends React.Component {
	state = {
	};

  render() {
    const { classes, onMasterMap } = this.props;

    return (
      <div className={classes.root}>
        <IconButton className={classes.iconButton} onClick={onMasterMap}>
          <MapIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <PlaceIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <WorkIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <MenuIcon />
        </IconButton>
      </div>
    );
  };
};

FpoMedMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onMasterMap: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
)(FpoMedMenu);
