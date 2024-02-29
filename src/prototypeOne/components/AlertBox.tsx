import { Card, CardMedia, Grid, Typography, Badge } from '@mui/material';
import Styles from '../prototypeOneStyles/styles'

interface detection {
    imageId: string,
    imageUrl: string,
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    filterID: string,
    investigateRecommended: boolean,
    detectionWeight: number,
    isUnseen: boolean,
}

interface alertBoxProps {
    allDetections: Array<detection>,
    currentWeight: number,
    onAlertClick: (imageId: string) => void
}


export default function AlertBox({ onAlertClick, allDetections, currentWeight}: alertBoxProps) {
   
    const handleAlertClick = (imageId: string) => {
        onAlertClick(imageId)
    }
   
    const inactiveList = allDetections.filter((detection) => detection.isUnseen === true && detection.detectionWeight < currentWeight && currentWeight != undefined).sort((a, b) => a.detectionWeight - b.detectionWeight);
    if (inactiveList.length > 0) {
    return (
        <Card onClick = {() => handleAlertClick(inactiveList[0].imageId)} sx={Styles.alertBox} >
            <Grid container sx={{direction: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%'}} >
                <Grid container justifyContent={'space-between'}  alignItems={'center'} sx={{ height: '25.09%'}}>
                    <Grid item xs={6}>
                        <Typography  textAlign={'left'} ml={"20%"} sx={{color: '#D61D1D'}}>
                            Alert
                        </Typography>
                    </Grid>
                    <Grid item xs={6}> 
                        <Badge color="error" badgeContent={inactiveList.length} showZero>                     
                        </Badge>  
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{height: '57.4%'}}>
                    <CardMedia component="img" sx={{ height: '100%', objectFit: 'fit' }} image={inactiveList[0].imageUrl} alt='Image' />
                </Grid>
                <Grid item xs={4}>
                    <Typography >
                        {inactiveList[0].imageId}     
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    {inactiveList[0].imageIcon}
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        {inactiveList[0].imageDetectionTime}
                    </Typography>
                    <Typography>
                        {inactiveList[0].ImageDetectionDate}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
} else {
    return (
        <Card sx={Styles.alertBoxEmpty} >
            <Grid container sx={{direction: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%'}} >
                <Grid container justifyContent={'space-between'}  alignItems={'center'}>
                    <Grid item xs={6}>
                        <Typography  textAlign={'left'} ml={"20%"} sx={{color: '#343323'}}>
                            Alert
                        </Typography>
                    </Grid>
                    <Grid item xs={6}> 
                        <Badge color="error" badgeContent={0}>                     
                        </Badge>  
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}}

