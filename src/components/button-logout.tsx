"use client";
import React from "react";
import { Button } from "./ui/button";
import authApiRequest from "@/apiRequests/auth";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ButtonLogOut() {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      await authApiRequest.LogOutFromNextClientToNextServer();
      router.push("/login");
    } catch (error) {
      handleErrorApi({ error });
    }
  };
  return <Button onClick={handleLogOut}>Đăng xuất</Button>;
}
