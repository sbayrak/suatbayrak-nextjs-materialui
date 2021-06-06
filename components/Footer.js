import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootFooter: {
    paddingTop: theme.spacing(5),
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  gridItem: {
    textAlign: 'center',
  },
  Typo1: {
    borderTop: '1px solid rgba(249,193,28,0.3)',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    // color: theme.palette.grey[400],
    color: '#f9c11c',
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootFooter}>
        <Container>
          <Grid container>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant='body2' className={classes.Typo1}>
                <span style={{ fontStyle: 'normal' }}>&copy; 2021</span> &nbsp;
                Suat Bayrak.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
