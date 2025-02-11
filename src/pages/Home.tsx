import { employeePaths } from "../routes/employee.routes";
import { routeGenerator } from "../utils/routesGenerator";

const Home = () => {
  const paths = routeGenerator(employeePaths);
  console.log("paths", paths);
  return <div className="">This is the home page</div>;
};

export default Home;
