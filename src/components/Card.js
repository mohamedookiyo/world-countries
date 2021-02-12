import { Link } from "react-router-dom";

// Card component
const Card = () => {
  return (
    <Link to="/country/name" className="card">
      <img
        className="card__image"
        src="https://images.unsplash.com/photo-1491508624904-7669836a24ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
        alt="Sunset"
      />

      <div className="card__text">
        <h2 className="card__title">Country Name</h2>
        <div className="card__data">
          <p>
            Population: <span>423,647,101</span>
          </p>
          <p>
            Region: <span>Europe</span>
          </p>
          <p>
            Capital: <span>Country Capital</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
