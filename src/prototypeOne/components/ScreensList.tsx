import { Grid, Card, Box, CardContent, CardHeader, Typography, Divider } from '@mui/material'
import SmallScreenComponent from './SmallScreenComponent'
import ArrowComponent from './ArrowComponent'
export default function ScreensList() {
    const screens = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return (

        <Card sx={{borderRadius: "16px"}}>
            <Grid container spacing={0.1}>
                <Grid item xs={12} md={12}>
                    <CardHeader title="All detections" align="left" />
                    <Divider sx={{borderBottomWidth: 3}}/>
                </Grid>
                <Grid item xs={12} md={0.4} sx={{display: 'flex'}}>
                    <ArrowComponent />
                </Grid>
                <Grid item xs={12} md={11.2} sx={{display: 'flex', flexDirection: 'row',overflowX: "scroll", justifyContent:"space-between"}}>
                        {screens.map((index) => (
                           <Box key={index} sx={{ marginLeft: "1.56%", marginBottom: ".84%", marginTop: "1.56%" }}>
                        <SmallScreenComponent />
                       </Box>
                         ))}
                </Grid>
                <Grid item xs={12} md={0.4} sx={{display: 'flex'}} style={{transform: 'rotate(180deg)'}}>
                    <ArrowComponent />
                </Grid>
            </Grid>
            <style>{`::-webkit-scrollbar { display: none; }`}</style>
        </Card>
    )
}


/*
<Card sx={{borderRadius: "16px"}}>
<Box sx={{ marginLeft: "1%", justifyContent: 'center'}}>
    <CardHeader title="All detections" align="left" />
</Box>
<Divider sx={{borderBottomWidth: 3}}/>
<CardContent sx={{display: 'flex', flexDirection: 'row',overflowX: "scroll", justifyContent:"space-between", marginTop: "1.56%"}}>
    {screens.map((index) => (
        <Box key={index} sx={{ marginLeft: "1.56%", marginBottom: ".42%" }}>
            <SmallScreenComponent />
        </Box>
    ))}
</CardContent>
<style>{`::-webkit-scrollbar { display: none; }`}</style>
</Card>
*/