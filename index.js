const express = require('express')

const app = express()

//basic routing
app.get('/', (req, res) => {res.send("hello world")})



//PORT
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`server started on http://localhost:${PORT}`));