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

  onClickPets = () => {
    this.props.history.push('/pets');
  };

  onClickVets = () => {
    this.props.history.push('/vets');
  };

  onClickAppts = () => {
    this.props.history.push('/appts');
  };

  render() {
    console.log('this.props.location:',this.props.location);

    const purple = '#3f51b5';
    let petsBtnColor = purple;
    let vetsBtnColor = purple;
    let apptsBtnColor = purple;
    let petsColor = 'white';
    let vetsColor = 'white';
    let apptsColor = 'white';
    if(this.props.location.pathname==='/' || this.props.location.pathname==='/pets') {
      petsBtnColor = 'white';
      petsColor = purple;
    } else if(this.props.location.pathname==='/vets') {
      vetsBtnColor = 'white';
      vetsColor = purple;
    } else if(this.props.location.pathname==='/appts') {
      apptsBtnColor = 'white';
      apptsColor = purple;
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
            <Button style={{'backgroundColor':petsBtnColor, 'color':petsColor}} onClick={this.onClickPets.bind(this)}>Pets</Button>
            <Button style={{'backgroundColor':vetsBtnColor, 'color':vetsColor}} onClick={this.onClickVets.bind(this)}>Vets</Button>
            <Button style={{'backgroundColor':apptsBtnColor, 'color':apptsColor}} onClick={this.onClickAppts.bind(this)}>Appts</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

const NavBar = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar_));

// export default App;
export default withStyles(styles)(NavBar);
