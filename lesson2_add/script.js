let week = ["Понедельник", "Втоник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let monday = week.slice(0, 1);
let weekends = week.slice(-2);
week = week.splice(1, 4);

document.write('<p>' + monday[0].italics() + '</p>');
week.forEach(function (item) {
    document.write('<p>'+ item + '</p>');
});
weekends.forEach(function (item) {
        document.write('<p>' + item.bold() + '</p>');
});

let arr = ["3456", "54543", "34", "746", "53", "543", "75"];

let check = arr.filter(function (item) {
    return item.substr(0, 1) == 7 || item.substr(0, 1) == 3;
});

console.log(check);


