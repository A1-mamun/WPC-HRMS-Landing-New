import { useState, useEffect } from 'react';
import { Button, Spinner, Input } from '@heroui/react';
import { FiPlus, FiSearch, FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AllCircumstances = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  // Mock API data - replace with actual API call
  const mockEmployeeData = [
    {
      id: 1,
      employeeCode: 'EMP001',
      existingEmployeeName: 'John Smith',
      firstName: 'John',
      middleName: 'Michael',
      lastName: 'Smith',
      department: 'Manager',
      jobTitle: 'FrontEnd Developer',
      contactNumber: '+44 7123 456789',
      dateOfBirth: '1990-05-15',
      niNumber: 'AB123456C',
      nationality: 'British',
      postCode: 'SW1A 1AA',
      addressLine1: '10 Downing Street',
      addressLine2: 'Westminster',
      addressLine3: '',
      city: 'London',
      country: 'United Kingdom',
      passportNumber: 'GB1234567',
      passportNationality: 'British',
      placeOfBirth: 'London',
      passportIssuedBy: 'UK Government',
      passportIssueDate: '2020-01-01',
      passportExpiryDate: '2030-01-01',
      visaNumber: 'N/A',
      visaNationality: 'N/A',
      dbsType: 'Standard',
      dbsReferenceNumber: 'DBS123456',
      nationalIdNumber: 'N/A',
      status: 'Active'
    },
    {
      id: 2,
      employeeCode: 'EMP002',
      existingEmployeeName: 'Sarah Johnson',
      firstName: 'Sarah',
      middleName: 'Elizabeth',
      lastName: 'Johnson',
      department: 'Kitchen',
      jobTitle: 'Devops',
      contactNumber: '+44 7987 654321',
      dateOfBirth: '1988-09-22',
      niNumber: 'CD987654E',
      nationality: 'Canadian',
      postCode: 'M5V 3A8',
      addressLine1: '123 Queen Street',
      addressLine2: 'Downtown',
      addressLine3: '',
      city: 'Toronto',
      country: 'Canada',
      passportNumber: 'CA9876543',
      passportNationality: 'Canadian',
      placeOfBirth: 'Toronto',
      passportIssuedBy: 'Government of Canada',
      passportIssueDate: '2019-06-15',
      passportExpiryDate: '2029-06-15',
      visaNumber: 'UK123456789',
      visaNationality: 'Canadian',
      dbsType: 'Advanced',
      dbsReferenceNumber: 'DBS987654',
      nationalIdNumber: 'N/A',
      status: 'Active'
    },
    {
      id: 3,
      employeeCode: 'EMP003',
      existingEmployeeName: 'Ahmed Hassan',
      firstName: 'Ahmed',
      middleName: '',
      lastName: 'Hassan',
      department: 'Cleaner',
      jobTitle: 'FrontEnd Developer',
      contactNumber: '+44 7555 123456',
      dateOfBirth: '1992-12-10',
      niNumber: 'EF456789G',
      nationality: 'Egyptian',
      postCode: 'E1 6AN',
      addressLine1: '45 Brick Lane',
      addressLine2: 'Whitechapel',
      addressLine3: '',
      city: 'London',
      country: 'United Kingdom',
      passportNumber: 'EG5555555',
      passportNationality: 'Egyptian',
      placeOfBirth: 'Cairo',
      passportIssuedBy: 'Egyptian Government',
      passportIssueDate: '2021-03-20',
      passportExpiryDate: '2031-03-20',
      visaNumber: 'UK987654321',
      visaNationality: 'Egyptian',
      dbsType: 'Basic',
      dbsReferenceNumber: 'DBS456789',
      nationalIdNumber: '29212101012345',
      status: 'Active'
    }
  ];

  // Simulate API call
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setEmployees(mockEmployeeData);
        setFilteredEmployees(mockEmployeeData);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(employee =>
        Object.values(employee).some(value =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees]);

  const handleRefetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setEmployees(mockEmployeeData);
      setFilteredEmployees(mockEmployeeData);
      setIsLoading(false);
      setIsError(false);
    }, 1000);
  };

  const handleEdit = (employeeId) => {
    console.log('Edit employee:', employeeId);
    // Handle edit action
  };

  const handleDelete = (employeeId) => {
    console.log('Delete employee:', employeeId);
    // Handle delete action
  };

  const handleView = (employeeId) => {
    console.log('View employee:', employeeId);
    // Handle view action
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Spinner size="lg" color="primary" className="animate-spin" />
        <p className="text-gray-600 mt-4 text-base">Loading employees...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-red-600 font-semibold text-xl">Failed to load employees</p>
        <Button
          onClick={handleRefetch}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (filteredEmployees.length === 0) {
    return (
      <div>
        <div className="flex justify-between py-3 mb-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="search" className="text-sm font-medium">
              Search:
            </label>
            <Input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
              placeholder="Type to search..."
              startContent={<FiSearch className="text-gray-400" />}
            />
          </div>
          <Link to="/dashboard/employer/add-change-of-circumstances"
            className="bg-hrms-blue-hover text-white"
          >
            <FiPlus size={20} />
            Add Circumstances
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-gray-600 text-lg">
            {searchTerm ? 'No employees found matching your search' : 'No employees found'}
          </p>
        </div>
      </div>
    );
  }

  return (
    // <div className="w-full">
    <div className="flex-1 overflow-hidden">
      {/* Header with search and add button */}
      <div className="flex justify-between py-3 mb-4 w-full">
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-sm font-medium">
            Search:
          </label>
          <Input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
            placeholder="Type to search..."
            startContent={<FiSearch className="text-gray-400" />}
          />
        </div>
          <Link to="/dashboard/add-change-of-circumstances"
            className="bg-hrms-blue-hover flex gap-2 items-center text-white rounded-md px-3 py-2"
          >
            <FiPlus size={20} />
            Add Circumstances
          </Link>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-auto max-h-[600px] border border-gray-200 rounded-lg">
        <table className="min-w-full bg-white">
        {/* <table className="w-full bg-white"> */}
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Employee Code
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Employee Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                First Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Middle Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Last Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Department
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Job Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Contact Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Date of Birth
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                NI Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Nationality
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Post Code
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Address Line 1
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Address Line 2
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                City
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Country
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Passport Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Passport Nationality
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Place of Birth
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Passport Issued By
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Passport Issue Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Passport Expiry Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Visa Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Visa Nationality
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                DBS Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                DBS Reference
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                National ID Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.map((employee, index) => (
              <tr key={employee.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {employee.employeeCode}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.existingEmployeeName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.firstName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.middleName || '-'}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.lastName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.department}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.jobTitle}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.contactNumber}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.dateOfBirth}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.niNumber}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.nationality}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.postCode}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.addressLine1}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.addressLine2 || '-'}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.city}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.country}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.passportNumber}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.passportNationality}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.placeOfBirth}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.passportIssuedBy}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.passportIssueDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.passportExpiryDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.visaNumber}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.visaNationality}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.dbsType}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.dbsReferenceNumber}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.nationalIdNumber || '-'}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    employee.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {employee.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="primary"
                      onClick={() => handleView(employee.id)}
                    >
                      <FiEye size={14} />
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="warning"
                      onClick={() => handleEdit(employee.id)}
                    >
                      <FiEdit size={14} />
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="danger"
                      onClick={() => handleDelete(employee.id)}
                    >
                      <FiTrash2 size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results summary */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredEmployees.length} of {employees.length} employees
      </div>
    </div>
  );
};

export default AllCircumstances;