import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const purple = '#3f51b5';

class PetRow extends Component {

  render() {
    console.log('PetRow props:',this.props);
    return (
      <TableRow key={pet.id}>
        <TableCell component="th" scope="row">
          {pet.name}
        </TableCell>
      </TableRow>
    );
  }
}

export default PetRow;
