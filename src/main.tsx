import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
// import { AppContextProvider } from "./context/AppContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
