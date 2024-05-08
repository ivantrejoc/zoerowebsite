// GeneralButton.js
import { Button } from "@mui/material";

function GeneralButton({ children, onClick, disabled = false }) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            sx={{
                backgroundColor: "#BC9550",
                width: "100%",
                height: "40px",
                color: "white",
            }}
        >
            {children}
        </Button>
    );
}

export default GeneralButton;

