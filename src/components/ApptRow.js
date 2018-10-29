import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import VerifyDialog from './VerifyDialog';

const purple = '#3f51b5';

class ApptRow extends Component {

  static convertDateTime = (sqlDateTime) => {
    const dateAndTime = sqlDateTime.split(' ');
    const date = dateAndTime[0];
    const yrMthDay = date.split('-');
    const day = yrMthDay[0];
    const mth = yrMthDay[1];
    const year = yrMthDay[2];

    const time = dateAndTime[1];
    const hrMnSec = time.split(':');
    const hour = hrMnSec[0];
    const min = hrMnSec[1];

    const str = year+'-'+mth+'-'+day+'T'+hour+':'+min;
    // console.log('datetime str:',str);
    return str;
  };

  static defaultProps = {
    createNewRow: false,
    editing: false,
    pets: [],
    vets: [],
  };

  findPetById(petId) {
    let pet;
    for(pet of this.props.pets) {
      if(pet.id===petId) {
        return pet;
      }
    }
    return {};
  }
  findVetById(vetId) {
    let vet;
    for(vet of this.props.vets) {
      if(vet.id===vetId) {
        return vet;
      }
    }
    return {};
  }
  handleChangePet(event) {
    const chosenPet = this.findPetById(event.target.value);
    const newApptState = Object.assign({}, this.state.appt, {
      pet: chosenPet,
    });
    this.setState({
      appt: newApptState,
    });
  };
  handleChangeVet(event) {
    const chosenVet = this.findVetById(event.target.value);
    const newApptState = Object.assign({}, this.state.appt, {
      vet: chosenVet,
    });
    this.setState({
      appt: newApptState,
    });
  };
  handleDelete() {
    this.setState({editing:false, openVerifyDlg:false});
    this.props.handleDelete(this.state.appt);
  };
  handleSave() {
    this.setState({editing:false});
    this.props.handleSave(this.state.appt);
  };
  handleCancel() {
    const newState = Object.assign({}, this.state, {
      appt: this.state.editingAppt,
      editing:false,
      openVerifyDlg:false,
    });
    this.setState(newState);
    this.props.handleCancel();
  };
  handleEdit() {
    const newState = Object.assign({}, this.state, {
      editingAppt: this.state.appt,
      editing:true
    });
    this.setState(newState);
  };

  openDeleteApptVerifyDlg() {
    this.setState({openVerifyDlg:true});
  }

  constructor(props) {
    super(props);
    this.state = {
      appt: props.appt,
      openVerifyDlg: false,
    };
    this.handleChangePet = this.handleChangePet.bind(this);
    this.handleChangeVet = this.handleChangeVet.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.findPetById = this.findPetById.bind(this);
    this.findVetById = this.findVetById.bind(this);
    this.openDeleteApptVerifyDlg = this.openDeleteApptVerifyDlg.bind(this);
  }

  render() {
    const appt = this.state.appt;

    let saveBtnBgColor = purple;

    let actionBtns = [];
    if(this.state.editing) {
      actionBtns.push(
        <span key={1} style={{'whiteSpace': 'nowrap'}}>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button style={{'backgroundColor':saveBtnBgColor, 'color':'white'}} onClick={this.handleSave}>Save</Button>
          <Button style={{'backgroundColor':'red', 'color':'white'}} onClick={this.openDeleteApptVerifyDlg}>Delete Appt</Button>
          <VerifyDialog isOpen={this.state.openVerifyDlg} confirmFunc={this.handleDelete} denyFunc={this.handleCancel} />
        </span>
      );
    } else if(this.props.createNewRow) {
      actionBtns.push(
        <span key={1}>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button style={{'backgroundColor':saveBtnBgColor, 'color':'white'}} onClick={this.handleSave}>Save</Button>
        </span>
      );
    } else {
      if(!this.state.createNewRow) {
          actionBtns.push(
            <span key={1}>
              <Button onClick={this.handleEdit}>Edit</Button>
            </span>
          );
      }
    }

    let petMenuItems = this.props.pets.map(pet => {
      return (
        <MenuItem key={pet.id} value={pet.id}>{pet.name}</MenuItem>
      );
    });
    let vetMenuItems = this.props.vets.map(vet => {
      return (
        <MenuItem key={vet.id} value={vet.id}>{vet.name}</MenuItem>
      );
    });

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          <Select
            value={this.state.appt.pet.id}
            onChange={this.handleChangePet}
            disabled={!(this.state.editing || this.props.createNewRow)}
            inputProps={{
              name: 'appt-pet-select',
              id: 'appt-pet-select',
            }}
          >
            {petMenuItems}
          </Select>
        </TableCell>
        <TableCell component="th" scope="row">
          <Select
            value={this.state.appt.vet.id}
            onChange={this.handleChangeVet}
            disabled={!(this.state.editing || this.props.createNewRow)}
            inputProps={{
              name: 'appt-vet-select',
              id: 'appt-vet-select',
            }}
          >
            {vetMenuItems}
          </Select>
        </TableCell>
        <TableCell component="th" scope="row">
          <TextField
            disabled={true}
            id="date"
            label="Start Time"
            type="datetime-local"
            defaultValue={ApptRow.convertDateTime(appt.startTime)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          <TextField
            disabled={true}
            id="date"
            label="End Time"
            type="datetime-local"
            defaultValue={ApptRow.convertDateTime(appt.endTime)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {actionBtns}
        </TableCell>
      </TableRow>
    );
  }// render()
}

ApptRow.propTypes = {
  pets: PropTypes.array,
  vets: PropTypes.array,
  appt: PropTypes.object.isRequired,
  createNewRow: PropTypes.bool,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
  handleDelete: PropTypes.func,

};

export default ApptRow;
