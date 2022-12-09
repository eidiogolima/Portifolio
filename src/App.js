import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Global/Footer';
import Header from './Global/Header';
import Home from './Pages/Home/Home';
import './CSS/Global/Components/Global.css';
import './CSS/Global/Utilits/Colors.css';
import './CSS/Global/Utilits/Typography.css';
import './CSS/Global/Utilits/Buttons.css';
import './CSS/Global/Utilits/Form.css';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
