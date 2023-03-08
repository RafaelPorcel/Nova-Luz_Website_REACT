import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Offers from './pages/Offers';
import AboutUs from './pages/AboutUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Map from './components/aboutUs_comp/Map_aboutUS';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/services',
    element: <Services></Services>
  },
  {
    path: '/offers',
    element: <Offers></Offers>
  },
  {
    path: '/aboutUs',
    element: <AboutUs></AboutUs>
  },
  {
    path: '/mapAboutUs',
    element: <Map></Map>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
