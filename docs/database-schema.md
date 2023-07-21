# Database Schema

## Users Table

The "users" table stores information about the users who sign up for the Coder News web app.

| Column Name | Data Type | Constraints | Description                                     |
| ----------- | --------- | ----------- | ----------------------------------------------- |
| id          | VARCHAR   | PRIMARY KEY | Unique identifier for each user.    |
| firstName   | VARCHAR   | NOT NULL    | User's first name.                              |
| lastName    | VARCHAR   | NOT NULL    | User's last name.                               |
| userName    | VARCHAR   | UNIQUE, NOT NULL | User's unique username.                  |
| email       | VARCHAR   | UNIQUE, NOT NULL | User's unique email address.              |
| password    | VARCHAR   | NOT NULL    | Hashed password for user authentication.        |

## Posts Table

The "posts" table contains information about the postsshared by users.

| Column Name | Data Type | Constraints | Description                                     |
| ----------- | --------- | ----------- | ----------------------------------------------- |
| id          | VARCHAR   | PRIMARY KEY | Unique identifier for each post.   |
| title       | VARCHAR   | NOT NULL    | Title of the resource.                 |
| url         | VARCHAR   | NOT NULL    | URL to the resource.                   |
| userId      | VARCHAR   | NOT NULL    | Foreign key referencing the user who submitted the post. |
| postedAt    | INTEGER | NOT NULL    | Timestamp for when the post was submitted.       |

### Foreign Key Constraint
- The `userId` column in the `posts` table is a foreign key that references the `id` column in the "users" table.
## SQLite Queries

### users table
```sqlite
    CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    userName VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);
```
### posts table 
```sqlite
    CREATE TABLE posts (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    userId VARCHAR UNIQUE NOT NULL,
    postedAt INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES users (id)
);

```