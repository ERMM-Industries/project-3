import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'
import UserProfile from './components/screens/UserProfile'
import SubscribedUserPosts from './components/screens/SubscribesUserPosts'
import Reset from './components/screens/Reset'
import NewPassword from './components/screens/Newpassword'
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
import InputRecipe from "./pages/InputRecipe";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import Wrapper from "./components/Wrapper";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import ProfileMUI from "./pages/ProfileMUI";
export const UserContext = createContext()



const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost/>
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="/myfollowingpost">
        <SubscribedUserPosts />
      </Route>
      <Route exact path="/reset">
        <Reset/>
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route>
      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routing />
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/Dashboard/id:/" component={Dashboard} />
          <Route exact path="/Dashboard/id:/searchpage" component={SearchPage} />
          <Route exact path="/Dashboard/id:/friends" component={Friends} />
          <Route exact path="/Dashboard/id:/inputrecipe" component={InputRecipe} />
          <Route exact path="/Dashboard/id:/recipes" component={Recipes} />
          <Route exact path="/Dashboard/id:/singlerecipe/id:/" component={SingleRecipe} />
          <Route exact path="/Dashboard/id:/profilemui/id:/" component={ProfileMUI} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

//Below is what is currently on working admin
// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/login" component={Login} />
//       <div>
//         {/* <Navbar /> */}
//         <Wrapper>
//           <Route exact path="/Dashboard/id:/" component={Dashboard} />
//           <Route exact path="/Dashboard/id:/searchpage" component={SearchPage} />
//           <Route exact path="/Dashboard/id:/friends" component={Friends} />
//           <Route exact path="/Dashboard/id:/inputrecipe" component={InputRecipe} />
//           <Route exact path="/Dashboard/id:/recipes" component={Recipes} />
//           <Route exact path="/Dashboard/id:/singlerecipe/id:/" component={SingleRecipe} />
//           <Route exact path="/Dashboard/id:/profilemui/id:/" component={ProfileMUI} />
//         </Wrapper>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// }

export default App;
