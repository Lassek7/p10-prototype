import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
import { useNavigate, useLocation } from 'react-router-dom'
import TaskIntro from './components/TaskIntro'
import './prototypeOneStyles/blur.css'
import Styles from './prototypeOneStyles/styles'
import Questionnaire from './components/Questionnnaire'

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
    deletePoints: number,
    investigatePoints: number,
    detectionWeight: number,
    isUnseen: boolean
}

interface ArrayToSave {
    imageId: string,
    points: number,
    chosenAction: string,
}

export default function PrototypeTwo() {
    
    const location = useLocation()
    const userData = location.state
    //const userName = userData.participantId
/*
    const fs = require('fs');
    const path = require('path');
    const Papa = require('papaparse');
*/
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(false)
    const [openQuestionnaire, setOpenQuestionnaire] = useState<boolean>(false)
    const [testSetup, _] = useState<number>(userData.version)
    const [startTest, setStartTest] = useState<boolean>(false)
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
    const [arrayToSave, setArrayToSave] = useState<Array<ArrayToSave>>([]); // used to save the list to a file
    const [seconds, setSeconds] = useState(300);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userData)
    }, [arrayToSave]);

    useEffect(() => { // timer for prototype, needs to add go to next part. actually maybe move out of here and one up to have a common timer? otherwise send a true out and up. timerDone = true
        if (seconds > 0 && startTest) {
            const timerId = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearTimeout(timerId); // This will clear the timer if the component is unmounted before the timer finishes
        }
        if (seconds === 0) {
            setOpenQuestionnaire(true);
        }
    }, [seconds, startTest]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    useEffect(() => {
        if (testSetup === 1 && questionnaireCompleted) {
        //    saveToFile(arrayToSave);
            navigate('/prototypeThree', {state: userData}); //Change to task description
        }
    },[questionnaireCompleted])

    const handleLargescreenSwap = (imageIndex: number) => {
        setSelectedScreenIndex(imageIndex)
    }
    const handleDeleteClick = (imageIndex: number) => { //move this into Screenslist. so the deletion happens in there and based on the renderlist
        const saveDetectionAction = {
            imageId: renderedDetectionList[imageIndex].imageId,
            points: renderedDetectionList[imageIndex].deletePoints,
            chosenAction: 'Delete'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);

        let newAllDetections = AllDetections.filter((_, index) => AllDetections[index].imageId !== renderedDetectionList[imageIndex].imageId);
        let newRenderedDetectionList = renderedDetectionList.filter((_, index) => index !== imageIndex);
        setRenderedDetectionList(newRenderedDetectionList);
        setAllDetections(newAllDetections);

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
        const saveDetectionAction = {
            imageId: renderedDetectionList[imageIndex].imageId,
            points: renderedDetectionList[imageIndex].deletePoints,
            chosenAction: 'Delete'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);
        
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

            }
            if (isSelected === undefined || isSelected === null) {
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

/*
function saveToFile(arrayToSave: Array<detection>) {1
    const csv = Papa.unparse(arrayToSave);
    const filePath = path.join(__dirname, userName + 'PrototypeTwo.csv');
    fs.writeFile(filePath, csv, (err: any) => {
      if (err) {
        console.error('Error writing file', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
  }
*/
 
    return(
        <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
        <TaskIntro taskId={2} setStartTest={setStartTest}/>
            <Grid item xs={12} md={6}>
                <TaskGoalsComponent  prototypeThree={false} renderedDetectionsList={renderedDetectionList} imageIndex={selectedScreenIndex}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LargeScreenComponent prototypeThree={false} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} imageIndex={selectedScreenIndex} renderedDetectionsList={renderedDetectionList}/>
                <Typography sx={Styles.timer}>
                        {minutes}:{remainingSeconds} 
                </Typography>   
            </Grid>
            <Grid item xs={12}>
                <ScreensList setScreenIndex={handleLargescreenSwap} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
            </Grid>
            <Questionnaire questionnaireId={2} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} />
        </Grid>
    )
}
    
