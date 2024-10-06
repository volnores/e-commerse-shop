import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import Error from "./pages/Error/Error";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CardIdPage from "./components/CardIdPage/CardIdPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id" element={<CardIdPage />} />
            <Route path="/wishlist/:id" element={<CardIdPage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
