import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    backgroundColor: '#212121',
    marginTop: '-5px',
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  gridContainer: {},
  gridItem: {
    padding: theme.spacing(2),
  },
  undrawImg: {
    width: '100%',
  },
  gridItemLeft: {
    display: 'flex',
  },
  Typo3: {
    color: theme.palette.grey[300],
  },
  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[300],
  },
  Typo2: {
    borderBottom: '1px solid rgba(249,193,28,0.3)',
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[300],
  },
  skillsContainer: {},
  skillsItem: {},
  skillsItemSub: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    backgroundColor: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightMedium,
    color: '#f9c11c',
    boxShadow: theme.shadows[20],
  },
  gridItemResume: {
    padding: theme.spacing(1),
  },
  resumeBtn: {
    padding: 0,
  },
  resumeLink: {
    padding: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    textDecoration: 'none',
    backgroundColor: '#f9c11c',
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: '0.3s ease',
    '&:hover': {
      backgroundColor: '#ffb400',
    },
  },
  skillsSection: {},
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.aboutWrapper} id='about'>
        <Container maxWidth='lg'>
          <Grid container className={classes.gridContainer}>
            <Grid
              item
              md={6}
              className={`${classes.gridItem} ${classes.gridItemLeft}`}
            >
              <img
                src='/undrawWebDeveloper.svg'
                alt='suatbayrak_undraw_web_developer'
                className={classes.undrawImg}
              />
            </Grid>
            <Grid item md={6} className={classes.gridItem}>
              <Grid container item md={12} alignItems='center'>
                <Grid item md={6}>
                  <Typography
                    variant='h4'
                    className={classes.Typo1}
                    color='secondary'
                    gutterBottom
                  >
                    ABOUT ME
                  </Typography>
                </Grid>
                <Grid
                  container
                  justify='flex-end'
                  item
                  md={6}
                  className={classes.gridItemResume}
                >
                  <Button variant='contained' className={classes.resumeBtn}>
                    <Link href='https://drive.google.com/file/d/1qVWUIYXrJPb2OKS-5ja1RsCrnXnW1z3T/view?usp=sharing'>
                      <a
                        target='_blank'
                        rel='noreferrer noopener'
                        className={classes.resumeLink}
                      >
                        Resume
                      </a>
                    </Link>
                  </Button>
                </Grid>
              </Grid>
              <Grid item md={12} className={classes.skillsSection}>
                <Typography variant='h6' color='secondary' gutterBottom>
                  Education
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='secondary'
                  className={classes.Typo3}
                >
                  2016 - 2021
                </Typography>
                <Typography variant='subtitle2' color='secondary' gutterBottom>
                  Istanbul Bilgi University, Computer Engineering
                </Typography>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.Typo2}
                >
                  I have graduated from Computer Engineering B.Sc. at the
                  beginning of 2021. I took several courses on data structures,
                  cloud computing, user interface design, digital currencies and
                  blockchain,security and cryptography... I also made a thesis
                  project of a website called as AuctionHouse : Online Bidding,
                  can be found in my{' '}
                  <Link href='https://www.github.com/sbayrak/auctionhouse'>
                    <a target='_blank' rel='noreferrer noopener'>
                      {' '}
                      Github repository.
                    </a>
                  </Link>
                </Typography>
              </Grid>
              {/* SKILLS START */}

              <Grid item md={12} className={classes.skillsSection}>
                <Typography variant='h6' color='secondary' gutterBottom>
                  Skills
                </Typography>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.Typo2}
                >
                  I like JavaScript. Its simple, easy to use and very widely
                  used in web development. In general I use ReactJS for
                  front-end. If a static-site generator is needed, then I switch
                  to NextJS. I am more a front-end developer. But if back-end is
                  needed I use NodeJS with Express and MongoDB as database since
                  its flexible and much more easy to manipulate the data.
                  Nowadays, I am trying to improve my NextJS skills.
                </Typography>
              </Grid>

              <Grid container item md={12} className={classes.skillsContainer}>
                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={6} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>Javascript & ES6</Paper>
                  </Grid>
                  <Grid item md={6} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>HTML5 & CSS3</Paper>
                  </Grid>
                </Grid>

                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={12} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>NextJS</Paper>
                  </Grid>
                </Grid>
                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={7} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>ReactJS</Paper>
                  </Grid>
                  <Grid item md={5} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>NodeJs</Paper>
                  </Grid>
                </Grid>

                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={4} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>MongoDB</Paper>
                  </Grid>
                  <Grid item md={4} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>Express</Paper>
                  </Grid>
                  <Grid item md={4} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>Redux</Paper>
                  </Grid>
                </Grid>

                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={12} className={classes.skillsItemSub}>
                    <Paper className={classes.paper}>Material-UI</Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default About;
