import CTA from "../components/CTA";
import { skills } from "../constants";


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Sahir
        </span>
        <p className="text-sm sm:text-lg font-normal">Frontend Developer</p>
      </h1>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex justify-center flex-wrap gap-5 sm:gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
       
        <div className="mt-12 text-justify">
          <p>
            As an intern at LogicHub Software Solutions, I gained hands-on
            experience in frontend development, working with technologies such
            as HTML, CSS, JavaScript, and React.js. During my time there, I
            learned to create responsive and user-friendly interfaces, implement
            modern design principles, and effectively collaborate within a
            development team. This experience helped me strengthen my technical
            skills and provided me with valuable exposure to real-world software
            development processes.
          </p>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
