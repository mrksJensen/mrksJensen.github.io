import Image from './Image';

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      Comment
      <div className="flex items-center gap-4">
        <Image
          src="userImg.png"
          className="rounded-full w-10 h-10 object-cover"
          w="40"
          h="40"
        ></Image>
        <span className="font-medium">Vlad bob</span>
        <span className="text-sm text-gray-800"> 2 dage siden</span>
      </div>
      <div className="mt-4">
        <p>
          sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds,
          sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds,
          sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds,
          sdlmsdlgmsldgædf afdafds,{' '}
        </p>
      </div>
    </div>
  );
};

export default Comment;
