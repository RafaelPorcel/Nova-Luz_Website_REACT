// import Item from './Item_carousel';
// import { dataItem } from './dataItem_carousel';

// const Carousel = (props) => {
//     return (
//         <div id="carouselExampleIndicators" classaName="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-inner">
//                 {dataItem.map(item => (
//                     <Item src={item.img} alt={item.alt}></Item>
//                 ))}
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Anterior</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Siguiente</span>
//             </button>
//         </div>
//     );
// };
// export default Carousel;



import Item from './Item_carousel';
import { dataItem } from './dataItem_carousel';

const Carousel = (props) => {
    let index = 0;
    return (
        <div id="carouselExampleFade" className="carousel carousel-fade slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {dataItem.map(item => {
                    const active = index === 0 ? 'active' : '';
                    index++;
                    return <Item key={index} img={item.img} alt={item.alt} active={active} />
                })}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};

export default Carousel;

