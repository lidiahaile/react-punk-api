import "./Card.scss"

type CardProps ={
    imageBeer: string;
   nameBeer: String;
   firstBrewed:string;
   abv:number;
   ph: number;
   
   


}

const  Card = ({ imageBeer, nameBeer, firstBrewed, abv, ph }:CardProps) => {
  return (
    <div className="card__container" >
       <img src={imageBeer} alt="Beer's image" className="card__image"/>
       <div className="card__beerInfo">
       <h1 className="card__beerName"> {nameBeer}</h1>
       <p>First Brewed: {firstBrewed}</p>
       <p>ABV: {abv}</p>
       <p>pH: {ph}</p>
       </div>
    </div>
  )
}
export default Card
