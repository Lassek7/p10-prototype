import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Card } from '@mui/material';
import Styles from '../prototypeOneStyles/styles';

interface ArrowComponentProps {
    onMouseDown: () => void;
    onMouseUp: () => void;
}


export function ArrowComponentLeft({onMouseDown, onMouseUp }: ArrowComponentProps) {
    return (
        <Card  onMouseDown={onMouseDown} onMouseUp={onMouseUp} sx={{...Styles.ArrowComponent,boxShadow: "1px 1px 4px 0px #909090"}}> 
            <KeyboardDoubleArrowLeftIcon fontSize='large' sx={{color: '#343323', alignItems: 'center'}}/>
        </Card>
    )
}


export  function ArrowComponentRight({  onMouseDown, onMouseUp }: ArrowComponentProps) {
    return (
        <Card onMouseDown={onMouseDown} onMouseUp={onMouseUp} sx={{...Styles.ArrowComponent, boxShadow: "-1px 1px 4px 0px #909090"}}> 
            <KeyboardDoubleArrowRightIcon fontSize='large' sx={{color: '#343323', alignItems: 'center'}}/>
        </Card>
    )
}


