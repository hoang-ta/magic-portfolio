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
  country: 'Vietnam',
  time: 'GTM+7',
  languages: ['English'], // optional: Leave the array empty if you don't want to display languages
  yearOfExperience: 4,
  email: 'huyhoang.ta97@gmail.com',
  web: 'https://huyhoangta.com/',
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
    name: 'Hashnode',
    icon: 'hashnode',
    link: 'https://huy-hoang-ta.hashnode.dev/',
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
      efficiency in working, design.
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
      <p>
        Besides familiar skills, ideas, I often find it
        fascinating to hear from other renown people talk
        about programming, working methodology so that I can
        expand my world view. At the moment, I'm exploring{' '}
        <strong>Ruby on Rails, TailwindCSS</strong> and will
        later move on to their related tools due to the
        impression on the creators' motivations to strive
        for simplicity but still ensure efficient result in
        the way we work and achiveve results with
        technology.
      </p>
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
        solutions. I am inspired to learn new things and
        practice to become excellent at the things I do as
        well as embracing new challenges.
        <br />
        <br />I have been working as a fullstack web
        developer for {person.yearOfExperience}+ years.
        During this phase, I work with other developers,
        designers, and sometimes with stakeholders to build
        user interface (UI) from Figma design, implement
        server API and database. Additionally I also have a
        chance to work in geospatial field where I do
        visualization and interaction with geospatial data.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'ZMP Vietnam',
        aboutCompany: (
          <>
            <p>
              During my time working here, the company
              focuses on making software that helps the
              management and operations of robots that are
              manufactured in Japan.
            </p>
            <br />
            <p>Some noticeable operation are:</p>
            <ul>
              <li>
                Create web application that supports the
                operations of robots such as creating maps
                used by robots for navigation
              </li>
              <li>
                Create a dashboard web app that handle
                management of robots bewteen different
                companies
              </li>
            </ul>
          </>
        ),
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
            <p>
              Later on, I work with a small team of three
              people where we build an internal web app
              relying on a high level WebGL library for data
              visualization and interaction. From this
              project, I start participating in code review
              more to improve my skills and learn from other
              members.
            </p>
            <br />
            <p>
              The app is called <strong>Fork Editor</strong>{' '}
              which handles path generation for an automatic
              Forklift to operate. In this project, I have a
              chance to collaborate and contribute to
              building core UI and functionalities from
              scratch.
            </p>
          </>,
          <>
            <p>
              After that, we continue with another project
              converting an internal tool built with C++ for
              Linux into a web app based on the motivation
              of the Fork Editor. With previous experience,
              I also have an hornor to mentor new members on
              this project.
            </p>
            <br />
            <p>
              With this one, we used nearly the same tech
              stack as above with the addition of gRPC to
              handle the communication between APIs of the
              original app and the new web app.
            </p>
          </>,
          <>
            <p>
              Finally, I work on a dashboard to manage files
              used by robots as well as other operations.
              The dashboard is part of a system called{' '}
              <strong>ROBO-HI</strong> whose vision is a
              central place for robot integration and robot
              management in the future of Japan.
            </p>
            <br />
            <p>
              During this phase, I have more chance working
              at the backend with API and database beside
              the frontend. In this project, we also include
              automation test to reduce bugs for the system.
            </p>
          </>,
        ],
        tags: [
          [
            {
              name: 'React.js',
              new: true,
            },
            {
              name: 'Node.js',
              new: true,
            },
            {
              name: 'TypeScript',
              new: true,
            },
          ],
          [
            {
              name: 'React.js',
            },
            {
              name: 'Node.js',
            },
            {
              name: 'TypeScript',
            },
            {
              name: 'Deck.GL',
              new: true,
            },
          ],
          [
            {
              name: 'React.js',
              new: false,
            },
            {
              name: 'Node.js',
              new: false,
            },
            {
              name: 'TypeScript',
              new: false,
            },
            {
              name: 'Deck.GL',
              new: false,
            },
            {
              name: 'Mongoose',
              new: true,
            },
            {
              name: 'gRPC',
              new: true,
            },
          ],
          [
            {
              name: 'React.js',
              new: false,
            },
            {
              name: 'Node.js',
              new: false,
            },
            {
              name: 'TypeScript',
              new: false,
            },
            {
              name: 'Sequelize',
              new: true,
            },
            {
              name: 'AWS: S3, Dynamo',
              new: true,
            },
            {
              name: 'Cypress',
              new: true,
            },
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
  directions: {
    display: true, // set to false to hide this section
    title: `What I'm up to`,
    items: [
      {
        description: (
          <>
            <p>
              At the moment, I'm looking for a new
              opportunity where I can bring my working
              programming experience to cooperate with
              people and together learn and build products
              that will leave a positive impact in life.
            </p>
            <br />
            <p>
              The work that fits me most will be a fullstack
              web developer role with a level requirement
              ranging from mid-senior to senior. At my
              previous job, I have experienced with
              mentoring new members with a small team from
              1-2 members.
            </p>
          </>
        ),
        tags: [],
      },
      // {
      //   description: (
      //     <>

      //     </>
      //   ),
      //   tags: [],
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Skills',
    description:
      'Here, I summarize a list of skills and tools by categories that I often use in my job and my daily practice.',
    skills: [
      {
        title: 'Frontend',
        description: (
          <>
            Implement user interface based on Figma design
            using React.js with its library ecosystem.
            Besides traditional UI, I also have experience
            in data visualization and data interaction for
            geospatial field.
          </>
        ),
        images: [
          // {
          //   src: '/images/projects/project-01/cover-02.jpg',
          //   alt: 'Project image',
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: '/images/projects/project-01/cover-03.jpg',
          //   alt: 'Project image',
          //   width: 16,
          //   height: 9,
          // },
        ],
        tags: [
          'HTML',
          'CSS',
          'JavaScript, TypeScript',
          'React.js',
          'Styled Components',
          'Deck.GL',
        ],
      },
      {
        title: 'Backend',
        description: (
          <>
            Implement APIs for communication between client
            and server, database modelling, and database
            interaction.
          </>
        ),
        images: [
          // {
          //   src: '/images/projects/project-01/cover-04.jpg',
          //   alt: 'Project image',
          //   width: 16,
          //   height: 9,
          // },
        ],
        tags: [
          'Node.js',
          'MongoDB with Mongoose',
          'Postgres with Sequelize',
        ],
      },
      {
        title: 'Testing',
        description: (
          <>
            One important part of software development is
            testing in which I have experience with working
            with automation test for frontend and unit test
            for backend.
          </>
        ),
        images: [],
        tags: ['Cypress', 'Jest'],
      },
      {
        title: 'Tools and Processes',
        description: (
          <>
            Beside main technology stack I use above along
            my working and learning journey, I also have
            chance to use other tools and processes that
            definitely assist me a lot.
          </>
        ),
        images: [],
        tags: [
          'Figma',
          'Git',
          'Docker',
          'AWS',
          'Jira',
          'Scrum',
          'Swagger',
          'BDD',
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about thoughts, programming, design, ...',
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
