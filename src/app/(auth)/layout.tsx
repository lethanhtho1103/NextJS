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
        <Header />
        {children}
        <Toaster position="top-right" richColors />
        <footer>Auth layout</footer>
      </body>
    </html>
  );
}