import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { Container, Grid, useMediaQuery } from '@mui/material';
import video1 from "../Assets/Videos/video.mp4";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Label from '../Components/Label';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SectionSubHeading from '../Components/SectionSubHeading';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function CourseFullView() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box>

            {/* <Box sx={{ flexGrow: 1, backgroundColor: "#1C3F53", height: '100px' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Course Name
            </Typography>
            <Avatar sx={{ bgcolor: '#396781'[500] }}>M</Avatar>
          </Toolbar>
        </AppBar>
      </Box> */}
            <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', width:"100%"}}>
                <Box sx={{width:"60%"}}>
                    <video style={{width:"100%", height:"70vh"}}  controls>
                        <source src={video1} type="video/mp4" />
                    </video>
                </Box>
                <Box sx={{ width: isSmallScreen ? "100%" : "40%" , height:"inherit"}}>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: '72px' }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "100%", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>Lesson 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ height: '100px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "72px" }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "100%", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>Lesson 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "72px" }} >
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}> Lesson 3</Typography>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "72px" }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>Lesson 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "72px" }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}> Lesson 5</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>

            <Box sx={{ paddingTop: "50px", padding: "20px" }}>
                <Label children={"Course Overview"} />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                <Box sx={{ paddingTop: '30px' }} >
                    <Label children={"Visit"} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ArrowRightIcon />  <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ArrowRightIcon />  <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ArrowRightIcon />  <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                </Box>
                <Box sx={{ paddingTop: '30px' }} >
                    <Label children={'Description'} />
                    <Typography  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}

export default CourseFullView