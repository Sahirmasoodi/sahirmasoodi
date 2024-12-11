import { Link } from "react-router-dom";
import CTA  from "../components/CTA";
import { projects } from "../constants";


const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <div className='flex flex-wrap  sm:my-20 justify-center '>
        {
          projects.map((project,index)=>(
            <div key={index} className=" shadow-lg p-5 bg-blue-50 min-w-80 min-h-52 my-5 md:mx-5 ">
              <img className="w-80 h-40 " src={project.img}/>
              <p className="font-bold blue-gradient_text mt-4">{project.name}</p>
              <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' blue-gradient_text text-sm'>
                  Live Link
                </Link>
            </div>
          ))
        }
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;