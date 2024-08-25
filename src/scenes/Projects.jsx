import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subTitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subTitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have worked on a diverse range of projects that showcase my skills
          in web development and my ability to deliver innovative solutions.
          Each project highlights different aspects of my expertise and my
          commitment to creating exceptional user experiences.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            subTitle="A news application developed using React.js, Node.js, and MongoDB. This app features real-time news updates, user authentication, and a customizable news feed based on user preferences."
          />
          <Project
            title="Project 2"
            subTitle="An e-commerce platform developed with React.js and Node.js, featuring a user-friendly checkout process."
          />
          {/* ROW 2 */}
          <Project
            title="Project 3"
            subTitle="A restaurant-type application designed to offer a user-friendly platform for managing restaurant operations."
          />
          <Project
            title="Project 4"
            subTitle="A food ordering app similar to Swiggy, developed entirely using React.js. This application features real-time order tracking, restaurant listings, and an easy-to-use interface for placing and managing food orders."
          />
          <Project
            title="Project 5"
            subTitle="A streaming platform inspired by Netflix, developed using React.js, Redux, Firebase for authentication, and OpenAI for generating personalized recommendations and content suggestions."
          />

          {/* ROW 3 */}
          <Project title="Project 6" subTitle=" A collaborative tool with real-time updates and an intuitive user interface, created with React.js and Firebase. This project focuses on enhancing team productivity through effective and responsive design."/>
          <Project title="Project 7" subTitle="An interactive data visualization dashboard, utilizing JavaScript libraries to present complex data in an accessible and visually appealing manner. This project showcases my ability to handle and present data effectively."/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
