import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Changepw } from "./pages/Changepw";
import { SearchResult } from "./components/SearchResult";
import { Naytonohjaimet } from "./pages/Gpu";






function App() {
  return (
    <>
    <Header />
    <Search />
    <SearchResult />
    <div className="App">
      <Routes>
      
      
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/changepw" element={<Changepw />} />
      <Route path="/naytonohjaimet" element={<Naytonohjaimet />} />
      
      
      
      
      </Routes>
    </div>
    <Footer />
    
    </>
  );
}
export default App;
