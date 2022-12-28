import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router";

import { router } from "@/routes";
import { theme } from "@/libs";
import { AuthContextProvider } from "@/contexts";

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
