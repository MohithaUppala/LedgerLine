# PROMPTS.md

### Task
Started the LedgerLine project from scratch because the source code link provided in the problem statement returned a GitHub 404 error.

### Prompt
I asked ChatGPT how to start the project correctly while maintaining proper Git commit history, README.md, and PROMPTS.md as required in the challenge instructions.

### AI Response
The AI suggested:
- Create a new Git repository.
- Create README.md.
- Create PROMPTS.md.
- Commit each meaningful milestone instead of one final commit.

### What was wrong
The AI assumed the starter project was available. However, the starter repository mentioned in the problem statement could not be accessed because the GitHub link returned a 404 error.

### What I did instead
I created a new repository locally and began building the project from scratch while documenting every development step and maintaining commit history.

# Prompt History

## Prompt 1

Prompt:
How do I connect Spring Boot with PostgreSQL?

AI Response:
Configured datasource properties in application.properties.

Changes Made:
Updated application.properties with PostgreSQL credentials.

Result:
Database connected successfully.

---

## Prompt 2

Prompt:
How do I disable Spring Security login page?

AI Response:
Created SecurityConfig class.

Changes Made:
Disabled form login and permitted all requests.

Result:
Application accessible without login.

---

## Prompt 3

Prompt:
How do I test whether Spring Boot is working?

AI Response:
Created a TestController with /test endpoint.

Changes Made:
Added TestController.

Result:
Verified backend using localhost:8080/test.

## Phase 2

Objective

Design database schema.

Tasks

Create

User Entity

Transaction Entity

Category Entity

Budget Entity

Goal Entity

Status

Completed

## LedgerLine Progress

Completed Phase 1 - Authentication

✔ Register API
✔ Login API
✔ Logout API

Current Tech Stack
- Spring Boot
- PostgreSQL
- Spring Data JPA
- Maven
- Postman

Database
- users table created
- Register stores user details
- Login validates email and password
- Logout endpoint implemented

# AI Prompts Used

## Prompt 1
Create a Spring Boot REST API for Budget Management.

## Prompt 2
Generate a React component that fetches budget data using Axios.

## Prompt 3
Help resolve CORS issues between React and Spring Boot.

## Prompt 4
Fix Vite native binding error on Windows.

## Prompt 5
Create a simple UI to display budget category and amount.

# Prompt History

## Prompt 9 – Complete LedgerLine Frontend Dashboard

### Objective
Develop the frontend dashboard for the LedgerLine Expense Tracker using React and Vite.

### Features Implemented
- Responsive Dashboard UI
- Navbar component
- Balance Card
- Income Card
- Expense Card
- Budget Card
- Transaction Form
- Transaction List
- Dashboard page layout
- API service integration
- Responsive design using CSS media queries

### Technologies Used
- React
- Vite
- Axios
- CSS3
- React Hooks

### Outcome
Successfully completed the frontend dashboard with reusable components and integrated backend APIs for displaying financial information.
