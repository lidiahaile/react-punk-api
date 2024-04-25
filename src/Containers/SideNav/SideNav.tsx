import { FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./SideNav.scss"
import Filter from "../../Components/FilterList/Filter";


type SideNavProps ={
  handleSearch: (searchTerm:string) =>void
   handleAbv: () => void;
  handleYear: () => void;
  handlePh: () => void;
  resetFilters: ()=> void;
}

const SideNav = ({ handleSearch, handleAbv, handleYear, handlePh, resetFilters}: SideNavProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanedInput);
    handleSearch(cleanedInput); 
  };




  return (
    <div className="sideNav__container">
      <SearchBox label="Search Beer " handleInput={handleInput} searchTerm={searchTerm} />
      
      <div className="sideNav__filters">
      <Filter filterName="ABV > 6.0" clicked={handleAbv} />
      <Filter filterName="Brewed before 2010" clicked={handleYear} />
      <Filter filterName="pH < 4" clicked={handlePh} />
      <Filter filterName="Reset Filters " clicked={resetFilters}/>
      
         
      </div>
    
   
    </div>
   
   
   
  )
}

export default SideNav


