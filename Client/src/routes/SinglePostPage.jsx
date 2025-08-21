import { Link } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Hlaskfnls lkasmdl. oasnoijfdsogin
          </h1>
          <div className="flex items-center gap-2 text-slate-700 text-sm">
            <span>Skrevet af</span>
            <Link className="text-yellow-700">bent bent</Link>
            <span>D.</span>
            <Link className="text-yellow-700">frontend</Link>
            <span>2 dage siden</span>
          </div>
          <p className="text-slate-800 font-medium">
            afkmfosmfodmaogkdg afkmfosmfodmaogkdg afkmfosmfodmaogkdg afkmfosmfodmaogkdg
            afkmfosmfodmaogkdg afkmfosmfodmaogkdg afkmfosmfodmaogkdg afkmfosmfodmaogkdg
            afkmfosmfodmaogkdgafkmfosmfodmaogkdgafkmfosmfodmaogkdg afkmfosmfodmaogkdg
            afkmfosmfodmaogkdg afkmfosmfodmaogkdgafkmfosmfodmaogkdg afkmfosmfodmaogkdg
            afkmfosmfodmaogkdg
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="PostImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      <div className=""></div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
            pede justo, ringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
            quis, feugiat a, tellus. Phasellus viverra nulla ut metus
          </p>
          <p>
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc,
          </p>
          <p>
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc,
          </p>
          <p>
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc,
          </p>
          <p>
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc,
          </p>
          <p>
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc,
          </p>
          <p>
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
            amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc,
          </p>
        </div>
        {/* menu */}
        <div className="flex-col px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Forfatter</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.png"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              ></Image>
              <Link className="text-yellow-700">Vladimir bob</Link>
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
          <PostMenuActions />
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
      <Comments />
    </div>
  );
};

export default SinglePostPage;
