import SideNav from "./Containers/SideNav/SideNav"
import "./App.scss"
import Main from "./Containers/Main/Main"
import beers from "./Data/beers";
import { useState } from "react";

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
    const filteredByPh = beers.filter((beer) => beer.ph < 4);
    setFilteredBeers(filteredByPh);
  };

  const resetFilters = () => {
    setFilteredBeers(beers);
  };

  
  


  return (
    <div>
      <h1 className="punk__title">Types of beers</h1>
      <SideNav 
      handleSearch={handleSearch}
      handleAbv={handleAbv}
      handleYear={handleYear}
      handlePh={handlePh}
      resetFilters={resetFilters}
      />
         
      
      <Main beers={filteredBeers} />
      
     
    </div>
  )
}

export default App
