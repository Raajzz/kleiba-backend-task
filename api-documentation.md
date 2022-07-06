# API Documentation for Kleiba Backend Task

## Toys

- GET `/api/v1/toy/search/:name` -> Search for a toy given "toy name"`

- GET `/api/v1/toy/:toyId` -> Get the individual toy given the ID, as there can be multiple toys with the same name, this route will GET that particular toy.

- POST `/api/v1/toy/add` -> Add a new toy

- PATCH `/api/v1/toy/:toyId` -> To modify the information of the toy.

- DELETE `/api/v1/toy/:toyId` -> To delete the particular toy.

**Note:** The above routes was written keeping in mind that the name of the toy can be repeated. This is to ensure a better user experience for the buyers as they're not introduced to unnecessary little changes here and there for the same toy and for the makers who're not required to introduce jargons to make their product name unique.

## Users

- POST `/api/v1/user/register` -> To register an user
- POST `/api/v1/user/login` -> To login