import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class VerifyDialog extends Component {

  render() {
    return (
      <Dialog
        open={this.props.isOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cancel Appointment?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel this appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.denyFunc} color="inherit">
            Never mind, keep it.
          </Button>
          <Button onClick={this.props.confirmFunc} style={{'backgroundColor':'red', 'color':'white'}} >
            Yes! Please cancel!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }// render()
}

VerifyDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  confirmFunc: PropTypes.func.isRequired,
  denyFunc: PropTypes.func.isRequired,
};

export default VerifyDialog;
