
import {Box, Button, Grid, Typography } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';

interface infoBoxProps {
    showButtons?: boolean
}

export default function InfoBoxComponentLargeScreenComponent(showButtons: infoBoxProps) {
    return (
        <Box sx={Styles.screenInfoBox}>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid item>
                    <Typography fontWeight={700} align="left">
                        #3
                    </Typography>
                </Grid>
                {showButtons.showButtons && (
                    <Grid item container justifyContent="center" >
                        <Button variant="contained" sx={{ width: '8.17vw', height: '5.5vh', borderRadius: '100px', mr: "1.56vw"}}>Investigate</Button>
                        <Button variant="outlined" sx={{width: '8.17vw', height: '5.5vh',borderRadius: '100px'}}>Delete</Button>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}