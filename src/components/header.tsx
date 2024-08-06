import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import ButtonLogOut from "./button-logout";
import { cookies } from "next/headers";
import authApiRequest from "@/apiRequests/auth";
import accountApiRequest from "@/apiRequests/account";

export default async function Header() {
  const cookiesStore = cookies();
  const sessionToken = cookiesStore.get("sessionToken")?.value;
  let user = null;
  if (sessionToken) {
    const result = await accountApiRequest.me(sessionToken);
    user = result.payload.data;
  }
  return (
    <div>
      <ul>
        <ModeToggle />
        <li>
          <Link href="/products">Sản phẩm</Link>
        </li>
        {user ? (
          <div className="flex space-x-2">
            <h1>Hi {user.name}</h1>
            <ButtonLogOut />
          </div>
        ) : (
          <>
            <li>
              <Link href="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link href="/register">Đăng ký</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
