import { getPkmIcon } from "../../helpers/PkmnHelper";
import style from "./TeamBar.module.css";

interface TeamBarProps {
  pkmnList?: [];
  pkmClickHandler?: any;
}

function generatePlaceholders(pkmnList: []) {
  const placeholders = [];

  for (let index = 0; index < 6 - pkmnList?.length; index++) {
    placeholders.push(<li className={style["team-bar_item"]}></li>);
  }
  return placeholders;
}

export default function TeamBar(props: TeamBarProps) {
  const { pkmnList = [], pkmClickHandler: itemClickHandler = () => {} } = props;

  function clickHandler(pkm) {
    // execute click callback
    itemClickHandler(pkm);
  }

  return (
    <nav className={style["team-bar_nav"]}>
      <ul className={style["team-bar_list"]}>
        {pkmnList.map((pkm) => (
          <li
            className={style["team-bar_item"]}
            onClick={() => clickHandler(pkm)}
          >
            <img src={getPkmIcon(pkm.url)} alt="" />
          </li>
        ))}
        {generatePlaceholders(pkmnList)}
      </ul>
    </nav>
  );
}
