import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidenav.css';

export default function SideNav() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      style={{ height: '100%', overflow: 'hidden' }}
    >
      <List
        style={{
          width: '250px',
          padding: '15px', // Increase padding
        }}
      >
        {[
          { name: 'DashBoard', link: "/chart" },
          { name: 'Apply Loan', link: "/home" },
          { name: 'Track Loan', link: "/trackloan" },
          { name: 'Logout', link: "/" },
        ].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => { navigate(text.link) }} className='helloo'>
            <ListItemButton style={{ padding: '16px' }}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
    </Drawer>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "white" }} />
          </Button>
          {list(anchor)}
        </React.Fragment>
      ))}
    </div>
  );
}
