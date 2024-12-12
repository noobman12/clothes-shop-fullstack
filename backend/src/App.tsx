import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DefaultLayouts from "./layouts/DefaultLayouts";
import { routesPage } from "./routes";

import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DefaultLayouts />}>
                {routesPage.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    index={route.exact ? true : undefined}
                  />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
