import Image from "next/image";
import Pfp from "../public/img/p.png";
import {MdEmail} from "react-icons/md"
import {AiFillGithub} from "react-icons/ai";
import {FiArrowUpRight} from "react-icons/fi"

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-customBlue p-2 object-cover"
          src={Pfp}
          alt="Pfp"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
          <h1 className="text-5xl font-bold text-white">jvanjeddz</h1>
        <h3 className="text-xl md:text-2xl font-semibold text-blue-200 bg-clip-text">
          CS student
        </h3>
        <div className="text-base tracking-wide text-center md:text-left">
        <a href="mailto:jvanjeddz@proton.me">
          <div className="flex items-center py-4 hover:text-blue-200">
          <p><MdEmail /></p>
          <p>
            : jvanjeddz@proton.me
          </p>
          <FiArrowUpRight />
          </div>
          </a>
          <a href="https://github.com/jvanjeddz">
          <div className="flex items-center py-4 hover:text-blue-200">
            <p><AiFillGithub /></p>
            <p>: jvanjeddz</p>
          <FiArrowUpRight />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;