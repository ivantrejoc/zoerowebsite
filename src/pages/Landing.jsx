import { Button, Typography, Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signin");
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <>
            <Box
                id="main-body"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                    backgroundColor: theme.palette.background.gray,
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                }}
            >
                <img
                    src="/public/shadowHead.png"
                    alt="shadow"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 1,
                        maxWidth: '50%',
                    }}
                />
                <img
                    src="/public/logo.png"
                    alt="wisehodler logo"
                    className="absolute top-0 right-0"
                    style={{ zIndex: 2, maxWidth: '100%' }}
                />
                <div style={{ marginTop: theme.spacing(5), width: '100%', textAlign: 'center' }}>
                    <div style={{ marginBottom: theme.spacing(2) }}>
                        <Button
                            sx={{
                                backgroundColor: theme.palette.primary2.main,
                                width: "200px",
                                height: "40px",
                                color: theme.palette.primary2.contrastText,
                            }}
                            onClick={handleSignIn}>
                            Sign In
                        </Button>
                    </div>
                    <div>
                        <Button
                            sx={{
                                backgroundColor: theme.palette.primary2.main,
                                width: "200px",
                                height: "40px",
                                color: theme.palette.primary2.contrastText,
                            }}
                            onClick={handleSignUp}>
                            Sign Up
                        </Button>
                    </div>
                </div>
                <Typography variant="body1" style={{
                    color: theme.palette.primary2.contrastText,
                    marginTop: theme.spacing(5), fontSize: '18px'
                }}>
                    Next Level Crypto Wallet
                </Typography>
                <img
                    src="/public/shadowBottom.png"
                    alt="shadow"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        maxWidth: '50%',
                    }}
                />
            </Box>
        </>
    );
}

