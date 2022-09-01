import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Paystack from "./components/Paystack";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category:category_id" element={<CategoryPage/>} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/payment" element={<Paystack/>}/>
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;
