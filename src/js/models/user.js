define(['underscore', 'backbone','firebase','backbonefire'], function(_, Backbone,Firebase) {

    var UserModel = Backbone.Model.extend({
        defaults: {
            name: '',
            phonenumber: 0,
            username: ''
        },
        autoSync: true
    });

    var UserCollection = Backbone.Firebase.Collection.extend({
        url: 'https://backbone-demo-a094e.firebaseio.com/users',
        model: UserModel,
        autoSync: true
    });

  return {
  	UserCollection: UserCollection,
  	UserModel: UserModel
  };


});