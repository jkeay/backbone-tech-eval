define(['jquery', 'underscore', 'backbone', 'usermodel', 'usercollection', 'createuserview'], function($, _, Backbone, UserModel, UserCollection, CreateUserView) {
	var DisplayUsersView = Backbone.View.extend({
		initialize: function(event) {
			this.tableBody = this.$('.x-user-table-body');
			this.createUserView = new CreateUserView({collection: this.collection});
			this.listenTo(this.collection, 'sync', this.render);
		},
		el: $('.x-users-container'),
		events: {
			'click .x-delete-user-btn': 	'deleteUser',
			'click .x-create-user-btn': 	'openCreateUserView'
		},
		render: function() {
			var template = _.template('<tr><td><%= username %></td>\
			<td><%= name %></td><td><%= phonenumber %></td>\
			<td><button type="button" class="x-delete-user-btn btn btn-danger pull-right" id="<%= id %>">\
			Delete</button></td></tr>');

			var userHtml = '';
			this.collection.each(function(model) {
				userHtml += template(model.toJSON());
			})

			this.tableBody.html(userHtml);
			return this;
        },
        deleteUser(event) {
        	var button = event.currentTarget;
			var model = this.collection.get(button.id);
        	model.destroy();
        	this.render();
        },
        openCreateUserView: function() {
        	this.createUserView.toggleVisibility();
        }
	});

	return DisplayUsersView;
});