export interface TeamMember {
  id: number;
  name: string;
  image: string;
  role: string;
  specialty: string;
  skills: string[];
  email?: string;
  github?: string;
  whatsapp?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "أحمد بدوي رمضان",
    role: "طالب بحاسب آلي مميز العبور - المستوى الثاني",
    specialty: "مطور الواجهات الأمامية ومصمم تجربة المستخدم (UI/UX Developer)",
    image: "images/team/ahmed_badawy.jpeg",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Vite"],
    email: "ahmedbadawix77x@gmail.com",
    github: "https://github.com/ahmedbadawix77x-gif",
    whatsapp: "01011349165"
  },
  {
    id: 2,
    name: "أحمد جمال شعبان",
    role: "طالب بحاسب آلي مميز العبور - المستوى الثاني",
    specialty: "مصمم ومصنع المحتوى البصري ومونتير الفيديوهات (Video Editor & Motion Designer)",
    image: "images/team/ahmed_gamal.png",
    skills: ["Video Editing", "Motion Graphics", "Adobe Premiere", "After Effects", "Graphic Design"],
    email: "ahmed.gamal@example.com",
    whatsapp: "+201013815378"
  }
];
