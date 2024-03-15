import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Typography} from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slider } from '@mui/material';
import { mockQuestionnaire } from './mockDataQuestionnaire';  
import Styles from '../prototypeOneStyles/styles';  
import { saveToFile } from '../globalFunctions.tsx/saveToFile';

    interface listOfQuestions {
        questionId: number,
        question: string,
        answer: string,   
    }

    interface questionnaire {
        questionnaireName: string,
        setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
        questionnaireActive: boolean,
        userName: string,
    }

export default function Questionnaire({questionnaireName, setCompleted, questionnaireActive, userName}: questionnaire) {
    const [open, setOpen] = useState(false)
    const [questionnnaireTitle] = useState<string>(questionnaireName)
    const [listOfQuestions] = useState<Array<listOfQuestions>>(mockQuestionnaire)
    const [arrayToSave, setArrayToSave] = useState<Array<listOfQuestions>>()


    
   
    useEffect(() => {
        setOpen(questionnaireActive)
    }, [questionnaireActive])


    const handleClose = () => {
        setArrayToSave(listOfQuestions);
        setOpen(false);
        setCompleted(true);


  };
  useEffect(() => {
    if (arrayToSave) {
        console.log(arrayToSave)
        //saveToFile(arrayToSave, userName, questionnnaireTitle+" Questionnaire");
      }
  },[arrayToSave]) 



  const LabelTop = ({ text, align }: { text: string, align: 'left' | 'right' }) => (
    <Grid item xs={align === "left" ? 5.8 : 5} mb={-5} sx={{ marginLeft: align === 'left' ? 6 : 0, marginRight: align === 'right' ? 2 : 0 }}>
      <Typography textAlign={align}>{text}</Typography>
    </Grid>
  );

  const LabelBottom = ({ text, align }: { text: string, align: 'left' | 'right' }) => (
    <Grid item xs={align === "left" ? 5.8 : 5} mt={-5} sx={{ marginLeft: align === 'left' ? 6 : 0, marginRight: align === 'right' ? 2 : 0 }}>
      <Typography textAlign={align}>{text}</Typography>
    </Grid>
  );
    return (
        <Dialog disableEscapeKeyDown maxWidth={"md"}  
        open={open} onClose={(_, reason) => 
        {if (reason !== 'backdropClick') { handleClose()}}}>
            <DialogContent>
                <Grid container direction={"row"} rowSpacing={5}>
                    <Grid item xs={12}>
                        <DialogTitle>
                        {questionnnaireTitle}
                        </DialogTitle>
                    </Grid>

                    <LabelTop text="Mental Demand" align="left" />
                    <LabelTop text={listOfQuestions[0].question} align="right" />
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} onChange={(_, value) => listOfQuestions[0].answer = value+""}/>
                    </Grid>
                    <LabelBottom text="Very Low" align="left" />
                    <LabelBottom text="Very High" align="right" />

                    <LabelTop text="Physical Demand" align="left" />
                    <LabelTop text={listOfQuestions[1].question} align="right" />
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} onChange={(_, value) => listOfQuestions[1].answer = value+""}/>
                    </Grid>
                    <LabelBottom text="Very Low" align="left" />
                    <LabelBottom text="Very High" align="right" />

                    <LabelTop text="Temporal Demand" align="left" />
                    <LabelTop text={listOfQuestions[2].question} align="right" />
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} onChange={(_, value) => listOfQuestions[2].answer = value+""}/>
                    </Grid>
                    <LabelBottom text="Very Low" align="left" />
                    <LabelBottom text="Very High" align="right" />

                    <LabelTop text="Performance" align="left" />
                    <LabelTop text={listOfQuestions[3].question} align="right" />
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} onChange={(_, value) => listOfQuestions[3].answer = value+""}/>
                    </Grid>
                    <LabelBottom text="Very Low" align="left" />
                    <LabelBottom text="Very High" align="right" />


                    <LabelTop text="Effort" align="left" />
                    <LabelTop text={listOfQuestions[4].question} align="right" />
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} onChange={(_, value) => listOfQuestions[4].answer = value+""}/>
                    </Grid>
                    <LabelBottom text="Very Low" align="left" />
                    <LabelBottom text="Very High" align="right" />

                    <LabelTop text="Frustration" align="left" />
                    <LabelTop text={listOfQuestions[5].question} align="right" />
                    <Grid item xs={12}>
                        <Slider defaultValue={10} aria-label="Default" step={1} marks min={1} max={20} valueLabelDisplay='auto' sx={Styles.slider} onChange={(_, value) => listOfQuestions[5].answer = value+""}/>
                    </Grid>
                    <LabelBottom text="Very Low" align="left" />
                    <LabelBottom text="Very High" align="right" />

                    <Grid item xs={12}>
                        <TextField label={listOfQuestions[6].question} variant='outlined' multiline rows={3} sx={Styles.textField} onChange={(e) => listOfQuestions[6].answer = e.target.value}/>   
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label={listOfQuestions[7].question} variant='outlined' multiline rows={3} sx={Styles.textField}  onChange={(e) => listOfQuestions[7].answer = e.target.value}/>   
                    </Grid>
                </Grid>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Submit & Continue
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}