/**
 * Created by Tsuyoshi on 2014/08/25.
 */

var application_root = __dirname;

var express = require('express'); // Webフレームワーク
var path = require('path'); // パス関連のユーティリティ
var mongoose = require('mongoose'); // MongoDBと統合します

// サーバを作成します
var app = express();

// サーバを設定します
app.configure(function () {
    // リクエストの本文を解析してrequest.bodyにセットします
    app.use(express.bodyParser());

    // リクエストのオーバーライドのためにrequest.bodyをチェックします
    app.use(express.methodOverride());


    // URLとリクエスト形式の組に基づいてルートを取得します
    app.use(app.router);

    // 静的コンテンツが置かれた場所を示します
    app.use(express.static(path.join(application_root, 'site')));


    // 開発中にはすべてのエラーを表示します
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// サーバを開始します
var port = 4711;
app.listen(port, function() {
    console.log('Expressサーバがポート %d で起動しました。モード: %s', port, app.settings.env);
});


// ルーティング
app.get('/api', function(request, response) {
    response.send(' ライブラリの API を利用可能です ');
});