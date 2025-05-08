# Task

##Features

-User registration and login with JWT authentication

-Public endpoint to list available activities

-Authenticated endpoint to book activities

-Authenticated endpoint to view user's bookings

-Password hashing with bcrypt

-Input validation


## installation

-npm install express mongoose dotenv cookie-parser jsonwebtoken bcryptjs

##start

-npm run dev

## Postman API test

# user
for register-
POST - http://localhost:4000/api/v1/user/register
{
    "fullname":"siraj",
    "email":"siraj@gmail.com",
    "password":"5432"
}

for login-
POST-http://localhost:4000/api/v1/user/login
{
    "email":"siraj@gmail.com",
    "password":"5432"
}

## Activities

for getting Activities
GET-http://localhost:4000/api/v1/activities

## Bookings

POST-http://localhost:4000/api/v1/bookings
{
     "activityId":"681caf037668c3772ac2123a"
}

GET-http://localhost:4000/api/v1/bookings/my-bookings

## .env       //without .env file code is not work so first fix it in code

MONGO_URI="mongodb+srv://task:task12@cluster0.4pzzmio.mongodb.net/"                        
PORT=4000

SECRET_KEY=aady

