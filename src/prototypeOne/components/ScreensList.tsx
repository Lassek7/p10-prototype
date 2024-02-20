import { Grid, Card, Box, CardHeader, Divider, Button } from '@mui/material'
import SmallScreenComponent from './SmallScreenComponent'
import { ArrowComponentLeft, ArrowComponentRight } from './ArrowComponent'
import { useRef, useState, useEffect } from 'react'
import { DryCleaning, Person, DirectionsCar } from '@mui/icons-material';

interface detection {
    imageId: string,
    imageUrl: string,
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string
}
interface ScreensListProps {
    detectionsList: Array<detection>,
    setScreenIndex: (imageIndex: number) => void
    prototypeOne?: boolean
}

export default function ScreensList({ prototypeOne,detectionsList, setScreenIndex }: ScreensListProps) {
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<'leftOnce' | 'rightOnce' |'left' | 'right' | null>(null);
    const timeoutId = useRef<number | null>(null);
    const [isSelected, setIsSelected] = useState<string| null>(null);

    const handleScreenClick = (imageId: string, imageIndex: number) => {
        setIsSelected(imageId)
        setScreenIndex(imageIndex)
    }
    
    const scrollListOnce = (direction: 'leftOnce' | 'rightOnce') => {
        const scroll_distance = 317;
        if (listRef.current) {
            if (direction === 'leftOnce') {
                listRef.current.scrollTo({
                    left: listRef.current.scrollLeft - scroll_distance,
                    behavior: 'smooth'
            }); }else{ 
                listRef.current.scrollTo({
                    left: listRef.current.scrollLeft + scroll_distance,
                    behavior: 'smooth'
                });
            }
        }
    }
   
    const continousScrollList = () => {
        if (listRef.current && scrollDirection) {
            const distance = 20; // Change this to the amount you want to scroll
            if (scrollDirection === 'left') {
                listRef.current.scrollLeft -= distance;
            } else {
                listRef.current.scrollLeft += distance;
            }
        }
    }
    useEffect(() => {
        let scrollInterval: number | null = null;
        if (scrollDirection) {
            scrollInterval = setInterval(continousScrollList, 20);
        }
        return () => {
            if (scrollInterval) {
                clearInterval(scrollInterval);
            }
        }
    }, [scrollDirection]);

    return (
        <Card sx={{borderRadius: "16px"}}>
            <Grid container >
            {!prototypeOne ? (
                <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{display: 'flex'}}>
                    <Grid item xs={7.5} md={7.5}>
                        <CardHeader title="All detections" align="left" />
                    </Grid>
                    <Grid item xs={1.5} md={1.5}>
                        <Button variant='outlined' sx={{width: '9.8vw', height: '3.7vh', borderRadius: '100px', color: '#343323', borderColor: '#343323', fontSize: '10px'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Person sx={{ mr: 1 }}/>
                                Vehicle
                            </Box>
                        </Button>
                    </Grid>
                    <Grid item xs={1.5} md={1.5}>
                        <Button variant='outlined' sx={{width: '9.8vw', height: '3.7vh', borderRadius: '100px', color: '#343323', borderColor: '#343323', fontSize: '10px'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <DryCleaning sx={{ mr: 1 }}/>
                                Vehicle
                            </Box>
                        </Button>                    </Grid>
                    <Grid item xs={1.5} md={1.5}>
                        <Button variant='outlined' sx={{width: '9.8vw', height: '3.7vh', borderRadius: '100px', color: '#343323', borderColor: '#343323', fontSize: '10px'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <DirectionsCar sx={{ mr: 1 }}/>
                                Vehicle
                            </Box>
                        </Button>                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Divider sx={{borderBottomWidth: 3}}/>
                    </Grid>
                </Grid>
                ) : (
                    <Grid item xs={12} md={12}>
                        <CardHeader title="All detections" align="left" />
                        <Divider sx={{borderBottomWidth: 3}}/>
                    </Grid>
                )}    
                <Grid item xs={12} md={0.4} sx={{display: 'flex'}}>
                    <ArrowComponentLeft  onMouseDown={() => { scrollListOnce('leftOnce'); timeoutId.current = window.setTimeout(() => setScrollDirection('left'), 100); }} onMouseUp={() => { if (timeoutId.current !== null) window.clearTimeout(timeoutId.current); setScrollDirection(null); }}  />
                </Grid>
                <Grid item xs={12} md={11.2} ref={listRef} sx={{display: 'flex', flexDirection: 'row',overflowX: "scroll", justifyContent:"space-between"}}>
                        {detectionsList.map((detectionsList, index) => (
                           <Box onClick={() => handleScreenClick(detectionsList.imageId, index)} sx={{ marginLeft: "1.56%", marginBottom: ".84%", borderRadius: "16px" , marginTop: isSelected === detectionsList.imageId ? "0.84%" :  "1.56%"}}>
                        <SmallScreenComponent prototypeOne={prototypeOne} imageUrl={detectionsList.imageUrl} imageId={detectionsList.imageId} imageIcon={detectionsList.imageIcon} imageDetectionContext={detectionsList.imageDetectionContext} imageDetectionTime={detectionsList.imageDetectionTime} ImageDetectionDate={detectionsList.ImageDetectionDate} timeSinceDetection={detectionsList.timeSinceDetection} isSelected={detectionsList.imageId === isSelected}/>
                       </Box>
                         ))}
                </Grid>
                <Grid item xs={12} md={0.4} sx={{display: 'flex'}}>
                    <ArrowComponentRight  onMouseDown={() => { scrollListOnce('rightOnce'); timeoutId.current = window.setTimeout(() => setScrollDirection('right'), 100); }} onMouseUp={() => { if (timeoutId.current !== null) window.clearTimeout(timeoutId.current); setScrollDirection(null); }} />
                </Grid>
            </Grid>
            <style>{`::-webkit-scrollbar { display: none; }`}</style>
        </Card>
    )
}