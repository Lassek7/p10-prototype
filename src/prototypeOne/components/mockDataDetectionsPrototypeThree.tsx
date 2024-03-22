/// <reference types="vite-plugin-svgr/client" />
import Clothes from '../../assets/clothes.svg?react'; 
import PersonIcon from '@mui/icons-material/Person';
import { DirectionsCar } from '@mui/icons-material';

//REMEMBER! SET START DETECTION UNSEEN TO SEEN!!!!!!!!

// correct no marker 
import blackSneakers88 from '../../assets/images/Task 3 No Visual Markers/correct/black sneakers 88.png'
import blackSneakers94 from '../../assets/images/Task 3 No Visual Markers/correct/black sneakers 94.png'
import blackSneakers96 from '../../assets/images/Task 3 No Visual Markers/correct/black sneakers 96.png'
import blackSportsBag87 from '../../assets/images/Task 3 No Visual Markers/correct/black sports bag 87.png'
import blackSportsBag95 from '../../assets/images/Task 3 No Visual Markers/correct/black sports bag 95.png'
import blackSummerJacket32 from '../../assets/images/Task 3 No Visual Markers/correct/black summer jacket 32.png'
import blackSummerJacket46 from '../../assets/images/Task 3 No Visual Markers/correct/black summer jacket 46.png'
import metalWaterBottle23 from '../../assets/images/Task 3 No Visual Markers/correct/metal water bottle 23.png'
import metalWaterBottle79 from '../../assets/images/Task 3 No Visual Markers/correct/metal water bottle 79.png'
import orangeTShirt98 from '../../assets/images/Task 3 No Visual Markers/correct/orange t-shirt 98.png'

// correct with marker
import markedBlackSneakers88 from '../../assets/images/Task 3 Visual Markers/correct/black sneakers 88.png'
import markedBlackSneakers94 from '../../assets/images/Task 3 Visual Markers/correct/black sneakers 94.png'
import markedBlackSneakers96 from '../../assets/images/Task 3 Visual Markers/correct/black sneakers 96.png'
import markedBlackSportsBag87 from '../../assets/images/Task 3 Visual Markers/correct/black sports bag 87.png'
import markedBlackSportsBag95 from '../../assets/images/Task 3 Visual Markers/correct/black sports bag 95.png'
import markedBlackSummerJacket32 from '../../assets/images/Task 3 Visual Markers/correct/black summer jacket 32.png'
import markedBlackSummerJacket46 from '../../assets/images/Task 3 Visual Markers/correct/black summer jacket 46.png'
import markedMetalWaterBottle23 from '../../assets/images/Task 3 Visual Markers/correct/metal water bottle 23.png'
import markedMetalWaterBottle79 from '../../assets/images/Task 3 Visual Markers/correct/metal water bottle 79.png'
import markedOrangeTShirt98 from '../../assets/images/Task 3 Visual Markers/correct/orange t-shirt 98.png'

// incorrect no marker
import blackSportsBagIncorrect2 from '../../assets/images/Task 3 No Visual Markers/incorrect/car 2.png'
import blackSummerJacketIncorrect22 from '../../assets/images/Task 3 No Visual Markers/incorrect/black summer jacket 22.png'
import blackSummerJacketIncorrect72 from '../../assets/images/Task 3 No Visual Markers/incorrect/black summer jacket 72.png'
import blacksummerJacketIncorrect86 from '../../assets/images/Task 3 No Visual Markers/incorrect/black summer jacket 86.png'
import metalWaterBottleIncorrect3 from '../../assets/images/Task 3 No Visual Markers/incorrect/car 3.png'
import metalWaterBottleIncorrect7 from '../../assets/images/Task 3 No Visual Markers/incorrect/metal water bottle 7.png'
import metalWaterBottleIncorrect11 from '../../assets/images/Task 3 No Visual Markers/incorrect/metal water bottle 11.png'
import orangeTShirtIncorrect4 from '../../assets/images/Task 3 No Visual Markers/incorrect/orange t-shirt 4.png'
import orangeTShirtIncorrect19 from '../../assets/images/Task 3 No Visual Markers/incorrect/orange t-shirt 19.png'
import orangeTShirtIncorrect53 from '../../assets/images/Task 3 No Visual Markers/incorrect/orange t-shirt 53.png'

