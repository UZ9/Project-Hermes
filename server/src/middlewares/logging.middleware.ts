// Logging module
import { createLogger, transports, format } from 'winston';

const logger = createLogger({
    level: 'debug',
    format: format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        // Pipe errors to error file
        new transports.File({ filename: './logs/error.log', level: 'error'}),

        // Pipe everything else to combined.log
        new transports.File({ filename: './logs/combined.log' })
    ]
})

// If the program is currently not in production
if (process.env.NODE_ENV !== 'production') {
    // Print logs to console
    logger.add(new transports.Console({
        format: format.simple()
    }))
}

export { logger };