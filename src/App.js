import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Carouselli } from "./components/Carouselli";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      
      <Header />
      <Cart />
      <Carouselli />
      <Footer />
    </div>
  );
}
export default App;
