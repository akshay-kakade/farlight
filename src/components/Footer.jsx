import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://discord.com/invite/farlight84official",
    icon: <FaDiscord />,
  },
  { href: "https://x.com/farlight84/", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/c/Farlight84", icon: <FaYoutube /> },
  {
    href: "https://www.instagram.com/farlight84_official/",
    icon: <FaInstagram />,
  },
];

const developerLinks = [
  {
    name: "Akshay Kakade",
    twitter: "https://www.linkedin.com/in/akshay-kakade-878399287/",
    icon: <FaLinkedin />,
  },
  {
    name: "Maverick Jones",
    twitter:
      "https://www.instagram.com/maverick_7821/?igsh=MTJiN3M3NDNjM2JkcA%3D%3D",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-blue-50 rounded py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Nova 2024. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-light">Website created by:</p>
          {developerLinks.map((dev, index) => (
            <a
              key={index}
              href={dev.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center underline text-sm font-light md:text-green-600"
            >
              {dev.icon} <span className="ml-2">{dev.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
