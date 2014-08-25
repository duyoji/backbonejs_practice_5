/**
 * Created by Tsuyoshi on 2014/08/25.
 */
var app = app || {};
app.BookView = Backbone.View.extend({
    tagName: 'div',

    className: 'bookContainer',

    events: {
        'click .delete': 'deleteBook'
    },

    template: _.template($('#bookTemplate').html()),

    render: function() {
        // this.$elはtagNameで指定されたオブジェクトです。jQueryのhtml()
        // 関数を呼び出す際に利用できます
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    deleteBook: function() {
        // モデルを削除します
        this.model.destroy();
        // ビューを削除します
        this.remove();
    }
});