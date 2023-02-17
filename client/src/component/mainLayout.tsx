import { Outlet } from "react-router-dom";
import "../App.css";

const MainLayout: React.FC = () => (
  <main className="App">
    <Outlet />
  </main>
);

export default MainLayout;
