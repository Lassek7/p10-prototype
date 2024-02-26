import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { Person } from '@mui/icons-material';
import Styles from '../prototypeOneStyles/styles'


export default function AlertBox() {
    return (
        <Card sx={Styles.alertBox} >
            <Grid container sx={{direction: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%'}} >
                <Grid container justifyContent={'space-between'}  alignItems={'center'} sx={{ height: '25.09%'}}>
                    <Grid item xs={6}>
                        <Typography  textAlign={'left'} ml={"20%"}>
                            Alert
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  textAlign={'right'} mr={"20%"}>
                            test
                        </Typography>
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