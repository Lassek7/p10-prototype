import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, ListItemIcon, CardMedia} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { mockTaskDescriptions } from './mockTaskDescriptions';
import { mockDataTaskOneGoals, mockDataTaskTwoGoals, mockDataTaskThreeGoals } from './mockDataTaskGoals';
import Styles from '../prototypeOneStyles/styles';
import introImage from '../../assets/images/intro image.png';
    
    interface taskDescription {
        taskId: number,
        setStartTest: React.Dispatch<React.SetStateAction<boolean>>,
    }
    interface TaskGoal {
        taskId: string;
        taskName: string;
        // Include other properties here...
    }
export default function TaskIntro(taskDescription: taskDescription) {

    const [open, setOpen] = useState(true);
    const [currentTask, setCurrentTask] = useState<Array<TaskGoal>>(mockDataTaskOneGoals)
   
    const handleClose = () => {
    setOpen(false);
    taskDescription.setStartTest(true);
  };

  function ListItems(taskName: string){
    return(
    <ListItem sx={{ mt: -1.5, mb: -3 }}>
        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
            <FiberManualRecordIcon sx={{color: '#343323', fontSize: 10}} />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{sx:{ ...Styles.taskIntro}}} primary={taskName} />
    </ListItem>
)}
useEffect(() => {
if (taskDescription.taskId === 1) {
    setCurrentTask(mockDataTaskOneGoals)  
} else if (taskDescription.taskId === 2) {
    setCurrentTask(mockDataTaskTwoGoals)
} else {
    setCurrentTask(mockDataTaskThreeGoals)
}
console.log(introImage);
}, [])
if (taskDescription.taskId === 0) {
    return (
        <div>
        <Dialog disableEscapeKeyDown maxWidth={"md"} open={open} onClose={(_, reason) => 
        {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent>
                <DialogTitle>
                    {mockTaskDescriptions[taskDescription.taskId].taskName}
                </DialogTitle>
                <DialogContent>

                <DialogContentText sx={{color:"#343323", alignContent:"left"}}>
                    In our Master’s Thesis, we work with drone swarms, which are groups of drones that communicate and act together to complete a task without people controlling them at all times. We are looking into how drone swarms can assist in search and rescue missions where a person has gone missing. To find the missing person, a monitor operator will look through all the images from the drone swarm to find the person or their items.
                </DialogContentText>
                </DialogContent>

                <CardMedia component="img" image={introImage} sx={{...Styles.taskimage, objectFit:"contain", display: 'block'}}/>
            
                <DialogContent>
                <DialogContentText sx={{color:"#343323"}}>
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
            </DialogContent>
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

                    <DialogContentText sx={{color:"#343323"}}>
                        {mockTaskDescriptions[taskDescription.taskId].taskDescription}
                    </DialogContentText>

                    <DialogContentText mt={2} sx={{color:"#343323"}}>
                        <List>
                            <DialogContentText sx={{color:"#343323"}}> Person: </DialogContentText>
                            {currentTask.filter((item: TaskGoal) => item.taskId === 'Person').map((item: TaskGoal) => (
                                ListItems(item.taskName)
                            ))}
                        </List>     
                    </DialogContentText>

                    <DialogContentText  mt={1} sx={{color:"#343323"}}>
                        <List>
                            <DialogContentText sx={{color:"#343323"}}> Personal Items: </DialogContentText>
                            {currentTask.filter((item: TaskGoal) => item.taskId === 'Personal Items').map((item: TaskGoal) => (
                                ListItems(item.taskName)
                            ))}
                        </List>     
                    </DialogContentText>

                    <DialogContentText mt={1} sx={{color:"#343323"}}>
                        <List>
                        <DialogContentText sx={{color:"#343323"}}> Mode of Transport: </DialogContentText>
                        {currentTask.filter((item: TaskGoal) => item.taskId === 'Mode of transport').map((item: TaskGoal) => (
                            ListItems(item.taskName)
                        ))}
                        </List>     
                    </DialogContentText>
                    <DialogContentText  mt={4} sx={{color: '#343323' }}>
                        {taskDescription.taskId === 3 || taskDescription.taskId === 2 ? 
                            "In the following task you will be able to see how confident the AI is that it found something of relevance to the task goals. Your job as the monitor operator is to:" 
                            : 
                            "Your job as the monitor operator is to:"
                        }
                    </DialogContentText>

                    <DialogContentText sx={{color:"#343323"}}>
                        <List>
                            <ListItem sx={{ mt: -1.5, mb: -3 }}>
                                <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                                </ListItemIcon>
                                <ListItemText primary={"Be as accurate as possible"}  />
                            </ListItem>
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
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    {taskDescription.taskId === 3 ? 
                            "Continue" 
                            : 
                            "Start task"
                        }
                    </Button>
                </DialogActions>
            </Dialog>
          </div>
        )
    }
}