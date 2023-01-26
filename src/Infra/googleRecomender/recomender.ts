import { enum_Evento_Usuario } from "./enum";

const { RecommenderClient } = require('@google-cloud/recommender');
const { google } = require('googleapis');

export class Recommender {

    jsonKeyFile = 'src/assets/googleRecommender/google_recommender.json';
    parent = 'projects/1070402368417/locations/global/catalogs/default_catalog/branches/1';

    async authenticate(): Promise<any> {
        let key = require('../../../src/assets/googleRecommender/key.json');

        const recommender = google.recommender({
            version: 'v1',
            auth: new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/cloud-platform'])
        });
        return recommender;
    }

    async createProduct(myProduct) {
        try {
            let recommender = await this.authenticate();

            recommender.projects.locations.catalogs.products.create({
                parent: 'projects/1070402368417/locations/global/catalogs/default_catalog/branches/1',
                product: myProduct
            }).then(response => {
                console.log(response.data);
            }).catch(console.error);
        }
        catch (e) {
            console.log('e :>> ', e);
            throw new Error(e);
        }
    }


    async setUserEvent(data: any) {
        const client = new RecommenderClient();

        const projectId = '1070402368417';
        const location = 'global';
        let type = this.getType(data.type);

        const request = {
            parent: `projects/${projectId}/locations/${location}`,
            recommendationId: type,
            recommendation: {
                userId: data.userId,
            },
        };

        const [response] = await client.createRecommendation(request);
        console.log(`Created recommendation: ${response.name}`);
    }

    async getRecommendation(userId) {
        const client = new RecommenderClient();

        const projectId = '1070402368417';
        const location = 'global';


        const request = {
            parent: `projects/${projectId}/locations/${location}`,

            recommendation: {
                userId: userId,
            },
        };

        const [response] = await client.getRecommendation(request);
        console.log(`get recommendation: ${response.name} `);
    }




    getType(type: number) {
        try {
            switch (type) {
                case 1:
                    return enum_Evento_Usuario.adicionar_a_carrito
                case 2:
                    return enum_Evento_Usuario.busqueda
                case 3:
                    return enum_Evento_Usuario.compra_completa
                case 4:
                    return enum_Evento_Usuario.promocion_no_ofertada
                case 5:
                    return enum_Evento_Usuario.vista_carrito_compra
                case 6:
                    return enum_Evento_Usuario.vista_categoria
                default:
                    return enum_Evento_Usuario.busqueda;
            }
        } catch (error) {

        }
    }


}

