import "../App.css";

function Flat({ name, img, price, currency }) {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${img}')`,
  };
  return (
    <div className="flat card" style={style}>
      <div className="card-description">
        <h2>{name}</h2>
        <p>
          {price} {currency}
        </p>
      </div>
    </div>
  );
}

export default Flat;
