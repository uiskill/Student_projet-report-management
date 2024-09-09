import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css"; // CSS for "react-toastify"

// Private route
import { PrivateRoutes } from "./utils";

// Pages
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  PasswordResetPage,
} from "./pages";
import { NavigationBar } from "./components";
import Projects1 from "./pages/projects/Projects1";
import Projects2 from "./pages/projects/Projects2";
import Projects3 from "./pages/projects/Projects3";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Mainpage/Home";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        {/* Private routes (Requires authentication token) */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/report-2023-24" element={<Projects1 />} />
          <Route path="/report-2022-23" element={<Projects2 />} />
          <Route path="/report-2021-22" element={<Projects3 />} />
        </Route>Homepage

        {/* Public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<Contact />} />
  
  

        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      {/* Remember to render the ToastContainer once in your application tree. Rendering it in the application root would be the best bet */}
      <ToastContainer />
      <Footer />
    </>

  );
};

export default App;
