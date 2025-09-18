import type { Metadata } from "next";
import ReduxProvider from "@/redux/ReduxProvider";
import "./globals.css";


export const metadata: Metadata = {
  title: "yourTrainer.com",
  description: "Your personal trainer platform"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen text-gray-900 bg-neutral-100`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
