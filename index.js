import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();

const PORT = 2900;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (request, response)=>{
    console.log("[TEST]");
    response.send("Hello To the Home Page");
})

app.listen(PORT, ()=>{

    console.log(`Server running on PORT = https://localhost:${PORT}`);

})