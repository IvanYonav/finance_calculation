let week = ["Понедельник", "Втоник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let monday = week.slice(0, 1);
let weekends = week.slice(-2);
// week = week.splice(1, 4);


week.forEach(function (item, index) {
    if (index == 0) {
        document.write('<p>' + item.italics() + '</p>');
    } else if (index == 5 || index == 6) {
        document.write('<p>' + item.bold() + '</p>');
    } else {
        document.write('<p>' + item + '</p>');
    }
});

let arr = ["3456", "54543", "34", "746", "53", "543", "75"];

let check = arr.filter(function (item) {
    let startPos = item.substr(0, 1);
    return startPos == 7 || startPos == 3;
});
console.log(check);


