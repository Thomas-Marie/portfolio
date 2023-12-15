type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "thomas.marie97@icloud.com",
  title: "Hi, I’m Thomas 👋",
  // profile: "/profile.webp",
  description:
    "Bonjour ! i'm a *french developer* actively seeking an apprenticeship contract starting in January 2024.\n So far, i had the pleasure to work on *React*, *Typescript*, *NodeJS* and *Flutter*. However i'm also practicing other technologies like *Laravel* and *Symfony*.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/thomas-marie-581814257/",
    },
    {
      label: "Github",
      link: "https://github.com/Thomas-Marie",
    },
    {
      label: "CV",
      link: "",
    },
  ],
};

export default presentation;
