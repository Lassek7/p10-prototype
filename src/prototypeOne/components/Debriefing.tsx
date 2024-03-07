import { Dialog, DialogContent, DialogTitle, TextField, DialogActions, Button, DialogContentText } from '@mui/material';
import { useState, useEffect } from 'react';
import { saveToFile } from '../globalFunctions.tsx/saveToFile';
import Styles from '../prototypeOneStyles/styles';

interface debriefing {
    userName: string,
    debriefingActive: boolean,
}
export default function Debriefing({userName, debriefingActive}: debriefing){
    const { ipcRenderer } = require('electron');
    const [open, setOpen] = useState(false);
    const [debriefingQuestionOne] = useState("Overall, do you have any additional thoughts not yet covered?");
    const [debriefingQuestionOneAnswer, setDebriefingQuestionOneAnswer] = useState("");
    const [debriefingQuestionTwo] = useState("Do you normally encounter any work, tasks, games, etc. where you need to react fast or concentrate?");
    const [debriefingQuestionTwoAnswer, setDebriefingQuestionTwoAnswer] = useState("");
       
    useEffect(() => {
        setOpen(debriefingActive)
    }, [debriefingActive])
    
    const handleClose = () => {
        const debriefingAnswers = {
            participantId: userName,
            debriefingQuestionOne: debriefingQuestionOne,
            debriefingQuestionOneAnswer: debriefingQuestionOneAnswer,
            debriefingQuestionTwo: debriefingQuestionTwo,
            debriefingQuestionTwoAnswer: debriefingQuestionTwoAnswer
        }
        saveToFile([debriefingAnswers], userName, "debriefing")
        setOpen(false);
        ipcRenderer.send('quit-app');
    }


    return (
    <Dialog disableEscapeKeyDown maxWidth={"md"}  
    open={open} onClose={(_, reason) => 
    {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent>
                <DialogTitle>
                    Debriefing
                </DialogTitle>
            </DialogContent>
            <DialogContent style={{ width: '600px' }}>
                <TextField label={debriefingQuestionOne} sx={Styles.textField} variant='outlined' multiline rows={3} onChange={(e) => setDebriefingQuestionOneAnswer(e.target.value)} />
            </DialogContent>
            <DialogContent style={{ width: '600px' }}>
                <TextField label={debriefingQuestionTwo} sx={Styles.textField} variant='outlined' multiline rows={3} onChange={(e) => setDebriefingQuestionTwoAnswer(e.target.value)} />
            </DialogContent>
            <DialogContent>
                <DialogContentText style={{ width: '600px' }}>
                    We would like to thank you again for participating and remember to claim the reward before leaving :-)
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> Submit & end test</Button>
            </DialogActions>
    </Dialog>
   
    )
}