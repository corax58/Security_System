import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Camera {
  id: number;
  name: string;
  ip_address: string;
  monitored: boolean;
}

const useCameras = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [error, setError] = useState();

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchCameraResponse>("/cameras")
  //       .then((res) => setCameras(res.data.results))
  //       .catch((err) => setError(err.message));
  //   });

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://127.0.0.1:8000/api/cameras/", { signal: controller.signal })
      .then((res) => setCameras(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { cameras, error };
};

export default useCameras;
