import {
  Box,
  Button,
  Menu,
  MenuItem,
  Fade,
  Typography,
  Link
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const DropdownMenu = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box id="dropdown-container">
      <Button
        sx={{
          border: "none !important",
          borderRadius: "none !important",
          background: "none !important",
          width: "2.5rem !important",
          height: "1rem !important"
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Urbanist",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "100%"
          }}
        >
          MENU
        </Typography>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          style: {
            backgroundColor: open ? "#121212" : "inherit"
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          href="/#reasoning"
          onClick={handleClose}
        >
          <Link
            sx={{
              color: "#AAAAAA",
              textDecoration: "none"
            }}
            href="/#reasoning"
          >
            REASONING
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          onClick={handleClose}
        >
          <Link
            sx={{
              color: "#AAAAAA",
              textDecoration: "none"
            }}
            href="/#experiments"
          >
            EXPERIMENTS
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          onClick={handleClose}
        >
          <Link
            sx={{
              color: "#AAAAAA",
              textDecoration: "none"
            }}
            href="/#coefficients"
          >
            COEFFICIENTS
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          onClick={handleClose}
        >
          <Link
            sx={{
              color: "#AAAAAA",
              textDecoration: "none"
            }}
            href="/contact"
          >
            LET’S SOLVE
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default DropdownMenu;
