import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const MainLayout: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
