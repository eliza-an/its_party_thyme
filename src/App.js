
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Secondpage from "./Components/second-page/secondpage";
import Firstpage from "./Components/first-page/firstpage";

import {QueryClientProvider, QueryClient} from "react-query";

// import Search from './Components/Search'

const queryClient = new QueryClient()


const App = () => {
  return(
   <Fragment>
    <QueryClientProvider client={queryClient}>

      <Firstpage/>
      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue}/> */}
    </QueryClientProvider>
   </Fragment>
 )
};

export default App;