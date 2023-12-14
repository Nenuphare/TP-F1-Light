The project is to redo a timer that way, when all light flash, then you click on the page, and there will be a timer that indication your reaction time.

The important part of this project is the development of the API, that will be used to access the data concerning the user timing.
The API will be able to register and login user, and be able to create the time and keep it in the database.
The access to the data will need a JWT key, that will be used to authenticate the user, and grant access to authaurized users.

.env will be needed to create the JWT key as thefollowing variable: JWT_KEY = yourkey
Do not deploy your .env on github.