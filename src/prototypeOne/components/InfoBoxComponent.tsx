
import {Box, Button, Typography } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';

export default function InfoBoxComponentLargeScreenComponent() {
    return (
        <Box sx={Styles.screenInfoBox}>
            <Typography >
                Card Title
            </Typography>
            <Typography >
                Some description text.
            </Typography>
            <Button variant="contained">Button</Button>
        </Box>
    )
}