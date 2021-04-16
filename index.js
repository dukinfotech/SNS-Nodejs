const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
global.rootPath = path.resolve(__dirname);

app.use(express.static('assets'));
app.use(expressLayouts);

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

require('./config/routes')(app);
require('./config/database');

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});