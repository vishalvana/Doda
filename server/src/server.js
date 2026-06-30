import app from "./app.js";

import { env } from "./config/env.js";

import { connectDB } from "./config/db.js";

const startServer = async () => {

    await connectDB();

    app.listen(env.PORT, () => {

        console.log(`Server Started On Port ${env.PORT}`);

    });

};

startServer();