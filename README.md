# Database-work
# API Integration Project

This project demonstrates the integration of APIs for user authentication and customer management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases a basic web application with user authentication and CRUD operations for customer management. It integrates with external APIs for authentication and customer data management.

## Features

- User authentication using Bearer tokens.
- Create, read, update, and delete customer operations.
- Basic UI for login, customer list, create, update, and delete.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Web browser
- Code editor (e.g., Visual Studio Code)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/api-integration-project.git
    cd api-integration-project
    ```

2. Open `index.html` in your web browser.

## Usage

1. Open `index.html` in your web browser.
2. Use the basic UI to perform login, view customer list, create a new customer, delete a customer, and update a customer.

## API Integration

### Authentication API

- **Path:** `https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp`
- **Method:** POST
- **Body:**
  ```json
  {
    "login_id": "test@sunbasedata.com",
    "password": "Test@123"
  }
  Customer API
Path: https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp
Method: POST (create), GET (get_customer_list), POST (delete and update)
Headers: Authorization: Bearer token_received_in_authentication_API_call

## Contributing
If you would like to contribute to the project, follow these steps:

Fork the project.
Create a new branch.
Make your changes and commit them.
Push to your fork and submit a pull request.
## License
This project is licensed under the MIT License.
