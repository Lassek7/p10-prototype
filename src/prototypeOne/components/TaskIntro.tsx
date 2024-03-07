import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
  
if (taskDescription.taskId === 0) {
    return (
        <div>
        <Dialog disableEscapeKeyDown maxWidth={"md"} open={open} onClose={(_, reason) => 
        {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent>
                <DialogTitle>
                    {mockTaskDescriptions[taskDescription.taskId].taskName}
                </DialogTitle>
                <DialogContentText>
                    {mockTaskDescriptions[taskDescription.taskId].taskDescription.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                        {line}
                        <br />
                        </React.Fragment>
                    ))}                
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    start practice
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    )} else {
        return (
            <div>
            <Dialog disableEscapeKeyDown maxWidth={"md"} open={open} onClose={(_, reason) => 
            {if (reason !== 'backdropClick') { handleClose()}}}>
                <DialogContent>
                    <DialogTitle>
                        {mockTaskDescriptions[taskDescription.taskId].taskName}
                    </DialogTitle>

                    <DialogContentText>
                        {mockTaskDescriptions[taskDescription.taskId].taskDescription}
                    </DialogContentText>

                    <DialogContentText>
                        <List>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].taskObjectiveOne}  />
                            </ListItem>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].taskObjectiveTwo}  />
                            </ListItem>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].taskObjectiveThree}  />
                            </ListItem>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].taskObjectiveFour}  />
                            </ListItem>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].taskObjectiveFive}  />
                            </ListItem>
                        </List>     
                    </DialogContentText>
                    
                    <DialogContentText mt={5}>
                        Your job as the monitor operator is to:
                    </DialogContentText>

                    <DialogContentText>
                        <List>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].operatorAssignmentOne}  />
                            </ListItem>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].operatorAssignmentTwo}  />
                            </ListItem>
                            {taskDescription.taskId === 3 ? (
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={mockTaskDescriptions[taskDescription.taskId].operatorAssignmentTwo}  />
                            </ListItem>):null}
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    start Task
                    </Button>
                </DialogActions>
            </Dialog>
          </div>
        )
    }
}