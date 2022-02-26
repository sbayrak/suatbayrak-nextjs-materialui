import Head from 'next/head';
import {
  Typography,
  Container,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import suatbayrak from '../public/suatbayrak.png';
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
    scrollBehavior: 'smooth',
  },
  landingContainer: {},
  landingGridContainer: {
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
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
  mobileImg: {
    display: 'inline',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktopImg: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
  },
  mobileSbImg: {},
}));

export default function Home() {
  const classes = useStyles();

  const mobile = (
    <div className={classes.mobileImg}>
      <Image
        src={suatbayrak}
        alt='suatbayrak'
        className={`${classes.sbImg} ${classes.mobileSbImg}`}
        loading='lazy'
        placeholder='blur'
        width={225}
        height={250}
      />
    </div>
  );

  const desktop = (
    <div className={classes.desktopImg}>
      <Image
        src={suatbayrak}
        alt='suatbayrak'
        className={classes.sbImg}
        loading='lazy'
        placeholder='blur'
      />
    </div>
  );

  return (
    <>
      <Head>
        <title>Welcome | Suat Bayrak</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='google-site-verification'
          content='G19UOSOLedVnIhpeey7SJ4mtTO6fALqUvSxsZZ4KxLo'
        />
        <meta
          name='description'
          content='Suat Bayrak. Fullstack web developer and computer engineer. Learn more about me! Or contact me with contact form.'
        />
        <meta name='canonical' href='https://www.suatbayrak.com'></meta>
        <meta
          name='keywords'
          content='suat bayrak, suat, bayrak, web developer, web developer portfolio,
        suat bayrak bilgi university, suat bayrak linkedin, suat bayrak instagram, mern stack , nextjs, material-ui , suat bayrak sakarya, suat bayrak take advantage, suat bayrak mern stack,  '
        ></meta>
        <meta name='author' content='Suat Bayrak'></meta>
        <meta charSet='UTF-8'></meta>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />

        <meta name='og:title' property='og:title' content='Suat Bayrak'></meta>
        <meta name='robots' content='index, follow'></meta>
      </Head>

      <CssBaseline></CssBaseline>

      <div className={classes.root} id='home'>
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
                    style={{ marginRight: '26px' }}
                  >
                    <Link href='#contact'>
                      <a className={classes.contactLink}>Contact</a>
                    </Link>
                  </Button>
                  <Button
                    variant='contained'
                    className={classes.contactBtn}
                    size='large'
                  >
                    <Link href={`/resume.pdf`}>
                      <a
                        className={classes.contactLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Resume
                      </a>
                    </Link>
                  </Button>
                </div>
              </Grid>
              <Grid item md={6} className={`${classes.landingGridItemRight}`}>
                {mobile}
                {desktop}
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
