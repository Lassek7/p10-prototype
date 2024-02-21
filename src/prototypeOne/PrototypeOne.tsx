import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Container,  Box } from '@mui/material'
import { useState } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
export default function PrototypeOne() {

    interface detection {
        imageId: string,
        imageUrl: string,
        imageIcon: JSX.Element,
        imageDetectionContext: string,
        imageDetectionTime: string,
        ImageDetectionDate: string,
        timeSinceDetection: string,
        filterID: string
    }

    const [selectedScreenIndex, setSelectedScreenIndex] = useState<number>(0);
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) // used to remove detections from the list


    const handleLargescreenSwap = (imageIndex: number) => {
        setSelectedScreenIndex(imageIndex)
    }
    const handleDeleteClick = (imageIndex: number) => {
        if (AllDetections.length === 1){
            setAllDetections(detections) // modify for what we want it to do after no detections are left, if that happens. this avoids system crash if all detections are removed, currenlty crashes if the last item in the list is deleted unless it is the last of all. i think it is because it set the new index to the same position and if that does not exst.. dead
        }
        else{            
            setAllDetections(AllDetections.filter((_, index) => index !== imageIndex))
        }
    }
    const handleInvestigateClick = (imageIndex: number) => {
        setAllDetections(AllDetections.filter((_, index) => index !== imageIndex))
    }

    // use the styles data in the following for the actuan components then make this to a grid system
    return(
        <Container>
            <Box sx={{position: 'absolute', top: "1.56vh", left: "1.56vw", width: '22.69vw', height: '62.8%'}}> 
                <TaskGoalsComponent />
            </Box>
            <Box sx={{ position: 'absolute', top: "5.55vh", left: "39.47vw", width: '45.26vw', height: '57.2vh'}}>            
                <LargeScreenComponent prototypeOne={true} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} imageIndex={selectedScreenIndex} detectionsList={AllDetections}/>
            </Box>
            <Box sx={{ position: 'absolute', top: "71.55vh", left: "1.56vw", right: '1.56vw', heigh: '11vh'}}>            
                <ScreensList prototypeOne={true} setScreenIndex={handleLargescreenSwap} detectionsList={AllDetections} selectedScreenIndex={selectedScreenIndex} />
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
        <LargeScreenComponent prototypeOne={true} imageIndex={selectedScreenIndex} detectionsList={AllDetections}/>
    </Grid>
    <Grid item xs={12}>
        <ScreensList prototypeOne={false} setScreenIndex={handleLargescreenSwap} detectionsList={AllDetections}/>
    </Grid>
    </Grid>
</Container> 

<Container>
    <Box sx={{position: 'absolute', top: "1.56vh", left: "1.56vw", width: '22.69vw', height: '62.8%'}}>
        <TaskGoalsComponent />
    </Box>
    <Box sx={{ position: 'absolute', top: "5.55vh", left: "39.47vw", width: '45.26vw', height: '57.2vh'}}>            
        <LargeScreenComponent prototypeOne={true} imageIndex={selectedScreenIndex} detectionsList={AllDetections}/>
    </Box>
    <Box sx={{ position: 'absolute', top: "71.55vh", left: "1.56vw", right: '1.56vw', heigh: '11vh'}}>            
        <ScreensList prototypeOne={false} setScreenIndex={handleLargescreenSwap} detectionsList={AllDetections}/>
    </Box>
</Container>

*/