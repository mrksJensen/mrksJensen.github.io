import { useAuth, useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import Quill from 'quill';
import ResizeModule from '@botom/quill-resize-module';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Upload from '../components/Upload';

if (typeof window !== 'undefined') {
  window.Quill = Quill;
}

Quill.register('modules/resize', ResizeModule);

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState('');
  const [cover, setCover] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState('');
  const [progress, setProgress] = useState('');

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);
  useEffect(() => {
    video &&
      setValue((prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`);
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success('Indlæg oprettet');
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Indlæser...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">Du skal være logget ind!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || '',
      title: formData.get('title'),
      category: formData.get('category'),
      desc: formData.get('desc'),
      content: value,
    };
    console.log(data);

    mutation.mutate(data);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
    resize: {
      locale: {
        altTip: 'Hold alt for Zoom',
        floatLeft: 'Venstre',
        floatRight: 'Højre',
        center: 'Centrer',
        restore: 'Gendan',
      },
      toolbar: {
        alingTools: false,
      },
    },
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Lav nyt indlæg</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-6 flex-1">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button
            type="button"
            className="w-max p-2 shadow-md rounded-xl text-sm text-gray-800 bg-slate-50"
          >
            Tilføj cover billede
          </button>
        </Upload>

        <input
          type="text"
          placeholder="Overskrift"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Vælg valgfag
          </label>
          <select name="category" id="" className="p-2 rounded-xl bg-slate-50 shadow-md">
            <option value="Generelt">Generelt</option>
            <option value="Webudvikling-Frontend-teknologier">
              Webudvikling & Frontend-teknologier
            </option>
            <option value="Automatisering-Scripting">Automatisering & Scripting</option>
            <option value="learning-plan">Læringsplaner</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-slate-50 shadow-md"
          name="desc"
          placeholder="En kort indledning..."
        ></textarea>

        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2 ">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🖼️
            </Upload>
            <Upload type="image" setProgress={setProgress} setData={setVideo}>
              📹
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-slate-50 shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
            modules={modules}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-yellow-700 text-gray-800 font-medium rounded-xl mt-7 p-2 w-36 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? 'Indlæser...' : 'Send'}
        </button>
        {'Fremskridt:' + progress + '%'}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
