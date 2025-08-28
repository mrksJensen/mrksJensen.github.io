import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from './Image';
import { format } from 'timeago.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth, useUser } from '@clerk/clerk-react';

const Comment = ({ comment, postId }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
      toast.success('Kommentar slettet');
    },

    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const { user } = useUser();

  const { getToken } = useAuth();
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className="rounded-full w-10 h-10 object-cover"
            w="40"
            h="40"
          ></Image>
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-800"> {format(comment.createdAt)}</span>
        {user && comment.user.username == user.username && (
          <span
            className="text-xs text-red-300 hover:text-red-600 cursor-pointer"
            onClick={() => mutation.mutate()}
          >
            Slet
            {mutation.isPending && <span>(Sletter...)</span>}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
