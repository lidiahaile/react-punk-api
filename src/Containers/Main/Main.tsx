import CardList from "../../Components/CardList/CardList";
import { Beer } from "../../Data/types";
import "./Main.scss";


type MainProps = {
  beers: Beer[];
};


const Main = ({ beers }: MainProps) => {


  
  return (
    <main className="main__container">
      <CardList beers={beers} />
    </main>
  );
};

export default Main;
