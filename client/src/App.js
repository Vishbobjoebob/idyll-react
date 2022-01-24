import React from "react"
import 'firebase/compat/auth'
import Sell from './components/Sell'
import Browse from './components/Browse'
import NavDashboard from './components/NavDashboard';
import ResetPasswordModal from "./components/ResetPasswordModal";
import BrowseResults from "./components/BrowseResults";
import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {  

  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" element ={<><NavDashboard/><Browse/></>}/>
            {/* <Route path="/" element ={<><SliderTest/></>}/> */}
            <Route path="/sell" element ={<><NavDashboard/><Sell/></>}/>
            <Route path="/resetpassword" element ={<><NavDashboard/><ResetPasswordModal/></>}/>
            <Route path="/" element ={<><NavDashboard/><ResetPasswordModal/></>}/>
            <Route path="/search" element ={<><NavDashboard/><BrowseResults/></>}/>
            {/* <Route path="/signup" element={<><Nav/><Signup/></>}/> */}
          </Routes>
      </AuthProvider>
    </Router>
  );
    // const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")===true);
    // const [token, setToken] = useState('')
    // const [user, setUser] = useState(firebase.auth().currentUser)

    // useEffect(()=> {
    //     firebase.auth().onAuthStateChanged((userCred) => {
    //     if (userCred) {
    //         setAuth(true)
    //         window.localStorage.setItem('auth', 'true')
    //         userCred.getIdToken().then((token) => {
    //         setToken(token)
    //         })
    //         setUser(firebase.auth().currentUser);
    //         console.log(user)
    //     }
    //     })
    // })
    // const loginWithGoogle = async() => {
    //     await firebase
    //     .auth()
    //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //     .then((userCred)=> {
    //     if (userCred) {
    //         setAuth(true);
    //         window.localStorage.setItem('auth', 'true')
    //         setUser(firebase.auth().currentUser);
    //         console.log(user)
    //     }
    //     console.log(userCred) 
    //     })
    // }

    // const loginWithEmail = async(email, password) => {
    //     await firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then((userCred)=> {
    //     if (userCred) {
    //         console.log(userCred)
    //         setAuth(true);
    //         window.localStorage.setItem('auth', 'true')
    //         setUser(firebase.auth().currentUser);
    //         console.log(user)
    //     }
    //     console.log(userCred) 
    //     })
    // }

    // const signUpWithEmail = async(email, password, username, firstName, lastName, phoneNumber) => {
    //     await firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((userCred)=> {
    //        if (userCred) {
    //         userCred.user.displayName = firstName + " " + lastName;
    //         userCred.user.phoneNumber = phoneNumber;
    //         loginWithEmail(email, password);
    //         setAuth(true);
    //         window.localStorage.setItem('auth', 'true')
    //         setUser(firebase.auth().currentUser);
    //         console.log(user)
    //     } 
    //     })
    // }

    // const fetchData = async (token) =>{
    //     const res = await axios.get("http://localhost:5000/api/todos", {
    //         headers : {
    //             Authorization: 'Bearer ' + token,
    //         }
    //     })
    //     console.log(res.data)
    // }
  
}

export default App;
