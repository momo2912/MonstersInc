import Card from "../Card/card.component";
import { Monster } from "../../App";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        //   const { id, name, email } = monster;
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
