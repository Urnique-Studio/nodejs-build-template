# NodeJS build template

## Installation (new repo)
1. Click "New repository" at github
2. In "Repository template" section select this template
3. Clone your repo
4. In command line `npm init -y`
5. Your main file will be `index.js` at root directory

## Installation (existed repo)
1. Copy every files in this repo to yours except README.md

## How to change main file
Your default main file will be `index.js`

Change `Dockerfile` line 10 `CMD ["node", "/app/index.js"]` to `CMD ["node", "/app/<your_main_file>.js"]`

## Node version
In this template, we use node version 16 (16.15.1)

If you don't use version 16, you have 2 choices
1. Use node version 16 https://nodejs.org/en/blog/release/v16.16.0
2. Change build file
  * Change tag in `Dockerfile` line 1 `FROM node:16.15.1-alpine3.15 as builder` to `FROM node:<tag> as builder`
  * Nodejs tag can be found at https://hub.docker.com/_/node/ section supported tags