import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Button, Typography,Divider } from '@mui/material';
import {LargeScreenInfoBoxComponent} from './InfoBoxComponent';
import PersonIcon from '@mui/icons-material/Person';

interface detectionsProps {
    imageId: string,
    imageUrl: string, //image: image1
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
}

export default function LargeScreenComponent() {
    return (
        <Card sx={Styles.largeScreen}>  
                <CardMedia component="img" sx={{ height: '80.59%' }} image="https://source.unsplash.com/random" alt='Image' /> 
                <Divider />
            <CardContent >
              <LargeScreenInfoBoxComponent showButtons={true} imageId="1#" imageIcon={<PersonIcon fontSize='small'/>} imageDetectionContext='percentage match: 90%' imageDetectionTime='10:30:40' ImageDetectionDate='2021-10-10' timeSinceDetection='2 hours ago' />  
            </CardContent>
        </Card>
    )
}



