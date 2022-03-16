# [7419 Tech Support Website](https://www.7419.tech/)

## Beta sites

- [RobotPage](https://7419test.surge.sh/)
- [BusinessPage](https://7419business.surge.sh/)
<!-- - [Media](https://7419media.surge.sh/) -->

## Requirements

- Tailwind CSS (https://tailwindcss.com/)
- Next.js (https://nextjs.org/)
- see [package.json](https://github.com/frc-7419/frc-7419.github.io/blob/main/package.json) for more information

## Setup

1. Clone the repository onto your computer
2. Run `npm install`
3. Run `npm run dev` to run the project locally and see the live webpage in your browser

## Structure

- pages - different webpages
  - about - contains different js for each page
  - blog - process the md files in /posts
  - media - photos & videos pages
- partials - parts such as the header or footer
- posts - markdown blog posts
- utils - helper tools

## Blog

Create a new `.md` file in `/posts`

### Resize Images

```
![foo](foo.jpg =100x80)     simple, assumes units are in px
![bar](bar.jpg =100x*)      sets the height to "auto"
![baz](baz.jpg =80%x5em)  Image with width of 80% and height of 5em
```
