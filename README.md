The project is made using React.js. using ChatEngine.io as the backend.
It is designed as the front end for a chat-app, which can login/logout users, display chat threads and messages, post new messages, and view user online status.


After downloading the project, go to the project folder and run npm start:
  
  cd chatapp
  
  npm start 
  
  //go to http://localhost:3000/ to view it in your browser.
  
-------------
How to Use:

Users can login or sign up using the main loading page.

Some users have already been created as below: You can use them or sign up for new ones

Existing (username,password): (u1,u1), (u2,u2), (u3,u3), (u4,u4), (u5,u5)

These 5 users have already been added to a chat "team". You can create your own chat if you want by clicking + on MyChat section. Only the user creating a chat can add other users to it. List of users in the chat is seen above the messages in the center panel. In the right panel, their login status is marked by green(logged in) or red(logged out)

Use "Logout" button on top of the center panel, to switch between users.
  
New messages can be posted by typing in the message box in the center panel bottom.

User's messages are differentiated from others' messages by indent. Messages are displayed with the username in front of it, to identify the sender (in place of avatar)
  
"Edit" "Delete" "Reply" buttons appear below current user's messages and only "Reply" under other user's messages. Right now, these buttons only log to the console, and do not perform any task.

===============================================================================================

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
