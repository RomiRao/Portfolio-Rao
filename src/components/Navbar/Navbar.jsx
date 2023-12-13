import {
    AppBar,
    Breadcrumbs,
    IconButton,
    Link,
    Toolbar,
    Drawer,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
//icons
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar({ mode, setMode, navLinks }) {
    const handleClick = () => {
        mode === "light" ? setMode("dark") : setMode("light");
    };

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar
                sx={{ bgcolor: "transparent", boxShadow: "none" }}
                position="static"
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton onClick={() => handleClick()}>
                        {mode === "light" && <DarkModeIcon color="primary" />}
                        {mode === "dark" && <LightModeIcon color="primary" />}
                    </IconButton>
                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                        sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                        {navLinks
                            .filter((item) => item.title != "Home")
                            .map((item) => (
                                <Link
                                    underline="hover"
                                    key={item.title}
                                    color="inherit"
                                    component={NavLink}
                                    to={item.path}
                                >
                                    {item.title}
                                </Link>
                            ))}
                    </Breadcrumbs>
                    <IconButton component={NavLink} to="/">
                        <HomeIcon
                            color="primary"
                            sx={{ display: { xs: "none", sm: "flex" } }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <MenuIcon color="primary" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer setOpen={setOpen} navLinks={navLinks} />
            </Drawer>
        </>
    );
}
