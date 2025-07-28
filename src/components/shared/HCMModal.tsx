import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import { FormEvent } from "react";

type HCMModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  title: string;
  placeholder: string;
};

const HCMModal = ({
  isOpen,
  onOpenChange,
  handleSubmit,
  title,
  placeholder,
}: HCMModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <Input
                  size="lg"
                  variant="bordered"
                  radius="sm"
                  placeholder={placeholder}
                  name="name"
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

export default HCMModal;
