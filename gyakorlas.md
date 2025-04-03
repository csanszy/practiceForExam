# Exam practice - TODO project

## Database

**User Table:**

- int **ID** (AI)
- varchar **Name**
- varchar **BirthDate**

**TODO Table:**

- int **ID** (AI)
- varchar **Title**
- varchar **Task**
- int **User** (It is the users id, with relation)

## Backend

- **TechStack: Node, Prisma, Javascript**
- **8 Endpoints, CRUD**

### TODO - GetAll

- **Method**: GET
- **Route**: localhost:PORT/api/todo/
- **Description:** Should return every todo from the database.

### TODO - Create

- **Method**: POST
- **Route**: localhost:PORT/api/todo/
- **Description:** Should recieve data from the request body and create a record in the database.

### TODO - Update

- **Method**: PUT
- **Route**: localhost:PORT/api/todo/:id
- **Description:** Should recieve data from the request body and update the record with the ID recieved from the request params.

### TODO - Remove

- **Method**: DELETE
- **Route**: localhost:PORT/api/todo/:id
- **Description:** Should recieve and ID from the request params and delete the record of that ID.

### USER - GetAll

- **Method**: GET
- **Route**: localhost:PORT/api/user/
- **Description:** Should return every user from the database.

### USER - Create

- **Method**: POST
- **Route**: localhost:PORT/api/user/
- **Description:** Should recieve data from the request body and create a record in the database.

### USER - Update

- **Method**: PUT
- **Route**: localhost:PORT/api/user/
- **Description:** Should recieve data from the request body and update the record with the ID recieved from the request params.

### USER - Delete

- **Method**: REMOVE
- **Route**: localhost:PORT/api/user/
- **Description:** Should recieve and ID from the request params and delete the record of that ID.

## Frontend

- **TechStack: Vue-Vuetify, Bootstrap, Javascript.**
- **App Router is forbidden!**
- **Navbar must be a Bootstrap Navbar**
- **Tables must be Vuetify Tables**
- **Everythin else is up to you! However, card components are recommended for use from Bootstrap.**
- **Everything must be responsive**
- **6 Page**

### List Page for todos

- This page must display all the todos in a vuetify table from the database using your backend.

### List Page for users

- This page must display all the users in a vuetify table from the database using your backend.

### Create Page for todos

- This page must contain a card aligned to the exact middle of the screen.
- The card must have the followings:
- - A dropdown which has all the users
- - A text input for the todo title
- - A text input for the todo description
- - A button to submit the creation of the todo

### Create Page for users

- This page must contain a card aligned to the exact middle of the screen.
- The card must have the followings:
- - A text input for the users name
- - A date input for the users birth date
- - A button to submit the creation of the user
