import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { projects } from '../../src/projects';
import PortfolioCard from './PortfolioCard';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    paddingBottom: theme.spacing(20),
  },
  rootGridContainer: {},

  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    borderBottom: '1px solid rgba(249,193,28,0.3)',
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(6),
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  gridContainer: {
    padding: theme.spacing(1),
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <Grid container className={classes.rootGridContainer}>
            <Grid item md={12} xs={12}>
              <Typography
                variant='h2'
                color='secondary'
                className={classes.Typo1}
              >
                Projects
              </Typography>
            </Grid>
            <Grid
              container
              item
              md={12}
              className={classes.gridContainer}
              spacing={3}
            >
              {projects.map((project) => (
                <PortfolioCard
                  project={project}
                  key={project.id}
                ></PortfolioCard>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
