
import {useSelector} from 'react-redux'

function Total() {
  const cart = useSelector((state) => state.cart)
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
 
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    let total =0 
    let shippingFee = 10
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
      total += item.price * item.quantity + shippingFee
    })
    return {totalPrice, totalQuantity, total}
  }
 
  return (
    <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
          </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>total({getTotal().totalQuantity} items): <strong>${getTotal().totalPrice}</strong> </p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>${getTotal().total}</p>
            </div>
          </div>
        </div>
  )
}

export default Total