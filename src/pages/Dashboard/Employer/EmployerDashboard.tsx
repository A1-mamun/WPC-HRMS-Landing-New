import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";
import { SiOrganicmaps } from "react-icons/si";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";

const EmployerDashboard = () => {
  const count = 100;
  return (
    <div className="dashboard-padding ">
      <div className="flex gap-14">
        <Card className="w-[350px] bg-slate-300">
          <CardHeader className="flex gap-3 items-center justify-center">
            <div className="w-9 h-9 flex items-center justify-center bg-gray-300">
              <SiOrganicmaps size={28} />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-medium">Total Employer</p>
              {/* <p className="text-small text-default-500">hrms.com</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="text-6xl font-bold text-center text-hrms-blue">
              <CountUp
                start={0}
                end={count as number}
                duration={2}
                delay={0.1}
              />
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="flex justify-center w-full text-blue-500 text-lg font-medium">
              <Link to="/admin/manage-employer">Manage Employer</Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-[350px] bg-slate-300">
          <CardHeader className="flex gap-3 items-center justify-center">
            <div className="w-9 h-9 flex items-center justify-center bg-gray-300">
              <FaUserCheck size={28} />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-medium">Total Employee</p>
              {/* <p className="text-small text-default-500">hrms.com</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="text-6xl font-bold text-center text-hrms-blue">
              <CountUp
                start={0}
                end={count as number}
                duration={2}
                delay={0.1}
              />
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="flex justify-center w-full text-blue-500 text-lg font-medium">
              <Link to="/admin/manage-employer">Manage Employer</Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EmployerDashboard;
