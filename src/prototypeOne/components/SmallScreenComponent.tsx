import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Button, Typography,Divider } from '@mui/material';
import {SmallScreenInfoBoxComponent} from './InfoBoxComponent';

interface detectionsProps {
    imageId: string,
    imageUrl: string, //image: image1
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    isSelected?: boolean,
}

export default function SmallScreenComponent( detectionsProps: detectionsProps) {
    return (
        <Card  sx={{...Styles.smallScreen, border: detectionsProps.isSelected ? '1px solid red' : 'none'}} >  
            <CardMedia component="img" sx={{height: '72.4%', objectFit: 'cover' }} image={detectionsProps.imageUrl} alt='Image' /> 
            <Divider />
            <CardContent >
              <SmallScreenInfoBoxComponent  imageId={detectionsProps.imageId} imageIcon={detectionsProps.imageIcon} imageDetectionTime={detectionsProps.imageDetectionTime} ImageDetectionDate={detectionsProps.ImageDetectionDate}/>  
            </CardContent>
        </Card>
    )
}