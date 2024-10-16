interface SkillItemProps {
  title: string;
}

const SkillItem = ({ title }: SkillItemProps) => {
  return (
    <div className="bg-purple-400 p-2 rounded-md border shadow-lg shadow-font text-lg max-lg:text-sm text-center">
      {title}
    </div>
  );
};

export default SkillItem;
