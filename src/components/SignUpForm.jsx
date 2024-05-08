import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import GeneralButton from "./GeneralButton";
import {
    TextField, Checkbox, FormControlLabel,
    InputAdornment, Typography
} from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import { validateEmail } from '../utils/functions';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address');
        }

        if (name === 'ofAge') {
            setIsCheckboxChecked(checked);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

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
                        fullWidth
                        margin="normal"
                        label="First Name"
                        name="name"
                        variant="standard"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon style={{ color: '#BC9550' }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        id="last_name"
                        label="Last name"
                        name="last_name"
                        variant="standard"
                        onChange={handleChange}
                        autoFocus
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon style={{ color: '#BC9550' }} />
                                </InputAdornment>
                            ),
                        }}
                    />

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
                    <FormControl sx={{ m: 1, width: '100%', marginLeft: 0 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockOutlinedIcon style={{ color: '#BC9550' }} />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={(event) => event.preventDefault()}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControlLabel
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        control={<Checkbox value="remember" onChange={handleChange} name='ofAge' color="primary" />}
                        label={<Typography variant="body2" sx={{ fontSize: '0.9rem' }}>I certify that I am 18 years or older, and Agree to all user agreement and privacy policy</Typography>}
                    />

                    <Box sx={{ marginBottom: 2 }}>
                        <GeneralButton onClick={handleSubmit} disabled={!isCheckboxChecked}>
                            Sign Up
                        </GeneralButton>
                    </Box>
                    <Grid container justifyContent="center" sx={{ marginBottom: 2 }}>
                        <Typography variant="body2" textAlign="center">
                            Already have an account?{' '}
                            <Typography
                                variant="body2"
                                component={Link}
                                onClick={() => navigate('/signin')}
                                style={{ color: '#BC9550', textDecoration: 'none' }}
                            >
                                Sign In
                            </Typography>
                        </Typography>
                    </Grid>

                </Box>
            </Box>
        </Container>

    );
};

export default SignUpForm;

