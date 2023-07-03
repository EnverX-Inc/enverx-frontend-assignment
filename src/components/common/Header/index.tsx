import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export const Header: React.FC = (props: Props) => {
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                               For Mobile View : Start                       */
  /* -------------------------------------------------------------------------- */
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" component={'span'} sx={{ color: 'green' }}>
          Expense{' '}
        </Typography>
        <Typography variant="h6" component={'span'} sx={{ color: 'red' }}>
          Tracker
        </Typography>
      </Box>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  /* -------------------------------------------------------------------------- */
  /*                           For Mobile View : End                            */
  /* -------------------------------------------------------------------------- */

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" elevation={0} sx={{ background: '#d0bfff' }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#000' }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Typography variant="h6" component={'span'} sx={{ color: 'green' }}>
              Expense{' '}
            </Typography>
            <Typography variant="h6" component={'span'} sx={{ color: 'red' }}>
              Tracker
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};
