import { FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox"
import "./SideNav.scss"





const SideNav =() => {


  //a state to deal with the search term
  const [searchTerm,setSearchTerm] = useState<string>("")
  
  //function to handle the user input
  const handleInput =(event:FormEvent<HTMLInputElement>)=>{
    const cleanedInput = event.currentTarget.value.toLowerCase()
    setSearchTerm(cleanedInput)
  }



  return (
    <div className="sideNav__container">
      <SearchBox label="🔍" handleInput={handleInput} searchTerm={searchTerm} />
    </div>
  )
}

export default SideNav
