require.config({
    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        text: 'vendor/requirejs-plugins/lib/text',
        'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr',
        'backbone.marionette': 'vendor/backbone.marionette/lib/core/backbone.marionette'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        }
    },
    deps: ['jquery', 'underscore']
});

require(['backbone.marionette'], function (Marionette) {
    'use strict';
    return Marionette.extend({
        onStart: function () {
            this.router = new(require('tesla.router'))({
                controller: new(require('tesla.controller'))({
                    app: this.app
                })
            });
        }
    });
});
