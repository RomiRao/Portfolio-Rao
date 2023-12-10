import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

export default function NavListDrawer({setOpen, setView, navLinks }) {

    const linkFunction = (ref) => {
        setView(ref)
        setOpen(false)
    }

  return (
    <Box sx={{width: 280 }} component='nav'>
            <List>
                {navLinks.map((link) => (
                    <ListItem key={link.title} disablePadding onClick={() => linkFunction(link.ref)}>
                        <ListItemButton component='a' href={link.path}>
                            <ListItemIcon>
                                {link.ref === 'Projects' && <FolderSharedIcon />}
                                {link.ref === 'Contact' && <CallIcon />}
                                {link.ref === 'Profile' && <HomeIcon />}
                            </ListItemIcon>
                            <ListItemText primary={link.ref === 'Contact' ? 'About me' : link.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
    </Box>
  )
}