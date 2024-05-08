import { Paper, Box } from '@mui/material';

const BackContainer = ({ title, children }) => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            position: 'relative',
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
                marginTop: '-150px'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: '100%',
                    margin: 'auto',
                    marginBottom: '5px',

                }}>{title}</h2>
                <Paper
                    style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        backgroundColor: 'white',
                        width: '100%',
                        padding: '20px',
                        flex: '1',
                    }}
                    elevation={0}
                >
                    <Box>
                        {children}
                    </Box>
                </Paper>
            </div>
        </div>
    );
};

export default BackContainer;


