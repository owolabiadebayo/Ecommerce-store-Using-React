import React from "react";
import { incrementQuantity, decrementQuantity} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function Counter({quantity,id}) {
  console.log(id);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
        Quantity
        <div className="ml-5 shadow-md flex">
        <button className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer" onClick={() => dispatch(decrementQuantity(id))}>
          -
        </button>
        <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
          {quantity}
        </div>
        <button className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer" onClick={() => dispatch(incrementQuantity(id))}>
          +
        </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
