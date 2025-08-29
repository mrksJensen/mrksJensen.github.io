import { Link, useSearchParams } from 'react-router-dom';
import Search from './Search';

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get('sort') !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get('cat') !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };

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
            onChange={handleFilterChange}
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Nyeste
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Mest populære
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-700 cursor-pointer rounded-sm bg-slate-50 checked:bg-yellow-700"
          />
          Ældste
        </label>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('')}
        >
          Alle
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('Webudvikling-Frontend-teknologier')}
        >
          Webudvikling & Frontend-teknologier
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('Automatisering-Scripting')}
        >
          Automatisering & Scripting
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
