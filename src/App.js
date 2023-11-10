import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Carouselli } from "./components/Carouselli";
import Kortti from "./components/Kortti";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      
      
      <Header />
      <Cart />
      <Carouselli />
      <Kortti />
      <Footer />
    </div>
  );
}
export default App;
