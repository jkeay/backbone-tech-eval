define(['jquery', 'underscore', 'backbone', 'user'], function($, _, Backbone, User) {

    
var AddUserView = Backbone.View.extend({
   model: User.UserCollection,

   events: {
     "click #add-user": "onAddClick"
   },

   onAddClick: function(e) {
     var name = $('#get-name').val();
     var phone = $('#get-phone').val();
     var phone_num = parseInt(phone);
     console.log(phone_num);
     var username = $('#get-uame').val();

     var newUser = this.model.create({
        name: name,
        phonenumber: phone_num,
        username: username
     });

     $('#get-name').val("");
     $('#get-phone').val("");
     $('#get-uname').val("");

   },

   render: function() {
     var template = _.template($("#addUserTemplate").html());
     var html = template();
     this.$el.html(html);
     return this;
   }
 });

    return AddUserView;
});



