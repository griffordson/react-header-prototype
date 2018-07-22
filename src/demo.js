import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Dialog from "@material-ui/core/Dialog";
import BackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import _ from "lodash";

const styles = {
  root: {
    flexGrow: 1,
    display: "none"
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginForm: {
    display: "none",
    content: ""
  },
  mainMenuList: {
    top: 64
  },
  itemButton: {
    textAlign: "left",
    textTransform: "none"
  },
  title: {
    content:
      'url("https://uploads.codesandbox.io/uploads/user/7ef743aa-8699-4c1e-b048-7e3e6e9942ee/Cgg0-FPO-WhiteNoTaglineCondensedTransparent.png")',
    height: 38
  },
  mainSearch: {
    color: "white"
  },
  textField: {
    width: 160
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    mainAnchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMainMenu = event => {
    this.setState({ mainAnchorEl: event.currentTarget });
  };

  handleMainClose = () => {
    this.setState({ mainAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, mainAnchorEl } = this.state;
    const open = Boolean(anchorEl);
    const mainOpen = Boolean(mainAnchorEl);

    return (
      <div className={classes.root}>
        <FormGroup className={classes.loginForm}>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleMainMenu}
              aria-owns={open ? "menu-appbar-main" : null}
            >
              <MenuIcon />
            </IconButton>
            <Dialog
              id="menu-appbar-main"
              open={mainOpen}
              onClose={this.handleMainClose}
              fullScreen={true}
              scroll="paper"
            >
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                    onClick={this.handleMainClose}
                    aria-label="Close"
                  >
                    <BackIcon />
                  </IconButton>
                  <Typography
                    variant="title"
                    color="inherit"
                    className={classes.flex}
                  >
                    Main Menu
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
              <List className={classes.mainMenuList}>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Master Map
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Jobs
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Batches
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Log Files
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Growers
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Tickets
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Summary
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Inventory
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Preferences
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Sensitive Areas
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Reports
                  </Button>
                </ListItem>
                <ListItem dense={true} onClick={this.handleMainClose}>
                  <Button size="medium" className={classes.itemButton}>
                    Help
                  </Button>
                </ListItem>
              </List>
            </Dialog>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              FPO
            </Typography>
            <div className={classes.flex} />
            {auth && (
              <div>
                <IconButton>
                  <SearchIcon className={classes.mainSearch} />
                </IconButton>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  getContentAnchorEl={null}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
