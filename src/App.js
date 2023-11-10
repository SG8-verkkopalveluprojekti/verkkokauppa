import "./App.css";
import { Navi } from "./components/Nav";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      tähän avataan verkkokauppa!
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
