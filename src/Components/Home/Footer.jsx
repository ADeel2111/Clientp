


import { resourcesLinks, platformLinks, communityLinks } from "/src/constants/index";
import logo from '/public/logo.png'

const Footer = () => {
  return (
    <div>
    <footer className="bg-sky-700 backdrop-blur justify-center text-center px-4 ">
      <div className="grid  grid-cols-3 lg:grid-cols-3 gap-4 m-20 ">
        <div>
          <h3 className="text-md justify-center font-semibold mb-4 mt-12 text-xl text-white">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-100 hover:text-[#FB1159] "
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" justify-center text-center px-4">
          <h3 className="text-md font-semibold mb-4  mt-12 text-xl text-white">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-100  hover:text-[#FB1159]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="justify-center text-center px-4">
          <h3 className="text-md font-semibold mb-4  mt-12 text-xl  text-white">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-slate-50  hover:text-[#FB1159]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div>
      <img className="w-[100px] h-[100px] items-center" src={logo} alt="" />

        <p className=" pb-6 text-slate-50"> Copyright ©2024 Intellecta Group of institutions . All Rights Reserved</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
