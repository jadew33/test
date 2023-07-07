This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

When you clone this locally, make sure to `npm i` at the root folder (the one with /package-lock.json) to install all of the required dependencies.

Then to start the development server, I usually run:

`npm run dev `

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For all styles, I have created a styles folder inside the app folder. You can find the file corresponding to each component there. <br/>
If you look in /app/globals.scss, you can find that all of these files are imported. Now, because app/globals.scss is imported in app/page.js, the styles can be used by every other /(component)/page.js without importing the specific scss file. This also means that if you create a new scss file, you will have to write an import statement inside /app/globals.scss. (Do not import your file above /app/styles/variables.scss, your file may not have access to the variables if so). <br/>
For all variables (colours, breakpoints, fonts) please reference them from /app/styles/variables.scss. Again, since all of the files were imported in app/globals.scss, you can use these variables on each scss file.<br/>
Please look at the Navbar and Footer (both the styles/scss files and /app/Footer.js or Navbar.js) for examples of use. <br/>
If this doesn't work as I described, please dm me and we can sort this out.

## Learn More

- [Quick SCSS Video](https://www.youtube.com/watch?v=akDIJa0AP5c) - Quick scss video with all of its features.

We are using Next 13 with the app router, so please look at relevant resources to learn. These are some given in the default readme

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
