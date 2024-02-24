import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Container,  Box, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
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
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string| null>(null);
    const [filterChoices, setFilterChoices] = useState<{[key: string]: boolean}>(
        {
            Vehicle: false,
            Person: false,
            Item: false
        });



    const handleLargescreenSwap = (imageIndex: number) => {
        setSelectedScreenIndex(imageIndex)
    }
    const handleDeleteClick = (imageIndex: number) => { //move this into Screenslist. so the deletion happens in there and based on the renderlist
        let newAllDetections = AllDetections.filter((_, index) => AllDetections[index].imageId !== renderedDetectionList[imageIndex].imageId);
        let newRenderedDetectionList = renderedDetectionList.filter((_, index) => index !== imageIndex);
        setRenderedDetectionList(newRenderedDetectionList);
        setAllDetections(newAllDetections);
        console.log(newRenderedDetectionList.length)
        // If the selected index is out of bounds, sets it one lower
        if (selectedScreenIndex >= newRenderedDetectionList.length ) {
            setSelectedScreenIndex(newRenderedDetectionList.length-1); // goes 1 below the max length
        } 
    }
    const handleInvestigateClick = (imageIndex: number) => {
        let newAllDetections = AllDetections.filter((_, index) => AllDetections[index].imageId !== renderedDetectionList[imageIndex].imageId);
        let newRenderedDetectionList = renderedDetectionList.filter((_, index) => index !== imageIndex);
        setRenderedDetectionList(newRenderedDetectionList);
        setAllDetections(newAllDetections);

        // If the selected index is out of bounds:
        if (selectedScreenIndex >= newRenderedDetectionList.length ) {
            setSelectedScreenIndex(newRenderedDetectionList.length-1); // goes 1 below the max length
           // setSelectedScreenIndex(0); // set it to zero
        } 
    }

    useEffect(() => {
        if (renderedDetectionList[selectedScreenIndex]) {
            setIsSelected(renderedDetectionList[selectedScreenIndex].imageId)
        } else {
            setIsSelected(renderedDetectionList[0]?.imageId); // reset to position 1 if the list gets emptied and reset
        }
    }, [AllDetections]);

    // use the styles data in the following for the actuan components then make this to a grid system
    return(
        <Grid container>
            <Grid item xs={12} md={6}>
                <TaskGoalsComponent />
            </Grid>
            <Grid item xs={12} md={6}>
                <LargeScreenComponent prototypeOne={true} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} imageIndex={selectedScreenIndex} renderedDetectionsList={renderedDetectionList}/>
            </Grid>
            <Grid item xs={12}>
                <ScreensList prototypeOne={true} setScreenIndex={handleLargescreenSwap} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
            </Grid>
        </Grid>
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