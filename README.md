# React Test Project  

## Overview  
This project is a simple React application that fetches and displays posts from an API. It includes pagination, dynamic routing, and state management to enhance the user experience.  

## Features  

### 1. Routing  
- `/` (Home Page): Contains navigation to the `/posts` page.  
- `/posts` (Posts Page): Fetches and displays all posts in a paginated format.  
- `/add-post` (Add Post Page): Allows users to submit a new post and display it in the posts list.  

### 2. Fetching and Displaying Posts  
- Retrieves all posts from an API and stores them in the application's context.  
- Displays posts using a reusable **Card Component**.  

### 3. Adding a New Post  
- Uses a form to submit a new post, which is added to the context and displayed in the posts list.  
- Shows a **"Loading..."** text while the API request is in progress.  

## API Endpoints  
- **Get all posts:** [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)  
- **Post a new post:** [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/)  

## Installation & Running the Project  
```sh
yarn install
yarn dev
```

> **Note:** The application uses React Context to manage the posts list.  

## Final Output  
Refer to the **project_00000** video available in the project folder to see the expected output.  