import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {getAllAppts} from "../stateHandlers/actions";

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

class AptsView_ extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <CssBaseline />
        <div className={classes.root}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Typography variant="h4" gutterBottom component="h2">
              Appointments
            </Typography>
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Pet</TableCell>
                    <TableCell>Vet</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.appts.map(appt => {
                    return (
                      <TableRow key={appt.id}>
                        <TableCell component="th" scope="row">
                          {appt.pet.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {appt.vet.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {appt.startTime}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {appt.endTime}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getAllAppts();
  }

}

const mapStateToProps = state => {
  return {
    appts: state.appts,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllAppts: () => {
      dispatch(getAllAppts());
    }
  }
};

const AptsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AptsView_);

// export default App;
export default withStyles(styles)(AptsView);
