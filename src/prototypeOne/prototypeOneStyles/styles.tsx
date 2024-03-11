import { SxProps, Theme } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1930,
      lg: 2560,
      xl: 3850,
    },
  },
});
//Alert Box Styles
const alertBox: SxProps<Theme> = {
    color: '#343323',
    backgroundColor: '#F1F2F2',
    position: 'absolute', 
    top: "5.55vh", 
    right: "6.12vw", 
    width: '15.10vw', 
    height: '26.136vh',
    borderRadius: "16px",
    display: 'flex',
    flexDirection: 'column'
}
const alertBoxEmpty: SxProps<Theme> = {
    color: '#343323',
    backgroundColor: '#F1F2F2',
    position: 'absolute', 
    top: "5.55vh", 
    right: "6.12vw", 
    width: '15.10vw', 
    height: '6.136vh',
    borderRadius: "16px",
    display: 'flex',
    flexDirection: 'column'
}
const alertBoxRight: SxProps<Theme> = { //might combine this and the left with a boolean
    textAlign: "right",
    mr: "16.8%",
    [theme.breakpoints.down('md')]: {
        fontSize: 11,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 13,
        fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 700,
}}
const alertBoxLeft: SxProps<Theme> = {
    textAlign: "left",
    ml: "20%",
    [theme.breakpoints.down('md')]: {
        fontSize: 18,
        fontWeight: 700,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 21,
        fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 700,
}}
const alertBoxTop: SxProps<Theme> = {
    textAlign: "left",
    ml: "20%",
    color: '#D61D1D',
    [theme.breakpoints.down('md')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 27,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 700,
}}
const alertBoxBadge: SxProps<Theme> = {
    mr: "25%",
    display: 'flex', 
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
        '.MuiBadge-badge': {
            height: '20px',
            width: '20px',
            fontSize: '0.75rem',
          },
    },
    [theme.breakpoints.up('lg')]: {
        '.MuiBadge-badge': {
            height: '25px',
            width: '25px',
            borderRadius: '50%',
            fontSize: '0.9rem',
          },
    },
    [theme.breakpoints.up('xl')]: {
        '.MuiBadge-badge': {
            height: '20px',
            width: '20px',
            fontSize: '0.75rem',
          },

}}


// Timer Styles
const timer: SxProps<Theme> = {
    color: '#343323', 
    position: 'absolute', 
    top: "1.55vh", 
    right: "6.5vw"
}

// Slider Styles
const slider: SxProps<Theme> = {   
    width: 
    '84%', 
    marginLeft:"8%", 
    '& .MuiSlider-mark:nth-of-type(5n-3)': { 
        borderRadius: '50%', 
        backgroundColor: '#0A84FF',
        transform: 'scale(7)'

      },
    '& .MuiSlider-mark': { 
        top: '14px',
        borderRadius: '50%', 
        backgroundColor: '#0A84FF',
        transform: 'scale(5)'
      },
      '& .MuiSlider-valueLabel': {
        backgroundColor: '#0A84FF', 
        color: 'white', 
        borderRadius: '8px'
      }
    };

// Textfield Questionnaire Styles
const textField: SxProps<Theme> = {
    width: '84%', 
    marginLeft:"8%"
}

// Large Screen Styles
const largeScreen = (isPrototypeThree: boolean): SxProps<Theme> => ({
    color: '#f5f5f5',
    backgroundColor: '#F1F2F2',
    position: 'absolute', 
    top: "5.55vh", 
    left: isPrototypeThree ? "30.47vw" : "39.47vw",
    width: '45.26vw', 
    height: '57.268vh',
    borderRadius: "16px",
    display: 'flex', 
    flexDirection: 'column' 
})

