exports.render = function (d3) {
    var data = [11, 15, 20, 25, 30];
    d3.select('#main')
        .selectAll('p')
        .data(data).enter()
        .append('p')
        .text(function (d) {
            return d;
        });
};
