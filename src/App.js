import { StyleVariables } from "./components/styledComponents";
import { HomePage } from "./components/styledComponents";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <StyleVariables>
      <HomePage>
        <Navbar />
      </HomePage>
    </StyleVariables>
  );
}

export default App;
