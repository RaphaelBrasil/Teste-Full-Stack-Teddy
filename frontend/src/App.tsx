import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { ClientsProvider } from "./context/ClientsContext";
import { UserProvider } from "./context/UserContext";
import ClientsPage from "./pages/ClientsPage";
import SelectedClientsPage from "./pages/SelectedClientsPage";
import WelcomePage from "./pages/WelcomePage";

const App: React.FC = () => {
  const location = useLocation();

  const noLayoutRoutes = ["/welcome"];
  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  return (
    <UserProvider>
      <ClientsProvider>
        {!isNoLayoutRoute ? (
          <Layout>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<ClientsPage />} />
              <Route
                path="/selected-clients"
                element={<SelectedClientsPage />}
              />
            </Routes>
          </Layout>
        ) : (
          <Routes location={location} key={location.key}>
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
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
