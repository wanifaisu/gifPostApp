import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function AddItemDialog({ openWhenAdd, closeAdd, callBackAddedItem }) {
  //   const [addNameField, setAddNameField] = React.useState([]);
  const [name, setName] = React.useState('');
  const [userName, setUserName] = React.useState('');

  const handleSubmit = () => {
    let newArry = {
      name: name,
      userName: userName,
      id: new Date().getTime().toString(),
    };
    console.log(newArry, 'hhh');
    callBackAddedItem(newArry);
    closeAdd();
  };
  return (
    <div>
      <Dialog open={openWhenAdd}>
        <DialogContent>
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
              setName(event.target.value);
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
            // onChange={event => {
            //   setAddNameField({
            //     ...addNameField,
            //     userName: event.target.value,
            //   });
            // }}
            onChange={event => {
              setUserName(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItemDialog;
