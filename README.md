# freeCodeCamp - Back End Development and APIs Projects

## Project 3 - URL Shortener Microservice

View project spec on freeCodeCamp - [https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice]

Live project - [https://url-shortener-microservice-3twx.onrender.com/]

## Run on your local machine

To set up and run the URL Shortener Microservice on your local machine, you'll need to follow these steps. This includes setting up the necessary dependencies, connecting to MongoDB, and running the application.

Here's a step-by-step guide:

### Step 1: Clone the Repository

First, clone the project repository to your local machine. Open a terminal and run:

```
git clone https://github.com/jake4369/url-shortener-microservice.git
cd url-shortener-microservice
```

### Step 2: Install Dependencies

Next, install the necessary dependencies. Make sure you have Node.js and npm installed. You can install the dependencies by running:

```
npm install
```

### Step 3: Set Up MongoDB

Ensure you have MongoDB installed and running on your local machine. You can download and install MongoDB from the official MongoDB website.

Once MongoDB is installed, start the MongoDB service

### Step 4: Configure Environment Variables

Create a .env file in the root directory of the project. This file will hold your environment variables, including your MongoDB connection string. Add the following content to the .env file:

```
MONGO_URI=mongodb://localhost:27017/urlshortener
PORT=3000
```

### Step 5: Run the Application

Start the application by running:

```
npm start
```

### Step 6: Test the Application

Open your web browser and go to http://localhost:3000. You should see the application running. You can test the URL shortening functionality by navigating to http://localhost:3000/api/shorturl and submitting a URL.
