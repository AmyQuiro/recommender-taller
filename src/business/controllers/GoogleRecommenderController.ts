import { Request, Response } from 'express';
import { Recommender } from '../../Infra/googleRecomender/recomender';

import { FailureMsgResponse, SuccessResponse } from '../helper/ApiResponse';

export class GoogleRecommenderController {
  constructor() { }

  async createProduct(req: Request, res: Response): Promise<any> {
    try {
      let recom = new Recommender();
      let response = await recom.createProduct();


      let responseText = 'Transaccion realizada exitosamente';

      return new SuccessResponse(responseText, response).send(res);
    } catch (ex) {
      let msg = ex.message ? ex.message : ex;
      return new FailureMsgResponse(msg).send(res);
    }
  }


}
