import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    SKA,
    TBB,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Digital Analyst",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Mobile Device Analyst (Digital Forensics)",
      company_name: "CCL Forensics",
      icon: mobile,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Collecting and analysing forensic data to provide detailed reports on findings",
        "Managing case work, presenting and explaining findings",
        "Conducting bespoke analysis where a high level of expertise and knowledge may be required",
      ],
    },
    {
      title: "Web Site Developer",
      company_name: "CodeWithLewis",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "Plan and collaborate with customers on what they are after",
        "Creating high end web pages",
        "Making web pages availabe for mobile devices",
        "Providing support and advice following creation of the web page.",
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "School Of Code",
      icon: web,
      iconBg: "#383E56",
      date: "Mar 2021 - Sep 2021",
      points: [
        "Learn Front End coding language - HTML, CSS, JavaScript, React etc",
        "Understand key components of UX/UI designing",
        "Learn soft skills such as collaborating as a team, working asynchronously with peers, working excess hours to acheive goals and many more",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had a wonderful experience working with Lewis as my web designer. He was not only great to deal with but also incredibly friendly and dedicated to meeting my needs. I highly recommend his services for anyone looking to create a fantastic website",
      name: "Callum",
      designation: "Owner",
      company: "Studley Kickboxing Academy",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "TBlakeBeauty",
      description:
        "Web-based application built for a client that needed a website as a way to highlight their company and things that they offer.",
      tags: [
        {
          name: "Aesthetics",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "Website",
          color: "pink-text-gradient",
        },
      ],
      image: TBB,
      source_code_link: "https://tblakebeauty.co.uk",
    },
    {
      name: "Studley Kickboxing Academy",
      description:
        "Web site for a client regarding a kickboxing academy he was setting up. He needed something simple to use with a enquiry section linking to his email to encourage customers to sign up.",
      tags: [
        {
          name: "Kickboxing",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "Website",
          color: "pink-text-gradient",
        },
      ],
      image: SKA,
      source_code_link: "https://studleykickboxingacademy.co.uk",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };