import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export class SchemaValidator {
  public static validate(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const validation = schema.validate(req.body);

        if (!validation.error) {
          next();
        } else {
          res
            .status(400)
            .send({
              validation: `${validation.error.details
                .at(0)
                ?.path.at(0)} must be set`,
            });
        }
      } catch (error) {
        res.status(500).send({ message: "Internal server error" });
      }
    };
  }
}
