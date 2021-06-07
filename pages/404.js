import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(25),
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(15),
    },
  },
  undrawImg: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
    },
  },
  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  gridItemRight: {
    textAlign: 'left',
  },
  backBtn: {
    backgroundColor: '#f9c11c',
    boxShadow: theme.shadows[1],
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
  backLink: {
    color: '#212121',
    textDecoration: 'none',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Montserrat',
  },
}));

const Custom404 = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>404 | Suat Bayrak</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Oops! Page Not Found. Find out more for Suat Bayrak , web developer'
        />
        <link rel='icon' href='/favicon.ico' />

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
      <div className={classes.root}>
        <Container>
          <Grid container>
            <Grid item md={6} xs={12}>
              <img
                src='/undrawNotFound.svg'
                alt='suat bayrak 404 not found'
                className={classes.undrawImg}
              />
            </Grid>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              md={6}
              xs={12}
              className={classes.gridItemRight}
            >
              <div>
                <Typography
                  variant='h1'
                  className={classes.Typo1}
                  color='secondary'
                >
                  Oops!
                </Typography>
                <Typography
                  variant='h2'
                  color='secondary'
                  className={classes.Typo1}
                  gutterBottom
                >
                  Page Not Found.
                </Typography>

                <Button variant='contained' className={classes.backBtn}>
                  <Link href='/'>
                    <a rel='noreferrer noopener' className={classes.backLink}>
                      BACK TO HOME
                    </a>
                  </Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Custom404;
