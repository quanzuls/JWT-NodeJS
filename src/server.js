import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api"
import configCors from './config/cors';


import bodyParser from 'body-parser';
// import connection from "./config/connectDB";


const app = express();
const PORT = process.env.PORT || 8080;

//config CORS
configCors(app);


//config view engine
configViewEngine(app);

//config middle ware body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connect DB
// connection();

//init web routes
initWebRoutes(app);
//init api routers
initApiRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT backend is running on the port: " + PORT);

})