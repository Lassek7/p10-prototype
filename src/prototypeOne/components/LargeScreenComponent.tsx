import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Button, Typography,Divider } from '@mui/material';
import InfoBoxComponent from './InfoBoxComponent';

export default function LargeScreenComponent() {
    return (
        <Card sx={Styles.largeScreen}>  
            <CardMedia component="img" sx={{ height: '70%', objectFit: 'cover' }} image="https://source.unsplash.com/random" alt='Image' /> 
            <Divider />
            <CardContent >
              <InfoBoxComponent />  
            </CardContent>
        </Card>
    )
}



