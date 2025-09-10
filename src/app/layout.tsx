import type { Metadata } from "next";
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
      <body className={`antialiased min-h-screen text-gray-900 bg-gray-100`}>
        {children}     
      </body>
    </html>
  );
}
