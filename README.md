# Urban Aura

Urban Aura is a full-stack e-commerce web application that provides users with a seamless online shopping experience. The platform allows users to browse products, create accounts, manage carts, place orders, and securely authenticate using JWT-based authentication.

---

##  Features

### User Authentication

* User Registration
* User Login
* JWT-Based Authentication
* Protected Routes

### Product Management

* View Available Products
* Product Details Page
* Add Products (Admin/Test Route)

### Shopping Cart

* Add Products to Cart
* Update Product Quantity
* View Cart Items
* Remove Products from Cart

### Order Management

* Place Orders
* Order Summary
* View User Orders

### User Profile

* View User Information
* Manage Account Details

---

##  Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js
* Helmet
* CORS

### Database

* MySQL

---

##  Project Structure

### Frontend

```text
urban-aura-frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── context/
│   └── assets/
│
├── public/
└── package.json
```

### Backend

```text
Urban-Aura/
│
├── controller/
├── middleware/
├── routes/
├── db/
├── server.js
└── package.json
```

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Urban-Aura.git
```

---

### 2. Backend Setup

Navigate to backend folder:

```bash
cd Urban-Aura
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=urban_aura

JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Navigate to frontend folder:

```bash
cd urban-aura-frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

##  API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Products

```http
GET  /api/products
POST /api/products/add
```

### Cart

```http
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update
DELETE /api/cart/remove
```

### Orders

```http
POST /api/orders/place
GET  /api/orders
```

---

##  Security Features

* Password Hashing using bcrypt.js
* JWT Token Authentication
* Protected API Routes
* Helmet Security Middleware
* CORS Configuration

---

##  Screens

* Home Page
* Product Listing Page
* Product Details Page
* Login & Registration Page
* Shopping Cart
* Checkout Page
* User Profile

<img width="1920" height="1080" alt="Screenshot 2026-06-19 203343" src="https://github.com/user-attachments/assets/01eb6287-276a-496c-8fb0-d34dcfa41680" />

---

##  Future Enhancements

* Payment Gateway Integration
* Product Search & Filtering
* Wishlist Functionality
* Admin Dashboard
* Product Reviews & Ratings
* Order Tracking
* Responsive Mobile Optimization

---

##  License

This project is developed for educational and learning purposes.

---

