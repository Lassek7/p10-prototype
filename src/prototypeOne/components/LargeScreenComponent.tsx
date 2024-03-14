import {LargeScreenInfoBoxComponent} from './InfoBoxComponent';
import { Person } from '@mui/icons-material';

interface detection {
    imageId: string,
    imageUrl: string,
    markedImageUrl: string,
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    filterID: string,
    investigateRecommended: boolean,
}

interface detectionsProps {
    selectedDetection: detection,
    onDeleteClick: (imageId: string) => void,
    onInvestigateClick: (imageId: string) => void,
    prototypeOne?: boolean,
    prototypeThree: boolean,
    prototypeTwo: boolean
}

export default function LargeScreenComponent({prototypeOne, prototypeThree, prototypeTwo, selectedDetection, onDeleteClick, onInvestigateClick}: detectionsProps) {
    const handleDeleteClick = (imageId: string) => {
        onDeleteClick(imageId)
    }
    const handleInvestigateClick = (imageId: string) => {
        onInvestigateClick(imageId)
    }

    if (selectedDetection === undefined) {
    return ( // change test parameters to what we want in the screen if its empty
                <LargeScreenInfoBoxComponent 
                    markedImageUrl={"https://source.unsplash.com/random"}
                    onDeleteClick={handleDeleteClick} 
                    onInvestigateClick={handleInvestigateClick} 
                    prototypeOne={prototypeOne} 
                    imageId={"test"} 
                    imageIcon={<Person />} 
                    imageDetectionContext={"test"} 
                    imageDetectionTime={"test"} 
                    ImageDetectionDate={"test"} 
                    timeSinceDetection={"test"} 
                    prototypeThree={prototypeThree}
                    isPrototypeTwo={prototypeTwo} 
                    investigateRecommended={true}
                />  
    ) } else {
        return (
            <LargeScreenInfoBoxComponent 
                markedImageUrl={selectedDetection.markedImageUrl}
                onDeleteClick={handleDeleteClick} 
                onInvestigateClick={handleInvestigateClick} 
                prototypeOne={prototypeOne} 
                imageId={selectedDetection.imageId} 
                imageIcon={selectedDetection.imageIcon} 
                imageDetectionContext={selectedDetection.imageDetectionContext} 
                imageDetectionTime={selectedDetection.imageDetectionTime} 
                ImageDetectionDate={selectedDetection.ImageDetectionDate} 
                timeSinceDetection={selectedDetection.timeSinceDetection} 
                prototypeThree={prototypeThree} 
                isPrototypeTwo={prototypeTwo}
                investigateRecommended={selectedDetection.investigateRecommended}
            />  
    )
    }
}



