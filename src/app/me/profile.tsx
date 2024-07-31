"use client";

import accountApiRequest from "@/apiRequests/account";
import { handleErrorApi } from "@/lib/utils";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        await accountApiRequest.meClient();
      } catch (error: any) {
        handleErrorApi({ error });
      }
    };
    fetchRequest();
  }, []);
  return <div>profile</div>;
}
