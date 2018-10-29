import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

// const purple = '#3f51b5';

class PetRow extends Component {

  static defaultProps = {
    createNewRow: false,
    visible: true,
  };

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
    let bgColor = (this.state.editing || this.props.createNewRow) ? 'lightgreen' : 'inherit';
    if(this.props.visible) {
      return (
        <TableRow>
          <TableCell component="th" scope="row">
            <TextField
              style={{'backgroundColor': bgColor}}
              disabled={!(this.state.editing || this.props.createNewRow)}
              id="pet-name"
              defaultValue={this.props.pet.name}
              onChange={this.handleChangeName.bind(this)}
            />
          </TableCell>
        </TableRow>
      );
    } else {
      return (<div />);
    }//else
  }// render()
}

PetRow.propTypes = {
  pet: PropTypes.object.isRequired,
  createNewRow: PropTypes.bool,
  visible: PropTypes.bool,
};

export default PetRow;
