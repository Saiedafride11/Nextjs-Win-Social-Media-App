"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated or authorized
    const isAuthenticated = JSON.parse(localStorage.getItem("email")); // your authentication logic here

    if (!isAuthenticated) {
       router.push(`/signin`);// Redirect to login page if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
