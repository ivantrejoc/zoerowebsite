import { Box, useTheme } from "@mui/material";


export default function Landing() {
    const theme = useTheme();
    
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
                }}           >

                <h1>ESTA ES MI VISTA LANDING</h1>               
            
               
            </Box>
        </>
    );
}

