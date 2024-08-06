"use client";
import React from "react";
import { Button } from "./ui/button";
import authApiRequest from "@/apiRequests/auth";
import { handleErrorApi } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export default function ButtonLogOut() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogOut = async () => {
    try {
      await authApiRequest.LogOutFromNextClientToNextServer();
      router.push("/login");
    } catch (error) {
      handleErrorApi({
        error,
      });
      authApiRequest.LogOutFromNextClientToNextServer(true).then((res) => {
        router.push(`/login?redirectFrom=${pathname}`);
      });
    } finally {
      router.refresh();
    }
  };
  return <Button onClick={handleLogOut}>Đăng xuất</Button>;
}
