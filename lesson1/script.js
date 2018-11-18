'use strict';

let money = +prompt("Ваш бюджет за месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-15");

let mandatoryArticle1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondAnswer = +prompt("Во сколько обойдется?", "");
let mandatoryArticle2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost2 = +prompt("Во сколько обойдется?", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses[mandatoryArticle1] = secondAnswer;
appData.expenses[mandatoryArticle2] = cost2;

let moneyDay = (money - (cost2 + secondAnswer)) / 30;
alert("Ваш бюджет на один день составит: " + moneyDay + " руб.");