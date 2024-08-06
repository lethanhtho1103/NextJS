import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Auth layout</footer>
      </body>
      <Toaster position="top-right" richColors duration={3000} />
    </html>
  );
}
