import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFlat } from "../actions";

function Flat({ flat }) {
  const dispatch = useDispatch();
  const selectedFlat = useSelector((state) => state.selectedFlat);

  const handleClick = () => {
    dispatch(selectFlat(flat));
  };

  let containerClasses = "flat card";

  if (selectedFlat === flat) {
    containerClasses += " selected";
  }

  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${flat.imageUrl}')`,
  };
  return (
    <div onClick={handleClick} className={containerClasses} style={style}>
      <div className="card-description">
        <h2>{flat.name}</h2>
        <p>
          {flat.price} {flat.currency}
        </p>
      </div>
    </div>
  );
}

export default Flat;
