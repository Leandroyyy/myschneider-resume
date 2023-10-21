import { CardMember } from "./components/card-member";
import { Member } from "./types";

export function Members() {
  const membersList: Member[] = [
    {
      name: "Leandro Cavallari",
      linkedin: "leandro-cavallari",
      github: "leandroyyy",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQFg1fp96H9kJQ/profile-displayphoto-shrink_800_800/0/1673319396935?e=1703116800&v=beta&t=6fRKiXyfABX2qEKeq9HioD7DIIlXkO7aEpNE79GltOc",
    },
    {
      name: "Sofia Sawczenko",
      linkedin: "sofia-sawczenko",
      github: "sofiasawczenko",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQHrklTRqRiz6Q/profile-displayphoto-shrink_400_400/0/1696074777533?e=1703116800&v=beta&t=oXyG2bz1wxjGrBY1WSK9xqdaBndFK58mxPzkWEiUmoc",
    },
    {
      name: "João Belluzzo",
      linkedin: "bellujrb",
      github: "bellujrb",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQFq4EqMHAtkMA/profile-displayphoto-shrink_400_400/0/1696221827029?e=1703116800&v=beta&t=RPHWoixCz1XUy47u7_nBLtkKurKu9d3RxG2YE7PiL5s",
    },
    {
      name: "Gabriel Tavares",
      linkedin: "gabriel-tavares-7749b1266",
      github: "",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQHCAJ9OuokbGA/profile-displayphoto-shrink_400_400/0/1686755689297?e=1703116800&v=beta&t=ahv7lu9M01m3d7yzXUnehScuQyWNCmy5n5wX-1goq6g",
    },
    {
      name: "Breno Perrotti",
      linkedin: "breno-perrotti",
      github: "breperrotti",
      photo:
        "https://avatars.githubusercontent.com/u/80834648?v=4",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-20">
      <span className="bg-schneiderGreen flex items-center justify-center w-96 p-4 shadow-xl rounded">
        <h1 className="text-white text-3xl font-bold">Equipe</h1>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-20">
        {membersList.map((member) => {
          return (
            <CardMember
              memberName={member.name}
              linkedin={member.linkedin}
              github={member.github}
              memberPhoto={member.photo}
            />
          );
        })}
      </div>
    </div>
  );
}
