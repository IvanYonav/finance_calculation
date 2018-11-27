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
    savings: true,
    chooseExpenses: function () {
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