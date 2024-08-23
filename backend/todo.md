
Refactor to add firstName and lastName attributes and any others you want. 
Now, try to refactor your code to add this simple change.

Update your server files to add firstName and lastName attributes to a User in your database. Make sure to update your migration and model files and your route handlers to reflect this change!

Confirm that your POST /api/session and your POST /api/users endpoints return the user in the following format on successful login/signup:

{
  user: {
    id,
    firstName,
    lastName,
    email,
    userName
  }
}
Confirm that your GET /api/session endpoint returns the user in the following format if there is a logged in user:

{
  user: {
    id,
    firstName,
    lastName,
    email,
    userName
  }
}
Confirm that your GET /api/session endpoint returns the following if there is no logged in user:

{
  user: null
}
Next Steps
Awesome work! You just finished setting up the entire backend for this project! In the next part, you will deploy the application to Render.

