import react from 'react'
import Styles from './prototypeOneStyles/styles'
import TaskGoalsComponent from './components/TaskGoalsComponent'
import InfoBoxComponent from './components/InfoBoxComponent'
import { Card, CardContent } from '@mui/material'
import LargeScreenComponent from './components/LargeScreenComponent'
function PrototypeOne() {


    
return(
    
    <Card sx={{ backgroundColor: 'grey' }}>        
        <CardContent>
            <LargeScreenComponent />
        </CardContent>
        <CardContent>
            <TaskGoalsComponent />
        </CardContent>
    </Card>


)}
export default  PrototypeOne