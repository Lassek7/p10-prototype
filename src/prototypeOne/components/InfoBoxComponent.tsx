
import {Box, Button, Grid, Typography } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';

interface smallScreen {
    prototypeOne?: boolean,
    imageId: string,
    imageIcon: JSX.Element,
    imageDetectionTime: string,
    ImageDetectionDate: string,


}

interface largeScreen {
    showButtons?: boolean,
    prototypeOne?: boolean,
    imageId: string,
    imageIcon: JSX.Element,
    imageDetectionContext?: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection?: string,
    onDeleteClick: (ImageId: string) => void,
    onInvestigateClick: (imageId: string) => void,
    prototypeThree: boolean,
    investigateRecommended: boolean,
}



export function LargeScreenInfoBoxComponent( largeScreen: largeScreen) {

    const handleDeleteClick = (imageId: string) => {
        largeScreen.onDeleteClick(imageId)
    }
    const handleInvestigateClick = (imageId: string) => {
        largeScreen.onInvestigateClick(imageId)
    }
    return (
        <Grid container >
            <Grid item xs={!largeScreen.prototypeOne ? 3 : 1} >
                <Grid container  direction="column"  alignItems="flex-start"  style={{  height: '100%'}}>
                    <Grid item >
                        <Typography sx={Styles.largeScreenInfoBoxLeft()}>
                            {largeScreen.imageId}
                        </Typography>
                    </Grid>
                    {!largeScreen.prototypeOne ? (
                    <Grid item sx={{ marginBottom: -2,}}>
                        <Box display="flex" >
                            <Typography  sx={{...Styles.largeScreenInfoBoxLeft(largeScreen.prototypeThree), mt:"25.5%"}}>
                                {largeScreen.imageIcon}
                            </Typography>
                            <Typography  sx={{...Styles.largeScreenInfoBoxLeft(largeScreen.prototypeThree), mt:"24%"}}>
                                {largeScreen.imageDetectionContext}
                            </Typography>
                        </Box>
                    </Grid>
                    ):null}
                </Grid>
            </Grid>
            {!largeScreen.prototypeOne ? (
                <Grid item container sx={{ Direction: 'row', justifyContent:"center", alignItems:"center", marginTop: '1.5%'}}  xs={6} >
                    <Button onClick={() =>handleDeleteClick(largeScreen.imageId)} variant={largeScreen.prototypeThree &&  !largeScreen.investigateRecommended? 'contained' : 'outlined'} sx={Styles.infoBoxButton(largeScreen.prototypeThree,  !largeScreen.investigateRecommended)}>Delete</Button>
                    <Button onClick={() =>handleInvestigateClick(largeScreen.imageId)} variant={largeScreen.prototypeThree && largeScreen.investigateRecommended? 'contained' : 'outlined'} sx={Styles.infoBoxButton(largeScreen.prototypeThree, largeScreen.investigateRecommended)}>Investigate</Button>
                </Grid>
                ) : (
                <Grid item container sx={{ Direction: 'row', justifyContent:"center", alignItems:"center"}} xs={11} >
                    <Button onClick={() =>handleDeleteClick(largeScreen.imageId)}  variant='outlined' sx={Styles.infoBoxButton(largeScreen.prototypeThree)}>Delete</Button>
                    <Button onClick={() =>handleInvestigateClick(largeScreen.imageId)} variant='outlined' sx={Styles.infoBoxButton(largeScreen.prototypeThree)}>Investigate</Button>
                </Grid>
            )}
            {!largeScreen.prototypeOne ? (
                <Grid item xs={3}  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Typography sx={Styles.largeScreenInfoBoxRightTop}>
                        {largeScreen.imageDetectionTime}
                    </Typography>
                    <Typography  sx={Styles.largeScreenInfoBoxRightTop}>
                        {largeScreen.ImageDetectionDate}
                    </Typography>
                    <Typography  sx={Styles.largeScreenInfoBoxRightBottom}>
                        {largeScreen.timeSinceDetection}
                    </Typography>
                </Grid>
            ):null}  
        </Grid>
    )
}

export function SmallScreenInfoBoxComponent( smallScreen: smallScreen) {
    const { imageId, imageIcon, imageDetectionTime, ImageDetectionDate } = smallScreen;
    return (
        <Grid container sx={{direction: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
            <Grid item xs={4}>
                <Typography  sx={Styles.smallInfoBoxTypographyLeft}>
                    {imageId}
                </Typography>
            </Grid>
            {!smallScreen.prototypeOne ? (
            <Grid item xs={4}>
                <Typography sx={{textAlign:"center"}}>
                    {imageIcon}
                </Typography>
            </Grid>
            ):null}
            {!smallScreen.prototypeOne ? (
            <Grid item xs={4} >
                <Typography  sx={Styles.smallInfoBoxTypographyRight}>
                    {imageDetectionTime}
                </Typography>
                <Typography  sx={Styles.smallInfoBoxTypographyRight}>
                    {ImageDetectionDate}
                </Typography>
            </Grid>
            ):null}
        </Grid>
    )
}