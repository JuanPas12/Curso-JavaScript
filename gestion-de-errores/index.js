const winston = require("winston");

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

//logger.log("Hola estoy saliendo por pantalla");
logger.info("Hola este es un mensjae informativo");
logger.debug("Esto es un mensaje de debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un error");
