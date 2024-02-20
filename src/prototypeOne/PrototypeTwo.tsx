import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Container,  Box } from '@mui/material'
import { useState } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
export default function PrototypeTwo() {

    interface detection {
        imageId: string,
        imageUrl: string,
        imageIcon: JSX.Element,
        imageDetectionContext: string,
        imageDetectionTime: string,
        ImageDetectionDate: string,
        timeSinceDetection: string
    }

    const [selectedScreenIndex, setScreenIndex] = useState<number | null>(null);
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) // used to remove detections from the list

    const handleLargescreenSwap = (imageIndex: number) => {
        setScreenIndex(imageIndex)
    }
    // use the styles data in the following for the actuan components then make this to a grid system
    return(
        <Container>
            <Box sx={{position: 'absolute', top: "1.56vh", left: "1.56vw", width: '22.69vw', height: '62.8%'}}> 
                <TaskGoalsComponent />
            </Box>
            <Box sx={{ position: 'absolute', top: "5.55vh", left: "39.47vw", width: '45.26vw', height: '57.2vh'}}>            
                <LargeScreenComponent imageIndex={selectedScreenIndex} detectionsList={AllDetections}/>
            </Box>
            <Box sx={{ position: 'absolute', top: "71.55vh", left: "1.56vw", right: '1.56vw', heigh: '11vh'}}>            
                <ScreensList setScreenIndex={handleLargescreenSwap} detectionsList={AllDetections}/>
            </Box>
    </Container>
    )}
    

/* 
needs to b e made with a grid system but needs some adjusting to make it work and look the same         

<Container>
    <Grid item xs={12} md={6}>
        <TaskGoalsComponent />
    </Grid>
    <Grid item xs={12} md={6}>
        <LargeScreenComponent imageIndex={selectedScreenIndex} detectionsList={AllDetections}/>
    </Grid>
    <Grid item xs={12}>
        <ScreensList setScreenIndex={handleLargescreenSwap} detectionsList={AllDetections}/>
    </Grid>
    </Grid>
</Container> 

<Container>
    <Box sx={{position: 'absolute', top: "1.56vh", left: "1.56vw", width: '22.69vw', height: '62.8%'}}>
        <TaskGoalsComponent />
    </Box>
    <Box sx={{ position: 'absolute', top: "5.55vh", left: "39.47vw", width: '45.26vw', height: '57.2vh'}}>            
        <LargeScreenComponent imageIndex={selectedScreenIndex} detectionsList={AllDetections}/>
    </Box>
    <Box sx={{ position: 'absolute', top: "71.55vh", left: "1.56vw", right: '1.56vw', heigh: '11vh'}}>            
        <ScreensList setScreenIndex={handleLargescreenSwap} detectionsList={AllDetections}/>
    </Box>
</Container>

*/