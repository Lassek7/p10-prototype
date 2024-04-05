import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Grid, Typography } from '@mui/material'
import { useState, useEffect, useCallback} from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { initialDetectionsTwo, additionalDetectionsTwo } from './components/MockData/mockDataDetectionsPrototypeTwo'
import { useNavigate, useLocation } from 'react-router-dom'
import TaskIntro from './components/TaskIntro'
import './prototypeOneStyles/blur.css'
import Styles from './prototypeOneStyles/styles'
import Questionnaire from './components/Questionnnaire'
import { saveToFile } from './globalFunctions.tsx/saveToFile'
import Debriefing from './components/Debriefing'
import { mockDataTaskTwoGoals } from './components/MockData/mockDataTaskGoals'
import { mockDetectionTimerPrototypeTwo } from './components/MockData/mockDataDetectionTimer'
import PersonIcon from '@mui/icons-material/Person'
import noDetections from "../assets/images/noDetections.png"



interface detection {
    imageId: string,
    imageUrl: string,
    markedImageUrl: string,
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
interface detectionTimer {
    addAt: number,
}
export default function PrototypeTwo() {
    function updateDetectionTimes(detections: Array<detection>): Array<detection> {
        return detections.map(detection => ({
          ...detection,
          imageDetectionTime: new Date().toLocaleTimeString(),
          ImageDetectionDate: new Date().toLocaleDateString(),
          timeSinceDetection: new Date().toString(),
        }));
      }
    
    const detections = updateDetectionTimes(initialDetectionsTwo);
    const location = useLocation()
    const userData = location.state

    const [pauseTest, setPauseTest] = useState<boolean>(true)
    const [recentlyDeleted, setRecentlyDeleted] = useState<Array<detection>>([])
    const [selectedDetection, setSelectedDetection] = useState<detection>(detections[0])
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(false)
    const [openQuestionnaire, setOpenQuestionnaire] = useState<boolean>(false)
    const [testSetup, _] = useState<number>(userData.version)
    const [startTest, setStartTest] = useState<boolean>(false)
    const [startDebriefing, setStartDebriefing] = useState<boolean>(false)
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) 
    const [newDetections] = useState<Array<detection>>(additionalDetectionsTwo) // used to add detections to the list
    const [addDetectionAt] = useState<Array<detectionTimer>>(mockDetectionTimerPrototypeTwo) 
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string | null>(detections[0].imageId);
    const [filterChoices, setFilterChoices] = useState<{[key: string]: boolean}>(
        {
            Vehicle: false,
            Person: false,
            Item: false
        });
    const [arrayToSave, setArrayToSave] = useState<Array<ArrayToSave>>([]); // used to save the list to a file
    const [seconds, setSeconds] = useState(210);
    const [detectionTimer, setDetectionTimer] = useState(0)
    const [detectionCount, setDetectionCount] = useState(0)
    const navigate = useNavigate();
    
    function addnewDetection(newDetectionTimer: number, detectionCount: number) {
        if(detectionCount+1 <= newDetections.length && newDetectionTimer === addDetectionAt[detectionCount].addAt) {
            setDetectionCount(detectionCount + 1)
            const newDetection = updateDetectionTimes([newDetections[detectionCount]]);
            setAllDetections(AllDetections => [...AllDetections, ...newDetection])
        }
    }

    useEffect(() => {
        const newDetectionTimer = detectionTimer + 1
        setDetectionTimer(newDetectionTimer)
        addnewDetection(newDetectionTimer, detectionCount)
    }, [seconds])
    
