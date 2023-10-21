import { CardMember } from "./components/card-member";

export function Members() {
  return (
    <div className="flex flex-col items-center gap-20">
      <span className="bg-schneiderGreen flex items-center justify-center w-96 p-4 shadow-xl rounded">
        <h1 className="text-white text-3xl font-bold">Equipe</h1>
      </span>

      <div className="flex flex-col md:flex-row items-center gap-20">
        <CardMember
          github="leandroyyy"
          linkedin="leandro-cavallari"
          memberName="Leandro Cavallari"
          memberPhoto="https://media.licdn.com/dms/image/D4D03AQFg1fp96H9kJQ/profile-displayphoto-shrink_800_800/0/1673319396935?e=1703116800&v=beta&t=6fRKiXyfABX2qEKeq9HioD7DIIlXkO7aEpNE79GltOc"
        />

        <CardMember
          github="leandroyyy"
          linkedin="leandro-cavallari"
          memberName="Leandro Cavallari"
          memberPhoto="https://media.licdn.com/dms/image/D4D03AQFg1fp96H9kJQ/profile-displayphoto-shrink_800_800/0/1673319396935?e=1703116800&v=beta&t=6fRKiXyfABX2qEKeq9HioD7DIIlXkO7aEpNE79GltOc"
        />

        <CardMember
          github="leandroyyy"
          linkedin="leandro-cavallari"
          memberName="Leandro Cavallari"
          memberPhoto="https://media.licdn.com/dms/image/D4D03AQFg1fp96H9kJQ/profile-displayphoto-shrink_800_800/0/1673319396935?e=1703116800&v=beta&t=6fRKiXyfABX2qEKeq9HioD7DIIlXkO7aEpNE79GltOc"
        />
      </div>
    </div>
  );
}
