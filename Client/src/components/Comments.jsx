import axios from 'axios';
import Comment from './Comment';
import { useQuery } from '@tanstack/react-query';

const fetchComments = async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
};

const Comments = ({ postId }) => {
  /* const { user } = useUser();
  const { getToken } = useAuth(); */

  const { isPending, error, data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return 'Indlæser...';
  if (error) return 'noget gik galt' + error.message;
  if (!data) return 'kommentar ikke fundet';

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-800 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Skriv en kommentar..."
          className="w-full p-4 rounded-xl"
        ></textarea>
        <button className="bg-yellow-700 px-4 py-3 text-gray-800 font-medium rounded-xl">
          Send
        </button>
      </div>
      {data.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
