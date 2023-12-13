import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavListDrawer({setOpen, navLinks }) {

  return (
    <Box sx={{width: 280 }} component='nav'>
            <List>
                {navLinks.map((link) => (
                    <ListItem key={link.title} disablePadding onClick={() => setOpen(false)}>
                        <ListItemButton component={NavLink} to={link.path}>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
    </Box>
  )
}