export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "GfaimYaQuoi",
    techs: ["ReactJS (TypeScript)", "Symfony"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Resk-You @Helpp-life",
    techs: ["Flutter"],
    link: "/",
  },
  {
    title: "BewebCademy @Beweb",
    techs: ["ReactJS", "TypeScript", "NodeJS"],
    link: "https://github.com/Thomas-Marie/BewebCademy",
  },
];

export default projects;
