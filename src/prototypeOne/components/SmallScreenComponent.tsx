import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Button, Typography,Divider } from '@mui/material';
import {SmallScreenInfoBoxComponent} from './InfoBoxComponent';

interface smallScreenProps {
    imageId: string,
    imageUrl: string, //image: image1
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    isSelected?: boolean,
    prototypeOne?: boolean
}

export default function SmallScreenComponent( smallScreenProps: smallScreenProps) {
    return (
        <Card sx={{...Styles.smallScreen, border: smallScreenProps.isSelected ? '3px solid red' : 'none'}} >  
            <CardMedia component="img" sx={{height: '72.4%', objectFit: 'cover' }} image={smallScreenProps.imageUrl} alt='Image' /> 
            <Divider />
            <CardContent >
              <SmallScreenInfoBoxComponent  prototypeOne={smallScreenProps.prototypeOne} imageId={smallScreenProps.imageId} imageIcon={smallScreenProps.imageIcon} imageDetectionTime={smallScreenProps.imageDetectionTime} ImageDetectionDate={smallScreenProps.ImageDetectionDate} index = {0} onDeleteClick={() => {}} onInvestigateClick={ () => {}}/>  
            </CardContent>
        </Card>
    )
}



// not used anymore but keeping it for reference