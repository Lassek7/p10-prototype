import { SxProps, Theme } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,     // xs screens of 0px and up
        sm: 600,   // sm screens of 600px and up
        md: 900,   // md screens of 900px and up
        lg: 1200,  // lg screens of 1200px and up
        xl: 1920   // xl screens of 1920px and up
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

const largeScreenInfoBox: SxProps<Theme> = {
    backgroundColor: '#F1F2F2',
    color: 'black',
    height: '100%',
}

const infoBoxButton= (isPrototypeThree: boolean, investigateRecommended?: boolean): SxProps<Theme> => ({
    width: '8.17vw', 
    height: '5.5vh', 
    borderRadius: '100px', 
    mr: "1.56vw", 
    color: isPrototypeThree && investigateRecommended ? '#f5f5f5' : '#0A84FF', 
    borderColor: isPrototypeThree && investigateRecommended ? '#0A84FF' : '#343323',
    fontSize: {
        xs: '10px',  // font size for xs screens of 0px and up
        sm: '12px',  // font size for sm screens of 600px and up
        md: '14px',  // font size for md screens of 900px and up
        lg: '16px',  // font size for lg screens of 1200px and up
        xl: '18px',  // font size for xl screens of 1920px and up
    },
    '&:focus': {
        outline: 'none',
      },
})
const largeInfoBoxTypography = (isPrototypeThree?: boolean): SxProps<Theme> => ({
    fontSize: 13,
    fontWeight: 700, 
    color: isPrototypeThree ? '#0A84FF' : '#343323',
     
})
const largeInfoBoxTypographyId: SxProps<Theme> = {
    fontSize: 15,
    fontWeight: 700,
    color: '#343323',
}

// Styles detectionList
const filterButtons: SxProps<Theme> = {
    width: '79.785%', // calculated by width of container / 12 * grid size alloted and then what percentage of the grid it covers.
    borderRadius: '100px',
    borderColor: '#343323',
    fontSize: '10px',
    '&:focus': {
        outline: 'none',
      },
}
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

const smallSceenInfoBox: SxProps<Theme> = { //change to adjust height of tex placement
    color: 'black',
    height: '100%',
    Direction: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between' 
}

const smallInfoBoxTypographyRight: SxProps<Theme> = { //might combine this and the left with a boolean
    fontSize: 8,
    fontWeight: 700,
    
        
}
const smallInfoBoxTypographyLeft: SxProps<Theme> = {
    fontSize: 13,
    fontWeight: 700,
    aliign: 'left'
        
}


// TaskGoal Card Styles
const taskGoalCard: SxProps<Theme> = {
    position: 'absolute', 
    top: "1.56vh", 
    left: "1.56vw", 
    width: '22.69vw', 
    height: '62.82vh',
    borderRadius: "16px",
}
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
    largeScreenInfoBox: largeScreenInfoBox,
    taskGoalCard: taskGoalCard,
    infoBoxButton: infoBoxButton,  
    arrowComponent: arrowComponent,
    filterButtons: filterButtons,
    screensList: screensList,
    smallInfoBoxTypographyRight: smallInfoBoxTypographyRight,
    smallInfoBoxTypographyLeft: smallInfoBoxTypographyLeft,
    largeInfoBoxTypography: largeInfoBoxTypography,
    smallSceenInfoBox: smallSceenInfoBox,
    largeInfoBoxTypographyId: largeInfoBoxTypographyId,
    alertBox: alertBox,
    alertBoxEmpty: alertBoxEmpty,

}



export default Styles
