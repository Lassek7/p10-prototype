import TaskGoalsComponent from './components/TaskGoalsComponent'
import ScreensList from './components/ScreensList'
import {Grid, Typography} from '@mui/material'
import { useState, useEffect } from 'react'
import LargeScreenComponent from './components/LargeScreenComponent'
import { detections } from './components/mockDataDetections'
import AlertBox from './components/AlertBox'
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, useLocation } from 'react-router-dom';
import Styles from './prototypeOneStyles/styles'

export default function PrototypeThree() {

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

    const location = useLocation()
    const userdata = location.state
    const userName = userdata.participantId
/*
    const fs = require('fs');
    const path = require('path');
    const Papa = require('papaparse');
*/
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
    const [seconds, setSeconds] = useState(300000);
    const navigate = useNavigate();

    useEffect(() => { // timer for prototype, needs to add go to next part. actually maybe move out of here and one up to have a common timer? otherwise send a true out and up. timerDone = true
        if (seconds > 0) {
            const timerId = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearTimeout(timerId); // This will clear the timer if the component is unmounted before the timer finishes
        }
        if (seconds === 0) {
            navigate('/prototypeTwo', {state: userdata}); //Change to Questionnaire
        } 
    }, [seconds]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    const handleSmallScreenClick = (imageIndex: number) => {
        setSelectedScreenIndex(imageIndex)

    }

    const handleAlertClick = (imageId: string) => {
        const imageIndex = AllDetections.findIndex(detection => detection.imageId === imageId);
        setSelectedScreenIndex(imageIndex);
        setIsSelected(imageId);
    }

    const handleDeleteClick = (imageIndex: number) => { 
        const saveDetectionAction = {
            imageId: renderedDetectionList[imageIndex].imageId,
            points: renderedDetectionList[imageIndex].deletePoints,
            chosenAction: 'Delete'
        }
        setArrayToSave(arrayToSave => [...arrayToSave, saveDetectionAction]);
        
        let newAllDetections = AllDetections.filter((_, index) => AllDetections[index].imageId !== renderedDetectionList[imageIndex].imageId);
        let newRenderedDetectionList = renderedDetectionList.filter((_, index) => index !== imageIndex);
        setRenderedDetectionList(newRenderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));
        setAllDetections(newAllDetections);

        // If the selected index is out of bounds, sets it one lower
        if (selectedScreenIndex >= newRenderedDetectionList.length ) {
            setSelectedScreenIndex(newRenderedDetectionList.length-1); // if the last item in the list is deleted, it set the selected index to the new last item (1 below previous index)
        } 
        
        if (newRenderedDetectionList.length === 0 && renderedDetectionList.length != AllDetections.length) { //ensures that if all detections in a filter are deleted, the remainder of the other detections are rendered. The last part of the condition ensures that the last item in the list is not displayed again whenh its supposed to be deleted
            filterChoices.Vehicle = false
            filterChoices.Person =false
            filterChoices.Item = false
            setRenderedDetectionList(AllDetections.sort((a, b) => a.detectionWeight - b.detectionWeight));
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
        setRenderedDetectionList(newRenderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));
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
            setRenderedDetectionList(AllDetections.sort((a, b) => a.imageDetectionTime.localeCompare(b.imageDetectionTime)));
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
            setRenderedDetectionList(AllDetections.sort((a, b) => a.detectionWeight - b.detectionWeight));
        } else {
            // Check if the currently selected item is in the new list
            const currentSelectedImageId = renderedDetectionList[selectedScreenIndex]?.imageId; 
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
            setRenderedDetectionList(newRenderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));
        }
    }, [filterChoices]); // whenever the filterChoices change, this effect will run

    useEffect(() => { 
        if (renderedDetectionList[selectedScreenIndex]) {
            setIsSelected(renderedDetectionList[selectedScreenIndex].imageId)
            setRenderedDetectionList(renderedDetectionList.sort((a, b) => a.detectionWeight - b.detectionWeight));  
            AllDetections[selectedScreenIndex].isUnseen = false; // change this if we only want the rendered to be in the alert count
            
        } else {
            setIsSelected(renderedDetectionList[1]?.imageId); // reset to position 1 if the list gets emptied and reset
        }


    }, [AllDetections]);

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
};

useEffect(() => {
    const timer = setTimeout(addNewItem, 1 * 60 * 1000); // 1 minutes in milliseconds
    const timer2 = setTimeout(addNewItem2, 2 * 60 * 1000); // 2 minutes in milliseconds
   

    // Clear the timer when the component is unmounted
    return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
}, []);

/*
function saveToFile(arrayToSave: Array<detection>) {1
    const csv = Papa.unparse(arrayToSave);
    const filePath = path.join(__dirname, userName + 'PrototypeThree.csv');
    fs.writeFile(filePath, csv, (err: any) => {
      if (err) {
        console.error('Error writing file', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
  }

    useEffect(() => {
      const timer = setTimeout(() => {
        saveToFile(arrayToSave);
      }, 30000); // 0.5 minutes
  
      return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);
 */ 

  
// Use useEffect to call addNewItem after 1 minutes



    return(
        <Grid container>
            <Grid item xs={4} md={4}>
                <TaskGoalsComponent  prototypeThree={true} renderedDetectionsList={renderedDetectionList} imageIndex={selectedScreenIndex}/>
            </Grid>
            <Grid item xs={4} md={4}>
                <LargeScreenComponent prototypeThree={true} onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} imageIndex={selectedScreenIndex} renderedDetectionsList={renderedDetectionList}/>
            </Grid>
            <Grid item >
                <AlertBox onAlertClick={handleAlertClick} allDetections={AllDetections} currentWeight={renderedDetectionList[selectedScreenIndex]?.detectionWeight} /> 
                <Typography sx={Styles.timer}>
                        {minutes}:{remainingSeconds} 
                </Typography>                
            </Grid>
            <Grid item xs={12}>
                <ScreensList setScreenIndex={handleSmallScreenClick} filterChoices={filterChoices} setFilterChoices={setFilterChoices} setRenderedDetectionList={setRenderedDetectionList} renderedDetectionList={renderedDetectionList} setIsSelected={setIsSelected} isSelected={isSelected}/>    
            </Grid>
        </Grid>
    )
}
    
