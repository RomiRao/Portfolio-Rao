import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import { useState, useEffect } from "react";
import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";

import FolderSharedIcon from "@mui/icons-material/FolderShared";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import { amber, deepOrange, grey } from "@mui/material/colors";

const navLinks = [
    {
        title: "Projects",
        path: "/Projects",
        icon: <FolderSharedIcon />,
    },
    {
        title: "Contact",
        path: "/Contact",
        icon: <CallIcon />,
    },
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon />,
    },
];

export default function App() {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        // Aplica la clase al body dependiendo del modo claro u oscuro
        document.body.classList.toggle("dark-mode", mode === "dark");

        // Limpia la clase al desmontar el componente
        return () => {
            document.body.classList.remove("dark-mode");
        };
    }, [mode]);

    const getDesignMode = (mode) => ({
        palette: {
            mode,
            ...(mode === "light"
                ? {
                      // palette values for light mode
                      primary: {
                          main: "#BD1B69",
                      },
                      secondary: {
                          main: "#dd6c6c",
                      },
                      divider: "#616D63",
                      background: {
                          paper: "#E9F3F2",
                      },
                      text: {
                          primary: grey[900],
                          secondary: grey[800],
                      },
                  }
                : {
                      // palette values for dark mode
                      primary: deepOrange,
                      divider: deepOrange[700],
                      background: {
                          paper: "#1C3550",
                      },
                      text: {
                          primary: "#fff",
                          secondary: grey[500],
                      },
                  }),
        },
    });

    const theme = createTheme(getDesignMode(mode));

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Navbar setMode={setMode} mode={mode} navLinks={navLinks} />
                    <Main />
                    <Footer />
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}
