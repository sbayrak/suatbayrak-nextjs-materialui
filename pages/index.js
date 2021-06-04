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
  },
  Typo2: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Montserrat',
  },
  Typo3: {
    color: theme.palette.grey[400],
    fontFamily: 'Montserrat',
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
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <SocialMedia></SocialMedia>
      <About></About>
      <Portfolio></Portfolio>
    </>
  );
}
