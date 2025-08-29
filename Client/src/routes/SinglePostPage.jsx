import { Link, useParams } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';

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
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat
            itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores
            eligendi amet perferendis illum repellat nam quam facilis veritatis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil
            numquam, quam dicta quas exercitationem aliquam maxime quaerat, enim autem
            culpa sequi at! Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis
            vero soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate
            quaerat laborum, voluptatum dicta ipsum.
          </p>
        </div>
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
            <p className="text-sm text-gray-800">
              kdlanfsldf slkfmsælfmk asælk smflkm sdflkm sæ
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="github-mark-white.svg" className="w-7 h-7"></Image>
              </Link>
              <Link>
                <Image src="linkedin-svgrepo-com.svg" className="w-7 h-7"></Image>
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Valgfag</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">Alle</Link>
            <Link className="underline">Webudvikling & Frontend-teknologier</Link>
            <Link className="underline">Automatisering & Scripting</Link>
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
