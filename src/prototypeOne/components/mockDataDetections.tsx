//import image1 from "./filelocal"
import { DirectionsCar, DryCleaning } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

export const detections = [
    {
    imageId: "#1",
    imageUrl: 'https://source.unsplash.com/random', //image: image1
    imageIcon: <PersonIcon fontSize='small'/> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '01:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Person',
    investigateRecommended: true,

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
    investigateRecommended: false

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
    investigateRecommended: true

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
    investigateRecommended: true

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
    investigateRecommended: true

}
    ,
    {
    imageId: "#6",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar fontSize='small'/> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Vehicle',
    investigateRecommended: true

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
    investigateRecommended: false
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
    investigateRecommended: false
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
    investigateRecommended: false
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
    investigateRecommended: true
}
    ,
    { imageId: "#11", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '16:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: true}, 
    { imageId: "#12", imageUrl: 'https://source.unsplash.com/random', imageIcon: <PersonIcon fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '07:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Person', investigateRecommended: false }, 
    { imageId: "#13", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DryCleaning fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '03:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Item', investigateRecommended: false  }, 
    { imageId: "#14", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DryCleaning fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '18:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Item', investigateRecommended: false  }, 
    { imageId: "#15", imageUrl: 'https://source.unsplash.com/random', imageIcon: <PersonIcon fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '12:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Person', investigateRecommended: false  }, 
    { imageId: "#16", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DryCleaning fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '12:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Item', investigateRecommended: true }, 
    { imageId: "#17", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '00:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: true }, 
    { imageId: "#18", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '13:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: false }, 
    { imageId: "#19", imageUrl: 'https://source.unsplash.com/random', imageIcon: <PersonIcon fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '14:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Person', investigateRecommended: true }, 
    { imageId: "#20", imageUrl: 'https://source.unsplash.com/random', imageIcon: <DirectionsCar fontSize='small'/>, imageDetectionContext: 'percentage match: 90%', imageDetectionTime: '15:30:40', ImageDetectionDate: '2021-10-10', timeSinceDetection: '2 hours ago', filterID: 'Vehicle', investigateRecommended: false }



];

//Needs adjustment, current data is for test purposes only