// incorrect with marker
import markedBlackSportsBagIncorrect2 from '../../assets/images/Task 3 Visual Markers/incorrect/car 2.png'
import markedBlackSummerJacketIncorrect22 from '../../assets/images/Task 3 Visual Markers/incorrect/black summer jacket 22.png'
import markedBlackSummerJacketIncorrect72 from '../../assets/images/Task 3 Visual Markers/incorrect/black summer jacket 72.png'
import markedBlacksummerJacketIncorrect86 from '../../assets/images/Task 3 Visual Markers/incorrect/black summer jacket 86.png'
import markedMetalWaterBottleIncorrect3 from '../../assets/images/Task 3 Visual Markers/incorrect/car 3.png'
import markedMetalWaterBottleIncorrect7 from '../../assets/images/Task 3 Visual Markers/incorrect/metal water bottle 7.png'
import markedMetalWaterBottleIncorrect11 from '../../assets/images/Task 3 Visual Markers/incorrect/metal water bottle 11.png'
import markedOrangeTShirtIncorrect4 from '../../assets/images/Task 3 Visual Markers/incorrect/orange t-shirt 4.png'
import markedOrangeTShirtIncorrect19 from '../../assets/images/Task 3 Visual Markers/incorrect/orange t-shirt 19.png'
import markedOrangeTShirtIncorrect53 from '../../assets/images/Task 3 Visual Markers/incorrect/orange t-shirt 53.png'

// ambiguous no
import blackSneakersAmbiguous67 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sneakers 67.png'
import blackSneakersAmbiguous73 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sneakers 73.png'
import blackSneakersAmbiguous77 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sneakers 77.png'
import blackSneakersAmbiguous79 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sneakers 79.png'
import blackSneakersAmbiguous95 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sneakers 95.png'
import blackSportsBagAmbiguous32 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sports bag 32.png'
import blackSportsBagAmbiguous41 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sports bag 41.png'
import blackSportsBagAmbiguous80 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black sports bag 80.png'
import blackSummerJacketAmbiguous12 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black summer jacket 12.png'
import blackSummerJacketAmbiguous48 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black summer jacket 48.png'
import blackSummerJacketAmbiguous52 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black summer jacket 52.png'
import blackSummerJacketAmbiguous63 from '../../assets/images/Task 3 No Visual Markers/ambiguous/black summer jacket 63.png'
import metalWaterBottleAmbiguous15 from '../../assets/images/Task 3 No Visual Markers/ambiguous/metal water bottle 15.png'
import metalWaterBottleAmbiguous17 from '../../assets/images/Task 3 No Visual Markers/ambiguous/metal water bottle 17.png'
import orangeTShirtAmbiguous23 from '../../assets/images/Task 3 No Visual Markers/ambiguous/orange t-shirt 23.png'
import orangeTShirtAmbiguous53 from '../../assets/images/Task 3 No Visual Markers/ambiguous/orange t-shirt 53.png'
import orangeTShirtAmbiguous84 from '../../assets/images/Task 3 No Visual Markers/ambiguous/orange t-shirt 84.png'
import orangeTShirtAmbiguous90 from '../../assets/images/Task 3 No Visual Markers/ambiguous/orange t-shirt 90.png'
import personAmbiguous13 from '../../assets/images/Task 3 No Visual Markers/ambiguous/person 13.png'
import personAmbiguous52 from '../../assets/images/Task 3 No Visual Markers/ambiguous/person 52.png'

