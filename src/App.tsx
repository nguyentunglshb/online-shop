import { ChakraProvider, CircularProgress } from "@chakra-ui/react";
import { RouterProvider } from "react-router";

import { router } from "@/routes";
import { theme } from "@/libs";
import { AuthContextProvider } from "@/contexts";
import { QueryClient, QueryClientProvider } from "react-query";
import { usePromiseTracker } from "react-promise-tracker";
import { colorOveride } from "./libs/chakra/colors-overide";

function App() {
  const queryClient = new QueryClient();
  const { promiseInProgress } = usePromiseTracker();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
          {promiseInProgress && (
            <CircularProgress
              isIndeterminate
              size="32px"
              color={colorOveride.primary.primary}
              pos="fixed"
              bottom="32px"
              right="32px"
            />
          )}
        </ChakraProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
