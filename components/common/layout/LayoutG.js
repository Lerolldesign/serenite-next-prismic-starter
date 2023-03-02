
import dynamic from "next/dynamic";
import NavG from "../menu/navG";

const Cursor = dynamic(() => import("../elements/cursor"), {
  ssr: false,
})


export const LayoutG = ({children }) => {
  return (
    <div className="text-slate-800 bg-stone300 rombus">
       <NavG />
      <Cursor />
      <main>{children}</main>
    </div>
  );
};