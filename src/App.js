import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
// import Contact from "./Contact"
import Firstpage from "./Components/first-page/firstpage";



function App() {
  return (
     
      <Router> 
       
        <Routes>
        
        
        
            <Route path='/' element={<Firstpage/>} />
            {/* <Route path='/Contact' element={<Contact/>} /> */}
            
        
      
         </Routes>  
    </Router>
  );
}

export default App;