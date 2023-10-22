import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import useCameras from "../hooks/useCameras";
import CameraCard from "./CameraCard";
import { Camera } from "../hooks/useCameras";

interface Props {
  cameras: Camera[];
}
const CameraGrid = ({ cameras }: Props) => {
  const choose = (camera: string) => {
    cameras.filter((cam) => cam.name == camera);
  };

  return (
    <>
      {/* {console.log(cameras)} */}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={3}
      >
        {cameras?.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CameraGrid;
