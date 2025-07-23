import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DepartmentTable from "./DepartmentTable";
import DesignationTable from "./DesignationTable";

const tabClass =
  "py-2 px-5 text-sm rounded-md font-medium text-black cursor-pointer";
const selectdClass = "bg-[#2561b4] text-white border-none";

const HcmTab = () => {
  return (
    <main className="bg-white rounded-md shadow-md m-7 border-t-5 border-t-hrms-blue-hover border border-gray-300 min-h-screen">
      <h1 className="text-xl font-medium p-4 border-b border-gray-300">
        Server details
      </h1>
      <div className="px-5 py-3">
        <Tabs>
          <TabList className="flex bg-[#ecebeb] p-3 gap-2 rounded-md">
            {["Department", "Designation", "Employment type"].map(
              (tabTitle, index) => (
                <Tab
                  key={index}
                  className={tabClass}
                  selectedClassName={selectdClass}
                >
                  {tabTitle}
                </Tab>
              )
            )}
          </TabList>

          <TabPanel>
            <DepartmentTable />
          </TabPanel>
          <TabPanel>
            <DesignationTable />
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default HcmTab;
