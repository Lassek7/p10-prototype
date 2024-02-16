const appBackground = {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%'
}

const smallScreen = {
    color: '#f5f5f5',
    height: '100%',
    width: '100%',
    top: '50%',
    left: '50%',
    borderRadius: "16px",   // border radius can also be made as BorderTopLeftRadius, BorderTopRightRadius, BorderBottomLeftRadius, BorderBottomRightRadius
    boxShadow: "0px 0px 10px 0px #000000" // horizontal, vertical, blur, spread, color 
}

const largeScreen = {
    color: '#f5f5f5',
    height: '400px',
    width: '300px',
    borderRadius: "16px",
    boxShadow: "0px 0px 10px 0px #000000",
    display: 'flex', 
    flexDirection: 'column' 
}


const screenInfoBox = {
    color: 'black',
    height: '100%',
    width: '100%',
    
}


const taskGoalCard = {
    height: '100%',
    width: '200px',
    top: '50%',
    left: '50%',
    borderRadius: "16px",
    boxShadow: "0px 0px 10px 0px #000000" 
}

const Styles = {
    
    appBackground: appBackground,
    smallScreen: smallScreen,
    largeScreen: largeScreen,
    screenInfoBox: screenInfoBox,
    taskGoalCard: taskGoalCard,
}

export default Styles
