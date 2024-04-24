import { Beer } from "../../Data/types"
import Card from "../Card/Card"
import "./CardList.scss"


type CardListProps ={
  beers:Beer[]
}

const CardList = ({beers}:CardListProps) => {
  return (
    <div className="cardList__container">
    {
     beers.map((beer)=>{
   return(
    <Card key={beer.name} imageBeer={beer.image_url} nameBeer={beer.name} firstBrewed={beer.first_brewed} abv={beer.abv} ph={beer.ph} />
   )
    })
   }
  
    </div>
  )
} 
export default CardList;

