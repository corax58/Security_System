import React, { FormEvent, useRef } from "react";

import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const AddCamera = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ipRef = useRef<HTMLInputElement>(null);
  const camera = { name: "", ip_address: "", Monitored: true };

  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current !== null) camera.name = nameRef.current.value;
    if (ipRef.current !== null) camera.ip_address = ipRef.current.value;
    axios
      .post("http://127.0.0.1:8000/api/cameras/", camera)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    alert("Camera added");
  };

  return (
    <>
      <Button onClick={onOpen}>Add Camera</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Add camera
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit} id="new-form">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={nameRef} type="text" />
                <FormLabel>Ip Address</FormLabel>
                <Input ref={ipRef} type="text" />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="new-form">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCamera;
