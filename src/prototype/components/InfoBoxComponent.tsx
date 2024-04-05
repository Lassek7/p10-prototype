
import {Box, Button, Grid, Typography, Card, CardMedia } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';
import { useEffect, useState } from 'react';

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
    markedImageUrl: string,
    imageId: string,
    imageIcon: JSX.Element,
    imageDetectionContext?: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    onDeleteClick: (ImageId: string) => void,
    onInvestigateClick: (imageId: string) => void,
    prototypeThree: boolean,
    isPrototypeTwo: boolean,
    investigateRecommended: boolean,
}



export function LargeScreenInfoBoxComponent( largeScreen: largeScreen) {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState("00");

    useEffect(() => {
        const currentTime = new Date()
        const detectionTime = new Date(largeScreen.timeSinceDetection)
        let diff = currentTime.getTime() - detectionTime.getTime();
        let minutes = Math.floor(diff / 60000); // 1 minute = 60000 milliseconds
        setMinutes(minutes);
        let seconds = ((diff % 60000) / 1000).toFixed(0).padStart(2, '0');
        seconds = seconds.padStart(2, '0')
        setSeconds(seconds);
    },[largeScreen.imageId])
  

    const handleDeleteClick = (imageId: string) => {
        largeScreen.onDeleteClick(imageId)
    }
    const handleInvestigateClick = (imageId: string) => {
        largeScreen.onInvestigateClick(imageId)
    }
    return (
        <Card sx={Styles.largeScreen(largeScreen.prototypeThree)}>  
            <Grid container  sx={{Direction: 'row', justifyContent:"space-between", alignItems:"center", height: "100%"}} >
                <Grid item xs={12} sx={{height: '80%'}}>
                    <CardMedia component="img" sx={{ height: '100%', objectFit: 'fill'}} image={largeScreen.markedImageUrl} alt='Image' /> 
                </Grid>
                
                <Grid container xs={!largeScreen.prototypeOne ? 3 : 1} sx={{Direction: 'column', justifyContent:"space-between", alignItems: !largeScreen.prototypeOne ? "center" : "flex-start", height: "20%"}} >
                    <Grid item xs={12}>
                        <Typography sx={Styles.largeScreenInfoBoxLeftTop(largeScreen.prototypeThree, largeScreen.isPrototypeTwo)}>
                            {largeScreen.imageId}
                        </Typography>
                    </Grid>
                    {!largeScreen.prototypeOne ? (
                        <Grid item xs={8}>
                            <Typography sx={{...Styles.largeScreenInfoBoxLeftBottom(largeScreen.prototypeThree), display: 'inline-flex', alignItems: 'left'}}>
                            <Box sx={{...Styles.FilterIconLargeScreen, marginRight: '0.5rem', display: 'inline-flex', }}>{largeScreen.imageIcon}</Box>
                            {largeScreen.imageDetectionContext}
                            </Typography>
                        </Grid>
                    ):null}
                </Grid>


                {!largeScreen.prototypeOne ? (
                    <Grid item xs={6} >
                        <Button onClick={() =>handleDeleteClick(largeScreen.imageId)} variant={largeScreen.prototypeThree &&  !largeScreen.investigateRecommended? 'contained' : 'outlined'} sx={Styles.infoBoxButton(largeScreen.prototypeThree, largeScreen.isPrototypeTwo,  !largeScreen.investigateRecommended)}>Delete</Button>
                        <Button onClick={() =>handleInvestigateClick(largeScreen.imageId)} variant={largeScreen.prototypeThree && largeScreen.investigateRecommended? 'contained' : 'outlined'} sx={Styles.infoBoxButton(largeScreen.prototypeThree, largeScreen.isPrototypeTwo, largeScreen.investigateRecommended)}>Investigate</Button>
                    </Grid>
                    ) : (
                    <Grid item xs={11} >
                        <Button onClick={() =>handleDeleteClick(largeScreen.imageId)}  variant='outlined' sx={Styles.infoBoxButton(largeScreen.prototypeThree, largeScreen.isPrototypeTwo)}>Delete</Button>
                        <Button onClick={() =>handleInvestigateClick(largeScreen.imageId)} variant='outlined' sx={Styles.infoBoxButton(largeScreen.prototypeThree, largeScreen.isPrototypeTwo)}>Investigate</Button>
                    </Grid>
                )}
                {!largeScreen.prototypeOne ? (
                    <Grid container xs={3} sx={{Direction: 'column', justifyContent: 'space-between', alignItems: 'center', height: "20%"}}>
                        <Grid item xs={12} >
                            <Typography sx={Styles.largeScreenInfoBoxRight}>
                                {largeScreen.imageDetectionTime.toString()}
                            </Typography>
                            <Typography  sx={Styles.largeScreenInfoBoxRight}>
                                {largeScreen.ImageDetectionDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography  sx={Styles.largeScreenInfoBoxRight}>
                                {minutes >= 1 ? minutes > 1 ? minutes + " minutes ago" : minutes + " minute ago" : seconds + " seconds ago"}
                            </Typography>
                        </Grid>
                    </Grid>
                ):null}  
            </Grid>
        </Card>
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
                <Typography sx={{...Styles.FilterIconsmallScreen, textAlign:"center"}}>
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