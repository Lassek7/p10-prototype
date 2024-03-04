import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
import { useNavigate, useLocation } from 'react-router-dom'
import './prototypeOneStyles/blur.css'
import TaskIntro from './components/TaskIntro'
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
export default function PrototypeOne() {   
    const location = useLocation()
    const userData = location.state
//    const userName = userData.participantId
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
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) // used to remove detections from the list
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string| null>(null);
    const [filterChoices, setFilterChoices] = useState<{[key: string]: boolean}>(
        {
            Vehicle: false,
            Person: false,
            Item: false
        });
    const [arrayToSave, setArrayToSave] = useState<Array<ArrayToSave>>([]); // used to save the list to a file
    const [seconds, setSeconds] = useState(10);
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
            //saveToFile(arrayToSave);
            navigate('/prototypeTwo', {state: userData}); //Change to Questionnaire
        } else if (testSetup === 2 && questionnaireCompleted) {
            //saveToFile(arrayToSave);
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
            setSelectedScreenIndex(newRenderedDetectionList.length-1); // goes 1 below the max length
        } 
    }
    const handleInvestigateClick = (imageIndex: number) => {
        const saveDetectionAction = {
            imageId: renderedDetectionList[imageIndex].imageId,
            points: renderedDetectionList[imageIndex].investigatePoints,
            chosenAction: 'Investigate'
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
    }

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
    const filePath = path.join(__dirname, userName + 'Baseline.csv');
    fs.writeFile(filePath, csv, (err: any) => {
      if (err) {
        console.error('Error writing file', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
  }
 */ 

    // use the styles data in the following for the actuan components then make this to a grid system
    return(
        <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
            <TaskIntro taskId={1} setStartTest={setStartTest}/>
            <Grid item xs={12} md={6}>
                <TaskGoalsComponent prototypeThree={false} renderedDetectionsList={renderedDetectionList} imageIndex={selectedScreenIndex}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LargeScreenComponent prototypeOne={true} prototypeThree={false} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} imageIndex={selectedScreenIndex} renderedDetectionsList={renderedDetectionList}/>
                <Typography sx={Styles.timer}>
                        {minutes}:{remainingSeconds} 
                </Typography>   
            </Grid>
            <Grid item xs={12}>
                <ScreensList prototypeOne={true} setScreenIndex={handleLargescreenSwap} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
            </Grid>
            <Questionnaire questionnaireId={1} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} />
        </Grid>
    )
}
    
