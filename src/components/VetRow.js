import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

const purple = '#3f51b5';

class VetRow extends Component {

  static defaultProps = {
    createNewRow: false,
    editing: false,
  };

  handleChangeName(event) {
    const newVetState = Object.assign({}, this.state.vet, {name:event.target.value});
    this.setState({
      vet: newVetState,
    });
  };
  handleSave() {
    this.setState({editing:false});
    this.props.handleSave(this.state.vet);
  };
  handleCancel() {
    const newState = Object.assign({}, this.state, {
      vet: this.state.editingVet,
      editing:false,
    });
    this.setState(newState);
    this.props.handleCancel();
  };
  handleEdit() {
    const newState = Object.assign({}, this.state, {
      editingVet: this.state.vet,
      editing:true
    });
    this.setState(newState);
  };

  constructor(props) {
    super(props);
    this.state = {
      vet: props.vet,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  render() {
    const validVetName = this.state.vet && this.state.vet.name && this.state.vet.name.length > 0;
    let saveBtnBgColor = (validVetName) ? purple : 'lightgray';
    let nameFieldBgColor = (this.state.editing || this.props.createNewRow) ? 'lightgreen' : 'inherit';

    let actionBtns = [];
    if(this.state.editing || this.props.createNewRow) {
      actionBtns.push(
        <span key={1}>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button disabled={!validVetName} style={{'backgroundColor':saveBtnBgColor, 'color':'white'}} onClick={this.handleSave}>Save</Button>
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

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          <TextField
            style={{'backgroundColor': nameFieldBgColor}}
            disabled={!(this.state.editing || this.props.createNewRow)}
            id="vet-name"
            value={this.state.vet.name}
            onChange={this.handleChangeName}
          />
          {actionBtns}
        </TableCell>
      </TableRow>
    );
  }// render()
}

VetRow.propTypes = {
  vet: PropTypes.object.isRequired,
  createNewRow: PropTypes.bool,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,

};

export default VetRow;
