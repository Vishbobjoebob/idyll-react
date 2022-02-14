import React from "react"
import 'firebase/compat/auth'
import Sell from './components/Sell'
import Browse from './components/Browse'
import NavDashboard from './components/NavDashboard';
import ResetPasswordModal from "./components/ResetPasswordModal";
import BrowseResults from "./components/BrowseResults";
import Details from "./components/Details";
import SellerDetails from "./components/SellerDetails"
import { AuthProvider } from './contexts/AuthContext';
import { SearchProvider } from "./contexts/SearchContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {  

  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
          <NavDashboard/>
          <Routes>
            <Route path="/" element ={<><Browse/></>}/>
            {/* <Route path="/" element ={<><SliderTest/></>}/> */}
            <Route path="/sell" element ={<><Sell/></>}/>
            <Route path="/resetpassword" element ={<><ResetPasswordModal/></>}/>
            <Route path="/" element ={<><ResetPasswordModal/></>}/>
            <Route path="/search" element ={<><BrowseResults key={window.location.pathname}/></>}/>
            <Route path="/details" element={<><Details/></>}/>
            <Route path="/sellerDetails" element={<><SellerDetails/></>}/>
          </Routes>
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
