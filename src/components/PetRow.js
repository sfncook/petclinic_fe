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
  };

  handleChangeName(event) {
    this.setState({
      pet: {name:event.target.value},
    });
  };
  handleSave() {
    this.props.handleSave(this.state.pet);
  };
  handleCancel() {
    this.props.handleCancel();
  };

  constructor(props) {
    super(props);
    this.state = {
      pet: props.pet,
      editing: false,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  render() {
    const validPetName = this.state.pet && this.state.pet.name && this.state.pet.name.length > 0;
    let saveBtnBgColor = (validPetName) ? purple : 'lightgray';
    let nameFieldBgColor = (this.state.editing || this.props.createNewRow) ? 'lightgreen' : 'inherit';
    if(this.props.visible) {
      return (
        <TableRow>
          <TableCell component="th" scope="row">
            <TextField
              style={{'backgroundColor': nameFieldBgColor}}
              disabled={!(this.state.editing || this.props.createNewRow)}
              id="pet-name"
              defaultValue={this.props.pet.name}
              onChange={this.handleChangeName}
            />
            {(this.state.editing || this.props.createNewRow) ?
              <span>
                <Button onClick={this.handleCancel}>Cancel</Button>
                <Button disabled={!validPetName} style={{'backgroundColor':saveBtnBgColor, 'color':'white'}} onClick={this.handleSave}>Save</Button>
              </span>
              :
              <span/>
            }
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
