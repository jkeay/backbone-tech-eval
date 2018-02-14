define(['underscore', 'backbone', 'jquery'], function(_, Backbone, $) {

    var UserView = Backbone.View.extend({
            tagName: 'li',



            initialize: function() {
                // this.listenTo(this.model, 'change', this.render);
                // this.listenTo(this.model, 'destroy', this.remove)
            },

            render: function() {
                this.$el.html('hello world');
            return this;
        }

    });

    var userview = new UserView();

    $('#container').html(userview.render().$el);
});