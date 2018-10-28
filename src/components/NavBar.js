import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class NavBar_ extends Component {

  render() {
    console.log('this.props.location:',this.props.location);

    const purple = '#3f51b5';
    let petsBtnColor = purple;
    let vetsBtnColor = purple;
    let petsColor = 'white';
    let vetsColor = 'white';
    if(this.props.location.pathname==='/' || this.props.location.pathname==='/pets') {
      petsBtnColor = 'white';
      petsColor = purple;
    } else if(this.props.location.pathname==='/vets') {
      vetsBtnColor = 'white';
      vetsColor = purple;
    }

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Pet Clinic
            </Typography>
            <Button style={{'backgroundColor':petsBtnColor, 'color':petsColor}}>Pets</Button>
            <Button style={{'backgroundColor':vetsBtnColor, 'color':vetsColor}}>Vets</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    view: state.view
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // getAllPets: () => {
    //   dispatch(getAllPets());
    // }
  }
};

const NavBar = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar_));

// export default App;
export default withStyles(styles)(NavBar);
