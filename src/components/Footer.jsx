import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>sahir portfolio</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target={link.name ==='Contact' ? '_self' : '_blank'}>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain hover:scale-90'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;