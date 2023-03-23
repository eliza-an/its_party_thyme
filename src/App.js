import React, {useState, Fragment} from React;
import Firstpage from "./Components/first-page/firstpage";
import Search from './Components/Search/index'

function App ({plants}) {
  const [searchValue, setSearchValue] = useState('')

const App = () => {
  return(
    <Fragment>
 <Firstpage/>
 <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
 </Fragment>
 )
};
}

export default App;