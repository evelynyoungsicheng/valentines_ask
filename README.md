# Valentines Ask

A React application for creating a special Valentine's Day ask.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Deploys the app to GitHub Pages. This command automatically runs `npm run build` first, then pushes the build files to the `gh-pages` branch.

**Prerequisites:**
- Ensure your `package.json` has the correct `homepage` field set to your GitHub Pages URL
- Make sure you have an SSH key set up for GitHub or have GitHub CLI authentication configured

## Deployment to GitHub Pages

This app is configured for automatic deployment to GitHub Pages.

### Initial Setup

1. Ensure the `homepage` field in `package.json` is set correctly:
   ```json
   "homepage": "https://evelynyoungsicheng.github.io/valentines_ask"
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select the `gh-pages` branch and `/root` folder
   - Save

### Deploying

Simply run:
```bash
npm run deploy
```

This will build your app and push it to the `gh-pages` branch. GitHub Pages will automatically deploy the changes.

Your app will be available at: https://evelynyoungsicheng.github.io/valentines_ask

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
