import { FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox"
import "./SideNav.scss"
import { Beer } from "../../Data/types";


type SideNavProps = {
  beers: Beer[];
}
const SideNav =({beers}:SideNavProps) => {


  //a state to deal with the search term
  const [searchTerm,setSercheTerm] = useState<string>("")
  
  //function to handle the user input
  const handleInput =(event:FormEvent<HTMLInputElement>)=>{
    const cleanedInput = event.currentTarget.value.toLowerCase()
    setSercheTerm(cleanedInput)
  }


  return (
    <div className="sideNav__container">
      <SearchBox label="Search Beers" searchTerm={searchTerm} handleInput={handleInput}/>
    
    </div>
  )
}

export default SideNav
