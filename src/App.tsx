import SideNav from "./Containers/SideNav/SideNav"
import "./App.scss"
import Main from "./Containers/Main/Main"

import {  useState } from "react";

import beers from "./Data/beers";






const App = () => {
  const [filteredBeers, setFilteredBeers] = useState(beers);
  
   

  //handle search box
  const handleSearch = (searchTerm: string) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm)
    );
    setFilteredBeers(filtered);
  };

  // handle filters and reset button
  const handleAbv = () => {
    const filteredByAbv = beers.filter((beer) => beer.abv > 6.0);
    setFilteredBeers(filteredByAbv);
  };

  const handleYear = () => {
    const filteredByYear = beers.filter(
      (beer) => parseInt(beer.first_brewed.split("/")[1]) < 2010
    );
    setFilteredBeers(filteredByYear);
  };

  const handlePh = () => {
    const filteredByPh = beers.filter((beer) => beer.ph < 4.0);
    setFilteredBeers(filteredByPh);
  };

  const resetFilters = () => {
    setFilteredBeers(beers);
  };

  /*
//integration of the API
const [beers, setBeers] = useState<Beer[]>([]);
 const getBeers = async () => {
    const url = `http://localhost:3333/v2/beers`;
    const response = await fetch(url);
    const data: Beer[] = await response.json();
    console.log(data);
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);
  */


  return (
  
    <div className="punk__nav">
      <h1 className="punk__title">TYPES OF BEERS</h1>
      <div className="punk__side-main">
      
      <SideNav 
      handleSearch={handleSearch}
      handleAbv={handleAbv}
      handleYear={handleYear}
      handlePh={handlePh}
      resetFilters={resetFilters}
      />
       
       <Main beers={filteredBeers}/>
     </div>
    
      
     
    </div>
   
   
  )
}

export default App
