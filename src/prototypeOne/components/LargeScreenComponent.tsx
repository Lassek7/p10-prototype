import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Divider } from '@mui/material';
import {LargeScreenInfoBoxComponent} from './InfoBoxComponent';
import { Person } from '@mui/icons-material';

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
}

interface detectionsProps {
    selectedDetection: detection,
    onDeleteClick: (imageId: string) => void,
    onInvestigateClick: (imageId: string) => void,
    prototypeOne?: boolean,
    prototypeThree: boolean,
}

export default function LargeScreenComponent({prototypeOne, prototypeThree, selectedDetection, onDeleteClick, onInvestigateClick}: detectionsProps) {
    const handleDeleteClick = (imageId: string) => {
        onDeleteClick(imageId)
    }
    const handleInvestigateClick = (imageId: string) => {
        onInvestigateClick(imageId)
    }

    if (selectedDetection === undefined) {
    return ( // change test parameters to what we want in the screen if its empty
        <Card sx={Styles.largeScreen(prototypeThree)}>  
            <CardMedia component="img" sx={{ height: '80.59%' }} image={"https://source.unsplash.com/random"} alt='Image' /> 
            
            <CardContent >
                <LargeScreenInfoBoxComponent 
                    onDeleteClick={handleDeleteClick} 
                    onInvestigateClick={handleInvestigateClick} 
                    prototypeOne={prototypeOne} 
                    imageId={"test"} 
                    imageIcon={<Person />} 
                    imageDetectionContext={"test"} 
                    imageDetectionTime={"test"} 
                    ImageDetectionDate={"test"} 
                    timeSinceDetection={"test"} 
                    prototypeThree={prototypeThree} 
                    investigateRecommended={true}
                />  
            </CardContent>
        </Card>
    ) } else {
        return (
        <Card sx={Styles.largeScreen(prototypeThree)}>  
        <CardMedia component="img" sx={{ height: '80.59%' }} image={selectedDetection.imageUrl} alt='Image' /> 
        <CardContent sx={Styles.largeInfoBoxCardContent} >
            <LargeScreenInfoBoxComponent 
                onDeleteClick={handleDeleteClick} 
                onInvestigateClick={handleInvestigateClick} 
                prototypeOne={prototypeOne} 
                imageId={selectedDetection.imageId} 
                imageIcon={selectedDetection.imageIcon} 
                imageDetectionContext={selectedDetection.imageDetectionContext} 
                imageDetectionTime={selectedDetection.imageDetectionTime} 
                ImageDetectionDate={selectedDetection.ImageDetectionDate} 
                timeSinceDetection={selectedDetection.timeSinceDetection} 
                prototypeThree={prototypeThree} 
                investigateRecommended={selectedDetection.investigateRecommended}
            />  
        </CardContent>
    </Card>
    )
    }
}



