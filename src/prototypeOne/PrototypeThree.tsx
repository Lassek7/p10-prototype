import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import {Grid, Typography} from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
import AlertBox from './components/AlertBox'
import { useNavigate, useLocation } from 'react-router-dom';
import Styles from './prototypeOneStyles/styles'
import TaskIntro from './components/TaskIntro'
import './prototypeOneStyles/blur.css'
import Questionnaire from './components/Questionnnaire'
import { saveToFile } from './globalFunctions.tsx/saveToFile'
import Debriefing from './components/Debriefing'
import { mockDataTaskThreeGoals } from './components/mockDataTaskGoals'

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
    isUnseen: boolean,
    taskGoalMatch: string,

}
interface ArrayToSave {
    imageId: string,
    points: number,
    chosenAction: string,

}

export default function PrototypeThree() {

    const location = useLocation()
    const userData = location.state

    const [pauseTest, setPauseTest] = useState<boolean>(false)
    const [recentlyDeleted, setRecentlyDeleted] = useState<Array<detection>>([])
    const [selectedDetection, setSelectedDetection] = useState<detection>(detections.sort((a, b) => a.detectionWeight - b.detectionWeight)[0])
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(false)
    const [openQuestionnaire, setOpenQuestionnaire] = useState<boolean>(false)
    const [testSetup, _] = useState<number>(userData.version)
    const [startTest, setStartTest] = useState<boolean>(false)
    const [startDebriefing, setStartDebriefing] = useState<boolean>(false)
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections.sort((a, b) => a.detectionWeight - b.detectionWeight)) 
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string | null>(detections.sort((a, b) => a.detectionWeight - b.detectionWeight)[0].imageId);
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
        if (seconds > 0 && startTest && !pauseTest) { // add: if seconds === x, then run addNewItem
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

    useEffect(() => { //pause function
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === '9') {
                setPauseTest(prevPauseTest => !prevPauseTest)
            } else if (event.key === '8') {
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
        if (testSetup === 2 && questionnaireCompleted) {
            saveToFile(arrayToSave, userData.participantId, 'Prototype 3 test');
            navigate('/prototypeTwo', {state: userData}); //Change to task description
        } else if (testSetup === 1 && questionnaireCompleted) {
            saveToFile(arrayToSave, userData.participantId, 'Prototype 3 test');
            setStartDebriefing(true)
        }
    },[questionnaireCompleted])

    const handleSmallScreenClick = useCallback((ImageId: string) => {
        const index = AllDetections.findIndex(detection => detection.imageId === ImageId);
        setSelectedDetection(AllDetections[index])
    }, [AllDetections]);

    const handleAlertClick = (imageId: string) => {
        const imageIndex = AllDetections.findIndex(detection => detection.imageId === imageId);
        setSelectedDetection(AllDetections[imageIndex])
        setIsSelected(imageId);
        AllDetections[imageIndex].isUnseen = false  
    }

    const handleDeleteClick = useCallback((imageId: string) => {

        const removedDetection = AllDetections.filter(detection => detection.imageId === imageId)
        setRecentlyDeleted(removedDetection)

        let newAllDetections = AllDetections.filter(detection => detection.imageId !== imageId);
        setAllDetections(newAllDetections.sort((a, b) => a.detectionWeight - b.detectionWeight));
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
        setAllDetections(newAllDetections.sort((a, b) => a.detectionWeight - b.detectionWeight));

        const saveDetectionAction = {
            imageId: removedDetection[0].imageId,
            points: removedDetection[0].deletePoints,
            chosenAction: 'Investigate'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);
    }, [AllDetections]);
    
    useEffect(() => { // controls filtering of the list
        const newRenderedDetectionList = AllDetections.filter(AllDetections => !filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item  || filterChoices[AllDetections.filterID]);
        setRenderedDetectionList(newRenderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));
    }, [filterChoices]); // whenever the filterChoices change, this effect will run

    useEffect(() => {
        const newRenderedDetectionList = AllDetections.filter(AllDetections => !filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item  || filterChoices[AllDetections.filterID]);

        if(filterChoices[recentlyDeleted[0]?.filterID] && recentlyDeleted.length > 0 && newRenderedDetectionList.length > 0 || !filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item && recentlyDeleted.length > 0 && newRenderedDetectionList.length > 0) {
            const indexInOldList = renderedDetectionList.findIndex(detection => detection.imageId === recentlyDeleted[0]?.imageId) // finds the location of the old item

            if (indexInOldList === -1) {
                setRenderedDetectionList(newRenderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));
                return
            }

            const indexInNewList: number = indexInOldList >= newRenderedDetectionList.length ? AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[newRenderedDetectionList.length-1].imageId) : AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[indexInOldList].imageId) // if the index is out of bounds, set it to the last item in the list

            setSelectedDetection(AllDetections[indexInNewList])
            setIsSelected(AllDetections[indexInNewList].imageId)            
            AllDetections[indexInNewList].isUnseen = false

            
        } else if (newRenderedDetectionList.length !== 0 && recentlyDeleted.length !== 0){
            setIsSelected(newRenderedDetectionList[0].imageId)
            setSelectedDetection(AllDetections[AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[0].imageId)])
            AllDetections[0].isUnseen = false

        } else if (recentlyDeleted.length !== 0) {
            setFilterChoices({Vehicle: false, Person: false, Item: false})
            if (AllDetections.length > 0) {
                setSelectedDetection(AllDetections[0])
                setIsSelected(AllDetections[0].imageId)
                AllDetections[0].isUnseen = false
            }
        }

         setRenderedDetectionList(newRenderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));

    },[AllDetections])

