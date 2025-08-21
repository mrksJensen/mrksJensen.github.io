import { Link } from 'react-router-dom';
import Image from './Image';

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="PostImg.jpeg" className="rounded-xl object-cover" w="735" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:2/3">
        <Link to="/test" className="text-4xl font-semibold">
          kal mfiogn pklasdmgj sjaf jasd. mfasifmpkasf
        </Link>
        <div className="flex item-center gap-2 text-slate-700 text-sm">
          <span>Skrevet af</span>
          <Link className="text-yellow-700">bent bent</Link>
          <span>i</span>
          <Link className="text-yellow-700">Webudvikling & Frontend-teknologier</Link>
          <span>2 dage siden</span>
        </div>
        <p>
          sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds,
          sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds,
          sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds, sdlmsdlgmsldgædf afdafds,
          sdlmsdlgmsldgædf afdafds,
        </p>
        <Link to="/test" className="underline text-yellow-700 text-sm">
          Læs mere
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
