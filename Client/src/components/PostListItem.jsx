import { Link, useParams } from 'react-router-dom';
import Image from './Image';
import { format } from 'timeago.js';

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-xl object-cover" w="735" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex item-center gap-2 text-slate-700 text-sm">
          <span>Skrevet af</span>
          <Link className="text-yellow-700">{post.user.username}</Link>
          <span>i</span>
          <Link className="text-yellow-700" to={`/posts?cat=${post.category}`}>
            {post.category}
          </Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-yellow-700 text-sm">
          Læs mere
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
