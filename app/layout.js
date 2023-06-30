import "./globals.scss";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "COMPSA",
  description: "Queen's Computing Students Association.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
