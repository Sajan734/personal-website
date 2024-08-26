import Image from "next/image";
import { NavBar } from "./components/navbar";


export default function Home() {
  return (
    <main className="bg-white text-black">
      <NavBar />
      <div className="h-screen content-center px-20 animated-background bg-gradient-to-r from-blue-950 via-purple-950 to-indigo-950">
        <h1 className="text-6xl font-extrabold text-center my-5 text-white">Sajan Paventhan</h1>
        <h2 className="text-2xl text-center my-5 text-white">I'm a 17 year old IB student with a passion for computer science.</h2>
        <div className="text-white my-5 text-center text-3xl md:text-4xl [text-wrap:balance]">I'm also interested in <span className="text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden font-extrabold">
            <ul className="animate-text-slide block text-left leading-tight [&_li]:block">
                <li>Puzzles</li>
                <li>Tech</li>
                <li>Chemistry</li>
                <li>Math</li>
                <li>Physics</li>
                <li aria-hidden="true">Puzzles</li>
            </ul>
          </span>
        </div>
        {/* add more buttons */}
        <div className="text-center">
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* about me section */}
      <div className="bg-white p-20 mx-10 md:mx-24 lg:mx-48 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <h1 className="text-4xl">About Me</h1>
          <p className="text-lg">e</p>
        </div>
        <div className="col-span-1">
          <h1 className="text-4xl">About Me</h1>
          <p className="text-lg">e</p>
        </div>
      </div>
      {/* skills */}
      <div className="bg-blue-500">
        <h1 className="text-4xl">Skills</h1>
      </div>
      {/* initiatives */}
      <div className="bg-blue-200">
        <h1 className="text-4xl">Initiatives</h1>
      </div>
      {/* awards */}
      <div className="bg-blue-500">
        <h1 className="text-4xl">Awards</h1>
      </div>
      {/* projects */}
      <div className="bg-blue-200">
        <h1 className="text-4xl">Projects</h1>
      </div>
      {/* contact me */}
      <div className="bg-blue-500">
        <h1 className="text-4xl">Contact Me</h1>
      </div>
    </main>
  );
}
