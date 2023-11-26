import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import { Accordians } from '../Components/Accordians';
import video1 from "../Assets/Videos/video1.mp4";
import { CourseCard } from "../Components/Cards"
import { useMediaQuery } from '@mui/material';
import { FilterButton } from '../Components/Buttons';


const Category = ["CAP", "IEB", "Entrapreneur"]
const Grades = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
const Subjects = ["Language", "Accounting", "Economics", "History", "Life Science", "Maths", "Physical Science",]
const Subscription = ["Free", "Subscribed"]
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";

function Courses() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [returnType, setReturnType] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [topicS, setTopicS] = useState('')
    const [type, setType] = useState('')

    // const [categoryStatus, setCategoryStatus] = useState('')
    const [subCategoryStatus, setSubCategoryStatus] = useState(false);
    const [topicSStatus, setTopicSStatus] = useState(false);
    const [typeStatus, setTypeStatus] = useState(false);

    useEffect(() => {
        if (category) {
            setSubCategoryStatus(true);
        } else {
            setSubCategoryStatus(false)
        }
    }, [category])

    useEffect(() => {
        if (subCategory) {
            setTopicSStatus(true);
        } else {
            setTopicSStatus(false)
        }
    }, [subCategory])

    useEffect(() => {
        if (topicS) {
            setTypeStatus(true);
        } else {
            setTypeStatus(false)
        }
    }, [topicS])

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
        <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', margin: '50px 2%', width: "96%" }}>
            <Grid sx={{ width: isSmallScreen ? '80%' : '20%' }}>
                <Box sx={{ justifyContent: 'flex-start', paddingTop: '20px', width: "96%", margin: "0 2%" }}>
                    <Box sx={{ width: "96%", margin: "0 2%" }}>
                        <FilterButton text={"Filter"} />
                    </Box>
                    {/* <Button variant="outlined" startIcon={<TuneIcon />} sx={{ width: "150px", border: "2px solid", fontWeight: "bold", borderRadius: "12px" }}>
          Filter
        </Button> */}
                    <Box sx={{ paddingTop: '20px' }}>
                        <Accordians label={'Category'} types={Category} setReturnType={setCategory} returnType={category} />
                    </Box>
                    {subCategoryStatus ?
                        <Box sx={{ paddingTop: '20px' }}>
                            <Accordians label={'Grades'} types={Grades} setReturnType={setSubCategory} returnType={subCategory} />
                        </Box>
                        : null
                    }
                    {topicSStatus ?
                        <Box sx={{ paddingTop: '20px' }}>
                            <Accordians label={'Subjects'} types={Subjects} setReturnType={setTopicS} returnType={topicS} />
                        </Box>
                        : null
                    }
                    {typeStatus ?
                        <Box sx={{ paddingTop: '20px' }}>
                            <Accordians label={'Subscription'} types={Subscription} setReturnType={setType} returnType={type} />
                        </Box>
                        : null
                    }

                </Box>
            </Grid>
            <Grid sx={{ width: isSmallScreen ? '100%' : '80%', padding: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box>
                        <Typography variant='h4' sx={{ color: '#396781', fontWeight: 'bold' }}>
                            All Maths Courses
                        </Typography>
                        <Typography >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ flexDirection: 'column', padding: '20px' }}>
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                    <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing} />
                </Box>
            </Grid>
        </Box>
    )
}

export default Courses
