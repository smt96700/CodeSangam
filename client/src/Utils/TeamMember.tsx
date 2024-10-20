interface TeamMember {
  name: string;
  github: string;
  twitter: string;
  linkedin: string;
  image: string;
}

interface TeamData {
  [key: string]: TeamMember[];
}

export const TeamMember: { year: TeamData[] } = {
  year: [
    {
      '24-25': [
        {
          name: 'Sumit Verma',
          github: 'https://github.com/smt96700',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com/in/sumit-verma-smt/',
          image: 'https://github.com/smt96700.png',
        },
        {
          name: 'Tanishka Singh',
          github: 'https://github.com/tan-inv',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com/in/tanishka-thakur-915893250/',
          image: 'https://github.com/tan-inv.png',
        },
      ],
    },
    {
      '23-24': [
        {
          name: 'Aditya Srivastava',
          github: 'https://github.com/adityaa22',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com/in/adityasrivastava1407/',
          image: 'https://github.com/adityaa22.png',
        },
        {
          name: 'Subrat Pandey',
          github: 'https://github.com/32bitdev',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com/in/subrat2839/',
          image: 'https://github.com/32bitdev.png',
        },
        {
          name: 'Abhishek Patel',
          github: 'https://github.com/meisabhishekpatel',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com/in/meabhishekpatel/',
          image: 'https://github.com/meisabhishekpatel.png',
        },

        {
          name: 'Shashank Verma',
          github: 'https://github.com/shank03',
          twitter: 'https://twitter.com/shank_03',
          linkedin: 'https://www.linkedin.com/in/shank03',
          image: 'https://github.com/shank03.png',
        },
        {
          name: 'Sanskar Omar',
          github: 'https://github.com/sanskaromar',
          twitter: 'https://twitter.com/SanskarOmar_',
          linkedin: 'https://www.linkedin.com/in/sanskaromar-/',
          image: 'https://github.com/sanskaromar.png',
        },
        {
          name: 'Priyav K Kaneria',
          github: 'https://github.com/PriyavKaneria',
          twitter: 'https://twitter.com/priyav_kaneria',
          linkedin: 'https://www.linkedin.com/in/priyavkaneria/',
          image: 'https://github.com/PriyavKaneria.png',
        },
      ],
    },
    {
      '22-23':[
        {
          name: 'Divyansh Upadhyay',
          github: 'https://github.com/DuP-491',
          twitter: 'https://twitter.com/',
          linkedin: 'https://www.linkedin.com/in/divyansh-upadhyay/',
          image: 'https://github.com/DuP-491.png',
        },
        {
          name: 'Siddhesh Patil',
          github: 'https://github.com/siddheshpatil777',
          twitter: 'https://twitter.com/',
          linkedin: 'https://www.linkedin.com/in/siddheshpatil777/',
          image: 'https://github.com/DuP-491.png',
        },
      ]
    }
  ],
};

export const Year = [
  '24-25',
  '23-24',
  '22-23'
]
