import React from "react";
import Annoucne from "../components/Annoucne";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Cartitem from "../components/cartitem";
import Total from "../components/Total";
const Cart = () => {
  const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
    // console.log(cart);
  
  return (
    <div>
      <Annoucne />
      <Navbar />
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0" onClick={()=> navigate('/')}>

            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: {cart.length}</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn mt-0" onClick={()=> navigate('/payment')}>Checkout Now</button>
        </div>
      {
        cart?.map((item) => (
          <Cartitem key={item.id} id={item.id} image={item.image} title={item.title} price={item.price}
          quantity = {item.quantity}/>
        ))
      }
        {/* vertically center parent div */}
      <Total/>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
