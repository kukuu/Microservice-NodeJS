'use strict';
var request = require('request-promise-native');

module.exports = {
	getAllPosts: function() {
		let options = {
			url: 'https://jsonplaceholder.typicode.com/posts'
			//replace
		}
		return request.get(options);
	},
	getPost: function(postId) {
		console.log('PostService::getPost()' + postId);
		let options = {
			url: 'https://jsonplaceholder.typicode.com/posts/' + postId
			//replace; see  node-test-off-site/stubs/users.json
			//node-test-off-site/stubs/user.json
		}
		return request.get(options);
	}
}