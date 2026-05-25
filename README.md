
# Task Organizer Backend

A simple Express.js backend for managing tasks, using EJS for templating.

## Features

- Express.js server with EJS view engine
- Home page to add and display tasks
- About page
- 404 error page for unmatched routes
- Styled with Tailwind CSS (via CDN)

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the server:**
   ```
   node server.js
   ```
   Or for auto-reload on changes:
   ```
   npx nodemon server.js
   ```

3. **Open in browser:**
   - Home: [http://localhost:9000/](http://localhost:9000/)
   - About: [http://localhost:9000/about](http://localhost:9000/about)

## Project Structure

- server.js — Main server file
- views — EJS templates (`index.ejs`, `about.ejs`, `404.ejs`)
- package.json — Project dependencies

## Requirements

- Node.js
- npm

