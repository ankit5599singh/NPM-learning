/*fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json));*/

import axios from 'axios';
import Quote from 'inspirational-quotes';

// Make a request for a user with a given ID
axios
	.get('https://jsonplaceholder.typicode.com/todos/1')
	.then(function (response) {
		// handle success
		console.log(response.data);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.finally(function () {
		// always executed
	});

// npm init
// initializes a new Node.js project by creating a package.json file, which stores metadata, dependencies, and scripts for the project.

// npm i axios or npm install axios
// installs the axios package and its dependencies.

// npm i parcel -D
// installs Parcel as a development dependency (-D) in the project, meaning it is only needed for development and not for production.

// npx parcel index.html
// Starts a development server using Parcel to bundle and serve index.html with automatic live reloading.

console.log(Quote.getQuote());
