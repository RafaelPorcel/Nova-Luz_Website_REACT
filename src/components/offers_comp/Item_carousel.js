// const Item = ({img, alt}) => {
//     return (
//             <div className="carousel-item active">
//                 <img src={img} className="d-block w-100" alt={alt}></img>
//             </div>
//     );
// };
// export default Item;


const Item = ({img, alt, active}) => {
    return (        
        <div className={`carousel-item ${active}`}>
            <img src={img} className="d-block w-100" alt={alt} />
        </div>        
    );
};

export default Item;
