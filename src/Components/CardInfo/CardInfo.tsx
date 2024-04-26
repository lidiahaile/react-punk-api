
type CardInfoProps ={
     imageBeer: string;
   nameBeer: String;
   firstBrewed:string;
   abv:number;
   ph: number;
   description:string;
   tagline: string;
   food_pairing:string;
   brewers_tips:string;
   
}
const CardInfo =({imageBeer, nameBeer,firstBrewed,abv,ph,description,tagline,food_pairing,brewers_tips}:CardInfoProps)=> {
  return (
    <div>
        <h1>{nameBeer}</h1>
         <img src={imageBeer} alt="Beer's image" className="card__image"/>
         <p>{tagline}</p>
         <p>{description}</p>
       <p>First Brewed: {firstBrewed}</p>
       <p>ABV: {abv}</p>
       <p>pH: {ph}</p>
       <p>{food_pairing}</p>
       <p>{brewers_tips}</p>

      
    </div>
  )
}

export default CardInfo
