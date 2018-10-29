import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { createNewAppt, saveAppt, deleteAppt } from "../stateHandlers/actions";
import ApptRow from './ApptRow';

const purple = '#3f51b5';

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

class ApptsView_ extends Component {

  onClickAddNewAppt = () => {
    this.setState({creatingNewAppt:true});
  };
  handleSave = (appt) => {
    this.setState({creatingNewAppt:false});
    this.props.saveAppt(appt);
  };
  handleCancel = () => {
    this.setState({creatingNewAppt:false});
  };
  handleCreateNew = (appt) => {
    this.setState({creatingNewAppt:false});
    this.props.createNewAppt(appt);
  };
  handleDelete = (appt) => {
    this.props.deleteAppt(appt);
  };

  constructor(props) {
    super(props);
    this.state = {
      creatingNewAppt: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreateNew = this.handleCreateNew.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    const { classes } = this.props;

    let apptRows = this.props.appts.map(appt => {
      return (
        <ApptRow
          key={appt.id}
          appt={appt}
          createNewRow={false}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          handleDelete={this.handleDelete}
          pets={this.props.pets}
          vets={this.props.vets}
        />
      );
    });

    if(this.state.creatingNewAppt) {
      apptRows.push(
        <ApptRow
          key={'createNewApptRow'}
          appt={{pet:{id:0,name:''},vet:{id:0,name:''},startTime:"29-10-2018 12:00:00",endTime:"29-10-2018 12:00:00"}}
          createNewRow={true}
          handleSave={this.handleCreateNew}
          handleCancel={this.handleCancel}
          pets={this.props.pets}
          vets={this.props.vets}
        />
      );
    }

    return (
      <div className="App">
        <CssBaseline />
        <div className={classes.root}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Typography variant="h4" gutterBottom component="h2">
              Appts
            </Typography>
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {apptRows}
                </TableBody>
              </Table>
              <div hidden={this.state.creatingNewAppt} style={{'textAlign':'left'}}>
                <Button
                  style={{'backgroundColor': purple, 'color': 'white', 'marginLeft': '20px', 'marginTop': '10px'}}
                  onClick={this.onClickAddNewAppt.bind(this)}>+ Add New</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: state.pets,
    vets: state.vets,
    appts: state.appts,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createNewAppt: (appt) => {dispatch(createNewAppt(appt))},
    saveAppt: (appt) => {dispatch(saveAppt(appt))},
    deleteAppt: (appt) => {dispatch(deleteAppt(appt))},
  }
};

const ApptsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApptsView_);

export default withStyles(styles)(ApptsView);
