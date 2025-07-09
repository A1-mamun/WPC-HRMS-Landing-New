import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@heroui/react";
import { FaEdit, FaFilePdf } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";

const Action = ({ id }: { id: string }) => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size="sm"
          className="bg-hrms-blue-hover text-sm font-jura text-white font-semibold"
        >
          Action
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<FaEdit className={iconClasses} />}
          as={Link}
          href={`/dashboard/edit-employee/${id}`}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="new"
          shortcut="⌘N"
          startContent={<FaFilePdf className={iconClasses} />}
        >
          Download pdf
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          startContent={<FaFileExcel className={iconClasses} />}
        >
          Download excell
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Action;
