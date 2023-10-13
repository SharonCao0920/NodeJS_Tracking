import winston, {transports, format} from "winston";
import {DateTime} from "luxon";

const loggerLevel = ['info', 'debug','error', 'warn']

const logFormat = format.printf(({level, message}) => {
    const timestamp = DateTime.local().toUTC();
    return `time: ${timestamp} level: ${level} message: ${message}`
})

export const getLoggerInstance = () => {

    const logger = winston.createLogger({
        level: loggerLevel[0],  
        format: format.json(),
        transports: [
            new transports.Console({format:format.combine(format.colorize(), logFormat)}),
        ]
    });
    return logger;

}