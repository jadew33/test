import localFont from "next/font/local";

const GothamLight = localFont({
  src: "./Gotham-Light.ttf",
  variable: "--font-gotham-light",
});
const GothamBook = localFont({
  src: "./Gotham-Book.ttf",
  variable: "--font-gotham-book",
});
const GothamMedium = localFont({
  src: "./Gotham-Medium.ttf",
  variable: "--font-gotham-medium",
});
const GothamBold = localFont({
  src: "./Gotham-Bold.ttf",
  variable: "--font-gotham-bold",
});

export { GothamLight, GothamBook, GothamMedium, GothamBold };
