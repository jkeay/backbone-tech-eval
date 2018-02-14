var UserModel = Backbone.Model.extend({
  defaults: {
    name: '',
    phonenumber: 0,
    username: ''
  }
});

var UserCollection = Backbone.Firebase.Collection.extend({
  url: 'https://backbone-demo-a094e.firebaseio.com/users',
  model: UserModel
});