import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";




export const metadata: Metadata = {
  title: "ALPHACODEZ",
  description: "Your one-stop destination for user-friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-dimDark"
      >
        <main className="">
          
          <Header/>
          
        {children}

        </main>
       
      </body>
    </html>
  );
}
