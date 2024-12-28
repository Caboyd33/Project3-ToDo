//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from './pages/Homepages/Homepages';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import NavbarMenu from './Component/NavbarMenu/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />  {/* Homepages will render on '/' */}
          <Route path="/ContactUsPage" element={<ContactUsPage />} /> {/* Contact Us page on '/contactuspage' */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




