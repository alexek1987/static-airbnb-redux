const initState = null;
// eslint-disable-next-line
export default function (state = initState, action) {
  switch (action.type) {
    case "SELECT_FLAT":
      return action.payload;
    default:
      return state;
  }
}
