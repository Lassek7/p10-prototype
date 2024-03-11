import Styles from '../prototypeOneStyles/styles';
import { Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { DryCleaning, Person, DirectionsCar } from '@mui/icons-material';
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
    investigateRecommended: boolean
}

interface TaskGoalsProps {
    prototypeThree: boolean,
    selectedDetection: detection,
    taskId: Number,
}

export default function TaskGoalsComponent({selectedDetection, prototypeThree, taskId}: TaskGoalsProps) {
    console.log(taskId)
    return (
        <Card sx={Styles.taskGoalCard}>
            <CardHeader title="Task Goals" align="left" titleTypographyProps={{sx:{...Styles.TaskGoalText}}} />
            <Divider sx={{borderBottomWidth: 3}}/>
            <CardContent>
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                             <Person fontSize='large' sx={{color: prototypeThree && selectedDetection.filterID === 'Person' ? '#0A84FF' : '#343323'}}/>
                        <Box ml={1} sx={{...Styles.TaskGoalCategoryText, color: prototypeThree && selectedDetection?.filterID === 'Person' ? '#0A84FF' : '#343323'}}> Person</Box>
                        </Box>
                    </ListSubheader>
                    
                    <ListItem sx={{ mt: -1.5, mb: -3 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                            <FiberManualRecordIcon sx={Styles.TaskGoalFiberIcon} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{ ...Styles.TaskGoalText}}} primary="Itessdsdm x"  />
                    </ListItem>
                </List>   

                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <DryCleaning fontSize='large' sx={{color: prototypeThree && selectedDetection?.filterID === 'Item' ? '#0A84FF' : '#343323'}}/>
                            <Box ml={1} sx={{...Styles.TaskGoalCategoryText, color: prototypeThree && selectedDetection?.filterID === 'Item' ? '#0A84FF' : '#343323'}}> Personal Items</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    
                    <ListItem sx={{ mt: -1.5, mb: -3 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                            <FiberManualRecordIcon sx={Styles.TaskGoalFiberIcon} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{ ...Styles.TaskGoalText}}} primary="Item x"  />
                    </ListItem>
                    
                </List>   

                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <DirectionsCar fontSize='large' sx={{color: prototypeThree && selectedDetection?.filterID === 'Vehicle' ? '#0A84FF' : '#343323'}}/>
                            <Box ml={1} sx={{...Styles.TaskGoalCategoryText, color: prototypeThree && selectedDetection?.filterID === 'Vehicle' ? '#0A84FF' : '#343323'}}> Vehicle</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    
                    <ListItem sx={{ mt: -1.5, mb: -3 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                            <FiberManualRecordIcon sx={Styles.TaskGoalFiberIcon} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{ ...Styles.TaskGoalText}}} primary="Item x"  />
                    </ListItem>
                    
                </List>   
            </CardContent>    
         </Card>
    )
}   