import { useState } from 'react';
import GeneralButton from "./GeneralButton";
import { TextField, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { validateEmail } from '../utils/functions';


const SignInForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });


        if (name === 'email') {
            setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailError) {
            console.log(formData);
            navigate("/wallets");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        variant="standard"
                        onChange={handleChange}
                        error={!!emailError}
                        helperText={emailError}
                        autoFocus
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon style={{ color: '#BC9550' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        variant="standard"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon style={{ color: '#BC9550' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <GeneralButton onClick={handleSubmit}>
                        Log In
                    </GeneralButton>
                </Box>
            </Box>
        </Container>

    );
};

export default SignInForm;
