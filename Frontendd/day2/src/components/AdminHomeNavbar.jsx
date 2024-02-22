import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';

export default function AdminAppBar() {
  return (
    <div>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AdminNav/>
          <Link to = "/" id="header">AGRO FUNDX</Link>
          <div id="totalnav">
          {/* <Link to = "/about" id="navbar">About</Link>
          <Link to = "/" id="header">AGRO FUNDX</Link>
          <Link to = "/" id="navbar">Career</Link>
          <Link to = "/" id="navbar">Contact</Link> */}
          </div>
          {/* <Button id="login1" onClick={()=>navigate("/profile")} color="inherit">Profile</Button>
          <Button id="login3" onClick={()=>navigate("/")} color="inherit">Logout</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}