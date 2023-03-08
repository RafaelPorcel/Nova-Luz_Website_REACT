import 'bootstrap/dist/css/bootstrap.css';
import MenuNav from '../components/MenuNav';
import Main from '../components/home_comp/Main_home';
import Footer from '../components/Footer';

function Index() {
  return (
    <div>
      <MenuNav></MenuNav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Index;
