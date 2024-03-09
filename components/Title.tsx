interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <div className="flex items-center gap-4 text-2xl group pb-8">
      <h3 className="font-semibold relative overflow-hidden text-blue-200">
        {text}
      </h3>
    </div>
  );
};

export default Title;