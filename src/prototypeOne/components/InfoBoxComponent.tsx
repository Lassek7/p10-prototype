
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
            <Grid container sx={Styles.screenInfoBox}>
                <Grid item xs={!detection.prototypeOne ? 3 : 1} >
                    <Grid container  direction="column" justifyContent="space-between" alignItems="flex-start"  style={{  height: '100%'}}>
                        <Grid item >
                            <Typography sx={Styles.largeInfoBoxTypographyId}>
                                {imageId}
                            </Typography>
                        </Grid>
                        {!detection.prototypeOne && (
                        <Grid item sx={{ marginBottom: -2}}>
                            <Typography  sx={Styles.largeInfoBoxTypography}>
                                {imageIcon} {imageDetectionContext}
                            </Typography>
                        </Grid>
                        )}
                    </Grid>
                </Grid>
                {!detection.prototypeOne ? (
                    <Grid item container sx={{ Direction: 'row', justifyContent:"center", alignItems:"center", marginTop: '1.5%'}}  xs={6} >
                        <Button onClick={() =>handleInvestigateClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Investigate</Button>
                        <Button onClick={() =>handleDeleteClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Delete</Button>
                    </Grid>
                    ) : (
                    <Grid item container sx={{ Direction: 'row', justifyContent:"center", alignItems:"center"}} xs={11} >
                        <Button onClick={() =>handleInvestigateClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Investigate</Button>
                        <Button onClick={() =>handleDeleteClick(detection.index)} variant="outlined" sx={Styles.InfoBoxButton}>Delete</Button>
                    </Grid>
                )}
                {!detection.prototypeOne && (
                    <Grid item xs={3}  sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: -2}}>
                        <Typography sx={Styles.largeInfoBoxTypography}>
                            {imageDetectionTime}
                        </Typography>
                        <Typography  sx={Styles.largeInfoBoxTypography}>
                            {ImageDetectionDate}
                        </Typography>
                        <Typography  sx={Styles.largeInfoBoxTypography}>
                            {timeSinceDetection}
                        </Typography>
                    </Grid>
                )}  
            </Grid>
    )
}

export function SmallScreenInfoBoxComponent( detection: detection) {
    const { imageId, imageIcon, imageDetectionTime, ImageDetectionDate } = detection;
    return (
        <Box sx={Styles.smallInfoBoxTextAlignment}>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}  >
                <Grid item>
                    <Typography align="left" sx={Styles.smallInfoBoxTypographyLeft}>
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
                    <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'center'}} direction="column">
                        <Grid item xs={12} md={12}>
                            <Typography align="right" sx={Styles.smallInfoBoxTypographyRight}>
                                {imageDetectionTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography align="right" sx={Styles.smallInfoBoxTypographyRight}>
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