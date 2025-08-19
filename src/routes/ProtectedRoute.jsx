import React, { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const notifiedRef = useRef(false);

  // Check if user is logged in (based on token in localStorage)
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token && !notifiedRef.current) {
      notifiedRef.current = true;
      toast.error("⚠️ Please login first", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#ef4444", // Tailwind red-500
          color: "#fff",
          fontWeight: "600",
        },
      });
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
