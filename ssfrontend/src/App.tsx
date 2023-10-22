import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./Components/Navbar";
import CameraGrid from "./Components/CameraGrid";
import CameraList from "./Components/CameraList";
import useCameras from "./hooks/useCameras";
import AddCamera from "./Components/AddCamera";

function App() {
  const { cameras, error } = useCameras();

  const selectHandler = (cam: string) => {
    cameras.filter((cc) => cc.name == cam);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX="5">
          <AddCamera />
          <CameraList onSelect={selectHandler} cameras={cameras} />
        </GridItem>
      </Show>

      <CameraGrid cameras={cameras}></CameraGrid>
    </Grid>
  );
}

export default App;
