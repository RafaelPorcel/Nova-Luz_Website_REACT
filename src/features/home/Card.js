import { Link } from "react-router-dom";

const Card = ({ image, alt, titleCard, message, page, button }) => {
    return (
        <div className="card col-md-4" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={alt}></img>
            <div className="card-body">
                <h3 className="card-title">{titleCard}</h3>
                <p className="card-text">{message}</p>
            </div>
            <Link to={page} className="btn">{button}</Link>
        </div>
    )
};
export default Card;