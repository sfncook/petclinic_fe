import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

const purple = '#3f51b5';

class PetRow extends Component {

  static defaultProps = {
    createNewRow: false,
    visible: true,
    editing: false,
  };

  handleChangeName(event) {
    this.setState({
      pet: {name:event.target.value},
    });
  };
  handleSave() {
    this.setState({editing:false});
    this.props.handleSave(this.state.pet);
  };
  handleCancel() {
    console.log('editingName:',this.state.editingName);
    this.setState({editing:false});
    this.setState({pet:{name:this.state.editingName}});
    this.props.handleCancel();
  };
  handleEdit() {
    this.setState({editing:true});
    this.setState({editingName:this.state.pet.name});
  };

  constructor(props) {
    super(props);
    this.state = {
      pet: props.pet,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  render() {
    const validPetName = this.state.pet && this.state.pet.name && this.state.pet.name.length > 0;
    let saveBtnBgColor = (validPetName) ? purple : 'lightgray';
    let nameFieldBgColor = (this.state.editing || this.props.createNewRow) ? 'lightgreen' : 'inherit';

    let actionBtns = [];
    if(this.state.editing || this.props.createNewRow) {
      actionBtns.push(
        <span key={1}>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button disabled={!validPetName} style={{'backgroundColor':saveBtnBgColor, 'color':'white'}} onClick={this.handleSave}>Save</Button>
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

    if(this.props.visible) {
      return (
        <TableRow>
          <TableCell component="th" scope="row">
            <TextField
              style={{'backgroundColor': nameFieldBgColor}}
              disabled={!(this.state.editing || this.props.createNewRow)}
              id="pet-name"
              value={this.state.pet.name}
              onChange={this.handleChangeName}
            />
            {actionBtns}
          </TableCell>
        </TableRow>
      );
    } else {
      return (<TableRow />);
    }//else
  }// render()
}

PetRow.propTypes = {
  pet: PropTypes.object.isRequired,
  createNewRow: PropTypes.bool,
  visible: PropTypes.bool,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,

};

export default PetRow;