// ambiguous with marker
import markedBlackSneakersAmbiguous67 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sneakers 67.png'
import markedBlackSneakersAmbiguous73 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sneakers 73.png'
import markedBlackSneakersAmbiguous77 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sneakers 77.png'
import markedBlackSneakersAmbiguous79 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sneakers 79.png'
import markedBlackSneakersAmbiguous95 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sneakers 95.png'
import markedBlackSportsBagAmbiguous32 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sports bag 32.png'
import markedBlackSportsBagAmbiguous41 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sports bag 41.png'
import markedBlackSportsBagAmbiguous80 from '../../assets/images/Task 3 Visual Markers/ambiguous/black sports bag 80.png'
import markedBlackSummerJacketAmbiguous12 from '../../assets/images/Task 3 Visual Markers/ambiguous/black summer jacket 12.png'
import markedBlackSummerJacketAmbiguous48 from '../../assets/images/Task 3 Visual Markers/ambiguous/black summer jacket 48.png'
import markedBlackSummerJacketAmbiguous52 from '../../assets/images/Task 3 Visual Markers/ambiguous/black summer jacket 52.png'
import markedBlackSummerJacketAmbiguous63 from '../../assets/images/Task 3 Visual Markers/ambiguous/black summer jacket 63.png'
import markedMetalWaterBottleAmbiguous15 from '../../assets/images/Task 3 Visual Markers/ambiguous/metal water bottle 15.png'
import markedMetalWaterBottleAmbiguous17 from '../../assets/images/Task 3 Visual Markers/ambiguous/metal water bottle 17.png'
import markedOrangeTShirtAmbiguous23 from '../../assets/images/Task 3 Visual Markers/ambiguous/orange t-shirt 23.png'
import markedOrangeTShirtAmbiguous53 from '../../assets/images/Task 3 Visual Markers/ambiguous/orange t-shirt 53.png'
import markedOrangeTShirtAmbiguous84 from '../../assets/images/Task 3 Visual Markers/ambiguous/orange t-shirt 84.png'
import markedOrangeTShirtAmbiguous90 from '../../assets/images/Task 3 Visual Markers/ambiguous/orange t-shirt 90.png'
import markedPersonAmbiguous13 from '../../assets/images/Task 3 Visual Markers/ambiguous/person 13.png'
import markedPersonAmbiguous52 from '../../assets/images/Task 3 Visual Markers/ambiguous/person 52.png'

