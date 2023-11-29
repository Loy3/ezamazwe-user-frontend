import { Box, Grid } from "@mui/material";
import React from "react";
import image from "../Assets/about.jpg";
import Label from "../Components/Label";
import Button from "../Components/Buttons";
import SectionSubHeading from "../Components/SectionSubHeading";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LearningSupport from "../Assets/learning-support (1).png";
import image3 from "../Assets/max-fisch.jpg";
import image4 from "../Assets/pexels-pavel-danilyuk-8423893.jpg";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";

function AboutPage() {
  return (
    <>
      <Grid sx={{ display: "flex", padding: "180px", flexDirection: "row" }}>
        <Box>
          <img
            src={image}
            alt="cover"
            width={350}
            sx={{ borderRadius: "30px" }}
          />
        </Box>
        <Box sx={{ marginLeft: "70px" }}>
          <Label children={"We are Company Name"} />
          <SectionSubHeading
            children={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            sx={{ marginBottom: "30px" }}
          />
          <Typography variant="body1" paragraph sx={{ marginTop: "10px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla
            massa turpis, elementum id maximus nec, pellentesque vel ante.
            Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut
            nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a
            pellentesque nisl. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque convallis magna a tellus blandit, eu
            bibendum enim venenatis. Nulla massa turpis, elementum id maximus
            nec, pellentesque vel ante. Vestibulum dapibus enim neque, id
            vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo
            arcu. Suspendisse potenti. Nunc a pellentesque nisl.
          </Typography>
          <Box sx={{ width: "450px" }}>
            {" "}
            <Button text={"Join"} />
          </Box>
        </Box>
      </Grid>

      <Grid
        sx={{ backgroundColor: "#C6D0D6", width: "100%", paddingTop: "50px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Label children={"What We do?"} />
          <SectionSubHeading
            children={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            sx={{ marginBottom: "30px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "270px",
            padding: "40px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "400px",
              height: "300px",
              backgroundColor: "#396781",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  borderRadius: "50%",
                  color: "white",
                  border: "3px solid white",
                  margin: "auto", 
                  marginBottom: "10px", 
                  width:'170px',
                  height:'130px',
                }}
              >
                <img src={LearningSupport} alt="vector" width={100} sx={{}}/>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Service Title
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                egestas metus nulla.
              </Typography>
            </CardContent>
          </Box>
          <Card
            sx={{
              width: "400px",
              height: "300px",
              backgroundColor: "#396781",
              borderRadius: "20px",
            }}
          >
            <CardContent>
            <Box
                sx={{
                  borderRadius: "50%",
                  color: "white",
                  border: "3px solid white",
                  margin: "auto", 
                  marginBottom: "10px", 
                  width:'170px',
                  height:'130px',
                }}
              >
                <img src={LearningSupport} alt="vector" width={100} sx={{}}/>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Service Title
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                egestas metus nulla.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "400px",
              height: "300px",
              backgroundColor: "#396781",
              borderRadius: "20px",
            }}
          >
            <CardContent>
            <Box
                sx={{
                  borderRadius: "50%",
                  color: "white",
                  border: "3px solid white",
                  margin: "auto", 
                  marginBottom: "10px", 
                  width:'170px',
                  height:'130px',
                }}
              >
                <img src={LearningSupport} alt="vector" width={100} sx={{}}/>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Service Title
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                egestas metus nulla.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "40px",
          }}
        >
          <Label children={"  Our Team"} />
          <SectionSubHeading
            children={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            sx={{ marginBottom: "30px" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "300px",
            justifyContent: "space-between",
            gap: "50px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "200px" }}
          >
            <Box sx={{ height: "300px", width: "50%" }}>
              <img
                src={image3}
                alt="vector"
                width={"100%"}
                height={"100%"}
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                padding: "30px",
                backgroundColor: "#E3ECF1",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "33px",
                  fontWeight: "bold",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "32.02px",
                  alignItems: "center",
                  color: "#1C3F53",
                }}
              >
                Team member
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#747171",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1C3F53",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                  width: "273px",
                  marginLeft: "50px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150px",
                  alignContent: "center",
                  marginLeft: "120px",
                  marginTop: "40px",
                }}
              >
                <img
                  src={facebook}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={instagram}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={twitter}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginRight: "200px" }}
          >
            <Box sx={{ height: "300px", width: "50%" }}>
              <img
                src={image4}
                alt="vector"
                width={"100%"}
                height={"100%"}
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                padding: "30px",
                backgroundColor: "#E3ECF1",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "33px",
                  fontWeight: "bold",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "32.02px",
                  alignItems: "center",
                  color: "#1C3F53",
                }}
              >
                Team member
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#747171",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1C3F53",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                  width: "273px",
                  marginLeft: "50px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150px",
                  alignContent: "center",
                  marginLeft: "120px",
                  marginTop: "40px",
                }}
              >
                <img
                  src={facebook}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={instagram}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={twitter}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "300px",
            justifyContent: "space-between",
            gap: "50px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "200px" }}
          >
            <Box sx={{ height: "300px", width: "50%" }}>
              <img
                src={image4}
                alt="vector"
                width={"100%"}
                height={"100%"}
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                padding: "30px",
                backgroundColor: "#E3ECF1",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "33px",
                  fontWeight: "bold",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "32.02px",
                  alignItems: "center",
                  color: "#1C3F53",
                }}
              >
                Team member
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#747171",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1C3F53",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                  width: "273px",
                  marginLeft: "50px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150px",
                  alignContent: "center",
                  marginLeft: "120px",
                  marginTop: "40px",
                }}
              >
                <img
                  src={facebook}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={instagram}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={twitter}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginRight: "200px" }}
          >
            <Box sx={{ height: "300px", width: "50%" }}>
              <img
                src={image3}
                alt="vector"
                width={"100%"}
                height={"100%"}
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                padding: "30px",
                backgroundColor: "#E3ECF1",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "33px",
                  fontWeight: "bold",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "32.02px",
                  alignItems: "center",
                  color: "#1C3F53",
                }}
              >
                Team member
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#747171",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1C3F53",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.15",
                  textAlign: "center",
                  alignItems: "center",
                  width: "273px",
                  marginLeft: "50px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150px",
                  alignContent: "center",
                  marginLeft: "120px",
                  marginTop: "40px",
                }}
              >
                <img
                  src={facebook}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={instagram}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
                <img
                  src={twitter}
                  alt="vector"
                  width={"35px"}
                  height={"35px"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default AboutPage;
