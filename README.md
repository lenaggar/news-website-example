# News Homepage app

- [Overview][]
- [How To Run][]
- [ToDo][]

## Overview

[overview]: #overview

This is a simple FE react app created with [vite.js](https://vitejs.dev/) that displays news entries like [nu.nl](https://www.nu.nl/). The data-source is a static csv file. The app fetches the file, parses it on the client and displays the data.

## How To Run

[how to run]: #how-to-run

Clone the repo locally, install the dependencies, and start the app.
All you need to do after cloning the repo locally is to run `npm install && npm run preview` then open the url in the terminal. That's it!

## ToDo

[todo]: #todo

- Add unit tests (especially for the business logic part).
- Add e2e tests.
- infinite scrolling in case there's an actual endpoint to call.
