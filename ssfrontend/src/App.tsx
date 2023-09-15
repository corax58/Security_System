import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./Components/Navbar";
import CameraGrid from "./Components/CameraGrid";

function App() {
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
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <CameraGrid></CameraGrid>
    </Grid>
  );
}

export default App;
