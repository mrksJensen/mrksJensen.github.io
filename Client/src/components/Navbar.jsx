import { useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="4. sem. logo" w={40} h={40} className="rounded" />
        <span>mrksJensen's Portefølje</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="!cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'X' : '☰'}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? '-right-0' : '-right-[100%]'
          }`}
        >
          <Link to="/">Hjem</Link>
          {/* <Link to="/">Webudvikling & Frontend-teknologier</Link>
            <Link to="/">Automatisering & Scripting</Link> */}
          <Link to="/">Om</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-white text-black">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center justify-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Hjem</Link>
        {/* <Link to="/">Webudvikling & Frontend-teknologier</Link>
            <Link to="/">Automatisering & Scripting</Link> */}
        <Link to="/">Om</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-white text-black">Login👋</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
