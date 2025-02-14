"use client";
import { useEffect, useState } from "react";
import { Avatar, Button, Link } from "@heroui/react";

import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../../data";

import { FaCircleUser } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isScrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 0) {
        setScrolledPast(true);

        if (currentScrollPos < lastScrollPos) {
          setNavbarVisible(true);
        } else {
          setNavbarVisible(false);
        }
      } else {
        setScrolledPast(false);
        setNavbarVisible(true);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-hrms-blue font-medium text-xl border-b-2 border-hrms-gold py-5 duration-300"
            : "text-hrms-blue hover:text-hrms-gold-dark py-5 border-b-2 border-transparent font-medium text-xl duration-300"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          isActive
            ? "text-hrms-blue font-medium text-xl border-b-2 border-hrms-gold py-5 duration-300"
            : "text-hrms-blue hover:text-hrms-gold-dark py-5 border-b-2 border-transparent font-medium text-xl duration-300"
        }
      >
        Pricing
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-hrms-blue font-medium text-xl border-b-2 border-hrms-gold py-5 duration-300"
            : "text-hrms-blue hover:text-hrms-gold-dark py-5 border-b-2 border-transparent font-medium text-xl duration-300"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-hrms-blue font-medium text-xl border-b-2 border-hrms-gold py-5 duration-300"
            : "text-hrms-blue hover:text-hrms-gold-dark py-5 border-b-2 border-transparent font-medium text-xl duration-300"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav
      className={`bg-bg-primary/50 backdrop-blur-lg w-full z-50  h-[70px] fixed top-0 transition-transform duration-300 ${
        isScrolledPast ? "" : "translate-y-0"
      } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex justify-between items-center h-full gap-10 padding-responsive-x">
        <div className="navbar-brand flex items-center h-full">
          <Link href="/" className="text-4xl font-bold text-hrms-blue ">
            <h1>HRMS</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center h-full gap-10">
          {navlinks}
          {/* Quick Links */}
          <div className="hidden lg:flex items-center gap-5 h-full ml-3">
            <Button
              as="a"
              href="/login"
              variant="bordered"
              radius="sm"
              className="border-hrms-gold text-hrms-gold"
            >
              Log In
            </Button>
            <Button
              as="a"
              href="/register"
              variant="bordered"
              radius="sm"
              className="border-hrms-blue text-hrms-blue font-medium"
            >
              Register
            </Button>
            <Avatar isBordered className="">
              <FaCircleUser />
            </Avatar>
          </div>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden ">
          <Button
            isIconOnly
            className="text-2xl bg-transparent"
            onPress={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              key={isMobileMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="heading-md lg:text-6xl"
            >
              {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
            </motion.span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[70px] inset-0 bg-hrms-blue bg-opacity-50 backdrop-blur-md z-40 h-screen w-full"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className=" bg-bg-primary shadow-lg z-50 relative w-full padding-responsive-x  pb-5"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <div className="flex items-center w-full">
                    <NavLink
                      // className="px-4 py-3 text-hrms-blue font-medium w-full bg-white"
                      className={({ isActive }) =>
                        isActive
                          ? "text-hrms-blue text-lg px-4 py-3 font-medium w-full bg-white  rounded-lg"
                          : "text-hrms-blue text-lg px-4 py-3 font-medium w-full"
                      }
                      to={item.link}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
