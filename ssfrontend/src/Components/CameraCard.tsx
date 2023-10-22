import React from "react";
import { Camera } from "../hooks/useCameras";
import { Box, Card, CardBody, Heading, Button, HStack } from "@chakra-ui/react";
import axios from "axios";

interface Props {
  camera: Camera;
}
const CameraCard = ({ camera }: Props) => {
  const delCamera = (id: string) => {};

  return (
    <Card>
      <img
        className="cam-view"
        src={camera.ip_address + "/video"}
        alt="please check the connection"
      />
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading>{camera.name}</Heading>
          <Button
            colorScheme="red"
            onClick={(event) => {
              axios
                .delete("http://127.0.0.1:8000/api/cameras/" + camera.id)
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Delete
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CameraCard;
