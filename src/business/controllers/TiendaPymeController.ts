import { Request, Response } from 'express';
import { TiendaPyme } from '../../Infra/api/routes/tiendapyme';
import { Recommender } from '../../Infra/googleRecomender/recomender';

import { FailureMsgResponse, SuccessResponse } from '../helper/ApiResponse';

export class TiendaPymeController {
  constructor() { }

  async getRecommendation(req: Request, res: Response): Promise<any> {
    try {
      let recom = new TiendaPyme();
      let response = await recom.getRecomendations(req.body);


      let responseText = 'Transaccion realizada exitosamente';

      res.send(response);
    } catch (ex) {
      let msg = ex.message ? ex.message : ex;
      return new FailureMsgResponse(msg).send(res);
    }
  }


}
