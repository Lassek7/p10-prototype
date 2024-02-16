import Styles from '../prototypeOneStyles/styles';
import { Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function TaskGoalsComponent() {
    return (
        <Card sx={Styles.taskGoalCard}>
            <CardHeader title="Task Goals" />
            <Divider />
            <CardContent>
                <List>
                    <ListSubheader>
                        <Box display="flex" alignItems="center">
                            <DraftsIcon />
                            <Box ml={1}> sup</Box>
                        </Box>
                    </ListSubheader>
                    
                    <ListItem>
                        <ListItemIcon >
                            <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Item x"  />
                    </ListItem>
                    
                    <ListItem>
                        <ListItemIcon >
                            <FiberManualRecordIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Item x" />
                    </ListItem>
                </List>   
            </CardContent>            
         </Card>
    )
}   