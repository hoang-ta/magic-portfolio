import { InlineCode } from '@/once-ui/components';

const person = {
  middleName: 'Huy',
  firstName: 'Hoang',
  lastName: 'Ta',
  get name() {
    return `${this.middleName} ${this.firstName} ${this.lastName}`;
  },
  role: 'Web Developer',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Ho_Chi_Minh', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  country: 'Vietnam', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English'], // optional: Leave the array empty if you don't want to display languages
  yearOfExperience: 4,
  email: 'huyhoang.ta97@gmail.com',
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Recently I have started publishing about things I
      learn and have deep curiosity in as a way for me to
      reflect, remember, improve my writing and public
      presentation . The topics will vary from: programming
      (mostly I think 😝), random thoughts, design (this
      area is where I need to improve most 😅), and any new
      things that I randomly find myself interested in.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/huy-hoang-ta/',
  },
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/hoang-ta/',
  },
  {
    name: 'X',
    icon: 'x',
    link: 'https://x.com/huyhoang_ta',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  label: 'Home',
  title: `${person.firstName} Garden`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Put a small dent in life</>,
  subline: (
    <>
      Hi there 👋, welcome to my little digital garden on
      the internet where I will record my learning journey
      in life as a reflection and practicing for my writing
      and presentation. The topics will vary from mostly
      programming to thoughts formed through reading books,
      blog posts, and related stuff on simplicity and
      efficiency in working, design engineer.
      <br />
      <br />
      You can also find me from other places on the internet
      through a list of social links I place at the bottom
      of the page. Let's connect and have some chat 😆.
      <br />
      <br />
      By the way, the headline above is my remix of Steve
      Job's quote: "We’re here to put a dent in the
      universe. Otherwise why else even be here?"
      <br />
      <br />
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        I'm {person.firstName} from Vietnam, I look at
        myself as a programmer with a passion for solving
        complex challenges with simple, and efficient
        solutions.
        <br />
        <br />I am a former fullstack web developer with{' '}
        {person.yearOfExperience}+ years of experience in
        web development space where I build user interface
        (UI) from Figma design, to implement server API and
        database. Additionally I also have a chance to work
        in geospatial field where I do visualization and
        interaction with geospatial data.
        <br />
        <br />
        At the moment, I'm looking for a new opportunity
        where I can bring my working programming experience
        to cooperate with people and together learn and
        build products that will leave a positive impact in
        life.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'ZMP Vietnam',
        timeframe: '2020/06 - 2024/07',
        role: 'Software Engineer',
        achievements: [
          <>
            In the beginning, I get myself familiar with
            basic task of web development: fix minor UI
            bugs, implement basic UI and server API by
            following instructions from other senior
            members.
          </>,
          <>
            Later on, I am assigned to a small team of three
            people where we build an internal web app
            relying on a high level WebGL library for data
            visualizaion and interaction. The app is called{' '}
            <strong>Fork Editor</strong> which handles path
            generation for an automatic Forklift to operate.
            In this project, I have a chance to collaborate
            and contribute to building core UI and
            functionalities from scratch.
          </>,
          <>
            After that, we continue with tasks converting an
            internal tool built with C++ for Linux into a
            web app based on the motivation of the Fork
            Editor. With this one, we used nearly the same
            tech stack as Fork with the addition of gRPC to
            handle the communication between API of the
            original app and the new web app.
          </>,
          <>
            Moving on, I work on the dashboard page to
            manage files which is part of a system called
            ROBO-HI whose vision is a central place robot
            integration and robot management in the future
          </>,
        ],
        tags: [
          ['React.js', 'Node.js', 'TypeScript'],
          [
            'React.js',
            'Node.js',
            'TypeScript',
            'Deck.GL',
            'MUI',
          ],
          [
            'React.js',
            'Node.js',
            'TypeScript',
            'Deck.GL',
            'Ant Design',
            'gRPC',
          ],
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/project-01/cover-01.jpg',
          //   alt: 'Once UI Project',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Ho Chi Minh City University of Science',
        description: (
          <>Bachelor of Science in Computer Science.</>
        ),
        timeframe: '2015 - 2019',
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>
            Able to prototype in Figma with Once UI with
            unnatural speed.
          </>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: (
          <>
            Building next gen apps with Next.js + Once UI +
            Supabase.
          </>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};
