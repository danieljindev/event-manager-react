<h2 align="center">React.js SPA for Managing Events</h2>

![Screenshot](./Screenshot.png)

## Features

- **Add to Entries** - Add event to the entries by clicking event button
- **Remove from Entries** - Remove event from the entries by clicking event button
- **Pagination** - Enables the user to select a specific page from a range of pages.
- **Loading Spinners** - Enables multiple loading spinners when browser load events from API
- **Entry Notification** - When user add and remove entries, the notification shows accordingly
- **About Us** - Show App information

## About

This is a simple but enterprise-ready event management app created from [Create React App](https://create-react-app.dev/) by [Daniel](https://github.com/danieljindev/).

## Application Installation

Clone and install.

```bash
git clone https://github.com/danieljindev/event-manager-react.git
cd event-manager-react
npm i
```

Run a development server.

```bash
npm run start
```

- **Application name**: Event Manger
- **Homepage URL**: `http://localhost:3000`
- **Deployed Server URL**: [Click Here](https://ecstatic-lovelace-2beaf0.netlify.app/)

#### Development mode

Go to `localhost:3000` to view the app.

```bash
npm run start
```

#### Production mode

In the production environment, the React app is built and saved to `build` folder.

```bash
npm run build && npm run start
```

## Testing

Run unit and component/integration tests.

```bash
npm run test
```

> If using Jest Runner in VSCode, add `"jestrunner.configPath": "config/jest.config.js"` to your settings

Run Cypress end-to-end tests.

```bash
# In one window, run the application
npm run start

# In another window, run the end-to-end tests
npm run test:e2e:open
```

## Author

- [Daniel Jin](https://github.com/danieljindev/)
