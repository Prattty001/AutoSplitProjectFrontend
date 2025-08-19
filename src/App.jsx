import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BudgetPlanner from "./pages/BudgetPlanner";
import TeamSharing from "./pages/TeamSharing";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      {/* Toast notifications (global) */}
      <Toaster />

      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/budget-planner"
          element={
            <ProtectedRoute>
              <BudgetPlanner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teamsharing"
          element={
            <ProtectedRoute>
              <TeamSharing />
            </ProtectedRoute>
          }
        />

        {/* Default route → redirect to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
