import React from "react"
import 'firebase/compat/auth'
import Sell from './components/Sell'
import NavDashboard from './components/NavDashboard';
import ResetPasswordModal from "./components/ResetPasswordModal";
import BrowseResults from "./components/BrowseResults";
import Details from "./components/Details";
import SellerDetails from "./components/SellerDetails"
import { AuthProvider } from './contexts/AuthContext';
import { SearchProvider } from "./contexts/SearchContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {InstantSearch} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";

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

// const search = InstantSearch({
//   searchFunction(helper) {
//     const container = document.querySelector('#results');
//     container.style.display = helper.state.query === '' ? 'none' : '';

//     helper.search();
//   }
// });

  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
          <InstantSearch searchClient={searchClient} indexName="searchPosts" >
            <NavDashboard/>
            <Routes>
              {/* <Route path="/" element ={<><SliderTest/></>}/> */}
              <Route path="/sell" element ={<><Sell/></>}/>
              <Route path="/resetpassword" element ={<><ResetPasswordModal/></>}/>
              <Route path="/" element ={<><ResetPasswordModal/></>}/>
              <Route path="/search" element ={<><BrowseResults key={window.location.pathname}/></>}/>
              <Route path="/details" element={<><Details/></>}/>
              <Route path="/sellerDetails" element={<><SellerDetails/></>}/>
            </Routes>
          </InstantSearch>
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
