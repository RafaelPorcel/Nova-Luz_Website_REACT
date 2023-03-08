import Text from './Text_offers'
import Carousel from './Carousel';

const Main = () => {
    return (
        <section className="section row align-items-start justify-content-center">
            <div className="titulo_sobre col-sm-6 text-center">
                <Text></Text>
                <Carousel></Carousel>
            </div>
        </section>
    );
}
export default Main;