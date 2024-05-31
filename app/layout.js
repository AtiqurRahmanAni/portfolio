import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Atiqur Rahman",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}