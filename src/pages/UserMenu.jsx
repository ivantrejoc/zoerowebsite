import { Paper, Box, Typography, Button, Grid } from '@mui/material';

const UserMenu = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #33404F 50%, white 50%)',
            backgroundSize: 'cover',
        }}>
            <img
                src="/public/containerBackground.png"
                alt=""
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.5,
                }}
            />
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-30vh'
            }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 20px' }}>
                    <Typography variant="h6" component="div" style={{ color: 'white' }}>Hi Sebastian</Typography>
                    <Button sx={{
                        backgroundColor: "#BC9550",
                        width: "35%",
                        height: "40px",
                        color: "white",
                        textTransform: "none",
                        padding: "8px",
                    }}
                    >
                        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Security Configure</Typography>
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 20px', color: 'white' }}>
                    <Typography variant="body1">Savings:</Typography>
                    <Typography variant="body1">BTC 0.000598 (USD: 58,00.98)</Typography>
                </Box>

                <Paper
                    style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        backgroundColor: 'white',
                        width: '100%',
                        padding: '20px',
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    elevation={0}
                >
                    <img
                        src="/public/vaultsSample.png"
                        alt="vaults"
                        style={{
                            zIndex: 1,
                            maxWidth: '80%',
                        }}
                    />
                    <Box mt={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {/*  <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button sx={{
                                    backgroundColor: "#BC9550",
                                    width: "100%",
                                    height: "40px",
                                    color: "white",
                                }}
                                >
                                    CONFIG KEYS
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button sx={{
                                    backgroundColor: "#BC9550",
                                    width: "100%",
                                    height: "40px",
                                    color: "white",
                                }}
                                >
                                    SEND BTC
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button sx={{
                                    backgroundColor: "#BC9550",
                                    width: "100%",
                                    height: "40px",
                                    color: "white",
                                }}
                                >
                                    TRANSACTIONS
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button sx={{
                                    backgroundColor: "#BC9550",
                                    width: "100%",
                                    height: "40px",
                                    color: "white",
                                }}
                                >
                                    BLOCKCHAIN
                                </Button>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Paper>
            </div>
        </div>
    );
};

export default UserMenu;


