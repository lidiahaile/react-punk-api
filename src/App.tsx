import SideNav from "./Containers/SideNav/SideNav"
import "./App.scss"
import Main from "./Containers/Main/Main"
import beers from "./Data/beers";
import { useState } from "react";
const App = () => {
  const [filteredBeers, setFilteredBeers] = useState(beers);
  
  const handleSearch = (searchTerm: string) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm)
    );
    setFilteredBeers(filtered);
  };


  return (
    <div>
      <h1 className="punk__title">Types of beers</h1>
      <SideNav handleSearch={handleSearch} />
      <Main beers={filteredBeers} />
      
     
    </div>
  )
}

export default App
