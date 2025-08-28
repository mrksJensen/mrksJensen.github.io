import { Link } from 'react-router-dom';

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
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          /* class="bi bi-search"  */
          viewBox="0 0 20 20"
          stroke="gray"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input type="text" placeholder="Søg efter indlæg..." className="bg-transparent" />
      </div>
    </div>
  );
};

export default MainCategories;
