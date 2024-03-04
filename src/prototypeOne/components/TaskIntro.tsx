import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { mockTaskDescriptions } from './mockTaskDescriptions';
    
    interface taskDescription {
        taskId: number,
    }

export default function TaskIntro(taskDescription: taskDescription) {

    const [open, setOpen] = useState(true);
   
    const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <DialogTitle>
                {mockTaskDescriptions[taskDescription.taskId].taskName}
                </DialogTitle>
            </DialogContent>
            <DialogContent>
                <DialogContentText>
                {mockTaskDescriptions[taskDescription.taskId].taskDescription}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            </DialogActions>
        </Dialog>
      </div>
    )
}