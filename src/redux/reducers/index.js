const initialState = {
  nuoveUscite: [],
  preferiti: [],
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

    default:
      return state
  }
}

export default mainReducer
