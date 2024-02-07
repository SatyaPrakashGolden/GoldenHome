import React from "react";
import {  Route, Routes, Navigate } from "react-router-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const MyAdmin = () => {
  return (
      <Routes>
        {/* Route for Admin section */}
        <Route path="/admin/*" element={<AdminLayout />} />
        {/* Route for Authentication section */}
        <Route path="/auth/*" element={<AuthLayout />} />
        {/* Default route, redirects to Admin section */}
        <Route path="*" element={<Navigate to="/admin/index" replace />} />
      </Routes>
  );
};

export default MyAdmin

