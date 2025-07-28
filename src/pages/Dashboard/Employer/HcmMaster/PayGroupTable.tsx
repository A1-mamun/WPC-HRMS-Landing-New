import { CommonHCMTable } from "../../../../components";
import {
  useCreateOrganisationPayGroupMutation,
  useGetOrganisationPayGroupsQuery,
} from "../../../../redux/features/employer/hcmMaster";
import { Button, Spinner, useDisclosure } from "@heroui/react";
import { FiPlus } from "react-icons/fi";
import { FormEvent } from "react";
import { toast } from "sonner";
import HCMModal from "../../../../components/shared/HCMModal";

const PayGroupTable = () => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetOrganisationPayGroupsQuery(undefined);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [createPayGroup] = useCreateOrganisationPayGroupMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameInput = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();

    // Capitalize the first letter of the  name
    const name =
      nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();

    const toastId = toast.loading("Creating Pay Group...");

    try {
      await createPayGroup({ data: { name } }).unwrap();
      toast.success("Pay Group created successfully!", {
        id: toastId,
        duration: 2000,
      });
      onOpenChange();
      refetch();
    } catch {
      toast.error("Failed to create Pay Group.", {
        id: toastId,
        duration: 3000,
      });
    }
    form.reset();
    onOpenChange();
  };

  return (
    <div>
      <div className="flex justify-between py-3">
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-sm font-medium">
            Search:
          </label>
          <input
            id="search"
            type="text"
            className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-hrms-blue-hover text-sm"
            placeholder="Type to search..."
          />
        </div>
        <div>
          <Button
            radius="full"
            className="bg-hrms-blue-hover text-white"
            isIconOnly
            onPress={onOpen}
          >
            <FiPlus size={30} />
          </Button>
          <HCMModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            handleSubmit={handleSubmit}
            title="Add Pay Group"
            placeholder="Enter pay group name"
          />
        </div>
      </div>
      {isLoading || isFetching ? (
        <div className="flex flex-col items-center justify-center min-h-[222px]">
          <Spinner
            size="lg"
            color="primary"
            className="animate-spin"
            aria-label="Loading departments"
          />
          <p className="text-gray-600 mt-4 text-base">Loading departments...</p>
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center min-h-[222px]">
          <p className="text-red-600 font-semibold text-xl">
            Failed to load departments
          </p>
          <button
            onClick={refetch}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      ) : data?.data?.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[222px]">
          <p className="text-gray-600 text-lg">No departments found</p>
        </div>
      ) : (
        <CommonHCMTable
          tableName="Payment Type"
          route="payment-type"
          limit={5}
          data={data?.data}
        />
      )}
    </div>
  );
};

export default PayGroupTable;
