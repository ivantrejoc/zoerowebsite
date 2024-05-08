import { Button } from "@mui/material";

function WalletButton({ children, onClick }) {
    return (
        <Button
            onClick={onClick}
            sx={{
                backgroundColor: "#FFF1D7",
                width: "80%",
                height: "10vh",
                color: "#2C4364",
                marginBottom: "2vh",
                justifyContent: "flex-start",
                paddingLeft: "16px",
            }}
            startIcon={<img src="/public/walleItcon.png" alt="Wallet Icon" style={{ width: '48px', height: '48px' }} />}
        >
            {children}
        </Button>
    );
}

export default WalletButton;

