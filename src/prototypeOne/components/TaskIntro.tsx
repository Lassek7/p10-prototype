import React, { useState } from 'react';
import { Button} from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { mockTaskDescriptions } from './mockTaskDescriptions';
    
    interface taskDescription {
        taskId: number,
        setStartTest: React.Dispatch<React.SetStateAction<boolean>>,
    }

export default function TaskIntro(taskDescription: taskDescription) {

    const [open, setOpen] = useState(true);
   
    const handleClose = () => {
    setOpen(false);
    taskDescription.setStartTest(true);
  };

    return (
        <div>
        <Dialog disableEscapeKeyDown open={open} onClose={(_, reason) => 
        {if (reason !== 'backdropClick') { handleClose()}}}>
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
                Start
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    )
}