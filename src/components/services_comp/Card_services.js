const Card = ({ image, alt, title, message }) => {
    return (
    <div className="row g-0">
        <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start"
                alt={alt}></img>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{message}</p>
            </div>
        </div>
    </div>
    )
}
export default Card;