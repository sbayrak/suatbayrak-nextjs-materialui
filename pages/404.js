import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(25),
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
