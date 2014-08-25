/**
 * Created by Tsuyoshi on 2014/08/25.
 */
var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book
});