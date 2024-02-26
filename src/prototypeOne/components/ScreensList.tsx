import { Grid, Card, Box, CardHeader, Divider, Button, CardContent, Typography, CardActions, CardMedia, hexToRgb } from '@mui/material'
import SmallScreenComponent from './SmallScreenComponent'
import { SmallScreenInfoBoxComponent } from './InfoBoxComponent'
import { ArrowComponentLeft, ArrowComponentRight } from './ArrowComponent'
import { useRef, useState, useEffect } from 'react'
import { DryCleaning, Person, DirectionsCar, Padding, Height } from '@mui/icons-material';
import Styles from '../prototypeOneStyles/styles'
// current issue: filtering is selected when not shown. crashes when out of bounds
interface detection {
    imageId: string,
    imageUrl: string,
    imageIcon: JSX.Element,
    imageDetectionContext: string,
    imageDetectionTime: string,
    ImageDetectionDate: string,
    timeSinceDetection: string,
    filterID: string,
    investigateRecommended: boolean
}
interface ScreensListProps {
    setScreenIndex: (imageIndex: number) => void
    prototypeOne?: boolean
    renderedDetectionList: Array<detection> 
    setRenderedDetectionList: (detectionsList: Array<detection>) => void
    filterChoices: {[key: string]: boolean}
    setFilterChoices: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    setIsSelected: React.Dispatch<React.SetStateAction<string | null>>;
    isSelected: string | null

}

export default function ScreensList({ prototypeOne, setScreenIndex, setIsSelected, isSelected, filterChoices, setFilterChoices, renderedDetectionList}: ScreensListProps) {
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<'leftOnce' | 'rightOnce' |'left' | 'right' | null>(null);
    const timeoutId = useRef<number | null>(null);

    
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
   
    const handleScreenClick = (imageId: string, imageIndex: number) => {
        if (imageIndex != null && imageId != null) {
            setIsSelected(imageId)
            setScreenIndex(imageIndex)
        } else {
            setIsSelected(null)
            setScreenIndex(0)
        }

    }   

    return (
        <Card sx={Styles.screensList}>
            <Grid container sx={{height: '100%'}}>
            {!prototypeOne ? (
                <Grid container justifyContent={'space-between'}  alignItems={'center'} sx={{display: 'flex', height: '25.09%'}}>
                    <Grid item xs={7.5} md={7.5} >
                        <CardHeader title="All detections" align="left" />
                    </Grid>
                    <Grid item xs={1.5} md={1.5}>
                        <Button variant={filterChoices.Vehicle ? 'contained' : 'outlined'} sx={{...Styles.filterButtons, color: filterChoices.Vehicle ? '#FFFFFF' : '#343323'}} onClick={() => setFilterChoices(prev => ({...prev, Vehicle: !prev.Vehicle}))}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <DirectionsCar sx={{ mr: 1 }}/>
                                Vehicle
                            </Box>
                        </Button>
                    </Grid>
                    <Grid item xs={1.5} md={1.5}>
                        <Button variant={filterChoices.Item ? 'contained' : 'outlined'} sx={{...Styles.filterButtons, color: filterChoices.Item ? '#FFFFFF' : '#343323'}} onClick={() => setFilterChoices(prev => ({...prev, Item: !prev.Item}))}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <DryCleaning sx={{ mr: 1 }}/>
                                Personal item
                            </Box>
                        </Button>                    
                    </Grid>
                    <Grid item xs={1.5} md={1.5}>
                        <Button variant={filterChoices.Person ? 'contained' : 'outlined'} sx={{...Styles.filterButtons, color: filterChoices.Person ? '#FFFFFF' : '#343323'}} onClick={() => setFilterChoices(prev => ({...prev, Person: !prev.Person}))}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Person sx={{ mr: 1 }}/>
                                Person
                            </Box>
                        </Button>                    
                    </Grid>

                </Grid>
                ) : (
                    <Grid container justifyContent={'space-between'}  alignItems={'center'} sx={{display: 'flex', height: '25.09%'}}>
                        <Grid item xs={12} md={12} >
                            <CardHeader title="All detections" align="left"  />
                        </Grid>
                    </Grid>
                )}  
                    <Grid item xs={12}  >
                         <Divider sx={{borderBottomWidth: 3}}/>
                    </Grid>  
                <Grid container sx={{display: 'flex', height: '76.0%'}}>
                    <Grid item xs={12} md={0.4} sx={{display: 'flex' }}>
                        <ArrowComponentLeft  onMouseDown={() => { scrollListOnce('leftOnce'); timeoutId.current = window.setTimeout(() => setScrollDirection('left'), 100); }} onMouseUp={() => { if (timeoutId.current !== null) window.clearTimeout(timeoutId.current); setScrollDirection(null); }} />
                    </Grid>
                    <Grid item xs={12} md={11.2} ref={listRef} sx={{display: 'flex', flexDirection: 'row',overflowX: "scroll"}}>
                            {renderedDetectionList.map((renderedDetectionList, index) => (
                                <Box key={index} >
                                    <Card onClick={() => handleScreenClick(renderedDetectionList.imageId, index)} sx={{...Styles.smallScreen(isSelected === renderedDetectionList.imageId)}} >  
                                        <CardMedia component="img" sx={{height: '72.4%', objectFit: 'fit' }} image={renderedDetectionList.imageUrl} alt='Image' /> 
                                        <Divider />
                                        <CardContent >
                                             <SmallScreenInfoBoxComponent  prototypeOne={prototypeOne} imageId={renderedDetectionList.imageId} imageIcon={renderedDetectionList.imageIcon} imageDetectionTime={renderedDetectionList.imageDetectionTime} ImageDetectionDate={renderedDetectionList.ImageDetectionDate} />  
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                    </Grid>
                    <Grid item xs={12} md={0.4} >
                        <ArrowComponentRight  onMouseDown={() => { scrollListOnce('rightOnce'); timeoutId.current = window.setTimeout(() => setScrollDirection('right'), 100); }} onMouseUp={() => { if (timeoutId.current !== null) window.clearTimeout(timeoutId.current); setScrollDirection(null); }} />
                    </Grid>
                </Grid>
            </Grid>
            <style>{`::-webkit-scrollbar { display: none; }`}</style>
        </Card>
    )
}