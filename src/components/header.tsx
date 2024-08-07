import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import ButtonLogOut from "./button-logout";
import { AccountResType } from "@/schemaValidations/account.schema";

type User = AccountResType["data"];
export default async function Header({ user }: { user: User | null }) {
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
