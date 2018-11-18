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

    appData.expenses[mandatoryArticle] = answer;

}
let moneyDay = (money - (secondAnswer + firstAnswer)) / 30;
alert("Ваш бюджет на один день составит: " + moneyDay + " руб.");