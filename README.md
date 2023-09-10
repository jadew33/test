## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We are using Next 13 with the app router, so please look at relevant resources to learn. These are some given in the default readme

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

When you clone this locally, make sure to `npm i` at the root folder (the one with /package-lock.json) to install all of the required dependencies.

Then to start the development server, I usually run `npm run dev `

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Note that I was not able to get commands like `next build` or `next start` working on my device. If you face the same issues, try running `npm run build` or `npm run start` instead (build required before trying to start). For development purposes, `npm run dev` is enough.

## Styling Guidelines

There is both [TailwindCSS](https://tailwindcss.com/) and [SASS](https://sass-lang.com/) installed on this project. 

### Tailwind CSS

While TailwindCSS provides a lot of utility classes off the bat, I personally find many sites using it to look "biggish" and have problems with spacing. Additionally, if there are a lot of classes applied to one element it can be really hard to read, especially in cases where there were 15+ applied.

Therefore in this project, we have only used it for font colour and font family. To whomever is responsible for this repo in the future, feel free to change the balance between SASS and Tailwind.

You can take a look at the variables I have created for TailwindCSS inside  `tailwind.config.js`. To summarize, there are currently 4 gotham font options. `font-light` is applied as a default to all pages. `font-medium` is essentially the normal version of the font and `font-gothamBold` is for the bold version. `font-book` is somewhat of a mixture between the bold and light versions, and I use it when none of the other fonts look right. I also sometimes apply `font-bold` which is the Tailwind default utility class for making the text bold.

In terms of the colours, in alignment with the 2023 COMPSA redesign, there are 5 standard colours. You can apply them like `text-compsa-yellow` or `bg-compsa-purple` depending on what you are trying to do.

### SASS

[Quick SASS Video](https://www.youtube.com/watch?v=akDIJa0AP5c) - Quick video explaining its features.

Used to do everything other than fonts and font colours.

`app/globals.scss ` controls all of the files. You **DO NOT** need to separately import each SCSS file into their respective components. Since `globals.scss` is imported in `app/layout.js`, every file imported inside `globals.scss` is automatically applied to the entire application. This also applies to the SCSS variables. Since `app/styles/_variables.scss` is imported in `globals.scss`, as long as you import any new scss files you create inside `globals.scss` **below** the variables file, you can access the variables inside your file. If you cannot, it is likely because of an unnecessary import of the scss file inside the js file.



## Contact

If you run into any issues, feel free to dm `www.jade` on discord
