import { useEffect } from "react";
import Flat from "./Flat";
import { setFlats } from "../actions";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";
// old way
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

export default function FlatList() {
  // sends an action
  const dispatch = useDispatch();
  // let's us recieve a reducer from the store (state = store)
  const flatsArray = useSelector((state) => state.flats);

  useEffect(() => {
    dispatch(setFlats());
  }, [dispatch]);

  return (
    <div className="flat-list col-sm-7">
      {flatsArray.map((flat, index) => (
        <Flat flat={flat} key={index} />
      ))}
    </div>
  );
}

// OLD UGLY WAY

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setFlats }, dispatch);
// }

// function mapStateToProps(state) {
//   return {
//     flats: state.flats,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
