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

## Data Model Design

The data transferred within the application is the JSON file of the poll, and the array of JSON files for fetching the feed.
## User Interface

The UI is feed has a form at the top to input polls, with a ledger of available polls to vote on below.

## Client State Chart

## Server State Chart

## Application Protocol Design

## Implementation

The full stack web application was successfully implemented locally using live-server, node.js express, javascript, and mongoDB. The demonstration showed how a user interacts with the web page, and the processes within the separate client and server programs.

User inputs a poll in the form and clicks “send poll”

Poll is immediately displayed. 

Poll is voted on by clicking the option buttons.
## Presentation
