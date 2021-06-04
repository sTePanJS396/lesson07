
let money;
let expenses;
let sum;
let y = 0;
function start() {
    do {
        money = prompt('Какой твой месячный доход?');
    } while(isNaN(money) || money === '' || money === null);    
};

start();
// Спрашиваем у пользователя месячных доход, и записываем его в переменную money
// Объявим функцию start и реализуем ее функционал с помощью do-while
let appData = {
    income: {},
    addIncome: [],
    expenses: {
         
    },
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 5,
    asking: function () {
        let addExpenses;
        let deposit;
        addExpenses = prompt('Перечисли возможные расходы за определенный период через запятую');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('У тебя есть депозит в банке? Нажми OK, если есть.');
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: y,
    expMonth: function () {
        let i = 0;
        while (i < 2) {
            expenses = prompt('Назови обязательную статью расходов.');
            sum = +prompt('Во сколько это обойдется?');
            appData.expenses[expenses] = sum;
            i++;
        }
        
    }
};

appData.asking();

function getExpensesMonth() {
    appData.expMonth();
    let f, g;
    for (let key in appData.expenses) {
        f = appData.expenses[key];
        g = appData.expenses[key];
        
    }
    return appData.expensesMonth = f + g;
}
getExpensesMonth();



appData.getBudget = function() {
    return appData.budget - appData.expensesMonth;
};
appData.getBudget();

// console.log(appData.getBudget());
// Объявляем функцию, передаем ей параметры, необходимые для вычесления накоплений за месяц,
// вызов функции присваеваем в переменную accumulatedMonth.
// Внесены коррективы: теперь значение вычесляется исходя из переменной sum,
// полученной в результате выполнения функции getExpensesMonth.

appData.getTargetMonth = function() {
    return Math.round(appData.mission / appData.getBudget());    
};
appData.getTargetMonth(appData.getBudget(), appData.mission);
// Фунуция getTargetMonth получит данные, и вычислит, за какой период будет достигнута 
// цель накопить определенную сумму денег

appData.getBudgetDay = function() {
    return Math.floor(appData.getBudget() / 30);
};
appData.budgetDay = appData.getBudget();
// Высчитываем дневной бюджет

appData.getStatusIncome =  function () {
    if (appData.budgetDay >= 1200) {
        return 'У тебя высокий уровень дохода';
    } else if (600 <= appData.budgetDay <= 1200) {
        return 'У тебя средний уровень дохода';
    } else if (0 <= appData.budgetDay <= 600) {
        return 'К сожалению, уровень дохода у тебя низкий';
    } else {
        return 'Что-то пошло не так :(';
    }
    // Вычелсяем уровень дохода
};
appData.getStatusIncome(appData.budgetDay);
// Функция высчитывает уровень дохода


// ------------------Выводим все необходимые данные в консоль----------------------------
console.log(appData.expenses);

console.log(appData.getStatusIncome(appData.budgetDay));
// Уровень дохода

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута через... ' + appData.getTargetMonth(appData.getBudget(), appData.mission));
} else {
    console.log('Цель не будет достигнута :(');
}
// Добавленна проверка переменной whatGetTargetMonth. 
// Срок достижения цели накопления 

console.log('Бюджет на день: ', appData.getBudgetDay());
// Бюджет на день

console.log('Расходы на месяц составили: ' + appData.expensesMonth);
// Расходы за месяц
// При вывове функции не передаем значения amount1 and amount2, так как все необходимые
// данные и вычесление происходят в функции getExpensesMonth.
for (let key in appData) {
    console.log( "Ключ: " + key + " значение: " + appData[key] );
}