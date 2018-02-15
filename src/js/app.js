define(['underscore', 'backbone', 'jquery', 'userview','adduserview', 'user'], function(_, Backbone, $, UserGroupView, AddUserView, User) {

    var users = new User.UserCollection();
    users.on('all',function(event){
      console.log(event);
    });

    users.fetch();
    console.log(users);

    var userviews = new UserGroupView({model: users});

    var addUserView = new AddUserView({model: users});

    $('#container').html(userviews.render().$el);

    $('#container').append(addUserView.render().$el);
});