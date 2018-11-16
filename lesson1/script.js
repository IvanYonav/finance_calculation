'use strict';

let money = +prompt("Ваш бюджет за месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-15");

let mandatoryArticle1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost1 = +prompt("Во сколько обойдется?", "");
let mandatoryArticle2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost2 = +prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        mandatoryArticle: cost1,
        mandatoryArticle2: cost2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let moneyDay = (money - (cost1 + cost2)) / 30;
alert("Ваш бюджет на один день составит: " + moneyDay + " руб.");

