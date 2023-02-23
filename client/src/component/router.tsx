import { Routes, Route } from "react-router-dom";
import MainLayout from "./mainLayout";
import Home from "./home";
import Confession from "./confession";
import Misdemeanour from "./misdemeanour";
import NotFound from "./notFound";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="confession" element={<Confession />} />
      <Route path="misdemeanour?/:misdemeanour" element={<Misdemeanour />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
