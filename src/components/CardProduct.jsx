import React, { useState } from "react";
import Macbook from "../assets/CardProduct/macbook.webp";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function CardProduct({
  img,
  price,
  title,
  description,
  category,
  isNew,
  ofert,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative font-Poppins w-[320px] h-[520px] bg-white cursor-pointer shadow-xl rounded-md hover:-translate-y-5 transition-all">
      <img src={img} alt="mac" className="rounded-t-lg h-1/2 object-cover" />
      <div className="h-1/2 p-5 flex flex-col justify-between">
        <div className="w-full flex flex-col justify-between gap-2">
          <h1 className="text-xl font-normal">{title}</h1>
          <span className="bg-slate-300 w-1/3 px-2 rounded-xl text-center text-xs text-slate-500 shadow-sm">
            {category}
          </span>
        </div>
        <div className="w-full mt-5 flex justify-start gap-5">
          <h1 className="text-4xl">{price}</h1>
          <h1 className="text-xl font-medium line-through text-slate-300">
            {price}
          </h1>
        </div>
        <div className="mt-10 mb-4 flex w-full">
          <AiFillStar className="text-yellow-400 text-2xl" />
          <AiFillStar className="text-yellow-400 text-2xl" />
          <AiFillStar className="text-yellow-400 text-2xl" />
          <AiFillStar className="text-yellow-400 text-2xl" />
          <AiFillStar className="text-yellow-400 text-2xl" />
          <h3 className="text-slate-400 ml-4">20k reviews</h3>
        </div>
        <div className="w-full flex justify-start gap-2">
          <button className="w-1/2 bg-green-600 rounded-sm p-2 shadow-lg text-white font-medium hover:scale-105 transition-all">
            Add to cart
          </button>
          <div
            onClick={handleLike}
            className="w-10 h-10 flex justify-center items-center shadow-lg rounded-sm bg-slate-200 hover:scale-105 transition-all "
          >
            {/* <AiFillHeart className="text-2xl text-slate-400" /> */}
            {isLiked ? (
              <AiFillHeart className="text-2xl text-red-500 transition-all" />
            ) : (
              <AiFillHeart className="text-2xl text-slate-400 transition-all" />
            )}
          </div>
          <div className="w-10 h-10 flex justify-center items-center shadow-lg rounded-sm bg-slate-200 hover:scale-105 transition-all">
            <AiFillHeart className="text-2xl text-red-500" />
          </div>
        </div>
      </div>
      {isNew && (
        <div className="absolute top-5 right-2 bg-green-500 text-white px-2 py-1 rounded-bl-md">
          New
        </div>
      )}
      {ofert && (
        <div className="absolute top-5 left-2 bg-red-500 text-white px-2 py-1 rounded-br-md">
          {ofert + "% OFF"}
        </div>
      )}
    </div>
  );
}
