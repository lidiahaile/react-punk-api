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
       <img src={imageBeer} alt="Beer's image"/>
       <h1> {nameBeer}</h1>
       <p>{firstBrewed} </p>
       <p>{abv}</p>
       <p>{ph}</p>
    </div>
  )
}
export default Card
