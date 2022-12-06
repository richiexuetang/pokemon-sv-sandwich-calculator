import "./App.css";
import { Box } from "@chakra-ui/react";
import Ingredients from "./components/Ingredients";
import Seasonings from "./components/Seasoning";

function App() {
  return (
    <Box>
      <header className="App-header">
        <Ingredients />
        {/* <Box mt="5">
          <Seasonings />
        </Box> */}
      </header>
    </Box>
  );
}

export default App;
