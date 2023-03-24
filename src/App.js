
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Secondpage from "./Components/second-page/secondpage";
import Firstpage from "./Components/first-page/firstpage";





function App() {
  return (
     
      <Router> 
       
        <Routes>
        
        
        
            <Route path='/' element={<Firstpage/>} />
           <Route path='/your-plants' element={<Secondpage/>} /> 
            
        
      
         </Routes>  
    </Router>
  );
}


export default App;