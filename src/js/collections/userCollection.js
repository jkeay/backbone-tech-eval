// User Collection Class
var UserCollection = Backbone.Firebase.Collection.extend({
	url: 'https://backbone-demo-a094e.firebaseio.com/users',
	model: UserModel
});