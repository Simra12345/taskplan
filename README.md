# taskplan
# Task Management Application

A simple Task Management web application built using **Java, Spring Boot, MySQL, HTML, CSS, and JavaScript**.  
The application supports **User Authentication (Signup/Login)** and **Task CRUD operations**.

---

## 🛠 Tech Stack

### Backend
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)



### 1️⃣ Prerequisites
- Java JDK 17 installed
- Maven installed
- MySQL Server running
- MySQL Workbench (optional)
- Git installed



### 2️⃣ Database Setup

1. Open MySQL Workbench
2. Create database:
```sql
CREATE DATABASE taskflow_db;



 Brief Explanation of the Approach

The application is developed using a **simple and modular approach** following standard backend and frontend practices.

- The backend is built using **Spring Boot** with a layered architecture:
  - **Entity layer** for database models
  - **Repository layer** for database operations using Spring Data JPA
  - **Controller layer** to expose REST APIs

- **MySQL** is used as the database, and Hibernate automatically manages table creation and updates.

- User authentication is implemented using basic **Signup and Login APIs**.
  - During login, user credentials are validated directly from the database.

- Task management functionality is implemented using **CRUD REST APIs**:
  - Create, Read, Update, and Delete tasks.

- The frontend is built using **HTML, CSS, and JavaScript**.
  - JavaScript **Fetch API** is used to connect the frontend with backend REST APIs.
  - The UI is kept simple, clean, and easy to use to focus on functionality.

This approach ensures the application is easy to understand, maintain, and demonstrate during evaluation.
