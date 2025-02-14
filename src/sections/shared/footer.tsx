import { Link } from "@heroui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { navItems } from "../../data";

const Footer = () => {
  return (
    <footer className="w-full bg-hrms-blue text-bg-text padding-responsive md:px-36">
      <div className="w-[100%] flex max-lg:flex-col gap-16 items-center justify-between mb-16 lg:mb-40">
        <div className="flex flex-col items-center justify-between lg:items-start lg:justify-start gap-4 w-[80%] lg:w-80">
          <div className="flex items-center justify-center">
            <Link href="/" className="text-4xl font-bold text-hrms- ">
              <h1>HRMS</h1>
            </Link>
          </div>
          <div className="text-primary font-montserrat text-xl max-sm:text-medium">
            Turning Ideas into Reality
          </div>
        </div>

        <div className="flex items-start justify-between w-[60%] lg:w-72">
          {/* Menu */}
          <div className="max-w-sm">
            <div className="text-accent font-montserrat mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">
              Menu
            </div>
            <ul id="menu" className="list-none flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent font-montserrat font-[300] text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="max-w-sm">
            <div className="text-accent font-montserrat mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">
              Access
            </div>
            <ul id="contact" className="list-none flex flex-col gap-4">
              <li>
                <Link
                  href="/login"
                  className="text-accent font-montserrat font-[300] text-sm md:text-medium"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-accent font-montserrat font-[300] text-sm md:text-medium"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and socials */}
      <div className="flex max-md:flex-col-reverse max-md:gap-8 items-center justify-between w-[100%]">
        <div className="uppercase text-xs text-slate-400 font-[200]">
          2025 WorkPermitCloud Limited. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center justify-between gap-5 w-36 max-md:m-auto">
          <Link href="" className="text-accent">
            <FaInstagram />
          </Link>
          <Link href="" className="text-accent">
            <FaLinkedin />
          </Link>
          <Link href="" className="text-accent">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
