# FoodDel

FoodDel is a MERN-based food delivery project with three separate apps in one workspace:

- Frontend: customer-facing ordering site
- Admin: restaurant/admin dashboard for managing food items and orders
- Backend: Express and MongoDB API that powers authentication, menu data, cart data, and order endpoints

The project is built around a simple food ordering flow:

1. An admin adds food items with images, description, price, and category.
2. The frontend loads the menu from the backend and lets users browse items.
3. Logged-in users can add items to their cart and view totals.
4. The checkout and order route are scaffolded in the backend, with the order controller still incomplete.

## Project Structure

The workspace is split into these folders:

- admin: Vite React app for the admin panel
- frontend: Vite React app for the customer experience
- backend: Express API, MongoDB models, controllers, routes, and uploads

### Frontend

The frontend app includes:

- Home page with menu browsing
- Cart page for selected items
- Place order page for checkout flow
- Login popup and shared navbar/footer components
- Global cart and food data stored in a React context

### Admin Panel

The admin app includes:

- Add page for creating new food items
- List page for viewing and removing food items
- Orders page for handling incoming orders
- Sidebar and navbar navigation

### Backend

The backend exposes these major route groups:

- /api/food for adding, listing, and removing food items
- /api/user for register and login
- /api/cart for cart operations
- /api/order for order placement

Images uploaded for food items are served from /images and stored in the backend uploads folder.

## Tech Stack

- React 19
- Vite
- React Router
- Axios
- Express 5
- MongoDB with Mongoose
- JWT authentication
- bcrypt password hashing
- Multer for image uploads
- Stripe is included in the backend dependencies for payment integration work

## Local Setup

### Prerequisites

- Node.js installed
- MongoDB running locally

### Install Dependencies

Install packages separately in each app folder:

    cd backend
    npm install

    cd ..\frontend
    npm install

    cd ..\admin
    npm install

### Run the Backend

The backend runs on port 4000 and connects to:

    mongodb://127.0.0.1:27017/FoodDel

Start it with:

    cd backend
    npm run server

### Run the Frontend

Start the customer app with:

    cd frontend
    npm run dev

### Run the Admin Panel

Start the admin app with:

    cd admin
    npm run dev

## Notes

- The backend currently has a placeholder implementation in the order controller.
- Cart and login flows expect a token-based authenticated session.
- The frontend loads food data from the backend on startup.

## Folder Overview

- admin/src/pages/Add: add food form
- admin/src/pages/List: food management view
- admin/src/pages/Orders: order management view
- frontend/src/pages/Home: customer landing page
- frontend/src/pages/Cart: cart view
- frontend/src/pages/PlaceOrder: checkout page
- backend/controllers: business logic for food, user, cart, and order actions
- backend/models: MongoDB schemas
- backend/routes: API route definitions
- backend/uploads: uploaded food images

## Status

This workspace already contains the core foundation for a food delivery platform. The menu, cart, authentication, and admin food management flows are present, while the order placement logic still needs completion.
