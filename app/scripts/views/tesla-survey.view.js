/*global define*/
define(['backbone'], function(Backbone) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function() {
            template: _.template('text!../templates/tesla-survey.html');
        }
    });
});
