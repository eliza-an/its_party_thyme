import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Firstpage from "./Components/Firstpage";
import Secondpage from "./Components/Secondpage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import Search from './Components/Search'

const client = new QueryClient()


const App = (props) => {
  return(
   <Fragment>
    <QueryClientProvider client={client}>
      <Firstpage />
      <Secondpage />
      
      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue}/> */}
    </QueryClientProvider>
   </Fragment>
 )
};

export default App;