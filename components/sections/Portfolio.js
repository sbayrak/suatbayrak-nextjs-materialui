import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  card: {
    maxWidth: 345,
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item md={12}>
              <Typography variant='h4'>Projects</Typography>
            </Grid>
            <Grid container item md={12}>
              <Grid item md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    component='img'
                    alt='suat bayrak'
                    height='140'
                    image='/suatbayrak.png'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size='small' color='primary'>
                      <Link href='#!'>
                        <a target='_blank' rel='noreferrer noopener'>
                          Website
                        </a>
                      </Link>
                    </Button>
                    <Button size='small' color='primary'>
                      <Link href='#!'>
                        <a target='_blank' rel='noreferrer noopener'>
                          repository
                        </a>
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
