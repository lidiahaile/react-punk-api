import beers from "../../Data/beers"
import Card from "../Card/Card"
import "./CardList.scss"




const CardList = () => {
  return (
    <div className="cardList__container">
    {
   beers.map((beer)=>{
   return(
    <Card imageBeer={beer.image_url} nameBeer={beer.name} firstBrewed={beer.first_brewed} abv={beer.abv} ph={beer.ph} />
   )
    })
}
    </div>
  )
} 
export default CardList

