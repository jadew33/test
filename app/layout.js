import "./globals.scss";

import {
  GothamLight,
  GothamBook,
  GothamBold,
  GothamMedium,
} from "./fonts/font";

import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "COMPSA",
  description: "Queen's Computing Students Associations",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GothamLight.variable} ${GothamMedium.variable} ${GothamBold.variable} ${GothamBook.variable} font-sans`}
    >
      {/* Given every text medium boldness by default 
      - override with tailwind classes 'font-medium' or 'font-bold'.
       As of July 29, there is no italics option, but the files 
       are in app/fonts folder ready for import in font.js */}
      <body className="font-light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
