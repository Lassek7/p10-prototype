
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
    index: number,
    onDeleteClick: (imageIndex: number) => void,
    onInvestigateClick: (imageIndex: number) => void,
    prototypeThree: boolean,
    investigateRecommended: boolean
}



export function LargeScreenInfoBoxComponent( largeScreen: largeScreen) {

    const handleDeleteClick = (imageIndex: number) => {
        largeScreen.onDeleteClick(imageIndex)
    }
    const handleInvestigateClick = (imageIndex: number) => {
        largeScreen.onInvestigateClick(imageIndex)
    }
    return (
        <Grid container sx={Styles.largeScreenInfoBox}>
            <Grid item xs={!largeScreen.prototypeOne ? 3 : 1} >
                <Grid container  direction="column" justifyContent="space-between" alignItems="flex-start"  style={{  height: '100%'}}>
                    <Grid item >
                        <Typography sx={Styles.largeInfoBoxTypographyId}>
                            {largeScreen.imageId}
                        </Typography>
                    </Grid>
                    {!largeScreen.prototypeOne && (
                    <Grid item sx={{ marginBottom: -2,}}>
                        <Box display="flex" >
                            <Typography  sx={Styles.largeInfoBoxTypography(largeScreen.prototypeThree)}>
                                {largeScreen.imageIcon}
                            </Typography>
                            <Typography  sx={Styles.largeInfoBoxTypography(largeScreen.prototypeThree)}>
                                {largeScreen.imageDetectionContext}
                            </Typography>
                        </Box>
                    </Grid>
                    )}
                </Grid>
            </Grid>
            {!largeScreen.prototypeOne ? (
                <Grid item container sx={{ Direction: 'row', justifyContent:"center", alignItems:"center", marginTop: '1.5%'}}  xs={6} >
                    <Button onClick={() =>handleDeleteClick(largeScreen.index)} variant={largeScreen.prototypeThree &&  !largeScreen.investigateRecommended? 'contained' : 'outlined'} sx={Styles.infoBoxButton(largeScreen.prototypeThree,  !largeScreen.investigateRecommended)}>Delete</Button>
                    <Button onClick={() =>handleInvestigateClick(largeScreen.index)} variant={largeScreen.prototypeThree && largeScreen.investigateRecommended? 'contained' : 'outlined'} sx={Styles.infoBoxButton(largeScreen.prototypeThree, largeScreen.investigateRecommended)}>Investigate</Button>
                </Grid>
                ) : (
                <Grid item container sx={{ Direction: 'row', justifyContent:"center", alignItems:"center"}} xs={11} >
                    <Button onClick={() =>handleDeleteClick(largeScreen.index)}  variant='outlined' sx={Styles.infoBoxButton(largeScreen.prototypeThree)}>Delete</Button>
                    <Button onClick={() =>handleInvestigateClick(largeScreen.index)} variant='outlined' sx={Styles.infoBoxButton(largeScreen.prototypeThree)}>Investigate</Button>
                </Grid>
            )}
            {!largeScreen.prototypeOne && (
                <Grid item xs={3}  sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: -2}}>
                    <Typography sx={Styles.largeInfoBoxTypography()}>
                        {largeScreen.imageDetectionTime}
                    </Typography>
                    <Typography  sx={Styles.largeInfoBoxTypography()}>
                        {largeScreen.ImageDetectionDate}
                    </Typography>
                    <Typography  sx={Styles.largeInfoBoxTypography()}>
                        {largeScreen.timeSinceDetection}
                    </Typography>
                </Grid>
            )}  
        </Grid>
    )
}

export function SmallScreenInfoBoxComponent( smallScreen: smallScreen) {
    const { imageId, imageIcon, imageDetectionTime, ImageDetectionDate } = smallScreen;
    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={4} textAlign={'left'}>
                <Typography  sx={Styles.smallInfoBoxTypographyLeft}>
                    {imageId}
                </Typography>
            </Grid>
            {!smallScreen.prototypeOne && (
            <Grid item xs={4} textAlign={'center'}>
                <Typography >
                    {imageIcon}
                </Typography>
            </Grid>
            )}
            {!smallScreen.prototypeOne && (
            <Grid item xs={4} textAlign={'right'} >
                <Typography  sx={Styles.smallInfoBoxTypographyRight}>
                    {imageDetectionTime}
                </Typography>
                <Typography  sx={Styles.smallInfoBoxTypographyRight}>
                    {ImageDetectionDate}
                </Typography>
            </Grid>
            )}
        </Grid>
    )
}