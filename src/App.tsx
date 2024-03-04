import './App.css'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid } from '@mui/material';
import { useState } from 'react';

function App() {
const [participantId, setParticipantId] = useState<string>("")
const [age, setAge] = useState<string>("")
const [other, setOther] = useState<string>("")
const navigate = useNavigate();



const loginClick = (version: number) => {
  const userData = {
    participantId: participantId,
    age: age,
    other: other,
    version: version
  } 
  if (version === 1) {
    navigate('/Exploration', {state: userData});
  } else {
    navigate('/Exploration', {state: userData});
  }
}

  return (
    <Grid container justifyContent={"center"} rowSpacing={3} >
      <Grid item xs={12}>
        <TextField id="participantId" label="Participant" variant="standard" value={participantId} onChange={(e) => setParticipantId(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField id="age" label="Age" variant="standard" value={age} onChange={(e) => setAge(e.target.value)} />
      </Grid>     
      <Grid item xs={12}>
        <TextField id="other" label="Other" variant="standard" value={other} onChange={(e) => setOther(e.target.value)} />
      </Grid>    
      <Grid item xs={12}>
        <Button onClick={()=>{loginClick(1)}} variant="contained" color="primary" > Prototype v1.0</Button>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={()=>{loginClick(2)}} variant="contained" color="primary" > Prototype v2.0</Button>
      </Grid>
    </Grid>
  );
}

export default App
//slider in here temporarely to show, as the nasa tlx and questionaire is not implemented yet