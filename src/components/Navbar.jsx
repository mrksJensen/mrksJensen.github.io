import { useState } from "react";
import Image from "./Image";

const Navbar = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */} 
        <div className="flex items-center gap-4 text-2xl font-bold">
            <Image src="logo.png" alt="4. sem. logo" w={40} h={40} className="rounded" />
            <span>mrksJensen's Portefølje</span>
        </div>
        {/* MOBILE MENU */} 
        <div className="md:hidden">
                {/* MOBILE BUTTON */}
            <div className="!cursor-pointer text-4xl" onClick={() => setOpen(prev=> !prev)}>
                {open ? "X" : "☰"}
            </div>
                {/* MOBILE LINK LIST */}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
                open ? "-right-0" : "-right-[100%]"
                }`}
                >
                <a href="/">Hjem</a>
            <a href="/">Webudvikling & Frontend-teknologier</a>
            <a href="/">Automatisering & Scripting</a>
            <a href="/">Om</a>
            <a href="">
                <button className="py-2 px-4 rounded-3xl bg-white text-black">Login 👋</button></a>
            </div>
        </div>
        {/* DESKTOP MENU */}  
        <div className="hidden md:flex items-center justify-center gap-8 xl:gap-12 font-medium">
            <a href="/">Hjem</a>
            <a href="/">Webudvikling & Frontend-teknologier</a>
            <a href="/">Automatisering & Scripting</a>
            <a href="/">Om</a>
            <a href="">
                <button className="py-2 px-4 rounded-3xl bg-white text-black">Login👋</button></a>
        </div>
        </div>
  )
}

export default Navbar