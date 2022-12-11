import { Response } from "express";

export default class Controller {
    protected Ok(res: Response, returnData: object) {
        return res.status(200).json(returnData)
    }

    protected BadRequest(res: Response) {
        return res.status(400).send()
    }
}
