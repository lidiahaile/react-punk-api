
type FilterProps ={
    filterName: string;
    clicked:()=>void
}


const Filter=({filterName,clicked}:FilterProps) =>{
  return (
  <button onClick={clicked}> {filterName} </button>
  )
}

export default Filter
