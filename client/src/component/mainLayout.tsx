import { Outlet } from "react-router-dom";
import ConfessionProvider from "./confessionContext";
import Footer from "./footer";
import Header from "./header";

const MainLayout: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <ConfessionProvider>
        <Outlet />
      </ConfessionProvider>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
