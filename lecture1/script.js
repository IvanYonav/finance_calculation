
function selection(a, b) {
    if (a == 1) {
        a++;
    }
    outer: for (let i = a; i <= b; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue outer;
        }
        document.write('<p>' + i + ' - делители этого числа: ' + 1 + ' и ' + i + '</p>');
}
};
selection(1, 100);

