"use client";

import appwriteService from "@/Appwrite/config";
import useAuth from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appwriteService.logout().then(() => {
      // setAuthStatus(false);
      setAuthStatus();
      router.replace("/");
    });
  }, []);

  return <></>;
};

export default LogoutPage;
