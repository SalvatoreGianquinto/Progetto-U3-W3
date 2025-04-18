const initialState = {
  nuoveUscite: [],
  preferiti: [],
  canzoneCorrente: null,
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NUOVE_USCITE":
      return { ...state, nuoveUscite: action.payload }

    case "AGGIUNGI_AI_PREFERITI":
      return { ...state, preferiti: [...state.preferiti, action.payload] }

    case "RIMUOVI_DAI_PREFERITI":
      return {
        ...state,
        preferiti: state.preferiti.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    case "SET_CANZONE_CORRENTE":
      return { ...state, canzoneCorrente: action.payload }

    default:
      return state
  }
}

export default mainReducer
