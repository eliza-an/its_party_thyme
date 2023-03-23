
import React, {useState, Fragment} from React;
import Column from "./Components/Column";
import Firstpage from "./Components/first-page/firstpage";
import Navbar from "./Components/Nav";
import Row from "./Components/Row";
import Search from './Components/Search/index'


const App = () => {
  return(
   <Fragment>
    <Firstpage/>
    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
   </Fragment>
 )
};

export default App;