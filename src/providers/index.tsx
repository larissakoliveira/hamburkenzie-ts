import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </AuthProvider>
  </ChakraProvider>
);
