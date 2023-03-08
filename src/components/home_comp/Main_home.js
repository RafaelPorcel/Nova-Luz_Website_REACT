import Card from './Card_home';
import { cards } from './dataCards_home.js';//se importan las variables cards ystyle del archivo dataCards para alimentar el componente Card, que son las props del Main

const Main = (props) => {
    return (
        <div className="tarjetas row justify-content-center">
            {cards.map(card => (//hago un mapeo del array cards, y voy reiterando todos sus datos y renderizando el componente Card con ellos
                <Card image={card.image} alt={card.alt} titleCard={card.titleCard} message={card.message} page={card.page} button={card.button} />
            ))}
        </div>
    )
};
export default Main;

