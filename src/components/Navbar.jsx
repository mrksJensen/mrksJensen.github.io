import { useState } from "react"

const Navbar = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */} 
        <div className="flex items-center gap-4 text-2xl font-bold">
            <img src="/logo.png" className="h-8 w-8 rounded-full" alt="" />
            <span>mrksJensen Portfolio</span>
        </div>
        {/* MOBILE MENU */} 
        <div className="md:hidden">
                {/* MOBILE BUTTON */}
            <div className="!cursor-pointer text-4xl" onClick={() => setOpen(prev=> !prev)}>
                {open ? "X" : "☰"}
            </div>
                {/* MOBILE LINK LIST */}
            <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-red-700  transition-all ease-in-out ${
                open ? "-right-0" : "-right-[100%]"
                }`}
                >
                Menu
            </div>
        </div>
        {/* DESKTOP MENU */}  
        <div className="hidden md:flex">Dg</div>
        </div>
  )
}

export default Navbar