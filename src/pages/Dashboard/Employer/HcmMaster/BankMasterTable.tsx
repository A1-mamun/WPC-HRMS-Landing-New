import { CommonHCMTable } from "../../../../components";
import { useGetOrganisationBankMastersQuery } from "../../../../redux/features/employer/hcmMaster";
import { Spinner } from "@heroui/react";

const BankMasterTable = () => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetOrganisationBankMastersQuery(undefined);

  // Loading state
  if (isLoading || isFetching) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[222px]">
        <Spinner
          size="lg"
          color="primary"
          className="animate-spin"
          aria-label="Loading bank masters"
        />
        <p className="text-gray-600 mt-4 text-base">Loading bank masters...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[222px]">
        <p className="text-red-600 font-semibold text-xl">
          Failed to load bank masters
        </p>
        <button
          onClick={refetch}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (data?.data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[222px]">
        <p className="text-gray-600 text-lg">No bank masters found</p>
      </div>
    );
  }

  // Success state
  return (
    <CommonHCMTable
      tableName="Bank Master"
      route="bank-master"
      limit={5}
      data={data?.data}
    />
  );
};

export default BankMasterTable;
