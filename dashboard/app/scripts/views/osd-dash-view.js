/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'marionette'
], function ($, _, Backbone, JST) {
    'use strict';

    var OsdDashView = Backbone.Marionette.ItemView.extend({
        className: 'col-lg-3 col-md-3 col-sm-6 col-xs-6 custom-gutter',
        template: JST['app/scripts/templates/osd-dash.ejs']
    });

    return OsdDashView;
});
