/// <reference types="vite-plugin-svgr/client" />
import Clothes from '../../assets/clothes.svg?react'; 

import blackAndWhiteBikeHelmet6 from '../../assets/images/Practice Task/black-white bike helmet 6.png';
import blackAndWhiteBikeHelmet9 from '../../assets/images/Practice Task/black-white bike helmet 9.png';
import practiceItem1 from '../../assets/images/Practice Task/practice item 1.png';
import practiceItem2 from '../../assets/images/Practice Task/practice item 2.png';
import practiceItem3 from '../../assets/images/Practice Task/practice item 3.png';
import practiceItem4 from '../../assets/images/Practice Task/practice item 4.png';
import practiceItem5 from '../../assets/images/Practice Task/practice item 5.png';
import practiceItem7 from '../../assets/images/Practice Task/practice item 7.png';
import practiceItem8 from '../../assets/images/Practice Task/practice item 8.png';
import practiceItem10 from '../../assets/images/Practice Task/practice item 10.png';

import markedBlackAndWhiteBikeHelmet6 from '../../assets/images/Practice Task No Visual Markers/black-white bike helmet 6.png';
import markedBlackAndWhiteBikeHelmet9 from '../../assets/images/Practice Task No Visual Markers/black-white bike helmet 9.png';
import markedPracticeItem1 from '../../assets/images/Practice Task No Visual Markers/practice item 1.png';
import markedPracticeItem2 from '../../assets/images/Practice Task No Visual Markers/practice item 2.png';
import markedPracticeItem3 from '../../assets/images/Practice Task No Visual Markers/practice item 3.png';
import markedPracticeItem4 from '../../assets/images/Practice Task No Visual Markers/practice item 4.png';
import markedPracticeItem5 from '../../assets/images/Practice Task No Visual Markers/practice item 5.png';
import markedPracticeItem7 from '../../assets/images/Practice Task No Visual Markers/practice item 7.png';
import markedPracticeItem8 from '../../assets/images/Practice Task No Visual Markers/practice item 8.png';
import markedPracticeItem10 from '../../assets/images/Practice Task No Visual Markers/practice item 10.png';

export const explorationDetections = [
    {
    imageId: "#1",
    markedImageUrl: practiceItem1,
    imageUrl: markedPracticeItem1, //image: image1
    imageIcon: <Clothes /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
    imageDetectionContext: '',
    imageDetectionTime: '01:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Person',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 10,
    isUnseen: true,
    taskGoalMatch: "Black rain pants"

}
    ,
    {
    imageId: "#2",
    markedImageUrl: practiceItem2,
    imageUrl: markedPracticeItem2,
    imageIcon: <Clothes /> ,
    imageDetectionContext: '',
    imageDetectionTime: '09:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Person',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 0,
    isUnseen: false,
    taskGoalMatch: "Black rain pants"

}
    ,
    {
    imageId: "#3",
    markedImageUrl: practiceItem3,
    imageUrl: markedPracticeItem3,
    imageIcon: <Clothes />,
    imageDetectionContext: '',
    imageDetectionTime: '14:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black rain pants"

}
    ,
    {
    imageId: "#4",
    markedImageUrl: practiceItem4,
    imageUrl: markedPracticeItem4,
    imageIcon: <Clothes /> ,
    imageDetectionContext: '',
    imageDetectionTime: '20:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
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
    markedImageUrl: practiceItem5,
    imageUrl: markedPracticeItem5,
    imageIcon: <Clothes />,
    imageDetectionContext: '',
    imageDetectionTime: '17:50:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
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
    markedImageUrl: blackAndWhiteBikeHelmet6,
    imageUrl: markedBlackAndWhiteBikeHelmet6,
    imageIcon: <Clothes /> ,
    imageDetectionContext: '',
    imageDetectionTime: '05:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
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
    markedImageUrl: practiceItem7,
    imageUrl: markedPracticeItem7,
    imageIcon: <Clothes /> ,
    imageDetectionContext: '',
    imageDetectionTime: '07:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 14,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#8",
    markedImageUrl: practiceItem8,
    imageUrl: markedPracticeItem8,
    imageIcon: <Clothes /> ,
    imageDetectionContext: '',
    imageDetectionTime: '18:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
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
    markedImageUrl: blackAndWhiteBikeHelmet9,
    imageUrl: markedBlackAndWhiteBikeHelmet9,
    imageIcon: <Clothes /> ,
    imageDetectionContext: '',
    imageDetectionTime: '22:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Person',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 100,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}
    ,
    {
    imageId: "#10",
    markedImageUrl: practiceItem10,
    imageUrl: markedPracticeItem10,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'efefs',
    imageDetectionTime: '00:30:40',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 9,
    isUnseen: true,
    taskGoalMatch: "Black backpack"
}];
