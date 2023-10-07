import "./globals.scss";

import { GothamLight, GothamBook, GothamBold, GothamMedium } from "/fonts/font";

import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "COMPSA",
  description: "Queen's Computing Students' Association",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GothamLight.variable} ${GothamMedium.variable} ${GothamBold.variable} ${GothamBook.variable} font-sans`}
    >
      <body className="font-light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
