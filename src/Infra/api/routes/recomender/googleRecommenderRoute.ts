import { googleRecommenderController } from '../../../../business/controllers';
import { Router } from 'express';
import asyncHandler from '../../../utils/asyncHandler';

var googleRecommederRoute = Router();

googleRecommederRoute.post(
    '/createProduct',
    asyncHandler(async (req, res) => {
        googleRecommenderController.createProduct(req, res);
    }),
);

export { googleRecommederRoute };
