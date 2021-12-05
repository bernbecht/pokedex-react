const initialState = {
  selectedTeam: [],
  test: null,
};

export default function selectedTeamReducer(state = initialState, action: any) {
  switch (action.type) {
    case "selectedTeam/addPkm": {
      return {
        ...state,
        selectedTeam: [...state.selectedTeam, action.payload],
      };
    }
    case "selectedTeam/removePkm": {
      const newValue = state.selectedTeam.filter(
        (pkm) => pkm.name !== action.payload.name
      );
      return {
        ...state,
        selectedTeam: newValue,
      };
    }
    default:
      return state;
  }
}
