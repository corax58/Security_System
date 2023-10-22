import React from "react";
import useCameras, { Camera } from "../hooks/useCameras";
import { List, ListItem, list, Text, Button } from "@chakra-ui/react";

interface Props {
  cameras: Camera[];
  onSelect: (cam: string) => void;
}

const CameraList = ({ cameras, onSelect }: Props) => {
  return (
    <>
      <List paddingY="10px">
        <ListItem paddingY="5px"></ListItem>
        {cameras.map((camera) => (
          <ListItem paddingY="5px" key={camera.id}>
            <Button
              onClick={() => {
                onSelect(camera.name);
              }}
            >
              {camera.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CameraList;
