import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import { Header, Footer } from "../../../../components";
import { useRefreshToken } from "../../../../hooks/query/session";

export default function AppLayout() {
  const { isLoading } = useRefreshToken();

  return isLoading ? (
    <div />
  ) : (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
