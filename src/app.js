const express = require('express');
const path = require('path');
const app = express();

//Configure
port = process.env.PORT;
if (!port) { port = 3000; }



// Catch all static
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Listening on port ' + port);
});