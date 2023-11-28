import { Box, Grid } from '@mui/material'
import React from 'react'
import image from '../Assets/about.jpg'
import Label from '../Components/Label'
import Button from '../Components/Buttons'
import SectionSubHeading from '../Components/SectionSubHeading'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LearningSupport from '../Assets/learning-support (1).png';
import image3 from '../Assets/max-fisch.jpg';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png';

function AboutPage() {
    return (
        <>
            <Grid sx={{ display: 'flex', padding: '180px', flexDirection: 'row' }}>
                <Box >
                    <img src={image} alt='cover' width={350} sx={{ borderRadius: '30px' }} />
                </Box>
                <Box sx={{ marginLeft: '70px' }}>
                    <Label children={'We are Company Name'} />
                    <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} sx={{ marginBottom: '30px' }} />
                    <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.
                    </Typography>
                    <Box sx={{ width: '450px' }}> <Button text={'Join'} /></Box>
                </Box>
            </Grid>


            <Grid sx={{ backgroundColor: '#C6D0D6', width: '100%', paddingTop: '50px', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Label children={'What We do?'} />
                    <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} sx={{ marginBottom: '30px' }} />
                </Box>
                <Box sx={{ display: 'flex', gap: '20px', padding: '40px' }}>
                    <Card sx={{ width: '350px', height: '300px', backgroundColor: '#396781', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <img src={LearningSupport} alt='vector' width={100} sx={{ borderRadius: '50%', color: 'white', border: '2px solid #396781' }} />
                            <Typography variant='h5' sx={{ color: 'white' }}>
                                Service Title
                            </Typography >
                            <Typography variant='body1' sx={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{ width: '400px', height: '300px', backgroundColor: '#396781' }}>
                        <CardContent>
                            <img src={LearningSupport} alt='vector' width={100} />
                            <Typography variant='h5' sx={{ color: 'white' }}>
                                Service Title
                            </Typography >
                            <Typography variant='body1' sx={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{ width: '400px', height: '300px', backgroundColor: '#396781' }}>
                        <CardContent>
                            <img src={LearningSupport} alt='vector' width={100} />
                            <Typography varient='h4' sx={{ color: 'white' }}>
                                Service Title
                            </Typography >
                            <Typography variant='body1' sx={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

            <Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
                    <Label children={'  Our Team'} />
                    <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} sx={{ marginBottom: '30px' }} />
                </Box>

                <Box sx={{ display: 'flex', width: 500, padding: '15px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }} >
                        <Box sx={{ backgroundColor: '#E3ECF1', borderRadius: '30px', height: '180px', width:"50%" }}>
                            <img src={image3} alt='vector' width={'100%'} height={'100%'} style={{objectFit:"cover", borderTopLeftRadius:"30px", borderBottomLeftRadius:"30px"}} />
                        </Box>
                        <Box sx={{width:"50%",padding:'30px',backgroundColor:'gray'}}>
                                <Typography sx={{ fontWeight: 'bold' }}  >
                                    Team member
                                </Typography>
                                <Typography variant='body1' sx={{ color: 'black' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla.
                                </Typography>

                                <Box sx={{ display: 'flex' }} >
                                    <img src={facebook} alt='vector' width={'10%'} height={'15%'} />
                                    <img src={instagram} alt='vector' width={'10%'} height={'15%'} />
                                    <img src={twitter} alt='vector' width={'10%'} height={'15%'} />
                                </Box>
                            </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default AboutPage