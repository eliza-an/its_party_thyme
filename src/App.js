import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Secondpage from "./Components/second-page/secondpage";
import Firstpage from "./Components/first-page/firstpage";
import SignUp from "./Components/sign-uppage/signuppage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient()


function App() {
  return (
    <Fragment>
    <QueryClientProvider client={client}>

      <Router> 
        <Routes>
          <Route path='/' element={<Firstpage/>} />
          <Route path='/your-plants' element={<Secondpage/>} /> 
          <Route path='/sign-up' element={<SignUp/>} /> 
        </Routes>  
      </Router>

    </QueryClientProvider>
    </Fragment>
  );
}


export default App;