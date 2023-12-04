
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { TextField, InputLabel, Link, Grid, Typography, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from '@mui/material';
import { PaymentFunction } from "../Services/CourseService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";


const Payment = ({firstName, lastName, phoneNum}) => {

    // const location = useLocation();
    const fName = "Loy";
    const lName = "Netshiozwi";
    const phone = "0897645312";
    
    console.log("lName:", lName);
    console.log("fName:", fName);
    console.log("phone:", phone);

    const [open, setOpen] = useState(false);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [secureCode, setSecureCode] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const theme = useTheme();
    // const navigate = useNavigate();


    useEffect(() => {

        const user = auth.currentUser;
        if (user) {
            setEmail(user.email);
        } else {
            // Navigate to sign in page
            // navigate('/');
        }

        handleOpen();

    }, [])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
        // navigate('/userpage');
    };

    const handlePay = async () => {
        try {

            await PaymentFunction(cardName, cardNumber, expiryDate, secureCode, email);

            // Update the popup message
            setMessage("Successfully paid subscription fee.");

            console.log("Successfully paid subscription fee for user: ", email);

            // Delay navigation by 5 seconds
            setTimeout(() => {
                // navigate('/userpage');
            }, 5000);

        } catch (error) {
            console.log("Failed to process payment:", error);

            // Update the popup error message
            setErrorMessage("Unable to process payment. Make sure you are connected to the internet.");
        }
    }


    return (
        <div>

            <h2>Payment Page</h2>
            <Dialog
                open={open}
                onClose={handleCancel}
                sx={{
                    borderRadius: '20px',
                }}
            >
                <DialogTitle component='h1' variant='h4' sx={{ textAlign: 'center', mt: 3 }}>
                    Payment Method.
                </DialogTitle>

                <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px', color: 'green' }}>
                    {message}
                </Typography>
                <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px', color: 'red' }}>
                    {errorMessage}
                </Typography>
                <form action="https://ezamazwe-edutech-nodejs.onrender.com/payment" method="post">
                    <DialogContent sx={{ height: '360px' }}>
                        <Box>
                            <InputLabel htmlFor="my-input">Card Name:</InputLabel>
                            <TextField
                                onChange={(e) => setCardName(e.target.value)}
                                value={cardName}
                                id="outlined-basic"
                                variant="outlined"
                                required
                                fullWidth
                                name="Card Name"
                                type="text"
                                autoFocus
                                sx={{ borderRadius: 10, width: '456px', height: '113px' }}
                            />
                            <input type="hidden" name="email_address" value={email} />
                            <input type="hidden" name="name_first" value={fName} />
                            <input type="hidden" name="name_last" value={lName} />
                            <input type="hidden" name="cell_number" value={phone} />
                        </Box>

                        <Box>
                            <InputLabel htmlFor="my-input">Card Number:</InputLabel>
                            <TextField
                                onChange={(e) => setCardNumber(e.target.value)}
                                id="outlined-basic"
                                value={cardNumber}
                                variant="outlined"
                                required
                                fullWidth
                                name="Card Number"
                                type="text"
                                sx={{ borderRadius: 20, width: '456px', height: '113px' }}
                            />
                        </Box>

                        <Box>
                            <InputLabel htmlFor="my-input">MM/YY:</InputLabel>
                            <TextField
                                onChange={(e) => setExpiryDate(e.target.value)}
                                id="outlined-basic"
                                value={expiryDate}
                                variant="outlined"
                                required
                                fullWidth
                                name="Expiry Date"
                                type="text"
                                sx={{ borderRadius: 20, width: '456px', height: '113px' }}
                            />
                        </Box>

                        <Box>
                            <InputLabel htmlFor="my-input">Secure Code (CVV):</InputLabel>
                            <TextField
                                onChange={(e) => setSecureCode(e.target.value)}
                                id="outlined-basic"
                                value={secureCode}
                                variant="outlined"
                                required
                                fullWidth
                                name="Secure Code"
                                type="text"
                                sx={{ borderRadius: 20, width: '456px', height: '113px' }}
                            />
                            <TextField
                                onChange={(e) => setSecureCode(e.target.value)}
                                id="outlined-basic"
                                value="100.00"
                                variant="outlined"
                                required
                                fullWidth
                                name="Amount"
                                type="hidden"
                                sx={{ borderRadius: 20, width: '456px', height: '113px' }}
                            />
                        </Box>
                    </DialogContent>

                    <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Box>
                            <Button
                                // onClick={handlePay}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2, mb: 2,
                                    borderRadius: 30,
                                    backgroundColor: '#1C3F53',
                                    width: '200px',     // Default width for larger screens
                                    height: '55px',
                                    [theme.breakpoints.down('sm')]: {
                                        // Use 456px width on screens smaller or equal to 'sm' breakpoint
                                        width: '456px',
                                    },
                                }}
                            >
                                Pay +
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                onClick={handleCancel}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 5, mb: 5,
                                    borderRadius: 30,
                                    backgroundColor: '#1C3F53',
                                    width: '200px',     // Default width for larger screens
                                    height: '55px',
                                    [theme.breakpoints.down('sm')]: {
                                        // Use 456px width on screens smaller or equal to 'sm' breakpoint
                                        width: '456px',
                                    },
                                }}
                            >
                                Cancel X
                            </Button>
                        </Box>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
export default Payment;