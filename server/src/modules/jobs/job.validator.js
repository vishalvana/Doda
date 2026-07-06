import { body } from "express-validator";

export const createJobValidator = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),

    body("company")
        .trim()
        .notEmpty()
        .withMessage("Company is required"),

    body("source")
        .trim()
        .notEmpty()
        .withMessage("Source is required"),

    body("sourceUrl")
        .trim()
        .isURL()
        .withMessage("Valid sourceUrl is required")

];