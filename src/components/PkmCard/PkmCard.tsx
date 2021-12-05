import { Link } from "react-router-dom";
import style from "./PkmCard.module.css";

interface PkmCardProps {
  imgUrl?: string;
  name: string;
  onClickHandler?: (event: any) => void;
  pkmId: string;
}

export default function PkmCard(props: PkmCardProps) {
  const { imgUrl, name, onClickHandler, pkmId } = props;
  return (
    <div className={style.pokeCard} onClick={onClickHandler}>
      <img src={imgUrl} alt="" />
      <Link to={`/pokemon/${pkmId}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
}
