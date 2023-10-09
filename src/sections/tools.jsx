import ToolCard from "../components/ToolCard";

const Tools = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap gap-10 justify-center items-center bg-slate-100">
      <div className="flex flex-wrap gap-10 h-[400px] justify-center">
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
    </div>
  );
};

export default Tools;
