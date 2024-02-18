
const smallScreen = {
    width: '11vw',
    height: '14vh',
    borderRadius: "16px",   // border radius can also be made as BorderTopLeftRadius, BorderTopRightRadius, BorderBottomLeftRadius, BorderBottomRightRadius
    boxShadow: "0px 0px 3px 0px #000000" // horizontal, vertical, blur, spread, color 
}

const largeScreen = {
    color: '#f5f5f5',
    backgroundColor: 'F1F2F2',
    height: '100%',
    width: '100%',
    borderRadius: "16px",
    display: 'flex', 
    flexDirection: 'column' 
}


const screenInfoBox = {
    backgroundColor: 'F1F2F2',
    color: 'black',
    height: '100%',
    width: '100%',
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
}


const taskGoalCard = {
    backgroundColor: 'F1F2F2',
    height: '100%',
    width: '100%',
    top: '50%',
    left: '50%',
    borderRadius: "16px",
}

const Styles = {
    
    smallScreen: smallScreen,
    largeScreen: largeScreen,
    screenInfoBox: screenInfoBox,
    taskGoalCard: taskGoalCard,
}

export default Styles
