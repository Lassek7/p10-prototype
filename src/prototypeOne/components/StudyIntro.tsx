import { Dialog, DialogContent, DialogTitle, DialogActions, Button, DialogContentText } from '@mui/material';
import { useState } from 'react';

import blackAndWhiteBikeHelmet6 from '../../assets/images/Practice Task/black-white bike helmet 6.png';


export default function StudyIntro(){
    const [open, setOpen] = useState(true);

       
   
    
    const handleClose = () => {
        setOpen(false);
    }


    return (
    <Dialog disableEscapeKeyDown maxWidth={"md"}  
    open={open} onClose={(_, reason) => 
    {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent>
                <DialogTitle>
                    Practical Information
                </DialogTitle>
            </DialogContent>
            <DialogContent>
                <DialogContentText style={{ width: '600px' }}>
                Thank you for participating in this experiment for a  Master’s Thesis in Human Computer Interaction. Feel free to ask questions at any time (we will pause the timer if questions occur during timed tasks). You can choose to stop the experiment at any point. The screen will be recorded during the whole experiment (no audio will be recorded) and your identity will be made anonymous in the report.  By pressing continue you agree to the above.
                </DialogContentText>
                <DialogContent>
                </DialogContent>
                <img src={blackAndWhiteBikeHelmet6} alt="NASA-TLX" style={{ width: '300px' }}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> Continue</Button>
            </DialogActions>
    </Dialog>
    )
}