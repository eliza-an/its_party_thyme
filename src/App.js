
import React, {/*useState,*/ Fragment} from 'react';
import Firstpage from "./Components/first-page/firstpage";
import Plants from "./Components/Plants";

import {QueryClientProvider, QueryClient} from "react-query";

// import Search from './Components/Search'

const queryClient = new QueryClient()

const App = () => {
  return(
   <Fragment>
    <QueryClientProvider client={queryClient}>
      {/* < Plants /> */}
      <Firstpage/>
      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue}/> */}
    </QueryClientProvider>
   </Fragment>
 )
};

export default App;