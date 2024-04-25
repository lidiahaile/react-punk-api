import "./Filter.scss";

type FilterProps ={
    filterName: string;
    clicked:()=>void

}


const Filter=({filterName,clicked, }:FilterProps) =>{
     

  return (
    <div className="filters">
  <button  onClick={clicked}> {filterName}  </button>
  </div>
  ) 


}

export default Filter
