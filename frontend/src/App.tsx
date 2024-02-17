import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics, Dashboard, Inventory, Sales } from "./pages";

function App() {
  return (
    <Router>
      <Grid
        height={"100vh"}
        templateAreas={`"nav main"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={"1fr 11fr"}
        gridTemplateColumns={"1fr 5fr"}
      >
        <GridItem bg={"gray.100"} minW={"20%"} position={'fixed'} height={'100vh'} area={"nav"}>
          <Sidebar />
        </GridItem>
        <GridItem py={3} maxH={"100vh"} area={"main"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
