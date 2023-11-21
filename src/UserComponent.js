
  import * as React from 'react';
  import { styled, alpha } from '@mui/material/styles';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import IconButton from '@mui/material/IconButton';
  import Typography from '@mui/material/Typography';
  import InputBase from '@mui/material/InputBase';
  import Badge from '@mui/material/Badge';
  import MenuItem from '@mui/material/MenuItem';
  import Menu from '@mui/material/Menu';
  import MenuIcon from '@mui/icons-material/Menu';
  import SearchIcon from '@mui/icons-material/Search';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import MailIcon from '@mui/icons-material/Mail';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import MoreIcon from '@mui/icons-material/MoreVert';
  import {
      Drawer,
      List,
      ListItem,
      ListItemIcon,
      ListItemText,
    } from '@mui/material';
    import InboxIcon from '@mui/icons-material/MoveToInbox';
    import { useNavigate } from 'react-router-dom';
  import Paper from '@mui/material/Paper';
  import Avatar from '@mui/material/Avatar';
  import Divider from '@mui/material/Divider';
  import Grid from '@mui/material/Grid';
  import EmailIcon from '@mui/icons-material/Email';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import { useLocation } from 'react-router-dom';

  const useStyless = styled((theme) => ({
      root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
        },
        profile: {
          padding: theme.spacing(4),
          width: '80%',
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            margin: theme.spacing(2),
          },
        },
        avatar: {
          width: theme.spacing(16),
          height: theme.spacing(16),
          justifyContent: 'center',
          alignItems: 'center',
          
        },
        divider: {
          margin: theme.spacing(2, 0),
        },
        editButton: {
          position: 'absolute',
          top: theme.spacing(2),
          right: theme.spacing(2),
        },
      }));
    

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const UserScreen = () => {

      let navigate = useNavigate();
      const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={() => {navigate('/')}}>Logout</MenuItem>
      </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );


    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };

    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              FinKraft.ai
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {['User Option 1', 'User Option 2'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <Paper elevation={3} sx={{margin:5}}>
          <Avatar alt="User Avatar" src="/path_to_avatar_image.jpg"  sizes='large' sx={{padding:2, margin:2}}/>
          <Typography variant="h4" sx={{margin:2}}>{location.state.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{margin:2}}>
            UX/UI Designer
          </Typography>
          <Divider variant="middle" />
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <EmailIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{margin:2}}>{location.state.name}@example.com</Typography>
            </Grid>
            <Grid item>
              <LocationOnIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{margin:2}}>City, Country</Typography>
            </Grid>
            <Grid item>
              <PhoneIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{margin:2}}>+1234567890</Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Box textAlign="left">
            <Typography variant="subtitle2" sx={{margin:2}}>About Me:</Typography>
            <Typography variant="body2" sx={{margin:2}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, purus in
              hendrerit tincidunt, quam lectus sodales ipsum, nec dapibus justo magna sit amet dolor.
              Morbi vel pulvinar lectus. Sed ac lectus et ante sollicitudin accumsan ut a purus.
            </Typography>
          </Box>
          {/* Add more sections or details as needed */}
        </Paper>
      </div>
    );
  };

  export default UserScreen;
