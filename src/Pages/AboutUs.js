
import React from "react";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { TextField, InputLabel, Link, Grid, Typography, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SignupFunction } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import { ViewMembersFunction } from "../Services/CourseService";

const AboutUs = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [members, setMembers] = useState([]);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        handleFetchMembers();
    }, []);

    const handleJoin = async () => {
        try {
            const user = await SignupFunction(email, password);
            console.log('User data in signup component:', user);
            const user_email = user.email;
            const user_id = user.uid;
            console.log('User id in signup component:', user_id);
            console.log('User email in signup component:', user_email);

            alert('User signed up');
            handleClose();
            navigate('/verification', { state: { userId: user_id, userEmail: user_email } });

        } catch (error) {
            console.error('Error occurred during signup:', error.message);
        }
    }

    const handleFetchMembers = async () => {
        try {
            const data = await ViewMembersFunction();
            setMembers(data);

        } catch (error) {
            console.log("Error occurred while fetching data:", error);
        }
    }


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                Quisque convallis magna a tellus blandit.
            </p>

            <div>
                <h2>We are Company Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <br></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                    Quisque convallis magna a tellus blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                    Quisque convallis magna a tellus blandit.
                </p>
            </div>

            <div>
                <Button variant="outlined" color="primary" onClick={handleOpen}>
                    JOIN
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    sx={{
                        borderRadius: '20px',
                    }}
                >
                    <DialogTitle component='h1' variant='h4' sx={{ textAlign: 'center', mt: 3 }}>
                        EZAMAZWE EDUTECH
                    </DialogTitle>

                    <DialogContent sx={{ height: '360px' }}>

                        <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px' }}>
                            Create your account
                        </Typography>

                        <Box sx={{ mt: 5 }}>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <TextField
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                id="outlined-basic"
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{ borderRadius: 10, width: '456px', height: '113px' }}
                            />
                            <Typography sx={{ mt: -7, color: 'red' }}>
                                * email address is invalid
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 5 }}>
                            <InputLabel htmlFor="my-input">Your password</InputLabel>
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                id="outlined-basic"
                                value={password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                sx={{ borderRadius: 20, width: '456px', height: '113px' }}
                            />
                            <Typography sx={{ mt: -7, color: 'red' }}>
                                # email address is required
                            </Typography>
                        </Box>

                    </DialogContent>

                    <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <Button
                                onClick={handleJoin}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 5, mb: 5,
                                    borderRadius: 30,
                                    backgroundColor: '#1C3F53',
                                    width: '300px',     // Default width for larger screens
                                    height: '55px',
                                    [theme.breakpoints.down('sm')]: {
                                        // Use 456px width on screens smaller or equal to 'sm' breakpoint
                                        width: '456px',
                                    },
                                }}
                            >
                                SIGN UP
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: -1 }}>
                                        <Link href="/" variant="body2">
                                            Already have account? Sign in
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogActions>
                </Dialog>
            </div>

            <div>
                <h2>What We Do</h2>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <br></br>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Service Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Service Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Service Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <h2>Our Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    {members ? (
                        <div>
                            {members.map((member) => (
                                <div>
                                    <Card>
                                        <CardContent>
                                            <img src={member.image} alt="image" style={{width:'150px', height:'150px'}} />
                                            <Typography variant="h5" component="div">
                                                Team Member
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {member.firstName} {member.lastName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Role: {member.role}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {member.email}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {member.phoneNumber}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    )
                        :
                        (
                            <div>
                                <h3>Loading</h3>
                            </div>
                        )}
                </div>

            </div>

        </div>
    );
}

export default AboutUs;