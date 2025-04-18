export const setNuoveUscite = (nuoveUscite) => ({
  type: "SET_NUOVE_USCITE",
  payload: nuoveUscite,
})

export const aggiungiAiPreferiti = (brano) => ({
  type: "AGGIUNGI_AI_PREFERITI",
  payload: brano,
})

export const rimuoviDaiPreferiti = (brano) => ({
  type: "RIMUOVI_DAI_PREFERITI",
  payload: brano,
})
export const setCanzoneCorrente = (brano) => ({
  type: "SET_CANZONE_CORRENTE",
  payload: brano,
})
