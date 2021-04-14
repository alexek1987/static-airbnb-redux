import { flats } from "../flatsData";

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats,
  };
}

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat,
  };
}
