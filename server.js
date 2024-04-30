const express = require('express');

// Helper method for generating unique ids
//const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = 3001;

const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//Gathering data
app.use('/', htmlRoutes);
//app.use('/api', apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
