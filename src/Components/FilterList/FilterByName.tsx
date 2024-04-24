import { FormEvent, useState } from "react";
import { Beer } from "../../Data/types";
import SearchBox from "../SearchBox/SearchBox";
import CardList from "../CardList/CardList";


type FilterByNameProps ={
    beers: Beer[];
}

const FilterByName=({beers}:FilterByNameProps) => {
    
const [searchTerm, setSearchTerm] = useState<string>("");
const handleInput = (event: FormEvent<HTMLInputElement>) => {
const cleanInput = event.currentTarget.value.toLowerCase();
setSearchTerm(cleanInput);
};

const filteredNames = beers.filter((beer)=>
beer.name.toLowerCase().includes(searchTerm)
)
  return (
    <div>
      <SearchBox label="Search Beer" handleInput={handleInput} searchTerm={searchTerm} />
      <CardList beers={filteredNames}/>
    </div>
  )
}

export default FilterByName;