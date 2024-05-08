import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Box, Stack, Backdrop } from '@mui/material';
import { useNavigate } from "react-router-dom";
import GeneralButton from "./GeneralButton";

function WalleSelectModal({ open, onClose }) {
    const navigate = useNavigate();
    const handleRedirect = () => {
        onClose();
        navigate('/menu');
    };

    return (
        <>
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(4px)' }} open={open} />
            <Dialog open={open} onClose={onClose} sx={{ borderRadius: '24px', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
                <Stack sx={{ p: 2, textAlign: 'center', alignItems: 'center' }}>
                    <img src="/public/simpleWallet.png" alt="Wallet Icon" style={{ width: '120px', height: '120px' }} />
                    <Typography variant="h6" component="div" sx={{ mt: 0.5 }}>Bitcoin Wallet</Typography>
                </Stack>
                <DialogContent>
                    <DialogContentText>
                        <Typography color={'#33404F'}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <GeneralButton onClick={handleRedirect}>Let&apos;s Start</GeneralButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default WalleSelectModal;


