import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
          <BrowserRouter>
           <Header/>
           <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path="/confirmation" element={<ConfirmedBooking />} />
          </Routes>
          <Footer/>
          </BrowserRouter>
  );
}

export default App;
