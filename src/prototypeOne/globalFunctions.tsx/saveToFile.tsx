
interface detectionData {
    imageId: string,
    points: number,
    chosenAction: string,
  }
  
  interface QuestionData {
    questionId: number;
    question: string;
    answer: string;
  }
  interface userData {
    participantId: string;
    age: string,
    gender: string,
    occupation: string,
    version: number
  }
  interface debriefing {
    participantId: string;
    debriefingQuestionOne: string;
    debriefingQuestionOneAnswer: string;
    debriefingQuestionTwo: string;
    debriefingQuestionTwoAnswer: string;
  }

export function saveToFile(arrayToSave: (detectionData | QuestionData | userData | debriefing)[], userName: string, fileName: string) {
    const fs = require('fs');
    const path = require('path');
    const Papa = require('papaparse');


    const csv = Papa.unparse(arrayToSave);
    const exeDir = path.dirname(process.execPath);
    const dirPath = path.join(exeDir, '../TestAnswers/' + userName);
  
    // Create the directory if it doesn't exist
    fs.mkdirSync(dirPath, { recursive: true });
  
    const filePath = path.join(dirPath, fileName+'.csv');
    fs.writeFile(filePath, csv, (err: any) => {
      if (err) {
        console.error('Error writing file', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
  } 

