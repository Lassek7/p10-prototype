import react from 'react'
import Styles from './prototypeOneStyles/styles'
import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Card, Container, Grid, Box, CardContent } from '@mui/material'
import LargeScreenComponent from './components/LargeScreenComponent'
function PrototypeOne() {


    
return(
    <Container>
        <Box sx={{position: 'absolute', top: "1.56vh", left: "1.56vw", width: '22.69vw', height: '62.8%'}}>
            <TaskGoalsComponent />
        </Box>
        <Box sx={{ position: 'absolute', top: "5.55vh", left: "39.47vw", width: '45.26vw', height: '57.2vh'}}>            
            <LargeScreenComponent />
        </Box>
        <Box sx={{ position: 'absolute', top: "71.55vh", left: "1.56vw", right: '1.56vw', heigh: '11vh'}}>            
            <ScreensList />
        </Box>

</Container>
)}
export default  PrototypeOne

/* 
needs to b e made with a grid system but needs some adjusting to make it work and look the same         

<Container>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <TaskGoalsComponent />
        </Grid>
        <Grid item xs={12} md={6}>
            <LargeScreenComponent />
        </Grid>
        <Grid item xs={12}>
            <ScreensList />
        </Grid>
    </Grid>
</Container> */