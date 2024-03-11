//import image1 from "./filelocal"
import { DirectionsCar, DryCleaning } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

export const detections = [
    {
    imageId: "#1",
    imageUrl: 'https://source.unsplash.com/random', //image: image1
    imageIcon: <PersonIcon fontSize='medium' /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '01:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Person',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 1,
    detectionWeight: 10,
    isUnseen: true,
    taskGoalMatch: "Black rain pants"

}
    ,
    {
    imageId: "#2",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '09:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '3 hours ago',
    filterID: 'Person',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: 0,
    detectionWeight: 0,
    isUnseen: false,
    taskGoalMatch: "Black rain pants"

}
    ,
    {
    imageId: "#3",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DryCleaning fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '14:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '4 hours ago',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 1,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black rain pants"

}
    ,
    {
    imageId: "#4",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Vehicle',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#5",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Vehicle',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 33,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#6",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar fontSize='medium'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Vehicle',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 1,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#7",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Vehicle',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: 1,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#8",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '18:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Person',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 99,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#9",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '22:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Person',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 1,
    detectionWeight: 100,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#10",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DryCleaning fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '00:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 9,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    { imageId: "#11", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '16:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: true, deletePoints: 1, investigatePoints: 0, detectionWeight: 10, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#12", imageUrl: 'https://source.unsplash.com/random', imageIcon: <PersonIcon fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '07:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Person', investigateRecommended: false, deletePoints: 0, investigatePoints: 1, detectionWeight: 56, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#13", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DryCleaning fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '03:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Item', investigateRecommended: false, deletePoints: 0, investigatePoints: 0, detectionWeight: 10, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#14", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DryCleaning fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '18:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Item', investigateRecommended: false, deletePoints: 1, investigatePoints: 0, detectionWeight: 36, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#15", imageUrl: 'https://source.unsplash.com/random', imageIcon: <PersonIcon fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '12:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Person', investigateRecommended: false, deletePoints: 1, investigatePoints: 0, detectionWeight: 22, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#16", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DryCleaning fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '12:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Item', investigateRecommended: true, deletePoints: 1, investigatePoints: 0, detectionWeight: 78, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#17", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '00:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: true, deletePoints: 1, investigatePoints: 0, detectionWeight: 49, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#18", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '13:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: false, deletePoints: 1, investigatePoints: 0, detectionWeight: 23, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#19", imageUrl: 'https://source.unsplash.com/random', imageIcon: <PersonIcon fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '14:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Person', investigateRecommended: true, deletePoints: 1, investigatePoints: 0, detectionWeight: 78, isUnseen: true, taskGoalMatch: "Transparent water bottle" }, 
    { imageId: "#20", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '15:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: false, deletePoints: 1, investigatePoints: 0, detectionWeight: 32, isUnseen: true, taskGoalMatch: "Transparent water bottle" }



];

//Needs adjustment, current data is for test purposes only