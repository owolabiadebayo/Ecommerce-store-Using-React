import React from 'react'
import Counter from './Counter';

function Cartitem({id,image,title,price,quantity=0, description}) {
    const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
    const PriceQuantityStyle =
      "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  return (
    <>
    <div className={ProductDivStyle}>
    <div className=" product flex pl-5 self-start">
      <img
        className="product_img w-[7rem]"
        src={image}
        alt="product_img"
      />

      <div className="disc flex items-start justify-between h-auto flex-col ml-6">
        <p>
          <b className="mr-2">ID:</b>{id}
        </p>
        <p>
          <b className="mr-2">Product:</b>{title}
        </p>
        <p>
          <b className="mr-2">Description:</b>{description}
        </p>
        <p className="flex items-center justify-center">
          <b className="mr-2">Color:</b>
          <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
        </p>
        <p>
          <b className="mr-2">Size:</b>M
        </p>
      </div>
    </div>

    {/*Price and Quantity Div*/}
    <div className={PriceQuantityStyle}>
      <Counter quantity={quantity} id={id} key={id} />
      <p className="flex items-center justify-center text-4xl mt-3">
        <b>${price}</b>
      </p>
    </div>
  </div>
   <hr className="mb-7 mt-7 mobile:mt-0" />
   </>
  )
}

export default Cartitem