define(['jquery', 'underscore', 'backbone', 'user'], function($, _, Backbone, User) {

    var UserView = Backbone.View.extend({
        model: User.UserModel,
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        events: {
            'click #remove-user': 'removeUser'
        },

        removeUser: function() {
            this.model.destroy();
            this.remove();
        },

        remove: function() {
            this.render();
        },

        render: function() {
            var template = _.template($('#userTemplate').html());
            var html = template(this.model.toJSON());
            this.$el.html(html);

            return this;
        }

    });

    var UserGroupView = Backbone.View.extend({
        // template: _.template($('#user-template').html());
        model: User.UserCollection,


        initialize: function() {
            this.listenTo(this.model, 'reset', this.render);
            this.listenTo(this.model, 'add', this.add);
            this.model.on ('remove',this.render, this); 
        },

        
        add: function() {
            this.render();
        },

        render: function() {
            var self = this;
            var template = _.template($('#usersTemplate').html());
            var html = template();
            this.$el.html(html);

            this.model.each(function(el) {
                console.log(el);
                var userView = new UserView({ model: el });
                self.$('#user-container').append(userView.render().$el);
            });

            return this;
        }

    });

    return UserGroupView;
});