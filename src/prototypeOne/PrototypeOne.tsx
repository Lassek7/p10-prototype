import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Grid, Typography } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
import { useNavigate, useLocation } from 'react-router-dom'
import './prototypeOneStyles/blur.css'
import TaskIntro from './components/TaskIntro'
import Styles from './prototypeOneStyles/styles'
import Questionnaire from './components/Questionnnaire'
import { saveToFile } from './globalFunctions.tsx/saveToFile'

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
    const [pauseTest, setPauseTest] = useState<boolean>(false)
    const [recentlyDeleted, setRecentlyDeleted] = useState<Array<detection>>([])
    const [selectedDetection, setSelectedDetection] = useState<detection>(detections[0])
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(false)
    const [openQuestionnaire, setOpenQuestionnaire] = useState<boolean>(false)
    const [testSetup, _] = useState<number>(userData.version)
    const [startTest, setStartTest] = useState<boolean>(false)
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) // used to remove detections from the list
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string| null>(detections[0].imageId);
    const [filterChoices, setFilterChoices] = useState<{[key: string]: boolean}>(
        {
            Vehicle: false,
            Person: false,
            Item: false
        });
    const [arrayToSave, setArrayToSave] = useState<Array<ArrayToSave>>([]); // used to save the list to a file
    const [seconds, setSeconds] = useState(240);
    const navigate = useNavigate();
    
    useEffect(() => { // timer for prototype, needs to add go to next part. actually maybe move out of here and one up to have a common timer? otherwise send a true out and up. timerDone = true
        if (seconds > 0 && startTest && !pauseTest) {
            const timerId = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearTimeout(timerId); // This will clear the timer if the component is unmounted before the timer finishes
        }
        if (seconds === 0) {
            setOpenQuestionnaire(true);
        }
    }, [seconds, startTest, pauseTest]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === '9') {
                setPauseTest(prevPauseTest => !prevPauseTest)
            }else if (event.key === '8') {
                setSeconds(10)
            }
        };
        // Add the event listener when the component mounts
        window.addEventListener('keydown', handleKeyPress);
        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 

    useEffect(() => {
        if (testSetup === 1 && questionnaireCompleted) {
            //saveToFile(arrayToSave, userData.participantId, 'Prototype 1 test');
            navigate('/prototypeTwo', {state: userData}); 
        } else if (testSetup === 2 && questionnaireCompleted) {
           // saveToFile(arrayToSave, userData.participantId, 'Prototype 1 test');
            navigate('/prototypeThree', {state: userData}); 
        }
    },[questionnaireCompleted])

    const handleSmallScreenClick = useCallback((imageId: string) => {
        const index = AllDetections.findIndex(detection => detection.imageId === imageId);
        setSelectedDetection(AllDetections[index])
    }, [AllDetections]);

    const handleDeleteClick = useCallback((imageId: string) => {
        const removedDetection = AllDetections.filter(detection => detection.imageId === imageId)
        setRecentlyDeleted(removedDetection)        
        
        let newAllDetections = AllDetections.filter(detection => detection.imageId !== imageId);
        setAllDetections(newAllDetections);
        const saveDetectionAction = {
            imageId: removedDetection[0].imageId,
            points: removedDetection[0].deletePoints,
            chosenAction: 'Delete'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);
    }, [AllDetections]);

    const handleInvestigateClick= useCallback((imageId: string) => {
        const removedDetection = AllDetections.filter(detection => detection.imageId === imageId)
        setRecentlyDeleted(removedDetection)

        let newAllDetections = AllDetections.filter(detection => detection.imageId !== imageId);
        setAllDetections(newAllDetections);
        const saveDetectionAction = {
            imageId: removedDetection[0].imageId,
            points: removedDetection[0].deletePoints,
            chosenAction: 'Investigate'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);
    }, [AllDetections]);

    useEffect(() => {
        const newRenderedDetectionList = AllDetections

        if(recentlyDeleted.length > 0 && newRenderedDetectionList.length > 0) {
            //console.log("i crash here" )
            const indexInOldList = renderedDetectionList.findIndex(detection => detection.imageId === recentlyDeleted[0]?.imageId) // finds the location of the old item

            const indexInNewList: number = indexInOldList >= newRenderedDetectionList.length ? AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[newRenderedDetectionList.length-1].imageId) : AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[indexInOldList].imageId) // if the index is out of bounds, set it to the last item in the list

            setSelectedDetection(AllDetections[indexInNewList])
            setIsSelected(AllDetections[indexInNewList].imageId)
        } else {
            if (AllDetections.length > 0) {
                setIsSelected(AllDetections[0].imageId)
            }        
        }
        setRenderedDetectionList(newRenderedDetectionList);

    },[AllDetections])

    // use the styles data in the following for the actuan components then make this to a grid system
    if(startTest) {
        return(
            <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
                <Grid item xs={12} md={6}>
                    <TaskGoalsComponent prototypeThree={false} selectedDetection={selectedDetection} taskId={1}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LargeScreenComponent prototypeOne={true} prototypeThree={false} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} selectedDetection={selectedDetection}/>
                    <Typography sx={Styles.timer}>
                            {minutes}:{remainingSeconds} 
                    </Typography>   
                </Grid>
                <Grid item xs={12}>
                    <ScreensList prototypeOne={true} setScreenIndex={handleSmallScreenClick} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
                </Grid>
                <Questionnaire questionnaireName={"Prototype 1"} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} userName={userData.participantId}/>
            </Grid>
    )} else {
        return(
            <TaskIntro taskId={1} setStartTest={setStartTest}/>
        )
    }
}
    