export const initialDetectionsThree = [
    {
    imageId: "#1",
    imageUrl: blackSneakers88, //image: image1
    markedImageUrl: markedBlackSneakers88,
    imageIcon: <Clothes /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
    imageDetectionContext: 'Match: 88%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: -1,
    investigatePoints: 1,
    detectionWeight: 10,
    isUnseen: false,
    taskGoalMatch: "Black sneakers"

}
    ,
    {
    imageId: "#2",
    imageUrl: blacksummerJacketIncorrect86,
    markedImageUrl: markedBlacksummerJacketIncorrect86,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 86%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: 1,
    investigatePoints: -1,
    detectionWeight: 21,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"
}
    ,
    {
    imageId: "#3",
    imageUrl: metalWaterBottleAmbiguous15,
    markedImageUrl: markedMetalWaterBottleAmbiguous15,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 15%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 21,
    isUnseen: true,
    taskGoalMatch: "Metal water bottle"

}
    ,
    {
    imageId: "#4",
    imageUrl: metalWaterBottleAmbiguous17,
    markedImageUrl: markedMetalWaterBottleAmbiguous17,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 17%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 21,
    isUnseen: true,
    taskGoalMatch: "Metal water bottle"

}
    ,
    {
    imageId: "#5",
    imageUrl: orangeTShirtAmbiguous53,
    markedImageUrl: markedOrangeTShirtAmbiguous53,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 53%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 16,
    isUnseen: true,
    taskGoalMatch: "Orange t-shirt"

}
    ,
    {
    imageId: "#6",
    imageUrl: orangeTShirtAmbiguous90,
    markedImageUrl: markedOrangeTShirtAmbiguous90,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 90%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: 0,
    investigatePoints: 0,
    detectionWeight: 9,
    isUnseen: true,
    taskGoalMatch: "Orange t-shirt"

}
    ,
    {
    imageId: "#7",
    imageUrl: orangeTShirtIncorrect53,
    markedImageUrl: markedOrangeTShirtIncorrect53,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 53%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: -1,
    detectionWeight: 17,
    isUnseen: true,
    taskGoalMatch: "Orange t-shirt"
}
    ,
    {
    imageId: "#8",
    imageUrl: blackSneakers96, //image: image1
    markedImageUrl: markedBlackSneakers96,
    imageIcon: <Clothes /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
    imageDetectionContext: 'Match: 96%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: true,
    deletePoints: -1,
    investigatePoints: 1,
    detectionWeight: 6,
    isUnseen: true,
    taskGoalMatch: "Black sneakers"
}
    ,
    {
    imageId: "#9",
    imageUrl: blackSummerJacketAmbiguous48,
    markedImageUrl: markedBlackSummerJacketAmbiguous48,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 48%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 0,
    investigatePoints: 23,
    detectionWeight: 21,
    isUnseen: true,
    taskGoalMatch: "Black summer jacket"
}
    ,
    {
    imageId: "#10",
    imageUrl: orangeTShirtIncorrect4,
    markedImageUrl: markedOrangeTShirtIncorrect4,
    imageIcon: <Clothes /> ,
    imageDetectionContext: 'Match: 04%',
    imageDetectionTime: '',
    ImageDetectionDate: '',
    timeSinceDetection: '',
    filterID: 'Item',
    investigateRecommended: false,
    deletePoints: 1,
    investigatePoints: -1,
    detectionWeight: 20,
    isUnseen: true,
    taskGoalMatch: "Orange t-shirt"
}

];
export const additionalDetectionsThree = [
    {
        imageId: "#11",
        imageUrl: blackSportsBagIncorrect2, //image: image1
        markedImageUrl: markedBlackSportsBagIncorrect2,
        imageIcon: <DirectionsCar /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
        imageDetectionContext: 'Match: 02%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Vehicle',
        investigateRecommended: true,
        deletePoints: 1,
        investigatePoints: -1,
        detectionWeight: 4,
        isUnseen: true,
        taskGoalMatch: "White car"
    
    }
        ,
        {
        imageId: "#12",
        imageUrl: orangeTShirtAmbiguous84,
        markedImageUrl: markedOrangeTShirtAmbiguous84,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 84%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 11,
        isUnseen: true,
        taskGoalMatch: "Orange t-shirt"
    
    }
        ,
        {
        imageId: "#13",
        imageUrl: blackSummerJacket46,
        markedImageUrl: markedBlackSummerJacket46,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 46%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#14",
        imageUrl: blackSummerJacketAmbiguous12,
        markedImageUrl: markedBlackSummerJacketAmbiguous12,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 12%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#15",
        imageUrl: orangeTShirt98,
        markedImageUrl: markedOrangeTShirt98,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 98%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 5,
        isUnseen: true,
        taskGoalMatch: "Orange t-shirt"
    
    }
        ,
        {
        imageId: "#16",
        imageUrl: metalWaterBottleIncorrect7,
        markedImageUrl: markedMetalWaterBottleIncorrect7,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 07%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: -1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Metal water bottle"
    
    }
        ,
        {
        imageId: "#17",
        imageUrl: blackSportsBagAmbiguous41,
        markedImageUrl: markedBlackSportsBagAmbiguous41,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 41%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black sports bag"
    }
        ,
        {
        imageId: "#18",
        imageUrl: metalWaterBottle23,
        markedImageUrl: markedMetalWaterBottle23,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 23%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Metal water bottle"
    }
        ,
        {
        imageId: "#19",
        imageUrl: orangeTShirtIncorrect19,
        markedImageUrl: markedOrangeTShirtIncorrect19,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 19%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: -1,
        detectionWeight: 19,
        isUnseen: true,
        taskGoalMatch: "Orange t-shirt"
    }
        ,
        {
        imageId: "#20",
        imageUrl: personAmbiguous13,
        markedImageUrl: markedPersonAmbiguous13,
        imageIcon: <PersonIcon /> ,
        imageDetectionContext: 'Match: 13%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Person',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 2,
        isUnseen: true,
        taskGoalMatch: ""
    },
    {
 
        imageId: "#21",
        imageUrl: blackSneakersAmbiguous95,
        markedImageUrl: markedBlackSneakersAmbiguous95,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 95%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 7,
        isUnseen: true,
        taskGoalMatch: "Black sneakers"
    
    }
    ,
    {
        imageId: "#22",
        imageUrl: blackSneakers94,
        markedImageUrl: markedBlackSneakers94,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 94%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 8,
        isUnseen: true,
        taskGoalMatch: "Black sneakers"
    }
        ,
        {
        imageId: "#23",
        imageUrl: metalWaterBottleIncorrect11,
        markedImageUrl: markedMetalWaterBottleIncorrect11,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 11%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: -1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Metal water bottle"
    
    }
        ,
        {
        imageId: "#24",
        imageUrl: orangeTShirtAmbiguous23,
        markedImageUrl: markedOrangeTShirtAmbiguous23,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 23%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 18,
        isUnseen: true,
        taskGoalMatch: "Orange t-shirt"
    
    }
        ,
        {
        imageId: "#25",
        imageUrl: blackSummerJacket32,
        markedImageUrl: markedBlackSummerJacket32,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 32%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    
    }
        ,
        {
        imageId: "#26",
        imageUrl: blackSportsBag87,
        markedImageUrl: markedBlackSportsBag87,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 87%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black sports bag"
    
    }
        ,
        {
        imageId: "#27",
        imageUrl: metalWaterBottleIncorrect3,
        markedImageUrl: markedMetalWaterBottleIncorrect3,
        imageIcon: <DirectionsCar /> ,
        imageDetectionContext: 'Match: 03%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Vehicle',
        investigateRecommended: false,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 3,
        isUnseen: true,
        taskGoalMatch: "White car"
    }
        ,
        {
        imageId: "#28",
        imageUrl: blackSneakersAmbiguous77,
        markedImageUrl: markedBlackSneakersAmbiguous77,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 77%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 13,
        isUnseen: true,
        taskGoalMatch: "Black sneakers"
    }
        ,
        {
        imageId: "#29",
        imageUrl: blackSummerJacketIncorrect22,
        markedImageUrl: markedBlackSummerJacketIncorrect22,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 22%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 1,
        investigatePoints: -1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    }
        ,
        {
        imageId: "#30",
        imageUrl: personAmbiguous52,
        markedImageUrl: markedPersonAmbiguous52,
        imageIcon: <PersonIcon /> ,
        imageDetectionContext: 'Match: 52%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Person',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 1,
        isUnseen: true,
        taskGoalMatch: ""
    },
    {
        imageId: "#31",
        imageUrl: metalWaterBottle79, //image: image1
        markedImageUrl: markedMetalWaterBottle79,
        imageIcon: <Clothes /> , // needs to be adjustable in the code and might need a new prop for filtered if it cant be done icon based
        imageDetectionContext: 'Match: 79%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Metal water bottle"
    
    }
        ,
        {
        imageId: "#32",
        imageUrl: blackSummerJacketAmbiguous52,
        markedImageUrl: markedBlackSummerJacketAmbiguous52,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 52%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#33",
        imageUrl: blackSneakersAmbiguous79,
        markedImageUrl: markedBlackSneakersAmbiguous79,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 79%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 12,
        isUnseen: true,
        taskGoalMatch: "Black sneakers"
    
    }
        ,
        {
        imageId: "#34",
        imageUrl: blackSummerJacketIncorrect72,
        markedImageUrl: markedBlackSummerJacketIncorrect72,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 72%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: -1,
        investigatePoints: 1,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    
    }
        ,
        {
        imageId: "#35",
        imageUrl: blackSportsBag95,
        markedImageUrl: markedBlackSportsBag95,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 95%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black sports bag"
    
    }
        ,
        {
        imageId: "#36",
        imageUrl: blackSportsBagAmbiguous32,
        markedImageUrl: markedBlackSportsBagAmbiguous32,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 32%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black sports bag"
    
    }
        ,
        {
        imageId: "#37",
        imageUrl: blackSportsBagAmbiguous80,
        markedImageUrl: markedBlackSportsBagAmbiguous80,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 80%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black sports bag"
    }
        ,
        {
        imageId: "#38",
        imageUrl: blackSummerJacketAmbiguous63,
        markedImageUrl: markedBlackSummerJacketAmbiguous63,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 63%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 21,
        isUnseen: true,
        taskGoalMatch: "Black summer jacket"
    }
        ,
        {
        imageId: "#39",
        imageUrl: blackSneakersAmbiguous73,
        markedImageUrl: markedBlackSneakersAmbiguous73,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 73%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: true,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 14,
        isUnseen: true,
        taskGoalMatch: "Black sneakers"
    }
        ,
        {
        imageId: "#40",
        imageUrl: blackSneakersAmbiguous67,
        markedImageUrl: markedBlackSneakersAmbiguous67,
        imageIcon: <Clothes /> ,
        imageDetectionContext: 'Match: 67%',
        imageDetectionTime: '',
        ImageDetectionDate: '',
        timeSinceDetection: '',
        filterID: 'Item',
        investigateRecommended: false,
        deletePoints: 0,
        investigatePoints: 0,
        detectionWeight: 15,
        isUnseen: true,
        taskGoalMatch: "Black sneakers"
    }
    
    
    
];