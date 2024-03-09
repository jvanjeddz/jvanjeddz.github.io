import Image from "next/image";
interface Props {
  title: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title, link, img }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-full border-[1px] border-customBlue overflow-hidden relative rounded-lg group">
        <Image
          className="w-full"
          width={350}
          height={140}
          src={img}
          alt="Image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-customBlue opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-customBlue text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;