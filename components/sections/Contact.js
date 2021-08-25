import { makeStyles, withStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import undrawEmail from '../../public/undrawEmail.svg';

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
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  paper: {
    // backgroundColor: '#4CAF50',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  paperSpan: {
    // color: theme.palette.grey[100],
    color: '#4caf50',
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Montserrat',
    paddingLeft: theme.spacing(1),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const router = useRouter();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [messageHelperText, setMessageHelperText] = useState('');
  const [msgResult, setMsgResult] = useState(false);

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  useEffect(() => {
    if (name.length > 3) {
      setNameError(false);
    }
    if (email.length > 6) {
      setEmailError(false);
    }
    if (message.length > 16) {
      setMessageError(false);
    }
  }, [name, email, message]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    } else if (!emailIsValid(email)) {
      setEmailError(true);
      setEmailHelperText('Please enter a valid e-mail');
    } else if (message.length <= 16) {
      setMessageError(true);
      setMessageHelperText('Please enter a message longer than 16 characters');
    } else {
      const emailData = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await emailData.json();
      setName('');
      setEmail('');
      setMessage('');
      setMsgResult(data.success);
      // router.push('/');
    }
  };

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
                <Image
                  src={undrawEmail}
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
                <form className={classes.form} onSubmit={submitHandler}>
                  <Grid item md={12} className={classes.formItem}>
                    <CssTextField
                      label='Your name'
                      variant='outlined'
                      name='name'
                      className={classes.formTxt}
                      color='secondary'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={nameError}
                      fullWidth
                    ></CssTextField>
                  </Grid>
                  <Grid item md={12} className={classes.formItem}>
                    <CssTextField
                      label='Your e-mail'
                      name='email'
                      variant='outlined'
                      className={classes.formTxt}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={emailError}
                      helperText={emailHelperText}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      error={messageError}
                      helperText={messageHelperText}
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
                    {msgResult && (
                      <Paper className={classes.paper} elevation={0}>
                        <CheckCircleIcon
                          style={{ color: '#4caf50' }}
                        ></CheckCircleIcon>
                        <span className={classes.paperSpan}>Success!</span>
                      </Paper>
                    )}
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
