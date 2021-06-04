
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
    asking: function () {
        let addExpenses;
        let deposit;
        addExpenses = prompt('Перечисли возможные расходы за определенный период через запятую');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('У тебя есть депозит в банке? Нажми OK, если есть.');
    },

    budget: money,
    budgetDay: function() {
        return Math.floor(appData.getBudget() / 30);
    }
    ,
    budgetMonth: 0,
    expensesMonth: 0,
    expMonth: function () {
        let i = 0;
        let expenses;
        let sum;
        while (i < 1) {
            do {
                expenses = prompt('Назови обязательную статью расходов.');
                sum = +prompt('Во сколько это обойдется?');
                appData.expenses[expenses] = sum;
                i++;
            } while (isNaN(sum) || sum === '' || sum === null);
        }
        
    },
    expensMonth: function getExpensesMonth() {
        appData.expMonth();
        let f;
        for (let key in appData.expenses) {
            f = appData.expenses[key];
            
        }
        return appData.expensesMonth = f;
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

appData.expensMonth();

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

/* 
Что сделанно:
1) Удалить все не используемые переменные вне appData - выполнено. ТЗ: "Все остальное почистить в программе у нас всего две переменных money и appData" 

3) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData - ОК, без проблем :)

4) У пользователя нужно спросить дважды, а не четырежды о статье расходов и их стоимости - сделанно!

5) Куда пропала проверка на введенное значение? - Так вот же: (см. Метод exMonth)
*/
