"use client";
import AppwriteService from "@/Appwrite/config";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/authContext";
import React, { useEffect, useState } from "react";

const ProtectedLayout = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AppwriteService?.isLoggedIn()
      .then((isLoggedIn) => {
        setAuthStatus(isLoggedIn); // Update authStatus based on the response
      })
      .catch((error) => {
        console.error("Authentication error:", error); // Log any errors
        setAuthStatus(false); // Set to false if there's an error
      })
      .finally(() => {
        setLoader(false); // Ensure the loader is hidden after the check
      });
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader && (
        <>
          <div className="text-primary">
            <div className="fixed -z-[1] left-1/3 w-12 top-2/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-2/3 w-12 top-1/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-1/4 w-40 top-1/4 blur-2xl opacity-50">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-1/2 w-32 top-1/2 blur-2xl opacity-60">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-[45%] w-12 top-1/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-3/4 w-60 top-1/3 opacity-20 blur-2xl">
              <Blog blur />
            </div>
          </div>
          <Header />
          <main className="px-2 py-4"> {children}</main>
        </>
      )}
    </AuthProvider>
  );
};

export default ProtectedLayout;
