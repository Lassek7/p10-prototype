import Styles from '../prototypeOneStyles/styles';
import { Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function TaskGoalsComponent() {
    return (
        <Card sx={Styles.taskGoalCard}>
            <CardHeader title="Task Goals" align="left" />
            <Divider sx={{borderBottomWidth: 3}}/>
            <CardContent>
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                        <PersonIcon fontSize='large' sx={{ color: '#343323' }}/>
                            <Box ml={1} sx={{ fontWeight: 700, color: '#343323' }}> Person</Box> {/* l = margin left */}
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
                        <PersonIcon fontSize='large' sx={{ color: '#343323' }}/>
                            <Box ml={1} sx={{ fontWeight: 700, color: '#343323' }}> Personal Items</Box> {/* l = margin left */}
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