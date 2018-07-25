import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MasterMapSampleData from "./master-map-sample-data.js";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import _ from "lodash";
import FilterPanel from "./filter-panel";

const styles = {
  flex: {
    flexGrow: 1
  },
  filterPanel: {
    top: 68,
    position: "relative"
  }
}

class MasterMapFilter extends React.Component {
  state = {
    sample: MasterMapSampleData(),
  };

  render() {
		//console.log(sample);
    const { classes, onClose, open } = this.props;
    const { sample } = this.state;

    return (
      
      <Dialog
        id="master-map-filter"
        open={open}
        onClose={onClose}
        fullScreen={true}
        scroll="paper"
      >

        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={onClose}
              aria-label="Close"
            >
              <BackIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Master Map Filters
            </Typography>
            <TextField
              value={this.state.filter}
              className={classes.textField}
              placeholder="Search"
              onChange={this.handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={
                      _.isEmpty(this.state.filter) ? classes.hidden : ""
                    }
                  >
                    <CloseIcon
                      onClick={this.handleCancelSearch}
                      fontSize="inherit"
                    />
                  </InputAdornment>
                )
              }}
            />
          </Toolbar>
        </AppBar>
        
        <div className={classes.filterPanel}>
          <FilterPanel data={sample.products} />
        </div>
      </Dialog>
    );
  };

};

MasterMapFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(MasterMapFilter);
