import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import "./App.css";
import TeamBar from "./components/TeamBar/TeamBar";

const selectTeam = (state) => state.selectedTeam;

function App() {
  const { selectedTeam } = useSelector(selectTeam);
  const dispatch = useDispatch();

  function removePkmFromTeam(tossedPkm) {
    dispatch({ type: "selectedTeam/removePkm", payload: tossedPkm });
  }

  return (
    <div className="App">
      <TeamBar
        pkmClickHandler={removePkmFromTeam}
        pkmnList={selectedTeam}
      ></TeamBar>
      <div style={{ paddingTop: "56px" }}>
        {/* renders whaterver page associated to the current route
          Example:
            baseUrl/ => renders <PkmnListPage />
            baseUrl/pokemon => renders <PkmDetails />
      */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
