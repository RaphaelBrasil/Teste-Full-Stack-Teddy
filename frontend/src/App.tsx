import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";
import SelectedClientsPage from "./pages/SelectedClientsPage";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./components/Layout";
import { ClientsProvider } from "./context/ClientsContext";
import { SelectedClientsProvider } from "./context/SelectedClientsContext";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  const location = useLocation();

  const noLayoutRoutes = ["/welcome"];
  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  return (
    <UserProvider>
      <SelectedClientsProvider>
        <ClientsProvider>
          {!isNoLayoutRoute ? (
            <Layout>
              <Routes>
                <Route path="/" element={<ClientsPage />} />
                <Route
                  path="/selected-clients"
                  element={<SelectedClientsPage />}
                />
              </Routes>
            </Layout>
          ) : (
            <Routes>
              <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
          )}
        </ClientsProvider>
      </SelectedClientsProvider>
    </UserProvider>
  );
};

const MainApp: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
