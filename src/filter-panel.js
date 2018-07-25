import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  root: {
  },
  flex: {
    flexGrow: 1
  },
}

class FilterPanel extends React.Component {
  state = {
    expanded: false
  };

  handleChange = (event, expanded) => {
    this.setState({
      expanded: expanded
    });
  };

  subHead = (expanded, classes) => {
    if(expanded) {
      return (
        <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
      );
    }
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded} onChange={this.handleChange}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>General settings</Typography>
            { this.subHead(expanded, classes) }
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  };
};

FilterPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(FilterPanel);
