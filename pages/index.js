import Head from 'next/head';
import {
  Typography,
  Container,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Image from 'next/image';
import SocialMedia from '../components/sections/SocialMedia';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#212121',
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  landingContainer: {},
  landingGridContainer: {
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  landingGridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    width: '72%',
    margin: '0 auto',
  },
  landingGridItemRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  Typo2: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '46px',
    },
  },
  Typo3: {
    color: theme.palette.grey[400],
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  contactBtn: {
    backgroundColor: '#f9c11c',
    boxShadow: theme.shadows[5],
    padding: 0,
    background:
      'linear-gradient(143deg, rgba(249,193,28,1) 7%, rgba(255,212,85,1) 100%)',
    '&:hover': {
      backgroundColor: '#f7c231',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  contactLink: {
    color: '#212121',
    textDecoration: 'none',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 2,
    fontFamily: 'Montserrat',
  },
  sbImg: {
    borderRadius: '30%',
    // boxShadow: '1px 1px 4px 1px rgba(249,193,28,0.1)',
    [theme.breakpoints.down('sm')]: {
      width: 375,
    },
    [theme.breakpoints.down('xs')]: {
      width: 250,
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Welcome | Suat Bayrak</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CssBaseline></CssBaseline>
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <div id='home'>
            <Grid container className={classes.landingGridContainer}>
              <Grid item md={6} className={classes.landingGridItem}>
                <div className={classes.wrapper}>
                  <Typography
                    variant='h5'
                    className={classes.Typo1}
                    color='primary'
                  >
                    WEB DEVELOPER
                  </Typography>
                  <Typography
                    variant='h1'
                    color='secondary'
                    className={classes.Typo2}
                    gutterBottom
                    paragraph
                  >
                    SUAT <br /> BAYRAK
                  </Typography>
                  <Typography
                    variant='body2'
                    gutterBottom
                    paragraph
                    className={classes.Typo3}
                  >
                    I'm a full stack web developer and computer engineer. <br />{' '}
                    Need a solution for your business ?
                  </Typography>
                  <Button
                    variant='contained'
                    className={classes.contactBtn}
                    size='large'
                  >
                    <Link href='#contact'>
                      <a className={classes.contactLink}>Contact</a>
                    </Link>
                  </Button>
                </div>
              </Grid>
              <Grid item md={6} className={`${classes.landingGridItemRight}`}>
                <img
                  src='/suatbayrak.png'
                  alt='suatbayrak'
                  className={classes.sbImg}
                  loading='lazy'
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <SocialMedia></SocialMedia>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}
