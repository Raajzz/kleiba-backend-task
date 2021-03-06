# API Documentation for Kleiba Backend Task

## Toys

- GET `/api/v1/toy/search/:name` -> Search for a toy given "toy name". This query performs a fuzzy search which results in all those which matches with the name. This was made as names of the toys can be repeated. Works without registration and login.

- GET `/api/v1/toy/:toyId` -> Get the individual toy given the ID, as there can be multiple toys with the same name, this route will GET that particular toy. Works without registration and login.

- POST `/api/v1/toy/add` -> Add a new toy. User needs to be logged in.

- PATCH `/api/v1/toy/:toyId` -> To modify the information of the toy provided the ID of the toy. User needs to be logged in.

- DELETE `/api/v1/toy/:toyId` -> To delete the particular toy provided the Id of the toy. User needs to be logged in.

**Note:** The above routes was written keeping in mind that the name of the toy can be repeated. This is to ensure a better user experience for the buyers as they're not introduced to unnecessary little changes here and there for the same toy and for the makers who're not required to introduce jargons to make their product name unique. 


## Users

- POST `/api/v1/user/register` -> To register an user

- POST `/api/v1/user/login` -> To login

- GET `/api/v1/user/logout` -> To logout an user