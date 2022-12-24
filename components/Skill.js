import VerifiedIcon from "@mui/icons-material/Verified";

const Skill = ({ skill }) => {
  return (
    <div className="flex items-center  m-2">
      <VerifiedIcon className="text-gray-600" fontSize="small" />
      <span className="ml-1 text-lg font-bold text-gray-500">{skill}</span>
    </div>
  );
};

export default Skill;
