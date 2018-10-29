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
import { getAllPets, createNewPet, savePet } from "../stateHandlers/actions";
import PetRow from './PetRow';

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

class PetsView_ extends Component {

  onClickAddNewPet = () => {
    this.setState({creatingNewPet:true});
  };
  handleSave = (pet) => {
    this.setState({creatingNewPet:false});
    this.props.savePet(pet);
  };
  handleCancel = (pet) => {
    this.setState({creatingNewPet:false});
  };
  handleCreateNew = (pet) => {
    this.setState({creatingNewPet:false});
    this.props.createNewPet(pet);
  };

  constructor(props) {
    super(props);
    this.state = {
      creatingNewPet: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreateNew = this.handleCreateNew.bind(this);
  }

  render() {
    const { classes } = this.props;

    let petRows = this.props.pets.map(pet => {
      return (
        <PetRow
          key={pet.id}
          pet={pet}
          createNewRow={false}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />
      );
    });

    if(this.state.creatingNewPet) {
      petRows.push(
        <PetRow
          key={'createNewPetRow'}
          pet={{name:''}}
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
              Pets
            </Typography>
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {petRows}
                </TableBody>
              </Table>
              <div hidden={this.state.creatingNewPet} style={{'textAlign':'left'}}>
                <Button
                  style={{'backgroundColor': purple, 'color': 'white', 'marginLeft': '20px', 'marginTop': '10px'}}
                  onClick={this.onClickAddNewPet.bind(this)}>+ Add New</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getAllPets();
  }

}

const mapStateToProps = state => {
  return {
    pets: state.pets,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPets: () => {dispatch(getAllPets())},
    createNewPet: (pet) => {dispatch(createNewPet(pet))},
    savePet: (pet) => {dispatch(savePet(pet))},
  }
};

const PetsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(PetsView_);

export default withStyles(styles)(PetsView);