/*
const addNewItem= () => { //remove when actually adding new items
    // Add new items to the array
    const newItem = {
        imageId: "#21",
        imageUrl: 'https://source.unsplash.com/random', //image: image1
        imageIcon: <PersonIcon fontSize='small'/> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '01:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Person',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 1,
        detectionWeight: 2,
        isUnseen: true
    
    };
    setAllDetections(prevDetections => [...prevDetections, newItem].sort((a, b) => a.detectionWeight - b.detectionWeight));
};
const addNewItem2= () => { //remove when actually adding new items
    // Add new items to the array
    const newItem = {
        imageId: "#22",
        imageUrl: 'https://source.unsplash.com/random', //image: image1
        imageIcon: <PersonIcon fontSize='small'/> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '01:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Person',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 1,
        detectionWeight: 10,
        isUnseen: true 
    
    };
    setAllDetections(prevDetections => [...prevDetections, newItem]);
};*/

    if (startTest) {
        return(
            <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
                <Grid item xs={4} md={4}>
                    <TaskGoalsComponent  prototypeThree={true} selectedDetection={selectedDetection} mockDataTaskGoals={mockDataTaskThreeGoals}/>
                </Grid>
                <Grid item xs={4} md={4}>
                    <LargeScreenComponent prototypeThree={true} prototypeTwo={false} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} selectedDetection={selectedDetection}/>
                </Grid>
                <Grid item >
                    <AlertBox onAlertClick={handleAlertClick} allDetections={AllDetections} currentWeight={selectedDetection.detectionWeight} /> 
                    <Typography sx={Styles.timer}>
                            {minutes}:{remainingSeconds} 
                    </Typography>                
                </Grid>
                <Grid item xs={12}>
                    <ScreensList setScreenIndex={handleSmallScreenClick} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
                </Grid>
                <Questionnaire questionnaireName={"Prototype 3"} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} userName={userData.participantId}/>
                {startDebriefing ? (<Debriefing userName={userData.participantId} debriefingActive/>) : null}
            </Grid>
    )} else {
        return(
            <TaskIntro taskId={3} setStartTest={setStartTest}/>
        )
    }
}
    
