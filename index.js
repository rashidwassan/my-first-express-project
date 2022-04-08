const express =  require('express');
const app = express();

//defining the port where the server will run
const port = 3000;

// this is the typical example of using express to serve static files
app.get('/', (req, res)=> res.send('Hello World!'))

// listening on the port, it is kind of defining on which place we can see the response.
app.listen(port, ()=> console.log('Example app listening on port ' + port))