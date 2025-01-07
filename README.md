# Capx-Full-Stack-Developer-Internship
It is a Assignment
1. Application Description
Objective:
Build a Portfolio Tracker that allows users to manage stock holdings and view real-time updates of portfolio value.

Features:

CRUD Operations:
Add, edit, view, and delete stock holdings.
Real-Time Stock Prices:
Use external APIs (e.g., Alpha Vantage, Yahoo Finance) to fetch live stock prices.
Dashboard:
Display portfolio metrics like total value, top-performing stock, and portfolio distribution.
Deployment:
Frontend deployed on Vercel/Netlify.
Backend deployed on Heroku/AWS/Render.
2. Frontend Implementation
Tech Stack:
React (Frontend Framework)
TailwindCSS (Styling)
3. Backend Implementation
Tech Stack:
Spring Boot (Backend Framework)
MySQL (Database)
JPA + Hibernate (ORM)
Let’s break it down step-by-step for clarity on the implementation:

Frontend: React Application
The React application serves as the user interface for the Portfolio Tracker. Here's how the main parts work:

Components Overview
AddStockForm:

Allows the user to add new stocks to the portfolio by entering:
Stock Name
Ticker Symbol (e.g., AAPL for Apple)
Quantity
Buy Price
On submission:
The data is passed to a parent component or API for storage.
Dashboard:

Displays key portfolio metrics:
Total Portfolio Value: Sum of all stocks' current market values.
Top Performing Stock: The stock with the highest current market value.
Portfolio Distribution: Percentage distribution of portfolio value by stock.
PortfolioTable:

Displays the list of stocks in a table format with:
Name, ticker, quantity, buy price.
Action buttons for edit and delete.
Users can:
Edit stock details, updating the backend and frontend state.
Delete stocks, removing them from both backend and frontend.
API Service (api.js):

Handles communication with the backend:
Get Stocks: Fetches the stock list.
Add Stock: Adds a new stock to the backend.
Update Stock: Modifies stock details in the backend.
Delete Stock: Removes a stock from the backend.
Backend: Spring Boot Application
The backend is the engine that powers the app. It exposes RESTful APIs for managing stock data.

1. Endpoints
HTTP Method	Endpoint	Description
GET	/api/stocks	Fetches all stocks.
POST	/api/stocks	Adds a new stock.
PUT	/api/stocks/{id}	Updates an existing stock by ID.
DELETE	/api/stocks/{id}	Deletes a stock by ID.
2. Database Schema
The database has a stocks table with the following columns:

Column	Type	Description
id	INT	Primary key (unique ID).
name	VARCHAR(255)	Stock name (e.g., Apple).
ticker	VARCHAR(10)	Stock ticker symbol.
quantity	INT	Number of shares.
buy_price	DECIMAL	Price per share at purchase.
3. Backend Components
StockController:

Handles HTTP requests (e.g., /api/stocks).
Delegates logic to the StockService.
StockService:

Contains business logic:
Interacts with StockRepository for database operations.
Validates data and handles updates.
StockRepository:

Uses JPA to simplify database interactions.
Automatically provides CRUD operations.
Example Workflow
Adding a Stock:

Frontend calls the POST /api/stocks endpoint with stock details.
The backend validates and stores the stock in the database.
Fetching Stocks:

Frontend calls the GET /api/stocks endpoint to retrieve all stocks.
The backend returns a list of stocks from the database.
Integrating Real-Time Stock Prices
1. Using an API
Use a service like Alpha Vantage to fetch live stock prices.
Example endpoint:
typescript
Copy code
GET https://www.alphavantage.co/query
?function=GLOBAL_QUOTE
&symbol=AAPL
&apikey=YOUR_API_KEY
2. Workflow
Backend fetches live prices and updates the total portfolio value dynamically.
Example Calculation:
css
Copy code
Total Value = SUM(Quantity[i] × Live Price[i])
3. Handling Rate Limits
Limit requests to the stock price API by:
Caching responses.
Fetching data only when required.
Deployment
Frontend:
Push React app to GitHub.
Deploy on Netlify or Vercel:
Connect the GitHub repo to the platform.
Configure environment variables (if needed).
Backend:
Push Spring Boot app to GitHub.
Deploy on Heroku or AWS Elastic Beanstalk:
Set up environment variables for database and API keys.
Configure a MySQL instance for the backend.

Use Swagger for backend API documentation:
Access at <Backend Deployed URL>/swagger-ui.
Evaluation Notes
Functionality: Ensure all CRUD operations work seamlessly and live prices update the total portfolio value.
UI/UX: Make the app intuitive and responsive.
Code Quality:
Modularize React components.
Follow best practices in Spring Boot (e.g., exception handling, service-repo-controller pattern).
