import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/Images/parabola.jpg';
import SectionSubHeading from '../Components/SectionSubHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import Label from '../Components/Label';

import Contentbutton from '../Components/ContentButton';
import { ContCard } from '../Components/Cards';



function ViewCourse() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    return (
        <Grid sx={{ padding: isSmallScreen ? '0 20px' : '0 40px' }}>
            <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', }}>
                <Box sx={{ width: isSmallScreen ? '100%' : "30%", backgroundColor: '#E3ECF1', position: 'relative', paddingBottom: "20px", height: isSmallScreen ? "660px" : "800px", marginTop: isSmallScreen ? "-30vh" : "-60px", zIndex: "50", borderRadius: "20px" }}>

                    <img
                        style={{ height: "50%", width: "100%", objectFit: "cover", }}
                        src={parabola} alt='card' />

                    <CardContent sx={{ margin: '10px' }}>
                        <Label children={"Course Title"} />
                        <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.
                        </Typography>
                        <Label children={"Free"} />
                    </CardContent>
                    <Contentbutton text={"START"} />
                </Box >
                <Grid sx={{ paddingLeft: isSmallScreen ? '0' : '20px', paddingTop: '70px', width: isSmallScreen ? "100%" : "70%", paddingBottom: "20px" }}>
                    <Box sx={{ width: "90%", margin: "0 5%" }}>
                        <Label children={"What you will learn?"} />
                        <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <ul className='list'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                        </ul>

                        <Box sx={{ paddingTop: '30px' }}>
                            <Label children={"Course Content"} />
                            <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                            <br></br>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={1} text={short} duration={"00:00"} />
                            </Box>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={2} text={short} duration={"00:00"} />
                            </Box>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={3} text={short} duration={"00:00"} />
                            </Box>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={4} text={short} duration={"00:00"} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


            <Box sx={{ paddingTop: '50px', }}>
                <Label children={'Description'} />
                <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} sx={{ marginBottom: '30px' }} />
                <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.
                </Typography>
            </Box>

            <Box sx={{ paddingTop: '80px' }}>
                <Label children={'Requirements'} />
                <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                <Typography variant="body1" paragraph>

                    <FormControl>
                        <RadioGroup

                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <FormControlLabel value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </RadioGroup>
                    </FormControl>
                </Typography>
            </Box>
        </Grid>
    )
}

export default ViewCourse
