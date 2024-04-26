
import { useState } from "react";
import "./App.scss"
import beers from "../Data/beers";
import Main from "../Containers/Main/Main";







const App = () => {
  const [filteredBeers, setFilteredBeers] = useState(beers);
  
 setFilteredBeers;

  


  return (
  
    <div className="punk__nav">
      <h1 className="punk__title">TYPES OF BEERS</h1>
      <div className="punk__side-main">
      
     
       
       <Main beers={filteredBeers}/>
     </div>
    
      
     
    </div>
   
   
  )
}

export default App