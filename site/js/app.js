/**
 * Created by Tsuyoshi on 2014/08/25.
 */
var app = app || {};

$(function() {
    $('#releaseDate').datepicker();
    new app.LibraryView();
});