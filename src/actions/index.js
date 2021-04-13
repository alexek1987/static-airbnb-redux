import { flats } from "../flatsData";

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats,
  };
}
