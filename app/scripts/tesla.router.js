/*global define*/
define(function (require) {
    'use strict';
    return require('marionette').AppRouter.extend({
        appRoutes: {
            'tesla-survey': 'showTeslaSurvey'
        }
    });
});
