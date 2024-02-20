
import {Box, Button, Grid, Typography } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';


interface detection {
    showButtons?: boolean
    prototypeOne?: boolean
    imageId: string,
    imageIcon: JSX.Element,
    imageDetectionContext?: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection?: string,
}

export function LargeScreenInfoBoxComponent( detection: detection) {
    const { imageId, imageIcon, imageDetectionContext, imageDetectionTime, ImageDetectionDate, timeSinceDetection } = detection;
    return (
        <Box sx={Styles.screenInfoBox}>
            <Grid container direction="row" justifyContent="space-between" alignItems="start" >
                <Grid item xs={3} md={3}>
                    <Grid container direction="column" justifyContent="start">
                        <Grid item >
                            <Typography fontWeight={700} fontSize={10} align="left">
                                {imageId}
                            </Typography>
                        </Grid>
                        {!detection.prototypeOne && (
                        <Grid item >
                            <Typography align="left">
                                {imageIcon} {imageDetectionContext}
                            </Typography>
                        </Grid>
                        )}
                    </Grid>
                </Grid>
                {!detection.prototypeOne ? (
                    <Grid item container justifyContent="center" xs={6} md={6}>
                        <Button variant="outlined" sx={{width: '8.17vw', height: '5.5vh', borderRadius: '100px', mr: "1.56vw", color: '#0A84FF', borderColor: '#343323'}}>Investigate</Button>
                        <Button variant="outlined" sx={{width: '8.17vw', height: '5.5vh', borderRadius: '100px', color: '#0A84FF', borderColor: '#343323'}}>Delete</Button>
                    </Grid>
                    ) : (
                    <Grid item container justifyContent="center" xs={11} md={11}>
                        <Button variant="outlined" sx={{width: '8.17vw', height: '5.5vh', borderRadius: '100px', mr: "1.56vw", color: '#0A84FF', borderColor: '#343323'}}>Investigate</Button>
                        <Button variant="outlined" sx={{width: '8.17vw', height: '5.5vh', borderRadius: '100px', color: '#0A84FF', borderColor: '#343323'}}>Delete</Button>
                    </Grid>
                )}
                {!detection.prototypeOne && (
                <Grid item xs={3} md={3} >
                    <Grid container direction="column" justifyContent="flex-end">
                        <Grid item xs={12} md={12}>
                            <Typography fontWeight={700} fontSize={10} align="right">
                                {imageDetectionTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography fontWeight={700} fontSize={10} align="right">
                                {ImageDetectionDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography fontWeight={700} fontSize={10} align="right">
                                {timeSinceDetection}
                            </Typography>
                        </Grid>
                    </Grid>   
                </Grid>   
                )}  
            </Grid>
        </Box>
    )
}

export function SmallScreenInfoBoxComponent( detection: detection) {
    const { imageId, imageIcon, imageDetectionTime, ImageDetectionDate } = detection;
    return (
        <Box >
            <Grid container direction="row" justifyContent="space-between" alignItems="start" >
                <Grid item >
                    <Typography fontWeight={700} fontSize={13} align="left">
                        {imageId}
                    </Typography>
                </Grid>
                {!detection.prototypeOne && (
                <Grid item >
                    <Typography align="center">
                        {imageIcon}
                    </Typography>
                </Grid>
                )}
                {!detection.prototypeOne && (
                <Grid item >
                    <Grid container direction="column" justifyContent="flex-end">
                        <Grid item xs={12} md={12}>
                            <Typography fontWeight={700} fontSize={8} align="right">
                                {imageDetectionTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography fontWeight={700} fontSize={8} align="right">
                                {ImageDetectionDate}
                            </Typography>
                        </Grid>
                    </Grid>         
                </Grid>  
                )}
            </Grid>
        </Box>
    )
}