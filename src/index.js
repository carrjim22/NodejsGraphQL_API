import express from "express";
import dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';

import schema from './graphql/schema';
import {connect} from './db';

dotenv.config();
connect();

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send("visit /graphql");
})


app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));