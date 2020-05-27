import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from "react-router-dom";

export default function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const location = useLocation();
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <Link to="/" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                    Saved
                </Link>
            </MenuItem>
            
        </Menu>
    </div>
    )
}