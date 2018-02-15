requirejs.config({
    paths: {
        app: 'app',
        jquery: 'lib/jquery',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        userview: 'views/user-view',
        adduserview: 'views/add-user-view',
        user: 'models/user',
        firebase: 'lib/firebase',
        backbonefire: 'lib/backbonefire'
    },

    shim: {

    	'backbonefire': {
            deps: ['backbone','firebase'],
            exports: 'backbonefire'
    	},


        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'underscore': {exports: '_'}
    }

});

requirejs(["app"]);