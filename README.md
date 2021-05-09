# api-server


### Deployment Test
Author: Nihad Zeidan

### tests report
[Heroku Clothes](https://nihad-api-server.herokuapp.com/clothes)
[Heroku Food](https://nihad-api-server.herokuapp.com/food)
[GitHub PR]()
[GitHub Actions]()


### .env requirements
PORT - Port Number
MONGODB_URI=mongodb+srv://admin:admin00@lab04.difc8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

### Running the app
npm start


### Endpoints: `/clothes` and `/food` 


### Input Objects

{
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    availability: { type: Boolean, required: true }
}


### Tests
Unit Tests: `npm test`



UML
![UML]()

