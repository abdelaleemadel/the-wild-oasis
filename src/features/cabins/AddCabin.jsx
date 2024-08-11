import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "./../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen((prev) => !prev)}>Add new cabin</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <CreateCabinForm onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
