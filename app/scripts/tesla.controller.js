/*global define*/
define(function (require) {
    'use strict';
    return require('backbone.marionette').Controller.extend({
        initialize: function () {
            this.app = this.options.app;
        },
        showTeslaSurvey: function () {
            var view = new(require('./view/app'))({
                model: new(require('tesla.model'))()
            });
            this.app.show(view);
        }
    });
});
