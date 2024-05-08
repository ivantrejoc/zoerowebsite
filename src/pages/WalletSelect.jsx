import { useState } from 'react';
import { Box } from '@mui/material';
import WalletButton from "../components/WalletButton";
import BackContainer from '../components/BackContainer';
import WalletSelectModal from "../components/WalletSelectModal";

const WalletSelect = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleWalletButtonClick = () => {
        setIsModalOpen(true);
    };

    return (
        <BackContainer title='Choose Your Wallet'>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <WalletButton onClick={handleWalletButtonClick}>BITCOIN</WalletButton>
                <WalletButton onClick={handleWalletButtonClick}>TETTERGOLD</WalletButton>
            </Box>
            <WalletSelectModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </BackContainer>
    );
}

export default WalletSelect;