const largeScreenInfoBoxRightTop: SxProps<Theme> = {
    color: '#343323',
    mr: "6%",
    [theme.breakpoints.down('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
}}

const largeScreenInfoBoxRightBottom: SxProps<Theme> = {
    color: '#343323',
    mr: "6%",
    [theme.breakpoints.down('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
}}
const largeScreenInfoBoxLeft = (isPrototypeThree?: boolean): SxProps<Theme> => ({
    ml: "4px",
    color: isPrototypeThree ? '#0A84FF' : '#343323',
    [theme.breakpoints.down('md')]: {
        fontSize: 18,
        fontWeight: 600,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 21,
        fontWeight: 600,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 600,
}
})
const largeInfoBoxCardContent: SxProps<Theme> = { 
    [theme.breakpoints.down('md')]: {
        mt: "-10px" 
    },
    [theme.breakpoints.up('lg')]: {
        mt: "-6px" 
    },
    [theme.breakpoints.up('xl')]: {
        mt: "-10px" 
}}

const infoBoxButton= (isPrototypeThree: boolean, investigateRecommended?: boolean): SxProps<Theme> => ({
    width: '8.17vw', 
    height: '5.5vh', 
    borderRadius: '100px', 
    mr: "1vw", 
    textTransform: 'none',
    color: isPrototypeThree && investigateRecommended ? '#f5f5f5' : '#0A84FF', 
    borderColor: isPrototypeThree && investigateRecommended ? '#0A84FF' : '#343323',
    '&:focus': {
        outline: 'none',
      },
    [theme.breakpoints.down('md')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 27,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
}})
// Styles detectionList
const filterButtons: SxProps<Theme> = {
    width: '79.785%', // calculated by width of container / 12 * grid size alloted and then what percentage of the grid it covers.
    borderRadius: '100px',
    borderColor: '#343323',
    textTransform: 'none',
    '&:focus': {
        outline: 'none',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
}}
// SmallScreen Styles
const smallScreen = (isSelected: boolean): SxProps<Theme> => ({ 
    width: '11.71vw',
    height: '14.26vh',
    boxSizing: 'border-box',
    borderRadius: "16px",   
    boxShadow: "0px 0px 3px 0px #000000", 
    marginTop: isSelected ? "5.37%" : "10.75%",
    border: isSelected ? '3px solid red' : 'none',
    marginLeft: "0.84vw",
    marginRight: "0.84vw",
     
})

const smallScreenInfoBox: SxProps<Theme> = { //change to adjust height of tex placement
    color: 'black',
    height: '100%',
    Direction: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between'
}


const smallInfoBoxTypographyRight: SxProps<Theme> = { //might combine this and the left with a boolean
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        fontSize: 10.5,
        fontWeight: 700,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 13,
        fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 700,
}}
const smallInfoBoxTypographyLeft: SxProps<Theme> = { 
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
        fontSize: 17,
        fontWeight: 700,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 20,
        fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
}}

const smallInfoBoxCardContent: SxProps<Theme> = { 
    [theme.breakpoints.down('md')]: {
        mt: "-10px" 
    },
    [theme.breakpoints.up('lg')]: {
        mt: "-6px" 
    },
    [theme.breakpoints.up('xl')]: {
        mt: "-10px" 
}}

// TaskGoal Card Styles
const taskGoalCard: SxProps<Theme> = {
    position: 'absolute', 
    top: "1.56vh", 
    left: "1.56vw", 
    width: '22.69vw', 
    height: '62.82vh',
    borderRadius: "16px",
}
const TaskGoalCategoryText: SxProps<Theme> = { 
    [theme.breakpoints.down('md')]: {
        fontSize: 21,
        fontWeight: 700,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 27,
        fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 700,
}}
const TaskGoalText: SxProps<Theme> = {
    [theme.breakpoints.down('md')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 27,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 8,
        fontWeight: 700,
}}
const TaskGoalFiberIcon: SxProps<Theme> = {
    color: '#343323',
    [theme.breakpoints.down('md')]: {
        fontSize: 10,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 15,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 20,
}}
// ArrowComponent Styles
const arrowComponent: SxProps<Theme> = {
    height: '100%', 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: "0px", 

}

const screensList: SxProps<Theme> = {
    position: 'absolute', 
    left: "1.56vw", 
    right: '1.56vw', 
    bottom: '2.77vh',
    height: '26.06vh',
    borderRadius: "16px",
}


// Styles export Object
const Styles = {
    smallScreen: smallScreen,
    largeScreen: largeScreen,
    largeScreenInfoBoxLeft: largeScreenInfoBoxLeft,
    largeScreenInfoBoxRightTop: largeScreenInfoBoxRightTop,
    largeScreenInfoBoxRightBottom: largeScreenInfoBoxRightBottom,
    taskGoalCard: taskGoalCard,
    infoBoxButton: infoBoxButton,  
    arrowComponent: arrowComponent,
    filterButtons: filterButtons,
    screensList: screensList,
    smallInfoBoxTypographyRight: smallInfoBoxTypographyRight,
    smallInfoBoxTypographyLeft: smallInfoBoxTypographyLeft,
    smallScreenInfoBox: smallScreenInfoBox,
    alertBox: alertBox,
    alertBoxEmpty: alertBoxEmpty,
    timer: timer,
    slider: slider,
    textField: textField,
    theme: theme,
    alertBoxRight: alertBoxRight,
    alertBoxLeft: alertBoxLeft,
    alertBoxTop: alertBoxTop,   
    alertBoxBadge: alertBoxBadge,
    smallInfoBoxCardContent: smallInfoBoxCardContent,
    largeInfoBoxCardContent: largeInfoBoxCardContent,
    TaskGoalText: TaskGoalText,
    TaskGoalCategoryText: TaskGoalCategoryText,
    TaskGoalFiberIcon: TaskGoalFiberIcon

}



export default Styles
