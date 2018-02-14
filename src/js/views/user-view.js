define(['jquery', 'underscore', 'backbone', 'user'], function($, _, Backbone, User) {
    var UserView = Backbone.View.extend({
        // template: _.template($('#user-template').html());
        model: User.UserCollection,

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model,'add', this.add);
        },

        add: function(){
            var self = this;
            this.model.each(function(el) {
                self.$el.append(el.get('name'));
                self.$el.append('<br>');
            });
        },

        render: function() {
            return this;
        }

    });

    return UserView;
});