var d3 = require('d3');
var $ = require('jquery');

var data = [10, 15, 20, 25, 30];
exports.start = function () {
    $('#main').html('');
    d3.select('#main')
        .selectAll('p')
        .data(data).enter()
        .append('p')
        .text(function (d) {
            return d;
        });
};
