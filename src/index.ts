require("dotenv").config();
import "module-alias/register";
require("./require");
import log from "$helpers/log";
import { rateLimit } from "express-rate-limit";
import express from "express";
import { createServer } from "http";
import { createConnection } from "typeorm";
import logRequest from "$middlewares/logRequest";
import { rootRoute } from "$helpers/route";
import config from "$config";

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 400,
  message: `{
        "sucess": false,
        "errorCode": "Maximum_Request",
        "errorMessage": "Maximum_Request",
        "devMessage": "To many request"
    }`,
});

const logger = log("Index");

const app = express();
const http = createServer(app);

createConnection()
  .then(() => {
    app.use(limiter);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(logRequest);

    app.use(rootRoute);

    // initializations();

    // initSocket(http)

    http.listen(config.SERVER.PORT, () => {
      logger.info(
        `Express server started on port ${config.SERVER.PORT}. Enviroment: ${config.SERVER.NODE_ENV}`
      );
    });
  })
  .catch((error) => {
    logger.error(error);
  });
