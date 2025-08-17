# MERNu

MERNu is a to-do list application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It helps users manage tasks efficiently with a clean interface, real-time updates, and task tracking features.

## Prerequisites

Before starting, ensure you have the following installed:

- **Docker**  
- **Docker Compose**  

## Installation

1. **Download the project:**  
   Clone this repository or download the `.zip` archive and extract it.

2. **Configure environment variables:**  
   If needed, modify the backend environment variables in `docker-compose.yml`. By default, it uses:
   MONGO_URI: mongodb://root:example@mongo:27017

## Running the project

Run the following command to launch the containers: docker-compose up -d  
Open your default browser at URL : <http://localhost:3000>  
Run the following command to shut down the containers: docker-compose down
