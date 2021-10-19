const express = require('express');
const fs = require('fs');

const app = express()
const PORT = process.evn.port || 8000;

fs.readdirSync('./routes').map( route => app.use('/api', require(`./routes/${route}`)));


app.listen(PORT,  () => console.log(`Server is up on ${PORT}`));
