import React from "react"
import 'firebase/compat/auth'
import Sell from './components/Sell'
import NavDashboard from './components/NavDashboard';
import ResetPasswordModal from "./components/ResetPasswordModal";
import BrowseResults from "./components/BrowseResults";
import Details from "./components/Details";
import SellerDetails from "./components/SellerDetails"
import Profile from "./components/profile/Profile"
import { AuthProvider } from './contexts/AuthContext';
import { SearchProvider } from "./contexts/SearchContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {InstantSearch} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import EditAccountInfo from "./components/profile/EditAccountInfo";
import AccountOverview from "./components/profile/AccountOverview";
import VerifySeller from "./components/seller-verification/VerifySeller";
import Apply from "./components/seller-verification/Apply"
import ChefDashboard from "./components/chef-dashboard/ChefDashboard"

function App() {  
  const algoliaClient = algoliasearch(
    'G7XGFCN3QV',
    '12af5740b6d988432c9b23af2f5a9480'
  );

const searchClient = {
  ...algoliaClient,
  search(requests) {
    return algoliaClient.search(requests);
  },
};

  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
          <InstantSearch searchClient={searchClient} indexName="searchPosts" >
            <NavDashboard/>
            <Routes>
              {/* <Route path="/" element ={<><SliderTest/></>}/> */}
              <Route path="/sell" element ={<><ChefDashboard/></>}/>
              <Route path="/resetpassword" element ={<><ResetPasswordModal/></>}/>
              <Route path="/" element ={<Navigate to="/search"/>}/>
              <Route path="/search" element ={<><BrowseResults key={window.location.pathname}/></>}/>
              <Route path="/details" element={<><Details/></>}/>
              <Route path="/sellerDetails" element={<><SellerDetails/></>}/>
              <Route path="/profile" element ={<Navigate to="/profile/accountOverview"/>}/>
              <Route path="/profile/accountOverview" element ={<Profile profileComponent={<AccountOverview/>}/>}/>
              <Route path="/profile/editAccountInfo" element ={<Profile profileComponent={<EditAccountInfo/>}/>}/>
              <Route path="/verifySeller" element ={<VerifySeller/>}/>
              <Route path="/apply" element ={<Apply/>}/>
            </Routes>
          </InstantSearch>
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
