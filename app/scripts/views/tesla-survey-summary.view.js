/*global define*/
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette');

    return Marionette.LayoutView.extend({
        template: require('text!../templates/tesla-survey-summary.html')
    });
});
