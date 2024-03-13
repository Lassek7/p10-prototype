/// <reference types="vite-plugin-svgr/client" />
import træje from '../../assets/images/træje.png';
import Clothes from '../../assets/clothes.svg?react';
import { DirectionsCar} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

export const initialDetections = [
    {
    imageId: "#1",
    imageUrl: træje, //image: image1
    imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
    imageUrl: træje,
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <Clothes /> ,
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"

}
    ,
    {
    imageId: "#5",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <Clothes /> ,
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

];

export const additionalDetections = [
{
    imageId: "#11",
    imageUrl: træje, //image: image1
    imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
    imageId: "#12",
    imageUrl: træje,
    imageIcon: <PersonIcon /> ,
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
    imageId: "#13",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <Clothes /> ,
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
    imageId: "#14",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"

}
    ,
    {
    imageId: "#15",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 33,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#16",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 1,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#17",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: 1,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#18",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon /> ,
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
    imageId: "#19",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon /> ,
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
    imageId: "#20",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <Clothes /> ,
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
},
{
    imageId: "#21",
    imageUrl: træje, //image: image1
    imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
    imageId: "#22",
    imageUrl: træje,
    imageIcon: <PersonIcon /> ,
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
    imageId: "#23",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <Clothes /> ,
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
    imageId: "#24",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"

}
    ,
    {
    imageId: "#25",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 33,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#26",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 1,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#27",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: 1,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#28",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon /> ,
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
    imageId: "#29",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon /> ,
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
    imageId: "#30",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <Clothes /> ,
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
},
{
    imageId: "#31",
    imageUrl: træje, //image: image1
    imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
    imageId: "#32",
    imageUrl: træje,
    imageIcon: <PersonIcon /> ,
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
    imageId: "#33",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <Clothes /> ,
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
    imageId: "#34",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"

}
    ,
    {
    imageId: "#35",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 33,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#36",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 1,
    isUnseen: true,
    taskGoalMatch: "Black backpack"

}
    ,
    {
    imageId: "#37",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: 1,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#38",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon /> ,
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
    imageId: "#39",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <PersonIcon /> ,
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
    imageId: "#40",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <Clothes /> ,
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
}];

export const initialDetectionsTwo = [
    {
    imageId: "#1",
    imageUrl: træje, //image: image1
    imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
    imageUrl: træje,
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <Clothes /> ,
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"

}
    ,
    {
    imageId: "#5",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <Clothes /> ,
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
}];

export const additionalDetectionsTwo = [
    {
        imageId: "#11",
        imageUrl: træje, //image: image1
        imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
        imageId: "#12",
        imageUrl: træje,
        imageIcon: <PersonIcon /> ,
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
        imageId: "#13",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
        imageId: "#14",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '20:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 20,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#15",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '17:50:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 33,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#16",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '05:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#17",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '07:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: 1,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    }
        ,
        {
        imageId: "#18",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#19",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#20",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
    },
    {
        imageId: "#21",
        imageUrl: træje, //image: image1
        imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
        imageId: "#22",
        imageUrl: træje,
        imageIcon: <PersonIcon /> ,
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
        imageId: "#23",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
        imageId: "#24",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '20:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 20,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#25",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '17:50:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 33,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#26",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '05:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#27",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '07:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: 1,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    }
        ,
        {
        imageId: "#28",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#29",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#30",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
    },
    {
        imageId: "#31",
        imageUrl: træje, //image: image1
        imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
        imageId: "#32",
        imageUrl: træje,
        imageIcon: <PersonIcon /> ,
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
        imageId: "#33",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
        imageId: "#34",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '20:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 20,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#35",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '17:50:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 33,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#36",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '05:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#37",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '07:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: 1,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    }
        ,
        {
        imageId: "#38",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#39",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#40",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
    
    
    
];
export const initialDetectionsThree = [
    {
    imageId: "#1",
    imageUrl: træje, //image: image1
    imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
    imageUrl: træje,
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <Clothes /> ,
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"

}
    ,
    {
    imageId: "#5",
    imageUrl: 'https://source.unsplash.com/random',
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <DirectionsCar /> ,
    imageDetectionContext: 'percentage match: 90%',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '2021-10-10',
    timeSinceDetection: '2 hours ago',
    filterID: 'Mode of transport',
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
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <PersonIcon /> ,
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
    imageIcon: <Clothes /> ,
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

];
export const additionalDetectionsThree = [
    {
        imageId: "#11",
        imageUrl: træje, //image: image1
        imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
        imageId: "#12",
        imageUrl: træje,
        imageIcon: <PersonIcon /> ,
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
        imageId: "#13",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
        imageId: "#14",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '20:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 20,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#15",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '17:50:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 33,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#16",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '05:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#17",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '07:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: 1,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    }
        ,
        {
        imageId: "#18",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#19",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#20",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
    },
    {
        imageId: "#21",
        imageUrl: træje, //image: image1
        imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
        imageId: "#22",
        imageUrl: træje,
        imageIcon: <PersonIcon /> ,
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
        imageId: "#23",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
        imageId: "#24",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '20:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 20,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#25",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '17:50:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 33,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#26",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '05:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#27",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '07:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: 1,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    }
        ,
        {
        imageId: "#28",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#29",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#30",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
    },
    {
        imageId: "#31",
        imageUrl: træje, //image: image1
        imageIcon: <PersonIcon /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
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
        imageId: "#32",
        imageUrl: træje,
        imageIcon: <PersonIcon /> ,
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
        imageId: "#33",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
        imageId: "#34",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '20:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 20,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#35",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '17:50:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 33,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#36",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '05:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    
    }
        ,
        {
        imageId: "#37",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'percentage match: 90%',
        imageDetectionTime: '07:30:40',
        ImageDetectionDate: '2021-10-10',
        timeSinceDetection: '2 hours ago',
        filterID: 'Mode of transport',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: 1,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black backpack"
    }
        ,
        {
        imageId: "#38",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#39",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <PersonIcon /> ,
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
        imageId: "#40",
        imageUrl: 'https://source.unsplash.com/random',
        imageIcon: <Clothes /> ,
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
    
    
    
];
//Needs adjustment, current data is for test purposes only