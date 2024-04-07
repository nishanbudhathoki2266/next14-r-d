import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi from layout",
  description: "Description from root",
  openGraph: {
    type: "profile",
    lastName: "Budhathoki",
    firstName: "Nishan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Hi</h1>
        <nav>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team/about">About Team</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
