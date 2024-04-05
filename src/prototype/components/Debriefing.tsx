import { Dialog, DialogContent, DialogTitle, DialogActions, Button, DialogContentText } from '@mui/material';
import { useState, useEffect } from 'react';

interface debriefing {
    userName: string,
    debriefingActive: boolean,
}
export default function Debriefing({debriefingActive}: debriefing){
    const { ipcRenderer } = require('electron');
    const [open, setOpen] = useState(false);

       
    useEffect(() => {
        setOpen(debriefingActive)
    }, [debriefingActive])
    
    const handleClose = () => {
        setOpen(false);
        ipcRenderer.send('quit-app');
    }


    return (
    <Dialog disableEscapeKeyDown maxWidth={"md"}  
    open={open} onClose={(_, reason) => 
    {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent style={{ width: '850px' }}>
                <DialogTitle>
                    Debriefing
                </DialogTitle>
            </DialogContent>
            <DialogContent>
                <DialogContentText style={{ width: '600px' }}>
                    We would like to ask you a few questions before you leave and thank you again for participating :-)
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> Submit & end test</Button>
            </DialogActions>
    </Dialog>
   
    )
}