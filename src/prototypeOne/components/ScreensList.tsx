import { Grid, Card, Box, CardContent, CardHeader, Typography, Divider } from '@mui/material'
import SmallScreenComponent from './SmallScreenComponent'
import { ArrowComponentLeft, ArrowComponentRight } from './ArrowComponent'
import { detections } from './mockDataDetections'
import { useRef, useState, useEffect } from 'react'



export default function ScreensList() {
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<'leftOnce' | 'rightOnce' |'left' | 'right' | null>(null);
    const timeoutId = useRef<number | null>(null);
    const [isSelected, setIsSelected] = useState<string| null>(null);

    const handleScreenClick = (imageId: string) => {
        setIsSelected(imageId)
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
            <Grid container spacing={0.1}>
                <Grid item xs={12} md={12}>
                    <CardHeader title="All detections" align="left" />
                    <Divider sx={{borderBottomWidth: 3}}/>
                </Grid>
                <Grid item xs={12} md={0.4} sx={{display: 'flex'}}>
                    <ArrowComponentLeft  onMouseDown={() => { scrollListOnce('leftOnce'); timeoutId.current = window.setTimeout(() => setScrollDirection('left'), 100); }} onMouseUp={() => { if (timeoutId.current !== null) window.clearTimeout(timeoutId.current); setScrollDirection(null); }}  />
                </Grid>
                <Grid item xs={12} md={11.2} ref={listRef} sx={{display: 'flex', flexDirection: 'row',overflowX: "scroll", justifyContent:"space-between"}}>
                        {detections.map((detections) => (
                           <Box onClick={() => handleScreenClick(detections.imageId)} sx={{ marginLeft: "1.56%", marginBottom: ".84%", marginTop: "1.56%" }}>
                        <SmallScreenComponent  imageUrl={detections.imageUrl} imageId={detections.imageId} imageIcon={detections.imageIcon} imageDetectionContext={detections.imageDetectionContext} imageDetectionTime={detections.imageDetectionTime} ImageDetectionDate={detections.ImageDetectionDate} timeSinceDetection={detections.timeSinceDetection} isSelected={detections.imageId === isSelected}/>
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