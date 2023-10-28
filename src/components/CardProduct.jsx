import React from "react";

function CardProduct({ image, title, description, price, category, rate }) {
    function getEmojis(valoracion){
        var numEmojis = ""
        for(let i=0; i < parseInt(valoracion) ; i++){
            numEmojis += "⭐"
        }
        return numEmojis
    }
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="w-1/3 bg-cover bg-landscape">
        <img src={image} />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900 line-clamp-1">{title}</h1>
        <p className="mt-2 mb-2 text-sm text-gray-600 line-clamp-3">{description}</p>
        <div className="my-4">
        {
            getEmojis(rate)
        }
        </div>
        <span className="rounded-full  bg-black px-3 py-1 text-sm font-semibold text-white">
          {category}
        </span>
       
       
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-xl font-bold text-gray-700">{`S/${price}`}</h1>
          <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
