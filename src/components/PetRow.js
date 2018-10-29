import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

// const purple = '#3f51b5';

class PetRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.pet.name,
      editing: false,
    };
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          <TextField
            disabled={!this.state.editing || this.props.createNewRow}
            id="pet-name"
            defaultValue={this.props.pet.name}
            onChange={this.handleChangeName.bind(this)}
          />
        </TableCell>
      </TableRow>
    );
  }
}

PetRow.propTypes = {
  pet: PropTypes.object.isRequired,
  createNewRow: PropTypes.bool,
};

export default PetRow;
