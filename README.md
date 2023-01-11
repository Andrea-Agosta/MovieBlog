# HackDay Movie Application

This application was created during a 24-hour HackDay event in Salt, I used Node.js, Express, Axios, React, Bootstrap, and MongoDB. The main goal of this application is to allow users to view, rate and comment movies and serials by fetching data from the rapidapi Movies and Serials Torrent API. 

## Backend
- The backend was created using Node.js and Express framework,  Axios is used to fetch movie and serial torrent data from the [RapidAPI Movies and Serials Torrent](https://rapidapi.com/chenziera-6tZd0YRxmz/api/movies-and-serials-torrent/) API.
- The comments made by users are saved in a MongoDB database, which was containerized using Docker for easy deployment.

## Frontend
- The frontend was developed using React with Bootstrap for layout and styling.
- The application displays a list of movies and serials, which users can click on to view more details about the film, including its title, description, and the option to rate and comment on the film. 
- React Router dom is used to handle routing between different pages of the application.

## Features to be Implemented
- Implement login functionality with the backend to ensure that only registered users can rate and comment on the films.
- A logic for handling user ratings and ensuring that users can only rate a movie or serial once.
- A user dashboard to display a user's comments and ratings.

## How to Run
1. Clone the repository: `git clone https://github.com/Andrea-Agosta/MovieBlog.git`
2. Navigate to the directory `cd ./movie_blog_server`
3. Install dependencies: `npm install`
4. Start the backend server: `npm start`
5. Open a new tab on your terminal and navigate to the directory `cd ./movie_blog_client`
6. Install dependencies: `npm install`
7. Start the frontend: `npm start`
8. Open a web browser and navigate to `http://localhost:3000`