
import {Box, Button, Grid, Typography } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';


interface detection {
    showButtons?: boolean,
    prototypeOne?: boolean,
    imageId: string,
    imageIcon: JSX.Element,
    imageDetectionContext?: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection?: string,
    index: number,
    onDeleteClick: (imageIndex: number) => void,
    onInvestigateClick: (imageIndex: number) => void,
}



export function LargeScreenInfoBoxComponent( detection: detection) {
    const { imageId, imageIcon, imageDetectionContext, imageDetectionTime, ImageDetectionDate, timeSinceDetection } = detection;
    const handleDeleteClick = (imageIndex: number) => {
        detection.onDeleteClick(imageIndex)
    }
    const handleInvestigateClick = (imageIndex: number) => {
        detection.onInvestigateClick(imageIndex)
    }
    return (
        <Box sx={Styles.screenInfoBox}>
            <Grid container direction="row" justifyContent="space-between" alignItems="start" >
                <Grid item xs={!detection.prototypeOne ? 3 : 1} md={!detection.prototypeOne ? 3 : 1} style={{height: "100%"}}> 
                    <Grid container direction="column" justifyContent="space-between" style={{height: "150%"}}>
                        <Grid item >
                            <Typography align="left" sx={{fontWeight: 700, fontSize: 15}}>
                                {imageId}
                            </Typography>
                        </Grid>
                        {!detection.prototypeOne && (
                        <Grid item >
                            <Typography align="left" sx={{fontWeight: 700, fontSize: 15}}>
                                {imageIcon} {imageDetectionContext}
                            </Typography>
                        </Grid>
                        )}
                    </Grid>
                </Grid>
                {!detection.prototypeOne ? (
                    <Grid item container justifyContent="center" xs={6} md={6}>
                        <Button onClick={() =>handleInvestigateClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Investigate</Button>
                        <Button onClick={() =>handleDeleteClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Delete</Button>
                    </Grid>
                    ) : (
                    <Grid item container justifyContent="center" xs={11} md={11}>
                        <Button onClick={() =>handleInvestigateClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Investigate</Button>
                        <Button onClick={() =>handleDeleteClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Delete</Button>
                    </Grid>
                )}
                {!detection.prototypeOne && (
                <Grid item xs={3} md={3}  justifyContent={"space-between"} >
                    <Grid container direction="column" justifyContent="space-between" style={{height: "100%"}}>
                        <Grid item xs={12} md={12}>
                            <Typography align="right" sx={{fontWeight: 700, fontSize: 15}}>
                                {imageDetectionTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography align="right" sx={{fontWeight: 700, fontSize: 15}}>
                                {ImageDetectionDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <Typography align="right" sx={{fontWeight: 700, fontSize: 15}}>
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
                            <Typography align="right" sx={{fontWeight: 700, fontSize: 8}}>
                                {imageDetectionTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography align="right" sx={{fontWeight: 700, fontSize: 8}}>
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