import { useState } from 'react';
import PostList from '../components/PostList';
import SideMenu from '../components/SideMenu';
import { useSearchParams } from 'react-router-dom';

const prettyCat = (cat) => {
  if (!cat) return '';
  const s = decodeURIComponent(cat)
    .replace(/-/g, ' ') // bindestreger -> mellemrum
    .replace(/\s*&\s*/g, ' & '); // pænere &-tegn
  return s.replace(/\b\w/g, (m) => m.toUpperCase()); // stor forbogstav
};

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const cat = searchParams.get('cat');
  const heading = cat ? `${prettyCat(cat)} indlæg` : 'Alle indlæg';

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">{heading}</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-yellow-700 text-gray-800 px-4 py-2 rounded-2xl mb-4 md:hidden "
      >
        {open ? 'Luk' : 'Filtrer eller Søg'}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
