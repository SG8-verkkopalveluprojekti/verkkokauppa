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
<<<<<<< HEAD
import { Admin } from "./pages/Admin_settings";
=======
import { Cpu } from "./pages/Cpu";
import { Emolevyt } from "./pages/Emolevyt";
import { Kotelot } from "./pages/Kotelot";
import { Virtalähteet } from "./pages/Virtalähteet";
import { Muistit } from "./pages/Muisti";
>>>>>>> 54636eca34bac3fa8bac6d08a23772f92ab0a2f7






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
<<<<<<< HEAD
      <Route path="/admin" element ={<Admin />} />
=======
      <Route path="/emolevyt" element={<Emolevyt />} />
      <Route path="/prosessorit" element={<Cpu />} />
      <Route path="/kotelot" element={<Kotelot />} />
      <Route path="/virtalahteet" element={<Virtalähteet />} />
      <Route path="/muistit" element={<Muistit />} />

>>>>>>> 54636eca34bac3fa8bac6d08a23772f92ab0a2f7
      
      
      
      
      </Routes>
    </div>
    <Footer />
    
    </>
  );
}
export default App;