    useEffect(() => { 
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
            if (event.key === '½') {
                setPauseTest(prevPauseTest => !prevPauseTest)
            }
        };
            window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 

    useEffect(() => {
        if (testSetup === 1 && questionnaireCompleted) {
            saveToFile(arrayToSave, userData.participantId, 'Prototype 2 test');
            navigate('/prototypeThree', {state: userData}); 
        } else if (testSetup === 2 && questionnaireCompleted) {
            saveToFile(arrayToSave, userData.participantId, 'Prototype 2 test');
            setStartDebriefing(true);
        }
    },[questionnaireCompleted])

    const handleSmallScreenClick = useCallback((ImageId: string) => {
        const index = AllDetections.findIndex(detection => detection.imageId === ImageId);
        setSelectedDetection(AllDetections[index])
    }, [AllDetections]);

    const handleDeleteClick = useCallback((imageId: string) => {
        const removedDetection = AllDetections.filter(detection => detection.imageId === imageId)
        setRecentlyDeleted(removedDetection)        
        
        let newAllDetections = AllDetections.filter(detection => detection.imageId !== imageId);
        setAllDetections(newAllDetections);
        const saveDetectionAction = {
            imageId: removedDetection[0].imageId,
            imageContext: removedDetection[0].imageDetectionContext,
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
            imageContext: removedDetection[0].imageDetectionContext,
            points: removedDetection[0].investigatePoints,
            chosenAction: 'Investigate'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);
    }, [AllDetections]);

    useEffect(() => { // controls filtering of the list
        const newRenderedDetectionList = AllDetections.filter(AllDetections => !filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item  || filterChoices[AllDetections.filterID]);
        setRenderedDetectionList(newRenderedDetectionList);
    }, [filterChoices]); // whenever the filterChoices change, this effect will run

    useEffect(() => {
        const newRenderedDetectionList = AllDetections.filter(AllDetections => !filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item  || filterChoices[AllDetections.filterID]);

        if(filterChoices[recentlyDeleted[0]?.filterID] && recentlyDeleted.length > 0 && newRenderedDetectionList.length > 0 || !filterChoices.Vehicle && !filterChoices.Person && !filterChoices.Item && recentlyDeleted.length > 0 && newRenderedDetectionList.length > 0) {
            const indexInOldList = renderedDetectionList.findIndex(detection => detection.imageId === recentlyDeleted[0]?.imageId) // finds the location of the old item

            if (indexInOldList != -1) {
                const indexInNewList: number = indexInOldList >= newRenderedDetectionList.length ? AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[newRenderedDetectionList.length-1].imageId) : AllDetections.findIndex(detection => detection.imageId === newRenderedDetectionList[indexInOldList].imageId) // if the index is out of bounds, set it to the last item in the list
    
                if (indexInNewList >= 0 && indexInNewList < AllDetections.length) {
                    setSelectedDetection(AllDetections[indexInNewList])
                    setIsSelected(AllDetections[indexInNewList].imageId)
                }
            } 
        } 

        if(AllDetections.length === 1){
            setSelectedDetection(AllDetections[0])
            setIsSelected(AllDetections[0].imageId)
        }
        if(AllDetections.length <= 0) {
            const placeholderDetection = {
                imageId: "",
                imageUrl: noDetections,
                markedImageUrl: noDetections, 
                imageIcon: <PersonIcon /> , 
                imageDetectionContext: ' ',
                imageDetectionTime: ' ',
                ImageDetectionDate: ' ',
                timeSinceDetection: ' ',
                filterID: '',
                investigateRecommended: false,
                deletePoints: 0,
                investigatePoints: 0,
                detectionWeight: 0,
                isUnseen: false,
                taskGoalMatch: ""
            }
            setSelectedDetection(placeholderDetection)
        }
         setRenderedDetectionList(newRenderedDetectionList);
    },[AllDetections])

    if (startTest) {
        return(
            <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
                <Grid item xs={12} md={6}>
                    <TaskGoalsComponent  prototypeThree={false} selectedDetection={selectedDetection}  mockDataTaskGoals={mockDataTaskTwoGoals}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LargeScreenComponent prototypeThree={false} prototypeTwo={true} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} selectedDetection={selectedDetection}/>
                    <Typography sx={Styles.timer}>
                            {minutes}:{remainingSeconds} 
                    </Typography>   
                </Grid>
                <Grid item xs={12}>
                    <ScreensList setScreenIndex={handleSmallScreenClick} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
                </Grid>
                <Questionnaire questionnaireName={"Test 2"} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} userName={userData.participantId}/>
                {startDebriefing ? (<Debriefing userName={userData.participantId} debriefingActive/>) : null}

            </Grid>
    )} else {
        return(
            <TaskIntro taskId={2} setStartTest={setStartTest}/>
        )
    }
}
    
