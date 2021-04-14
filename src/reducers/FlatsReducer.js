const initState = [];
// eslint-disable-next-line
export default function (state = initState, action) {
  if (action.type === "SET_FLATS") {
    return action.payload;
  } else {
    return state;
  }
}
