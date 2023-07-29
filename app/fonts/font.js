import localFont from "next/font/local";

const GothamLight = localFont({
  src: "./GothamLight.ttf",
  variable: "--font-gotham-light",
});
const GothamBook = localFont({
  src: "./GothamBook.ttf",
  variable: "--font-gotham-book",
});
const GothamMedium = localFont({
  src: "./GothamMedium.ttf",
  variable: "--font-gotham-medium",
});
const GothamBold = localFont({
  src: "./GothamBold.ttf",
  variable: "--font-gotham-bold",
});

export { GothamLight, GothamBook, GothamMedium, GothamBold };
