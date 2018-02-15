define(['jquery', 'underscore', 'backbone', 'usercollection'], function($, _, Backbone, UserCollection) {
	var CreateUserView = Backbone.View.extend({
		initialize: function(event) {
			this.usernameField = this.$('input[name="username"]');
			this.nameField = this.$('input[name="name"]');
			this.phonenumberField = this.$('input[name="phonenumber"]');
		},
		el: $('.x-create-user-container'),
		events: {
			'click .x-sumit-user-btn': 'createUser',
			'click button[type="reset"]': 'toggleVisibility'
		},
		createUser: function(event) {
			var inputUserName = this.usernameField.val();
			var inputName = this.nameField.val();
			var inputPhonenumber = this.phonenumberField.val();

			if(this.isValidForm({userName: inputUserName, name: inputName, phoneNumber: inputPhonenumber})) {
				var user = this.collection.create({
					username: inputUserName,
					name: inputName,
					phonenumber: inputPhonenumber
				});

				this.collection.trigger('sync');
				this.toggleVisibility();
			}
		},
		isValidForm: function(input) {
			if(input.userName == "") {
				alert("Username is required");
				return false;
			} else if(input.name == "") {
				alert("Name is required");
				return false;
			}

			//TODO: validate phonenumbers to only contain numbers

			return true;
		},
		toggleVisibility: function() {
			this.$el.toggleClass('hidden');
			this.clearForm();
		},
		clearForm: function() {
			this.usernameField.val("");
			this.nameField.val("");
			this.phonenumberField.val("");
		}
	});

	return CreateUserView;
});