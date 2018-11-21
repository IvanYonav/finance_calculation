'use strict';

let money = +prompt("Ваш бюджет за месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-15");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let mandatoryArticle = prompt("Введите обязательную статью расходов в этом месяце", ""),
        answer = +prompt("Во сколько обойдется?", "");

    if ((typeof (mandatoryArticle)) === 'string' && (typeof (mandatoryArticle)) != null
        && (typeof (answer)) != null && mandatoryArticle != '' && answer != '' && mandatoryArticle.length < 50) {
        appData.expenses[mandatoryArticle] = answer;
    } else {i-- }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на один день составит: " + appData.moneyPerDay + " руб.");

if (appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достака");
} else {
    console.log("Произошла ошибка")
}
// Расчет через цикл while

/* let i = 0;
while (i < 2) {
    let mandatoryArticle = prompt("Введите обязательную статью расходов в этом месяце", "");
    let answer = +prompt("Во сколько обойдется?", "");
    i++;
    if ((typeof (mandatoryArticle)) === 'string' && (typeof (mandatoryArticle)) != null &&
        (typeof (answer)) != null && mandatoryArticle != '' && answer != '' && mandatoryArticle.length < 50) {
        appData.expenses[mandatoryArticle] = answer;
    } else {i--}
} */

// расчет через цикл do…while

/* let i = 0;
do {
    let mandatoryArticle = prompt("Введите обязательную статью расходов в этом месяце", "");
    let answer = +prompt("Во сколько обойдется?", "");
    appData.expenses[mandatoryArticle] = answer;
    i++;
    if ((typeof (mandatoryArticle)) === 'string' && (typeof (mandatoryArticle)) != null &&
        (typeof (answer)) != null && mandatoryArticle != '' && answer != '' && mandatoryArticle.length < 50) {
        appData.expenses[mandatoryArticle] = answer;
    } else {i--}
}
while (i < 2); */





