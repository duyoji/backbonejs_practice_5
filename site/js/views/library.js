/**
 * Created by Tsuyoshi on 2014/08/25.
 */
var app = app || {};
app.LibraryView = Backbone.View.extend({
    el: '#books',

    events: {
        'click #add': 'addBook'
    },

    initialize: function() {
        this.collection = new app.Library();
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.renderBook);
        this.listenTo(this.collection, 'reset', this.render);
    },

    // コレクション内のそれぞれの本について描画処理を呼び出し、
    // リスト全体を表現します
    render: function() {
        this.collection.each(function(item) {
            this.renderBook(item);
        }, this);
    },

    addBook: function(e) {
        e.preventDefault();
        var formData = {};
        $('#addBook div').children('input').each(function(i, el) {
            if ($(el).val() != '') {
                formData[el.id] = $(el).val();
                if(el.id === 'keywords') {
                    formData[ el.id ] = [];
                    _.each($(el).val().split(' '), function(keyword) {
                        formData[ el.id ].push({ 'keyword': keyword });
                    });
                } else if(el.id === 'releaseDate') {
                    formData[ el.id ] = $('#releaseDate').datepicker('getDate').getTime();
                } else {
                    formData[ el.id ] = $(el).val();
                }
            }
        });

        // this.collection.add(new app.Book(formData));
        this.collection.create(formData);
    },

    // BookViewを使い、個々の本を描画します。生成された要素は
    // リストのDOMに追加されます
    renderBook: function(item) {
        var bookView = new app.BookView({ model: item});
        this.$el.append(bookView.render().el);
    }
});