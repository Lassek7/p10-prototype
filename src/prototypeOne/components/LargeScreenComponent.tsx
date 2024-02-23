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
}

interface detectionsProps {
    imageIndex: number,
    renderedDetectionsList: Array<detection>, // might need to make this default something else
    onDeleteClick: (imageIndex: number) => void,
    onInvestigateClick: (imageIndex: number) => void,
    prototypeOne?: boolean
}

export default function LargeScreenComponent({prototypeOne, imageIndex, renderedDetectionsList, onDeleteClick, onInvestigateClick}: detectionsProps) {

    const handleDeleteClick = (imageIndex: number) => {
        onDeleteClick(imageIndex)
    }
    const handleInvestigateClick = (imageIndex: number) => {
        onInvestigateClick(imageIndex)
    }

    if (imageIndex === -1) {
        imageIndex = 0;
    }
    const isEmpty = renderedDetectionsList.length === 0;

    return ( // change test parameters to what we want in the screen if its empty
        <Card sx={Styles.largeScreen}>  
            <CardMedia component="img" sx={{ height: '80.59%' }} image={isEmpty ? "https://source.unsplash.com/random" : renderedDetectionsList[imageIndex].imageUrl} alt='Image' /> 
            <Divider />
            <CardContent >
                <LargeScreenInfoBoxComponent 
                    onDeleteClick={handleDeleteClick} 
                    onInvestigateClick={handleInvestigateClick} 
                    prototypeOne={prototypeOne} 
                    imageId={isEmpty ? "test" : renderedDetectionsList[imageIndex].imageId} 
                    imageIcon={isEmpty ? <Person /> : renderedDetectionsList[imageIndex].imageIcon} 
                    imageDetectionContext={isEmpty ? "test" : renderedDetectionsList[imageIndex].imageDetectionContext} 
                    imageDetectionTime={isEmpty ? "test" : renderedDetectionsList[imageIndex].imageDetectionTime} 
                    ImageDetectionDate={isEmpty ? "test" : renderedDetectionsList[imageIndex].ImageDetectionDate} 
                    timeSinceDetection={isEmpty ? "test" : renderedDetectionsList[imageIndex].timeSinceDetection} 
                    index={imageIndex} 
                />  
            </CardContent>
        </Card>
    )
}



