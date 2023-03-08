# News Homepage app

- [Overview][]
- [How To Run][]
- [ToDo][]

## Overview

[overview]: #overview

This is a simple FE react app created with [vite.js](https://vitejs.dev/) that displays news entries like [nu.nl](https://www.nu.nl/). The data-source is a static csv file. The app fetches the file, parses it on the client and displays the data.

## How To Run

[how to run]: #how-to-run

There are 2 ways to run this app:

1. I have already deployed the latest build to github-pages under [lenaggar.github.io/news-website-example](https://lenaggar.github.io/news-website-example/). Please let me know if it's not working.

2. The second way is to clone the repo locally, install the dependencies, and start the app.
   All you need to do after cloning the repo locally is to run `npm install && npm run preview`. That's it!

## ToDo

[todo]: #todo

- Add unit tests (especially for the business logic part).
- Add e2e tests.
- infinite scrolling in case there's an actual endpoint to call.
