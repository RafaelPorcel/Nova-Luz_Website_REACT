import { CarouselItems } from '../../data/CarouselItems';
import AnnounceOffer from './AnnounceOffer'
import Carousel from '../../components/carousel/Carousel';

const MainContent = () => {
    return (
        <section className="section row align-items-start justify-content-center">
            <div className="titulo_sobre col-sm-6 text-center">
                <AnnounceOffer></AnnounceOffer>
                <Carousel data={CarouselItems}></Carousel>
            </div>
        </section>
    );
}
export default MainContent;