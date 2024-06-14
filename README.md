# Static page

This project is a simple static page built as an example client for https://github.com/desyncr/click-dashboard.

## Requirements

- Docker: 24.*
- Node 12.* (npm 8.5.*)
- build-essentials

## Usage

- Run `npm install -g uglify-js`
- Build image `docker-compose build`
- Run container `docker-compose up`

You should be able to access the static page via:
- http://127.0.0.1:3000/

## Overview

This project showcases in [user-tracker.js](user-tracker.js) a simple page-view tracker that connects with the API endpoint listening on `localhost:8001`.

## Further considerations

The tracker script is very simple and lack some features such as:
- Ability to track different types of events (link click, checkout action, etc.)
- The endpoint URL is currently hardcoded in the script itself