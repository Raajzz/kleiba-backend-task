# Kleiba Backend Task

Repository for my solution to Kleiba Backend Task
<br>

## To run
To run the application, clone the repository, run `npm i` and then `npm run start`. 
<br><br>
In addition, the application must be linked with MongoDB atlas or MongoDB compass and should be provided with a random JWT_SECRET. Create a .env file called `config.env` and add the following keys and replace with the necessary values.
<br><br>
```
MONGO_CLOUD_URI=mongodb+srv://<username>:<password>@<cluster-connection-string>.mongodb.net/database-name?retryWrites=true&w=majority
MONGO_LOCAL_URI ="mongodb://localhost:27017/<database-name>"
JWT_SECRET=""
```