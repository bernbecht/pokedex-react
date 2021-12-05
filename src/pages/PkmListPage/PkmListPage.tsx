import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import PkmCard from "../../components/PkmCard/PkmCard";
import { fetchPkmsUsecase } from "../../data/fetchPkmsUsecase";
import { isElemInView } from "../../helpers/DOMHelper";
import { getPkmIdFromUrl, getPkmImgUrl } from "../../helpers/PkmnHelper";
import style from "./PkmListPage.module.css";

export default function PkmListPage() {
  const [pkmnList, setPkmnList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const selectedTeam = useSelector((state) => {
    // keep use it for debugging 👇
    // console.log(state);
    return state.selectedTeam.selectedTeam;
  });
  const dispatch = useDispatch();
  const loadMoreAnchor = useRef<any>(null);

  const onWindowScrollHandler = async () => {
    if (isElemInView(loadMoreAnchor.current)) {
      loadMoreAnchor.current.style.display = "none";
      loadNextPokemons();
    }
  };

  const loadNextPokemons = async () => {
    const maxItemsPerPage = 25;
    fetchPkmsUsecase(pageIndex, maxItemsPerPage)
      .then((response) => {
        console.log(response);
        setPageIndex((prev) => pageIndex + 1);
        setPkmnList((prev) => [...prev, ...response.results]);
        loadMoreAnchor.current.style.display = "block";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addPkmnToTeam = (event: any, pkm: any) => {
    console.log(`Adding ${pkm.name} to the team`);
    if (selectedTeam.length < 6) {
      dispatch({
        type: "selectedTeam/addPkm",
        payload: pkm,
      });
    }
  };

  // register/unregister scroll handler to fetch more pkms when scroll reaches bottom
  useEffect(() => {
    window.addEventListener("scroll", onWindowScrollHandler);
    return () => {
      window.removeEventListener("scroll", onWindowScrollHandler);
    };
  }, [pageIndex]);

  // initial screen load
  useEffect(() => {
    loadNextPokemons();
  }, []);

  return (
    <ul className={style.pokeList}>
      {pkmnList.map((pkm) => (
        <li>
          <PkmCard
            onClickHandler={(event) => addPkmnToTeam(event, pkm)}
            name={pkm.name}
            imgUrl={getPkmImgUrl(pkm.url)}
            pkmId={getPkmIdFromUrl(pkm.url)}
          />
        </li>
      ))}
      <Loading />
      <div
        ref={loadMoreAnchor}
        id="loadMoreAnchor"
        className={style.loadMoreAnchor}
      ></div>
    </ul>
  );
}
