import Card from './Card_services';
import {cards} from './dataCards_services.js';

const Main = (props) => {
    return(
        <div className="card mb-3">
            {cards.map(card => (
                <Card image={card.image} alt={card.alt} title={card.title} message={card.message} />
            ))}
        </div>
    )
}
export default Main;