import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import ButtonLogOut from "./button-logout";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng ký</Link>
        </li>
        <ButtonLogOut />
      </ul>
      <ModeToggle />
    </div>
  );
}
