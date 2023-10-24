# Todo List APP

This is a full stack mobile application - Todo List - Android Club FFCS Final Project. 

NOTE: The backend API for this project is presenet in a separate repository - https://github.com/gauthking/actodo-api-service

## Members & Collaborators
[![karthik](https://img.shields.io/badge/Karthik-1DA1F2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/darkpanther25)
[![karthik](https://img.shields.io/badge/Chiranjeev-1DA1F2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/chiranjeev13)

## Tech Stack and Features

- Frontend - React Native
- Backend API - Express JS
- Database - MongoDB Atlas - NoSQL Collections
- Number of Screens - Home Page, Create Todo Page, View Todo Page, Update Todo Page.
- Design Inspiration - Simple and Minimal as Explained in the FFCS Tutorials 😉
## Run Locally

Clone the project

```bash
  git clone https://github.com/gauthking/actodo-api-service
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

if expo not installed then,

```bash
  npm i -g expo
```


  
## API Info 

Deployed Link - https://todo-api-7cnt.onrender.com

#### Get all Todos

```http
  GET /api/todos/get
```

#### Post Todo

```http
  POST /api/todos/post
```

| Req Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `todoName`      | `string` | **Required**. Name of the todo|
| `todoDescription`      | `string` | **Required**. Desc of the todo|

#### Update Todo

```http
  POST /api/todos/update/:id
```

| Req Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the todo to be updated|

#### Delete Todo

```http
  POST /api/todos/delete/:id
```

| Req Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the todo to be deleted|


## Implementation Screenshots and Videos 🚀

### Home Screen

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/b54e3196-1f49-4179-be2d-bc6e35c4d3cf)

### Update Todo Screen

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/69e4427e-6278-49a6-9c66-8cab9e8ebd76)

### View Todo Page

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/5feccc3b-e56f-4c99-ad0a-737f48c24119)

### Create Todo Page

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/f2988709-1f03-4e3e-85f9-33092b0f1a88)


