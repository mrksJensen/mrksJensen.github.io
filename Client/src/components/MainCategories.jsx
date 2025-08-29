import { Link } from 'react-router-dom';
import Search from './Search';

const MainCategories = () => {
  return (
    <div className="hidden md:flex w-full bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-between gap-8">
      {/* links */}
      <div className="flex items-center gap-2 flex-wrap">
        <Link to="/posts" className="bg-yellow-800 text-black rounded-full px-4 py-2">
          Alle indlæg
        </Link>
        <Link
          to="posts?cat=Webudvikling-Frontend-teknologier"
          className="hover:bg-yellow-50 rounded-full px-4 py-2"
        >
          Webudvikling & Frontend-teknologier
        </Link>
        <Link
          to="posts?cat=Automatisering-Scripting"
          className="hover:bg-yellow-50 rounded-full px-4 py-2"
        >
          Automatisering & Scripting
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* Search */}
      <Search />
    </div>
  );
};

export default MainCategories;
