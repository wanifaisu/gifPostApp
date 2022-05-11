import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function EditDialog({
  open1,
  itemId,
  closeAdd,
  callBackAddedItem,
  button,
  handleEditedItemCallback,
}) {
  const [newUser, setNewUser] = React.useState(open1.obj);

  const handleSubmit = () => {
    let newUser1 = {
      name: newUser.name,
      userName: newUser.userName,
      id: Math.floor(Math.random() * 100),
    };
    callBackAddedItem(newUser1);
    closeAdd();
  };
  const handleEditSubmit = () => {
    let newUser1 = {
      name: newUser.name,
      userName: newUser.userName,
      id: open1.obj.id,
    };
    handleEditedItemCallback(newUser1);

    closeAdd();
  };
  return (
    <div>
      <Dialog open={open1.open} onClose={closeAdd}>
        {button === 'Edit' ? (
          <DialogContent>
            <DialogTitle sx={{ justifyContent: 'center', fontSize: '18px' }}>
              Edit User Dialog
            </DialogTitle>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter Nme"
              type="email"
              fullWidth
              variant="standard"
              // onChange={event => {
              //   setAddNameField({ ...addNameField, name: event.target.value });
              // }}
              onChange={event => {
                setNewUser({ ...newUser, name: event.target.value });
              }}
              value={newUser != undefined ? newUser.name : ''}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter userName"
              type="userName"
              fullWidth
              variant="standard"
              onChange={event => {
                setNewUser({ ...newUser, userName: event.target.value });
              }}
              value={newUser !== undefined ? newUser.userName : ''}
            />
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogTitle sx={{ justifyContent: 'center', fontSize: '18px' }}>
              Add User Dialog
            </DialogTitle>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter Nme"
              type="email"
              fullWidth
              variant="standard"
              onChange={event => {
                setNewUser({ ...newUser, name: event.target.value });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter userName"
              type="userName"
              fullWidth
              variant="standard"
              onChange={event => {
                setNewUser({ ...newUser, userName: event.target.value });
              }}
            />
          </DialogContent>
        )}
        <DialogActions>
          {button === 'Edit' ? (
            <Button
              onClick={() => {
                handleEditSubmit();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog;
