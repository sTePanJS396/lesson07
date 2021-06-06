
let money;
function start() {
    do {
        money = prompt('Какой твой месячный доход?');
    } while(isNaN(money) || money === '' || money === null);    
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {
         
    },
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 5,
    budget: money,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses;
        let deposit;
        addExpenses = prompt('Перечисли возможные расходы за определенный период через запятую');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('У тебя есть депозит в банке? Нажми OK, если есть.');
    },
    budgetDay: function() {
        return Math.floor(appData.getBudget() / 30);
    },
    expMonth: function () {
        let i = 0;
        let exp;
        let sum;
        while (i < 1) {
            do {
                exp = prompt('Назови обязательную статью расходов.');
                sum = +prompt('Во сколько это обойдется?');
                i++;
            } while (isNaN(sum) || sum === '' || sum === null);
            appData.expenses[exp] = sum;
        }
        return appData.expensesMonth = appData.expenses[exp];
    },

    getBudget: function() {
        return appData.budget - appData.expensesMonth;
    },

    getTargetMonth: function() {
        return Math.round(appData.mission / appData.getBudget());    
    },

    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return 'У тебя высокий уровень дохода';
        } else if (600 <= appData.budgetDay <= 1200) {
            return 'У тебя средний уровень дохода';
        } else if (0 <= appData.budgetDay <= 600) {
            return 'К сожалению, уровень дохода у тебя низкий';
        } else {
            return 'Что-то пошло не так :(';
        }
    },

    getBudgetDay: function() {
        return Math.floor(appData.getBudget() / 30);
    }

};

appData.asking();

appData.expMonth();

appData.getBudget();

appData.getTargetMonth(appData.getBudget(), appData.mission);

appData.budgetDay = appData.getBudget();

appData.getStatusIncome(appData.budgetDay);


console.log(appData.expenses);

console.log(appData.getStatusIncome(appData.budgetDay));

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута через... ' + appData.getTargetMonth(appData.getBudget(), appData.mission));
} else {
    console.log('Цель не будет достигнута :(');
}

console.log('Бюджет на день: ', appData.getBudgetDay());

console.log('Расходы на месяц составили: ' + appData.expensesMonth);

for (let key in appData) {
    console.log( "Ключ: " + key + " значение: " + appData[key] );
}
