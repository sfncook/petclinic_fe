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
import {getAllVets} from "../stateHandlers/actions";

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

class VetsView_ extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <CssBaseline />
        <div className={classes.root}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Typography variant="h4" gutterBottom component="h2">
              Vets
            </Typography>
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.vets.map(vet => {
                    return (
                      <TableRow key={vet.id}>
                        <TableCell component="th" scope="row">
                          {vet.name}
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
    this.props.getAllVets();
  }

}

const mapStateToProps = state => {
  return {
    vets: state.vets,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVets: () => {
      dispatch(getAllVets());
    }
  }
};

const VetsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(VetsView_);

// export default App;
export default withStyles(styles)(VetsView);
