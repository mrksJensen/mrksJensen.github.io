import { Link } from 'react-router-dom';
import Search from './Search';

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Søg</h1>
      <Search />
      <h1 className="mb-4 text-sm font-medium">Filter</h1>
      <h1 className="mb-4 text-sm font-medium">Valgfag</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="Newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Nyeste
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Mest populære
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Ældste
        </label>
        <Link className="underline" to="/posts">
          Alle
        </Link>
        <Link className="underline" to="/posts?cat=Webudvikling-Frontend-teknologier">
          Webudvikling & Frontend-teknologier
        </Link>
        <Link className="underline" to="/posts?cat=Automatisering-Scripting">
          Automatisering & Scripting
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
