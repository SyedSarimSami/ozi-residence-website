import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import HomePage from "./pages/HomePage";
import HomePlanDetailPage from "./pages/HomePlanDetailPage";
import HomePlansPage from "./pages/HomePlansPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProcessPage from "./pages/ProcessPage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/home-plans" element={<HomePlansPage />} />
      <Route path="/home-plans/:slug" element={<HomePlanDetailPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/get-in-touch" element={<GetInTouchPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
