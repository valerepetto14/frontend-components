import React from "react";
import Macbook from "../assets/macbook.webp";
import { AiFillHeart }  from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function CardProduct({ img, price, title, description, category }) {
    return (
        <div className="w-[320px] h-[520px] bg-white cursor-pointer shadow-xl rounded-md hover:-translate-y-5 transition-all">
            <img src={img} alt="mac" className="rounded-t-lg" />
            <div className="h-1/2 p-5 flex flex-col justify-between">
                <div className="w-full flex flex-col justify-between gap-2">
                    <h1 className="text-xl font-medium">{title}</h1>
                    <span className="bg-slate-300 w-1/3 px-2 rounded-xl text-center text-xs text-slate-600 shadow-sm">{category}</span>
                </div>
                <div className="w-full mt-5 flex justify-start gap-5">
                    <h1 className="text-4xl font-medium">{price}</h1>
                    <h1 className="text-xl font-medium line-through text-slate-300">{price}</h1>
                </div>
                <div className="mt-10 mb-4 flex w-full">
                    <AiFillStar className="text-yellow-400 text-2xl" />
                    <AiFillStar className="text-yellow-400 text-2xl" />
                    <AiFillStar className="text-yellow-400 text-2xl" />
                    <AiFillStar className="text-yellow-400 text-2xl" />
                    <AiFillStar className="text-yellow-400 text-2xl" />
                    <h3 className="text-slate-400 font-light ml-4">20k reviews</h3>
                </div>
                <div className="w-full flex justify-start gap-2">
                    <button className="w-1/2 bg-green-600 rounded-md p-2 shadow-lg text-white font-medium hover:scale-105 transition-all">
                        Add to cart
                    </button>
                    <div className="w-10 h-10 flex justify-center items-center shadow-lg rounded-md bg-slate-200 hover:scale-105 transition-all ">
                        <AiFillHeart className="text-2xl text-slate-400" />
                    </div>
                    <div className="w-10 h-10 flex justify-center items-center shadow-lg rounded-md bg-slate-200 hover:scale-105 transition-all">
                        <AiFillHeart className="text-2xl text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}