
function selection(a, b) {
    let arr = [];
    outer: for (var i = a; i <= b; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue outer;
        }
        arr.push(i);
    }
    arr.forEach(function (item, i) {
    if (++i) {
        document.write('<p>' + item + ' - делители этого числа: ' + 1 + ' и ' + item + '</p>');
    }
});
};
selection(2, 100);

