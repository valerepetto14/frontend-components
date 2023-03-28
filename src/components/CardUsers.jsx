import React from "react";


function CardUsers ({ img }) {
    return (
        <div className="font-Poppins w-[320px] h-[520px] bg-indigo-700 opacity-90 rounded-xl flex flex-col items-center justify-evenly p-10 cursor-pointer group-hover:blur-sm hover:!blur-none hover:-translate-y-3 transition-all shadow-lg">
            <img className="rounded-full w-3/4 h-56 object-cover" src={img} alt="" />
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
                <h1 className="text-2xl text-white font-bold">John Doe</h1>
                <h1 className="text-lg text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h1>
            </div>
            <button className="bg-white p-2 rounded-3xl hover:scale-125 transition-all">
                More info
            </button>
        </div>
    )
}

export default CardUsers;