import { Card, CardMedia, Grid, Typography, Badge } from '@mui/material';
import { Person } from '@mui/icons-material';
import Styles from '../prototypeOneStyles/styles'

interface alertBoxProps {
    imageId: string,
    imageUrl: string, //image: image1
    imageIcon: JSX.Element,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    inactive: boolean, //maybe abother name and maybe should not be here?
}

export default function AlertBox() {
    return (
        <Card sx={Styles.alertBox} >
            <Grid container sx={{direction: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%'}} >
                <Grid container justifyContent={'space-between'}  alignItems={'center'} sx={{ height: '25.09%'}}>
                    <Grid item xs={6}>
                        <Typography  textAlign={'left'} ml={"20%"} sx={{color: '#D61D1D'}}>
                            Alert
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Badge color="error" badgeContent={1} showZero>                       
                        </Badge>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{height: '57.4%'}}>
                    <CardMedia component="img" sx={{ height: '100%', objectFit: 'fit' }} image="https://source.unsplash.com/random" alt='Image' />
                </Grid>
                <Grid item xs={4}>
                    <Typography >
                        #test
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    < Person />
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        test
                    </Typography>
                    <Typography>
                        test
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}