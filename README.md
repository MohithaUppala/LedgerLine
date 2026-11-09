# LedgerLine

LedgerLine is a money movement system that ensures every transaction is secure, traceable, and balanced using a reliable ledger.

## Project Status

🚧 Project Started

This repository is being developed as part of the **Snovasys Fresher Hiring Challenge 2026**.

The project will be developed incrementally with regular Git commits.

## Progress

### 1 - Initial Project Setup ✅

Completed:
- Spring Boot project setup
- PostgreSQL database configuration
- Spring Security configuration
- Database connection established
- Test API (/test) created and verified
- Initial Git commit completed

Status:
✔ Backend running successfully on localhost:8080

# Phase 2 - Database Design

## Completed

Created JPA Entity classes

- User
- Transaction
- Category
- Budget
- Goal

Configured Hibernate for automatic table creation.

## Phase 1 - Authentication ✅

### Features Implemented

- User Registration API
- User Login API
- User Logout API

### API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Authenticate user |
| POST | /api/users/logout | Logout user |

### Technologies Used

- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven

### Current Status

✅ Phase 1 Completed


# LedgerLine

A personal finance and budget management application built using:

## Tech Stack
- Frontend: React + Vite
- Backend: Spring Boot
- Database: MySQL

## Features
- View Budgets
- Add Budget
- Update Budget
- Delete Budget
- REST API Integration

## Project Structure
LedgerLine/
├── frontend/
├── backend/

## Run Project

Backend
./mvnw spring-boot:run

Frontend
npm install
npm run dev

Backend:
http://localhost:8080

Frontend:
http://localhost:5173
