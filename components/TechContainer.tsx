type Props = {
    title: string;
    link: string;
  };
  
  const TechContainer = ({ title, link }: Props) => {
    return (
      <a href={link} target="_blank">
        <p className="border border-customBlue px-6 py-2 text-lg tracking-wide bg-transparent text-gray-300 hover:text-white hover:border-blue-600 hover:bg-customBlue rounded-lg duration-300">
          {title}
        </p>
      </a>
    );
  };
  
  export default TechContainer;