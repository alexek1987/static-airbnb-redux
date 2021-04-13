import { useEffect } from "react";
import Flat from "./Flat";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFlats } from "../actions";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

export default function FlatList() {
  // sends an action
  const dispatch = useDispatch();
  // let's us recieve a reducer from the store (state = store)
  const flatsArray = useSelector((state) => state.flats);

  useEffect(() => {
    dispatch(setFlats());
  }, []);

  return (
    <div className="flat-list col-sm-7">
      {flatsArray.map((flat, index) => (
        <Flat
          key={index}
          name={flat.name}
          img={flat.imageUrl}
          price={flat.price}
          currency={flat.priceCurrency}
        />
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
