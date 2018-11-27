// кнопка старта
let btnStart = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value'),
    dayBudGetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    mandatoryInput = document.getElementsByClassName('expenses-item');

let approveBtn1 = document.getElementsByTagName('button')[0],
    approveBtn2 = document.getElementsByTagName('button')[1],
    calcBtn = document.getElementsByTagName('button')[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let possibleIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('.checksavings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




