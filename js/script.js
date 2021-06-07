const button = document.getElementById('start');
// Кнопка "Рассчитать"
const buttonTagOne = document.getElementsByTagName('button')[0];
// Первый "Плюсик"
const buttonTagTwo = document.getElementsByTagName('button')[1];
// Второй "Плюсик"
const checkBox = document.querySelector('#deposit-check');
// Чекбокс
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
// Поля для ввода возможных доходов
const budgetMonth = document.getElementsByClassName('budget_day-value')[0];
// Дневной бюджет
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
// Расход за месяц
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
// Возможные доходы
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
// Возможные расходы
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
// Накопления за период
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
// Срок достижения цели в месяцах
const salaryAmount = document.querySelector('.salary-amount');
// Месячный доход
const incomeTitle = document.querySelector('.income-title1');
// Дополнительный доход/Наименование
const incomeAmount = document.querySelector('.income-amount');
// Дополнительный доход/Сумма
const expensesTitle = document.querySelector('.expenses-title1');
// Обязательные расходы/Наименование
const expensesAmount = document.querySelector('.expenses-amount');
// Обязательные расходы/Сумма
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
// Возможные расходы
const depositCheck = document.querySelector('#deposit-check');
// Чекбокс депозит
const periodSelect = document.querySelector('.period-select')
// Range 


console.log(button);
console.log(buttonTagOne);
console.log(buttonTagTwo);
console.log(checkBox);
console.log(additionalIncomeItem);
console.log(budgetMonth);
console.log(expensesMonthValue);
console.log(additionalIncomeValue);
console.log(additionalExpensesValue);
console.log(incomePeriodValue);
console.log(targetMonthValue);
console.log(salaryAmount);
console.log(incomeTitle);
console.log(incomeAmount);
console.log(expensesTitle);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(depositCheck);
console.log(periodSelect);