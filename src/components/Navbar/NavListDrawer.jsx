import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer({setOpen, setView, navLinks }) {

    const linkFunction = (ref) => {
        setView(ref)
        setOpen(false)
    }

  return (
    <Box sx={{width: 280 }} component='nav'>
            <List>
                {navLinks.map((link) => (
                    <ListItem key={link.title} disablePadding onClick={() => linkFunction(link.title)}>
                        <ListItemButton component='a' href={link.path}>
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