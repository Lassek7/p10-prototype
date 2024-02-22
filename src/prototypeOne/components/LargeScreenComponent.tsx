import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Divider } from '@mui/material';
import {LargeScreenInfoBoxComponent} from './InfoBoxComponent';
import { detections } from './mockDataDetections';

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


    return (
        <Card sx={Styles.largeScreen}>  
                <CardMedia component="img" sx={{ height: '80.59%' }} image={renderedDetectionsList[imageIndex].imageUrl} alt='Image' /> 
                <Divider />
            <CardContent >
              <LargeScreenInfoBoxComponent onDeleteClick={handleDeleteClick} onInvestigateClick={handleInvestigateClick} prototypeOne={prototypeOne} imageId={renderedDetectionsList[imageIndex].imageId} imageIcon={renderedDetectionsList[imageIndex].imageIcon} imageDetectionContext={renderedDetectionsList[imageIndex].imageDetectionContext} imageDetectionTime={renderedDetectionsList[imageIndex].imageDetectionTime} ImageDetectionDate={renderedDetectionsList[imageIndex].ImageDetectionDate} timeSinceDetection={renderedDetectionsList[imageIndex].timeSinceDetection} index={imageIndex} />  
            </CardContent>
        </Card>
    )
}



