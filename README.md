# [7419 Tech Support Website](https://frc-7419.github.io)

## Requirements
- Tailwind CSS (https://tailwindcss.com/)
- Next.js (https://nextjs.org/)
- see [package.json](https://github.com/frc-7419/frc-7419.github.io/blob/main/package.json) for more information

## Setup
1. Clone the repository onto your computer
2. Run ```npm install``` or ```npm i```
3. Run ```npm run dev``` to run the project locally and see the live webpage in your browser

## Blog

Create a new `.md` file in `/posts`

### Resize Images

```
![foo](foo.jpg =100x80)     simple, assumes units are in px
![bar](bar.jpg =100x*)      sets the height to "auto"
![baz](baz.jpg =80%x5em)  Image with width of 80% and height of 5em
```
