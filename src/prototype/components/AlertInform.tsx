import React, { useState } from 'react';
import { CardMedia, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Button } from '@mui/material';
import alertboxImage from '../../assets/images/alertbox.png';

    interface AlertInformProps {
        setAlertInformSeen: React.Dispatch<React.SetStateAction<boolean>>,
    }

export default function AlertInform(AlertInformProps: AlertInformProps) {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        AlertInformProps.setAlertInformSeen(true);
        setOpen(false);

        
    };

return (
    <Dialog disableEscapeKeyDown maxWidth={"md"}  
        open={open} onClose={(_, reason) => 
        {if (reason !== 'backdropClick') { handleClose()}}}>
    <DialogContent >
        <CardMedia component="img" image={alertboxImage} />
    <DialogContentText mt={2} sx={{color:"#343323"}}>
        In the following task you will be provided with an clickable alertbox.
    </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose} color="primary" > Continue</Button>
    </DialogActions>
    </Dialog>
)}