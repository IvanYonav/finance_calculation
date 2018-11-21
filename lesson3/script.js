
let money, time;

function start() {
    money = +prompt("Ваш бюджет за месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-19");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет за месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let mandatoryArticle = prompt("Введите обязательную статью расходов в этом месяце", ""),
            answer = +prompt("Во сколько обойдется?", "");

        if ((typeof (mandatoryArticle)) === 'string' && (typeof (mandatoryArticle)) != null &&
            (typeof (answer)) != null && mandatoryArticle != '' && answer != '' && mandatoryArticle.length < 50) {
            appData.expenses[mandatoryArticle] = answer;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optArticle = prompt("Введите статью Необязательных расходов в этом месяце", ""),
            answOptArt = +prompt("Во сколько обойдется?", "");

        if ((typeof (optArticle)) === 'string' && (typeof (optArticle)) != null &&
            (typeof (answOptArt)) != null && optArticle != '' && answOptArt != '' && optArticle.length < 50) {
            appData.expenses[optArticle] = answOptArt;
        }
    }
}
chooseOptExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день составит: " + appData.moneyPerDay + " руб.");
}
detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достака");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего: " + appData.monthIncome);
    }
}
checkSavings();



