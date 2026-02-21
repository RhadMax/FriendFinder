# FriendFinder

A lightweight matching app built with **Node.js** and **Express**. Users complete a short survey and the server returns the closest match based on response similarity, then stores the new entry for future comparisons.

This project focuses on **server routing**, **basic API design**, and **request/response data flow**.

---

## Features

- Survey flow in the browser (static HTML served by Express)
- `POST` survey responses to the server
- Simple matching algorithm to find the closest existing profile
- Stores new submissions in memory (resets on server restart)

---

## Tech Stack

- Node.js
- Express
- HTML/CSS (static files)

---

## How it Works

1. A user fills out the survey.
2. The server compares the submitted answers to existing profiles.
3. The closest match is returned.
4. The new profile is added to the dataset for future matches.

**Matching logic:** total absolute difference across all answers (lower score = closer match).

---

## Running Locally

### Prerequisites
- Node.js (v14+ recommended)

### Install
```bash
npm install
