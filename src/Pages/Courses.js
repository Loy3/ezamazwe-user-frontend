import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React,{ useState,useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import {Accordians} from '../Components/Accordians';
import video1 from "../Assets/video.mp4";
import { CourseCard } from "../Components/Cards"
import { useMediaQuery } from '@mui/material';


const Category = ["CAP","IEB","Entrapreneur"]
const Grades  = ["01","02","03","04","05","06","07","08","09","10","11","12"]
const Subjects = ["Language","Accounting","Economics","History","Life Science","Maths","Physical Science",]
const Subscription = [ "Free","Subscribed"]


function Courses() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [returnType,setReturnType]= useState('')



  function testing() {
    // console.log(testingF);
    // if (!testingF ) {
    //   seter(true)
    // }else{
    //   seter(false)
    // }

    // if (!testingP ) {
    //   seter2(true)
    // }else{
    //   seter2(false)
    // }

    console.log("Hello World!");
  }
  return (
    <Container sx={{ display: 'flex', flexDirection: isSmallScreen ?'column': 'row', marginTop: '50px', padding:'20px'}}>
    <Grid sx={{width: isSmallScreen ? '80%' : '20%'}}>
      <Box  sx={{ justifyContent: 'flex-start' ,paddingTop:'20px' }}>
      <Button variant="outlined" startIcon={<TuneIcon />} sx={{ width: "150px", border: "2px solid", fontWeight: "bold", borderRadius: "12px" }}>
          Filter
        </Button>
        <Box sx={{paddingTop:'20px'}}>
        <Accordians label={'Category'} types={Category} setReturnType={setReturnType} returnType={returnType}    />
        <Accordians label={'Grades'} types={Grades} setReturnType={setReturnType} returnType={returnType} />
        <Accordians label={'Subjects'} types={Subjects} setReturnType={setReturnType} returnType={returnType} />
        <Accordians label={'Subscription'} types={Subscription} setReturnType={setReturnType} returnType={returnType} />
        </Box>
      </Box>
   </Grid>
   <Grid sx={{width: isSmallScreen ? '100%' :'80%' ,padding:'20px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box>
          <Typography variant='h4' sx={{ color: '#396781', fontWeight:'bold' }}>
            All Maths Courses
          </Typography>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          </Box>
        </Box>
      <Box sx={{flexDirection:'column', padding:'20px'}}>
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}  />
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}/>
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}/>
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}/>
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}/>
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}/>
        <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={'short'} video={video1} cardFunction={testing}/>
        </Box>
    </Grid>
    </Container>
  )
}

export default Courses
