import { Button } from "@heroui/react";

import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="padding-responsive h-screen flex items-center ">
      <div className="flex flex-col md:flex-row gap-8 justify-between w-full">
        <div className="flex flex-col gap-8 font-jura flex-1">
          <h1 className="text-7xl font-extrabold ">
            Cloud Based All-in-One <br />
            Social HR Software
          </h1>
          <h5 className="text-2xl ">
            WebHR automates all of your company&apos;s HR processes <br /> such
            as Recruitment, Onboarding, Payroll, Time & Attendance, <br />{" "}
            Leaves & PTO, Performance, and much more...
          </h5>
          <Button className="w-40 text-lg font-medium">Contuct Us</Button>
        </div>
        <div className="w-[40%]">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
