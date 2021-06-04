import { Container, Grid, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: 'url("/fancy-pants2.png")',
    // backgroundSize: '100%',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Typo1: {
    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(5),
    letterSpacing: 4,
  },
  socialUl: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  socialLi: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  socialLink: {
    color: '#f9c11c',
    fontSize: theme.spacing(5),
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    transition: '0.5s ease',
    '&:hover': {
      color: '#ffd455',
    },
  },
  waveImg: {
    // background: 'url("/fancy-pants2.png")',
    // backgroundSize: '100%',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
  },
}));

const SocialMedia = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline></CssBaseline>
      <img
        src='/wave1.svg'
        alt='suatbayrak_wave'
        style={{ backgroundColor: '#333' }}
        className={classes.waveImg}
      />
      <div className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item md={12}>
            <Typography
              variant='h4'
              className={classes.Typo1}
              color='secondary'
              gutterBottom
              paragraph
            >
              Let's connect!
            </Typography>
          </Grid>
          <Grid item md={12}>
            <ul className={classes.socialUl}>
              <li className={classes.socialLi}>
                <Link href='https://github.com/sbayrak'>
                  <a
                    className={classes.socialLink}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fab fa-github'></i>
                  </a>
                </Link>
              </li>

              <li className={classes.socialLi}>
                <Link href='https://www.instagram.com/sbayrak__/'>
                  <a
                    className={classes.socialLink}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </Link>
              </li>
              <li className={classes.socialLi}>
                <Link href='https://www.linkedin.com/in/suat-bayrak/'>
                  <a
                    className={classes.socialLink}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='fab fa-linkedin'></i>
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
      <img
        src='/wave1.svg'
        alt='suatbayrak_wave'
        style={{ backgroundColor: '#333', transform: 'rotate(180deg)' }}
      />
    </>
  );
};

export default SocialMedia;
