require('./main.less');

var $ = require('jquery');
var d3 = require('d3');
var config = require('./config');

$('.nav-link').click(function () {
    var target = $(this);
    var path =target.attr('path');

    $('.active').removeClass('active');
    target.addClass('active');

    require(['./' + path], function (mod) {
        $(config.main).html('');

        mod.render && mod.render(d3, $);
    });
});
