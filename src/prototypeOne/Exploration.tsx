import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import { Grid } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
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

    const [recentlyDeleted, setRecentlyDeleted] = useState<Array<detection>>([])
    const [selectedDetection, setSelectedDetection] = useState<detection>(detections[0])
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(false)
    const [openQuestionnaire, setOpenQuestionnaire] = useState<boolean>(false)
    const [startTest, setStartTest] = useState<boolean>(false)
    const [AllDetections, setAllDetections] = useState<Array<detection>>(detections) // used to remove detections from the list
    const [renderedDetectionList, setRenderedDetectionList] = useState<Array<detection>>(detections); // used to render the list
    const [isSelected, setIsSelected] = useState<string| null>(null);
    const [filterChoices, setFilterChoices] = useState<{[key: string]: boolean}>(
        {
            Vehicle: false,
            Person: false,
            Item: false
        });
    const navigate = useNavigate();

    useEffect(() => {
        if (questionnaireCompleted) {
            navigate('/prototypeOne', {state: userData}); //Change to task description
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

        if (newAllDetections.length === 0) {
            setOpenQuestionnaire(true);
        }
    }, [AllDetections]);

    const handleInvestigateClick= useCallback((imageId: string) => {
        const removedDetection = AllDetections.filter(detection => detection.imageId === imageId)
        setRecentlyDeleted(removedDetection)
        let newAllDetections = AllDetections.filter(detection => detection.imageId !== imageId);
        setAllDetections(newAllDetections);

        console.log(AllDetections.length)
        if (AllDetections.length === 1) {
            setOpenQuestionnaire(true);
        } 

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
    return(
        <Grid container className={`container ${!startTest || openQuestionnaire ? 'blur-effect' : ''}`}>
            <TaskIntro taskId={0} setStartTest={setStartTest}/>
            <Grid item xs={12} md={6} >
                <TaskGoalsComponent prototypeThree={false} selectedDetection={selectedDetection}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LargeScreenComponent prototypeOne={true} prototypeThree={false} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} selectedDetection={selectedDetection}/>
            </Grid>
            <Grid item xs={12}>
                <ScreensList prototypeOne={true} setScreenIndex={handleSmallScreenClick} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>     
            </Grid>
            <Questionnaire questionnaireId={0} setCompleted={setQuestionnaireCompleted} questionnaireActive={openQuestionnaire} />
        </Grid>
    )
}
    
