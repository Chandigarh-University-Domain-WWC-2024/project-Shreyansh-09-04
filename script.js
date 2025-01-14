// Budget Handling
document.getElementById("budget-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savings = parseFloat(document.getElementById("savings").value);

    const remainingBudget = income - (expenses + savings);
    
    const budgetSummary = `
        <h3>Budget Summary</h3>
        <p>Income: $${income}</p>
        <p>Expenses: $${expenses}</p>
        <p>Savings Goal: $${savings}</p>
        <p>Remaining Budget: $${remainingBudget}</p>
    `;

    document.getElementById("budget-summary").innerHTML = budgetSummary;
});

// Expense Tracking
document.getElementById("expense-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

    const expenseSummary = document.getElementById("expense-summary");
    const newExpense = document.createElement("div");
    newExpense.innerHTML = `<p>${expenseName}: $${expenseAmount}</p>`;
    expenseSummary.appendChild(newExpense);
});

// Savings Goals
document.getElementById("savings-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const goalName = document.getElementById("goal-name").value;
    const goalAmount = parseFloat(document.getElementById("goal-amount").value);

    const savingsSummary = document.getElementById("savings-summary");
    const newGoal = document.createElement("div");
    newGoal.innerHTML = `<p>${goalName} Goal: $${goalAmount}</p>`;
    savingsSummary.appendChild(newGoal);
});
