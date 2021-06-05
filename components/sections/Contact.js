import { makeStyles, withStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const CssTextField = withStyles({
  root: {
    '& .MuiFormLabel-root': {
      color: '#e3e3e3',
    },
    '& label.Mui-focused': {
      color: '#f9c11c',
    },
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderColor: '#f9c11c',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f9c11c',
      },
      '&:hover fieldset': {
        borderColor: '#f9c11c',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f9c11c',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'url("/fancy-pants2.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    fontFamily: 'Montserrat',
  },
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
    // backgroundColor: theme.palette.grey[800],
  },
  contactImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: 200,
      margin: '0 auto',
    },
  },
  form: {
    width: '100%',
    padding: theme.spacing(1),
    // height: '50%',
    // display: 'flex',
    // flexDirection: 'column',
  },
  formGridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
    },
  },
  formItem: {
    paddingBottom: theme.spacing(2),
  },
  submitBtn: {
    backgroundColor: '#f9c11c',
    boxShadow: theme.shadows[1],
    background:
      'linear-gradient(143deg, rgba(249,193,28,1) 7%, rgba(255,212,85,1) 100%)',
    '&:hover': {
      backgroundColor: '#f9c231',
    },
    color: '#212121',
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline></CssBaseline>
      <div className={classes.root} id='contact'>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant='h2'
                color='secondary'
                className={classes.Typo1}
              >
                Contact
              </Typography>
            </Grid>
            <Grid item container md={12} className={classes.gridContainer}>
              <Grid item md={6} xs={12}>
                <img
                  src='/undrawEmail.svg'
                  alt='suatbayrak'
                  loading='lazy'
                  className={classes.contactImg}
                />
              </Grid>
              <Grid item md={6} className={classes.formGridItem} xs={12}>
                <Grid item md={12}>
                  <MailOutlineIcon
                    fontSize='large'
                    color='primary'
                  ></MailOutlineIcon>
                </Grid>
                <form className={classes.form}>
                  <Grid item md={12} className={classes.formItem}>
                    <CssTextField
                      label='Your name'
                      variant='outlined'
                      name='name'
                      className={classes.formTxt}
                      color='secondary'
                      fullWidth
                    ></CssTextField>
                  </Grid>
                  <Grid item md={12} className={classes.formItem}>
                    <CssTextField
                      label='Your e-mail'
                      name='email'
                      variant='outlined'
                      className={classes.formTxt}
                      fullWidth
                    ></CssTextField>
                  </Grid>
                  <Grid item md={12} className={classes.formItem}>
                    <CssTextField
                      label='Your message'
                      variant='outlined'
                      name='message'
                      multiline
                      className={classes.formTxt}
                      fullWidth
                      rows={10}
                    />
                  </Grid>
                  <Grid item md={12} className={classes.formItem}>
                    <Button
                      variant='contained'
                      type='submit'
                      className={classes.submitBtn}
                    >
                      Send
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Contact;
