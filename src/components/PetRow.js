import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// const purple = '#3f51b5';

class PetRow extends Component {

  render() {
    const pet = this.props.pet;
    // console.log('PetRow props:',this.props);
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {pet.name}
        </TableCell>
      </TableRow>
    );
  }
}

PetRow.propTypes = {
  pet: PropTypes.object.isRequired
};

export default PetRow;
