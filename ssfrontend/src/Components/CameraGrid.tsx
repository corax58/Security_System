import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import axios from "axios";

interface Camera {
  id: number;
  name: string;
  ip_address: string;
  monitored: boolean;
}

interface FetchCameraResponse {
  count: number;
  results: Camera[];
}

const CameraGrid = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [error, setError] = useState();

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchCameraResponse>("/cameras")
  //       .then((res) => setCameras(res.data.results))
  //       .catch((err) => setError(err.message));
  //   });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cameras/")
      .then((res) => setCameras(res.data))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {/* {console.log(cameras)} */}
      {error && <Text>{error}</Text>}
      <ul>
        {cameras?.map((camera) => (
          <li key={camera.id}> {camera.name} </li>
        ))}
      </ul>
    </>
  );
};

export default CameraGrid;
