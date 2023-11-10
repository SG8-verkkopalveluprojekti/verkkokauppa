import "./App.css";
import { Navi } from "./components/Navi";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Navi />
      <Header />
      tähän avataan verkkokauppa!
      <Cart />
      <Footer />
    </div>
  );
}
export default App;
