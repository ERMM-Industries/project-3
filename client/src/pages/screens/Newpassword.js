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
import Copyright from "../../components/Copyright/index"
//top stuff is for styling
import React,{useState,useContext,} from 'react'
import {Link,useHistory,useParams} from 'react-router-dom'
import M from 'materialize-css'
const SignIn  = ()=>{
    const history = useHistory()
    const [password,setPasword] = useState("")
    const {token} = useParams()
    console.log(token)
    const PostData = ()=>{
        fetch("/new-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{

               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
        
            <input
            type="password"
            placeholder="enter a new password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
               Update password
            </button>
    
        </div>
      </div>
   )
}


//export default SignIn

//style stuff
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
  
//style stuff

const NewSignIn  = ()=>{
    const classes = useStyles(); //this is for materialUI???

    const history = useHistory()
    const [password,setPasword] = useState("")
    const {token} = useParams()
    console.log(token)
    const PostData = ()=>{
        fetch("/new-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{

               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
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
        <Avatar className={classes.avatar}>
          <MenuBookTwoToneIcon />
        </Avatar>
        <Typography button component="h1" variant="h5">
          Update Password
        </Typography>
        <div className={classes.form} noValidate>
          
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
            placeholder="enter a new password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
          />
          
            <Button 
            type = "submit"
            fullWidth
            variant= "contained"
            color= "primary"
            className={classes.submit}
            onClick={()=>PostData()}>Update password</Button>
            
         
          
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </div>
    </Grid>
  </Grid>
   )
}

export default NewSignIn