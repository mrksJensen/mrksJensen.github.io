import { Link, useParams } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';
import DOMPurify from 'dompurify';

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return 'Indlæser...';
  if (error) return 'noget gik galt' + error.message;
  if (!data) return 'indslag ikke fundet';

  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-slate-700 text-sm">
            <span>Skrevet af</span>
            <Link className="text-yellow-700">{data.user.username}</Link>
            <span>i</span>
            <Link className="text-yellow-700" to={`/posts?cat=${data.category}`}>
              {data.category}
            </Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-slate-800 font-medium">{data.desc}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          {data.img && <Image src={data.img} w="600" className="rounded-2xl" />}
        </div>
      </div>
      <div className=""></div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div
          className="lg:text-lg flex flex-col gap-6 text-justify"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.content),
          }}
        ></div>
        {/* menu */}
        <div className="flex-col px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Forfatter</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                ></Image>
              )}
              <Link className="text-yellow-700">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-800"></p>
            <div className="flex gap-2">
              <Link target="_blank" to="https://github.com/mrksJensen">
                <Image src="github-mark-white.svg" className="w-7 h-7"></Image>
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/markus-jensen-1b4b742b0/"
              >
                <Image src="linkedin-svgrepo-com.svg" className="w-7 h-7"></Image>
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Kategorier</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">Alle</Link>
            <Link className="underline">Webudvikling & Frontend-teknologier</Link>
            <Link className="underline">Automatisering & Scripting</Link>
            <Link className="underline">learning-plan</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Søg</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
