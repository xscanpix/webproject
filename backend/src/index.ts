import express      from "express";
import cors         from "cors";
import morgan       from "morgan";

const app = express();
const port = 3000; // default port to listen

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.json({
        message: 'Hello world'
    });
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );