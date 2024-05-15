import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artistry Oasis",
  description: "Discover a sanctuary for art lovers and creators alike. Artistry Oasis is a vibrant online gallery where you can explore, share, and celebrate stunning artworks from around the world. Immerse yourself in a diverse collection of paintings and digital art, and connect with a passionate community that values creativity and expression. Whether you're an artist looking to showcase your talent or an art enthusiast seeking inspiration, Artistry Oasis is your destination for all things art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}</body>
    </html>
  );
}
