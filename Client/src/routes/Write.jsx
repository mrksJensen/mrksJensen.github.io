import { useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Indlæser...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">Du skal være logget ind!</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Lav nyt indlæg</h1>
      <form className="flex flex-col gap-6 mb-6 flex-1">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-800 bg-slate-50">
          Tilføj cover billede
        </button>
        <input
          type="text"
          placeholder="Overskrift"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Vælg valgfag
          </label>
          <select name="cat" id="" className="p-2 rounded-xl bg-slate-50 shadow-md">
            <option value="Generalt">Generalt</option>
            <option value="Webudvikling-&-Frontend-teknologier">
              Webudvikling & Frontend-teknologier
            </option>
            <option value="Automatisering-&-Scripting">Automatisering & Scripting</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-slate-50 shadow-md"
          name="desc"
          placeholder="En kort indledning..."
        ></textarea>
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-slate-50 shadow-md" />
        <button className="bg-yellow-700 text-gray-800 font-medium rounded-xl mt-7 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
