import CakeList from "./components/CakeList";
import Home from "./components/Home";
import { Globalstyle } from "./style";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  mcolor: "maroon",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />

      <Home />
      <CakeList />
    </ThemeProvider>
  );
}

export default App;
