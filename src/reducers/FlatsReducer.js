export default function (state, action) {
  // initial state
  if (state === undefined) {
    return [];
  }
  // new state
  if (action.type === "SET_FLATS") {
    return action.payload;
  } else {
    return state;
  }
}
