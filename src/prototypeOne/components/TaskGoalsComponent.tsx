/// <reference types="vite-plugin-svgr/client" />
import Clothes from '../../assets/clothes.svg?react';

import Styles from '../prototypeOneStyles/styles';
import { Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Person, DirectionsCar } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//import { mockTaskDescriptions } from './mockTaskDescriptions';

interface detection {
    imageId: string,
    imageUrl: string,
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    filterID?: string,
    investigateRecommended: boolean,
    taskGoalMatch: string
}

interface TaskGoalsProps {
    prototypeThree: boolean,
    selectedDetection: detection,
    mockDataTaskGoals: Array<{taskId: string, taskName: string}>
}

export default function TaskGoalsComponent({selectedDetection, prototypeThree, mockDataTaskGoals}: TaskGoalsProps) {

    
    function ListItems(taskName: string, prototypeThree: boolean, selectedDetection: detection){
        return(
        <ListItem sx={{ mt: -1.5, mb: -3 }}>
            <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                <FiberManualRecordIcon sx={{...Styles.TaskGoalFiberIcon, color: prototypeThree && selectedDetection?.taskGoalMatch === taskName ? '#0A84FF' : '#343323'}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{sx:{ ...Styles.TaskGoalText, color: prototypeThree && selectedDetection?.taskGoalMatch === taskName ? '#0A84FF' : '#343323'}}} primary={taskName} />
        </ListItem>
    )}
    
    return (
        <Card sx={Styles.taskGoalCard}>
            <CardHeader title="Task Goals" align="left" titleTypographyProps={{sx:{...Styles.TaskGoalText}}} />
            <Divider sx={{borderBottomWidth: 3}}/>
            <CardContent>

                {mockDataTaskGoals.filter(item => item.taskId === 'Person').length != 0 ? (
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                             <Person fontSize='large' sx={{color: prototypeThree && selectedDetection.filterID === 'Person' ? '#0A84FF' : '#343323'}}/>
                        <Box ml={1} sx={{...Styles.TaskGoalCategoryText, color: prototypeThree && selectedDetection?.filterID === 'Person' ? '#0A84FF' : '#343323'}}> Person</Box>
                        </Box>
                    </ListSubheader>
                    {mockDataTaskGoals.filter(item => item.taskId === 'Person').map(item => (
                        ListItems(item.taskName, prototypeThree, selectedDetection)
                    ))}
                </List>   
                ): null}

                {mockDataTaskGoals.filter(item => item.taskId === 'Personal Items').length != 0 ? (
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <Clothes style={{fill: prototypeThree && selectedDetection?.filterID === 'Item' ? '#0A84FF' : '#343323', width: 35, height: 35}}/>
                            <Box ml={1} sx={{...Styles.TaskGoalCategoryText, color: prototypeThree && selectedDetection?.filterID === 'Item' ? '#0A84FF' : '#343323'}}> Personal Items</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    {mockDataTaskGoals.filter(item => item.taskId === 'Personal Items').map(item => (
                        ListItems(item.taskName, prototypeThree, selectedDetection)
                    ))}
                </List>   
                ): null} 

                {mockDataTaskGoals.filter(item => item.taskId === 'Mode of transport').length != 0 ? (
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <DirectionsCar fontSize='large' sx={{color: prototypeThree && selectedDetection?.filterID === 'Vehicle' ? '#0A84FF' : '#343323'}}/>
                            <Box ml={1} sx={{...Styles.TaskGoalCategoryText, color: prototypeThree && selectedDetection?.filterID === 'Vehicle' ? '#0A84FF' : '#343323'}}> Mode of transport</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    {mockDataTaskGoals.filter(item => item.taskId === 'Mode of transport').map(item => (
                        ListItems(item.taskName, prototypeThree, selectedDetection)
                    ))}
                </List>  
                ): null} 
            </CardContent>    
         </Card>
    )
}   
