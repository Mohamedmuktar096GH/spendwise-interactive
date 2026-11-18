# SpendWise — Interactive Budgeting Application

## Project Description
SpendWise is an interactive personal budgeting and expense tracking web application. Users can set a monthly budget, log expenses by category, receive real-time financial health alerts, and manage their spending records dynamically in the browser.

## Technologies Used
- **HTML5:** Semantic structure for budget setup, expense forms, summary cards, and expense history.
- **CSS3:** Responsive dashboard layout, flexbox/grid styling, and dynamic status alert themes.
- **JavaScript (ES6+):** Arrays, loops, conditional statements, DOM manipulation, and event listeners.
- **Git & GitHub:** Version control and remote repository hosting.
- **Netlify:** Continuous deployment and live web hosting.

## GitHub Repository Information
- **Repository Name:** `spendwise-interactive`
- - **Repository URL:**  https://github.com/Mohamedmuktar096GH/spendwise-interactive
- **Visibility:** Public

## Live Netlify Website URL
- **Live Site:** https://mohamedspendwise.netlify.app
 


## Deployment Process Summary
1. Organized `index.html`, `style.css`, `script.js`, and `README.md` at the root of the public GitHub repository.
2. Logged into Netlify and authorized access to GitHub.
3. Imported the `spendwise-interactive` repository and configured a custom subdomain (`mohamedspendwise.netlify.app`).
4. Published the site publicly and verified all pages, styles, and scripts loaded properly.
5. Tested continuous deployment by updating the subtitle in `index.html`, committing to GitHub, and confirming Netlify rebuilt and updated the live site automatically.

## Challenges Encountered During Deployment
- **Project Visibility Setting:** Immediately after the initial deploy, Netlify defaulted the project status to private. Clicking **Make public** in the project overview made the production site accessible to everyone.
- **GitHub Authorization Verification:** Connecting Netlify to GitHub required two-factor verification via GitHub Mobile, which was completed by approving the prompt code.

## Lessons Learned
- Connecting a GitHub repository to Netlify automates builds and deployments whenever new commits are pushed to the main branch.
- Keeping `index.html` at the root directory with relative file paths (`style.css`, `script.js`) ensures assets load reliably in production.
- Testing both locally and on the live URL catches visibility or path issues before final delivery.
