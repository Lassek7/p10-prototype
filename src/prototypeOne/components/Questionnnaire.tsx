import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Typography} from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slider } from '@mui/material';
import { mockQuestionnaire } from './mockDataQuestionnaire';  
import Styles from '../prototypeOneStyles/styles';  

    interface ArrayToSave {
        questionId: number,
        questionnnaireTitle: string,
        question1: string,
        question2: string,
    
    }

    interface questionnaire {
        questionnaireId: number,
        setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
        questionnaireActive: boolean,
    }

export default function Questionnaire(questionnaire: questionnaire) {
    const [arrayToSave, setArrayToSave] = useState<Array<ArrayToSave>>([])
    const [open, setOpen] = useState(false);
    const [questionId] = useState<number>(questionnaire.questionnaireId);
    const [questionnnaireTitle] = useState<string>(mockQuestionnaire[questionnaire.questionnaireId].questionnnaireTitle);
    const [question1, setquestion1] = useState<string>('');
    const [question2, setquestion2] = useState<string>('');
    
   
    useEffect(() => {
        setOpen(questionnaire.questionnaireActive)
    }, [questionnaire.questionnaireActive])


    const handleClose = () => {
        const saveDataToArray = {
            questionId: questionId,
            questionnnaireTitle: questionnnaireTitle,
            question1:question1,
            question2: question2,
        }
        setArrayToSave([saveDataToArray]);
        setOpen(false);
        questionnaire.setCompleted(true);


  };

  useEffect(() => {
    console.log(arrayToSave)
    //saveToFile(arrayToSave);
  } , [arrayToSave])



    return (
        <Dialog disableEscapeKeyDown maxWidth={"md"}  
        open={open} onClose={(_, reason) => 
        {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent>
                <Grid container direction={"row"} rowSpacing={3} >
                    <Grid item xs={12}>
                        <DialogTitle>
                        {mockQuestionnaire[questionnaire.questionnaireId].questionnnaireTitle}
                        </DialogTitle>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='Q1' label={mockQuestionnaire[questionnaire.questionnaireId].question1} variant='outlined' multiline rows={3} fullWidth onChange={(e) => setquestion1(e.target.value)}/>   
                    </Grid>
                    <Grid item xs={6} mb={-3}>
                        <Typography>Mental Demand</Typography>
                    </Grid>
                    <Grid item xs={6} textAlign={"right"} mb={-3}>
                        <Typography>How mentally demanding was the task?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} />
                    </Grid>
                    <Grid item xs={6}  mt={-3}>
                        <Typography>Very Low</Typography>
                    </Grid>
                    <Grid item xs={6} textAlign={"right"} mt={-3}>
                        <Typography>Very High</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='Q2' label={mockQuestionnaire[questionnaire.questionnaireId].question1} variant='outlined' fullWidth onChange={(e) => setquestion2(e.target.value)}/>   
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}