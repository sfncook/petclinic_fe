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
import { getAllVets, createNewVet, saveVet } from "../stateHandlers/actions";
import VetRow from './VetRow';

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

class VetsView_ extends Component {

  onClickAddNewVet = () => {
    this.setState({creatingNewVet:true});
  };
  handleSave = (vet) => {
    this.setState({creatingNewVet:false});
    this.props.saveVet(vet);
  };
  handleCancel = (vet) => {
    this.setState({creatingNewVet:false});
  };
  handleCreateNew = (vet) => {
    this.setState({creatingNewVet:false});
    this.props.createNewVet(vet);
  };

  constructor(props) {
    super(props);
    this.state = {
      creatingNewVet: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreateNew = this.handleCreateNew.bind(this);
  }

  render() {
    const { classes } = this.props;

    let vetRows = this.props.vets.map(vet => {
      return (
        <VetRow
          key={vet.id}
          vet={vet}
          createNewRow={false}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />
      );
    });

    if(this.state.creatingNewVet) {
      vetRows.push(
        <VetRow
          key={'createNewVetRow'}
          vet={{name:''}}
          createNewRow={true}
          handleSave={this.handleCreateNew}
          handleCancel={this.handleCancel}
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
                  {vetRows}
                </TableBody>
              </Table>
              <div hidden={this.state.creatingNewVet} style={{'textAlign':'left'}}>
                <Button
                  style={{'backgroundColor': purple, 'color': 'white', 'marginLeft': '20px', 'marginTop': '10px'}}
                  onClick={this.onClickAddNewVet.bind(this)}>+ Add New</Button>
              </div>
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
    getAllVets: () => {dispatch(getAllVets())},
    createNewVet: (vet) => {dispatch(createNewVet(vet))},
    saveVet: (vet) => {dispatch(saveVet(vet))},
  }
};

const VetsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(VetsView_);

export default withStyles(styles)(VetsView);
