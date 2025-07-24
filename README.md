# colddmspro-mock-server

This is a mock server that replicates the API of colddmspro.com for use with the Chrome extension. It is designed for easy deployment (e.g., on Render) and works as a drop-in replacement for the real API.

## Features
- Implements all required endpoints for campaign, account, lead, and analytics
- In-memory data (no database required)
- JWT cookie check (format only)
- CORS enabled for Chrome extensions

## Deploying to Render
1. Fork or clone this repo.
2. Push to your own GitHub repository.
3. Go to [Render.com](https://render.com/) and create a new Web Service.
4. Connect your repo and set the build/start command to `npm install && npm start`.
5. Set the environment variable `PORT` to `10000` (or your preferred port).
6. Deploy!

## Usage
- Update your extension or hosts file to point to your Render server URL instead of `api.colddmspro.com`.
- The extension should work as if it is talking to the real server.

## Customization
- Edit `server.js` to add more campaigns, accounts, or leads as needed.
- For persistent data, connect a database and update the logic accordingly.

---

**This project is for development and testing purposes only.** 