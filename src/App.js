import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Form from "./Components/Form";
import Theme from "./Theme/Theme";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Form />
      </ThemeProvider>
    </div>
  );
};

export default App;
