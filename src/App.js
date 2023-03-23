import Column from "./Components/Column";
import Firstpage from "./Components/first-page/firstpage";
import Navbar from "./Components/Nav";
import Row from "./Components/Row";


const App = () => {
  return(
    <div>
      <Navbar />

        <Column>column</Column>
        <Column>column</Column>

      {/* <Firstpage/> */}
    </div>
 )
};

export default App;