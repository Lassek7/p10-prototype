import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
import { useNavigate, useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import Styles from './prototypeOneStyles/styles'
import TaskIntro from './components/TaskIntro'
import './prototypeOneStyles/blur.css'
import Questionnaire from './components/Questionnnaire'

export default function Exploration() {

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
 
    const location = useLocation()
    const userData = location.state

    const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(false)
    const [openQuestionnaire, setOpenQuestionnaire] = useState<boolean>(false)
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
    const [seconds, setSeconds] = useState(10);
    const navigate = useNavigate();


    
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
        if (questionnaireCompleted) {
            navigate('/prototypeOne', {state: userData}); //Change to task description
        }
    },[questionnaireCompleted])

    const handleLargescreenSwap = (imageIndex: number) => {
        setSelectedScreenIndex(imageIndex)
    }
    const handleDeleteClick = (imageIndex: number) => { //move this into Screenslist. so the deletion happens in there and based on the renderlist

        let newAllDetections = AllDetections.filter((_, index) => AllDetections[index].imageId !== renderedDetectionList[imageIndex].imageId);
        let newRenderedDetectionList = renderedDetectionList.filter((_, index) => index !== imageIndex);
        setRenderedDetectionList(newRenderedDetectionList);
        setAllDetections(newAllDetections);

        // If the selected index is out of bounds, sets it one lower
        if (selectedScreenIndex >= newRenderedDetectionList.length ) {
            setSelectedScreenIndex(newRenderedDetectionList.length-1); // goes 1 below the max length
        } 
        
        if (AllDetections.length === 1) {
            navigate('/prototypeOne', {state: userData}); //Change to task description
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
        if (AllDetections.length === 1) {
            navigate('/prototypeOne', {state: userData}); //Change to task description
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
        <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
            <TaskIntro taskId={0} setStartTest={setStartTest}/>
            <Grid item xs={12} md={6} >
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
            <Questionnaire questionnaireId={0} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} />
        </Grid>
    )
}
    
