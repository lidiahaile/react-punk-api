import { FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./SideNav.scss"



const SideNav = ({ handleSearch }: { handleSearch: (term: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanedInput);
    handleSearch(cleanedInput); 
  };

  return (
    <div className="sideNav__container">
       <SearchBox label="Search Beer" handleInput={handleInput} searchTerm={searchTerm} />
     
    </div>
  )
}

export default SideNav
