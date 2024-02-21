import { SxProps, Theme } from '@mui/system';

// prototypeLayoutStyles
const prototypeLayout: SxProps<Theme> = {
    
}

// Large Screen Styles
const largeScreen: SxProps<Theme> = {
    color: '#f5f5f5',
    backgroundColor: '#F1F2F2',
    height: '100%',
    width: '100%',
    borderRadius: "16px",
    display: 'flex', 
    flexDirection: 'column' 
}
const InfoBoxButton: SxProps<Theme> = {
    width: '8.17vw', 
    height: '5.5vh', 
    borderRadius: '100px', 
    mr: "1.56vw", 
    color: '#0A84FF', 
    borderColor: '#343323',
    fontSize: {
        xs: '10px',  // font size for xs screens of 0px and up
        sm: '12px',  // font size for sm screens of 600px and up
        md: '14px',  // font size for md screens of 900px and up
        lg: '16px',  // font size for lg screens of 1200px and up
        xl: '18px',  // font size for xl screens of 1920px and up
    },
}
// Styles detectionList
const filterButtons: SxProps<Theme> = {
    width: '9.8vw', 
    height: '3.7vh', 
    borderRadius: '100px',
    borderColor: '#343323', 
    fontSize: '10px',
    '&:focus': {
        outline: 'none',
      },
}
// SmallScreen Styles
const smallScreen: SxProps<Theme> = {
    width: '11vw',
    height: '14vh',
    boxSizing: 'border-box',
    borderRadius: "16px",   
    boxShadow: "0px 0px 3px 0px #000000", // horizontal, vertical, blur, spread, color 
}
const screenInfoBox: SxProps<Theme> = {
    backgroundColor: '#F1F2F2',
    color: 'black',
    height: '100%',
    width: '100%',
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
}
// TaskGoal Card Styles
const taskGoalCard: SxProps<Theme> = {
    height: '100%',
    width: '100%',
    top: '50%',
    left: '50%',
    borderRadius: "16px",
}
// ArrowComponent Styles
const ArrowComponent: SxProps<Theme> = {
    height: '19.83vh', 
    width: '3.125vw', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
}



// Styles export Object
const Styles = {
    prototypeLayout: prototypeLayout,
    smallScreen: smallScreen,
    largeScreen: largeScreen,
    screenInfoBox: screenInfoBox,
    taskGoalCard: taskGoalCard,
    InfoBoxButton: InfoBoxButton,  
    ArrowComponent: ArrowComponent,
    filterButtons: filterButtons,
}



export default Styles
