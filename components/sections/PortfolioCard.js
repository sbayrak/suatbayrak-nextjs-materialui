import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#333',
    transition: '0.3s ease',
    overflow: 'hidden',
    border: '1px solid rgba(249,193,28,0.3)',
    // boxShadow: '1px 1px 5px 1px #f9c11c',
    '&:hover': {
      backgroundColor: theme.palette.grey[800],
    },
  },
  cardMedia: {
    transition: '0.1s ease',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  cardDesc: {
    minHeight: 75,
    maxHeight: 75,
    marginBottom: theme.spacing(1),
    fontFamily: 'Montserrat',
    overflow: 'hidden',
    color: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightLight,
    fontSize: '13px',
  },
  projectName: {
    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[50],
  },
  cardBottom: {
    textDecoration: 'none',
    color: theme.palette.grey[800],
    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightMedium,
    color: '#f9c11c',
  },
  bottomBtn: {
    backgroundColor: '#212121',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    boxShadow: theme.shadows[1],
    '&:hover': {
      backgroundColor: '#333',
    },
  },
}));

const PortfolioCard = ({ project }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item md={4} xs={12}>
        <Card className={classes.card}>
          <Image
            component='img'
            alt='suat bayrak'
            src={project.img}
            width={400}
            height={175}
            loading='lazy'
            title={project.name}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h6'
              component='h2'
              className={classes.projectName}
            >
              {project.name}
            </Typography>
            <Typography
              variant='body2'
              component='p'
              className={classes.cardDesc}
            >
              {project.desc}
            </Typography>
          </CardContent>

          <CardActions>
            {project.website && (
              <Button size='small' className={classes.bottomBtn}>
                <Link href={project.website}>
                  <a
                    target='_blank'
                    rel='noreferrer noopener'
                    className={classes.cardBottom}
                  >
                    Website
                  </a>
                </Link>
              </Button>
            )}
            <Button size='small' className={classes.bottomBtn}>
              <Link href={project.repository}>
                <a
                  target='_blank'
                  rel='noreferrer noopener'
                  className={classes.cardBottom}
                >
                  repository
                </a>
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default PortfolioCard;
