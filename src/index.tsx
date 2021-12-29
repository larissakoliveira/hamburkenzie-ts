import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./providers";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AppProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
