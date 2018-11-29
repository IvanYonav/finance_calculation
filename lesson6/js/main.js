// кнопка старта
let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudGetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),


    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    calcBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkbox = document.querySelector('.checksavings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time,
    diStart = false;
    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    calcBtn.disabled = true;



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
    expensesBtn.disabled = true;
    diStart = true;
    BlockExpensesItem();
    optionalExpensesBtn.disabled = true;
    BlockOptionalItem();
    calcBtn.disabled = false;
});


for (let i = 0; i < expensesItem.length; i++) {
    expensesItem[i].addEventListener('input', BlockExpensesItem);
};

// функция для проверки ввода обязательных раходов
function BlockExpensesItem() {
    for (let i = 0; i < expensesItem.length; i++) {
        if (expensesItem[i].value != '' && diStart) {
            expensesBtn.disabled = false;
        } else {
            expensesBtn.disabled = true;
        }
    }
};


let sumExp = 0;

expensesBtn.addEventListener('click', function () {
    for (let i = 0; i < expensesItem.length; i++) {
        let mandatoryArticle = expensesItem[i].value,
            answer = expensesItem[++i].value;
        if ((typeof (mandatoryArticle)) != null && (typeof (answer)) != null && mandatoryArticle != '' && answer != '' && mandatoryArticle.length < 50) {
            console.log("Все верно");
            appData.expenses[mandatoryArticle] = answer;
            sumExp += +answer;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sumExp;
});


optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optArticle = optionalExpensesItem[i].value;

        appData.optionalExpenses[i] = optArticle;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

for (let i = 0; i < optionalExpensesItem.length; i++) {
    optionalExpensesItem[i].addEventListener('input', BlockOptionalItem);
};

// функция для проверки ввода НЕобязательных раходов
function BlockOptionalItem() {
    for (let i = 0; i < 1; i++) {
        if (optionalExpensesItem[i].value != '' && diStart) {
            optionalExpensesBtn.disabled = false;
        } else {
            optionalExpensesBtn.disabled = true;
        }
    }
};

calcBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = +((appData.budget - sumExp) / 30).toFixed();
        dayBudGetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достака";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudGetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};