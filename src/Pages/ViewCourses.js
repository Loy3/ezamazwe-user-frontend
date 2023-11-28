import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/parabola.jpg'
import SectionSubHeading from '../Components/SectionSubHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import Label from '../Components/Label';

import Contentbutton from '../Components/ContentButton';



function ViewCourses() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Grid sx={{ padding: '40px' }}>
            <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', marginTop: '300px' }}>
                <Card sx={{width: isSmallScreen ?'100%' : "450px", backgroundColor: '#E3ECF1', position: 'relative', paddingBottom:"50px" }}>

                    <img
                        style={{ height: isSmallScreen ? "350px" : "100", width: "100%", objectFit: "cover" }}
                        src={parabola} alt='card' />

                    <CardContent sx={{ margin: '10px' }}>
                        <Label children={"Course Title"} />
                        <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.
                        </Typography>
                        <Label children={"Free"} />
                    </CardContent>
                    <Contentbutton text={"START"}/>
                </Card >
                <Grid sx={{ paddingLeft: isSmallScreen ? '0' :'20px', paddingTop: '70px' }}>
                    <Label children={"What you will learn?"} />
                    <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                    <ul className='list'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas</li>
                    </ul>
                    <br></br>
                    <Box sx={{paddingTop:'30px'}}>
                        <Label children={"Course Content"} />
                        <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <br></br>
                        <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                            Lession 1
                        </Typography>
                        <Container sx={{ borderBottom: '1px solid #396781', borderTop: '1px solid #396781', paddingBottom: '0px', paddingTop: '0px' }}>
                            <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                            <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light' }}  >
                                Duration:00:00
                            </Typography>

                        </Container>
                        <br></br>
                        <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                            Lession 2
                        </Typography>
                        <Container sx={{ borderBottom: '1px solid #396781', borderTop: '1px solid #396781', paddingBottom: '0px', paddingTop: '0px' }}>
                            <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                            <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light' }}  >
                                Duration:00:00
                            </Typography>

                        </Container>
                        <br></br>
                        <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                            Lession 3
                        </Typography>
                        <Container sx={{ borderBottom: '1px solid #396781', borderTop: '1px solid #396781', paddingBottom: '0px', paddingTop: '0px' }}>
                            <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                            <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light' }}  >
                                Duration:00:00
                            </Typography>
                        </Container>
                    </Box>

                </Grid>
            </Grid>


            <Box sx={{paddingTop:'50px'}}>
                <Label children={'Description'} />
                <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} sx={{marginBottom:'30px'}} />
                <Typography variant="body1" paragraph sx={{marginTop:'10px'}}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.
                </Typography>
            </Box>

            <Box sx={{paddingTop:'80px'}}>
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

export default ViewCourses
