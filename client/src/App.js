import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './pages/screens/Home'
import Signin from './pages/screens/SignIn'
import Profile from './pages/screens/Profile'
import Signup from './pages/screens/Signup'
import CreatePost from './pages/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'
import UserProfile from './pages/screens/UserProfile'
import SubscribedUserPosts from './pages/screens/SubscribesUserPosts'
import Reset from './pages/screens/Reset'
import NewPassword from './pages/screens/Newpassword'
import SingleRecipe from "./pages/screens/SingleRecipe"
import Dashboard from './pages/Dashboard'
// import Dashboard from "./pages/Dashboard";
// import Friends from "./pages/Friends";
// import InputRecipe from "./pages/InputRecipe";
// import Login from "./pages/Login";
// import SearchPage from "./pages/SearchPage";
// import Wrapper from "./components/Wrapper";
// import Recipes from "./pages/Recipes";
// import SingleRecipe from "./pages/SingleRecipe";
// import ProfileMUI from "./pages/ProfileMUI";
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
      <Route path="/singlerecipe/:postid">
        <NewPassword />
      </Route>
      <Route path="/myfollowingpost/">
        <Dashboard />
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
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

// function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <UserContext.Provider value={{state,dispatch}}>
//     <BrowserRouter>
//       {/* <NavBar /> */}
//       <Routing />
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
      
//     </BrowserRouter>
//     </UserContext.Provider>
//   );
// }

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
