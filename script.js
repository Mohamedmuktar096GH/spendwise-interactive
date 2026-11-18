// 1. STATE & ARRAYS: Store budget and multiple expense records
let totalBudget = 0;
let expenses = [];

// 2. DOM ELEMENTS: Select elements to update dynamically
const budgetForm = document.getElementById('budget-form');
const budgetInput = document.getElementById('budget-input');
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');

const totalBudgetDisplay = document.getElementById('total-budget');
const totalSpentDisplay = document.getElementById('total-spent');
const remainingBalanceDisplay = document.getElementById('remaining-balance');
const statusBanner = document.getElementById('status-banner');
const expenseList = document.getElementById('expense-list');
const clearBtn = document.getElementById('clear-btn');

// 3. EVENT LISTENERS: Handle user interactions
budgetForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    const enteredBudget = parseFloat(budgetInput.value);

    // Conditional validation
    if (enteredBudget > 0) {
        totalBudget = enteredBudget;
        budgetInput.value = '';
        updateDashboard();
    } else {
        alert('Please enter a valid budget amount greater than 0.');
    }
});

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    // Conditional check before adding to array
    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and positive amount.');
        return;
    }

    // Create an expense object and push it to the expenses array
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    // Clear form inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    // Update the UI
    updateDashboard();
});

clearBtn.addEventListener('click', function() {
    if (expenses.length > 0) {
        expenses = []; // Reset array
        updateDashboard();
    }
});

// Function to delete a single expense by ID
function deleteExpense(id) {
    // Filter out the deleted item into a new array
    expenses = expenses.filter(function(item) {
        return item.id !== id;
    });
    updateDashboard();
}

// 4. LOOPS, CONDITIONALS & DOM UPDATES: Main function to refresh the page
function updateDashboard() {
    let totalSpent = 0;

    // LOOP: Calculate total spent by iterating through the expenses array
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i].amount;
    }

    const remainingBalance = totalBudget - totalSpent;

    // DOM MANIPULATION: Update summary figures
    totalBudgetDisplay.textContent = `KES ${totalBudget.toLocaleString()}`;
    totalSpentDisplay.textContent = `KES ${totalSpent.toLocaleString()}`;
    remainingBalanceDisplay.textContent = `KES ${remainingBalance.toLocaleString()}`;

    // CONDITIONALS: Evaluate budget health and update feedback banner
    statusBanner.className = 'banner'; // Reset classes

    if (totalBudget === 0) {
        statusBanner.classList.add('neutral');
        statusBanner.textContent = 'Please set a monthly budget to track your spending health.';
    } else if (remainingBalance < 0) {
        statusBanner.classList.add('danger');
        statusBanner.textContent = `Alert: You have exceeded your budget by KES ${Math.abs(remainingBalance).toLocaleString()}!`;
    } else if (remainingBalance <= totalBudget * 0.2) {
        statusBanner.classList.add('warning');
        statusBanner.textContent = 'Warning: You have used 80% or more of your budget. Spend carefully!';
    } else {
        statusBanner.classList.add('safe');
        statusBanner.textContent = 'Great job! Your spending is well within your budget.';
    }

    // RENDER LIST USING A LOOP
    renderExpenseList();
}

function renderExpenseList() {
    // Clear existing list HTML
    expenseList.innerHTML = '';

    if (expenses.length === 0) {
        expenseList.innerHTML = '<p style="color: #64748b; text-align: center;">No expenses recorded yet.</p>';
        return;
    }

    // Loop through expenses array and build HTML elements
    expenses.forEach(function(expense) {
        const li = document.createElement('li');
        li.className = 'expense-item';

        li.innerHTML = `
            <div class="expense-info">
                <strong>${expense.name}</strong>
                <span>Category: ${expense.category}</span>
            </div>
            <div class="expense-actions">
                <strong>KES ${expense.amount.toLocaleString()}</strong>
                <button class="delete-item-btn" onclick="deleteExpense(${expense.id})">Delete</button>
            </div>
        `;

        expenseList.appendChild(li);
    });
}

// Initialize display on load
renderExpenseList();
