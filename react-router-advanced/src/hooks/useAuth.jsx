import { useState } from "react";

// Simple auth hook to simulate login
const useAuth = () => {
  const [isAuthenticated] = useState(true); // change to false to test redirect
  return { isAuthenticated };
};

export default useAuth;
