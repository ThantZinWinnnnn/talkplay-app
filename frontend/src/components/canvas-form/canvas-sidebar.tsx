import { Separator } from "../ui/separator";
const CanvasSidebar = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-[50px] bg-slate-500"></div>
      <Separator />
      <h2 className="text-lg font-semibold text-center">Tools</h2>
    </div>
  );
};

export default CanvasSidebar;
