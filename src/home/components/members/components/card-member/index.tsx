import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface CardMemberProps {
  memberPhoto: string;
  memberName: string;
  linkedin: string;
  github: string;
}

export function CardMember({
  github,
  linkedin,
  memberName,
  memberPhoto,
}: CardMemberProps) {
  return (
    <div className="flex flex-col bg-gray-50 w-52 px-10 py-5 rounded-lg items-center gap-3">
      <img
        src={memberPhoto}
        alt="foto do membro da equipe"
        className="rounded-full"
      />
      <p className="text-lg whitespace-nowrap font-medium">{memberName}</p>
      <div className="flex items-center gap-4">
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          className="text-2xl hover:text-schneiderGreen"
        >
          <AiFillLinkedin />
        </a>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          className="text-2xl hover:text-schneiderGreen"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
