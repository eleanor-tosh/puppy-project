# Social Puppy
An app to help you track your socialising of your puppy.

## User Stories:
I want to be able to record what puppy socializing activities I have completed each day.

I want to be able to pick activities from a list that includes different categories.

I want to be able to see statistics for the activities that I have done - number of unique activities, number of each category per day and per week, on a graph if possible.

I want to add activities to today and past dates incase I don't get to it immediately.

I want to be able to record notes for each activity to remind myself of how the puppy responded.

Perhaps add flags to important activities that need more attention.

I want to be able to see some puppy raising tips.

I want to have a record of for when I need to do vaccination/worming/health concerns etc.

## Additional Features to Consider:
Sort/filter function for tasks - by key word, by date

Auth0

Profile function- add puppy, edit, delete, upload, photo/s (of puppy? of socialing or other important stuff?)

Weekly overview/report - potentially automatically email a report to who ever you want it sent to

Maybe add a quiz or a game

## Tech Targets
React, database, tailwind, image upload, Auth0


# Boilerplate Details:

## Boilerplate: React with Webpack
This is a starter project that uses webpack to transpile and bundle ES6 React code. 

## Setup

### Installation
To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

---

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react-api)
