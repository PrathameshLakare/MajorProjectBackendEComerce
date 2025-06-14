# E-Commerce Backend

This is the backend server for an e-commerce web application built with **Node.js**, **Express.js**, and **MongoDB**. It provides RESTful APIs for managing products, categories, cart, wishlist, user addresses, and orders.

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

---

## Quick Start

### 🚀 Running the Server

```bash
# Clone project
git clone https://github.com/PrathameshLakare/MajorProjectBackendEComerce.git

# Install dependencies
npm install

# Start the server
node api/index.js

```

### 🔑 Environment Variables

Create a `.env` file in the root and add:

MONGODB=your_mongodb_connection_string

---

## API Reference

### **GET /api/products**<br>

List all products<br>
Sample Response:<br>
`[{ _id, productImg, productName, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }, …]`

---

### **GET /api/products/:productId**<br>

Get details for one product<br>
Sample Response:<br>
`{ _id, productImg, productName, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }`

---

### **POST /api/products**<br>

Create a new product<br>
Sample Response:<br>
`{ _id, productImg, productName, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }`

---

### **GET /api/categories**<br>

List all categories<br>
Sample Response:<br>
`[{ _id, categoryName, categoryImg }, …]`

---

### **GET /api/categories/:categoryId**<br>

Get details for one category<br>
Sample Response:<br>
`{ _id, categoryName, categoryImg }`

---

### **POST /api/categories**<br>

Create a new category<br>
Sample Response:<br>
`{ _id, categoryName, categoryImg }`

---

### **GET /api/wishlist**<br>

List all wishlist items<br>
Sample Response:<br>
`[{ _id, productId, productImg, productName, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }, …]`

---

### **POST /api/wishlist**<br>

Add a product to the wishlist<br>
Sample Response:<br>
`{ _id, productId, productImg, productName, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }`

---

### **DELETE /api/wishlist/:id**<br>

Remove a product from the wishlist by productId<br>
Sample Response:<br>
`{ message, product: { _id, ... } }`

---

### **GET /api/cart**<br>

List all items in the cart<br>
Sample Response:<br>
`[{ _id, productId, productImg, productName, productQuantity, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }, …]`

---

### **POST /api/cart**<br>

Add a product to the cart<br>
Sample Response:<br>
`{ _id, productId, productImg, productName, productQuantity, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }`

---

### **PUT /api/updateCart/:id**<br>

Update quantity or details of a cart item by productId<br>
Sample Response:<br>
`{ _id, productId, productImg, productName, productQuantity, productPrice, productDetails, productCategories, productRating, createdAt, updatedAt }`

---

### **DELETE /api/cart/:id**<br>

Remove a product from the cart by productId<br>
Sample Response:<br>
`{ message, product: { _id, ... } }`

---

### **GET /api/user/address**<br>

List all user addresses<br>
Sample Response:<br>
`[{ _id, houseNumber, streetName, landmark, city, state, country, postalCode }, …]`

---

### **POST /api/user/address**<br>

Add a new address<br>
Sample Response:<br>
`{ _id, houseNumber, streetName, landmark, city, state, country, postalCode }`

---

### **POST /api/user/address/:id**<br>

Update an address by ID<br>
Sample Response:<br>
`{ _id, houseNumber, streetName, landmark, city, state, country, postalCode }`

---

### **DELETE /api/user/address/:id**<br>

Delete an address by ID<br>
Sample Response:<br>
`{ message, address: { _id, ... } }`

---

### **POST /api/order/placed**<br>

Place an order using cart data<br>
Sample Response:<br>
`{ _id, products: [{ productId, productImg, productName, productQuantity, productPrice, productDetails, productCategories, productRating }], totalAmount, shippingAddress, createdAt, updatedAt }`

---

### **GET /api/order/:id**<br>

Get order details by order ID<br>
Sample Response:<br>
`{ _id, products: [{ productId, productImg, productName, productQuantity, productPrice, productDetails, productCategories, productRating }], totalAmount, shippingAddress, createdAt, updatedAt }`

## Contact

For bugs or feature requests, please reach out to prathameshlakare001@gmail.com
