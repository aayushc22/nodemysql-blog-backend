Node.js MySQL Blog Backend
This repository contains the backend code for a simple blog application built with Node.js and MySQL. It provides RESTful APIs for managing blog posts, users, authentication, and more.

Prerequisites
Before running this application, make sure you have the following installed:

Node.js
MySQL Server
Installation
Clone the repository:


git clone https://github.com/ayushtya9i/nodemysql-blog-backend
Navigate to the project directory:


cd nodejs-mysql-blog-backend
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the root directory and define the following variables:

Set up environment variables:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=blog_database
PORT=3000
Run the database migrations:


npx sequelize-cli db:migrate
Start the server:

npm start


Usage
The server will be running at http://localhost:3000 by default.
Use the provided RESTful APIs to manage blog posts, users, and authentication.
Dependencies
bcryptjs@2.4.3
body-parser@1.20.2
dotenv@16.4.5
express@4.19.2
fastest-validator@1.17.0
jsonwebtoken@9.0.2
multer@1.4.5-lts.1
mysql2@3.9.3
sequelize@6.37.2


To install the dependencies listed, you can use npm (Node Package Manager

npm install bcryptjs@2.4.3 body-parser@1.20.2 dotenv@16.4.5 express@4.19.2 fastest-validator@1.17.0 jsonwebtoken@9.0.2 multer@1.4.5-lts.1 mysql2@3.9.3 sequelize@6.37.2



To install Sequelize and its dependencies, you can use the following npm 
npm install sequelize@6.37.2 mysql2@3.9.3

