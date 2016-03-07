/*global define*/
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette');

    return Marionette.LayoutView.extend({
        el: "#tesla-app",
        region: {
            step1Region: '#tesla-step1',
            step2Region: '#tesla-survey-step2'
        },
        serializeData: function () {
            return {
                data: this.model.toJSON()
            };
        },
        onShow: function () {
            this.renderStep1();
        },
        renderStep1: function () {
            var view = new(require('./tesla-survey.view'))({
                model: this.model
            });
            this.step1Region.show(view);
        },
        renderStep2: function () {
            var view = new(require('./tesla-survey-summary.view'))({
                model: this.model
            });
            this.step2Region.show(view);
        }
    });
});
