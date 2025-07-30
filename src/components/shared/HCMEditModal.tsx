import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import { FormEvent } from "react";
import { toast } from "sonner";
import { useUpdateOrganisationHCMMasterMutation } from "../../redux/features/employer/hcmMaster";

type HCMModalProps = {
  name: string;
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  id: string;
  route: string;
  refetch: () => void;
};

const HCMEditModal = ({
  isOpen,
  onOpenChange,
  id,
  route,
  title,
  name,
  refetch,
}: HCMModalProps) => {
  const [updateOrganisationHCMMaster] =
    useUpdateOrganisationHCMMasterMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameInput = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();

    // Capitalize the first letter of the name
    const formattedName =
      nameInput.charAt(0).toUpperCase() + nameInput.slice(1);

    const toastId = toast.loading(`Updating ${title}...`);
    try {
      await updateOrganisationHCMMaster({
        route,
        id,
        data: { name: formattedName },
      }).unwrap();
      toast.success(`${title} updated successfully!`, {
        id: toastId,
        duration: 2000,
      });
      refetch();
      onOpenChange();
    } catch {
      toast.error(`Failed to update ${title}.`, {
        id: toastId,
        duration: 3000,
      });
    }

    // Reset the form and close the modal
    form.reset();
    onOpenChange();
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit {title}
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <Input
                  size="lg"
                  variant="bordered"
                  radius="sm"
                  name="name"
                  defaultValue={name}
                  className="mb-4"
                  required
                />

                <div className="flex justify-end gap-4 pb-4">
                  <Button
                    color="danger"
                    onPress={onClose}
                    className="font-semibold"
                  >
                    Close
                  </Button>
                  <Button
                    // onPress={onClose}
                    className="bg-hrms-blue-hover text-white font-semibold"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HCMEditModal;
