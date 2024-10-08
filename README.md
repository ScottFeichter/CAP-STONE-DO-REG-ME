# Do Reg Mi

## Database Schema Design

![db-schema]

[db-schema]: ./admin/schema/Do-Reg-Mi-Schema-3.png

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required"
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden"
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/session
  * Body: none

* Successful Response when there is a logged in user
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

* Successful Response when there is no logged in user
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": null
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/session
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials"
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/users
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 500
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 500
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```

# DEPARTMENTS

## EMPLOYEE DEPARTMENTS

### Get all Employee Departments

Returns all Employee Departments.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/employeeDepartments
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Employee Departments": [
        {
          "id": 3,
          "name": "Teachers",
          "url": null,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```

### Get details of an Employee Department from an id

Returns the details of a spot specified by its id.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/employeeDepartments/:employeeDepartmentId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "principles",
      "url": null,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error response: Couldn't find an Employee Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Employee Department could not be found - please try a different id"
    }
    ```

### Create an Employee Department

Creates and returns a new Employee Department.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/employeeDepartments
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "principles",
      "url": "image url",
    }

    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Principles",
      "url": "image url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }

    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "name": "Employee Department name must be unique. Please try a different name.",
        "url": "URL must unique. Please try a different URL or leave blank.",
      }
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid Data", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "name": "Employee Department name must be alpha-numeric only. Please remove special characters.",
        "url": "URL must be a valid URL or blank.",
      }
    }
    ```

### Add an Image to an Employee Department based on the Employee Department's id

Create and return a new image for an Employee Department specified by id.

* Require Authentication: true
* Require proper authorization: User must be admin or super
* Request
  * Method: POST
  * URL: /api/employeeDepartments/:employeeDepartmentId/images
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "url": "image url",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Principles",
      "url": "image url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error response: Couldn't find an Employee Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Employee Department couldn't be found. Please try a different name or id."
    }
    ```

### Edit a Employee Department

Updates and returns an existing Employee Department.

* Require Authentication: true
* Require proper authorization: User must be admin or super
* Request
  * Method: PUT
  * URL: /api/employeeDepartments/:employeeDepartmentId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Principles",
      "url": "image url",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Principles",
      "url": "image url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        {
          "id": 1,
          "name": "Employee Department name must be alpha-numeric only. Please remove specialy characters.",
          "url": "URL is not valid. Please try again.",
        }

      }
    }
    ```

* Error response: Couldn't find an Employee Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Employee Department couldn't be found. Please try a different id."
    }
    ```

### Delete a Employee Department

Deletes an existing Employee Department.

* Require Authentication: true
* Require proper authorization: Employee Department must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/employeeDepartments/:employeeDepartmentId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find an Employee Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Employee Department couldn't be found. Please try a different id."
    }
    ```


___


## ACADEMIC DEPARTMENTS

### Get all Academic Departments

Returns all the Academic Departments.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/academicDepartments
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Academic Departments": [
        {
          "id": 3,
          "name": "Plucked Strings",
          "chair": null,
          "imageURL": null,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```

### Get details of an Academic Department from an id

Returns the details of an Academic Deparment specified by its id.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/academicDepartments/:academicDepartmentsId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Voice",
      "chair": null,
      "imageURL": null,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error response: Couldn't find an Academic Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Academic Department could not be found - please try a different id"
    }
    ```

### Create a Academic Department

Creates and returns an new Academic Department.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/academicDepartments
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "Voice",
      "chair": "Mariah Carey",
      "imageURL": "imageURL url",
    }

    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Voice",
      "chair": "Mariah Carey",
      "imageURL": "imageURL url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }

    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "name": "Academic Department name must be unique. Please try a different name.",
        "chair": "Academic Department chair must be alphabetic only. Please remove numbers or special characters.",
        "imageURL": "Academic Deparment image URL must unique. Please try a different URL or leave blank.",
      }
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid Data", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "name": "Academic Department name must be alpha-numeric only. Please remove special characters.",
        "chair": "Academic Department chair must be alphabetic only. Please remove numbers or special characters.",
        "imageURL": "Image URL must be a valid URL or blank.",
      }
    }
    ```

### Add an imageURL to a Academic Department based on the Academic Department's id

Create and return a new imageURL for an Academic Department specified by id.

* Require Authentication: true
* Require proper authorization: User must be admin or super
* Request
  * Method: POST
  * URL: /api/academicDepartments/:academicDepartmentsId/images
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "imageURL": "imageURL url",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Voice",
      "chair": null,
      "imageURL": "imageURL url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error response: Couldn't find an Academic Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Academic Department couldn't be found. Please try a different name or id."
    }
    ```

### Edit a Academic Department

Updates and returns an existing Academic Department.

* Require Authentication: true
* Require proper authorization: User must be admin or super
* Request
  * Method: PUT
  * URL: /api/academicDepartments/:academicDepartmentsId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Voice",
      "chair": "Luciano Pavoratti",
      "imageURL": "imageURL url",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Voice",
      "chair": "Luciano Pavoratti",
      "imageURL": "imageURL url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        {
          "id": 1,
          "name": "Academic Department name must be alpha-numeric only. Please remove specialy characters.",
          "chair": "Academic Department chair must be alphabetic only. Please remove numbers or special characters.",
          "imageURL": "URL is not valid. Please try again.",
        }

      }
    }
    ```

* Error response: Couldn't find an Academic Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Academic Department couldn't be found. Please try a different id."
    }
    ```

### Delete a Academic Department

Deletes an existing Academic Department.

* Require Authentication: true
* Require proper authorization: Academic Department must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/academicDepartments/:academicDepartmentsId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find a Academic Department with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Academic Department couldn't be found. Please try a different id."
    }
    ```



___






---
