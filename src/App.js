import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Global/Footer';
import Header from './Global/Header';
import Home from './Pages/Home/Home';
import './CSS/Global/Components/Global.css';
import './CSS/Global/Utilits/Colors.css';
import './CSS/Global/Utilits/Typography.css';
import './CSS/Global/Utilits/Buttons.css';
import './CSS/Global/Utilits/Form.css';
import ReactGA from 'react-ga'; 

const TRACKING_ID = "UA-252728847-1";

ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    
  );
}

export default App;
