import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link2 from '@material-ui/core/Link'; //changed to Link2 from Link
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import LoginButton from '../components/LoginButton/login-button'; //this may be auth0 - can be deleted
//import SignUpButton from '../components/SignUpButton/signup-button'; //This may be auth0 - can be deleted
//imports above are from login page
import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © 2020'}
      <Link2 color="inherit" href="https://material-ui.com/">
        Weat
      </Link2>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(http://lorempixel.com/1200/1200/food)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ()=>{
  const classes = useStyles(); //this is for materialUI???

  const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <img src="/logo.png" alt="Weat" width={150} />
          <Typography button component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form} noValidate>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
              placeholder="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPasword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            
              <Button 
              type = "submit"
              fullWidth
              variant= "contained"
              color= "primary"
              className={classes.submit}
              onClick={()=>PostData()}>Sign In</Button>
              
           
            <Grid container>
              <Grid item xs>
              <Link to="/reset">Forgot password?</Link>
              </Grid>
              <Grid item>
              <Link to="/signup" variant="body2">Dont have an account ?</Link>
                
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignIn

const PreviousSignIn  = ()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")
  const PostData = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
          return
      }
      fetch("/signin",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              password,
              email
          })
      }).then(res=>res.json())
      .then(data=>{
          console.log(data)
         if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
         }
         else{
             localStorage.setItem("jwt",data.token)
             localStorage.setItem("user",JSON.stringify(data.user))
             dispatch({type:"USER",payload:data.user})
             M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
             history.push('/')
         }
      }).catch(err=>{
          console.log(err)
      })
  }
 return (
    <div className="mycard">
        <div className="card auth-card input-field">
          <h2>Weat</h2>
          <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>setPasword(e.target.value)}
          />
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={()=>PostData()}
          >
              Login
          </button>
          <h5>
              <Link to="/signup">Dont have an account ?</Link>
          </h5>
          <h6>
              <Link to="/reset">Forgot password ?</Link>
          </h6>
  
      </div>
    </div>
 )
}
