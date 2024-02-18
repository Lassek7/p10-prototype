import Styles from '../prototypeOneStyles/styles';
import { Card, CardMedia, CardContent, Button, Typography,Divider } from '@mui/material';
import InfoBoxComponent from './InfoBoxComponent';

export default function SmallScreenComponent() {
    return (
        <Card sx={Styles.smallScreen} >  
            <CardMedia component="img" sx={{height: '72.4%', objectFit: 'cover' }} image="https://source.unsplash.com/random" alt='Image' /> 
            <Divider />
            <CardContent >
              <InfoBoxComponent />  
            </CardContent>
        </Card>
    )
}