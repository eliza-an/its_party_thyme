import React, { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Page imports
import Secondpage from './Components/Secondpage/secondpage';
import Firstpage from './Components/Firstpage/firstpage';
import SignUp from './Components/Signup-page/signuppage';
import Favourites from './Components/Favourites/favourite';


const client = new QueryClient();

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Firstpage />} />
            <Route path="/browse" element={<Secondpage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/your-plants" element={<Favourites />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
