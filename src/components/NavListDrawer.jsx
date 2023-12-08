import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

export default function NavListDrawer() {
  return (
    <Box sx={{width: 280 }} component='nav'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#projects'>
                        <ListItemIcon>
                            <FolderSharedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Projects'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#contact'>
                        <ListItemIcon>
                            <CallIcon />
                        </ListItemIcon>
                        <ListItemText primary='Contact'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home'/>
                    </ListItemButton>
                </ListItem>
            </List>
    </Box>
  )
}