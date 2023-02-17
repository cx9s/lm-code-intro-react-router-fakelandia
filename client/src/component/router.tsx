import { Routes, Route } from "react-router-dom";
import Confession from "./confession";
import Home from "./home";
import Misdemeanour from "./misdemeanour";
import NotFound from "./notFound";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/confession" element={<Confession />} />
    <Route path="/misdemeanour" element={<Misdemeanour />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
