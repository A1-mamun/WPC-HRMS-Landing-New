import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import { FaEdit, FaFilePdf } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";


export default function App() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<FaEdit className={iconClasses} />}
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
}
