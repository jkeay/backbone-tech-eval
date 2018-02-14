define(['underscore', 'backbone', 'jquery', 'userview', 'user'], function(_, Backbone, $, UserView, User) {

    var users = new User.UserCollection();

    users.fetch();
    console.log(users);

    var userview = new UserView({model: users});

    $('#container').html(userview.render().$el);
});