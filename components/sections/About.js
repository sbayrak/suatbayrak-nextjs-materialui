import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    backgroundColor: '#212121',
    marginTop: '-5px',
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(15),
    },
  },
  gridContainer: {},
  gridItem: {
    padding: theme.spacing(2),
  },
  undrawImg: {
    width: '100%',
    transform: 'scale(0.9)',
    [theme.breakpoints.down('xs')]: {
      width: '75%',
      height: '100%',
    },
  },
  gridItemLeft: {
    display: 'flex',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: theme.spacing(10),
    },
  },
  Typo3: {
    color: theme.palette.grey[300],
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[300],
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  aboutTopItem: {
    marginBottom: theme.spacing(4),
    borderBottom: '1px solid rgba(249,193,28,0.3)',
    paddingBottom: theme.spacing(4),
  },
  Typo2: {
    borderBottom: '1px solid rgba(249,193,28,0.3)',
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[300],
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
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
    boxShadow: theme.shadows[2],
  },
  gridItemResume: {
    padding: theme.spacing(1),
  },
  resumeBtn: {
    backgroundColor: '#f9c11c',
    boxShadow: theme.shadows[5],
    padding: 0,
    background:
      'linear-gradient(143deg, rgba(249,193,28,1) 7%, rgba(255,212,85,1) 100%)',
    '&:hover': {
      backgroundColor: '#f7c231',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
  resumeLink: {
    color: '#212121',
    textDecoration: 'none',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 2,
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  skillsSection: {
    marginBottom: theme.spacing(5),
  },
  skillsName: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  thesisLink: {
    textDecoration: 'none',
    color: theme.palette.grey[100],
    fontWeight: theme.typography.fontWeightBold,
  },
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
              <Image
                src='/suatbayrak_photo3.jpg'
                width={626}
                height={1024}
                alt='suatbayrak_undraw_web_developer'
                loading='lazy'
                className={classes.undrawImg}
              />
            </Grid>
            <Grid item md={6} className={classes.gridItem}>
              <Grid
                container
                item
                md={12}
                alignItems='center'
                className={classes.aboutTopItem}
              >
                <Grid item md={6} xs={6}>
                  <Typography
                    variant='h4'
                    className={classes.Typo1}
                    color='secondary'
                  >
                    ABOUT ME
                  </Typography>
                </Grid>
                <Grid
                  container
                  justify='flex-end'
                  item
                  md={6}
                  xs={6}
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
                <Typography
                  variant='h6'
                  color='secondary'
                  gutterBottom
                  className={classes.skillsName}
                >
                  Education
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='secondary'
                  className={classes.Typo3}
                >
                  2016 - 2021
                </Typography>
                <Typography
                  variant='subtitle2'
                  color='secondary'
                  gutterBottom
                  className={classes.Typo3}
                >
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
                    <a
                      target='_blank'
                      rel='noreferrer noopener'
                      className={classes.thesisLink}
                    >
                      {' '}
                      Github repository.
                    </a>
                  </Link>
                </Typography>
              </Grid>
              {/* SKILLS START */}

              <Grid item md={12} className={classes.skillsSection}>
                <Typography
                  variant='h6'
                  color='secondary'
                  gutterBottom
                  className={classes.skillsName}
                >
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

              <Grid
                container
                item
                md={12}
                className={classes.skillsContainer}
                xs={12}
              >
                <Grid
                  container
                  item
                  md={12}
                  className={classes.skillsItem}
                  xs={12}
                >
                  <Grid item md={6} className={classes.skillsItemSub} xs={6}>
                    <Paper className={classes.paper}>Javascript & ES6</Paper>
                  </Grid>
                  <Grid item md={6} className={classes.skillsItemSub} xs={6}>
                    <Paper className={classes.paper}>HTML5 & CSS3</Paper>
                  </Grid>
                </Grid>

                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={12} className={classes.skillsItemSub} xs={12}>
                    <Paper className={classes.paper}>NextJS</Paper>
                  </Grid>
                </Grid>
                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={7} className={classes.skillsItemSub} xs={7}>
                    <Paper className={classes.paper}>ReactJS</Paper>
                  </Grid>
                  <Grid item md={5} className={classes.skillsItemSub} xs={5}>
                    <Paper className={classes.paper}>NodeJs</Paper>
                  </Grid>
                </Grid>

                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={4} className={classes.skillsItemSub} xs={4}>
                    <Paper className={classes.paper}>MongoDB</Paper>
                  </Grid>
                  <Grid item md={4} className={classes.skillsItemSub} xs={4}>
                    <Paper className={classes.paper}>Express</Paper>
                  </Grid>
                  <Grid item md={4} className={classes.skillsItemSub} xs={4}>
                    <Paper className={classes.paper}>Redux</Paper>
                  </Grid>
                </Grid>

                <Grid container item md={12} className={classes.skillsItem}>
                  <Grid item md={12} className={classes.skillsItemSub} xs={12}>
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
