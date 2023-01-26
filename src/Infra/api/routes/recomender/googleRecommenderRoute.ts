import { googleRecommenderController, miTiendaPymeController } from '../../../../business/controllers';
import { Router } from 'express';
import asyncHandler from '../../../utils/asyncHandler';
import { TiendaPyme } from '../tiendapyme';

var googleRecommederRoute = Router();

googleRecommederRoute.post(
    '/createProduct',
    asyncHandler(async (req, res) => {
        googleRecommenderController.createProduct(req, res);
    }),
);
googleRecommederRoute.get(
    '/getRecommendations',
    asyncHandler(async (req, res) => {
        miTiendaPymeController.getRecommendation(req, res);
    }),
);


export { googleRecommederRoute };
