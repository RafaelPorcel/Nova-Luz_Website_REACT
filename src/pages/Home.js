import 'bootstrap/dist/css/bootstrap.css';
import MenuNav from '../components/MenuNav';
import MainContent from '../features/home/MainContent';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <MenuNav></MenuNav>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default Home;
