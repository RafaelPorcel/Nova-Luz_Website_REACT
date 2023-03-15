import Card from './Card';
import { ServicesCards } from '../../data/ServicesCards';

const MainContent = (props) => {
    return(
        <div className="card mb-3">
            {ServicesCards.map(card => (
                <Card image={card.image} alt={card.alt} title={card.title} message={card.message} />
            ))}
        </div>
    )
}
export default MainContent;