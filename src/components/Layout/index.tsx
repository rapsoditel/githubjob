import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mantine/core";
import { useAuth } from "../../context/AuthContext";

const Layout = () => {
  const { user, loading } = useAuth();

  if (!user && !loading) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Container py="lg">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
