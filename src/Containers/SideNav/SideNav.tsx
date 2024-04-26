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
     <div className="sideNav__searchBar"> 
        <SearchBox label="Search Beer " handleInput={handleInput} searchTerm={searchTerm}  /> 
     </div>
     <div className="sideNav__filters">
       <Filter filterName="High ABV " clicked={handleAbv} />
       <Filter filterName="Classic Range" clicked={handleYear} />
       <Filter filterName="Acidic" clicked={handlePh} />
       <Filter filterName="Reset Filters " clicked={resetFilters}/>
     </div>
  </div>
  )
}

export default SideNav


