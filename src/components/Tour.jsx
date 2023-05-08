import React from "react";

const Tour = ({ name, image, info, price, id, removeTour }) => {
  const [isToggled, setIsToggled] = React.useState(false);
  const toggle = () => setIsToggled((prevState) => !prevState);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isToggled ? info : `${info.substring(0, 200)}...`}

          <button className="info-btn" onClick={toggle}>
            {" "}
            {isToggled ? "Show less" : "Read more"}
          </button>
        </p>

        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          remove tour
        </button>
      </div>
    </article>
  );
};

export default Tour;
