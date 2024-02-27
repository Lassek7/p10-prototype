import Styles from '../prototypeOneStyles/styles';
import { Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { DryCleaning, Person, DirectionsCar } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
    imageIndex: number,
    renderedDetectionsList: Array<detection>,
    prototypeThree: boolean
}

export default function TaskGoalsComponent({renderedDetectionsList, imageIndex, prototypeThree}: TaskGoalsProps) {
    return (
        <Card sx={Styles.taskGoalCard}>
            <CardHeader title="Task Goals" align="left" />
            <Divider sx={{borderBottomWidth: 3}}/>
            <CardContent>
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                             <Person fontSize='large' sx={{color: renderedDetectionsList.length > 0 && prototypeThree && renderedDetectionsList[imageIndex]?.filterID === 'Person' ? '#0A84FF' : '#343323'}}/>
                        <Box ml={1} sx={{ fontWeight: 700, color: renderedDetectionsList.length > 0 && prototypeThree && renderedDetectionsList[imageIndex]?.filterID === 'Person' ? '#0A84FF' : '#343323'}}> Person</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    
                    <ListItem sx={{ mt: -1.5, mb: -3 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                            <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                        </ListItemIcon>
                        <ListItemText primary="Item x"  />
                    </ListItem>
                    
                    <ListItem sx={{ mt: -2, mb: -2 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px'}}>
                            <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                        </ListItemIcon>
                        <ListItemText primary="Item x" />
                    </ListItem>
                </List>   
            </CardContent>          
            
            <CardContent>
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <DryCleaning fontSize='large' sx={{color: renderedDetectionsList.length > 0 && prototypeThree && renderedDetectionsList[imageIndex]?.filterID === 'Item' ? '#0A84FF' : '#343323'}}/>
                            <Box ml={1} sx={{ fontWeight: 700, color: renderedDetectionsList.length > 0 && prototypeThree && renderedDetectionsList[imageIndex]?.filterID === 'Item' ? '#0A84FF' : '#343323'}}> Personal Items</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    
                    <ListItem sx={{ mt: -1.5, mb: -3 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                            <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                        </ListItemIcon>
                        <ListItemText primary="Item x"  />
                    </ListItem>
                    
                    <ListItem sx={{ mt: -2, mb: -2 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px'}}>
                            <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                        </ListItemIcon>
                        <ListItemText primary="Item x" />
                    </ListItem>
                </List>   
            </CardContent>    

            <CardContent>
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <DirectionsCar fontSize='large' sx={{color: renderedDetectionsList.length > 0 && prototypeThree && renderedDetectionsList[imageIndex]?.filterID === 'Vehicle' ? '#0A84FF' : '#343323'}}/>
                            <Box ml={1} sx={{ fontWeight: 700, color: renderedDetectionsList.length > 0 && prototypeThree && renderedDetectionsList[imageIndex]?.filterID === 'Vehicle' ? '#0A84FF' : '#343323'}}> Vehicle</Box> {/* l = margin left */}
                        </Box>
                    </ListSubheader>
                    
                    <ListItem sx={{ mt: -1.5, mb: -3 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px' }}>
                            <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                        </ListItemIcon>
                        <ListItemText primary="Item x"  />
                    </ListItem>
                    
                    <ListItem sx={{ mt: -2, mb: -2 }}>
                        <ListItemIcon sx={{ ml: 2, minWidth: '25px'}}>
                            <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#343323' }} />
                        </ListItemIcon>
                        <ListItemText primary="Item x" />
                    </ListItem>
                </List>   
            </CardContent>    
         </Card>
    )
}   