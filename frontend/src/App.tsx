import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { ClientsProvider } from "./context/ClientsContext";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  const location = useLocation();

  const noLayoutRoutes = ["/welcome"];
  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  const ClientsPage = React.lazy(() => import("./pages/ClientsPage"));
  const SelectedClientsPage = React.lazy(
    () => import("./pages/SelectedClientsPage")
  );
  const WelcomePage = React.lazy(() => import("./pages/WelcomePage"));

  return (
    <UserProvider>
      <ClientsProvider>
        {!isNoLayoutRoute ? (
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes location={location} key={location.key}>
                <Route path="/" element={<ClientsPage />} />
                <Route
                  path="/selected-clients"
                  element={<SelectedClientsPage />}
                />
              </Routes>
            </Suspense>
          </Layout>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location} key={location.key}>
              <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
          </Suspense>
        )}
      </ClientsProvider>
    </UserProvider>
  );
};

const MainApp: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
