import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Carouselli } from "./components/Carouselli";

import Kortti from "./components/Kortti";
import { Search } from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import { Home } from "./pages/Home";



function App() {
  return (
    <>
    <Header />
    <Search />
    <div className="App">
      <Routes>
      
      
      <Route path="/" element={<Home />} />
      
      
      </Routes>
    </div>
    <Footer />
    
    </>
  );
}
export default App;
