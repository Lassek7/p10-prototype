import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Card } from '@mui/material';

export default function ArrowComponent() {
    return (
        <Card sx={{height: '19.83vh', width: '3.125vw', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: "1px 0px 4px 0px #000000", borderRadius: "0px" }}> 
            <KeyboardDoubleArrowLeftIcon fontSize='large' sx={{color: '#343323', alignItems: 'center'}}/>
        </Card>
    )
}

// component may or may not be needing a file of its own, but it might be a good idea to keep it here, incase a lot of code gets added with functionality.
// shadow needs fixing, it goes above as well as right/left