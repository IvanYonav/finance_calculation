// кнопка старта
let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudGetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    calcBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    possibleIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('.checksavings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-27");
    money = +prompt("Ваш бюджет за месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет за месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let mandatoryArticle = expensesItem[i].value,
            answer = expensesItem[++i].value;

        if ((typeof (mandatoryArticle)) != null && (typeof (answer)) != null && mandatoryArticle != '' && answer != '' && mandatoryArticle.length < 50) {
            console.log("Все верно");
            appData.expenses[mandatoryArticle] = answer;
            sum += +answer;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на один день составит: " + appData.moneyPerDay + " руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достака");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optArticle = prompt("Статья необязательных расходов?", "");

            if ((typeof (optArticle)) === 'string' && (typeof (optArticle)) != null && optArticle != '' && optArticle.length < 50) {
                appData.optionalExpenses[i] = optArticle;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что приносит дополнительный доход? (Перечислете через запятую)", "");

            if (items !== null && items !== '' && isNaN(items)) {
                appData.income = items.split(", ");
                for (let i = 0; i < 1; i++) {
                    let itemAdd = prompt("Может что-то еще?", "");
                    if (itemAdd !== null && itemAdd !== '' && isNaN(itemAdd)) {
                        appData.income.push(itemAdd);
                    } else {
                        i = i - 1;
                    }
                }
            } else {
                i = i - 1;
            }
        }
        appData.income.sort();
        document.write('<p> Способы дополнительного заработка:</p>');
        appData.income.forEach(function (item, i) {
            if (++i) {
                document.write('<p>' + i + ': ' + item + '</p>');
            }
        });

    }

};

console.log("Наша программа включает в себя данные:");
for (let key in appData) {
    if ((typeof (appData[key])) == 'function') {
        console.log("Свойство " + key + " является функцией");
    } else if ((typeof (appData[key])) == 'object') {
        console.log("Свойство " + key + " является объектом ");
    } else {
        console.log("Свойство " + key + " имеет значение " + appData[key]);
    }
};