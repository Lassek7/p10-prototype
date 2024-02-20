import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Divider } from '@mui/material';
import {LargeScreenInfoBoxComponent} from './InfoBoxComponent';

interface detection {
    imageId: string,
    imageUrl: string,
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string
}

interface detectionsProps {
    imageIndex: number | null,
    detectionsList: Array<detection>, // might need to make this default something else
    prototypeOne?: boolean
}
    

export default function LargeScreenComponent({prototypeOne, imageIndex, detectionsList}: detectionsProps) {
    const index = imageIndex || 0;  //if value is not a value, then it becomes 0
    return (
        <Card sx={Styles.largeScreen}>  
                <CardMedia component="img" sx={{ height: '80.59%' }} image={detectionsList[index].imageUrl} alt='Image' /> 
                <Divider />
            <CardContent >
              <LargeScreenInfoBoxComponent prototypeOne={prototypeOne} imageId={detectionsList[index].imageId} imageIcon={detectionsList[index].imageIcon} imageDetectionContext={detectionsList[index].imageDetectionContext} imageDetectionTime={detectionsList[index].imageDetectionTime} ImageDetectionDate={detectionsList[index].ImageDetectionDate} timeSinceDetection={detectionsList[index].timeSinceDetection} />  
            </CardContent>
        </Card>
    )
}



