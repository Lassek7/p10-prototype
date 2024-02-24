import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Container,  Box, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
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
        timeSinceDetection: string,
        filterID: string
    }

    const [selectedScreenIndex, setSelectedScreenIndex] = useState<number>(0);
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) 
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string | null>(null);
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
            setSelectedScreenIndex(newRenderedDetectionList.length-1); // if the last item in the list is deleted, it set the selected index to the new last item (1 below previous index)
            // setSelectedScreenIndex(0); // set it to zero

        } 
        
        if (newRenderedDetectionList.length === 0 && renderedDetectionList.length != AllDetections.length) { //ensures that if all detections in a filter are deleted, the remainder of the other detections are rendered, the last part of the condition ensures that the last item in the list is not displayed even though its supposed to be deleted
            filterChoices.Vehicle = false
            filterChoices.Person =false
            filterChoices.Item = false
            setRenderedDetectionList(AllDetections);
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
                
        if (newRenderedDetectionList.length === 0 && renderedDetectionList.length != AllDetections.length) {
            filterChoices.Vehicle = false
            filterChoices.Person =false
            filterChoices.Item = false
            setRenderedDetectionList(AllDetections);
        }
    }

    useEffect(() => { // controls filtering of the list
        const newRenderedDetectionList = AllDetections.filter(AllDetections => filterChoices[AllDetections.filterID]);
    
        // If no filter is selected, show all
        if (!filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item) {
            if (isSelected != null) {
                setSelectedScreenIndex(AllDetections.findIndex(detection => detection.imageId === isSelected));
                console.log("no more items again")

            }
            console.log(isSelected)
            if (isSelected === undefined || isSelected === null) {
                console.log("no more items")
                setIsSelected(AllDetections[0]?.imageId);

            }
            setRenderedDetectionList(AllDetections);
        } else {
            // Check if the currently selected item is in the new list
            const currentSelectedImageId = renderedDetectionList[selectedScreenIndex]?.imageId; // Add optional chaining here
            const newIndex = newRenderedDetectionList.findIndex(detection => detection.imageId === currentSelectedImageId);
    
            if(newIndex !== -1) {
                // If the currently selected item is in the new list, update the selectedScreenIndex to its new index
                setSelectedScreenIndex(newIndex);
                setIsSelected(newRenderedDetectionList[newIndex]?.imageId);
            } else {
                // If the currently selected item is not in the new list, reset the selectedScreenIndex to 0
                setSelectedScreenIndex(0);
                setIsSelected(newRenderedDetectionList[0]?.imageId);
            }
    
            // Update renderedDetectionList after updating selectedScreenIndex and isSelected
            setRenderedDetectionList(newRenderedDetectionList);
        }
    }, [filterChoices]); // whenever the filterChoices change, this effect will run

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
                <LargeScreenComponent onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} imageIndex={selectedScreenIndex} renderedDetectionsList={renderedDetectionList}/>
            </Grid>
            <Grid item xs={12}>
                <ScreensList setScreenIndex={handleLargescreenSwap} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
            </Grid>
        </Grid>
    )
}
    
