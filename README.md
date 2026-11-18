# SpendWise — Interactive Budgeting Application

SpendWise is a dynamic personal finance and expense tracking web application built with HTML, CSS, and JavaScript.

## Improvements Made This Week
- Upgraded SpendWise from a static layout/console script into a fully interactive web dashboard.
- Added real-time budget setup and expense logging forms.
- Implemented dynamic financial status alerts that react immediately as users add or remove expenses.
- Added individual expense deletion and a "Clear All" reset feature.

## How Conditionals Are Used
Conditional statements (`if / else if / else`) are used throughout `script.js` to validate inputs and evaluate financial health:
- **Input Validation:** Ensures users cannot submit empty expense titles, negative numbers, or zero budgets.
- **Budget Status Alerts:** Compares `remainingBalance` against `totalBudget` to display four distinct states:
  - *Neutral:* When no budget has been set yet.
  - *Safe (Green):* When more than 20% of the budget remains.
  - *Warning (Yellow):* When 80% or more of the budget has been spent.
  - *Danger (Red):* When total expenses exceed the set budget.

## How Arrays Are Used to Store Data
Instead of storing each expense in separate variables, all expense records are stored as objects inside a central `expenses` array (`let expenses = []`). Each object holds an `id`, `name`, `amount`, and `category`. This makes it easy to add new records with `.push()` or remove deleted records with `.filter()`.

## How the DOM Is Updated
JavaScript dynamically updates the webpage without requiring a page refresh:
- `document.getElementById()` selects summary cards and updates `.textContent` for Total Budget, Total Spent, and Remaining Balance.
- `.className` and `.classList.add()` dynamically change the color and message of the status banner.
- `document.createElement()` and `.appendChild()` generate new `<li>` elements to display each recorded expense on the screen.

## How User Interactions Are Handled Through Events
`addEventListener()` connects user actions directly to JavaScript functions:
- **`submit` on `#budget-form`:** Captures the user's budget, prevents default page reload via `event.preventDefault()`, and triggers `updateDashboard()`.
- **`submit` on `#expense-form`:** Captures new expense details, adds them to the array, clears the form, and updates the UI.
- **`click` on `#clear-btn` & Delete buttons:** Resets the expenses array or removes specific items and recalculates totals immediately.

## Challenges Encountered & How They Were Resolved
- **Form Page Reloads:** Submitting forms initially refreshed the browser and wiped out stored array data. This was resolved by adding `event.preventDefault()` inside the form submit event listeners.
- **Duplicate List Rendering:** Re-rendering the expense list initially duplicated previous items. Clearing the container using `expenseList.innerHTML = ''` at the start of `renderExpenseList()` solved the issue.
