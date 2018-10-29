import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

// const purple = '#3f51b5';

class PetRow extends Component {

  constructor(props) {
    super(props);
    this.state = { name: props.pet.name };
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    let nameComp = this.state.name;
    console.log('state:',this.state.name);
    if(this.props.editable) {
      nameComp = <TextField
        id="pet-name"
        defaultValue={this.props.pet.name}
        onChange={this.handleChangeName.bind(this)}
      />
    }

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {nameComp}
        </TableCell>
      </TableRow>
    );
  }
}

PetRow.propTypes = {
  pet: PropTypes.object.isRequired,
  editable: PropTypes.bool,
};

export default PetRow;
