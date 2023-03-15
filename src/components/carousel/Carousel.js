import CarouselItem from "./CarouselItem";

const Carousel = (props) => {
    return (
        <div id="carouselExampleFade" className="carousel carousel-fade slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {props.data.map((item, index) => {
                    const active = index === 0 ? 'active' : '';
                    return <CarouselItem key={index} img={item.img} alt={item.alt} active={active} />
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

