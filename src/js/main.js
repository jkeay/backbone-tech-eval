requirejs.config({
    paths: {
        app: 'app',
        jquery: 'lib/jquery',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'underscore': {exports: '_'}
    }

});

requirejs(["app"]);