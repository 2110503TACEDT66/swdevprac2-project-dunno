import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const anuphan = Anuphan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={anuphan.className}>
        <NextAuthProvider session={nextAuthSession}>
          <Navbar></Navbar>
          <div className="h-14"></div>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
