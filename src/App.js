import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Secondpage from './Components/second-page/secondpage';
import Firstpage from './Components/first-page/firstpage';
import SignUp from './Components/sign-uppage/signuppage';
import Calendar from './Components/CalendarDiv';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
