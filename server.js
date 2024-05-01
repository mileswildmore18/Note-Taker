const express = require('express');

// Helper method for generating unique ids
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;


//Middleware working as the center piece of the server side
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//Gathering data
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//Start the server on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
