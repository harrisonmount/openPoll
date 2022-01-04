# OpenPoll

## Description
OpenPoll is a full stack anonymous communication application. OpenPoll allows users to create and vote on polls within the app, using a feed based UI.
## Specifications
- Must successfully login before issuing any command on the system

- View polls in a scrollable feed

- Can vote and on polls

- Users are limited to X post per day to throttle traffic

- Feed will be top down scrollable
## Assumptions
- Response Network Design

- Frontend built with Javascript, HTML, and CSS

- Backend built with Node.js express, using http and json file formatting for data transfer and Mongo DB with Monk API for database

- HTTP and Rest architecture used
## Architecture
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%201.png?raw=true)
## Data Model Design
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%202.png?raw=true)

The data transferred within the application is the JSON file of the poll, and the array of JSON files for fetching the feed.
## User Interface
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%203.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%204.png?raw=true)

The UI is feed has a form at the top to input polls, with a ledger of available polls to vote on below.

## Client State Chart
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%205.png?raw=true)
## Server State Chart
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%206.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%207.png?raw=true)
## Application Protocol Design
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%208.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%209.png?raw=true)
## Implementation
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%2010.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%2011.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%2012.png?raw=true)

The full stack web application was successfully implemented locally using live-server, node.js express, javascript, and mongoDB. The demonstration showed how a user interacts with the web page, and the processes within the separate client and server programs.

User inputs a poll in the form and clicks “send poll”

Poll is immediately displayed. 

Poll is voted on by clicking the option buttons.
## Presentation
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%2013.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%2014.png?raw=true)
![alt text](https://github.com/harrisonmount/openPoll/blob/main/media/Picture%2015.png?raw=true)
