# Task

Hostname consist of an alphabetic host type (e.g. "**apibox**") concatenated with a host number (e.g. "**apibox1**" ,  "**apibox2**", etc. are valid hostnames)

Your task is to create a class called Tracker that support two operations:
-***allocate(hostype)***, which reserves the first available hostname and returns it
-***deallocate(hostname)***, which should release that hostname back in the pool

The input for this task is an array of sequential queries in string form where a query of type "**A hostType**" means a call to "**tracker.allocate(hostType)**" and query of type "**D hostname**" means a call to "**tracker.deallocate(hostaname)**".
The output should be an array of return values of all **allocate** calls.


# E.g.
```
query = ['A apibox', 'A apibox', 'D apibox1, 'A sitebox','A apibox']

tracker.allocate('apibox')   -> allocate['apibox1']
tracker.allocate('apibox')   -> allocate['apibox1','apibox2']
tracker.deallocate('apibox1')-> allocate['apibox2']
tracker.allocate('sitebox')  -> allocate['apibox2','sitebox1']
tracker.allocate('apibox')  -> allocate['apibox2','sitebox1','apibox1']
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`

Install all the dependencies
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
