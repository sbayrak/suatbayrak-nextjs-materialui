import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import InfoIcon from '@material-ui/icons/Info';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  left: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      padding: theme.spacing(2),
    },
  },
  leftImg: {
    borderRadius: '20px',
    width: '100px',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '75px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '65px',
    },
  },
  typos: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    fontFamily: 'Montserrat',
  },
  Typo1: {
    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightMedium,

    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      display: 'none',
    },
  },
  Typo2: {
    letterSpacing: theme.spacing(1),
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      letterSpacing: 5,
    },
  },
  right: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },
  desktopUl: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    zIndex: 99,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  desktopLi: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(10),
    // borderBottom: `1px solid ${theme.palette.grey[800]}`,
    // transition: '0.3s ease',
    // '&:hover': {
    //   borderBottom: `1px solid #FF3C3C`,
    // },
  },
  desktopLiA: {
    textDecoration: 'none',
    color: '#fff',
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: 'Montserrat',
    borderBottom: `2px solid ${theme.palette.grey[800]}`,
    transition: '0.3s ease',
    '&:hover': {
      borderBottom: `2px solid #f9c11c`,
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
  menuBtn: {
    color: '#fff',
    float: 'right',
    marginRight: theme.spacing(3),
  },
  drawerUl: {
    listStyle: 'none',
    padding: theme.spacing(4),
  },
  drawerLi: {
    color: '#fff',
    listStyle: 'none',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  drawerLiA: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  drawerIcon: {
    paddingRight: theme.spacing(1),
  },
  appbar: {
    zIndex: 99,
    transition: '0.5s ease',
  },
  drawer: {
    '& .MuiDrawer-paperAnchorLeft': {
      backgroundColor: '#333',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#212121');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBgColor('#212121');
    } else {
      setBgColor('transparent');
    }
  };

  const openHandler = () => {
    console.log('hi');
  };

  const desktop = (
    <ul className={classes.desktopUl}>
      <li className={classes.desktopLi}>
        <Link href='#home' className={classes.desktopLiA}>
          <a className={classes.desktopLiA}>Home</a>
        </Link>
      </li>
      <li className={classes.desktopLi}>
        <Link href='#about' className={classes.desktopLiA}>
          <a className={classes.desktopLiA}>About</a>
        </Link>
      </li>
      <li className={classes.desktopLi}>
        <Link href='#portfolio' className={classes.desktopLiA}>
          <a className={classes.desktopLiA}>Portfolio</a>
        </Link>
      </li>
      <li className={classes.desktopLi}>
        <Link href='#contact' className={classes.desktopLiA}>
          <a className={classes.desktopLiA}>Contact</a>
        </Link>
      </li>
    </ul>
  );
  const mobile = (
    <div className={classes.mobile}>
      <IconButton onClick={(e) => setOpen(!open)} className={classes.menuBtn}>
        <MenuIcon fontSize='large'></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        open={open}
        anchor='left'
        onClose={(e) => setOpen(!open)}
        onOpen={openHandler}
        className={classes.drawer}
      >
        <ul className={classes.drawerUl}>
          <li className={classes.drawerLi}>
            <Link href='#home'>
              <a className={classes.drawerLiA}>
                <HomeIcon
                  className={classes.drawerIcon}
                  fontSize='large'
                ></HomeIcon>{' '}
                <Typography>Home</Typography>{' '}
              </a>
            </Link>
          </li>
          <li className={classes.drawerLi}>
            <Link href='#about'>
              <a className={classes.drawerLiA}>
                <InfoIcon
                  className={classes.drawerIcon}
                  fontSize='large'
                ></InfoIcon>{' '}
                <Typography>About</Typography>
              </a>
            </Link>
          </li>
          <li className={classes.drawerLi}>
            <Link href='#portfolio' className={classes.drawerLiA}>
              <a className={classes.drawerLiA}>
                <ReceiptIcon
                  className={classes.drawerIcon}
                  fontSize='large'
                ></ReceiptIcon>
                <Typography>Portfolio</Typography>
              </a>
            </Link>
          </li>
          <li className={classes.drawerLi}>
            <Link href='#contact' className={classes.drawerLiA}>
              <a className={classes.drawerLiA}>
                <MailOutlineIcon
                  className={classes.drawerIcon}
                  fontSize='large'
                ></MailOutlineIcon>
                <Typography>Contact</Typography>
              </a>
            </Link>
          </li>
        </ul>
      </SwipeableDrawer>
    </div>
  );
  return (
    <AppBar
      position='fixed'
      style={{ background: bgColor }}
      className={classes.appbar}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.left}>
          <Link href='/'>
            <a>
              <img
                src='/logo4.svg'
                alt='suatbayrak'
                className={classes.leftImg}
              />
            </a>
          </Link>

          <div className={classes.typos}>
            <Link href='/'>
              <a style={{ textDecoration: 'none' }}>
                <Typography
                  className={classes.Typo1}
                  variant='h5'
                  color='secondary'
                >
                  suatbayrak
                </Typography>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          {desktop}

          {mobile}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
