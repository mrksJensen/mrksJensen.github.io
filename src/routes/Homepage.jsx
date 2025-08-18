import {Link} from "react-router-dom"
import MainCategories from "../components/MainCategories"
import PostList from "../components/PostList"

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* BREADCRUMB */}
      <div className="flex gap-4">
<Link to="/">Hjem</Link>
<span>☕︎</span>
<span className="text-yellow-800">Lærings opslag</span>

      </div>
      {/* INTRO */}
      <div className="flex item-center justify-between">
          {/* titles */}
          <div className="">
            <h1 className="text-slate-800 text-2xl md:text-5xl lg:text-6xl font-bold">
              sfsdfsgdhfghgfhssfgdf sfsdfsgdhfghgfhssfgdf 
            </h1>
            <p className="mt-8 text-md md:text-xl">
              asdasdasdadsa asdasdasdadsa 
              asdasdasdadsa asdasdasdadsa 
                
               
            </p>
          </div>
          {/* animated bottun */}
          <Link to="/write" className=" md:block relative inline-block w-[200px] h-[200px]">
  {/* roterende tekst */}
  <svg viewBox="0 0 200 200" className="w-full h-full animate-spin animatedButton">
    <defs>
      {/* top-halvcirkel, venstre -> højre */}
      <path id="arcTop" d="M 25,100 A 75,75 0 0 1 175,100" />
      {/* bund-halvcirkel, højre -> venstre så teksten står opret */}
      <path id="arcBottom" d="M 175,100 A 75,75 0 0 1 25,100" />
    </defs>

    <text className="text-lg tracking-widest">
      <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
        Lav nyt indlæg .
      </textPath>
    </text>

    <text className="text-lg tracking-widest">
      <textPath href="#arcBottom" startOffset="50%" textAnchor="middle">
        Hvad har jeg lært .
      </textPath>
    </text>
  </svg>

  {/* ikon centreret i midten af boksen, ikke afhængig af SVGens tekst-boks */}
  <span className="pointer-events-none absolute inset-0 grid place-items-center">
    <span className="w-20 h-20 bg-yellow-800 rounded-full grid place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="70" 
      height="70" 
      fill="currentColor" 
      /* class="bi bi-crosshair2"  */
      viewBox="0 0 16 16">
  <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
</svg>
    </span>
  </span>
</Link>
      </div>
      {/* Categories */}
      <MainCategories>

      </MainCategories>
      {/* FEATURE */}
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-slate-800">Seneste opslag</h1>
        <PostList/>
      </div>
    </div>
  )
}

export default Homepage