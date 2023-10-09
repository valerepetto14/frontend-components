import { AiFillHeart } from "react-icons/ai";
import LogoTwitter from "../assets/Logo_Twitter.png";

const ToolCard = ({ tool }) => {
  return (
    <div className="h-[400px] w-[350px]  group-hover:blur-sm hover:!blur-none rounded-xl shadow-2xl font-Poppins bg-white p-8 flex flex-col hover:scale-105 duration-300">
      <div className="w-full flex justify-start gap-5">
        <img src={LogoTwitter} alt="logo" className="h-24 w-24 rounded-full" />
        <div className="flex flex-col gap-2 mt-3">
          <h2 className="text-lg font-medium">Twitter</h2>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs p-1 bg-blue-500 text-white text-center rounded-2xl">
              Social media
            </span>
            <span className="text-xs p-1 bg-blue-500 text-white text-center rounded-2xl">
              Social media
            </span>
          </div>
        </div>
      </div>
      <div className="w-full font-light text-sm mt-5 text-justify">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          quasi natus, eius magni ratione nam repellendus, totam architecto esse
          at, rem et quisquam ea corporis commodi rerum sequi maiores harum.
        </p>
      </div>
      {/*FOR PROGRAMMERS*/}
      <div className="w-full mt-10 flex gap-2">
        <span className="border rounded-xl px-2 py-1 border-slate-300 text-xs font-medium text-slate-400">
          For programmers
        </span>
        <span className="border rounded-xl px-2 py-1 border-slate-300 text-xs font-medium text-slate-400">
          For programmers
        </span>
      </div>
    </div>
  );
};

export default ToolCard;
