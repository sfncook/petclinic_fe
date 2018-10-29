import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

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
    console.log('datetime str:',str);
    return str;
  };

  static defaultProps = {
    createNewRow: false,
    editing: false,
  };

  handleChangeName(event) {
    this.setState({
      appt: {name:event.target.value},
    });
  };
  handleSave() {
    this.setState({editing:false});
    this.props.handleSave(this.state.appt);
  };
  handleCancel() {
    console.log('editingName:',this.state.editingName);
    this.setState({editing:false});
    this.setState({appt:{name:this.state.editingName}});
    this.props.handleCancel();
  };
  handleEdit() {
    this.setState({editing:true});
    this.setState({editingName:this.state.appt.name});
  };

  constructor(props) {
    super(props);
    this.state = {
      appt: props.appt,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  render() {
    const { classes } = this.props;
    const appt = this.state.appt;
    // const validApptName = this.state.appt && this.state.appt.name && this.state.appt.name.length > 0;
    // let saveBtnBgColor = (validApptName) ? purple : 'lightgray';
    let saveBtnBgColor = purple;
    let fieldBgColor = (this.state.editing || this.props.createNewRow) ? 'lightgreen' : 'inherit';

    let actionBtns = [];
    if(this.state.editing || this.props.createNewRow) {
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

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {appt.pet.name}
        </TableCell>
        <TableCell component="th" scope="row">
          {appt.vet.name}
        </TableCell>
        <TableCell component="th" scope="row">
          <TextField
            disabled={true}
            id="date"
            label="Birthday"
            type="datetime-local"
            defaultValue={ApptRow.convertDateTime(appt.startTime)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          <TextField
            disabled={true}
            id="date"
            label="Birthday"
            type="datetime-local"
            defaultValue={ApptRow.convertDateTime(appt.endTime)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </TableCell>
      </TableRow>
    );
  }// render()
}

ApptRow.propTypes = {
  appt: PropTypes.object.isRequired,
  createNewRow: PropTypes.bool,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,

};

export default ApptRow;
